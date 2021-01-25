// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ~0.8.0;

import './Ownable.sol';
import './IERC20.sol';
import './SlmJudgement.sol';

/// @title Solomon Chargeback
/// @author Solomon DeFi
/// @notice A contract that holds ETH or ERC20 tokens until purchase conditions are met
contract SlmChargeback is Ownable {

    // Chargeback/Voting State
    enum ChargebackState {
        // Awaiting initial funds
        Inactive,
        // Initialized but awaiting SLM or ETH
        Active,
        // The chargeback process has been initiated
        VotePending,
        // Buyer received the chargeback, contract complete
        ChargebackComplete,
        // Merchant has been paid, contract complete
        MerchantPaid
    }

    IERC20 public token;

    SlmJudgement public judge;

    address public merchant;

    address public buyer;

    uint8 public discount;

    string public buyerEvidenceURL;

    string public merchantEvidenceURL;

    uint256 chargebackTime;

    uint256 disputePeriod = 7 days;

    ChargebackState public state = ChargebackState.Inactive;

    event Funded(uint256 amount);

    event ChargebackInitiated(address merchant, address indexed buyer, string evidenceURL);

    event MerchantEvidence(address merchant, address indexed buyer, string evidenceURL);

    /// Initialize the contract
    /// @param _judge Contract that assigns votes for chargeback disputes
    /// @param _token Token for ERC20 payments
    /// @param _merchant The merchant's address
    /// @param _buyer The buyer's address
    /// @param _discount Discount for transaction fee
    function initialize(
        address _judge,
        address _token,
        address _merchant,
        address _buyer,
        uint8 _discount
    ) external payable {
        require(state == ChargebackState.Inactive, 'Only initialize once');
        merchant = _merchant;
        buyer = _buyer;
        judge = SlmJudgement(_judge);
        token = IERC20(_token);
        discount = _discount;
        state = ChargebackState.Active;
    }

    /// Buyer initiated chargeback dispute
    /// @param _evidenceURL Link to real-world chargeback evidence
    function requestChargeback(string memory _evidenceURL) external {
        require(msg.sender == buyer, 'Only buyer can chargeback');
        require(bytes(_evidenceURL).length > 0, 'Evidence required');
        require(bytes(buyerEvidenceURL).length == 0, 'Evidence already provided');
        buyerEvidenceURL = _evidenceURL;
        chargebackTime = block.timestamp;
        state = ChargebackState.VotePending;
        emit ChargebackInitiated(merchant, buyer, _evidenceURL);
    }

    /// Merchant evidence of completed transaction
    /// @param _evidenceURL Link to real-world evidence
    function merchantEvidence(string memory _evidenceURL) external {
        require(msg.sender == merchant, 'Only merchant can provide evidence');
        require(bytes(_evidenceURL).length > 0, 'Evidence required');
        require(bytes(merchantEvidenceURL).length == 0, 'Evidence already provided');
        merchantEvidenceURL = _evidenceURL;
        emit MerchantEvidence(merchant, buyer, _evidenceURL);
    }

    /// Internal function for dispersing funds
    /// @param recipient Recipience of funds
    function withdraw(address recipient) internal {
        require(block.timestamp > (chargebackTime + disputePeriod), 'Cannot withdraw yet');
        if(address(token) == address(0)) {
            // TODO -- transfer fee
            payable(recipient).transfer(address(this).balance);
        } else {
            token.transfer(recipient, token.balanceOf(address(this)));
        }
    }

    /// Allow buyer to withdraw if eligible
    function buyerWithdraw() external {
        require(msg.sender == buyer, 'Only buyer can withdraw');
        require(judge.voteStatus(address(this)) == 3, 'Cannot withdraw');
        state = ChargebackState.ChargebackComplete;
        withdraw(buyer);
    }

    /// Allow merchant to withdraw if eligible
    function merchantWithdraw() external {
        require(msg.sender == merchant, 'Only merchant can withdraw');
        require(judge.voteStatus(address(this)) == 2, 'Cannot withdraw');
        state = ChargebackState.MerchantPaid;
        withdraw(merchant);
    }
}
