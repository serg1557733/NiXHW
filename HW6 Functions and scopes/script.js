//ДЗ: Функции и области видимости

//Анализ
/* Проанализируйте свои предыдущие ДЗ на предмет повторяющихся действий и придумайте названия, параметры и возвращаемое значение для функций в этих случаях */

//Напишите функцию a, которая просто является коротким именем для alert. Смотрите пример 
//с d(), которая является коротким именем для debugger из материала лекции

function a(text) {
    alert(`${text}`);
}

//a('HI');

function cube(number) {
    console.log(number * 3); //for switch test
    return number * 3;
}
console.log(cube(3));

//Напишите функцию avg2, которая рассчитывает среднюю для двух чисел:
//формула для подсчета среднего: (a + b) / 2

/* function  avg2(a,b) {
    return (a + b) / 2;
} */
let avg2 = (a, b) => (a + b) / 2;

console.log(avg2(10, 5));

/* function sum3(a,b,c) {
    return a + b + c;
} */

let sum3 = (a, b, c) => a + b + c;

console.log(sum3(10, 5, 100500));

//intRandom

function intRandom(max, min = 0) {
    return Math.round(Math.random() * (max - min) + min);
}
console.log(intRandom(0, 1));
console.log(intRandom(10));
console.log(intRandom(2, 15));
console.log(intRandom(-1, 1));
console.log(intRandom(-1, -1));

//greetAll Сделайтей функцию, которая приветствует всех, кто передан в качестве параметров.
/* 
function greetAll() {
    console.log(arguments);
    [...arguments].forEach(element => {
        alert(`Hello ${element}`);
        
    });
}

greetAll("Superman") // выводит alert "Hello Superman"
greetAll("Superman", "SpiderMan") // выводит alert "Hello Superman, SpiderMan"
greetAll("Superman", "SpiderMan", "Captain Obvious") // выводит alert "Hello Superman, SpiderMan, Captain Obvious"

 */

//Напишите функцию sum, которая сумирует любое количество параметров: Используйте псевдомассив arguments для получения всех параметров, и for для итерирования по нему

function sum() {
    let sum = 0;
    [...arguments].forEach(element => {
        sum += element;
    });
    console.log(sum);
}

sum(1) // => 1
sum(2) // => 2
sum(10, 20, 40, 100) // => 170

//Union


/* let funcName = prompt("Введите название задания");

switch (funcName.toLowerCase()){
    case "a": a(prompt("enter text"));
              break;
    case "cube": cube(prompt("enter number"))
              break;
    case "intrandom": intRandom(prompt("enter max"),prompt("enter min "));
              break;
    case "sum": sum(prompt("enter number"))
              break;
    case "avg2": avg2(prompt("enter num"));
              break;      
} */

//Union declarative


let funcObj = {
                a: function a() {
                        alert(`${prompt("enter text")}`);
                        },
                cube: function cube() {
                        let num = prompt("enter number");
                        console.log(num * 3)
                        return num * 3;
                        },
                intrandom: function intRandom() {
                        let max = prompt("enter max"),
                            min = prompt("enter min ");
                        console.log(Math.round(Math.random() * (max - min) + min));
                        return Math.round(Math.random() * (max - min) + min);
                        }

                }

funcObj.a();
funcObj.intrandom();