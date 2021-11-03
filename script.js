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