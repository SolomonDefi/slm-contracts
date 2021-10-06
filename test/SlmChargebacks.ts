import { ethers, waffle } from 'hardhat';
import chai from 'chai';

const { deployContract } = waffle;
const { expect } = chai;

describe('SLM Chargebacks', function() {
  it('Deploy SLM token', async function() {
    const [owner] = await ethers.getSigners();

    const SlmCbFactory = await ethers.getContractFactory('SlmChargeback');
    const slmChargeback = await SlmCbFactory.deploy();

    console.log(slmChargeback);
  });
});
