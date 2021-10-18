# Solomon Decom Contracts

This repository is the home of all Ethereum smart contracts for the Solomon Defi checkout plugin.

The main entry point is `SlmFactory.sol`, which implements a contract factory for cheaply generating and managing escrow, preorder, and chargeback contracts.

## Contracts

All contracts are located in the `contracts/` folder. Below are basic descriptions of the contracts, with further documentation available at https://solomondefi.github.io/docs/

### SlmFactory.sol
Contract factory for producing chargeback, Preorder, and escrow contracts with low gas cost. Depends on `SlmChargeback`, `SlmPreorder`,
`SlmEscrow`, and `SlmJudgement`.

### library/
Library contracts for chargeback, preorder, and escrow related functionality.

Contracts:
- `SlmPurchaseUtil.sol`
    - Utility functions common to purchase contracts
- `SlmJudgement.sol`
    - Mediates purchase disputes
- `SlmStaking.sol`
    - Provides a mechanism for staking SLM, and distributes purchase fees to stakers

### SlmChargeback.sol
Purchase/Chargeback contract

### SlmPreorder.sol
Preorder contract

### SlmEscrow.sol
Escrow contract

## Contributing
SLM purchase contracts are written in Solidity. We use [Hardhat](https://hardhat.org/) for development, and future packages will be pushed
to NPM. For now, contracts are included by adding a git tag to dependencies, and importing directly from `node_modules/`

**Install** (we recommend [pnpm](https://pnpm.js.org/) if you work with many node projects):
```
npm install
```

**Compile**
```
npx hardhat compile
```

**Test**
```
npx hardhat test
```

The folder `contracts/test-token` is a snapshot of contracts in the [slm-token](https://github.com/SolomonDefi/slm-token) repo as of October 18, 2021. These contracts are used only for testing.

TODO -- Include contribution guidelines
