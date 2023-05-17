const reponse = await fetch('http://localhost:5678/api/works');
const projets = await reponse.json();
console.log(projets);
function genererProjet(projets){
for (let i = 0; i < projets.length; i++){
    const figure =projets[i];
    // Element accueillant
    const sectionProjets = document.querySelector('.gallery');
   
    const projetElement = document.createElement('figure');
    const imageElement = document.createElement('img');
    imageElement.src = figure.imageUrl
    const nomElement = document.createElement('figcation');
    nomElement.innerText = figure.title
  
    sectionProjets.appendChild(projetElement);
    projetElement.appendChild(imageElement);
    projetElement.appendChild(nomElement);
}
}
genererProjet(projets);

// gestion des boutons
const boutonTous = document.querySelector('.tous');
boutonTous.addEventListener('click', function(){
    const TousProjet = projets.filter(function(projet){
        return projet;
    });
    document.querySelector('.gallery').innerHTML = "";
    genererProjet(TousProjet);
    console.log(TousProjet);
});

const boutonObjet = document.querySelector('.objets');
boutonObjet.addEventListener('click', function(){
    const ObjetProjet = projets.filter(function(projet){
        return projet.categoryId === 1;
    });
    document.querySelector('.gallery').innerHTML = "";
    genererProjet(ObjetProjet);
    console.log(ObjetProjet);
});

const boutonAppartement = document.querySelector('.appart');
boutonAppartement.addEventListener('click', function(){
    const AppartProjet = projets.filter(function(projet){
        return projet.categoryId === 2;
    });
    document.querySelector('.gallery').innerHTML = "";
    genererProjet(AppartProjet);
    console.log(AppartProjet);
});

const boutonHotel = document.querySelector('.hotel');
boutonHotel.addEventListener('click', function(){
    const hotelProjet = projets.filter(function(projet){
        return projet.categoryId === 3;
    });
    document.querySelector('.gallery').innerHTML = "";
    genererProjet(hotelProjet);
    console.log(hotelProjet);
});

