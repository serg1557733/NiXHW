/* let a = 5;
let b, c;
console.log(b)
b = a * 5;
console.log(b)
b = c = b / 2;
console.log(b, c)

//semicolon: error

// b = a * c  console.log(b) 

//semicolon: mistake

//Number: age

let ageU,
    date = new Date().getFullYear();

do {
    ageU = prompt('Enter your age', '');
    if (ageU !== '' && ageU) {

        alert(`Год рождения:  ${date - ageU}`);
    }
} while (ageU == '' || ageU == null);


//Number: temperature

let tempCels = prompt('Enter tempereture', ''),
    tempFar = tempCels * 1.8 + 32;
alert(`In fahrenheit: ${tempFar} `);

//Number: divide

let num1Input = document.querySelector('.num1'),
    num2Input = document.querySelector('.num2'),
    calculateBtn = document.querySelector('.btn'),
    outer = document.querySelector('.outer');


calculateBtn.addEventListener('click', () => {
    let arg1 = +num1Input.value,
        arg2 = +num2Input.value;

    if (arg1 && arg2) {
        let res = arg1 / arg2;
        outer.textContent = `${Math.floor(res)}`;
    } else {
        outer.textContent = `Enter correct number`;
    }
});

//Number: odd

let evenNumber = +prompt('Enter even number', '');

if (typeof evenNumber === 'string') {
    console.log('This is string');
} else if (typeof evenNumber === 'number' && !isNaN(evenNumber) && evenNumber) {
    console.log('This is number');
    if (evenNumber % 2) {
        do {
            alert('Выведите четное число');
            evenNumber = +prompt('Enter even number', '');
        } while (evenNumber % 2);
    } else {
        console.log('Odd number');
    }
} else {
    console.log('other type of data');
}

//String: greeting

let userName = prompt('Введите свое имя', '');
alert(`Привет ${userName}`);

//String: lexics

let userMessage = prompt('Enter your message', '');

if (userMessage.includes('хуй')) {
    alert(`Вы использовали нецензурное выражение с ${userMessage.indexOf('хуй')} по ${userMessage.indexOf('хуй') + 3} символы`)
    let userCensoredMessage = userMessage.replace(/хуй/gi, '***');
    console.log(userCensoredMessage);
} else {
    console.log(userMessage);
}
// confirm

let confirmData = confirm('Chose one of answers');

console.log(confirmData);
console.log(typeof confirmData);

let userGender = confirm('Are you men?');

if (userGender) {
    alert('You are a men');
} else {
    alert('You are a women');
}

//Array: real

const arrBooks = ['Война и мир', 'Доктор живаго', 'Идиот', 'Граф Монте-Кристо', 'Повесть временных лет'],
    arrAuto = ['Bmw', 'Kia', 'Lexus', 'Toyota', 'Chevrolet'],
    arrUsers = ['rom587', 'masha2', 'semen1999', 'serg2005'];

// Array: booleans
let boolAnswers = [];

for (let i = 0; i < 7; i++) {
    let confirmAnswer = confirm('Are you men?');
    boolAnswers[i] = confirmAnswer;
}

console.log(boolAnswers);

// Array: plus

function arrPlus(arr) {
    arr[2] = arr[0] + arr[1];
    console.log(arr);
}

const numbers = [25, 2, 99, 86, 2, 3, 0, 7];

arrPlus(numbers);
arrPlus(arrBooks);

function arrPlusT(arr) {
    arr[3] = arr[0] + arr[1] + arr[2];
    console.log(arr);
}

function arrPlusString(arr) {
    arr[3] = `${arr[0]} * ${arr[1]} * ${arr[2]}`;
    console.log(arr);
}

arrPlusString(arrBooks);

//Object: real

const user = {
    login: 'serg',
    password: 698547,
    id: 8965222222,
    email: 'serg@gmail.com'
}

const phone = {
    brand: 'Apple',
    model: 'Iphone 11',
    display: 6.1,
    core: 'A13'
}

//  Object: change

phone.brand = 'Samsung';
phone['model'] = 'Galaxy s20';

console.log(phone);

user.login = 'Max777';
user['id'] = 888224445;


console.log(user);

//Comparison if

let age = +prompt("Сколько вам лет?", "");

if ((age > 0) && (age < 18)) {
    alert("школьник");
} else if ((age > 18) && (age < 30)) {
    alert("молодеж");
} else if ((age > 30) && (age < 45)) {
    alert("зрелость");
} else if ((age > 45) && (age < 60)) {
    alert("закат");
} else if (age > 60) {
    alert("как пенсия?");
} else if (age <= 0) {
    alert("как родишься приходи");
} else {
    alert("то ли киборг, то ли ошибка");
}
//Comparison: sizes

let userSize = +prompt('Enter you waist coverage', '');

if (userSize && !isNaN(userSize)) {
    if (userSize > 63 && userSize < 65) {
        alert(`${userSize}  - XXS `);
    } else if (userSize > 66 && userSize < 69) {
        alert(`${userSize}  - XS `);
    } else if (userSize > 70 && userSize < 74) {
        alert(`${userSize}  - S `);
    } else if (userSize > 75 && userSize < 78) {
        alert(`${userSize}  - M `);
    } else if (userSize > 79 && userSize < 83) {
        alert(`${userSize}  - L `);
    } else if (userSize > 84 && userSize < 89) {
        alert(`${userSize}  - XL `);
    } else if (userSize > 90 && userSize < 94) {
        alert(`${userSize}  - XXL `);
    } else if (userSize > 95 && userSize < 97) {
        alert(`${userSize}  - XL `);
    } else {
        alert('maybe stop eating');
    }
} */

//Ternary

//confirm('Are you a men?') ? alert('You are men') : alert('You are women');

//Синий пояс Number: flats 

function calculateEntranceandFloor(apartmentNumber, numberOfFloors, numberOfApartmentceFloor) {
    let apartForEntrance =  numberOfFloors * numberOfApartmentceFloor;

    console.log(apartForEntrance);

    let apartEntrance = Math.ceil(apartmentNumber / apartForEntrance);

    console.log(apartEntrance);

    let apartmentFloor = Math.ceil(apartmentNumber / numberOfApartmentceFloor);

    console.log(apartmentFloor % numberOfFloors);

    if (!(apartmentFloor % numberOfFloors)) {
        console.log(`Floor - ${numberOfFloors}  and Entrance - ${apartEntrance}` );
    } else {
        console.log(`Floor - ${apartmentFloor % numberOfFloors} and Entrance - ${apartEntrance}` );
    }
           
}

calculateEntranceandFloor( 5, 9, 4);
