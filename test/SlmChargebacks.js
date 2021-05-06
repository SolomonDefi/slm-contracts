const { expect } = require('chai');

describe('SLM Chargebacks', function() {
  it('Deploy SLM token', async function() {
    const [owner] = await ethers.getSigners();

    const SlmTokenFactory = await ethers.getContractFactory('SlmToken');

    const slmToken = await SlmTokenFactory.deploy();

    const ownerBalance = await slmToken.balanceOf(owner.address);
    expect(await slmToken.totalSupply()).to.equal(ownerBalance);
  });
});
