const prompt = require("prompt-sync")();

let historique =[];

let num1 = parseFloat(prompt("entrer le 1 er nombre"));
let num2 = parseFloat(prompt("entrer le 2 eme nombre"));

let choisiOpe =prompt("entrer un nombre pour l'addition,la soustraction,la multiplication,la division,la puissance,Racine carrée,factorielle")


function addition(num1,num2){
    return num1 + num2 ;

}
console.log(addition(num1,num2))


function soustraction(num1,num2){
    return  num1 - num2 ;
}
console.log(soustraction(num1,num2));


function puissance(num1,num2){
    return num1 ** num2
}
console.log(puissance(num1,num2));


function racineCarrre(num1){
    return Math.sqrt(num1)
}
console.log(racineCarrre(num1));

function Factorielle(num1){
let rslt = 1;
for (let i = 1; i <= num1; i++) {
rslt = rslt * i;
}
return rslt;
}
console.log(Factorielle(num1));


function div(a,b ){
  
if(b === 0){
  console.log("impossible de diviser par zéro") ;
}
return a / b ;
}
  
console.log(div(num1 , num2));


function cal(){
    while(1){
        console.log("1:Addition");
        console.log("2:Soustraction");
        console.log("3:Puissance");
        console.log("4:Racine Carre");
        console.log("5:Factorielle");
        console.log("6:Historique");
        console.log("7:Sortie");
        
        let ch=prompt("entrer une opération");  
        let nm1 , nm2 ;
        if(ch>"1" && "5">=ch){
            nm1=parseFloat(prompt("entrer un nombre"));
            nm2=parseFloat(prompt("entrer nv nombre"));
            return ;
        }
        
    } 
}


let r ;
switch(choisiOpe){
    case "addition":
        r=addition(num1,num2)
         historique.push(r)
        break;

    case "soustraction":
        r=soustraction(num1,num2)
         historique.push(r)
        break;

    case "puissance":
        r=puissance(num1,num2)
         historique.push(r)
        break;

    case "racine carre":
        r=racineCarrre(num1)
         historique.push(r)
        break;

    case "Factorielle":
        r=Factorielle(num1)
         historique.push(r)
        break;

    case "historique":
    console.log("Historique des calculs :");
    for (let i = 0; i < historique.length; i++) {
        console.log(historique[i]);
    }
      break;
      
    default:
        r="non reconnu";
}

