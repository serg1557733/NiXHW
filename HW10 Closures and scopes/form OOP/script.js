let date = new Date();

function dataToDataTimeLocal(date) {
    let timeStamp = date.getTime();
    let timeZoneoffset = -date.getTimezoneOffset() * 60 * 1000;
    let localTime = timeStamp + timeZoneoffset;
    return new Date(localTime).toISOString().slice(0, -1);
}


function Form(el, data, okCallback, cancelCallback) {
    let formBody = document.createElement('div')
    let okButton = document.createElement('button')
    okButton.innerHTML = 'OK'

    let cancelButton = document.createElement('button')
    cancelButton.innerHTML = 'Cancel';
    
    let inputCreators = {
        String(key, value, oninput) {
            let input = document.createElement('input')
            if (key[0] == '*'){
                let reqSpan = document.createElement('span');
                reqSpan.style.color = 'red';
                reqSpan.style.display ='none';
                reqSpan.innerText = ` ${key[0]}    `;
                formBody.append(reqSpan);
                key = key.slice(1);
                input.setAttribute("required", "");  
            }
            input.placeholder = key; 
            console.log(key)
            input.value = value
            input.oninput = () => {
              /* 
                if(this.validators[key] && this.validators[key] == [key]){
                   value = this.validators[key](value, key, data, input) ? input.value: value;
                } else if (this.validators) {
                    errorSpan.style.backgroundColor = 'red';
                    errorSpan.innerText =  `Error ${newValue}`;
                } */
                if(value == '*****'){
                    input.type = 'password'
                } else input.type = 'text';
                if (!value.trim()){
                    return value;
                } 
                if (input.value.length == 0){
                    input.style.border = '1px solid red';
                    okButton.setAttribute('disabled','disabled') 
                } else if (value.trim() !== '') {
                   /*  if (this.validators[key](value, key, data, input)){
                        console.log('test')
                    } */
                    console.log('ok')
                    input.style.border = '1px solid black'
                    okButton.removeAttribute('disabled','') 
                }
                oninput(input.value)                 

            }
            return input
        },
        Boolean(key, value, oninput) {
            let input = document.createElement('input')
            if (key[0] == '*')input.setAttribute("required", "");  
            input.type = 'checkbox'
            input.placeholder = key
            input.checked = value
            input.oninput = () => oninput(input.checked)
            return input
        },
        Date(key, value, oninput) {
            console.log(this.validators);
            let input = document.createElement('input')
            console.log(key[0])
            if (key[0] == '*')input.setAttribute("required", "");  
            input.type = 'datetime-local'
            input.placeholder = key
            input.value = dataToDataTimeLocal(value)
            input.onchange = () => {
         /*     if (typeof this.validators === 'function') {
                if(this.validators == [key]){
                    this.validators[key](value, key, data, input)? data[key] = newValue: data[key];
                } else {
                    errorSpan.style.backgroundColor = 'red';
                    errorSpan.innerText =  `Error ${newValue}`;
                } */
                oninput(new Date(input.value))
            }   
           // }
            return input
        },
    }

    function createForm(initialState) {
        let formBody = document.createElement('div')
        let okButton = document.createElement('button')
        okButton.innerHTML = 'OK'
        let cancelButton = document.createElement('button')
        cancelButton.innerHTML = 'Cancel';
            for (let [key, value] of Object.entries(initialState)) {
                let errorSpan = document.createElement('span');
                let input = inputCreators[value.constructor.name](key, value, newValue => {
                    initialState[key] = newValue;
                });
        formBody.append(input, errorSpan, okButton, cancelButton  );
        el.appendChild(formBody)
        this.okCallback = okCallback
        this.cancelCallback = cancelCallback;
        this.data = data
        this.validators = {
    
        }
    }

    }
    for (let [key, value] of Object.entries(data)) {
        let errorSpan = document.createElement('span');
        let input = inputCreators[value.constructor.name](key, value, newValue => {
                data[key] = newValue;
        });
        formBody.append(input);
        formBody.append(errorSpan);
    }
    
    if (typeof okCallback === 'function') {
        okButton.setAttribute('disabled','') 
        formBody.appendChild(okButton);
        okButton.onclick = (e) => {
            this.okCallback(e)
        }
    }

    if (typeof cancelCallback === 'function') {
        formBody.appendChild(cancelButton);
        cancelButton.onclick = () => {
            formBody.remove();
            createForm(initialState);
            this.cancelCallback();
        }
    }

    el.appendChild(formBody)

    this.okCallback = okCallback
    this.cancelCallback = cancelCallback;

    let initialState = Object.assign({}, data);

    this.initialState = initialState;

    this.data = data
    this.validators = {

    }
}

let form = new Form(formContainer, {
    '*name': 'Anakin',
    '*surname': 'Skywalker',
    married: true,
    birthday: new Date((new Date).getTime() - 86400000 * 30 * 365)
}, () => console.log('ok'), () =>{console.log('ok') }  )
form.okCallback = () => console.log('ok2')

/* form.cancelCallback = () => {
    console.log('datainit')
   // form = new Form(data);
} */

form.validators.surname = (value, key, data, input) => value.length > 2 &&
    value[0].toUpperCase() == value[0] &&
    !value.includes(' ') ? true : 'Wrong name'


console.log(form);



/* Starwars localStorage
По в ok сохранять поредактированный объект localStorage. При дальнейшей работе выводить не объект с бэка, а объект из localStorage. В качестве ключей используйте ссылки из swapi.
 localStorage - это глобальный объект в браузере, значения которого переживают перезагрузку вкладки/браузера/компьютера
localStorage.userName ? alert(`Your name is ${localStorage.userName}`) : localStorage.userName = prompt('What is your name?') 
попробуйте это и нажмите f5 */

localStorage.userName ? alert(`Your name is ${localStorage.userName}`) : localStorage.userName = prompt('What is your name?') 
console.log(localStorage);
//localStorage.clear();
//console.log(localStorage);



/* Cached Promise
Оберните fetch или myfetch в функцию, которая:
Если данные найдены в localStorage - резолвится сразу, результатом промиса будет объект из localStorage (гляньте на Promise.resolve)
Если данные не найдены в localStorage - ведет себя как обычный fetch/myfetch */


function localStorageFetch(url) {
        return new Promise(function (resolve, reject) {
            if(localStorage.length){
                resolve(localStorage)
            } else {
                const request = new XMLHttpRequest()
                    request.open('GET', url, true)
                    request.send();
                    request.onreadystatechange = function () {
                        if (request.readyState != 4) {
                            return;
                        }
                        if (request.status == 200) {
                            resolve(JSON.parse(request.responseText))
                        } else {
                            reject = () => console.log('Error: ' + request.status + ', ' + request.statusText);
                        }
                    }
                
                }
        })    
};


localStorageFetch('https://jsonplaceholder.typicode.com/users')
    .then(luke => console.log(luke))