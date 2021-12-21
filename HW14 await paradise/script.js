//Chat Homework  http://chat.serg15577330.fe.a-level.com.ua/

function dataToDataTimeLocal(date) {
    let timeStamp = date.getTime();
    let timeZoneoffset = -date.getTimezoneOffset() * 60 * 1000;
    let localTime = timeStamp + timeZoneoffset;
    return new Date(localTime).toISOString().slice(0, -1);
}

let message = document.querySelector('#message');
let nick = document.querySelector('#nickname');
let btn = document.querySelector('.btn');

btn.addEventListener('click',async () => {
    nickName = nickname.value;
    userMessage = message.value;
    await sendMessage(nickName, userMessage);
    getMasseges();
    message.value = '';
});

btn.disabled = 'true';

message.addEventListener('input', () => {
    if (nick.value && message.value) {
        btn.disabled = '';
    } else if (nick.value == '' || message.value == '') btn.disabled = 'true';
})

function jsonPost(url, data) {
    return new Promise((resolve, reject) => {
        var x = new XMLHttpRequest();
        x.onerror = () => reject(new Error('jsonPost failed'))
        //x.setRequestHeader('Content-Type', 'application/json');
        x.open("POST", url, true);
        x.send(JSON.stringify(data))

        x.onreadystatechange = () => {
            if (x.readyState == XMLHttpRequest.DONE && x.status == 200) {
                resolve(JSON.parse(x.responseText))
            } else if (x.status != 200) {
                reject(new Error('status is not 200'))
            }
        }
    })
}

function getMasseges(messageId = 0) {
    jsonPost("http://students.a-level.com.ua:10012", {
            func: "getMessages",
            messageId: messageId
        })
        .then(res => {
            res.data.forEach(el => {
                readMessage(el)
            });
            let prevId = res.nextMessageId;
            let currentId = messageId;
            let messageInterval = setInterval((id) => {
                if (currentId < prevId) {
                    console.log('step')
                    soundClick();
                    jsonPost("http://students.a-level.com.ua:10012", {
                        func: "getMessages",
                        messageId: currentId + 1
                    }).then(res => res.nextMessageId, res.data.forEach(el => {
                        readMessage(el)
                    }))
                    currentId = res.nextMessageId;

                }
            }, 2000);
        });
}

getMasseges();


function soundClick() {
    const audio = new Audio();
    audio.src = '7.mp3';
    audio.play();
}


function sendMessage(nick, message) {

    jsonPost("http://students.a-level.com.ua:10012", {
            func: "addMessage",
            nick: nick,
            message: message
        })
        .then(res => getMasseges(res.nextMessageId));
    message.value = '';




}

let regYoutube = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/; //regExp for YouTube video

function readMessage(msg) {
    let div = document.createElement('div');
    let spanUserName = document.createElement('span');
    let spanMessages = document.createElement('span');
    let timeSpan = document.createElement('span');
    let idMsg = document.createElement('span');
    div.style.marginBottom = '10px';

    spanUserName.style.backgroundColor = '#a7cbf8';
    spanUserName.style.marginBottom = '10px';
    spanMessages.style.backgroundColor = '#94f094';
    spanMessages.style.textAlign = 'rigth';
    spanUserName.innerHTML += `${msg.nick  || 'NONAME'}`;
    timeSpan.style.backgroundColor = '#afafc2';
    timeSpan.style.marginLeft = '10px';
    timeSpan.innerText = dataToDataTimeLocal(new Date(msg.timestamp)).slice(0, 19);
    console.log(dataToDataTimeLocal(new Date(msg.timestamp)).slice(0, 19));

    //idMsg.innerText = nextMessageId;
    /* if (msg.message.match(regYoutube)) {
        console.log(`https://www.youtube.com/embed/${msg.message.match(regYoutube)[1]}`) // get youtube key
        spanMessages.innerHTML += `<iframe width="560" height="315" src="https://www.youtube.com/embed/${msg.message.match(regYoutube)[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
        spanMessages.innerHTML += `  Write: ${msg.message}`;
    } */
    spanMessages.innerHTML += msg.message || 'Send empty message'; //*** */

    div.prepend(spanMessages, timeSpan);
    div.prepend(spanUserName, idMsg);
    answer.prepend(div)
}



//Stage 6
//Прогуглить и разобраться с fetch и заменить внутренности jsonPost на код, использующий fetch вместо XMLHttpRequest. 

/* async function jsonPost(url, data) {
    let response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log(response);
    if (response.ok) {
        let json = response.json();
        return json;
    } else {
        return new Error('jsonPost failed'+ response.status);
    }   
} */
