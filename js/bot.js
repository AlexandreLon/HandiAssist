var questionNum = 0;

let messages = [];
var playerName = "Didier";
var playerAge = "bébé";

var data = [
    {
        "userinput": ["quiestu", "commenttutappelle", "tesqui"],
        "botRespout": ["Salut je m'appelle HandiBot et je suis là pour vous", "yo c'est moi HandiBot"]
    },
    {
        "userinput": ["", "salut", "slt", "cc", "coucou", "bonjour"],
        "botRespout": ["Salut je m'appelle HandiBot et je suis là pour vous", "yo c'est moi HandiBot"]
    },
    {
        "userinput": ["bonjourjemappelle@Name", "salutjesuis@Name", "jemappelle@Name", "enfaitjemappelle@Name", "aufaitjemappelle@Name", "salut@Name", "cc@Name", "slt@Name"],
        "botRespout": ["Ok je t'appellerai @Name alors", "@Name !!!!", "Bonjour à toi @Name"]
    },
    {
        "userinput": ["jai@Agesans", "@Agesans", "@Ages", "jai@Ages"],
        "botRespout": ["donc tu as bien @Ages" + 4 + " ans ?", "super un vieux de @Ages ans"]
    },
    {
        "userinput": ["oui", "si"],
        "botRespout": ["non", "non non non !"]
    },
    {
        "userinput": ["non"],
        "botRespout": ["oui", "si", "tu viens de perdre au ni oui ni non !"]
    },
    {
        "userinput": ["lama", "lamastico"],
        "botRespout": ["de quoi tu parles ?????", "as tu cherché 'OU EST LE LAMA' ?", "il est blanc, bonne chance", "nuage nuage .... stico"]
    },
    {
        "userinput": ["tuesbeau", "tuesmoche", "tumaimes", "jetaime"],
        "botRespout": ["miroir, miroir", "merci !", "non", "va sur meetic", "moi aussi"]
    },
    {
        "userinput": ["aurevoir@Name", "ciao@Name", "bisous@Name"],
        "botRespout": ["ciao @Name", "aurevoir @Name", "salut"]
    }
];

function newMessage() {
    let m = {
        user: [],
        bot: []
    };
    messages.push(m);
}

function hophophop() {
    let f = ["Hop Hop Hop " + playerName + " m'oublie pas !", "Youuuuuuuuuu je suis là", playerName + playerName + playerName + playerName + playerName + playerName + " !!!"]
    botMessage(f[random(f.length)]);
}

function chatInit() {
    newMessage();
    botMessage("Hey moi c'est ...");
    setTimeout(botMessage, 3000, "oh mince");
    setTimeout(botMessage, 4000, "ah oui, je suis un Bot qui va t'aider à comprendre");
    setTimeout(botMessage, 5000, "j'espère que tu ne t'appelles pas Didier (ahahaha)");
}

function userMessage(message) {

    if (messages.length == 0) {
        newMessage();
        messages[0].user.push(message);
    }

    let last = messages[messages.length - 1];
    if (last.bot.length == 0) {
        last.user.push(message);
    }
    else {
        newMessage();
        last = messages[messages.length - 1];
        last.user.push(message);
    }

    refresh();
}

function refresh() {

    let output = document.getElementById('output');

    output.innerHTML = "";

    for (let i = 0; i < messages.length; i++) {
        for (let j = 0; j < messages[i].user.length; j++) {
            let elem = document.createElement("div");
            elem.className = "right";
            elem.innerHTML = messages[i].user[j];
            output.appendChild(elem);
            output.innerHTML += "<br>";
        }
        for (let j = 0; j < messages[i].bot.length; j++) {
            let elem = document.createElement("div");
            elem.className = "left";
            elem.innerHTML = messages[i].bot[j];
            output.appendChild(elem);
            output.innerHTML += "<br>";
        }
    }
    output.scrollTop = output.scrollHeight;
}

function botMessage(message) {
    let last = messages[messages.length - 1];
    newMessage();
    last.bot.push(message);
    refresh();
}

function diRule(message) {
    if (message.includes("dit"))
        return message.substring(message.indexOf("dit") + 3, message.length);
    if (message.includes("di")) {
        if (message.indexOf("di") + 2 == message.length)
            return "rouge et toi ?"
        return message.substring(message.indexOf("di") + 2, message.length);
    }
}

function answer(message) {
    userMessage(message);
    diRule(message);
    let m = message.split(/[!?.,;'"]/);
    m = m.join("");
    m = m.split(" ");
    m = m.join("");
    m = m.toLowerCase();
    message = message.toLowerCase();

    if (message.includes("di")) {
        botMessage(diRule(message));
        return;
    }
    if (m == "ouestlelama") {
        lama();
        botMessage("cherche bien ....");

        setTimeout(botMessage, 1000, "il est là");
        return;
    }
    botMessage(search(m));
}


function search(message) {
    for (let i = 0; i < data.length; i++) {
        let input = data[i].userinput;
        let respout = data[i].botRespout;
        for (let j = 0; j < input.length; j++) {
            if (input[j].indexOf("@") != -1) {
                let m = input[j].substring(input[j].indexOf("@") + 1, input[j].indexOf("@") + 5);
                let h = input[j].replace("@" + m, "");
                if (message.includes(h)) {
                    switch (m) {
                        case "Name":
                            playerName = message.substring(h.length, message.length);
                            return respout[random(respout.length)].replace("@Name", playerName);
                        case "Ages":
                            if (isNaN(message.substring(h.length, h.length + 2))) break;
                            playerAge = message.substring(h.length, h.length + 2);
                            return respout[random(respout.length)].replace("@Ages", playerAge);
                    }
                }
            }
            if (message == input[j]) {
                return respout[random(respout.length)];
            }
        }
    }
    let f = ["as tu vu le Lama caché ???", "...", "quel âge as-tu ?", "moi aussi j'aime ça", "attend je cherche ..."];
    return f[random(f.length)];
}

function random(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        let text = document.querySelector("#chat_input");
        answer(text.value);
        text.value = "";
    }
});

