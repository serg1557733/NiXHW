//DOM

/* ТЕще дз: переписать подсветку таблицы используя минимум this.* и максимум переменных замыкания. Для этого Надо занести обработчики событий во вложенный for  */

function Table(rootElementClass) {

    let domElement = document.querySelector(`.${rootElementClass}`);
    this.tableCreate = () => {
        let table = document.createElement('table');
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            for (let k = 0; k < 10; k++) {
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
        domElement.append(table);
    }
    this.cellLigth = () => {
        const td = document.querySelectorAll('td');
        td.forEach((item, i) => {
            item.onmouseover = (e) => {
                item.style.backgroundColor = 'yellow';
                item.parentNode.style.backgroundColor = 'green';
                let trCollect = Array.from(item.parentElement.parentElement.children);
                trCollect.forEach((el, i) => {
                    if (el.children[i].cellIndex === item.cellIndex) {
                        Array.from(el.parentElement.children).forEach(elem => elem.children[i].style.backgroundColor = 'red');
                    }
                });
            };

            item.onmouseout = () => {
                item.style.backgroundColor = '';
                item.parentNode.style.backgroundColor = '';
                let trCollect = Array.from(item.parentElement.parentElement.children);
                trCollect.forEach((el, i) => {
                    if (el.children[i].cellIndex === item.cellIndex) {
                        Array.from(el.parentElement.children).forEach(elem => elem.children[i].style.backgroundColor = '');
                    }

                });
            }
        })

    }
}

let table1 = new Table('root');
table1.tableCreate();
table1.cellLigth();


let table2 = new Table('root');
table1.tableCreate();
table1.cellLigth();