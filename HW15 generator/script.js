//Closures and scopes

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
        console.log('work')
        let json = await response.json();
        return json;
    } else {
         new Error('jsonPost failed'+ response.status);
    }   
} */

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
jsonPost("http://students.a-level.com.ua:10012", {func: 'addMessage', nick: "HellWords", message: 'AHHAAAH'}).then(res => console.log(res)
)