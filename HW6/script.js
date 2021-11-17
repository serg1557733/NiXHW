//ДЗ: Функции и области видимости

//Анализ
/* Проанализируйте свои предыдущие ДЗ на предмет повторяющихся действий и придумайте названия, параметры и возвращаемое значение для функций в этих случаях */

//Напишите функцию a, которая просто является коротким именем для alert. Смотрите пример 
//с d(), которая является коротким именем для debugger из материала лекции

function a(text){
    alert(`${text}`);
}

//a('HI');

function cube(number){
    return number*3;
}
console.log(cube(3));

//Напишите функцию avg2, которая рассчитывает среднюю для двух чисел:
//формула для подсчета среднего: (a + b) / 2

/* function  avg2(a,b) {
    return (a + b) / 2;
} */
let avg2 = (a,b) => (a + b) / 2;

console.log(avg2(10,5));

/* function sum3(a,b,c) {
    return a + b + c;
} */

let sum3 = (a,b,c) => a + b + c;

console.log(sum3(10,5,100500));

//intRandom

function intRandom(max, min = 0) {
    return Math.round(Math.random() * (max - min) + min); 
}
console.log(intRandom(0,1));
console.log(intRandom(10));
console.log(intRandom(2,15));
console.log(intRandom(-1,1));
console.log(intRandom(-1,-1));

//greetAll



