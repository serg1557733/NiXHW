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

let array1 = [];
let elem1 = prompt('Enter element');
for (let i = 0; elem1; i++){
    let elem1 = prompt('Enter element');
    if (elem1) {
       array1[i] = elem1;
    }  else {
        console.log('enter element');
    }
}
console.log(array1);