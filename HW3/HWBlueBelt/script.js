/* 
Сделать задания обмена валют используя ассоциативный массив (объект) подобной структуры.
 Добавьте дополнительные поля при надобности. Для обращения к нужному полю используйте []. */

/*  let currency = prompt('enter currency');

 let currencyRate = {
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
} */


fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
            console.log(data.rates.UAH)
            if (currency.toLowerCase() === 'usd' || currency.toLowerCase() === 'uah'){
                let sum = prompt('Enter curency summ');
               alert(`You usd summ : ${sum * data.rates.uah} uah`);
            } else {
                alert('Enter correct currency name')
            }
        })




let url = 'https://open.er-api.com/v6/latest/' + currency.toUpperCase();


fetch(url).then(res => res.json())
     .then(data => {
           console.log(data.rates.uah);
           if (currency.toLowerCase() === 'usd' || currency.toLowerCase() === 'uah'){
               let sum = prompt('Enter curency summ');
              alert(`You usd summ : ${sum * data.rates.uah} uah`);
           } else {
               alert('Enter correct currency name')
           }
        })



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