
function clickCounter(elem){
    elem.onclick = clickCounter();
    
    let counter = 0; 
    function clickCounter(){ 

        
        return function() { 
        elem.innerHTML = `${counter}`; 
        console.log(counter)
        return counter++;   
    };      
}     
};  

clickCounter(button1);
clickCounter(button2);

