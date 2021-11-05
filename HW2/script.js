let a = 5;
let b, c;
console.log(b)
b = a * 5;
console.log(b)
b = c = b / 2;
console.log(b, c)

//semicolon: error

// b = a * c  console.log(b) 

//semicolon: mistake

//Number: age

let age ,
      date = new Date().getFullYear();
    
do {
    age = prompt('Enter your age', '');
    if (age !== '' && age ) {
      
        alert(`Год рождения:  ${date - age}`);
    } 
} while (age == '' || age == null);


//Number: temperature

let tempCels  = prompt('Enter tempereture', ''),
    tempFar = tempCels * 1.8 + 32;
alert(`In fahrenheit: ${tempFar} `);

//Number: divide

let num1Input = document.querySelector('.num1'),
    num2Input = document.querySelector('.num2'),
    calculateBtn = document.querySelector('.btn'),
    outer = document.querySelector('.outer');


calculateBtn.addEventListener('click', () => {
    let arg1 = +num1Input.value,
        arg2 = +num2Input.value;

    if (arg1 && arg2) {
        let res = arg1 / arg2;
        outer.textContent = `${Math.floor(res)}`;
    } else {
        outer.textContent = `Enter correct number`;
    }
})