const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const formulario = document.querySelector(".form");
const btn = document.querySelector("#btn");
const contForm = document.querySelector(".contenedor-formulario");
const div = document.createElement("div");
div.classList.add("alertas");
const p = document.createElement("p");
div.appendChild(p);

p.classList.add("alertas-parrafo");

eventListeners();

function eventListeners() {
  btn.addEventListener("click", validarFormulario);
}
function validarFormulario(e) {
  e.preventDefault();
  if (!email.value.trim() || !password.value.trim()) {
    alerta("Faltan campos por completar");
    return;
  }
  // console.log(email.value)
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.value.toLowerCase())) {
    alerta("Correo no válido");
    return;
  }
  if (password.value.length < 6) {
    alerta("Contraseña no tiene el tamaño minimo");
    return;
  }
  if (email.value.trim() && password.value.trim()) {
    alert("Registrado Correctamente");
  }

  formulario.reset();
}
function alerta(mensaje) {
  p.textContent = mensaje;
  contForm.appendChild(div);
  setTimeout(() => {
    div.remove();
  }, 3000);
}
