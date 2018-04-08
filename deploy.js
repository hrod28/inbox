const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require ('./compile');

const provider = new HDWalletProvider(
  'inherit pioneer absent north future critic tongue ritual since desk word symbol',
  'https://rinkeby.infura.io/u6ur2TOxBK9Fcgdp0DOi'
);

const web3 = new Web3(provider);
const deploy = async () => {
 const accounts = await web3.eth.getAccounts();
 console.log('Attempting to deploy from account', accounts[0]);
 const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({
         data: bytecode
     })
     .send({ from: accounts[0], gas: '2000000' });
 console.log('Contract deployed to', result.options.address);

};

deploy();
