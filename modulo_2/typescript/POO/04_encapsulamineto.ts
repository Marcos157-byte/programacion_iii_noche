class Usuario {
    public username: string;
    private password: string = "123";
    constructor(username: string){
        this.username = username;
    }
    autenticar(password: string): boolean{
        return password==this.password;
    }
}

const user = new Usuario('marcos');
const autentificacion = user.autenticar('12345');

if(autentificacion){
    console.log('usuario exitamente autenticado');
}else{
    console.log('acceso denegado')
}