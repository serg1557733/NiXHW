//Password

function Password(parent = document.body, open = false){

    const input = document.createElement('input');
    const btn = document.createElement('button');
    
    parent.append(input, btn);
    let value = '';
    let readProp = open;
    btn.innerText = readProp ? 'show' : 'hide' ;

    this.setValue = newValue => {
        if (newValue != ' ' && newValue && newValue !== value)
            value = newValue
    }

    this.setOpen = newOpen => {
        if (newOpen != readProp && newOpen != undefined)
            readProp = newOpen  
            
    }

    input.oninput = this.onChange = (input) => {
        if (typeof this.onChange === 'function' && input.data !== value)
            this.onChange(input.data)
        value = input.data;

    }

    btn.onclick = this.onOpenChange = (newOpen) => {
        if (typeof this.onChange === 'function')
            this.onOpenChange(readProp);
        readProp = !readProp;
        btn.innerText = readProp ? 'show' : 'hide';
        if (readProp){
           input.setAttribute('type','password')
       } else input.setAttribute('type','text')
    }

    this.getValue = () => value;
    this.getOpen = () => readProp;  
}

 //let p = new Password(root, true)

   // p.onChange = data => console.log(data)
   // p.onOpenChange = open => console.log(open)

    //p.setValue('qwerty')
    //console.log(p.getValue())

    //p.setOpen(true)
    //console.log(p.getOpen()) 
/* 
    LoginForm
С помощью предыдущего кода Password сделайте форму логина, кнопка в которой будет активна только если и login и пароль не пусты */

function Form(parent = document.body, open = false, active = false){

    const form = document.createElement('form');
    const input = document.createElement('input');
    const inputLog = document.createElement('input');
    const btn = document.createElement('button');
    const btnSend = document.createElement('button');
    
    form.append(input, inputLog, btn, btnSend);
    parent.append(form);

    let value = '';
    let login = '';
    let readProp = open;
    let btnActive = active;

     

    btn.innerText = readProp ? 'hide password' : 'show password'; 
    btnSend.innerText = btnActive ?  'SEND' : ' Enter data'; 
  

    input.oninput = this.onChange = () => {
        value = input.value; 
        if (value && login) {
            btnActive = true;
            console.log(btnActive)
 
       } else if (!value || !login){
          btnActive = false; 
          console.log('false')
       }


       if (btnActive) {
                btnSend.removeAttribute('disabled','') 
                btnSend.setAttribute('enabled','') 
             } else {
                 btnSend.removeAttribute('enabled','') 
                 btnSend.setAttribute('disabled','') 
             }
    }

    inputLog.oninput = this.onChange = () => {
        login = inputLog.value;
        if (value && login) {
            btnActive = true;
            console.log(btnActive)
 
       } else if (!value || !login){
          btnActive = false; 
          console.log('false')
       }


       if (btnActive) {
                btnSend.removeAttribute('disabled','') 
                btnSend.setAttribute('enabled','') 
             } else {
                 btnSend.removeAttribute('enabled','') 
                 btnSend.setAttribute('disabled','') 
             }
    }

    btn.onclick = this.onOpenChange = (e, newOpen) => {
        e.preventDefault();
        readProp = !readProp;
        btn.innerText = readProp ? 'show password' : 'hide password'; 
        if (readProp){
        input.setAttribute('type','password')
        } else input.setAttribute('type','text')
    }

    
    if (btnActive) {
        btnSend.removeAttribute('disabled','') 
        btnSend.setAttribute('enabled','') 
     } else {
         btnSend.removeAttribute('enabled','') 
         btnSend.setAttribute('disabled','') 
     }
    
    this.onsubmit = function(){
        formUploader.setFormLoading(form);
    }
}

/* 
LoginForm Constructor
оформите предыдущую задачу как функцию-конструктор. Продумайте и предусмотрите геттеры, сеттеры и колбэки. */



function Form(parent = document.body, open = false, active = false){

    const form = document.createElement('form');
    const input = document.createElement('input');
    const inputLog = document.createElement('input');
    const btn = document.createElement('button');
    const btnSend = document.createElement('button');
    
    form.append(input, inputLog, btn, btnSend);
    parent.append(form);

    let value = '';
    let login = '';
    let readProp = open;
    let btnActive = active;

     

    btn.innerText = readProp ? 'hide password' : 'show password'; 
  

    input.oninput = this.onChange = () => {
        value = input.value; 
        this.password = value;
        if (value && login) {
            btnActive = true;
            console.log(btnActive)
 
       } else if (!value || !login){
          btnActive = false; 
          console.log('false')
       }


       if (btnActive) {
                btnSend.removeAttribute('disabled','') 
                btnSend.setAttribute('enabled','') 
             } else {
                 btnSend.removeAttribute('enabled','') 
                 btnSend.setAttribute('disabled','') 
             }
             btnSend.innerText = btnActive ?  'SEND' : ' Enter data'; 
    }

    inputLog.oninput = this.onChange = () => {
        login = inputLog.value;
        this.login = login;
        console.log(login)
        if (value && login) {
            btnActive = true;
            console.log(btnActive)
 
       } else if (!value || !login){
          btnActive = false; 
          console.log('false')
       }


    if (btnActive) {
                btnSend.removeAttribute('disabled','') 
                btnSend.setAttribute('enabled','') 
             } else {
                 btnSend.removeAttribute('enabled','') 
                 btnSend.setAttribute('disabled','') 
             }
             btnSend.innerText = btnActive ?  'SEND' : ' Enter data'; 
    }

    btn.onclick = this.onOpenChange = (e, newOpen) => {
        e.preventDefault();
        readProp = !readProp;
        btn.innerText = readProp ? 'show password' : 'hide password'; 
        if (readProp){
        input.setAttribute('type','password')
        } else input.setAttribute('type','text')
    }

    
    if (btnActive) {
        btnSend.removeAttribute('disabled','') 
        btnSend.setAttribute('enabled','') 
     } else {
         btnSend.removeAttribute('enabled','') 
         btnSend.setAttribute('disabled','') 
     }
    
    this.onsubmit = function(){
        formUploader.setFormLoading(form);
    }

    btnSend.innerText = btnActive ?  'SEND' : ' Enter data'; 


    this.login = login;
    this.password = value;
    this.getData = () => `Login : ${this.login}  Passwqord: ${this.password}`;
    this.getLogin = () => this.login;
    this.getPassword = () => this.password;
    this.setLogin = (newLogin) => {
        this.login = newLogin;
    }
    this.setPassword = (newPassword) => {
        this.password = newPassword;
    }
}
let form1 = new Form(root, true, false);


/* Password Verify
С помощью Password сделайте пару инпутов, которые проверяют введеный пароль (в двух полях ввода) на совпадение. Кнопка должна активизироваться при совпадающих паролях. При открытом пароле второе поле вводы должно пропадать с экрана Таким образом:
Когда Password в скрытом режиме - появляется второй инпут (<input type='password'>) с паролем в скрытом режиме
Когда Password в открытом режиме - второй инпут пропадат */

