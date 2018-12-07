var questionNum = 0;

let messages = [];
var playerName = "Didier";

var data = [
        {   
            "userinput":["quiestu","commenttutappelle","tesqui"],
            "botRespout":["Salut je m'appelle HandiBot et je suis là pour vous","yo c'est moi HandiBot"]
        },
        {
            "userinput":["bonjourjemappelle@Name","salutjesuis@Name","jemappelle@Name"],
            "botRespout":["Ok je t'appellerai @Name alors","@Name !!!!","Bonjour à toi @Name"]
        },
        {   
            "userinput":[""],
            "botRespout":["Salut je m'appelle HandiBot et je suis là pour vous","yo c'est moi HandiBot"]
        }
];

function newMessage(){
    let m = {
        user : [],
        bot : []
    };
    messages.push(m);
}

function hophophop(){
    let f = ["Hop Hop Hop "+playerName+" m'oublie pas !","Youuuuuuuuuu je suis là",playerName+playerName+playerName+playerName+playerName+playerName+ " !!!"]
    botMessage(f[random(f.length)]);
}

function chatInit(){
    newMessage();
    botMessage("Hey moi c'est ...");
    setTimeout(botMessage,3000,"oh mince");
    setTimeout(botMessage,4000,"ah oui, je suis un Bot qui va t'aider à comprendre");
    setTimeout(botMessage,5000,"j'espère que tu ne t'appelles pas Didier (ahahaha)");
}

function userMessage(message){

    if(messages.length == 0){
        newMessage();
        messages[0].user.push(message);
    }

    let last = messages[messages.length-1];
    if(last.bot.length == 0)
    {
        last.user.push(message);
    }
    else
    {
        newMessage();
        last = messages[messages.length-1];
        last.user.push(message);
    }

    refresh();
}

function refresh(){

    let output = document.getElementById('output');

    output.innerHTML = "";

    for(let i = 0; i<messages.length;i++){
        for(let j = 0;j<messages[i].user.length;j++){
            let elem = document.createElement("div");
            elem.className = "right";
            elem.innerHTML = messages[i].user[j];
            output.appendChild(elem);
            output.innerHTML += "<br>";
        }
        for(let j = 0;j<messages[i].bot.length;j++){
            let elem = document.createElement("div");
            elem.className = "left";
            elem.innerHTML = messages[i].bot[j];
            output.appendChild(elem);
            output.innerHTML += "<br>";
        }
    }
    output.scrollTop = output.scrollHeight;
}

function botMessage(message){
    let last = messages[messages.length-1];
    newMessage();
    last.bot.push(message);
    refresh();
}

function diRule(message){
    if(message.includes("dit"))
        return message.substring(message.indexOf("dit")+3,message.length);
    if(message.includes("di")){
        if(message.indexOf("di")+2==message.length)
            return "rouge et toi ?"
        return message.substring(message.indexOf("di")+2,message.length);
    }
}

function answer(message){
    userMessage(message);
    diRule(message);
    let m = message.split(/[!?.,;'"]/);
    m = m.join("");
    m = m.split(" ");
    m = m.join("");
    m = m.toLowerCase();
    message = message.toLowerCase();
    
    if(message.includes("di")){
        botMessage(diRule(message));
        return;
    }
    botMessage(search(m));
}

function search(message){
    for(let i =0; i<data.length; i++){
        let input = data[i].userinput;
        let respout = data[i].botRespout;
        for(let j = 0; j<input.length; j++){
            if(input[j].indexOf("@")!=-1){
                let m = input[j].substring(input[j].indexOf("@")+1,input[j].indexOf("@")+5);
                let h = input[j].replace("@"+m, "");
                if(message.includes(h)){
                    switch(m){
                        case "Name": 
                            playerName = message.substring(h.length,message.length);
                            return respout[random(respout.length)].replace("@Name", playerName);
                    }
                }
            }
            if(message == input[j]){
                return respout[random(respout.length)];
            }
            let f = ["","...","va sur google","moi aussi j'aime ça","attend je cherche ..."];
            return f[random(f.length)];
        }
    }
}

function random(max){
    return Math.floor(Math.random()*Math.floor(max));
}

   

document.addEventListener('keypress', function(e) {
        if(e.keyCode == 13){
            let text = document.querySelector("#chat_input");
            answer(text.value);
            text.value = "";
        }
    });

