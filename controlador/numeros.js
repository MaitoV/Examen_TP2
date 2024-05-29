import Servicio from '../servicio/numeros.js';

class Controlador {
    constructor() {
        this.servicio = new Servicio();
    }
    obtenerNumeros = async (req, res) => {
        const numeros = await this.servicio.obtenerNumeros();
        res.json(numeros)
    }
    
    guardarNumero = async (req, res) => {
        let {numero} = req.body;
        numero = parseInt(numero);
        const numeroGuardado = await this.servicio.guardarNumero(numero);
        res.json(numeroGuardado);
    }
    minMaxNumeros = async (req, res) => {
        const minimoMaximo = await this.servicio.minMaxNumeros();
        res.json(minimoMaximo)
    }
    promedioNumeros = async (req, res) => {
        const promedio = await this.servicio.promedioNumeros();
        res.json(promedio);
    }
    cantidadNumeros = async (req, res) => {
        const cantidad = await this.servicio.cantidadNumeros();
        res.json(cantidad);
    }
}

export default Controlador;
