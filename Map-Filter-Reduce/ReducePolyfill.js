// Polyfills for ReducePolyfill
// Array.reduce((acc, item, index, arr) => {})

Array.prototype.myReduce = function(cb, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }

    return accumulator;
}

// Testing our custom filter function :
const nums11 = [1, 2, 3, 4];

const sum1 = nums11.myReduce((acc, cur, i, arr) => {
    return acc + cur;
}, 5)

console.log(sum1);