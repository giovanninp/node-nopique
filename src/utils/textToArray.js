module.exports = (text) => {
    const result = text.split(',').map(el => el.trim());
    return result;
}