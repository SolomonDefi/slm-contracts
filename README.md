# Solomon Decom Contracts

This repository is a snapshot of SlmChargeback development work, and contains the factory contract, library code, and specific parameters for Solomon Chargeback contracts.

Preorder and Escrow contract development is underway, and once near completion the repository structure will be as follows:

### slm-contract-factory
Contract factory for producing chargeback, Preorder, and escrow contracts with low gas cost. Depends on `SlmChargeback`, `SlmPreorder`,
`SlmEscrow`, and `SlmJudgement`.

Contracts:
- `SlmDecomFactory.sol`

### slm-contract-lib
Library contracts for chargeback, preorder, and escrow related functionality.

Contracts:
- `SlmPurchaseUtil.sol`
    - Utility functions common to purchase contracts
- `SlmJudgement.sol`
    - Mediates purchase disputes
- `SlmStaking.sol`
    - Provides a mechanism for staking SLM, and distributes purchase fees to stakers

### slm-chargebacks
Purchase/Chargeback contract

### slm-preorder
Preorder contract

### slm-escrow
Escrow contract

## Contribution
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

TODO -- Include contribution guidelines
