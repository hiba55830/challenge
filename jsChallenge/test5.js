//challenge 1
function sommeTableau(tab) {
  let somme = 0;
  for(let i = 0 ; i < tab.length ; i++){
    somme = somme + tab[i];
  }
  return somme;
}

sommeTableau([24,7,16,8]);

// challenge 2
function maxTableau(tab){
    let max = tab[0];
    for (let i = 1 ; i < tab.length ; i++){
        if(tab[i] > max)
          max = tab[i];
        } 
        return max ;
    }
      

    let tab2 = [23,4,5,32];
    let maxx = maxTableau(tab2);
    console.log("le maximum est" + maxx);


//challenge 5
function filtrerPairs(tab){
    tab.filter((nbr) => {
         return nbr % 2 === 0;
});
}
let table = [11, 22, 33, 44, 55, 66];
let nombPair = filtrerPairs(table);
console.log(nombPair); 


//challenge 6
function  produitTableau(tab){
    let pr = 1 ;
    for(let i=0 ; i < tab.length ; i++){
        pr = pr * tab[i];
    }
    return pr ;
}

let nbrs =[10,12,7,8,5];
console.log(produitTableau(nbrs));

//challenge 7
function moyenne(tab){
    let somme = 0 ;
    let moyenne1 = 0 ;
    for(let i = 0 ; i < tab.length ; i++){
        somme = somme + tab.length
    }
    moyenne1 = somme / tab.length ;
    return moyenne1 ;
}

let table2 = [13,6,4,9];
let moy = moyenne(table2);
console.log("la moyenne est " + moy);


//challenge 8
function doubler(tab){
  let ttab = []; 
  for(let i = 0; i < tab.length; i++){
    ttab.push(tab[i] * 2);
  }
  return ttab;
}

let tablee = [3 , 5 , 7 , 2 , 4];
let dbltable = doubler(tablee);
console.log(dbltable);


//challenge 11
function tableMultiplication(n){
    let tab = [] ;
    for(i=1 ; i<=10 ; i++){
        tab.push(n * i)
    }
    return tab ;
}
console.log(tableMultiplication(2))