function reducer(state, {type, ШО, СКОКА, касса, ДЕНЕГ }){ 
    if (!state){ 
        return {
            пиво: {
                count: 100,
                СКОКА: 20
            },
            чипсы: 100,
            сиги: 100,
            касса: 0,
            ДЕНЕГ: 80

        }
    }
    if (type === 'КУПИТЬ'){ 
        if (СКОКА < 0){
            return state; 
        } else if ( ДЕНЕГ == 0){
            return state;
        } else {
            if (typeof state[ШО] === 'object' && СКОКА){
                let {пиво} = state;
                
                return {
                    ...state, пиво:{...пиво, count: пиво.count - СКОКА} ,
                      ДЕНЕГ : ДЕНЕГ - пиво.count,
                      касса : state[касса] + пиво.price
                }  
            }
            console.log(ШО);
            return {
                ...state, 
                [ШО]: state[ШО] - СКОКА,
               
            }  
        }
       
    }
    return state 
}

function createStore(reducer){
    let state       = reducer(undefined, {}) 
    let cbs         = []                     
    
    const getState  = () => state           
    const subscribe = cb => (cbs.push(cb),  
                             () => cbs = cbs.filter(c => c !== cb)) 
                             
    const dispatch  = action => { 
        const newState = reducer(state, action) 
        if (newState !== state){ 
            state = newState
            for (let cb of cbs)  cb()
        }
    }
    
    return {
        getState, 
        dispatch,
        subscribe 
    }
}
const store = createStore(reducer);

let select = document.querySelector('#goods');

function createSelectItems(selectId, store){
    for (let key of Object.keys(store.getState())){
        if ( key === 'касса'){
             return;
        } else {
            let option = document.createElement('option');
            option.value = key;
            option.innerText = key;
            select.append(option);
        } 
    }
}
createSelectItems('goods', store);

btn.addEventListener('click',() => {
    store.dispatch({type: 'КУПИТЬ', 'ШО': select.value, 'СКОКА': input.value})
    console.log(store.getState());
});

function drawTable(root, store) {
    root.innerHTML = ''
    for (let [item, pcs] of Object.entries(store.getState())) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let th = document.createElement('th');
        if (typeof pcs === 'object'){
            let th = document.createElement('th');
            let tr = document.createElement('td');
            th.innerText = item;
            tr.append(th);
            for (let [el, price] of Object.entries(pcs)){ 
                let td = document.createElement('td');
                let td1 = document.createElement('td');
                console.log(el, price)              
                td.innerText = el;
                td1.innerText = price;
                tr.append(td, td1);
                root.append(th, tr); 

            }
            
        } else {
                th.innerText = item;
                td.innerText = pcs;
                tr.append(th, td);
                root.append(tr); 
        }
                
    }
}
drawTable(table,store);
store.subscribe(() =>drawTable(table,store))


