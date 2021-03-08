require('@nomiclabs/hardhat-waffle');
require('hardhat-dependency-compiler');
require('solidity-coverage');

module.exports = {
  solidity: '0.8.2',
  dependencyCompiler: {
    paths: [
      // TODO -- include SLM Token via NPM
    ],
  },
};
