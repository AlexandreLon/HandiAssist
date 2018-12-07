window.onload = function () {
    function hour() {
        let d = new Date();
        let h = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
        let m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
        let s = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
        let strHour = h + ":" + m + ":" + s;
        document.querySelector('.hour').innerHTML = strHour;
        setTimeout(hour, 500);

    }
    hour();
    var lama = document.getElementById("Lama");
    lama.addEventListener("dblclick", quitter);


    function changeBatteryHouse(percent) {
        var percentWidth = (percent * 208) / 100;
        document.getElementById("gauge-house").style.width = percentWidth + "px";
        if (percent < 50) {
            document.getElementById("gauge-house").style.backgroundColor = "orange";
        }
        if (percent < 20) {
            document.getElementById("gauge-house").style.backgroundColor = "red";
        }


        var houseTime = Math.round((percent * 24) / 100);
        document.getElementById("span-time-house").innerText = houseTime + "";

    }

    function changeBatteryCar(percent) {
        var percentWidth = (percent * 208) / 100;
        document.getElementById("gauge-car").style.width = percentWidth + "px";
        if (percent < 50) {
            document.getElementById("gauge-car").style.backgroundColor = "orange";
        }
        if (percent < 20) {
            document.getElementById("gauge-car").style.backgroundColor = "red";
        }


        var houseTime = Math.round((percent * 24) / 100);
        document.getElementById("span-time-car").innerText = houseTime + "";

    }

    changeBatteryHouse(45);
    changeBatteryCar(55);

    // svg.fill("red");
    // console.log(svg);
}

function hide_all() {
    hide_menu();
    document.querySelector(".health").classList.add("hide");
    document.querySelector(".energy").classList.add("hide");
    document.querySelector(".memes").classList.add("hide");
}

function display_energy() {
    hide_all();
    document.querySelector(".energy").classList.remove("hide");
}

function display_health() {
    hide_all();
    document.querySelector(".health").classList.remove("hide");
}

function display_meme(n) {
    hide_all();
    document.querySelector(".memes").classList.remove("hide");
    let imgs = document.querySelector(".img_meme");
    switch (n) {
        case 1:
            imgs.src = "/images/meme1.png"
            break;
        case 2:
            imgs.src = "/images/meme2.jpg"
            break;
        case 3:
            imgs.src = "/images/meme3.jpg"
            break;
        case 4:
            imgs.src = "/images/meme4.png"
            break;
    }
}

function display_menu() {
    hide_all();
    console.log("passe");
    document.querySelector('.menu_content').classList.remove('hide');
    document.querySelector('main').classList.add('hide');
    document.querySelector('.chat').classList.add("hide")
    let objects = document.querySelectorAll('object');
    for (let i = 0; i < objects.length; i++)
        fsvg(objects[i]);
};

function hide_menu() {
    document.querySelector('.menu_content').classList.add('hide');
    document.querySelector('main').classList.remove('hide');
};

var boto = setTimeout(function () { });

function chat(hop = false) {
    clearTimeout(boto);
    let content_chat = document.querySelector('.chat');
    if (content_chat.classList.contains('hide') && document.querySelector('.menu_content').classList.contains("hide")) {
        content_chat.classList.remove("hide");
        if (hop) {
            hophophop();
        }
        if (questionNum == 0) {
            questionNum++;
            chatInit();
        }
    }
    else {
        content_chat.classList.add("hide");
        boto = setTimeout(chat, 10000, true);
    }
}


function dark() {
    let img = document.querySelector("img");
    let sup = document.querySelector(".img-sup");
    let button = document.querySelector(".dark");

    if (!document.querySelector('.menu_content').classList.contains("hide")) {
        let objects = document.querySelectorAll('object');
        for (let i = 0; i < objects.length; i++)
            fsvg(objects[i]);
    }

    if (sup.classList.contains("hide")) {
        sup.classList.remove("hide");
        img.classList.add("rss-opacity");
        img.classList.add("brightness");
    }
    else {
        sup.classList.add("hide");
        img.classList.remove("rss-opacity");
        img.classList.remove("brightness");
    }
}

function fsvg(e, load) {
    let colorFill = document.querySelector(".img-sup").classList.contains("hide") || load ? "#FFF" : "#666";
    let doc = e.getSVGDocument();
    if (doc != null) {
        var path = doc.querySelectorAll("path");
        for (let i = 0; i < path.length; i++) {
            path[i].setAttribute("fill", colorFill);
            path[i].setAttribute("stroke", colorFill);
            path[i].setAttribute("cursor", "pointer");
            path[i].setAttribute("onclick", "display_energy()");

        }
    }

}

