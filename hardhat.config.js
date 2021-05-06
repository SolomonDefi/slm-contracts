require('@nomiclabs/hardhat-waffle');
require('hardhat-dependency-compiler');
require('hardhat-gas-reporter');
require('solidity-coverage');

const loggingEnabled = process.env.EVM_LOGGING === '1';
const testReportGas = process.env.TEST_REPORT_GAS === '1';

module.exports = {
  solidity: '0.8.4',
  networks: {
    hardhat: {
      logged: loggingEnabled,
      chainId: 1337,
      auto: false,
      interval: 5000,
    },
  },
  gasReporter: {
    enabled: testReportGas,
    showMethodSig: true,
  },
  dependencyCompiler: {
    paths: [
      // TODO -- include SLM Token via NPM
    ],
  },
};
