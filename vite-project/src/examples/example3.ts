interface UsuarioInterface {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    roles: string[];
    direccion: DireccionInterface;
    saludar: () => void;
    actualizarEmail: (nuevoEmail: string) => void;
}

function saludar(usuario: UsuarioInterface) {
    console.log(`Hola ${usuario.nombre}`);
}

function actualizarEmail(usuario: UsuarioInterface, nuevoEmail: string) {
    usuario.email = nuevoEmail;
}

interface DireccionInterface {
    ciudad: string;
    pais: string;
}

const usuario: UsuarioInterface = {
    id: 1,
    nombre: "Felipe",
    email: "felipe@gmail.com",
    activo: true,
    roles: ["admin", "user"],
    direccion: {
        ciudad: "Medellín",
        pais: "Colombia"
    },
    saludar: () => {
        console.log("Hola");
    },
    actualizarEmail: (nuevoEmail: string) => {
        usuario.email = nuevoEmail;
    }
}