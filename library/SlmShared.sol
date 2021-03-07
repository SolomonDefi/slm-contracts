// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ~0.8.2;

import './Ownable.sol';
import './IERC20.sol';
import './SlmJudgement.sol';

abstract contract SlmShared is Ownable {

    IERC20 public token;

    SlmJudgement public judge;

    address internal party1;

    address internal party2;

    string internal party1EvidenceURL;

    string internal party2EvidenceURL;

    uint256 public disputeTime;

    uint256 public disputePeriod = 7 days;

    TransactionState public state = TransactionState.Inactive;

    event Funded(uint256 amount);

    // Dispute/Voting State
    enum TransactionState {
        // Awaiting initial funds
        Inactive,
        // Initialized but awaiting SLM or ETH
        Active,
        // A dispute has been initiated
        VotePending,
        // Party1 received funds, contract complete
        CompleteParty1,
        // Party received funds, contract complete
        CompleteParty2
    }

    event DisputeInitiated(address indexed party1, address indexed party2);

    event Evidence(address indexed party, string evidenceURL);

    /// Shared contract initialization
    /// @param _judge Contract that assigns votes for transaction disputes
    /// @param _token Token for ERC20 payments
    function initialize(address _judge, address _token) internal {
        require(state == TransactionState.Inactive, 'Only initialize once');
        judge = SlmJudgement(_judge);
        token = IERC20(_token);
        state = TransactionState.Active;
    }

    // Initiate a transaction dispute
    function initiateDispute() internal {
        state = TransactionState.VotePending;
        emit DisputeInitiated(party1, party2);
        disputeTime = block.timestamp;
    }

    /// Second party dispute evidence
    /// @param _evidenceURL Link to real-world evidence
    function party1Evidence(string memory _evidenceURL) internal {
        require(state == TransactionState.VotePending, 'No dispute active');
        require(msg.sender == party1, 'Invalid sender');
        require(bytes(_evidenceURL).length > 0, 'Evidence required');
        require(bytes(party1EvidenceURL).length == 0, 'Evidence already provided');
        party1EvidenceURL = _evidenceURL;
        emit Evidence(party1, _evidenceURL);
    }

    /// Second party dispute evidence
    /// @param _evidenceURL Link to real-world evidence
    function party2Evidence(string memory _evidenceURL) internal {
        require(state == TransactionState.VotePending, 'No dispute active');
        require(msg.sender == party2, 'Invalid sender');
        require(bytes(_evidenceURL).length > 0, 'Evidence required');
        require(bytes(party2EvidenceURL).length == 0, 'Evidence already provided');
        party2EvidenceURL = _evidenceURL;
        emit Evidence(party2, _evidenceURL);
    }

    /// Internal function for dispersing funds
    /// @param recipient Recipient of funds
    function withdraw(address recipient) internal {
        require(block.timestamp > (disputeTime + disputePeriod), 'Cannot withdraw yet');
        // TODO -- transfer fee
        if(address(token) == address(0)) {
            payable(recipient).transfer(address(this).balance);
        } else {
            token.transfer(recipient, token.balanceOf(address(this)));
        }
    }
}