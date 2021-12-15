//Javascript Async: Promise Homework

/* fetch basic

С помощью следующего кода считать и вывести информацию о Люке Скайвокере:
fetch('https://swapi.dev/api/people/1/')
  .then(res => res.json())
  .then(luke => console.log(luke)) */

fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(luke => console.log(luke))

let dataLuke = async () => {
    try {
        await fetch('https://swapi.dev/api/people/1/')
            .then(res => res.json())
            .then(luke => console.log(luke))
    } catch (err) {
        console.log(err);
    }
}

dataLuke();

/* fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))  */


let url = 'https://jsonplaceholder.typicode.com/users';
/* 
let dataFetch = async function(url){
        let response = await fetch(url);
        let json = response.json();
        return await json;
    }

dataFetch(url).then(data => {
    tableFromJson(root, data)
});  */




/* let dataFrom =async function() {
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json =>json) 
    return json;
}
console.log(dataFrom()); */

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}



//Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
/* let dataResp = await Promise.all([
     fetch('https://swapi.dev/api/people/1/'),
     fetch('https://swapi.dev/api/people/1/'),
     fetch('https://jsonplaceholder.typicode.com/todos/1')
])
console.log(dataResp); */



/* 
Напишите функцию для отображения любого JSON в форме таблицы. Функция должна принимать два параметра:
DOM - элемент, в котором строится таблица
JSON, который нужно отобразить. */

//const json = '{"user": "semen", "result":true, "age":42, "sex": "men"}';

function tableFromJsonS(rootElement, json) {
    let table = document.createElement('table');
    table.style.border = 'solid black 1px';
    let data = JSON.parse(json);
    for (let [key, value] of Object.entries(data)) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let td1 = document.createElement('td');
        td.innerText = key;
        tr.append(td)
        td1.innerText = value;
        tr.append(td1)
        table.append(tr);
    }
    rootElement.append(table);
}

//tableFromJsonS(root, json);

/* 
fetch improved
Расширить функцию отображения:
Если одно из полей строка или массив.
Если строки или строка содержат в себе https://swapi.dev/api/
То выводить вместо текста строки кнопку, при нажатии на которую:
делается fetch данных по этой ссылке
функция отображения запускает сама себя(рекурсивно) для отображения новых данных в том же элементе. */


const json = '{"user": "semen", "result":true, "age":42, "sex": "men"}';



function tableFromJson(rootElement) {
    let table = document.createElement('table');
    table.style.border = 'solid black 1px';

    function tableCells(data) {
        for (let [key, value] of Object.entries(data)) {
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            let td1 = document.createElement('td');
            if (typeof value == 'object') {
                tableCells(value)
                let btn = document.createElement('button');
                btn.innerText = Object.keys(value);
                this.onclick = console.log(value);
                td.append(btn);
            } else {

                td.innerText = key;
                td1.innerText = value;
            }

            tr.append(td)
            tr.append(td1)
            table.append(tr);
        }

        rootElement.append(table);
    };

    loadJson(url).then(data => {
        data.forEach(tableCells(data));
    })
}
//tableFromJson(root);

/* myfetch
Используя XMLHTTPRequest, напишите промисифицированную функцию myfetch, т. е.
 функцию, которая возвращает промис, и работает схоже с fetch, только в один этап: */


function myfetch(url) {
    console.log('start')
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest()
        request.open('GET', url, true)
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState != 4) {
                return;
            }
            if (request.status == 200) {
                resolve(JSON.parse(request.responseText))
            } else {
                reject = () => console.log('Error: ' + request.status + ', ' + request.statusText);
            }
        }
    })
};


myfetch('https://jsonplaceholder.typicode.com/users')
    .then(luke => console.log(luke))


/* race
Используя Promise.race запустите запрос на API (myfetch) параллельно с delay. По результату определите, что было быстрее, запрос по сети, или определенный интервал времени. Подберите параметр delay так, что бы результат был неизвестен изначально, и при многократных запусках быстрее был то delay, то myfetch. */

let delay = new Promise(function(resolve, reject){
    setTimeout(resolve, Math.random()*300) //or near by 250ms
})

console.log(Promise.race([delay, myfetch('https://jsonplaceholder.typicode.com/users')])) ;
console.log(Promise.race([delay, myfetch('https://jsonplaceholder.typicode.com/users')])) ;
console.log(Promise.race([delay, myfetch('https://jsonplaceholder.typicode.com/users')])) ;
console.log(Promise.race([delay, myfetch('https://jsonplaceholder.typicode.com/users')])) ;
console.log(Promise.race([delay, myfetch('https://jsonplaceholder.typicode.com/users')])) ;
console.log(Promise.race([delay, myfetch('https://jsonplaceholder.typicode.com/users')])) ;