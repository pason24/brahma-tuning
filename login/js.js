var objDaten = [
  {
    name: "max",
    passwort: "media",
  },
  {
    name: "lola",
    passwort: "nascar",
  },
];

function hexdez(hexzahl) {
  var o = hexzahl.substring(1) + "";
  return parseInt(o, 16);
}

function reverse(hex) {
  console.log(hex);
  var q = hexdez(hex);
  console.log(q);
  q = q.toString();
  console.log(q);
  q = q * Math.random(1 - 0.8);
  q = Math.round(q) + "";
  console.log(q);
  q = "#" + q;
  console.log(q);
  console.log(hex);
  var i = hex;
  if ((i = "#ffffff")) {
    q = "#000000";
  }
  console.log(q);
  return q;
}

function colorbg() {
  var x = localStorage.getItem("farbe");
  document.body.style.backgroundColor = x;
  if (document.getElementById("c") != null) {
    document.getElementById("c").value = x;
  }
}

function getInfo() {
  let message = "a";
  var passwort = document.getElementById("b").value;
  var name = document.getElementById("a").value;
  for (i = 0; i < objDaten.length; i++) {
    if (name == objDaten[i].name && passwort == objDaten[i].passwort) {
      window.location.replace("/index");
      return;
    }
  }
  document.getElementById("output").innerText = "Falsches Passwort";
}

function reset() {
  localStorage.setItem("farbe", "#ffffff");
}
