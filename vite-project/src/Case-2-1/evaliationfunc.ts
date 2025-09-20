import { type ComidaInterface } from "./evaluation"

export function calcularComida(comida: ComidaInterface): string {
    return `La comida ${comida.nombre} cuesta ${comida.precio * comida.cantidad}`;
}