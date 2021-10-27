const { expect } = require("chai");
const { ethers } = require("hardhat");

let calculator;

before(async () => {
  const Calculator = await ethers.getContractFactory("Calculator");
  calculator = await Calculator.deploy();
  await calculator.deployed();
})

describe("Addition", function () {
  it("adds two numbers", async function () {
    let result;
    result = await calculator.add(2, 4);
    expect(result).to.equal(6);
  });
});

describe("Subtraction", function () {
  it("subtracts two numbers", async function () {
    let result;
    result = await calculator.subtract(100, 50);
    expect(result).to.equal(50);
  });
});

describe("Multiplication", function () {
  it("multiplies two numbers", async function () {
    let result;
    result = await calculator.multiply(12, 3);
    expect(result).to.equal(36);
  });
});

describe("Division", function () {
  it("divides two numbers", async function () {
    let result;
    result = await calculator.divide(100, 3, 2);
    expect(result).to.equal(3333);
  });
});
