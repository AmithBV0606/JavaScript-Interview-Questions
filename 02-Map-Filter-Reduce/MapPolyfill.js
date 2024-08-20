// Polyfills for map
// Array.map((item, index, arr) => {})

Array.prototype.myMap = function(callback) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(callback(this[i], i, this));
    }
    return temp;
}

// Testing our custom map function : 
const nums9 = [1, 2, 3, 4];

const newNums1 = nums9.myMap((item, index, arr) => {
    return item * 3;
})

console.log(newNums1)