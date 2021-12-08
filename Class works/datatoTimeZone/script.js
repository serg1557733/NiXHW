let date = new Date();


function dataToDataTimeLocal(date) {
    let timeStamp = date.getTime();
    let timeZoneoffset = - date.getTimezoneOffset() * 60 * 1000;
    let localTime = timeStamp + timeZoneoffset;
    return new Date(localTime).toISOString().slice(0, -1);
}

console.log(dataToDataTimeLocal(date));

/***********************************************/


function Form(el, data, okCallback, cancelCallback){
    let formBody = document.createElement('div')
    let okButton = document.createElement('button')
    okButton.innerHTML = 'OK'

    let cancelButton = document.createElement('button')
    cancelButton.innerHTML = 'Cancel'


      
  let inputCreators = {
        String(key, value, oninput){
            let input = document.createElement('input')
            input.type = 'text'
            input.placeholder = key
            input.value       = value
            input.oninput     = () => oninput(input.value)
            return input
        },
        Boolean(key, value, oninput){
            let input = document.createElement('input')
            input.type = 'checkbox'
            input.placeholder = key
            input.checked     = value
            input.oninput     = () => oninput(input.checked)
            return input
        },
        Date(key, value, oninput){
            let input = document.createElement('input')
            input.type = 'datetime-local'
            input.placeholder = key
            input.value       = dataToDataTimeLocal(value) 
            input.onchange    = () => oninput(new Date(input.value))
            return input
        },
    }
for (let [key, value] of Object.entries(data)){
    let input = inputCreators[value.constructor.name](key, value, newValue => { 
        if (typeof this.validators === 'function'){
            this.validators[key]();
        }
        data[key] = newValue
    }); 
    let errorSpan = document.createElement('span');
    errorSpan.innerText = 'Error'
    input.placeholder = key;

    formBody.append(input);
    formBody.append(errorSpan);
   
}

    if (typeof okCallback === 'function'){
        formBody.appendChild(okButton);
        okButton.onclick = (e) => {
            console.log(this)
            this.okCallback(e)
        }
    }

    if (typeof cancelCallback === 'function'){
        formBody.appendChild(cancelButton);
        cancelButton.onclick = cancelCallback
    }

    el.appendChild(formBody)


    this.okCallback     = okCallback
    this.cancelCallback = cancelCallback

    this.data           = data
    this.validators     = {}
}


let form = new Form(formContainer, {
    name: 'Anakin',
    surname: 'Skywalker',
    married: true,
    birthday: new Date((new Date).getTime() - 86400000 * 30*365)
}, () => console.log('ok'),() => console.log('cancel') )
form.okCallback = () => console.log('ok2')

form.validators.surname = (value, key, data, input) => value.length > 2 && 
                                                     value[0].toUpperCase() == value[0] &&
                                                    !value.includes(' ') ? true : 'Wrong name'
console.log(form)