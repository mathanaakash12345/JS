let students = [
    { name: "Akash", marks: 85 },
    { name: "Muthu", marks: 92 },
    { name: "Sanjay", marks: 70 },
    { name: "Manoj", marks: 48 },
    { name: "AK", marks: 60 }
];

for (let student of students) {
    let grade;

    switch (true) {
        case (student.marks >= 90):
            grade = "A";
            break;
        case (student.marks >= 75):
            grade = "B";
            break;
        case (student.marks >= 60):
            grade = "C";
            console.log(student.name, "Grade:", grade);
            continue;
        case (student.marks >= 50):
            grade = "D";
            console.log(student.name, "Grade:", grade);
            break;
        default:
            grade = "F";
            console.log(student.name, "Grade:", grade);
    }

    if (grade === "D") {
        break;
    }
}
