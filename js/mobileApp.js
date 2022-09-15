console.log("Version 0028")


//Inhalte for produkt "responsiveMobile" merken


let homeInhalt = [];

//Reihenfolge für Laptop und Mobile definieren
const laptop = [0, 1, 2, 3, 4, 5]
const mobile = [0, 1, 3, 2, 4, 5]

//Nach dem laden wird die Seite an das produkt angepasst
window.addEventListener('DOMContentLoaded', event => {
    neueSeite();
    try {
        homeInhalt = [
            document.getElementById("laptop_0").innerHTML,
            document.getElementById("laptop_1").innerHTML,
            document.getElementById("laptop_2").innerHTML,
            document.getElementById("laptop_3").innerHTML,
            document.getElementById("laptop_4").innerHTML,
            document.getElementById("laptop_5").innerHTML
        ]
        inhaltResponsive();
        window.onresize = inhaltResponsive;
    } catch (error) {
        console.log(error);
    }
    return
});

const originalHTML = document.getElementById("page-top").innerHTML;


function inhaltResponsive() {
    if (window.innerWidth > 1000) {
        for (let i = 0; i < homeInhalt.length; i++) {
            document.getElementById("laptop_" + i).innerHTML = homeInhalt[laptop[i]];
            console.log("jetzt laptop")
        }
    } else {
        for (let i = 0; i < homeInhalt.length; i++) {
            document.getElementById("laptop_" + i).innerHTML = homeInhalt[mobile[i]];
            console.log("jetzt mobile")
        }
    }
}


//get paramater from URL and set the corresponding page
function getParameterByName(name, url) {

    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}



let player_code = getParameterByName("player_code");
if (!player_code) player_code = "unbekannt";
console.log(player_code);

let produkt = getParameterByName("produkt");




//call REST API at https://script.google.com/macros/s/AKfycbxbCJLyP8PYbH4ty4TWtF-q0W6F1JSqI8wR2TTb_kOvuoTyNqQNkqifeHhDJi3ZTXKF/exec
let url = "https://script.google.com/macros/s/AKfycbxbCJLyP8PYbH4ty4TWtF-q0W6F1JSqI8wR2TTb_kOvuoTyNqQNkqifeHhDJi3ZTXKF/exec";

function neueSeite() {
    if (!produkt) return;
    console.log("Produkteite gewünscht");
    fetch(url + "?produkt=" + window.location.href + "&player_code=" + player_code, {
        redirect: "follow",
        method: "GET",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        }
    }).then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (data) {
        console.log("Text" + JSON.stringify(data));
        //set the page according to the produkt
        //    window.location.href = data.url
    })
}
