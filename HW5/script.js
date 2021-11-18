//ДЗ: Вложенные декларативные структуры и код в них. Отображение циклических и древовидных структур. Циклы.

//html tree

let body = {
    tagName: 'body',
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
            ]
        },
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
                }
            ]

        }

    ]
}

//declarative fields


/*  let notebook = {
    brand: prompt("Enter a brand"),
    type:  prompt("Enter a type"),
    model: prompt("Enter a model"),
    ram: +prompt("Enter ram value"),
    size: prompt("Enter display size"),
    weight:+prompt("Enter weight"),
    resolution: {
        width: +prompt("Enter resolution weight"),
        height:  +prompt("Enter resolution height"),
    },
};

let phone = {
    brand: prompt("Enter a brand"),
    model: prompt("Enter a model"),
    ram: +prompt("Enter ram value"),
    color: prompt("Enter color"),
};

let person = {
    name: prompt("Enter name"),
    surname: prompt("Enter surname"),
    married: confirm('Are you merried?')
}

//object links

person.smartphone = phone;
person.laptop  = notebook;
notebook.owner = person;
phone.owner = person;
 */


//console.log(person.smartphone.owner.laptop.owner.smartphone == person.smartphone);//true

//imperative array fill 3


//let arr1 = [prompt('Enter element'), prompt('Enter element'), prompt('Enter element')];

//console.log(arr1);

//while confirm
/* 
while (!confirm()) {
    console.log('not')
}

//array fill
let array = [];
let elem;
do {
    elem = prompt('Enter element');
    if (elem) {
        array.push(elem);
    } else {
        console.log('enter element');
    }
}
while(elem);


console.log(array); */

//array fill nopush

/* let array1 = [];
let elem1 = prompt('Enter element');
for (let i = 0; elem1; i++){
    let elem1 = prompt('Enter element');
    if (elem1) {
       array1[i] = elem1;
    }  else {
        console.log('enter element');
    }
}
console.log(array1); */

//infinite probability
/* Создайте бесконечный цикл, который прерывается с помощью конструкции break,
 когда Math.random() > 0.9. Код должен подсчитывать количество итераций и вывести это число с помощью alert. */

/* for (let i = 0; i >= 0; i ++ ){
    if (Math.random() > 0.9 ){
        alert(`${i}`);
        break;
    } 
    else {
        console.log(i);
    }
} */
//empty loop
//Сделайте цикл с prompt, который прерывается по нажатию OK и продолжается по нажатию "Отмена" c пустым телом цикла.
/* let answ;
do {
    answ = prompt('','1');
    console.log(!answ);
} while(!answ); */

//progression sum Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3 (1,4,7....) используя цикл for.
n = 25;
let sum = 0;
for (let i = 0; i < n; i++ ){
    sum += i; 
}
console.log(sum);

//chess one line
//Сформировать строку " # # # # # " с помощью цикла for. Длина строки может быть четной и нечетной, и указывается в одном месте в коде.

function string(length) {
    let str = '';
    for(let i = 0; i < length; i++)
    str +=' #'
    document.write(str)
}
string(30);

//Сформировать строку c помощью вложенных циклов. Для перевода строки используйте \n.
let strNum = '';
for (let i =0; i < 10; i++){
    strNum +='\n <br>';
    
    for (let k =0; k < 10; k++){
        strNum += `${k}`;
    }
    
}

document.write(strNum);
console.log(strNum);
//chess

function chessDesc(width, height) {
    let desk = '';
    for (let i = 0; i < width; i++){
        desk +='<br>';
        for (let k = 0; k < height; k++){
            if(i%2){
              desk += `. #`;  
            } else {
            desk += `# .`;  
            }  
        } 
    } 
    document.write(desk);
    
}
chessDesc(15, 30);

//cubes Сформируйте массив из N элементов, содержащий в себе кубы индексов, т. е:



