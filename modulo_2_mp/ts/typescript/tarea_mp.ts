interface UsuarioLogin {
    id: number,
    nombre: string,
    password: string
}

const usulogin: UsuarioLogin = {
    id: 1,
    nombre: 'marcos',
    password: '123'
}

function login(usulogin:UsuarioLogin): void {
    if (usulogin.password=='123') {
        console.log("ingreso exitoso")
    } else {
        console.log('acceso denegado')
    }

}
console.log(usulogin);