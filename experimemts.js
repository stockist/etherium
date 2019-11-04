var etheriumJS = require ('web3');
var web3 = new etheriumJS('http://localhost:8545');
//console.log (web3)
/*
//var accounts = web3.eth.accounts.create();;
//console.log  (accounts)

var address = '0xea590A30f86BBC17E76762B0520708a8D48709Ee';
var privateKey =  '0xd4aabd5b9e605c5d03d929889333c5aa29df25a11bd1fbbd201447e0a9df27d3';

var accounts = web3.eth.accounts.privateKeyToAccount(privateKey);
var balance = web3.eth.getBalance(address).then(function(bal){
	console.log (bal)
}).catch(err=> console.log (err));


//balance = web3.toDecimal(balance);

//console.log (accounts)
accounts.signTransaction({gas: 53000}, privateKey).then( function (signedTx){
	//console.log (signedTx)
  	web3.eth.sendSignedTransaction(signedTx.rawTransaction)
		.then(receipt => console.log("Transaction receipt: ", receipt))
  		.catch(err => console.error(err));
}).catch (err=>console.log (err));*/

//web3.admin.nodeInfo((res)=>{ console.log (res)}) 
