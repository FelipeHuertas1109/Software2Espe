import { type Producto, calcularImpuesto } from "./example4"


const carrito: Producto[] = [
    {
        descripcion: "Samsumg Galaxy S24",
        precio: 1000
    },
    {
        descripcion: "MacBook Pro",
        precio: 2000
    }
]  

const impuesto: number = 0.19;

const [total, totalImpuesto] = calcularImpuesto({impuesto, producto: carrito});
console.log(total, totalImpuesto);