require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth machine slow idea clock army gaze'; 
let testAccounts = [
"0x4d64b7af76e134cc318aa1f68e39ec968f15742e8c80e5fb12cdb5b21c2c90c0",
"0x1c8692a4f8c8579288922b9c65738227a52119eec87d657763c814202a92b196",
"0x573208e85d6bcf21560cf4f028a0180f0c57f067311826a4f39c7a29d9109859",
"0x27b22d754d3fb4a8363a5dfad6aaf4100d76dc121cf572c7ae1d88fd53dcdd4b",
"0xbe933988efc7bf3e16f03bbfe8e73075530d6f32e18b1a89c25b47a7edcc9f95",
"0x2cde4922484e953fabaecd4e6d036dc3e4fdb5a92b9144ac219ad17ad00f5ad1",
"0x4fc0ed416ca43662479f5c1e5af55e204746ce129df6b859b8a37764a3da4fe1",
"0xdaa91714afacfe6ca0be81a1cf4a26f4c5d4e60fa27dde85845b2e2ba0e96036",
"0xfbd2aea1ed0642626a89f0bba4577b33a9291f87622aac26a8b13b6934dc1e24",
"0x596c9db89f1cb49fc2970ab7b2041746cab711f27cf46797a5cdbe1f0ebeed59"
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


