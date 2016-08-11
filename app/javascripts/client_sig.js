var ks; // KeyStore

window.onload = function() {
    // Example of seed 'unhappy nerve cancel reject october fix vital pulse cash behind curious bicycle'
    var seed = prompt('Enter your private key seed', 'Something long');;
    // the seed is stored in memory and encrypted by this user-defined password
    var password = prompt('Enter password to encrypt the seed', 'dev_password');

    lightwallet.keystore.deriveKeyFromPassword(password, function(err, _pwDerivedKey) {
        var pwDerivedKey = _pwDerivedKey;
        ks = new lightwallet.keystore(seed, pwDerivedKey);

        console.log("Error: " + err);
        console.log("pwDerivedKey: " + pwDerivedKey);
        console.log("ks: " + ks);

        // Create a custom passwordProvider to prompt the user to enter their
        // password whenever the hooked web3 provider issues a sendTransaction
        // call.
        ks.passwordProvider = function (callback) {
            var pw = prompt("Please enter password to sign your transaction", "dev_password");
            callback(null, pw);
        };

        var provider = new HookedWeb3Provider({
            // Let's pick the one that came with Truffle
            host: web3.currentProvider.host,
        //    host: web3.currentProvider.HttpProvider('http://192.168.1.179:8545'),
            transaction_signer: ks
        });

        console.log("Provider: " + provider);
        console.log("window.web3: " + window.web3);
        console.log("web3.currentProvider: " + web3.currentProvider);
        console.log("web3.currentProvider.host: " + web3.currentProvider.host);

        web3.setProvider(provider);

        // Generate the first address out of the seed
        ks.generateNewAddress(pwDerivedKey);

        accounts = ks.getAddresses();
        account = "0x" + accounts[0];
        console.log("Your account is " + account);
        refreshBalance();
    });
}
