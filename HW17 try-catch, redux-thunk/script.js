// function promiseReducer(state={}, {type, name, status, payload, error}){
//     if (type === 'PROMISE'){
//         return {
//            ...state, [name]: {status, payload, error}
//         }
//     }
//     return state
// }

// const actionPending             = name => ({type:'PROMISE',name, status: 'PENDING'})
// const actionFulfilled = (name,payload) => ({type:'PROMISE',name, status: 'FULFILLED', payload})
// const actionRejected  = (name,error)   => ({type:'PROMISE',name, status: 'REJECTED', error})

// const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))



// function createStore(reducer){
//     let state       = reducer(undefined, {}) //стартовая инициализация состояния, запуск редьюсера со state === undefined
//     let cbs         = []                     //массив подписчиков
    
//     const getState  = () => state            //функция, возвращающая переменную из замыкания
//     const subscribe = cb => (cbs.push(cb),   //запоминаем подписчиков в массиве
//                              () => cbs = cbs.filter(c => c !== cb)) //возвращаем функцию unsubscribe, которая удаляет подписчика из списка
                             
//     const dispatch  = action => { 
//         if (typeof action === 'function'){ //если action - не объект, а функция
//             return action(dispatch, getState) //запускаем эту функцию и даем ей dispatch и getState для работы
//         }
//         const newState = reducer(state, action) //пробуем запустить редьюсер
//         if (newState !== state){ //проверяем, смог ли редьюсер обработать action
//             state = newState //если смог, то обновляем state 
//             for (let cb of cbs)  cb() //и запускаем подписчиков
//         }
//     }
    
//     return {
//         getState, //добавление функции getState в результирующий объект
//         dispatch,
//         subscribe //добавление subscribe в объект
//     }
// }
// let store = createStore(promiseReducer);

// store.subscribe(() => console.log(store.getState()))


// // store.dispatch(actionPending('delay1000'))
// //  delay(1000).then(result => store.dispatch(actionFulfilled('delay1000', result)))
// // store.dispatch(actionPending('delay2000'))
// //  delay(2000).then(result => store.dispatch(actionFulfilled('delay2000', result)))


// const actionPromise = (name, promise) =>
//     async dispatch => {
//         dispatch(actionPending(name))
//         try {
//             let payload = await promise
//             dispatch(actionFulfilled(name, payload))
//             return payload
//         }
//         catch(error){
//             dispatch(actionRejected(name, error))
//         }
//     }

// store.dispatch(actionPromise('delay1000', delay(1000)))
// store.dispatch(actionPromise('delay2000', delay(2000)))

// const actionLuke = () => actionPromise('luke', 
//                                         fetch('https://swapi.dev/api/people/1')
//                                                 .then(res => res.json()))
// store.dispatch(actionLuke())


// // const actionRegister = (login, password) =>
// //     actionPromise('register', gql(`mutation ......
// //             ......
// //         ....`, {login, password}))
// // store.dispatch(actionRegister('anon100500', '123123'))

// // const actionCategoryById = _id => 
// //     actionPromise('catById', gql(`aaaaaaaa $query.....`, {query: JSON.stringify([{_id}])}))
// // store.dispatch(actionCategoryById('АЙДИКАТЕГОРИИ НАТЫРИТЬ В GRAPHQL'))

// // const actionGoodById = _id => 
// //     actionPromise('goodById', gql(`aaaaaaaa $query.....`, {query: JSON.stringify([{_id}])}))

// // const actionRootCategories = () => 
// //     actionPromise('rootCats', gql(`CategoryFind так, что бы parent: null`)}))

// // //сделать const actionOrders для истории заказов (нужен токен в localStorage)

// // //шобы сработало, надо добавить в createStore в dispatch один if:
// // //if (typeof action === 'function'){ //если action - не объект, а функция
// //         //return action(dispatch, getState) //запускаем эту функцию и даем ей dispatch и getState для работы
// //     //}
// // //надо const newState


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

function promiseReducer(state={}, {type, name, status, payload, error}){
    if (type === 'PROMISE'){
        return {
            ...state,
            [name]:{status, payload, error}
        }
    }
    return state
}

const store = createStore(promiseReducer) 



//не забудьте combineReducers если он у вас уже есть
//const store = createStore(combineReducers({promise: promiseReducer, auth: authReducer}))

//store.subscribe(() => console.log(store.getState()))


const actionPending             = name => ({type:'PROMISE',name, status: 'PENDING'})
const actionFulfilled = (name,payload) => ({type:'PROMISE',name, status: 'FULFILLED', payload})
const actionRejected  = (name,error)   => ({type:'PROMISE',name, status: 'REJECTED', error})
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

