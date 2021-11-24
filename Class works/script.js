/* let body = {
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

        console.log(body.children[0].children[0].children);
        console.log(body.children[1].children[1].attributs.id); */




/* let root = document.querySelector('.root');

for (let i = 0; i < 10; i++){

    let tr = document.createElement('tr');
    
    root.append(tr);
    
    for (let k = 0; k < 10; k++){

        let td = document.createElement('td');
        
        if (i === 0) {
            td.innerText = k;
            tr.append(td);
        } else if (k === 0) {
            td.innerText = i;
            tr.append(td);
        } else {
            td.innerText = i * k;
            tr.append(td);
        }  
    }
}  */

/* Подсветить ячейку над которой находится курсор мыши.
 Используйте события mouseover и mouseout, 
 и style.backgroundColor для подсветки.
 */

/* let td = document.querySelectorAll('td');

td.forEach((i) => {
    i.onmouseover = () => i.style.backgroundColor = 'yellow';
    i.onmouseout = () => i.style.backgroundColor = '';
}) */
/* 
Подсветить строку и столбец,
в которой находится подсвеченная ячейка. Используйте parentElement (родительский элемент элемента DOM), и список его детей: children.
Читкоды:
в обработчик события в качестве this передается элемент, на котором событие произошло;
у td есть свойство cellIndex, в котором лежит номер ячейки;
у tr, аналогично есть свойство rowIndex - номер строки; */



/* td.forEach((item, i) => {
    item.onmouseover = () => {
       item.style.backgroundColor = 'yellow'; 
       item.parentNode.style.backgroundColor = 'green';
       console.log(item.cellIndex);
       console.log(i);
       
    } 

    item.onmouseout = () => {
        item.style.backgroundColor = '';
        item.parentNode.style.backgroundColor = '';
    }
}) */


let str = '<table>';

for (let i = 1; i < 10; i++) {
    str +='<tr>';
    for (let j = 1; j < 10; j++){ 
        str +=`<td> ${j * i} </td>`;
    }
    str +='</tr>';
}
str +='</table>';
console.log(str);
document.write(str);



let arr = [1, 2, 3, 4];

/* let sum = 0;
for (let el of arr) {
    sum += el;
}
arr.push(sum);
console.log(arr); */

let arrsum = arr.reduce((summ, acc) =>  summ + acc);
arr.push(arrsum);
console.log(arr);

