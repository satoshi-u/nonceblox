//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Calculator {
    constructor() {
        console.log("Deploying Calculator...");
    }

    function add(uint _num1, uint _num2) public view returns (uint) {
        console.log("Adding...");
        return _num1 + _num2;
    }

    function subtract(uint _num1, uint _num2) public view returns (uint) {
        console.log("Subtracting...");
        return _num1 - _num2;
    }

    function multiply(uint _num1, uint _num2) public view returns (uint) {
        console.log("Multiplying...");
        return _num1 * _num2;
    }

    function divide(uint _num1, uint _num2, uint precision) public view returns (uint) {
        console.log("Dividing...");
        return _num1*(10**precision)/_num2;
        // set decimal place in frontend based on given precision
    }
}
