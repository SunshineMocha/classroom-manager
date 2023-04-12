`use strict`

const student1 = new Student(`Simone`, `Maccarone`, 1970, 4, 6);
const student2 = new Student(`Luis Alberto`, `Castro`, 1970, 4, 6);
const student3 = new Student(`Davide`, `Consigliere`, 1970, 0, 1);
const student4 = new Student(`Chiara`, `Badile`, 1970, 4, 6);


arrayOfStudents = [student1, student2, student3, student4]
const classroom1 = new Classroom(arrayOfStudents);

displayClassroom2(classroom1);


// CORREZIONE medodo 1
function displayClassroom(classroom) {

    const studentList = document.getElementById(`student-list`);

    studentList.innerHTML = ``;

    for (let i = 0; i < classroom.students.length; i++) {

        const student = classroom.students[i];

        const newLi = document.createElement(`li`);

        const studentNode = document.createTextNode(student.surname + ` ` + student.name);

        newLi.appendChild(studentNode);

        const deleteBtn = document.createElement(`button`);

        deleteBtn.classList.add(`remove-btn`);

        deleteBtn.style.border = `solid lime 2px`;

        // const btnNode = document.createTextNode(`Rimuovi`);

        const feeshImg = document.createElement('img');

        feeshImg.classList.add('remove-img')
        
        feeshImg.src = './assets/4x-1.gif';

        deleteBtn.addEventListener(`click`, (event) => removeStudentFromClassroom(student));

        deleteBtn.appendChild(feeshImg);

        newLi.appendChild(deleteBtn);

        studentList.appendChild(newLi);
    }
    
}

// CORREZIONE metodo 2, metodo short, scrivo direttamente l'HTML per aggiungere i miei li
function displayClassroom2(classroom){
    const studentList = document.getElementById(`student-list`);

    studentList.innerHTML = ``;

    for (let i = 0; i < classroom.students.length; i++) {
        const student = classroom.students[i];
        studentList.innerHTML += `<li class="list-element">${student.name} ${student.surname} <button class="remove-btn" id="remove-btn${i}"> 
        <img class="remove-img" src = "./assets/4x-1.gif"></img>
        </button></li>`;
        // Button outside li, junk code
        /*studentList.innerHTML += `<button class="remove-btn" id="remove-btn${i}"> 
        <img class="remove-img" src = "./assets/4x-1.gif"></img>
        </button>`;*/
        // come risolvo questo problema che non riesco a passare il valore perche HTML statico e non dinamico?
        //document.getElementById("remove-btn" + i).addEventListener('click', (element) => removeStudentFromClassroom(student)); <- soluzione
        // remove-btn0, remove-btn1 (crea con indice per creare diversi id)
    }
    // soluzione per passare il valore ma per renderlo piu veloce
    for (let i = 0; i < classroom.students.length; i++) {
        const student = classroom.students[i];
        document.getElementById("remove-btn" + i).addEventListener('click', (element) => removeStudentFromClassroom(student));
    }

}

// FATTO A CASA
/*function displayClassroom(array) {
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
    /*}
}*/

// CORREZIONE
function shuffleTheClassroom() {
    classroom1.shuffleStudents();
    displayClassroom2(classroom1);
}

// FATTO IN CASA
// function shuffleTheClassroom() {
//     classroom1.shuffleStudents();
//     displayClassroom(classroom1.students);
// }

//CORREZIONE 
function addStudentToClassroom() {
    const nameInput = document.getElementById(`student-name`);
    const surnameInput = document.getElementById(`student-surname`);

    const name = nameInput.value;
    const surname = surnameInput.value;

    if (name !== `` && surname !== ``){   
        const newStudent = new Student (name,surname);
        classroom1.addStudent(newStudent);
        displayClassroom2(classroom1);
        nameInput.value = ``;
        surnameInput.value = ``;
    }    
}

// FATTO A CASA
/*function addStudentToClassroom() {
    const input1 = document.getElementById(`student-name`);
    const input2 = document.getElementById(`student-surname`);
    const input3 = document.getElementById(`student-moB`);
    const input4 = document.getElementById(`student-doB`);
    const input5 = document.getElementById(`student-yoB`);
    if (input1.value !== `` && input2.value !== ``) // Se casella di testa vuota, non aggiungere nulla!
    {
        const newStudentName = input1.value; 
        const newStudentSurname = input2.value;
        const newStudentMoB = input3.value;
        const newStudentDoB = input4.value;
        const newStudentYoB = input5.value;

        if (Number(input4.value) <= 31 && Number(input4.value) >= 0) {
            if (Number(input3.value) <= 12 && Number(input3.value) >= 0) {
                if (isNaN(newStudentMoB) !== true && isNaN(newStudentDoB) !== true && isNaN(newStudentYoB) !== true) {
                    const aNewStudent = new Student(input1.value, input2.value, Number(input5.value), Number(input3.value), Number(input4.value));
                    console.log(aNewStudent);
                    classroom1.addStudent(aNewStudent);
                    displayClassroom(classroom1.students);
                    input1.value = ``;
                    input2.value = ``;
                    input3.value = ``;
                    input4.value = ``;
                    input5.value = ``;
                }
            }
        }
    }
}*/

function removeStudentFromClassroom(student){
    classroom1.removeStudent(student);
    displayClassroom2(classroom1);
}

function colorMainTitle(){
    const mainTitle = document.querySelector('.main-title'); // prende il primo match come in css (., "#", "h1", "#student-list li")
    // se invece di prendere il primo voglio li prenda tutti uso querySelectorAll
    mainTitle.style.color = 'tomato';
}


// JUNK
// function removeStudentToClassroom(element){
//     classroom1.removeStudent(classroom1.students);
//     displayClassroom(classroom1.students);
// }
