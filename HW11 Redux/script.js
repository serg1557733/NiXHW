function reducer(state, {
    type,
    ШО,
    СКОКА,
    ДЕНЕГ
}) {
    if (!state) {
        return {
            пиво: {
                count: 100,
                price: 20
            },
            чипсы: {
                count: 60,
                price: 10
            },
            сиги: {
                count: 80,
                price: 40
            },
            касса: 0,
            ДЕНЕГ: 80

        }
    }
    if (type === 'КУПИТЬ') {
        if (state[ШО].count < СКОКА) {
            alert('NETU!')
            return state;
        } else if (state.ДЕНЕГ == 0) {
            alert('SHO BABOK NET?')
            return state;
        } else {
            console.log(СКОКА);
            if (state.ДЕНЕГ !== 0 && typeof state[ШО] === 'object' && СКОКА) {
                if (state[ШО].count < СКОКА) {
                    alert('NETU!')
                    return state;
                } else
                    return {
                        ...state,
                        ДЕНЕГ: state.ДЕНЕГ - state[ШО].price,
                        касса: state.касса + state[ШО].price,
                        [ШО]: {...state[ШО],
                            count: state[ШО].count - СКОКА
                        }
                    }
            }
            return {
                ...state,
                [ШО]: state[ШО] - СКОКА,

            }
        }
    }
    return state
}

function createStore(reducer) {
    let state = reducer(undefined, {})
    let cbs = []

    const getState = () => state
    const subscribe = cb => (cbs.push(cb),
        () => cbs = cbs.filter(c => c !== cb))

    const dispatch = action => {
        const newState = reducer(state, action)
        if (newState !== state) {
            state = newState
            for (let cb of cbs) cb()
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

function createSelectItems(selectId, store) {
    for (let key of Object.keys(store.getState())) {
        if (key === 'касса') {
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

btn.addEventListener('click', () => {
    store.dispatch({
        type: 'КУПИТЬ',
        'ШО': select.value,
        'СКОКА': input.value
    })
});

function drawTable(root, store) {
    root.innerHTML = ''
    for (let [item, pcs] of Object.entries(store.getState())) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let th = document.createElement('th');
        if (typeof pcs === 'object') {
            let th = document.createElement('th');
            let tr = document.createElement('td');
            th.innerText = item;
            tr.append(th);
            for (let [el, price] of Object.entries(pcs)) {
                let td = document.createElement('td');
                let td1 = document.createElement('td');           
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
drawTable(table, store);
store.subscribe(() => drawTable(table, store))