var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad));
    };
    return Persona;
}());
var amigoPedro = new Persona('Pedro', 15);
console.log('Nombre');
console.log(amigoPedro.nombre);
console.log('Edad');
console.log(amigoPedro.edad);
amigoPedro.saludar();
