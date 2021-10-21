// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "./Ownable.sol";
import "./SlmStakerStorage.sol";
import "./library/ERC20.sol";
import "./library/SlmJudgement.sol";

// TODO: Add back interest/reward sections + Unstaking mechanism
// TODO: Add back functions related to voting

/// @title SlmStakerManager allows users to stake SLM to become jurors and earn rewards
contract SlmStakerManager is Ownable {

    event StakedSLM(uint256 amount, uint256 beneficiary, address user);

    event UnstakeSLM(uint256 amount, uint256 beneficiary, address user);

    uint256[] public stakerPool;

    ERC20 public token;

    SlmStakerStorage public stakerStorage;
    
    SlmJudgement public judgement;

    modifier onlyOwnerOrJudgement() {
        require(msg.sender == owner || msg.sender == judgement, "Unauthorized access");
        _;
    }

    constructor(
        address tokenAddress,
        address stakerStorageAddress
    ) {
        require(tokenAddress != address(0), "Zero addr");
        require(stakerStorageAddress != address(0), "Zero addr");
        token = ERC20(tokenAddress);
        stakerStorage = SlmStakerStorage(stakerStorageAddress);
    }

    function setJudgementContract(address judgementAddress) external onlyOwner {
        require(judgementAddress != address(0), "Zero addr");
        judgement = SlmJudgement(judgementAddress);
    }

    function getStakerPool() external onlyOwnerOrJudgement {
        return stakerPool;
    }

    function stake(uint256 beneficiary, uint256 amount) public {
        address backer = msg.sender;

        uint256 unstakeCount = stakerStorage.getUnstakeCount(backer, beneficiary);
        if(unstakeCount > 0) {
            uint256 unstakeTime = stakerStorage.getUnstakedTime(backer, beneficiary, unstakeCount-1);
            uint256 unstakePeriod = stakerStorage.unstakePeriod();
            require(block.timestamp > unstakeTime + unstakePeriod, "Unstake wait period has not ended");
        }

        uint256 userStake = stakerStorage.getStake(backer, beneficiary);
        if(userStake == 0) {
            stakerPool.push(beneficiary);
            stakerStorage.setUserId(backer, beneficiary);
            stakerStorage.updateStakerPool(stakerPool);
        }

        stakerStorage.increaseStakeAmount(backer, beneficiary, amount);

        token.transferFrom(backer, address(stakerStorage), amount);
        emit StakedSLM(amount, beneficiary, backer);
    }

    function unstake(uint256 beneficiary) public returns(uint256) {
        address backer = msg.sender;

        uint256 userStake = stakerStorage.getStake(backer, beneficiary);
        require(userStake > 0, "No stake");

        stakerStorage.decreaseStakeAmount(backer, beneficiary, userStake);

        stakerStorage.pushUnstakedCSInfo(backer, beneficiary, userStake, block.timestamp);
        stakerStorage.sendFunds(backer, total);

        for(uint256 i = 0; i < stakerPool.length; i += 1) {
            if(stakerPool[i] == beneficiary) {
                delete stakerPool[i];
            }
        }
        stakerStorage.updateStakerPool(stakerPool);

        emit UnstakeSLM(total, beneficiary, backer);
        return total;
    }

    function setVoteDetails(address disputeAddress, uint256 endTime) public onlyOwnerOrJudgement {
        uint256 prevEndTime = stakerStorage.getVoteEndTime(disputeAddress);
        require(prevEndTime == 0 || block.timestamp > prevEndTime, "Dispute vote in progress");

        uint256[] jurorList = judgement.getJurors(disputeAddress);
    
        stakerStorage.setVoteEndTime(disputeAddress, endTime);

        for(uint256 i = 0; i < jurorList.length; i++) {
            uint256 disputeVoteCount = stakerStorage.getDisputeVoteCount(disputeAddress, currentJuror);
            if(disputeVoteCount == 0) {
                stakerStorage.increaseOutstandingVote(1, disputeAddress, currentJuror);
                stakerStorage.increaseDisputeVoteCount(1, disputeAddress, currentJuror);
            } else {
                stakerStorage.decreaseOutstandingVote(disputeVoteCount, disputeAddress, currentJuror);
                stakerStorage.increaseOutstandingVote(1, disputeAddress, currentJuror);
                stakerStorage.decreaseDisputeVoteCount(disputeVoteCount, disputeAddress, currentJuror);
                stakerStorage.increaseDisputeVoteCount(1, disputeAddress, currentJuror);
            }
        }
    }

    function getUserId(address walletAddress) external returns(uint256) {
        uint256 userId = stakerStorage.getUserId(walletAddress);
        return userId;
    }

    function getUserAddress(uint256 userId) external returns(address) {
        uint256 userAddress = stakerStorage.getUserAddress(userId);
        return userAddress;
    }
}