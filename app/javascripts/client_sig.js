
window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    var provider = new HookedWeb3Provider({
       // Let's pick the one that came with Truffle
       host: web3.currentProvider.host,
       transaction_signer: {
           hasAddress: function(address, callback) {
               console.log(address);
               console.log(callback);
           },
           signTransaction: function(tx_params, callback) {
               console.log(tx_params);
               console.log(callback);
           }
       }
   });
   web3.setProvider(provider);
   refreshBalance();
 });


    refreshBalance();

}
