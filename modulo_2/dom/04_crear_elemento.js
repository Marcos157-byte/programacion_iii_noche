let parrafo=null;
const mensaje=document.getElementById('crear');
btnCrear.addEventListener('click', ()=>
{
    parrafo=document.createElement('p');
    parrafo=textContent='Parrafo dinamico';
    parrafo.classList.add('parrafo')
    contenedor.appendChild(parrafo);
});
const btnEliminar=document.getElementById('eliminar');
btnEliminar.addEventListener('click', () =>
{
    if(parrafo) parrafo.remove();
});

const btnDobleClick = document.getElementById('btnDobleClick');
btnDobleClick.addEventListener('dblclick', () => {
    alert("Hizo Dodle Click");
});

const inputText = document.getElementById('nombre');
inputText.addEventListener('input', (e) => {
    console.log('Escribiendo: ', e.target.value);
});
const form = document.getElementById('formulario');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario envidado por ${inputText}');
});

inputText.addEventListener('keydown', (e) => {
    console.log('Tecla precionada: ', e.key);
});
window.addEventListener('scroll', () => {
    console.log('Scroll detectado');
});