module.exports = function (promises, progress) {
  let complete = 0;
  return promises.map(async p => {
    await p;
    progress(++complete / promises.length);
    return p;
  });
};
