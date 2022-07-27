
  console.log("Skript wird ausgeführt")
  window.aktiv=false;
  window.kalenderHTML="Kalender wird geladen ...";
  window.farbe=0


  function aktivieren(){
    const button = document.getElementById("knopf");
    window.farbe++;
    const rot = 255-window.farbe;
    const gruen = window.farbe
    button.innerHTML="Countdown zur digitalen Aktivierung läuft:"+ rot
    button.style.backgroundColor=`rgb(${rot},${gruen},0)`;
    if (farbe>128)  button.style.color=`rgb(0,0,0)`;
    if (farbe<255)setTimeout(aktivieren,50); else{
        console.log("Aktiv");
        window.aktiv=true;
        bodyNeu();
    }
  }

  console.log("Skript wird ausgeführt")
  window.aktiv=false;
  window.kalenderHTML="Kalender wird geladen ...";

  function kalenderSpeichern(html){
    console.log("Kalender speichern")
    console.log(html);
    console.log(window.aktiv);
    window.kalenderHTML=html;
    if (window.aktiv)bodyNeu();
  }
  function bodyNeu(){
    console.log("Body neu");
    document.body.innerHTML=window.kalenderHTML;
    console.log(window.aktiv);
  }
  function terminSpeichern(Termin){
    console.log("Termin speichern:"+Termin);
    kalenderSpeichern("<h1>Termin wird gespeichert</h1>")
    google.script.run.withSuccessHandler(kalenderSpeichern).speichere_Termin(Termin)
  }
  google.script.run.withSuccessHandler(kalenderSpeichern).gib_Terminkalender_SPA("web");

  