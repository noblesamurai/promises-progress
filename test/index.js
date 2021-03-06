const expect = require('chai').expect;
const sinon = require('sinon');

describe('promises-progress', function () {
  const promisesProgress = require('..');
  it('calls the progress function', async function () {
    const promises = [ Promise.resolve(1), Promise.resolve(2), Promise.resolve(3) ];
    const progress = sinon.stub();
    const results = await Promise.all(promisesProgress(promises, progress));
    expect(progress.callCount).to.equal(3);
    expect(results).to.eql([1, 2, 3]);
  });
});
