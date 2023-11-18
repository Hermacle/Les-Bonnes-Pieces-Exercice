// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[2];
const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} $`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "Aucune Catégorie";

//Création des éléments pour l'exercice 
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de description pour le moment";
const stockElement = document.createElement("p");
stockElement.innerText = article.disponibilite ? "En Stock" : "Rupture de stock";

//Rattachement des balises au DOM
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);

//Ajout des éléments au DOM 
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);