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
    for (let [key, value] of Object.entries(data)) {
        let errorSpan = document.createElement('span');
        let input = inputCreators[value.constructor.name](key, value, newValue => {
                data[key] = newValue;
        });
        input.placeholder = key;
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
        cancelButton.onclick = cancelCallback
    }

    el.appendChild(formBody)

    this.okCallback = okCallback
    this.cancelCallback = cancelCallback;

    let initialState = Object.assign({}, {el, data, okCallback, cancelCallback});
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
}, () => console.log('ok'), () =>{
    let {el, data, okCallback, cancelCallback} = form.initialState;
   console.log(el, data, okCallback, cancelCallback);
}  )
form.okCallback = () => console.log('ok2')

form.cancelCallback = () => {
    console.log('datainit')
   // form = new Form(data);
}

form.validators.surname = (value, key, data, input) => value.length > 2 &&
    value[0].toUpperCase() == value[0] &&
    !value.includes(' ') ? true : 'Wrong name'


console.log(form);