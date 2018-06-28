// var tempsPasse = document.getElementById("Time");
let tempsPasse = this.innerHTML = Date();
let tempsSecs = tempsPasse[22] + (tempsPasse[23]);
let fenetre = false;
console.log("le temps qui passe 1ere fois " + tempsSecs);
tempsSecs++;
let tempsVoulu10=tempsSecs + 9;
while (fenetre === false){
  console.log("le temps voulu avant boucle" + tempsVoulu10);
if(tempsSecs >= tempsVoulu10){
       window.alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please au passage, A LA BON-NE HEU-RE!!");
       fenetre = true;
} else {
  tempsPasse = this.innerHTML = Date();
  tempsSecs = tempsPasse[22] + (tempsPasse[23]);
  console.log("le temps qui passe" + tempsSecs);
}
}
var monBouton = document.querySelector('button');
function coucou1(bg) {
    document.body.style.background = "#ff33ff";
}

monBouton.onclick = function() {
  coucou1();
}
