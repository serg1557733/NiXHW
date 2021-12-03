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
            console.log(input);
           input.setAttribute('type','password')
       } else input.setAttribute('type','text')

        }

    this.getValue = () => value;
    this.getOpen = () => readProp;  
}


 let p = new Password(root, true)

    p.onChange = data => console.log(data)
    p.onOpenChange = open => console.log(open)

    //p.setValue('qwerty')
    console.log(p.getValue())

    p.setOpen(true)
    //console.log(p.getOpen()) 




/* 
    LoginForm
С помощью предыдущего кода Password сделайте форму логина, кнопка в которой будет активна только если и login и пароль не пусты */
/* 



LoginForm Constructor
оформите предыдущую задачу как функцию-конструктор. Продумайте и предусмотрите геттеры, сеттеры и колбэки. */






/* Password Verify
С помощью Password сделайте пару инпутов, которые проверяют введеный пароль (в двух полях ввода) на совпадение. Кнопка должна активизироваться при совпадающих паролях. При открытом пароле второе поле вводы должно пропадать с экрана Таким образом:
Когда Password в скрытом режиме - появляется второй инпут (<input type='password'>) с паролем в скрытом режиме
Когда Password в открытом режиме - второй инпут пропадат */