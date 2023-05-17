const reponse = await fetch("http://localhost:5678/api/works");
const projets = await reponse.json();
console.log(projets);
function genererProjet(projets) {
  for (let i = 0; i < projets.length; i++) {
    const figure = projets[i];
    // Element accueillant
    const sectionProjets = document.querySelector(".gallery");

    const projetElement = document.createElement("figure");
    const imageElement = document.createElement("img");
    imageElement.src = figure.imageUrl;
    const nomElement = document.createElement("figcation");
    nomElement.innerText = figure.title;

    sectionProjets.appendChild(projetElement);
    projetElement.appendChild(imageElement);
    projetElement.appendChild(nomElement);
  }
}
genererProjet(projets);

// gestion des boutons
const boutonTous = document.querySelector(".tous");
boutonTous.addEventListener("click", function () {
  const TousProjet = projets.filter(function (projet) {
    return projet;
  });
  document.querySelector(".gallery").innerHTML = "";
  genererProjet(TousProjet);
  console.log(TousProjet);
});

const boutonObjet = document.querySelector(".objets");
boutonObjet.addEventListener("click", function () {
  const ObjetProjet = projets.filter(function (projet) {
    return projet.categoryId === 1;
  });
  document.querySelector(".gallery").innerHTML = "";
  genererProjet(ObjetProjet);
  console.log(ObjetProjet);
});

const boutonAppartement = document.querySelector(".appart");
boutonAppartement.addEventListener("click", function () {
  const AppartProjet = projets.filter(function (projet) {
    return projet.categoryId === 2;
  });
  document.querySelector(".gallery").innerHTML = "";
  genererProjet(AppartProjet);
  console.log(AppartProjet);
});

const boutonHotel = document.querySelector(".hotel");
boutonHotel.addEventListener("click", function () {
  const hotelProjet = projets.filter(function (projet) {
    return projet.categoryId === 3;
  });
  document.querySelector(".gallery").innerHTML = "";
  genererProjet(hotelProjet);
  console.log(hotelProjet);
});

const tok = window.localStorage.getItem("token");
if (tok) {
  console.log("test reussi");
  document.querySelector(".login").innerText = "logOut";
  let btn = document.querySelector(".btn");
  btn.style.display = "none";
} else {
  console.log("test non reussi");
  const btn = document.querySelectorAll(".hidden");
  console.log(btn);
   btn.classList.remove("hidden");
  const edit = document.getElementById("edition");
  edit.style.display = "none";
}

// const log = document.querySelector(".login");
// log.addEventListener("click", function (){
//   if(tok){
//   localStorage.removeItem('token');
//   document.location = '';
// }
// else{
//   document.location = '/FrontEnd/login.html';
// }
// } );

// GESTION DE LA MODAL****************

var modal = document.getElementById("myModal");
const btn_projet = document.getElementById("myBtn");
// Contenu de la modal
for (let i = 0; i < projets.length; i++) {
  const figure = projets[i];
  const sectionProjets = document.querySelector(".corps-modal");
  const projetElement = document.createElement("figure");
  const imageElement = document.createElement("img");
  imageElement.src = figure.imageUrl;
  const nomElement = document.createElement("figcation");
  nomElement.innerText = "editer";
  const iconesup = document.createElement("i");
  iconesup.classList.add("fa-solid", "fa-trash-can");

  sectionProjets.appendChild(projetElement);
  projetElement.appendChild(imageElement);
  projetElement.appendChild(nomElement);
  projetElement.appendChild(iconesup);
}
const span = document.getElementsByClassName("close")[0];
// Click sur le bouton de la modal modifier
btn_projet.addEventListener("click", function () {
  modal.style.display = "block";
  //suppression d'un element
  let btnsupprimer = document.querySelectorAll(".fa-trash-can");
  console.log(btnsupprimer);
  for (let i = 0; i < btnsupprimer.length; i++) {
    btnsupprimer[i].addEventListener("click", (event) => {
      event.preventDefault();
      console.log(event);
      let id_supprimer = projets[i].id;
      console.log(id_supprimer);
      let monToken = localStorage.getItem("token");
      let response = fetch(`http://localhost:5678/api/works/${id_supprimer}`, {
        method: "DELETE",
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${monToken}`,
        },
      });
      if (response.status == 200) {

        alert("suppression reussi")
        return false;
        // if HTTP-status is 200-299
        //alert("Photo supprimé avec succes");
        // obtenir le corps de réponse (la méthode expliquée ci-dessous)
      } else {
        alert("Echec de suppression");
      }
    });
  }
});
span.addEventListener("click", function () {
  modal.style.display = "none";
});

// GESTION DE LA MODAL DU BOUTON AJOUTER PHOTO
const btn_ajoutphoto = document.querySelector(".ajoutphoto");
btn_ajoutphoto.addEventListener("click", function(e){
  e.preventDefault();
  console.log('click reussi');
  document.querySelector('.corps-modal').innerHTML = "";

})
