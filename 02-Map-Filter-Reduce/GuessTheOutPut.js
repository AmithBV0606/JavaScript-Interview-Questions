// Guess the Output

let students = [
    {name: "Amith", rollNumber: 5, marks: 40},
    {name: "Vijaya", rollNumber: 50, marks: 90},
    {name: "Arjun", rollNumber: 9, marks: 95},
    {name: "Parth", rollNumber: 25, marks: 45},
]

// Question 1 : Return only the name of the students in Capital letters
// Note : This problem can be solved using loop, map , forEach
let Output1 = students.map((item, i) => {
    let name = item.name
    return name.toUpperCase()
})

console.log(Output1)

// Question 2 : Return details of only who scored more than 60
let Output2 = students.filter((stu) => stu.marks > 60)

console.log(Output2)

// Question 3 : More than 60 marks and roll number greater than 15
let Output3 = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15)

console.log(Output3)

// Question 4 : Sum of marks of all students
let Output4 = students.reduce((acc, curr, i, arr)=>{
    return acc + curr.marks;
},0)

console.log(Output4)

// Question 5 : Return names of students who scored more than 60
// Note : Map, filter and reduce can be chained to use 2 methods at a time
let Output5 = students.filter(stu => stu.marks > 60).map(stu => stu.name)

console.log(Output5)

// Question 6 : Return total marks scored, after adding 20 marks to those who have scored less than 60.

let Output6 = students.map((item) => {
    if (item.marks < 60) {
        return item.marks + 20
    } else {
        return item.marks
    }
}).reduce((acc, curr, i, arr) => acc + curr, 0)

console.log(Output6)

// Question 7 : Return total marks for students with marks greater than 60, after adding 20 marks to those who have scored less than 60

let Output7 = students.map(stu => {
    if (stu.marks < 60) {
        stu.marks += 20
    }

    return stu;
})
.filter(stu => stu.marks > 60)
.reduce((acc, curr) => acc + curr.marks, 0)

console.log(Output7)