const getGQL = url =>
    (query, variables) => fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            ...(localStorage.authToken ? {"Authorization": "Bearer " + localStorage.authToken} : {})
        },
        body: JSON.stringify({query, variables})
    }).then(res => res.json())
        .then(data => {
            if (data.data){
                return Object.values(data.data)[0] 
            } 
            else throw new Error(JSON.stringify(data.errors))
        })

const backendURL = 'http://shop-roles.asmer.fs.a-level.com.ua'

const gql = getGQL(backendURL + '/graphql')

const actionRootCats = () => 
    actionPromise('rootCats', gql(`query {
        CategoryFind(query: "[{\\"parent\\":null}]"){
            _id name
        }
    }`))

const actionCatById = (_id) =>  

    //добавить подкатегории
    actionPromise('catById', gql(`query catById($q: String){
        CategoryFindOne(query: $q){
            _id subCategories{
                name _id
            } name goods {
                _id name price images {
                    url
                }
            }
        }
    }`, {q: JSON.stringify([{_id}])}))



const actionGoodById = (_id) =>  
    actionPromise('goodById', gql(`query findGoodById($q: String) {
        GoodFindOne(query: $q) {
          _id
          name
          description
          price
          images{
              url
            }
        }
      }`, {q: JSON.stringify([{_id}])}))


store.dispatch(actionRootCats())


store.subscribe(() => {
    const {rootCats} = store.getState()
    if (rootCats?.payload){
        aside.innerHTML = ''
        for (const {_id, name} of rootCats?.payload){
            const link      = document.createElement('a')
            link.href       = `#/category/${_id}`
            link.innerText  = name
            aside.append(link)
        }
    }
})

window.onhashchange = () => {
    const [, route, _id] = location.hash.split('/')

    const routes = {
        category(){
            store.dispatch(actionCatById(_id))
        },
        good(){
            store.dispatch(actionGoodById(_id))
        },
        login(){
            //отрисовка тут
            //по кнопке - store.dispatch(actionFullLogin(login, password))
        },
        register(){
            //отрисовка тут
            //по кнопке - store.dispatch(actionFullRegister(login, password))
        },
        // dashboard() {
            //actionOrders
        //     #/dashboard
       // orders page
        // }
    }
    if (route in routes)
        routes[route]()
}
window.onhashchange()


store.subscribe(() => {
    const {catById} = store.getState()
    const [,route, _id] = location.hash.split('/')
    if (catById?.payload && route === 'category'){
        const {name, subCategories} = catById.payload 
        main.innerHTML = `<h1>${name}</h1>
                           ${(subCategories ? subCategories.map(item => {
                            return `<a href='#/category/${item._id}'>${item.name}</a>`}  ) : '')} 
                            `
        for (const {_id, name, price, images} of catById.payload.goods){
            const card      = document.createElement('div');
            card.innerHTML = `<h2>${name}</h2>
                              <img src="${backendURL}/${images[0].url}" width="380"/>
                              <div><strong>${price}грн</strong></div>
                              <a href= '#/good/${_id}'> Купить </a>
                                `
            main.append(card)
        }
    }
})

store.subscribe(() => {
    const {goodById} = store.getState()
   const [,route, _id] = location.hash.split('/')
    
     if (goodById?.payload && route === 'good'){
        const {name, description, price, images} = goodById.payload 
         main.innerHTML = ``
            const card      = document.createElement('div');
            card.innerHTML = `<h2>${name}</h2>  
                               <div> <strong>${price}грн</strong></div>
                               <img src="${backendURL}/${images[0].url}"/>
                               <p>${description} </p>                             `
          main.append(card)
     }
 })



const jwtDecode = token => { 
    try{
        const payload = JSON.parse(atob(token.split('.')[1]))
        return payload;
    }
    catch(e){
    }
}

const store2 = createStore(authReducer);



//console.log(jwtDecode(token));


function authReducer(state, {type, token}){
    if (state === undefined && localStorage.authToken){
        token = localStorage.authToken;
        type = 'AUTH_LOGIN';
    }
    if (type === 'AUTH_LOGIN'){
        let decodeToken = jwtDecode(token)
        if(decodeToken){
            localStorage.authToken = token;
            return {token, payload: decodeToken}
        }  
    }
    if (type === 'AUTH_LOGOUT'){
       localStorage.authToken = ''
       return {}
    }
    return state || {}
}

const actionAuthLogin = (token) => ({
    type:'AUTH_LOGIN',
    token
 })
 const actionAuthLogout = () => ({
    type:'AUTH_LOGOUT',
 })

// //поменять в createStore редьюсер на auth
 console.log(store2.getState())
 store2.subscribe(() => console.log(store2.getState()))
// store2.dispatch(actionAuthLogin('где-то скопипастить токен'))
 //store2.dispatch(actionAuthLogout())



