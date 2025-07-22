let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
  mostrarMensaje("¡Producto añadido al carrito!");
}

function actualizarCarrito() {
  const carritoLista = document.getElementById("lista-carrito");
  const carritoTitulo = document.querySelector("#carrito h2");
  carritoLista.innerHTML = "";

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    carritoLista.appendChild(li);
  });

  carritoTitulo.textContent = `🛒 Carrito (${carrito.length})`;
}

function mostrarMensaje(texto) {
  const mensaje = document.createElement("div");
  mensaje.className = "mensaje-flotante";
  mensaje.textContent = texto;
  document.body.appendChild(mensaje);

  setTimeout(() => {
    mensaje.remove();
  }, 2000);
}

function finalizarCompra() {
  if (carrito.length === 0) {
    mostrarMensaje("Tu carrito está vacío");
    return;
  }

  let mensaje = "Hola YouthShop, deseo comprar esto:%0A";
  carrito.forEach(item => {
    mensaje += `- ${item.nombre} - $${item.precio.toFixed(2)}%0A`;
  });

  const numeroWhatsApp = "593968789582";
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
  window.open(url, "_blank");
}

