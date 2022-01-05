const getGQL = url =>
    (query, variables) => fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            ...(localStorage.authToken ? {"Authorization": "Bearer " + localStorage.authToken} : {})
        },
        body: JSON.stringify({query, variables})
    }).then(res => res.json()).then(data => {
        if (data){
             return Object.values(data.data) 
        } else throw new Error('No data found')
    }).catch(e => console.log(e));


const gql = getGQL('http://shop-roles.asmer.fs.a-level.com.ua/graphql');

const login  = `query login($login:String, $password:String){login(login:$login, password: $password)}`;

const userLogin =  {
                "login": "Serg155",
                "password": "00000000",
                "nick": "Serg155"
                };
(async () => await gql(login, userLogin)
    //.then(tok => (tok[0].split('.')[2]))
    .then(token => localStorage.authToken = token))()



// (async () => await gql(`query NameForMe1($login:String, $password:String){login(login:$login, password:$password)}`,
//  {login: 'serg155000', password: '123777'}).then(res => console.log(res)))();

 
// написать тестовых запросов:
// логин, регистрация, категории все, категория по id, товар по id

const caterory = `query categ{CategoryFind(query: "[{}]"){name image {url}}}`;

(async () => 
 await gql(caterory).then(res => res[0].map(item => console.log(item))))();


// добавить в getGQL все что надо, и еще проверку на localStorage.authToken. если токен есть, добавлять header Authorization.

//  let newUser =  {
//             "login": "Serg",
//             "password": "0000007777700",
//             "nick": "Serg102"
//         }


// const register = `mutation register($login:String, $password: String){
//     UserUpsert(user:{login:$login, password:$password, nick:$login}){
//        _id login
//    }`;


// (async () => await gql(register, newUser).then(item => console.log(item)))();


const createOrder = `mutation newOrder($o:OrderInput){OrderUpsert(order:$o){ _id total }}`;
const goods = `{
    "login": "Serg155",
    "password": "00000000",
    "o": {
      "orderGoods": [
        {
          "count": 3,
          "good": {
            "_id": "5e1f396856d8f720513e6cae"
          }
        }
      ]
    }
  }`;

(async () => await gql(createOrder,goods).then(res => console.log(res)))();


// function gqlLogin(login, password){
//     return gql(`запрос на логин с $переменными`, {login, password})


// console.log((await gql(`query NameForMe1($login:String, $password:String){login(login:$login, password:$password)}`, {login: 'tst', password: '123'})))


console.log(localStorage)


// const originalFetch = fetch;

// fetch = (url, params={headers:{}}) => { 
//     params.headers.Authorization = "Bearer " + localStorage.authToken
//     return originalFetch(url, params)
// };

// console.log({
//     method: 'POST',
//     headers: { 
//         "Content-Type": "application/json",
//         ...(localStorage.authToken ? {"Authorization": "Bearer " + localStorage.authToken} : {})
//     }})






