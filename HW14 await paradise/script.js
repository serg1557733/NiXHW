//Chat Homework

/* Этапы.
//Используя функцию jsonPost на адрес http://students.a-level.com.ua:10012 напишите чат-клиент, который:
Stage 0
Для поиграться скопируйте в консоль функцию jsonPost (или запустите её с этой страницы) и вызовите её с теми или иными объектами в качестве второго параметра. см. RPC. */

let message = document.querySelector('#message');
let nick = document.querySelector('#nickname');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
     nickName = nickname.value;
     userMessage = message.value;
     sendMessage(nickName , userMessage);
     getMasseges();
     message.value = '';
});



function jsonPost(url, data)
{
    return new Promise((resolve, reject) => {
        var x = new XMLHttpRequest();   
        x.onerror = () => reject(new Error('jsonPost failed'))
        //x.setRequestHeader('Content-Type', 'application/json');
        x.open("POST", url, true);
        x.send(JSON.stringify(data))

        x.onreadystatechange = () => {
            if (x.readyState == XMLHttpRequest.DONE && x.status == 200){
                resolve(JSON.parse(x.responseText))
            }
            else if (x.status != 200){
                reject(new Error('status is not 200'))
            }
        }
    })
}
function getMasseges(messageId = 0){
    jsonPost("http://students.a-level.com.ua:10012", {func: "getMessages", messageId: messageId})
        .then(res => {
            res.data.forEach(el=> {
            readMessage(el)});
            //console.log(res.nextMessageId);
            let messageInterval = setInterval((id) => {
                let prevId = res.nextMessageId;
                console.log(prevId);
                console.log(res.nextMessageId);
                if(prevId < res.nextMessageId){
                    console.log('get');
                    getMasseges(res.nextMessageId) 
                }
            }  , 1000);
            }) ;
}

getMasseges();


function sendMessage(nick, message) {
    jsonPost("http://students.a-level.com.ua:10012", {func: "addMessage", nick: nick, message: message}).then(res => console.log(res));
    getMasseges();
    message.value = '';
    
}

let regYoutube = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/; //regExp for YouTube video

function readMessage(msg) {
    let div = document.createElement('div');
    let spanUserName = document.createElement('span');
    let spanMessages = document.createElement('span');
    let idMsg = document.createElement('span');
    div.style.marginBottom = '10px';

    spanUserName.style.backgroundColor = '#a7cbf8';
    spanUserName.style.marginBottom = '10px';
    spanMessages.style.backgroundColor = '#94f094';
    spanMessages.style.textAlign = 'rigth';
    spanUserName.innerHTML += `${msg.nick  || 'NONAME'}`;
    //idMsg.innerText = nextMessageId;
    /* if (msg.message.match(regYoutube)) {
        console.log(`https://www.youtube.com/embed/${msg.message.match(regYoutube)[1]}`) // get youtube key
        spanMessages.innerHTML += `<iframe width="560" height="315" src="https://www.youtube.com/embed/${msg.message.match(regYoutube)[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
        spanMessages.innerHTML += `  Write: ${msg.message}`;
    } */
    spanMessages.innerHTML += msg.message || 'Send empty message';//*** */

    div.prepend(spanMessages);
    div.prepend(spanUserName, idMsg);
    answer.prepend(div)
}