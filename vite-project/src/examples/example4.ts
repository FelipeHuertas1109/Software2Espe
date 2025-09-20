interface Detalle {
    autor: string;
    anio: number;
}

interface ReproductorAudio {
    volumen: number;
    duracion: number;
    cancion: string;
    detalle: Detalle;   
}

const reproductor: ReproductorAudio = {
    volumen: 50,
    duracion: 300,
    cancion: "Cancion de Prueba",
    detalle: {
        autor: "Felipe Huertas",
        anio: 2025
    }
}

const cancion  = reproductor.cancion;
const autor = reproductor.detalle.autor;
const anio = reproductor.detalle.anio;

console.log(cancion);
console.log(autor);
console.log(anio);

// Destructuración
const {cancion: nuevaCancion} = reproductor;
console.log(nuevaCancion);



export{};