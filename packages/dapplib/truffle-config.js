require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note remember update grace drop supply genre'; 
let testAccounts = [
"0x2db22deb7468e78ed95151041f1f614c8c886e04195eedb76a05eaa9b60c0214",
"0x055ec547e4c09337afd50ea5d8864a710b67b7b2023855baf377fa32278f335c",
"0xb06e2327600c0cac0877f91377d34b73a221ee52f45dc432fd80212279de4ab6",
"0x9350c901e16241ef52eae708182c83cacc88b67b25a648a87bc5ec9e13601e19",
"0x6b20145a490e3838049c564184bb86caa2c909145cc558a60b4be63ede32fca0",
"0xa11b1137ca9f01ff49f5bdaed423f044014fbbffcff14d1445e499da3eb855b5",
"0xcf981cb4802f1520c2ebe5fc983e4099292f630f2f4d534f763b4ea91eaf864d",
"0x7a422fecc52542e120af4cf67c2bfd73c1c130a56fcdccdb463286ed8ba908cc",
"0xf762816498721b04dcfde4be69d2cc2810a40d9a4b5e12e4127e58267908efbb",
"0xf4c711d6f95f908c4c3dcf9094d5657ef2132bdbfeb64d00bad12998cdde40d8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


