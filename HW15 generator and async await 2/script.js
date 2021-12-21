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

//domEventPromise
//Реализуйте промисифицированную функцию, которая резолвит промис по событию в DOM: