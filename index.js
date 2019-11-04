var compiler =  require('solc')
var fs = require ('fs')
var sourceCode =  fs.readFileSync ('Hello.sol').toString();
var compileCode =  compiler.compile(sourceCode);

//console.log (compileCode)

var interface =  compileCode.contracts[':Hello']

var helloInterface = JSON.parse(interface.interface);

//console.log (interface)

var helloBytecode =  interface.bytecode;

//console.log (helloBytecode);

var etheriumJS = require ('web3');
var web3 = new etheriumJS('http://localhost:8545');

function l (str) {
  console.log (str);
  return;
}


web3.eth.getAccounts ().then (function (result){
   console.log (result)
   accounts = result	
    var helloContract =  new web3.eth.Contract(helloInterface);
       helloContract.deploy ({
       	 data : helloBytecode
       }).send ({
          from : accounts[0],
          gas :  4700000
       }).then (function (contract){
              //console.log (contract.options.address)
              web3.eth.getBalance (accounts[0]).then (function(ether){
                   //console.log (ether)
              })

              /* intraction with contract */
              contract.methods.getGreeting().call({
                 from : accounts[0]
              }, function (err, res) {
                  l (res)
              })

          
             /* working fine, it is returning the receipt
              see https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#id15*/
             contract.methods.setGreeting("awesome").send({
                 from : accounts[0]
              }).then (function (receipt) {
                //console.log (receipt);
                contract.methods.getGreeting().call({
                   from : accounts[0]
                }, function (err, res) {
                    l (res)
                })
              })
          
       }) 
})


