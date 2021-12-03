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
        btn.innerText = readProp ? 'show' : 'hide' ;

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