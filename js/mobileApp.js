console.log("Version 0019")

const responsiveMobile = "responsiveMobile";
const digitaleAktivierung="digitaleAktivierung";
const digitaleOrientierung="digitaleOrientierung";
const digitaleGrundlagen="digitaleGrundlagen";
const DevOps="DevOps";

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

let produkt=getParameterByName("produkt");
if (!produkt)produkt=responsiveMobile;
console.log(produkt);


//Inhalte for produkt "responsiveMobile" merken
const homeInhalt = [
    document.getElementById("laptop_0").innerHTML,
    document.getElementById("laptop_1").innerHTML,
    document.getElementById("laptop_2").innerHTML,
    document.getElementById("laptop_3").innerHTML,
    document.getElementById("laptop_4").innerHTML,
    document.getElementById("laptop_5").innerHTML
]
//Reihenfolge für Laptop und Mobile definieren
const laptop = [0, 1, 2, 3, 4, 5]
const mobile = [0, 1, 3, 2, 4, 5]

//Nach dem laden wird die Seite an das produkt angepasst
window.addEventListener('DOMContentLoaded', event => {
    if (produkt===responsiveMobile){
        inhaltResponsive();
        window.onresize = inhaltResponsive;
        return
    }
    inhaltProdukt(produkt);
});

const produktHTML=`
<iframe src="https://script.google.com/a/macros/saw-office.net/s/AKfycbw_faHfieWbT5DT27mqHUdBWWfWmvq-DT5sD-0UpnAZJ-X9FrpggoqAFVaHgSa2E1LG1g/exec" title="bestellen" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
    Dein Browser unterstützt diese Anwendung nicht.
</iframe>
`
const originalHTML = document.getElementById("page-top").innerHTML;

function inhaltProdukt(produkt) {
    console.log("produkt: "+produkt);
    if (produkt===digitaleAktivierung) document.getElementById("page-top").innerHTML = produktHTML;

    //Redirect to https://sites.google.com/fair-sz.com/fairschulungszentrum/bildungsangebote/digitale-orientierung
    if (produkt===digitaleOrientierung) window.location.href = "https://sites.google.com/fair-sz.com/fairschulungszentrum/bildungsangebote/digitale-orientierung";

    //Redirect to https://sites.google.com/fair-sz.com/fairschulungszentrum/bildungsangebote/digitale-grundlagen
    if (produkt===digitaleGrundlagen) window.location.href = "https://sites.google.com/fair-sz.com/fairschulungszentrum/bildungsangebote/digitale-grundlagen"; 

    //Redirect to https://sites.google.com/fair-sz.com/fairschulungszentrum/bildungsangebote/softwareentwicklung-und-scrum-master
    if (produkt===DevOps) window.location.href = "https://sites.google.com/fair-sz.com/fairschulungszentrum/bildungsangebote/softwareentwicklung-und-scrum-master";
}




function inhaltResponsive() {
    if (window.innerWidth > 1000) {
        for (let i = 0; i < homeInhalt.length; i++) {
            document.getElementById("laptop_"+i).innerHTML = homeInhalt[laptop[i]];
            console.log("jetzt laptop")
        }
    } else {
        for (let i = 0; i < homeInhalt.length; i++) {
            document.getElementById("laptop_"+i).innerHTML = homeInhalt[mobile[i]];
            console.log("jetzt mobile")
        }
    }
}

