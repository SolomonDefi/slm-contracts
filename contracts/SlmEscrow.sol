// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ~0.8.2;

import '../library/Ownable.sol';
import '../library/IERC20.sol';
import '../library/SlmJudgement.sol';

/// @title Solomon Escrow
/// @author Solomon DeFi
/// @notice A contract that holds ETH or ERC20 tokens in escrow until both parties agree to disperse funds
contract SlmEscrow is Ownable {

    IERC20 public token;

    SlmJudgement public judge;
}