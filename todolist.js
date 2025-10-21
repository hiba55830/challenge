const prompt = require("prompt-sync")();

const taches = [] ;
let id = 1 ;

function ajouterTach(){

    let titre = prompt("entrer une description") ;
    const tache = {
        id : id++ , 
        titre : titre ,
        isDone:false };

    taches.push(tache);
   
    console.log(`la tache est : ${tache.id} ${tache.titre}`);

}

ajouterTach();


const tableV = [] ;
let id1 = 0 ;

function recherchTach(){
    let titre = prompt("entrer une tache");
  for(let i=0 ;i <taches.length ; i++){
    if(taches[i].titre == titre){
    console.log(taches[i])
  }
}
}
recherchTach();

function modifierTach(){
  let modId = parseInt(prompt("entrer l'id d'une tache modifier"));
  
  if(modId > 0 || modId < taches.length){
    console.log("modifier avec succes");
  }
  else{
    console.log("la tache selectionnee n'existe pas");
  }
   
}

modifierTach();




function supprimerTache(){
    let elementAsupprimer = parseInt(prompt("entrer l'id de la tache a supprimer"));
    if(elementAsupprimer > 0 && elementAsupprimer < taches.length){
        console.log("tache supprimee avec succes");
}
    else{
       console.log("la tache selectionnee n'existe pas");
 }
        
}

supprimerTache();

function affTachTeOuEnAttente(){
  for(let i=1 ; i<taches.length ; i++){
     if(taches[i].isDone == true){
      console.log("terminee");
    }
    else{
      console.log("en attente");
    }
  }
}

affTachTeOuEnAttente();

function menu(){
  let ch = true ;
  do{
    console.log("===To-Do List===");
    console.log("1.ajouter une tache");
    console.log("2.Afficher les tâches");
    console.log("3.Rechercher une tâche");
    console.log("4.Modifier une tâche");
    console.log("5.Supprimer une tâche");
    console.log("6.Marquer une tâche comme terminée");
    console.log("7.Afficher tâches terminées / en attente");
    console.log("8.Quitter");

    ch=prompt("entrer une option");

    switch(ch){
        case "1":
          ajouterTach();
        break;

        case "2":
          afficherTaches();
        break;

        case "3":
          recherchTach();
        break;

        case "4":
          modifierTach();
        break;

        case "5":
          supprimerTache();
        break;

        case "6":
          marquerTacheCommeTer();
        break;

        case "7":
          affTachTeOuEnAttente();
        break;

        case "8":
          console.log("Quitter");
        break;

        default:
          console.log("sortie");
    }
  }while(ch !== "7");
}

menu();