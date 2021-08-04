//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    uint256 public x = 1;

    function double() external {
        x = x + x;
    }
}
