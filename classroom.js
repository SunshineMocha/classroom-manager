`use strict`

class Classroom {
    constructor(students = []) {
        this.students = students;
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(student) {
        const studentIndex = this.students.indexOf(student); // dammi l'indice del todo che ti sto passando e assegnalo alla variabile
        this.students.splice(studentIndex, 1);// splice mi rimuove l'elemento che dico dall'array, UN elemento
        displayClassroom(classroom1.students);
    }
    shuffleStudents() {
        for (let i = this.students.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.students[i];
            this.students[i] = this.students[j];
            this.students[j] = temp;
        }
    }
}