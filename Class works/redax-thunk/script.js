function promiseReducer(state={}, {type, name, status, payload, error}){
    if (type === 'PROMISE'){
        return {
           ...state, [name]: {status, payload, error}
        }
    }
    return state
}


const actionPending             = name => ({type:'PROMISE',name, status: 'PENDING'})
const actionFulfilled = (name,payload) => ({type:'PROMISE',name, status: 'FULFILLED', payload})
const actionRejected  = (name,error)   => ({type:'PROMISE',name, status: 'REJECTED', error})

const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

function createStore(reducer){
    let state       = reducer(undefined, {}) //стартовая инициализация состояния, запуск редьюсера со state === undefined
    let cbs         = []                     //массив подписчиков
    
    const getState  = () => state            //функция, возвращающая переменную из замыкания
    const subscribe = cb => (cbs.push(cb),   //запоминаем подписчиков в массиве
                             () => cbs = cbs.filter(c => c !== cb)) //возвращаем функцию unsubscribe, которая удаляет подписчика из списка
                             
    const dispatch  = action => { 
        if (typeof action === 'function'){ //если action - не объект, а функция
            return action(dispatch, getState) //запускаем эту функцию и даем ей dispatch и getState для работы
        }
        const newState = reducer(state, action) //пробуем запустить редьюсер
        if (newState !== state){ //проверяем, смог ли редьюсер обработать action
            state = newState //если смог, то обновляем state 
            for (let cb of cbs)  cb() //и запускаем подписчиков
        }
    }
    
    return {
        getState, //добавление функции getState в результирующий объект
        dispatch,
        subscribe //добавление subscribe в объект
    }
}
let store = createStore(promiseReducer);

store.subscribe(() => console.log(store.getState()))


// store.dispatch(actionPending('delay1000'))
//  delay(1000).then(result => store.dispatch(actionFulfilled('delay1000', result)))
// store.dispatch(actionPending('delay2000'))
//  delay(2000).then(result => store.dispatch(actionFulfilled('delay2000', result)))


const actionPromise = (name, promise) =>
    async dispatch => {
        dispatch(actionPending(name))
        try {
            let payload = await promise
            dispatch(actionFulfilled(name, payload))
            return payload
        }
        catch(error){
            dispatch(actionRejected(name, error))
        }
    }

store.dispatch(actionPromise('delay1000', delay(1000)))
store.dispatch(actionPromise('delay2000', delay(2000)))

const actionLuke = () => actionPromise('luke', 
                                        fetch('https://swapi.dev/api/people/1')
                                                .then(res => res.json()))
store.dispatch(actionLuke())




// const actionRegister = (login, password) =>
//     actionPromise('register', gql(`mutation ......
//             ......
//         ....`, {login, password}))
// store.dispatch(actionRegister('anon100500', '123123'))

// const actionCategoryById = _id => 
//     actionPromise('catById', gql(`aaaaaaaa $query.....`, {query: JSON.stringify([{_id}])}))
// store.dispatch(actionCategoryById('АЙДИКАТЕГОРИИ НАТЫРИТЬ В GRAPHQL'))

// const actionGoodById = _id => 
//     actionPromise('goodById', gql(`aaaaaaaa $query.....`, {query: JSON.stringify([{_id}])}))

// const actionRootCategories = () => 
//     actionPromise('rootCats', gql(`CategoryFind так, что бы parent: null`)}))

// //сделать const actionOrders для истории заказов (нужен токен в localStorage)

// //шобы сработало, надо добавить в createStore в dispatch один if:
// //if (typeof action === 'function'){ //если action - не объект, а функция
//         //return action(dispatch, getState) //запускаем эту функцию и даем ей dispatch и getState для работы
//     //}
// //надо const newState


