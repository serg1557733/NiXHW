//Домашнее задание: Ассоциативные массивы

//3 persons

//Сделать три ассоциативных массива a, b, c, в каждом из которых должны быть поля name и surname.
let a = {
    name: "Serg",
    surname: "Stepanov",
}
let b = {
    name: "Semen",
    surname: "Ivanovv",
}
let c = {
    name: "Maxim",
    surname: "Petrenko",
  
}

//different fields

a.age = 25;
b.sex = 'men';
c.fatherName = 'Viktorovich';

console.log(a, b, c);

//fields check

//("fatherName" in c)? alert(alert(c["fatherName"])): alert('not found');

/* function getOptionalKey(obj) {
    for (let key in obj){
        if (key !== 'surname' && key !== 'name' ) {
            alert( `${key} : ${obj[key]} `);
        }
    } 
}
getOptionalKey(a);

getOptionalKey(b);

getOptionalKey(c); */

//or


/* function getKey(obj, keyToFind) {
    for (let key in obj){
        if (key === keyToFind) {
            alert(obj[key]);
        }
    }
}

getKey(a, 'age');
getKey(b, 'sex');
getKey(c, 'fatherName'); */


//array of persons

let persons = [a, b, c, {name : 'oleg', surname: "Pavlov"}];

console.log(persons);


//loop of persons Сделайте цикл, который выводит весь массив persons в форме объектов console.log(persons[i])


for (let index in persons) {
    console.log(persons[index]);
}

//loop of name and surname

for (let i in persons) {
    console.log(`${persons[i].name}  ${persons[i].surname} `);
}

//loop of loop of values


for (let objct of persons) {
     for(let key in objct){
        console.log(`${objct[key]}`);
    } 
}

//fullName  Сделайте цикл, которых добавляет поле fullName в каждый объект, 
//содержащий ФИО. Учтите, что поле fathername не является обязательным.

for (let objct of persons) {
    if("fatherName" in objct){
         objct.fullName = `${objct.name}  ${objct.surname} ${objct.fatherName}`;
    } else {
        objct.fullName = `${objct.name}  ${objct.surname}`;
    }
      
}
console.log(a, b, c);

//serialize   Создайте JSON-строку из persons

let jsonFromArr = JSON.stringify(persons);

console.log(jsonFromArr);

//deserialize Создайте ассоциативный массив с одной персоной из JSON-строки. Добавьте её в persons


let objFromJson =JSON.parse(jsonFromArr)[0];

console.log(objFromJson);
persons.push(objFromJson);

//console.log(persons);

//HTML

/* let str = "<table border='1'>"

for (let i in persons) { 
    str += `<tr><td>${persons[i].name}</td>
    <td>${persons[i].surname}</td></tr>`;
}
str += "</table>"

document.write(str) */

//HTML optional fields
/* 
Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. 
Имя и Фамилия, а так же другие поля при наличии. Колонки: строки таблицы поля, - персоны. */
let str = "<table border='1'>";

//th name surname
for (let i in persons) {
    if (i%2){
    str += `<tr>`;    
    } else {
        str += `<tr class='tr'>`;   //HTML tr color
    }
    str += `<td>${Object.keys(persons[i])[i]}</td>` 
        for (let k of Object.values(persons)){
            if (Object.values(k)[i]){
                str += `<td>${Object.values(k)[i]}</td>`;     
            } else { 
                str += `<td>****${persons[i][k]}****</td>`;
              
            }         
    }
    str += `</tr>`;
}
str += "</table>";

document.write(str);
//Задание на синий пояс.

let body = {
    tagName: 'div',
    children: [{
            tagName: 'div',
            children: [{
                    tagNAme: 'span',
                    children: 'Enter a data please:'
                },
                {
                    tagNAme: 'br'
                },
                {
                    tagNAme: 'input',
                    attributs: {
                        type: 'text',
                        id: 'text'
                    }
                },
                {
                    tagNAme: 'input',
                    attributs: {
                        type: 'text',
                        id: 'surname'
                    }
                }
            ]},
            {
                tagName: 'div',
                children: [{
                        tagNAme: 'button',
                        children: 'OK',
                        attributs: {
                            id: 'ok'
                        }
                    },
                    {
                        tagNAme: 'button',
                        children: 'Cancel',
                        attributs: {
                            id: 'cancel'
                        }
                    }]
            }

        ]  
}


