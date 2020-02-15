module.exports = (text) => {
  const array = text.split(',').map(el => el.trim());
  return array;
}