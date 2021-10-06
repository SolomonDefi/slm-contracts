import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-dependency-compiler';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

const loggingEnabled = process.env.EVM_LOGGING === '1';
const testReportGas = process.env.TEST_REPORT_GAS === '1';

module.exports = {
  solidity: '0.8.4',
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false,
    externalArtifacts: ['externalArtifacts/*.json'],
  },
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
