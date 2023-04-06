`use strict`

const student1 = new Student(`Simone`, `Maccarone`, 1970, 4, 6);
const student2 = new Student(`Luis Alberto`, `Castro`, 1970, 4, 6);
const student3 = new Student(`Davide`, `Consigliere`, 1970, 0, 1);
const student4 = new Student(`Chiara`, `Badile`, 1970, 4, 6);

const classroom1 = new Classroom([student1, student2, student3, student4]);

displayClassroom(classroom1.students);

function displayClassroom(array) {
    document.getElementById(`student-list`).innerHTML = ``;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        const mainUL = document.getElementById(`student-list`); // collego la classe

        let newli;
        let newlibday;

        let text = '';
        let removeButton = '';
        let buttonText = '';

        if (element.isBirthday() === false) {
            newli = document.createElement(`li`); // creo un nuovo li element 
            text = document.createTextNode((element.name) + " " + (element.surname));
            removeButton = document.createElement(`button`); // creo un nuovo button element 
            buttonText = document.createTextNode(`Remove`);
            removeButton.appendChild(buttonText)
            removeButton.addEventListener('click', (event) => classroom1.removeStudent(element));
            newli.appendChild(text); // Appendo il testo al <li>
            newli.appendChild(removeButton); // appendo il bottone al <li>
            mainUL.appendChild(newli); // Appendo il <li> alla lista
        }
        else {
            newlibday = document.createElement(`li`);
            newlibday.className = `bday`;
            text = document.createTextNode((element.name) + " " + (element.surname));
            removeButton = document.createElement(`button`); // creo un nuovo button element 
            buttonText = document.createTextNode(`Remove`);
            removeButton.appendChild(buttonText)
            removeButton.addEventListener('click', (event) => classroom1.removeStudent(element));
            newlibday.appendChild(text); // Appendo il testo al <li>
            newlibday.appendChild(removeButton); // appendo il bottone al <li>
            mainUL.appendChild(newlibday); // Appendo il <li> alla lista
        }
        /*const text = document.createTextNode((element.name) + " " + (element.surname)); // passo l'elemento in ciclo alla nuovo <li>

        const removeButton = document.createElement(`button`); // creo un nuovo button element 

        const buttonText = document.createTextNode(`Remove`);

        removeButton.appendChild(buttonText) // Appendo il testo fatto appositamente per il mio bottone al bottone
        
        removeButton.addEventListener('click', (event) => classroom1.removeStudent(element));
        
        newli.appendChild(text); // Appendo il testo al <li>
        newli.appendChild(removeButton); // appendo il bottone al <li>
        mainUL.appendChild(newli); // Appendo il <li> alla lista
        */
    }
}



function shuffleTheClassroom() {
    classroom1.shuffleStudents();
    displayClassroom(classroom1.students);
}

function addStudentToClassroom() {
    const input1 = document.getElementById(`student-name`);
    const input2 = document.getElementById(`student-surname`);
    const input3 = document.getElementById(`student-moB`);
    const input4 = document.getElementById(`student-doB`);
    const input5 = document.getElementById(`student-yoB`);
    if (input1.value !== `` && input2.value !== ``) // Se casella di testa vuota, non aggiungere nulla!
    {
        const newStudentName = input1.value; // creo una stringa qualsiasi da aggiungere al mio array 
        const newStudentSurname = input2.value; // creo una stringa qualsiasi da aggiungere al mio array 
        const newStudentMoB = input3.value;
        const newStudentDoB = input4.value;
        const newStudentYoB = input5.value;
        /*if (isNaN(newStudentMoB) !== true && isNaN(newStudentDoB) !== true && isNaN(newStudentYoB) !== true) {
            // questo mi da solo una cosa che voglio io, non l'utente, aggiungo input per testo
            const aNewStudent = new Student(input1.value, input2.value, Number(input5.value), Number(input3.value), Number(input4.value));
            console.log(aNewStudent);
            classroom1.addStudent(aNewStudent); // pusho la stringa
            displayClassroom(classroom1.students); // rimostro la lista, ma questo vuol dire che mi stampa tutti gli elementi compresi quelli precedenti, 
            // mi serve svuotare la lista prima! Aggiungo linea 40
            input1.value = ``;
            input2.value = ``;
            input3.value = ``;
            input4.value = ``;
            input5.value = ``;*/

        if (Number(input4.value) <= 31 && Number(input4.value) >= 0) {
            if (Number(input3.value) <= 12 && Number(input3.value) >= 0) {
                if (isNaN(newStudentMoB) !== true && isNaN(newStudentDoB) !== true && isNaN(newStudentYoB) !== true) {
                    // questo mi da solo una cosa che voglio io, non l'utente, aggiungo input per testo
                    const aNewStudent = new Student(input1.value, input2.value, Number(input5.value), Number(input3.value), Number(input4.value));
                    console.log(aNewStudent);
                    classroom1.addStudent(aNewStudent); // pusho la stringa
                    displayClassroom(classroom1.students); // rimostro la lista, ma questo vuol dire che mi stampa tutti gli elementi compresi quelli precedenti, 
                    // mi serve svuotare la lista prima! Aggiungo linea 40
                    input1.value = ``;
                    input2.value = ``;
                    input3.value = ``;
                    input4.value = ``;
                    input5.value = ``;
                }
            }
        }
    }
}

// function removeStudentToClassroom(element){
//     classroom1.removeStudent(classroom1.students);
//     displayClassroom(classroom1.students);
// }
