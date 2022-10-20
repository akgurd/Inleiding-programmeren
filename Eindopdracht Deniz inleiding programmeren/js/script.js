var cinnamonButton = document.querySelector("img#cinnamon");
var toiletButton = document.querySelector("img#toilet");
var bedButton = document.querySelector("img#bed");
var winwin = document.querySelector("div#win");
var divweg = document.querySelector("div#byediv");
var button = document.querySelector("button");
var buttonLoser = document.querySelector("button#loser");
var audioEen = document.querySelector("audio#een");
var audioTwee = document.querySelector("audio#twee");
var audioDrie = document.querySelector("audio#drie");
var h1Element = document.querySelector("h1");
var winTekst = ["SLAYYY AND YAAAASSS YOU WOOOON!", "PUUUUURRR LOOK AT YOU!", "OMG YOU WOOOON :D!"]; //array met de verschillende 'winteksten
var randomGetal;
var body = document.querySelector("body");
var frog = document.querySelector("img#frog");
var health = document.getElementById("health");
//src is computer maakt zelf een source en getattribute is dat het de geschreven source in de html pakt 
//var is een woord dat javascript vertelt dat je een variabele declareert
//met document. queryselector haal je de eerste element uit de dom.


function cinnamonKlik (){
    health.value += 20; //progress bar heeft id health.   health.value houdt de waarde van de progress bar bij.         =+20 wordt er elke keer dat er geklikt wordt 20 value toegevoegd
    if(health.value === 100){ //als de value gelijk is aan 100
        winwin.style.display = "block"; //win divje wordt zichbaar door display block
        divweg.style.display = "none"; // zorgt dat de rest van de elementen verdwijnen
        audioEen.play(); //speelt de audio af
        randomGetal = Math.random() * 3; //het wordt *3 gedaan, omdat er 3 feitjes zijn en daar uit wordt gekozen
        randomGetal = Math.floor(randomGetal); //hier worden de getallen naar beneden afgerond
        h1Element.textContent = winTekst[randomGetal]; // hier wordt het h1 element gemanipuleerd 
        h1Element.style.display = "block"; //hier komt het h1 element tevoorschijn

    }} cinnamonButton.addEventListener("click", cinnamonKlik);

function toiletKlik (){
    health.value += 20;
    if(health.value === 100){
        winwin.style.display = "block";
        divweg.style.display = "none" ;       
        audioTwee.play();
        randomGetal = Math.random() * 3; 
        randomGetal = Math.floor(randomGetal); 
        h1Element.textContent = winTekst[randomGetal]; 
        h1Element.style.display = "block";

        }
    } toiletButton.addEventListener("click", toiletKlik);

function bedKlik (){
    health.value += 20;
    if(health.value === 100){
        winwin.style.display = "block";
        divweg.style.display = "none";
        audioDrie.play();
        randomGetal = Math.random() * 3; 
        randomGetal = Math.floor(randomGetal); 
        h1Element.textContent = winTekst[randomGetal]; 
        h1Element.style.display = "block";
    }} bedButton.addEventListener("click", bedKlik);


function restart(){
    window.location.reload();
} button.addEventListener("click", restart);

function tryAgain(){
    window.location.reload();
} buttonLoser.addEventListener("click", tryAgain);

function timerStart() { //zorgt er voor dat de timer pas begint te lopen als je geklikt hebt
     setInterval(function () { //he setInterval() method calls a function at specified intervals (in milliseconds). https://www.w3schools.com/jsref/met_win_setinterval.asp
      if (health.value <= 0) { //als de waarde van de progress bar 0 of lager is
        frog.src = "img/froggysad.png"; //wordt de kikker verdrietig
        buttonLoser.style.display = "block"; //verschijnt de loser button
        document.getElementById("byediv").style.pointerEvents = "none"; //dit zorgt er voor dat alleen de button klikbaar is als er verloren is
        if (document.getElementById("win").style.display === "block"){
            buttonLoser.style.display = "none"; //zorgt dat de loser button niet in beeld komt als de value 0 is
        } 
      }
health.value -= 10; //na 2 seconden wordt de value met 10 verlaagd 
}, 2000);
  }
  body.addEventListener("click", timerStart);
  //Einde timer + bron

