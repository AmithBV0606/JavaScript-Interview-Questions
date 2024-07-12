Array.prototype.myReduce2 = function(cb, initialValue) {
    var accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = cb(accumulator, this[i], i , this)
        } else {
            accumulator = this[i];
        }        
    }

    return accumulator;
}

const nums3 = [1, 2, 3, 4];

const sum = nums3.myReduce2((acc, cur, i, arr) => {
    return acc + cur;
}, 5)

console.log(sum);