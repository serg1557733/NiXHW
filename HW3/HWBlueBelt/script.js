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