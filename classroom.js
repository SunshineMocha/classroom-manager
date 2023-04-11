`use strict`

class Classroom {
    constructor(students = []) {
        this.students = students;
    }
    addStudent(student) {
        this.students.push(student);
    }
    // Correzione
    removeStudent(student){
        const index = this.students.indexOf(student);
        if (index >= 0) {
            this.students.splice(index,1);
        }
    }

    // FATTO IN CASA
    // removeStudent(student) {
    //     const studentIndex = this.students.indexOf(student); // dammi l'indice del todo che ti sto passando e assegnalo alla variabile
    //     this.students.splice(studentIndex, 1);// splice mi rimuove l'elemento che dico dall'array, UN elemento
    //     displayClassroom(classroom1.students);
    // }
    // CORREZIONE
    shuffleStudents(){
        const tempArray = [];
        while(this.students.length > 0){
            const randomNumber = Math.random() * this.students.length;
            const randomIndex = Math.floor(randomNumber);
            const arrayOfDeleted = this.students.splice(randomIndex,1);
            const randomStudent = arrayOfDeleted[0];
            tempArray.push(randomStudent);
        }
        this.students = tempArray;
    }
    // FATTO IN CASA
    // shuffleStudents() {
    //     for (let i = this.students.length - 1; i >= 0; i--) {
    //         let j = Math.floor(Math.random() * i);
    //         let temp = this.students[i];
    //         this.students[i] = this.students[j];
    //         this.students[j] = temp;
    //     }
    // }
}