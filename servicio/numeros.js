import ModelFactory from '../model/DAO/numerosFactory.js';
import config from '../config.js';

class Servicio {
    #MENSAJE_ERROR_ARRAY_VACIO = 'No se ingresaron números como para realizar ese calculo';
    constructor() {
        this.modelo = ModelFactory.get(config.MODO_PERSISTENCIA);
    }

    obtenerNumeros = async () => {
        const numeros = await this.modelo.obtenerNumeros();
        const numerosFormateados = {numeros: numeros}
        return numerosFormateados;
    }
    
    guardarNumero = async (numero) => {
        let numeroGuardado = await this.modelo.guardarNumero(numero);
        numeroGuardado = {numero: numeroGuardado}
        return numeroGuardado;
    }
    
    minMaxNumeros = async () => {
        let minMax = this.#MENSAJE_ERROR_ARRAY_VACIO;
        const listadoNumeros = await this.modelo.obtenerNumeros();
        if(listadoNumeros.length > 0) {
            let min = Math.min(...listadoNumeros);
            let max = Math.max(...listadoNumeros);
            minMax = {min, max}
        }
        return minMax;
    }
    promedioNumeros = async () => {
       let promedio = this.#MENSAJE_ERROR_ARRAY_VACIO;
       const listadoNumeros = await this.modelo.obtenerNumeros();
       if(listadoNumeros.length > 0) {
        const suma = listadoNumeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
        promedio = { promedio: suma / listadoNumeros.length};
       }
       return promedio;
    }
    cantidadNumeros = async () => {
        const numeros = await this.modelo.obtenerNumeros();
       let cantidad = numeros.length;
        return {cantidad};
    }
    
    
}

export default Servicio;


