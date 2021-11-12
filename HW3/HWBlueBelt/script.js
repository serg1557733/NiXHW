/* 
Сделать задания обмена валют используя ассоциативный массив (объект) подобной структуры.
 Добавьте дополнительные поля при надобности. Для обращения к нужному полю используйте []. */

//let currency = prompt('enter currency');

/* let currencyRate = {
    usdB : 26.5,
    usdS : 26.3,
    eurB : 30.55,
    eurS : 30.3,
    rubB : 0.30,
    rubS : 0.36
}

if (currency.toLowerCase() === 'usd' || currency.toLowerCase() === 'eur' || currency.toLowerCase() === 'rub'){
let sum = prompt('Enter curency summ');
let rate = confirm('You want to buy?');
rate ? alert(`You usd summ : ${sum * currencyRate[currency +'B']} uah`): alert(`You usd summ : ${sum*currencyRate[currency +'S']} uah`);
} else {
alert('Enter correct currency name')
}  */



//second 


/* fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
            console.log(data.rates.UAH)
            let sum = prompt('Enter USD summ');
            alert(`You usd summ : ${sum * data.rates.UAH} uah`);
        }); */


let currency;

confirm('You want to see all currency names?') ? showCurencys() : exchange();


function exchange() {
    currency = prompt('enter currency for exchange (usd, eur, rub...etc)');
    let url = 'https://open.er-api.com/v6/latest/' + currency.toUpperCase();
    if (currency.toLowerCase() === 'usd' || currency.toLowerCase() === 'eur' || currency.toLowerCase() === 'rub') {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let sum = prompt('enter amount');
                alert(`You usd summ : ${sum * data.rates.UAH} uah`);
            });
    } else if (currency) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let sum = prompt('enter amount');
                alert(`You usd summ : ${sum * data.rates.UAH} uah`);
            });
    } else {
        alert('Enter correct currency name');
    }
};

function showCurencys() {
    fetch('https://open.er-api.com/v6/latest').then(res => res.json())
        .then(data => {
            alert(`Valid curencyss:  ${Object.keys(data.rates)}`);
            exchange();
        })
};





/* let url = 'https://open.er-api.com/v6/latest/' + currency.toUpperCase();
console.log(url);

fetch(`'https://open.er-api.com/v6/latest/' + currency.toUpperCase()`).then(res => res.json())
     .then(data => {
           console.log(data.rates.uah);
           if (currency.toLowerCase() === 'usd' || currency.toLowerCase() === 'uah'){
               let sum = prompt('Enter curency summ');
              alert(`You usd summ : ${sum * data.rates.uah} uah`);
           } else {
               alert('Enter correct currency name')
           }
        }) */


/* Дополнительное задание
Слепить все задания в один текст, таким образом что бы вначале происходил ввод названия задания, каждое задание при этом находится в отдельном case оператора switch. Например case "currency calc" для калькулятора обмена валют. */


/* 
let taskTitle = prompt('Enter task title: currencyCalc, scissors or sizeCalc');

switch(taskTitle){
    case 'currencyCalc': currencyCalc();
                    break;
    case 'scissors': scissors();
                    break;    
    case 'sizeCalc': sizeCalc();
                    break;                
}


function currencyCalc() {
    let currency = prompt('enter currency');
        if (currency.toLocaleLowerCase() === 'usd'){
            let sum = prompt('Enter curency summ');
            let rate = confirm('You want to buy?');
            rate ? alert(`You usd summ : ${sum*26.55} uah`): alert(`You usd summ : ${sum*26.3} uah`);
        } else if (currency.toLocaleLowerCase() === 'eur') {
            let sumE = prompt('Enter curency summ');
            let rateE = confirm('You want to buy?');
            rateE ? alert(`You usd summ : ${sumE*30.55} uah`): alert(`You usd summ : ${sumE*30.3} uah`); 
        } else {
            alert('Enter correct currency name')
        }
}

function scissors() {
    let userAnswer = prompt('Enter you choise');

    let appAnswer = Math.random() * 100;
 
    if (appAnswer > 33 && appAnswer < 66){
        appAnswer = 'камень';
        alert(appAnswer);
        if (appAnswer === userAnswer) {
            alert(' ничья  ');
        } else if (userAnswer === 'бумага') {
            alert('you winner');
        } else if (userAnswer === 'ножницы'){
            alert('you looser');
        }
    } else if (appAnswer < 33) {
        appAnswer = 'бумага';
        alert(appAnswer);
        if (appAnswer === userAnswer) {
            alert(' ничья  ');
        } else if (userAnswer === 'камень') {
            alert('you looser');
        } else if (userAnswer === 'ножницы'){
            alert('you winner');
        }
    } else if (appAnswer > 66) {
        appAnswer = 'ножницы';
        alert(appAnswer);
        if (appAnswer === userAnswer) {
            alert(' ничья  ');
        } else if (userAnswer === 'камень') {
            alert('you looser');
        } else if (userAnswer === 'бумага'){
            alert('you winner');
        }
    }
    
}


function sizeCalc() {
    
let userSize = +prompt('Enter you waist coverage', '');

switch (true){
    case userSize > 63 && userSize < 65: 
            alert(`${userSize}  - XXS `);
            break;
    case userSize > 66 && userSize < 69: 
            alert(`${userSize}  - XS `);
            break;
    case userSize > 70 && userSize < 74: 
            alert(`${userSize}  - S `);
            break;
    case userSize > 79 && userSize < 83: 
            alert(`${userSize}  - L`);
            break;   
    case userSize > 84 && userSize < 89: 
            alert(`${userSize}  - XL `);
            break; 
    case  userSize > 90 && userSize < 94: 
            alert(`${userSize}  - XXL `);
            break;   
    case  userSize > 95 && userSize < 97: 
            alert(`${userSize}  - XXXL `);
            break;                 
    
    default: alert('maybe stop eating');
}
    
} */




/* Сделайте игру "камень-ножницы-бумага", как описано выше, 
пользуясь логическими операциями (&&, ||, !), 
не используя if и switch. Задание должно быть решено одним выражением */



let userAnswer = prompt('Enter you choise');

let appAnswer = Math.random() * 100;

(appAnswer > 33 && appAnswer < 66) ? appAnswer = 'камень' : (appAnswer < 33)? appAnswer = 'бумага':appAnswer = 'ножницы'; 

 (appAnswer === userAnswer) ?  alert(' ничья  '): (userAnswer === 'бумага' && appAnswer === 'камень') ?  alert('you winner'): (userAnswer === 'бумага' && appAnswer === 'ножницы') ? alert('you looser') :(userAnswer === 'камень' && appAnswer === 'бумага')? alert('you looser') : (userAnswer === 'камень' && appAnswer === 'ножницы')? alert('you winner') : (userAnswer === 'ножницы' && appAnswer === 'бумага')? alert('you winner'):(userAnswer === 'ножницы' && appAnswer === 'камень')?alert('you looser') :alert('you winner') ;
