// Polyfills for ReducePolyfill
// Array.reduce((acc, item, index, arr) => {})

Array.prototype.myRduce = function(cb, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }

    return accumulator;
}

// Testing our custom filter function :
const nums11 = [1, 2, 3, 4];

const sum1 = nums11.myRduce((acc, cur, i, arr) => {
    return acc + cur;
}, 1)

console.log(sum1);