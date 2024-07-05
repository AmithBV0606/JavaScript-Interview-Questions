// Maps : 
const nums1 = [1, 2, 3, 4];

const newNums = nums1.map((item, index, arr) => {
    return item * 3;
})

console.log(newNums)

// Filter : 
const nums2 = [1, 2, 3, 4]

const moreThanTwo = nums2.filter((item, i, arr) => {
    return item > 2;
})

console.log(moreThanTwo)

// Reduce : 
const nums3 = [1, 2, 3, 4];

const sum = nums3.reduce((acc, cur, i, arr) => {
    return acc + cur;
}, 5)

console.log(sum);