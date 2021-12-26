//Async/Await Homework 2
const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

//Используя асинхронную функцию и бесконечный цикл, просимулируйте светофор:


/* async function trafficLight(){
    while (true){
        document.querySelector('.green').style.backgroundColor = 'green';
        document.querySelector('.red').style.backgroundColor = '';
        await delay(3000);
        document.querySelector('.green').style.backgroundColor = '';
        document.querySelector('.yellow').style.backgroundColor = 'yellow'; 
        await delay(500)
        document.querySelector('.yellow').style.backgroundColor = ''; 
        document.querySelector('.red').style.backgroundColor = 'red';
        await delay(2000)
    }
}
trafficLight(); */

//Stage 2
//Сделайте trafficLight более универсальной - добавьте в параметры DOM-элемент для отображения, 
//а так же время работы каждого цвета


async function trafficLight(rootElClass, greenDelay, redDelay, yellowDelay){
    let root = document.querySelector(rootElClass);
    for (let i = 0; i <3; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'black';
        root.append(div);
    }
    while (true){
        root.children[0].style.backgroundColor = 'green';
        root.children[2].style.backgroundColor = '';
        await delay(greenDelay);
        root.children[1].style.backgroundColor = 'yellow';
        root.children[0].style.backgroundColor = '';
        await delay(redDelay)
        root.children[2].style.backgroundColor = 'red';
        root.children[1].style.backgroundColor = '';
        await delay(yellowDelay)
    }
   
}
trafficLight('.wrapper', 1000, 800, 2000);

// domEventPromise
// Реализуйте промисифицированную функцию, которая резолвит промис по событию в DOM:

// domEventPromise(knopka, 'click').then( e => console.log('event click happens', e))

//  Функция должна:
// используя addEventListener повесить свой обработчик события на DOM element событие eventName
// по событию зарезолвить промис отдав в качестве результата объект события
// убрать обработчик с DOM-элемента, используя removeEventListener

function domEventPromise(element, eventName){
   
    return new Promise(function (resolve, reject){ 
        const resolver = (e) => {
           resolve(e.target) 
           removeEventListener(eventName, resolver);
           
        };
        element.addEventListener(eventName, resolver); 
        
    })
}
//domEventPromise(knopka, 'click').then( e => console.log('event click happens', e))

// PedestrianTrafficLight
// Напишите упрощенный светофор для пешеходов


// async function PedestrianTrafficLight(rootElClass, greenDelay, redDelay){
//     let root = document.querySelector(rootElClass);
//     for (let i = 0; i < 2; i++){
//         let div = document.createElement('div');
//         div.style.backgroundColor = 'black';
//         root.append(div);
//     }
//     while (true){
//         root.children[0].style.backgroundColor = 'green';
//         root.children[1].style.backgroundColor = '';
//         await delay(greenDelay);
//         root.children[1].style.backgroundColor = 'red';
//         root.children[0].style.backgroundColor = '';
//         await delay(redDelay)
//     }
// }
// PedestrianTrafficLight('.wrapper1', 3000,2500);


// Stage 2
// Используя Promise.race, domEventPromise и кнопку в DOM сделайте пешеходный светофор с кнопкой, который так же переключается по времени периодически.


// async function PedestrianTrafficLight(rootElClass, greenDelay, redDelay){
//         let root = document.querySelector(rootElClass);
//         for (let i = 0; i < 2; i++){
//             let div = document.createElement('div');
//             div.style.backgroundColor = 'black';
//             root.append(div); 
//         }  
        
//         while (true){
//                     root.children[0].style.backgroundColor = 'green';
//                     root.children[1].style.backgroundColor = '';
//                     await delay(greenDelay);
//                     root.children[1].style.backgroundColor = 'red';
//                     root.children[0].style.backgroundColor = '';
//                     await Promise.race([delay(redDelay), domEventPromise(knopka, 'click')]);
//                 }
//     }   

//     PedestrianTrafficLight('.wrapper1', 2000, 4500);


// Stage 3
// Не давайте возможности пешеходам сильно наглеть - предусмотрите задержку, после которой будет работать кнопка.

async function PedestrianTrafficLight(rootElClass, greenDelay, redDelay){
    let root = document.querySelector(rootElClass);
    for (let i = 0; i < 2; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'black';
        root.append(div); 
    }  

    let buttonResolver = (knopka) => new Promise(() => {
        setTimeout(() => {
           // console.log('start');
            knopka.disabled = ""}, 10000);
        }, () => reject)
    
    while (true){
                
                root.children[0].style.backgroundColor = 'green';
                root.children[1].style.backgroundColor = '';
                await Promise.race([delay(greenDelay), buttonResolver(knopka)]);
                 
                root.children[1].style.backgroundColor = 'red';
                root.children[0].style.backgroundColor = '';
                
                await Promise.race([delay(redDelay), domEventPromise(knopka, 'click')]).then( e => {
                    e.disabled = 'true';
                });
                
            }
}   

PedestrianTrafficLight('.wrapper1', 2000, 4500);


// speedtest
// Написать асинхронную функцию
// где:
// count - количество повторов
// parallel - количество одновременных запросов/промисов в одном повторе
// getPromise - функция, которая умеет вернуть нужный Вам промис для тестирования скорости его работы

// которая будет в цикле count раз создавать parallel промисов с помощью переданной функции getPromise, дожидаться выполнения всех parallel промисов, после чего цикл повторяется.

// Замерить время общее время выполнения, и вычислить:
// duration, общую длительность работы цикла
// parallelDuration, среднее время обработки запроса параллельно (за какое время исполнилось parallel*count промисов),
// paralledSpeed, скорость в запросах в миллисекунду
// queryDuration, реальное среднее время запроса (отталкиваясь от count и времени работы цикла).
// querySpeed, реальное средняя скорость запроса
// Эти переменные вернуть в одном объекте-результате (см. заготовку выше)
// Для отладки попробуйте на delay (пример выше есть, реальное время будет отличаться на единицы-десятки миллисекунд). Потом можете попробовать на swapi.dev. Не создавайте чрезмерно много параллельных запросов.
    

    async function speedtest(getPromise, count, parallel = 1){
        let duration = performance.now()
        let initParallel = parallel;
        let promisArray = [];
        for(let i = 0; i < count; i++) { 
            promisArray[i] = getPromise();
            parallel -= 1 
            await Promise.all(promisArray)         
        }
       
        
        console.log(promisArray); 
       
        
        duration = performance.now() - duration
        console.log(duration)
        console.log((initParallel * count))

          return {
          duration: duration,
          querySpeed: count / duration, 
          queryDuration: duration / count,
          parallelSpeed: count/ duration * initParallel,
          parallelDuration: duration /(initParallel * count)
        }

      }

      speedtest(() => delay(1000), 10, 10 ).then(result => console.log(result))
      // {duration: 10000, 
      // querySpeed: 0.001, //1 тысячная запроса за миллисекунду
      // queryDuration: 1000, //1000 миллисекунд на один реальный запрос в среднем 
      // parallelSpeed: 0.01  // 100 запросов за 10000 миллисекунд
      // parallelDuration: 100 // 100 запросов за 10000 миллисекунд
      speedtest(() => fetch('http://swapi.dev/api/people/1').then(res => res.json()), 1, 2)

