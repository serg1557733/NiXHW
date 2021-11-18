//DOM

/* Таблица умножения
Сделать таблицу умножения, используя DOM createElement 
и innerText. Создайте таблицу, вложенные строки и ячейки в циклах.  */


 let root = document.querySelector('.root');

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
} 

/* Подсветить ячейку над которой находится курсор мыши.
 Используйте события mouseover и mouseout, 
 и style.backgroundColor для подсветки.
 */

let td = document.querySelectorAll('td');

td.forEach((i) => {
    i.onmouseover = () => i.style.backgroundColor = 'yellow';
    i.onmouseout = () => i.style.backgroundColor = '';
}) 

/* 
Подсветить строку и столбец,
в которой находится подсвеченная ячейка. Используйте parentElement (родительский элемент элемента DOM), и список его детей: children.
Читкоды:
в обработчик события в качестве this передается элемент, на котором событие произошло;
у td есть свойство cellIndex, в котором лежит номер ячейки;
у tr, аналогично есть свойство rowIndex - номер строки; */



 td.forEach((item, i) => {
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
})