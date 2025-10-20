const voiture={
    marque : "BMW" ,
    model : "sport" ,
    annee : 2025 
}
//challenge 1
// 1
console.log(voiture);


// 2

console.log("marque :", voiture.marque);
console.log("annee :", voiture.annee);
 
//3

voiture.annee = 2026 ;
console.log("nv annee :" , voiture.annee);

//4

voiture.couleur = "bleu";
console.log("la couleur est : " , voiture.couleur);

//5

delete voiture.model ;

console.log(voiture);

//challenge 2
//1

const etudiant = {
    nom : "zekraoui",
    age : 20 ,
    sePresenter : function(){
        console.log( "Bonjour, je m’appelle " + [this.nom] + " et j’ai " + [this.age] + " ans" );
    }
}

etudiant.sePresenter();

//2

const personne = {
    prenom : "hiba" ,
    age : 20 ,
    ville : "oued zem"
}

for(let key in personne){
  console.log(key + " : " + personne[key]);
}

//3

const classe = {
    etudiants : ["hiba" , "adnane" , "talib" , "ayoub" ,"islam", "amir"],
    afficherEtudiants : function(){
        console.log(this.etudiants);
    }
}

classe.afficherEtudiants();

//4

const livres = [{titre :"livre 1" , auteur :"auteur 1" , annee : 2022},
                {titre :"livre 2" , auteur :"auteur 2" , annee : 2023},
                {titre :"livre 3" , auteur :"auteur 3" , annee : 2024},];
            
for (const livre of livres) {
  console.log(livre.titre);
}



//challenge 3
//1

const entreprise ={
    adresse : {
        rue : "rue 1",
        ville : "casablanca" ,
        codePostal : 20000 
    }
}

console.log(entreprise.adresse.ville);

//2

const produits =[{nom : "pr1" , prix : "200 MAD" , quantité : 4},
                 {nom : "pr2" , prix : "100 MAD" , quantité : 2},
                 {nom : "pr3" , prix : "300 MAD" , quantité : 5}];

const verifierStock = produits.reduce((tot , produit)=>{
    return tot + (produit.quantité * produit.prix);
}, 0); 

console.log("le total est : " + verifierStock);


//3

class Animal{
    constructor(nom,type){
        this.nom = nom;
        this.type = type;
    }
    parler(){
        console.log(`nom : ${this.nom}`);
        console.log(`type : ${this.type}`);
    }
}

const animal = new Animal("chien" , "malinoi");
animal.parler();

//4

const Employes = [
  { name: "hiba", salaire: 20000 },
  { name: "adnane", salaire: 30000 },
  { name: "talib", salaire: 40000 },
  { name: "ayoub", salaire: 35000 },
  { name: "mohamed", salaire: 2000 },
  { name: "ikram", salaire: 1000 },
];

const filt =Employes.filter(employe => employe.salaire > 3000);

console.log("les employes ceux qui ont un salaire > 3000 :", filt);
