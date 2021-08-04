const { expect } = require("chai");

describe("Greeter", function () {
  it("Should double the variable", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy();
    await greeter.deployed();


    const doubleStorageVariable = await greeter.double();

    // wait until the transaction is mined
    await doubleStorageVariable.wait();

    console.log(greeter.x())

    expect(await greeter.x()).to.equal(2);
  });
});
