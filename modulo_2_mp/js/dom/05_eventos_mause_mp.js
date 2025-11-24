const caja = document.getElementById('caja');


caja.addEventListener('mouseover', () => {
    caja.style.background = 'yellow';
    caja.textContent = "👖 Jeans en promoción";
});

caja.addEventListener('mouseout', () => {
    caja.style.background = 'lightgray';
    caja.textContent = "Caja de inventario";
});


caja.addEventListener('click', () => {
    alert(" ¡Click en la caja de jeans!");
});