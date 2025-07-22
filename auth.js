// Guardar usuarios registrados en localStorage
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

if (document.getElementById("form-registro")) {
  document.getElementById("form-registro").addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const rol = document.getElementById("rol").value;

    const nuevoUsuario = { usuario, password, rol };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("¡Usuario registrado con éxito!");
    window.location.href = "login.html";
  });
}

if (document.getElementById("form-login")) {
  document.getElementById("form-login").addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = document.getElementById("usuarioLogin").value;
    const password = document.getElementById("passwordLogin").value;

    const encontrado = usuarios.find(u => u.usuario === usuario && u.password === password);
    if (encontrado) {
      localStorage.setItem("usuarioActual", JSON.stringify(encontrado));
      alert("Inicio de sesión correcto");
      window.location.href = "index.html"; // redirige a la tienda
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
}