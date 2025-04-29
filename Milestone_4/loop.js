const gradelist = (marks) => {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "F";
    }
}

let students = [
    { name: "Akash", marks: 85 },
    { name: "Muthu", marks: 92 },
    { name: "Sanjay", marks: 70 },
    { name: "Manoj", marks: 48 },
    { name: "AK", marks: 100 }
];

// do-while loop
let i = 0;
do {
    let student = students[i];
    let grade = gradelist(student.marks);
    console.log(student.name, "Grade:", grade);
    i++;
} while (i < students.length);

// while loop
let j = 0;
while (j < students.length) {
    let student = students[j];
    let grade = gradelist(student.marks);
    console.log(student.name, "Grade:", grade);
    j++;
}

// for loop
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let grade = gradelist(student.marks);
    console.log(student.name, "Grade:", grade);
}

// for-in loop
for (let i in students) {
    let student = students[i];
    let grade = gradelist(student.marks);
    console.log(student.name, "Grade:", grade);
}
