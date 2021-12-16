/* function confirmPromise(text){
    return new Promise((fulfill, reject) => {
        //fulfill()
        //reject()
    })
} */


/* confirm
Написать функцию промисифицирующую confirm. Функция должна принимать текст для confirm, и создавать (а также возвращать) промис, который резолвится по нажатию ok, и реджектится по нажатию cancel в окне confirm. */


/* function confirmPromise(text){
   return new Promise((fulfill, reject) => {
       confirm(text) ? fulfill(): reject();
    })
}

confirmPromise('is this promis');
 */


/* function confirmPrompt(text){
    return new Promise((fulfill, reject) => {
        let answ = prompt(text);
        answ ? fulfill(answ): reject('Error');
     })
 } 
confirmPrompt('is this promis').then( res => console.log(res)); */

/* LoginForm
Промисифицировать LoginForm, сделать функцию, которая возвращает 
промис, и принимает настройки для LoginForm. Промис должен резолвится с объектом вида {login, password}, reject - при нажатии отмен. */


function LoginForm(parent = document.body){ 
    return new Promise((fulfill, reject) => {
        const inputLogin = document.createElement('input');
        const inputP = document.createElement('input');
        const btnOk = document.createElement('button');
        const btnCancel = document.createElement('button');
        btnCancel.innerText = 'Cancel';
        btnOk.innerText = 'OK';
        parent.append(inputLogin, inputP, btnOk, btnCancel);

        btnOk.onclick  = () => {
                                let login = inputLogin.value;
                                let password = inputP.value;
                                    if(login && password){
                                        fulfill({login, password}) 
                                        inputLogin.value = '';
                                        inputP.value = '';
                                    };
                                } 
        btnCancel.onclick = () =>reject('Error in form data'); 
        })
}

LoginForm().then(res => console.log(res))