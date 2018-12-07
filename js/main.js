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
}

function display_menu() {
    console.log("passe");
    document.querySelector('.menu_content').classList.remove('hide');
    document.querySelector('main').classList.add('hide');
    document.querySelector('.chat').classList.add("hide")
};

function hide_menu() {
    document.querySelector('.menu_content').classList.add('hide');
    document.querySelector('main').classList.remove('hide');
};

function chat() {
    console.log("passe")
    let content_chat = document.querySelector('.chat');
    if (content_chat.classList.contains('hide') && document.querySelector('.menu_content').classList.contains("hide")) {
        content_chat.classList.remove("hide")
    }
    else {
        content_chat.classList.add("hide")
    }
}

function dark() {
    let img = document.querySelector("img");
    let sup = document.querySelector(".img-sup");
    let button = document.querySelector(".dark");

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