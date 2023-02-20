



const Logic = artifacts.require("Logic");
const SafeMath = artifacts.require("SafeMath");

module.exports = function (deployer) {
  deployer.deploy(SafeMath)
  deployer.link(SafeMath, Logic)
  deployer.deploy(Logic, PUT YOUR ADDRESS HERE, "0x8371a55dbee669f16bd9e6137e2ce39ee87ae8e2");
};
