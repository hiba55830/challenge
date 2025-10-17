const prompt = require("prompt-sync")();
//1

let nombree = parseInt(prompt("entrer un nombre"));

if( nombree % 2 === 0){
    console.log("le nombre est pair");
}
else{
    console.log("le nombre est impair");
}


//2

let nombrre = parseInt(prompt("entrer un nombre"));

if(nombrre > 0){
    console.log("le nombre est positif");
}
else if(nombrre < 0){
    console.log("le nombre est negatif");
}
else{
    console.log("ce nombre est null");
}


//3

let age = 18 ;

if(age >= 18){
    console.log("éligible");
}
else{
    console.log("non éligible");
}



//4

let nombre1 = parseFloat(prompt("entrer le 1er nombre"));
let nombre2 = parseFloat(prompt("entrer le 2eme nombre"));

if(nombre1 > nombre2){
    console.log("le" + nombre1 + "est le plus grand");
}

else{
    console.log("le" + nombre2 + "est le plus grand");
}

//5
 
let score = 30; 

switch (score){
  case(score > 90 && score < 100):
    console.log("A");
    break;
  case(score > 80 && score < 89):
    console.log("B");
    break;
  case(score > 70 && score < 79):
   console.log("C");
    break;
  case(score > 60 && score <69):
    console.log("D");
    break;
  case(score < 60):
    console.log("F");
    break;
  default:
    console.log("non trouvable");
}


//6

let annee = prompt("entrer une annee");

if(annee % 4 === 0){
    console.log(annee + "est bissextile");
}
else if(annee % 100 != 0 && annee % 400 === 0){
    console.log(annee + "est bissextile");
}
else{
    console.log(annee + "n'est pas bissextile ");
}


//8

let coleur = String(prompt("entrer un coleur "));

if(coleur == "rouge"){
    console.log("arret");
}
else if(coleur =="jaune"){
    console.log("Préparez-vous");
}
else if(coleur == "vert"){
    console.log("Allez");
}
else{
    console.log("sortie");
}



//9



let nombre = prompt("entrer un nombre");

if(nombre % 3 === 0){
    console.log("Fizz");
}

else if(nombre % 5 === 0){
    console.log("Buzz");
}

else if(nombre % 3 === 0 && nombre % 5 === 0){
    console.log("FizzBuzz");
}

else{
    console.log(nombre);
}



//10

let nomUtiliCorr =  "admin" ;
let motDePassUC = "1234" ;
let nomU = String(prompt("entrer un nom"));
let motDePass = String(prompt("entrer un mot de passe"));

if(nomU == nomUtiliCorr && motDePass == motDePassUC){
    console.log("Bienvenue Admin");
}

else if(nomU == nomUtiliCorr && motDePass != motDePassUC){
    console.log("Mot de passe incorrect");
}

else{
    console.log("Utilisateur introuvable");
}
