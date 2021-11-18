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

function cubes(arr){
    let arrCube = [];
    for (let i in arr){
        arrCube.push(i**3);
    }
    return arrCube;
}

console.log(cubes([1,5,5,5,5,5,,5,]));

//multiply table

/* C помощью вложенного цикла сформируйте массив массивов "таблица умножения". Для инициализации вложенных массивов используйте
arr[i] = [] //в i-тый элемент массива заносится новый пустой массив
arr[5][6] должен быть равен, соответственно, 30, arr[7][2] == 14 и так далее. */

let arr = []; 
    for (let i = 0; i < 10; i++){
        arr[i] = [i];
       //console.log(arr[5]);
        for (let k = 0; k < 10; k++){
                arr[i][k] = k; 
                arr[i][k] = k *i;           
        } 
    } 

 console.log(arr[5][6]);
    
/*     matrix to html table
Сделайте вложенный цикл, который формирует HTML-таблицу в переменной 
строкового типа из любого двумерного массива. Т. е. если в нём использовать результат 
работы предыдущего задания, то получится таблица умножения в HTML (Таблица Пифагора)
 */


function tableFromArray(arr){
    let str = '<table>';

        for (let i = 1; i < arr.length; i++) {
            str +='<tr>';
            for (let j = 1; j < arr.length; j++){ 
                str +=`<td> ${arr[j][i]}</td>`;
            }
            str +='</tr>';
        }
        str +='</table>';

        document.write(str);
}

tableFromArray(arr);



/* Задание на синий пояс: Треугольник
Сформировать следующую строку - треугольник: */
/* .....#.....
....###....
...#####...
..#######..
.#########.
########### */


let triangle = '';
    for (let i = 0; i < 12; i++){    
        triangle += '.'
         if( i == 12/2){
            triangle += `#`;  
        }
       /*  for (let k = 0; k < 11; k++){
            
        } */ 
    } 
    document.write(triangle);
