let googleUrl =
    "https://script.google.com/macros/s/AKfycbxgioTDTr8RzcSmU88mNpuGbrzkVh3xcW0sQKu0XqM2gTtjJfNbnYS3uzPs17AghJaiqQ/exec";

if(getCookie('id') === ''){
  let ID = createNewID();
  setCookie('id', ID);
  createLogEntry(ID);
}else{
  let ID = getCookie('id');
  createLogEntry(ID);
}

function createNewID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue) {
  const d = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function createLogEntry(id){
  let file = getFilename();

  fetch(googleUrl + `?id=${id}&url=${file}`, {
    redirect: "follow",
    method: "GET",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
  });
       
}

function getFilename (){
  let windowUrl = window.location.pathname;
  let fileName = windowUrl.substring(windowUrl.lastIndexOf('/')+1);
  if(fileName == ''){
  return 'index.php';
  } else return fileName;
}

function processForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value.replace(/\+/g,'00');
  const message = document.getElementById("message").value.replace(/(?:\r\n|\r|\n)/g, '<br>');
  let ID = getCookie('id');

  document.getElementById('contactForm').innerHTML = ""; 
  document.getElementById('info').innerHTML = "<br> <h1>Ihre Anfrage wird verarbeitet.</h1>";

  
  
  fetch(googleUrl + `?name=${name}&email=${email}&phone=${phone}&message=${message}&id=${ID}`, {
    redirect: "follow",
    method: "GET",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
  }).then(function () {
        document.getElementById('info').innerHTML = "<br> <h1>Nachricht versendet.</h1>";
    }).catch(function (){
        document.getElementById('info').innerHTML = "<br> <h1>ERROR!</h1>";
    });

}
