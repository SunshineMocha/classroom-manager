const numbers = [2, 4, 1, 0, 234, 12];

// numbers.sort(compareNumbersAscending); // passo il parametro che voglio dare per il sort
// console.log(numbers);
// numbers.sort(compareNumbersDescending); // passo il parametro che voglio dare per il sort
// console.log(numbers);

// function compareNumbersAscending(number1, number2){ // funzione di sorting casalinga
//     if (number1 > number2) {
//         return 1; // dammi numero positivo quando devo metterlo davanti, vengono scambiati
//     } else if (number1 < number2){
//         return -1; // dammi numero negativo quando devo metterlo prima, vengono lasciati cosí
//     }
//     else{
//         return 0; //ritorno uno 0 quando i numeri/due elementi sono uguali
//     }
// }

// function compareNumbersDescending(number1, number2){
//     if (number1 > number2) {
//         return -1;
//     } else if (number1 < number2){
//         return 1;
//     }
//     else{
//         return 0; //ritorno uno 0 quando i numeri/due elementi sono uguali
//     }
// }


const strings = [`pollo`, `carta`, `paperino`, `100pippe`];
// strings.sort(compareStrings); // passo il parametro che voglio dare per il sort
// console.log(strings);

// function compareStrings(string1, string2){ // funzione di sorting stringhe
//     return string1.localeCompare(string2) * - 1 // mi fa il compare e me lo moltiplica
// }

// const booleans = [false, true, true, false, false];
// strings.sort();
// console.log(booleans);

// const mixed = [2, 4, 1, 0, 234, 12, `pollo`, `carta`, `paperino`, `100pippe`, false, true, true, false, false]
// mixed.sort();
// console.log(mixed);

const st1 = {name: `Simone`, yob: 2003};
const st2 = {name: `Davide`, yob: 1989};
const st3 = {name: `Jing`, yob: 1993};
const st4 = {name: `Simone`, yob: 1999};

const students = [st1, st2, st3, st4];

// students.sort();
// console.log(students);
// cosi non sa come ordinarli, devo fare una compare function. Diciamo che voglio ordinarli per nome

function compareStudentByName(student1, student2){
    return student1.name.localeCompare(student2.name);
}

function compareStudentByYOB(student1, student2){
        if (student1.yob > student2.yob) {
        return -1; // dammi numero positivo quando devo metterlo davanti, vengono scambiati
    } else if (student1.yob < student2.yob){
        return 1; // dammi numero negativo quando devo metterlo prima, vengono lasciati cosí
    }
    else{
        return 0; //ritorno uno 0 quando i numeri/due elementi sono uguali
    }
}

function compareStudentByNameAndYob(student1, student2){// ma cosa succede se tra i due Simone voglio mettere prima il piú vecchio?
    if (student1.name.localeCompare(student2.name) == 0) { // se hanno lo stesso nome, fammi controllo
        if (student1.yob > student2.yob) { // mettimeli in ordine per l'anno
            return 1; 
        } else if (student1.yob < student2.yob){
            return -1;
        }
        else{
            return 0;
        }
    } else{
        return student1.name.localeCompare(student2.name);
    }
}

// console.log(`studenti ordinati per nome`);
// students.sort(compareStudentByName);
// console.log(students);

// students.sort(compareStudentByNameAndYob);
// console.log(students);


// ma come faccio a fare piu veloce? torniamo con i nostri numeri

const numbersN = [2, 4, 1, 0, 234, 12];

function compareNumbersShortAscending(number1, number2){
    return number1 - number2;
}

function compareNumbersShortDescending(number1, number2){
    return number2 - number1;
}
numbersN.sort(compareNumbersShortAscending);
console.log(numbersN);