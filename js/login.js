let enter = document.getElementById("singInLogin");
let inputLogName = document.getElementById("formNameStorage")


//Comprueba el storage y el valor del input de login
if (localStorage.getItem("name") && inputLogName.value !== "" && !isNaN(inputLogName.value)) {
  window.location = "list.html";
}

//Guarda el usuario en el storgae
let saveNameLogin = document.getElementById("formNameStorage");
saveNameLogin.addEventListener("input", () => {
  JSON.stringify(localStorage.setItem("name", saveNameLogin.value));
});

//Login cuando el usuario hace click en el btn
enter.addEventListener("click", (e) => {
    let loadLogin = document.getElementById("spinner");
    let divSpinner = document.createElement("div");

    e.preventDefault();
    if (inputLogName.value == "") {

      loadLogin.innerHTML="";
      divSpinner.innerHTML = `<div class="title is-6 has-text-danger has-text-weight-light">Por favor, escribe tu nombre de usuario</div>`;
      loadLogin.appendChild(divSpinner);

    } else if(!isNaN(inputLogName.value)){

      loadLogin.innerHTML="";
      divSpinner.innerHTML = `<div class="title is-6 has-text-danger has-text-weight-light">El nombre de usuario debe estar compuesto por letras</div>`;
      loadLogin.appendChild(divSpinner);

    } else{

      loadLogin.innerHTML="";
      divSpinner.innerHTML = `<div class="circles-to-rhombuses-spinner">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      </div>`;
      loadLogin.appendChild(divSpinner);
      setTimeout(() => {window.location = "list.html";}, 4000);
      
    }
});