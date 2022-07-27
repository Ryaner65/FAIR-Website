const mobileWebAnwendung=true;
console.log("Version 0012")

const homeInhalt = [
    document.getElementById("laptop_0").innerHTML,
    document.getElementById("laptop_1").innerHTML,
    document.getElementById("laptop_2").innerHTML,
    document.getElementById("laptop_3").innerHTML,
    document.getElementById("laptop_4").innerHTML,
    document.getElementById("laptop_5").innerHTML
]
const laptop = [0, 1, 2, 3, 4, 5]
const mobile = [0, 1, 3, 2, 4, 5]


window.addEventListener('DOMContentLoaded', event => {
    if (mobileWebAnwendung)
        inhaltAnpassenWebAnwendung();
    else {
        inhaltAnpassenWebseite();
        window.onresize = inhaltAnpassenWebseite;
    }
    
});

const mobileAnwendungHTML=`
<iframe src="https://script.google.com/a/macros/saw-office.net/s/AKfycbw_faHfieWbT5DT27mqHUdBWWfWmvq-DT5sD-0UpnAZJ-X9FrpggoqAFVaHgSa2E1LG1g/exec" title="bestellen" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
    Dein Browser unterstützt diese Anwendung nicht.
</iframe>
`
const originalHTML = document.getElementById("page-top").innerHTML;

function inhaltAnpassenWebAnwendung() {
    console.log("inhaltAnpassenWebAnwendung")
    document.getElementById("page-top").innerHTML = mobileAnwendungHTML;
}



function inhaltAnpassenWebseite() {
    if (window.innerWidth > 1000) {
        for (let i = 0; i < homeInhalt.length; i++) {
            document.getElementById("laptop_"+i).innerHTML = homeInhalt[laptop[i]];
        }
    } else {
        for (let i = 0; i < homeInhalt.length; i++) {
            document.getElementById("laptop_"+i).innerHTML = homeInhalt[mobile[i]];
        }
    }
}

