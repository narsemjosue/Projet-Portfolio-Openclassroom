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
  const btn1 = document.querySelector("#btn_modif1");
  btn1.style.display = "block";
  const btn2 = document.querySelector("#btn_modif2");
  btn2.style.display = "block";
  const btn3 = document.querySelector("#myBtn");
  btn3.style.display = "block";
} else {
  console.log("test non reussi");

  const edit = document.getElementById("edition");
  edit.style.display = "none";
}

const log = document.querySelector(".login");
log.addEventListener("click", function () {
  if (tok) {
    localStorage.removeItem("token");
    document.location = "./index.html";
  } else {
    document.location.href = "/FrontEnd/login.html";
  }
});

// GESTION DE LA MODAL****************

var modal = document.getElementById("myModal");
const btn1_modal = document.getElementById("myBtn");
const btn2_modal = document.getElementById("btn_modif1");
const btn3_modal = document.getElementById("btn_modif2");
// Contenu de la modal
function generermodal() {
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
}
generermodal();
const span = document.getElementsByClassName("close")[0];

function modal_affich() {
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
    });
  }
}
// Click sur le bouton de la modal modifier
btn1_modal.addEventListener("click", function () {
  modal_affich();
});
btn2_modal.addEventListener("click", function () {
  modal_affich();
});
btn3_modal.addEventListener("click", function () {
  modal_affich();
});

span.addEventListener("click", function () {
  document.querySelector(".corps-modal").style.display = "grid";
  document.querySelector(".contenu_ajout_photo").style.display = "none";
  document.querySelector(".titre_modal").innerText = "Galerie photo";
  document.querySelector(".valider_photo").style.display = "none";
  document.querySelector(".ajoutphoto").style.display = "block";
  document.querySelector(".sup-gallerie").style.display = "block";
  document.querySelector(".fa-arrow-left").style.display = "none";
  modal.style.display = "none";
});
const fenetre = document.querySelector('#myModal')
fenetre.addEventListener("click", function () {
    // modal.style.display = "none";
});

// GESTION DE LA MODAL DU BOUTON AJOUTER PHOTO
const btn_ajoutphoto = document.querySelector(".ajoutphoto");
btn_ajoutphoto.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".titre_modal").innerText = "Ajout photo";
  document.querySelector(".corps-modal").style.display = "none";
  console.log("click reussi");
  document.querySelector(".contenu_ajout_photo").style.display = "flex";
  document.querySelector(".valider_photo").style.display = "block";
  document.querySelector(".ajoutphoto").style.display = "none";
  document.querySelector(".sup-gallerie").style.display = "none";
  document.querySelector(".fa-arrow-left").style.display = "block";
});

const btn_retour = document.querySelector(".fa-sharp");
btn_retour.addEventListener("click", function () {
  document.querySelector(".corps-modal").style.display = "grid";
  document.querySelector(".contenu_ajout_photo").style.display = "none";
  document.querySelector(".titre_modal").innerText = "Galerie photo";
  document.querySelector(".valider_photo").style.display = "none";
  document.querySelector(".ajoutphoto").style.display = "block";
  document.querySelector(".sup-gallerie").style.display = "block";
  document.querySelector(".fa-arrow-left").style.display = "none";
});

/*****ENVOI D'UNE NOUVELLE IMAGE */
const aff = document.querySelector("#photo-aff");
const preview = document.querySelector("#visuel");
aff.onchange = function () {
  preview.style.display = "block";
  preview.src = URL.createObjectURL(aff.files[0]);
};
const content = document.querySelector(".contenu_ajout_photo");
// envoi de l'image
const formulaire = document.querySelector(".valider_photo");
content.addEventListener("submit", async function (e) {
  e.preventDefault();
  
  var formData = new FormData();
  const ajoutTitre = document.querySelector("#titre").value;
  const ajoutCategorie = document.querySelector("#categorie").value;
  formData.append("image", aff.files[0]);
  formData.append("title", ajoutTitre);
  formData.append("category", ajoutCategorie);
  console.log("categorie", document.querySelector("#categorie").value);
  let monToken =  window.localStorage.getItem("token");
  let respons = await fetch(`http://localhost:5678/api/works/`, {
    method:'POST',
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${monToken}`
    },
    body: formData
  }).then((res)=>{
    if(res.ok){
      console.log("Requete reussite")
    }else{
      console.log("echec de la requete")
    }
  })
});