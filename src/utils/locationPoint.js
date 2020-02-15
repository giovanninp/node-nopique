module.exports = function locationPoint(lt, lg) {
  return ({
    type: 'Point',
    coordinates: [lg, lt]
  });
};