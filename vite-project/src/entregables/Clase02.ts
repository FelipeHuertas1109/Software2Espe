interface Comida{
    nombre: string,
    calorias: number,
    esVegana: boolean
}

const pizza: Comida = {
    nombre: "Pizza",
    calorias: 800,
    esVegana: false
}

const ensalada: Comida = {
    nombre: "Ensalada",
    calorias: 150,
    esVegana: true
}

const hamburguesa: Comida = {
    nombre: "Hamburguesa",
    calorias: 600,
    esVegana: false
}

class ComidaService {
    mostrarInfo(comida: Comida){
        const {nombre, calorias, esVegana} = comida;
        console.log(`Nombre: ${nombre}, Calorías: ${calorias}, ¿Vegana?: ${esVegana}`);
    }
    modificarCalorias(comida: Comida, nuevasCalorias: number): Comida{
        comida.calorias = nuevasCalorias;
        return comida;
    }
}

class NotificadorComida {
    constructor(private comidaService: ComidaService) {}
    
    notificar(comida: Comida) {
        console.log("Notificando comida...");
        this.comidaService.mostrarInfo(comida);
    }
}

const comidaService = new ComidaService();
const notificador = new NotificadorComida(comidaService);
notificador.notificar(pizza);
notificador.notificar(ensalada);
notificador.notificar(hamburguesa);
comidaService.modificarCalorias(pizza, 500);
notificador.notificar(pizza);