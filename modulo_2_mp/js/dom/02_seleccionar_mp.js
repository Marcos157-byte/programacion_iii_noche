
const titulo = document.getElementById("title");
console.log("Título:", titulo.textContent);


const nota = document.getElementById("nota");
console.log("Nota:", nota.textContent);


const items = document.getElementsByClassName("item");
Array.from(items).forEach(item => console.log("Item:", item.textContent));

const notaNames = document.getElementsByName("notaName");
Array.from(notaNames).forEach(nota => console.log("Nota por name:", nota.value));