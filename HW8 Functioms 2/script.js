//Домашнее задание. Функции 2, ES6
let persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12},
]

function sort(array, sortString, bool = 'true') {
    if(bool){
    array.sort( (a, b) => {
        if (a[sortString] > b[sortString]) {
          return 1;
        }
        if (a[sortString] < b[sortString]) {
          return -1;
        }
        return 0;
      });
    } else {
        array.sort( (a, b) => {
            if (b[sortString] > a[sortString]) {
              return 1;
            }
            if (b[sortString] < a[sortString]) {
              return -1;
            }
              return 0;
          });
    }
    return array;
};

//sort(persons, "age", false); 
//сортирует по возрасту по возрастанию
//console.log(persons)
//sort(persons, "name", false); //сортирует по имени по убыванию
//console.log(persons);

//array map

/* Используя Array.map приведите все строки в массиве к числу. 
Элементы других типов оставьте как есть:
["1", {}, null, undefined, "500", 700]
должно превратиться в
[1, {}, null, undefined, 500, 700] */

let array = ["1", {}, null, undefined, "500", 700, 'fdg'];

let newArray = array.map((item) => {
    if(typeof(item) ==='string' && !isNaN(+item)){
      return + item;
    } else return item;
});

//console.log(newArray);

//array reduce
/* Получите произведение всех чисел в массиве, 
используя Array.reduce. 
Не обрабатывайте типы данных, не являющиеся числом.

результат должен быть 15 */

let redArray = ["0", 5, 3, "string", null];

let multyArray = redArray.reduce((accum, item) => {
    if(typeof(item) ==='number' && typeof(accum) ==='number'){
        return accum * item;
    } else return accum;
}, 1);

//console.log(multyArray);


/* object filter
Напишите свою реализацию Array.filter для объектов:
filter(phone,(key,value) => key == "color" || value == 2);
должно вернуть
{
    ram: 2,
    color: "black",
}
Для удаления пары ключ-значение используйте delete. Или сделайте копию объекта.
"Напишите свою реализацию" значит написать function filter.... и её тело, после чего код выше заработает */

let phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
};

let filterFunc = (key,value) => key == "color" || value == 2;

function filter(obj, func) {
    for(let key in obj){
        let validator = func(key, obj[key]);
        if(!validator){
            delete obj[key];
        }  
    }
    return obj;
}
let newArray1 = filter(phone,(key,value) => key == "color" || value == 2);
//console.log(newArray1);
//console.log(phone);

/* object map
Напишите свою реализацию Array.map для объектов:

map({name: "Иван", age: 17},
function(key,value){
    var result = {};
    result[key+"_"] = value + "$";
    return result;
}) 
//должен вернуть {name_: "Иван$", age_: "17$"}
"Напишите свою реализацию" значит написать function map.... и её тело, после чего код выше заработает */



function objMap (obj, func){
    for(let key in obj){
        return func(key, obj[key]);
    }
}

let newArra2 = objMap({name: "Иван", age: 17},

function(key,value){
    let result = {};
    result[key+"_"] = value + "$";
    return result;
}) 


//console.log(newArra2);

/* Рекурсия
Sum
Напишите функцию, который будет считать сумму арифметической прогрессии рекурсивно.
*/

function sum(num){
    if ( num == 0) return 0;
    if (num < 1) return  num + sum(num + 1); // maybe 
    if ( num == 1) return 1;
    return num + sum(num - 1);
}
//console.log(sum(5));
//console.log(sum(-3));




//**************************************************************//
//HTML Tree
//Сделать задание на синий пояс, используя рекурсию, без ограничения вложенности.

let someTree = {
    tagName: "table", //html tag
    children: [ //вложенные тэги
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
    attrs: 
    {
        border: 1,
    },
}

function htmlRecConstructor (obj) {
    let {tagName, children, attrs, text} = obj;
    let  body = `<${tagName} ${Object.keys(attrs)} = ${Object.values(attrs)}>`; 
  /*   for (let key in obj) { 
        body += `<${tagName}>`; 
        console.log(typeof children);
        if (typeof children == 'object') { 
            // htmlRecConstructor(obj)                      
        } 
        
    } */
    body +=`</${tagName}>` 
    document.write(body);      
  //console.log(body);   
};  
htmlRecConstructor(someTree) ;