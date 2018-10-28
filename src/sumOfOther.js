module.exports = function sumOfOther (arr) {
    if (arr.length < 2) return arr;
    const sum = arr.reduce((a, b) => a+b);
    return arr.map(a => sum - a);
}