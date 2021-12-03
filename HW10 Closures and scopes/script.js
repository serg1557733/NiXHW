/* //Closures and scopes
Замыкания

Напишите функцию makeProfileTimer, которая служит для замера времени выполнения другого кода и работает следующим образом:

   var timer = makeProfileTimer()
   alert('Замеряем время работы этого alert');  //некий код, время выполнения которого мы хотим измерить с высокой точностью
   alert(timer()); //alert должен вывести время в микросекундах от выполнения makeProfileTimer до момента вызова timer(), 
                   
   // т. е. измерить время выполнения alert
Используйте performance.now() */

function makeProfileTimer() {
    let t0 = performance.now();
    return function tn() {
        let t1 = performance.now();
        return ("Call took " + (t1 - t0) + " milliseconds.")
    }
}


let timer = makeProfileTimer();
//alert('Замеряем время работы этого alert'); 
//alert(timer());

let timer2 = makeProfileTimer();
//confirm();
//confirm(timer2());

let timer3 = makeProfileTimer();
//console.log('timer3')
//console.log(timer3());


// makeSaver


function makeSaver(func) {
    let funcRes = func();

    function saverFunc() {
        return funcRes;
    }
    return saverFunc;
}

let saver = makeSaver(Math.random)
//console.log(saver());
//console.log(saver());
//console.log(saver()); 


var value1 = saver() //saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
var value2 = saver() //saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную 
//в makeSaver функцию;777
//console.log(value1 === value2);                 // всегда true

/* let namePrompt = prompt.bind(window, 'Как тебя зовут?')
let nameSaver = makeSaver(namePrompt)
alert(`Привет! Prompt еще не было!`)
alert(`Привет ${nameSaver()}. Только что запустился prompt, первый и последний раз`)
alert(`Слушай, ${nameSaver()}, го пить пиво. Ведь prompt был только один раз`) */




/* Final Countdown
Напишите код, который будет делать обратный ежесекундный отсчёт в консоли, \
используя console.log. 
Используйте Self Invoked Function для создания замыкания и setTimeout для задержки вывода. 
Результатом должно быть:
   5 //пауза 1 секунда
   4 //пауза 1 секунда
   3 //пауза 1 секунда
   2 //пауза 1 секунда
   1 //пауза 1 секунда
   "поехали!" */



let counter = 5;

function countdown() {
    console.log(counter);
    let int1 = setTimeout(() => {
        countdown()
    }, 1000);
    if (counter > 0) {
        return (function decr() {
            return counter--;
        })();
    }
    clearTimeout(int1)
    if (counter === 0) {
        console.log('GOGOGO');
    }
};
//countdown();


/* 
//cheeter
let counter = 5;
function countdown() {
    console.log(counter);
    if (counter > 0) {
    return (function decr(){
        return counter--;    
    })(); 
    }
     else if (counter===0){
    counter = 'GOGOGO';
    
    } else clearInterval(int1);
};   

let int1 = setInterval(() => {countdown()}, 1000); */



//myBind

function myBind(func, funcThis, arr) {
    return function retFunc(...params) {
        let count = 0;
        for (let el in arr) {
            if (arr[el] === undefined) {
                arr[el] = params[count];
                count++;
            }
        }
        return func.apply(funcThis, arr);
    }
}


let pow5 = myBind(Math.pow, Math, [undefined, 5])
console.log(pow5(2));
console.log(myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f'])('a', 'c', 'd'));
let chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5, undefined, 8, undefined, 9])
console.log(chessMin(-1, -5, 3, 15)) // вызывает Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5

//let zeroPrompt = myBind(prompt, window, [undefined, "0"]) // аналогично, только теперь задается "0" как текст по умолчанию в prompt,                                             // а текст приглашения пользователя задается при вызове zeroPrompt
//let someNumber = zeroPrompt("Введите число")              // вызывает prompt("Введите число","0")




//DOM

/* ТЕще дз: переписать подсветку таблицы используя минимум this.* и максимум переменных замыкания. Для этого Надо занести обработчики событий во вложенный for  */

function Table(rootElementClass) {

    let domElement = document.querySelector(`.${rootElementClass}`);
    this.tableCreate = () => {
        let table = document.createElement('table');
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            for (let k = 0; k < 10; k++) {
                let td = document.createElement('td');
                if (i === 0) {
                    td.innerText = k;
                    tr.append(td);
                } else if (k === 0) {
                    td.innerText = i;
                    tr.append(td);
                } else {
                    td.innerText = i * k;
                    tr.append(td);
                }
            }
        }
        domElement.append(table);
    }
    this.cellLigth = () => {
        const td = document.querySelectorAll('td');
        td.forEach((item, i) => {
            item.onmouseover = (e) => {
                item.style.backgroundColor = 'yellow';
                item.parentNode.style.backgroundColor = 'green';
                let trCollect = Array.from(item.parentElement.parentElement.children);
                trCollect.forEach((el, i) => {
                    if (el.children[i].cellIndex === item.cellIndex) {
                        Array.from(el.parentElement.children).forEach(elem => elem.children[i].style.backgroundColor = 'red');
                    }
                });
            };

            item.onmouseout = () => {
                item.style.backgroundColor = '';
                item.parentNode.style.backgroundColor = '';
                let trCollect = Array.from(item.parentElement.parentElement.children);
                trCollect.forEach((el, i) => {
                    if (el.children[i].cellIndex === item.cellIndex) {
                        Array.from(el.parentElement.children).forEach(elem => elem.children[i].style.backgroundColor = '');
                    }

                });
            }
        })

    }
}

let table1 = new Table('root');
table1.tableCreate();
table1.cellLigth();


let table2 = new Table('root');
table1.tableCreate();
table1.cellLigth();