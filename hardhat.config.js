require('@nomiclabs/hardhat-waffle');
require('hardhat-dependency-compiler');

module.exports = {
  solidity: '0.8.0',
  dependencyCompiler: {
    paths: [
      // TODO -- include SLM Token via NPM
    ],
  },
};
