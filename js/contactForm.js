function processForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value.replace(/\+/g,'00');
  const message = document.getElementById("message").value.replace(/(?:\r\n|\r|\n)/g, '<br>');

  document.getElementById('contactForm').innerHTML = ""; 
  document.getElementById('info').innerHTML = "<br> <h1>Ihre Anfrage wird verarbeitet.</h1>";

  let url =
    "https://script.google.com/macros/s/AKfycbzAvMMiffHsPNmL02NlUB0gGo2a1loozs_knxgLflHaAKIIbl5tk2ijjfbgq9zKARv4DA/exec";
  fetch(url + `?name=${name}&email=${email}&phone=${phone}&message=${message}`, {
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
