const prompt = require("prompt-sync")();


const BibliDelivres = [];


function introduitLivre() {
 
  const idLivre = prompt("entrer l'ID du livre :");
  const titreLivre = prompt("entrer le titre du livre :");
  const auteurLivre = prompt("entrer l'auteur du livre :");
  const anneeLivre = prompt("entrer l'année de publication :");
  const disponibleLivre= prompt("Le livre est-il disponible ? (oui/non)");

  const livre = {
    idLivre: idLivre, 
    titre: titreLivre,
    auteur: auteurLivre,
    anneePublication: parseInt(anneeLivre),
    disponible: disponibleLivre == "oui"
  };

  BibliDelivres.push(livre);

   console.log(BibliDelivres);
}

introduitLivre();

function ajouterLivres(){
    while (true) { 
    const titreDeLivre = prompt("entrer le titre du livre (entrer 'fin' pour terminer votre ajout) :");

    if (titreDeLivre === 'fin' ){
      break; 
    }
    console.log(`ce livre est ajouté : ${titreDeLivre}`);
}}
ajouterLivres();

function afficherLivres(){
   for (let i = 0; i < BibliDelivres.length; i++) {
      let livre = BibliDelivres[i];
   console.log(`l'id de livre est ${livre.idLivre} le titre de livre est ${livre.titre}
       l'auteur est ${livre.auteur} l'annee est ${livre.anneePublication} `);
}}

afficherLivres();
/*
function trierTitreAscendant(){
     BibliDelivres.sort((liv1 , liv2) => {

    let titreA = liv1.titre ;
    let titreB = liv2.titre ;

    if (titreA < titreB) {
      return -1; 
    }
    if (titreA > titreB) {
      return 1;  
    }
    return 0;    
  });
    console.log("voici le nv ordre");
}

trierTitreAscendant();

function trierTitreDscendant(){
     BibliDelivres.sort((liv1, liv2) => {

    let titreA = liv1.titre ;
    let titreB = liv2.titre ;

    if (titreA > titreB) {
      return -1; 
    }
    if (titreA < titreB) {
      return 1;  
    }
    return 0;    
  });
     console.log("voici le nv ordre");
}

trierTitreDscendant();


function trierParAnnee() {
    BibliDelivres.sort((a, b) =>
      b.anneePublication - a.anneePublication);
    console.log("voici le nv ordre" );

}

trierParAnnee();
*/

function afficherLivresDisponibles() {
  const livresDisponibles = BibliDelivres.filter(livre => livre.disponible === true);

  if (livresDisponibles.length === 0) {
    console.log("Aucun livre disponible");
    return;
  }

  console.log("Livres disponibles :");
  livresDisponibles.forEach((livre , elm) => {
    console.log(`ID: ${livre.idLivre}, Titre: ${livre.titre}, Auteur: ${livre.auteur}`);
  });
}

afficherLivresDisponibles();


function rechercherLivre(id){
   const idmsg = parseInt(prompt("entrer l'ID du livre à rechercher :"));

  const tLivre = BibliDelivres.find(livre => livre.idLivre === idmsg);

  if (tLivre) {
    console.log(`L'ID  ${livreTrouve.idLivre} Le titre  ${livreTrouve.titre}
       L'auteur  ${livreTrouve.auteur} L'annee ${livreTrouve.anneePublication} } `);}
else{
  console.log("aucun livre");
}
}
   
rechercherLivre(5);