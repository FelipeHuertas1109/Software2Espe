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
        autor: "Felipe Huertas Autor",
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

// Destructuración de detalles 2 forma
const {detalle} = reproductor;
const {autor: AutorDetalle} = detalle;
console.log(AutorDetalle);

// Destructuración de detalles 3 forma
const {detalle: {autor: AutorDetalle3}} = reproductor;
console.log(AutorDetalle3);

const frutas: string[] = ["Manzana", "Pera", "Naranja"];
console.log(frutas);

// Destructuración de arreglos
const [fruta1, fruta2, fruta3, fruta4 = "No hay fruta"] = frutas;
console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(fruta4);

// Destructuración de arreglos 2 forma
const [,,p3] = frutas;
console.log(p3);

interface Producto {
    descripcion: string;
    precio: number;
}

const celular: Producto = {
    descripcion: "Samsumg Galaxy S24",
    precio: 1000
}

const computadora: Producto = {
    descripcion: "MacBook Pro",
    precio: 2000
}

const carrito: Producto[] = [celular, computadora];
const impuesto: number = 0.19;

interface ImpuestoOption {
    impuesto: number;
    producto: Producto[];
}

function calcularImpuesto(options: ImpuestoOption): number[] {
    let total = 0;
    options.producto.forEach(producto => {
        total += producto.precio;
    });
    return [total, total * options.impuesto];
}

const calculoCompra = calcularImpuesto({impuesto, producto: carrito});
console.log(calculoCompra);

export{};