var Token = artifacts.require("./SmartzToken.sol");
var Crowdsale = artifacts.require("./SmartzCrowdsale.sol");

var wallet = '0x165a5278401e016af7e0322397eab38a26f82e43';

module.exports = function(deployer) {

  let token, crowdsale;

  deployer.then(function() {
    return Token.new();
  }).then(function(instance) {
    token = instance;

    console.log('token: ok ' + token.address);

    return Crowdsale.new(wallet, token.address)
  }).then(function(instance) {
    crowdsale = instance;

    console.log('crowdsale: ok ' + crowdsale.address);

    return token.transferOwnership(crowdsale.address);
  }).then(function(res) {
    console.log('transfer ownership: ok');
  })

};
