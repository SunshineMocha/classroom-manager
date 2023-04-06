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
shuffleTheClassroom(classroom1)

function shuffleTheClassroom() {
    classroom1.shuffleStudents();
    displayClassroom(classroom1.students);
}

function addStudentToClassroom() {
    const input1 = document.getElementById(`student-name`);
    const input2 = document.getElementById(`student-surname`);
    if(input1.value !== `` && input2.value !== ``) // Se casella di testa vuota, non aggiungere nulla!
    {
        const newStudentName = input1.value; // creo una stringa qualsiasi da aggiungere al mio array 
        const newStudentSurname = input2.value; // creo una stringa qualsiasi da aggiungere al mio array 
        // questo mi da solo una cosa che voglio io, non l'utente, aggiungo input per testo
        const aNewStudent = new Student(input1.value, input2.value);
        classroom1.addStudent(aNewStudent); // pusho la stringa
        displayClassroom(classroom1.students); // rimostro la lista, ma questo vuol dire che mi stampa tutti gli elementi compresi quelli precedenti, 
        // mi serve svuotare la lista prima! Aggiungo linea 40
        input1.value = ``;
        input2.value = ``;
    }
} 

