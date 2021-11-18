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

/* td.forEach((i) => {
    i.onmouseover = () => i.style.backgroundColor = 'yellow';
    i.onmouseout = () => i.style.backgroundColor = '';
})  */

/* 
Подсветить строку и столбец,
в которой находится подсвеченная ячейка. Используйте parentElement (родительский элемент элемента DOM), и список его детей: children.
Читкоды:
в обработчик события в качестве this передается элемент, на котором событие произошло;
у td есть свойство cellIndex, в котором лежит номер ячейки;
у tr, аналогично есть свойство rowIndex - номер строки; */



 td.forEach((item, i) => {
    item.onmouseover = (e) => {
        
       item.style.backgroundColor = 'yellow'; 
       item.parentNode.style.backgroundColor = 'green';
      
/*       if (td[i].cellIndex === e.target.cellIndex){
        for (let i=0; i <0; i++ ){};
           console.log(td[i])
        
          
      }; */
       
    } 

    item.onmouseout = () => {
        item.style.backgroundColor = '';
        item.parentNode.style.backgroundColor = '';
    }
})

//Calc + Calc Live 


let fuel = document.querySelector('[name = "liters"]'),
    way = document.querySelector('[name = "km"]'),
    checkLiter = document.querySelector('#liter'),
    checkUah = document.querySelector('#uah'),
    priceInput = document.querySelector('.price__item'),
    price = document.querySelector('[name = "price"]'),
    reset = document.querySelector('.btn'),
    outer = document.querySelector('.outer');


function calcMyConsumption(fuelLiters, kmWay, pricePerLiter) {
    if (fuelLiters && kmWay && pricePerLiter) {
        pricePerLiter = price.value;
        const result = (fuelLiters / kmWay) * 100 * pricePerLiter;
        outer.textContent = `Ваш затраты на 100км пути ${result.toFixed(2)} грн`;
        reset.style.display = 'block';

    } else {
        const result = (fuelLiters / kmWay) * 100;
        outer.textContent = `Ваш расход на 100км пути ${result.toFixed(2)} литров`;
        reset.style.display = 'block';

    }
}

checkLiter.addEventListener('change', () => {
    if (checkLiter.checked && fuel.value && way.value) {
        priceInput.style.display = 'none';
        calcMyConsumption(fuel.value, way.value);
       
    } else {
        outer.textContent = `Заполните все формы`;

    }
})


checkUah.addEventListener('change', () => {
    if (checkUah.checked && fuel.value && way.value ) {
        priceInput.style.display = 'block';
        price.value = '';
        outer.textContent = `Внесите цену`;
        price.addEventListener('input', () => calcMyConsumption(fuel.value, way.value, price));
    
    } else {
        outer.textContent = `Заполните данные формы`;

    }
})

reset.addEventListener('click', () => {
    fuel.value = ''; 
    way.value = '';
    price.value = '';
    outer.textContent = '';
    priceInput.style.display = 'none';
    reset.style.display = 'none';


})