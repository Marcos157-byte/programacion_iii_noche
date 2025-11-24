var Libro = /** @class */ (function () {
    function Libro(titulo, autor) {
        this.cota = '123213123';
        this.titulo = titulo;
        this.autor = autor;
    }
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.getCota = function () {
        return this.cota;
    };
    return Libro;
}());
var libroHistoricoQuito = new Libro('Historia de Quito', 'Pedro Parra');
console.log('Titulo', libroHistoricoQuito.titulo);
console.log('Autor', libroHistoricoQuito.getAutor);
console.log('Cota', libroHistoricoQuito.getCota);
libroHistoricoQuito.setAutor('Marcos');
console.log('Autor', libroHistoricoQuito.getAutor);
