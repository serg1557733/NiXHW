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
        return function tn(){
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

/* makeSaver
Напишите функцию makeSaver, которая: */

//var saver = makeSaver(Math.random) //создает функцию-хранилище результата переданной в качестве параметра функции (Math.random 
// в примере). На этом этапе Math.random НЕ вызывается
//var value1 = saver()              //saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
//var value2 = saver()              //saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную 
//в makeSaver функцию;
//value1 === value2                 // всегда true

//var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()//*6)])
//var value3 = saver2()
//var value4 = saver2()

//value3 === value4 // тоже должно быть true



/* let namePrompt = prompt.bind(window, 'Как тебя зовут?')
let nameSaver = makeSaver(namePrompt)
alert(`Привет! Prompt еще не было!`)
alert(`Привет ${nameSaver()}. Только что запустился prompt, первый и последний раз`)
alert(`Слушай, ${nameSaver()}, го пить пиво. Ведь prompt был только один раз`) */

/* Таким образом makeSaver решает две задачи:
Навсегда сохраняет результат функции. Это актуально, например, для Math.random.
Действует лениво, то есть вызывает Math.random только тогда, когда результат действительно нужен. Если же по каким-то причинам значение не понадобится, то Math.random даже не будет вызван */

function makeSaver(func){
    let funcRes;
    console.log(funcRes);
    return function(){
          return func;
    }
}

console.log(makeSaver());



let saver = makeSaver(Math.random)


console.log(saver);



//console.log(saver());
//console.log(saver());


var value1 = saver()              //saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
var value2 = saver()              //saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную 
//в makeSaver функцию;
//console.log(value1 === value2);                 // всегда true