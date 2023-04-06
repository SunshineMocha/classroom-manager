`use strict`

class Classroom {
    constructor(students = []) {
        this.students = students;
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(student) {

    }
    shuffleStudents() {
        for (let i = this.students.length - 1; i >= 0; i--) {   
            let j = Math.floor(Math.random()*i);
            let temp = this.students[i];
            this.students[i] = this.students[j];
            this.students[j] = temp;
        }
    }
}