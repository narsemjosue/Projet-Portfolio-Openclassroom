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
          } else {
            document.querySelector(".message-erreur").style.display = 'block';
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

