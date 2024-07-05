// Polyfills for filter
// Array.filter((item, index, arr) => {})

Array.prototype.myFilter = function(cb) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            temp.push(this[i]);
        } 
    }

    return temp;
}

// Testing our custom filter function :
const nums10 = [1, 2, 3, 4]

const moreThanTwo1 = nums10.filter((item, i, arr) => {
    return item > 2;
}) 

console.log(moreThanTwo1)