let someTree = {
        tagName: "table", 
        children: [ 
            {
                        tagName: "tr",
                        children: [
                            {
                                tagName: "td",
                                text: "some text",
                            },
                            {
                                tagName: "td",
                                text: "some text 2",
                            }
                        ]
            }
        ],
        attributs: 
        {
            border: 1,
        },
}
//console.log(body);

function htmlConstructor (obj) {
    let {tagName, children, attributs, text} = obj;
    let  body = `<${tagName} ${Object.keys(attributs)}=${Object.values(attributs)}>`; 
    body = `<${tagName}>`;
    if (children) { 
        for (let key of children){
            let {tagName, children, attributs, text} = key;
            body += `<${tagName}>`;
           //htmlConstructor (obj)                      
                                if (children) { 
                                for (let key of children){
                                    let {tagName, children, attributs, text} = key;
                                    body += `<${tagName}>`;
                                    body +=`${text}`
                                    body +=  `</${tagName}>`;
                                }
                            }
            body +=  `</${tagName}>`
        }
    } 
    body +=`</${tagName}>`    
    console.log(body);
    document.write(body);
};       
    

 //htmlConstructor (body);
 htmlConstructor (someTree);

 //destruct array

 let arr = [1,2,3,4,5, "a", "b", "c"];

 let [,even1,,even2] = arr;
 let [odd1, ,odd2, ,odd3] = arr;
 let [,,,,,...arrLeters] = arr;


 console.log(even2,even1);
 console.log(odd1,odd2,odd3);
 console.log(arrLeters);

 //destruct string
 let arr1 = [1, "abc"];

let [number] = arr1;
let [s1,s2,s3] = arr1[1];

console.log(number);
console.log(s1,s2,s3);

 //destruct 2

 let obj7 = {name: 'Ivan',
           surname: 'Petrov',
           children: [{name: 'Maria'}, {name: 'Nikolay'}]};

 let {name: name1} = obj7.children[0];   
 let {name: name2} = obj7.children[1];    
 console.log(name2);   
 
 //destruct 3

 let arr99 = [1,2,3,4,5,6,7,10];

 let length = arr99.length;
 let [a1, b1] = arr99;
 
 console.log(length);
 console.log(a1);
 console.log(b1);

//Задание на черный пояс
/* Сделать предыдущее задание на черный пояс в упрощенном виде: не использовать четырехмерный массив для хранения истории, а использовать ассоциативный массив: Например, если пользователь ввел 1212 за последние четыре хода, то мы ищем то, что было введено последний раз после такой последовательности:
var history      = "1212"
var predictValue = predictArray[history] // в predictValue то, что ввел последний раз пользователь после нажатий 1212
var newValue     = prompt("введите 1 или 2","");
predictArray[history] = newValue         //сохраняем новый ввод */
//сдвигаем историю
/*  Как это работает?
Гадалка хранит историю ввода (4 последних числа) пользователя в массиве history. 
Каждое следующее число добавляется с помощью push в конец массива, при этом первое число из массива (самое старое) удаляется с помощью shift.
Гадалка запоминает что пользователь ввёл в предыдущий раз после такой истории. 
То есть, если пользователь вводил 0,1,0,1,0, то логично предположить, что с историей 0,1,0,1 следующим вариантом будет 0. Для хранения используется 4х мерный массив, индексами которого является история:
predictArray[history[0]][history[1]][history[2]][history[3]] равно тому,
 что пользователь ввёл после истории в предыдущий раз.
Алгоритм:
Изначально predictArray содержит, например, -1, или иные значения, которые отличаются от пользовательского ввода. История пусть состоит из единиц: history = [1,1,1,1];, Т. е. считается что пользователь нажимал 1 четыре ряда подряд. Пока мы не можем предсказать, так как в массиве еще не сохранилось то, что вводил пользователь, мы используем Math.random в качестве предсказания, и записываем ввод пользователя в массив predictArray, добавляя новые значения в history, и сдвигая его. Т. е. если пользователь ввел 0, то:
predictArray[1][1][1][1] = 0; //1,1,1,1 - история, 0 - новое значение
history = [1,1,1,0]        //удаляем старую единицу из истории и добавляем введенный только что 0
Для предсказания следующего достаем значение массива predictArray[1,1,1,0], а после ввода опять записываем туда то, что ввёл пользователь (пусть 1):
predictArray[1][1][1][0] = 1; //1,1,1,0 - история, 1 - новое значение
history = [1,1,0,1]        //удаляем старую единицу из истории и добавляем введенный только что 1
Таким образом в predictArray накапливаются знания о том, что вводит пользователь после определенной истории чисел. */