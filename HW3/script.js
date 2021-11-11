//Операции, Типы, Сравнение, Условия и Логические операторы 2.

let userSize = +prompt('Enter you waist coverage', '');

switch (true){
    case userSize > 63 && userSize < 65: 
            alert(`${userSize}  - XXS `);
            break;
    case userSize > 66 && userSize < 69: 
            alert(`${userSize}  - XS `);
            break;
    case userSize > 70 && userSize < 74: 
            alert(`${userSize}  - S `);
            break;
    case userSize > 79 && userSize < 83: 
            alert(`${userSize}  - L`);
            break;   
    case userSize > 84 && userSize < 89: 
            alert(`${userSize}  - XL `);
            break; 
    case  userSize > 90 && userSize < 94: 
            alert(`${userSize}  - XXL `);
            break;   
    case  userSize > 95 && userSize < 97: 
            alert(`${userSize}  - XXXL `);
            break;                 
    
    default: alert('maybe stop eating');
}

/* Перепишите пример ниже, используя if.
let color = prompt("Введите цвет","");
switch (color){
    case "red": document.write("<div style='background-color: red;'>красный</div>");
    case "black": document.write("<div style='background-color: black; color: white;'>черный</div>");
                break;
    case "blue": document.write("<div style='background-color: blue;'>синий</div>");
    case "green": document.write("<div style='background-color: green;'>зеленый</div>");
                break;
    default: document.write("<div style='background-color: gray;'>Я не понял</div>");
} */

let color = prompt("Введите цвет","");

if (color == "red" || color == "black" ) {
    document.write("<div style='background-color: red;'>красный</div>")
} else if (color == "blue") {
    document.write("<div style='background-color: blue;'>синий</div>");
} else if (color == "green"){
    document.write("<div style='background-color: green;'>зеленый</div>");
} else {
    document.write("<div style='background-color: gray;'>Я не понял</div>");
}

//prompt: or

let age = prompt("Сколько вам лет?", "") || alert('Error');


//confirm: or this days

confirm('шопинг?') || alert("ты - бяка");


//triple prompt


let name = prompt("Ваше имя", ""),
    surname = prompt("Укажите фамилию", ""),
    patronymic = prompt("Ваше отчество", "");

    if(name && surname && patronymic) {
      alert(` Привет ${name} ${patronymic} ${surname} `);  
    } else {
        alert ('You need to enter your data');
    }


//default: or

/* let userName = prompt("Enter your name", "") || 'Ivanov';

console.log(userName); */


//default: if

let userName1 = prompt("Enter your name", "");

if (!userName1) {
    userName1 = 'Petrov';
}

console.log(userName1);

//login and password
/* Напишите код, который спрашивает логин, проверяет его на верность, в случае если логин верен, просит ввести пароль и проверяет его. В случае несовпадения логина или пароля выводить alert с текстом ошибки. В случае успешного логина - alert с поздравлением. Правильные логин: admin и пароль: qwerty. Используйте вложенные if и else. */

let login = prompt('Enter login', '');

if (login === 'admin') {
    let pass = prompt('Enter password', '');
    if (pass === 'qwerty') {
        alert('Congratulations !');
    } else {
        alert('incorect password');
    }
} else {
    alert('You enter wrong login');
}


//currency calc

/* Калькулятор обмена валют. Первый prompt спрашивает валюту: "usd" или "eur". С помощью switch установите обменный курс для валюты, выбранной пользователем, после чего спросите величину и переведите её из гривны в выбранную на первом prompt валюту. Выведите результат в alert() */

/* let currency = prompt('enter currency');

switch (currency){
    case 'usd': 
        let sum = prompt('Enter curency summ');
            alert(`You usd summ : ${sum *26.3} uah`);
            break;
    case 'eur': 
        let sumE = prompt('Enter curency summ');
            alert(`You usd summ : ${sumE * 30.3} uah`);
            break;
    
    default: alert('enter currency name');
} */

//currency calc: improved

/* let currency = prompt('enter currency');

switch (currency.toLocaleLowerCase()){
    case 'usd': 
        let sum = prompt('Enter curency summ');
        let rate = confirm('You want to buy?');
        rate ? alert(`You usd summ : ${sum*26.55} uah`): alert(`You usd summ : ${sum*26.3} uah`);
            break;
    case 'eur': 
        let sumE = prompt('Enter curency summ');
        let rateE = confirm('You want to buy?');
        rateE ? alert(`You usd summ : ${sumE*30.55} uah`): alert(`You usd summ : ${sumE*30.3} uah`);  
            break;
    
    default: alert('enter currency name');
} */

//currency calc: if

let currency = prompt('enter currency');

if (currency.toLocaleLowerCase() === 'usd'){
    let sum = prompt('Enter curency summ');
    let rate = confirm('You want to buy?');
    rate ? alert(`You usd summ : ${sum*26.55} uah`): alert(`You usd summ : ${sum*26.3} uah`);
} else if (currency.toLocaleLowerCase() === 'eur') {
    let sumE = prompt('Enter curency summ');
    let rateE = confirm('You want to buy?');
    rateE ? alert(`You usd summ : ${sumE*30.55} uah`): alert(`You usd summ : ${sumE*30.3} uah`); 
} else {
    alert('Enter correct currency name')
}
/* 
scissors
Сделайте игру "камень-ножницы-бумага". Пользователь вводит свой вариант через prompt, программа генерирует свой вариант через Math.random() и выводит через alert. Следующий alert выводит имя победителя или "ничья" */

let userAnswer = prompt('Enter you choise');

let appAnswer = Math.random() * 100;
console.log(appAnswer);
if (appAnswer > 33 && appAnswer < 66){
    appAnswer = 'камень';
    alert(appAnswer);
    if (appAnswer === userAnswer) {
        alert(' ничья  ');
    } else if (userAnswer === 'бумага') {
        alert('you winner');
    } else if (userAnswer === 'ножницы'){
        alert('you looser');
    }
} else if (appAnswer < 33) {
    appAnswer = 'бумага';
    alert(appAnswer);
    if (appAnswer === userAnswer) {
        alert(' ничья  ');
    } else if (userAnswer === 'камень') {
        alert('you looser');
    } else if (userAnswer === 'ножницы'){
        alert('you winner');
    }
} else if (appAnswer > 66) {
    appAnswer = 'ножницы';
    alert(appAnswer);
    if (appAnswer === userAnswer) {
        alert(' ничья  ');
    } else if (userAnswer === 'камень') {
        alert('you looser');
    } else if (userAnswer === 'бумага'){
        alert('you winner');
    }
}

