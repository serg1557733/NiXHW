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

alert(` Привет ${name} ${patronymic} ${surname} `);

//default: or