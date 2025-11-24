const caja= document.getElementById('caja');
caja.addEventListener('mauseover', () => {
    caja.style.background = 'yellow';
});
caja.addEventListener('mauseout', () => {
    caja.style.background = 'lightgray';
});
caja.addEventListener('click', () => {
    alert("!click!");
});
