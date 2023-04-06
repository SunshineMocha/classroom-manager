`use strict`

const student1 = new Student(`Simone`, `Maccarone`);
const student2 = new Student(`Luis Alberto`, `Castro`);
const student3 = new Student(`Davide`, `Consigliere`);
const student4 = new Student(`Chiara`, `Badile`);

const classroom1 = new Classroom([student1, student2, student3, student4]);

function displayClassroom(array) {
    document.getElementById(`student-list`).innerHTML = ``;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        const mainUL = document.getElementById(`student-list`); // collego la classe

        const newli = document.createElement(`li`); // creo un nuovo li element 

        const text = document.createTextNode((element.name) + " " + (element.surname)); // passo l'elemento in ciclo alla nuovo <li>

        newli.appendChild(text); // Appendo il testo al <li>
        mainUL.appendChild(newli); // Appendo il <li> alla lista
    }
}

displayClassroom(classroom1.students);

function shuffleTheClassroom() {

}

function addStudentToClassroom() {
    const input1 = document.getElementById(`student-name`);
    const input2 = document.getElementById(`student-surname`);

    classroom1.addStudent();
} 