const Certificate = artifacts.require("Certificate");

module.exports = function(deployer) {
  // Развёртывание смарт-контракта Certificate
  deployer.deploy(Certificate);
};