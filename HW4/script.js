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
Имя и Фамилия, а так же другие поля при наличии. Колонки: поля, строки таблицы - персоны. */
let str = "<table border='1'>";

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

    function htmlConstructor (obj) {
        let {tagName, children,attributs,id} = obj;
        if (children){
            htmlConstructor(obj);
            
        } else {
            let root = document.createElement(tagName);
            root.appendChild(children);
        }
        
    }

    htmlConstructor (body);