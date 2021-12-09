function reducer(state, {type, ШО, СКОКА}){ 
    if (!state){ 
        return {
            пиво: {
                count: 10,
                price: 20
            },
            чипсы: 100,
            сиги: 100,
            касса: 0

        }
    }
    if (type === 'КУПИТЬ'){ 
        //if (){} if enoth money
        return {
            ...state, 
            [ШО]: state[ШО] - СКОКА 
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
        let option = document.createElement('option');
        option.value = key;
        option.innerText = key;
        select.append(option);
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
                th.innerText = item;
                td.innerText = pcs;
                tr.append(th, td);
                root.append(tr); 
    }
}
drawTable(table,store);
store.subscribe(() =>drawTable(table,store))


