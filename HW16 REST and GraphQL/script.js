const getGQL = url =>
    (query, variables) => fetch(url, {
        //метод
        method: 'POST',
        headers: {
            //заголовок content-type
            "Content-Type": "application/json"
        },
        body: JSON.stringify({query, variables})
        //body с ключами query и variables
        
    }).then(res => res.json()).then(data => {
        console.log(data)
        if (data){
             return Object.values(data.data) 
        } else throw new Error('No data found')
       
    }).catch(e => console.log(e));


const gql = getGQL('http://shop-roles.asmer.fs.a-level.com.ua/graphql');


(async () => 
 await gql(`query NameForMe1($login:String, $password:String){login(login:$login, password:$password)}`,
 {login: 'tst', password: '123'}).then(res => console.log(res)))();

 
// написать тестовых запросов:
// логин, регистрация, категории все, категория по id, товар по id

const caterory = `query categ{CategoryFind(query: "[{}]"){name image {url}}}`;

(async () => 
 await gql(caterory).then(res => res[0].map(item => console.log(item))))();



const login  = `query login($login:String, $password:String){login(login:$login, password: $password)}`;

const userLogin =  {
                "login": "Serg155",
                "password": "00000000",
                "nick": "Serg155"
                }
(async () => await gql(login, userLogin).then(item => console.log(item)))();


 let newUser =  {
            "login": "Serg",
            "password": "0000007777700",
            "nick": "Serg102"
        }


const register = `mutation register($login:String, $password: String){
    UserUpsert(user:{login:$login, password:$password, nick:$login}){
       _id login
   }`;


(async () => await gql(register, newUser).then(item => console.log(item)))();


// function gqlLogin(login, password){
//     return gql(`запрос на логин с $переменными`, {login, password})
// 

//console.log((await gql(`query NameForMe1($login:String, $password:String){login(login:$login, password:$password)}`, {login: 'tst', password: '123'})))
