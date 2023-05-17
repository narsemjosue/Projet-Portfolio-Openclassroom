document.querySelector("#btn-login").onclick = (e) => {
    e.preventDefault();
    // recuperation des identifiants
    const emailAddress = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    //utilisateur
    const user = {
      email: emailAddress,
      password: password,
    };
  
    //test de validité
    const emailCheck = document.getElementById("email");
    const passwordCheck = document.getElementById("password");
    passwordCheck.reportValidity();
    emailCheck.reportValidity();
  
    // returner false si email ou password est invalide
    if (
      emailCheck.checkValidity() === false ||
      passwordCheck.checkValidity() === false
    ) {
      alert("erreur");
  
      // envoyer requête si identifiant valide
    } else {
      fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      })
        // si la requete est OK, returner JSON data sinon erreur
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else if (res.status === 404) {
            error.innerHTML = "Erreur dans l'identifiant";
          } else if (res.status === 401) {
            error.innerHTML = "Erreur dans le mot de passe";
          }
        })
        .then((userLogged) => {
          if (userLogged === undefined) {
            return;
  
            // If the user is logged in call the function
          } else {
            validateUser(userLogged);
          }
        })
        .catch((err) => {
          alert("erreur 404, problème avec le serveur:" + err);
        });
    }
  };
  
  // Function to validate the logged in user and redirect to the index page
  function validateUser(userLogged) {
    const userId = userLogged.userId;
    // Stokage du token
    if (userId !== undefined) {
      window.localStorage.setItem("token", userLogged.token);
      window.localStorage.setItem("userId", userLogged.userId);
      document.location= "./index.html";
    } else {
    }
    console.log(userId);
  }

