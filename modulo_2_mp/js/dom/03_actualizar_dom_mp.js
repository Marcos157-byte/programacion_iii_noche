
const mensaje = document.getElementById('mensaje');
mensaje.textContent = "Bienvenido a la tienda de jeans";
mensaje.style.color = "blue"; 


const link = document.getElementById('link');
link.setAttribute('href', 'https://www.tiendajeans.com'); 
link.classList.add('boton');
link.textContent = "Ir a la tienda de jeans";