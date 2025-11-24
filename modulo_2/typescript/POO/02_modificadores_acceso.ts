class Libro{
    public titulo: string;
    private autor: string;
    protected cota: string = '123213123';
    constructor(titulo: string, autor: string){
        this.titulo =  titulo;
        this.autor = autor;

    }
    getAutor(): string{
        return this.autor;
    }
    setAutor(autor:string): void {
        this.autor=autor;

    }
    getCota(): string{
        return this.cota;
    }
}

const libroHistoricoQuito = new Libro('Historia de Quito','Pedro Parra');
console.log('Titulo',libroHistoricoQuito.titulo);
console.log('Autor', libroHistoricoQuito.getAutor());
console.log('Cota', libroHistoricoQuito.getCota())
libroHistoricoQuito.setAutor('Marcos');
console.log('Autor', libroHistoricoQuito.getAutor());