abstract class Animal {
    abstract emitirSonido(): void;

    dormir(): void{
        console.log('ZZZZZzzzz...');
    }

}
class Perro extends Animal{
    emitirSonido(): void {
        console.log('Guau')
    }
}
const dod = new Perro();
dod.emitirSonido();
dod.dormir();