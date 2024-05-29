import express from 'express';
import Controlador from '../controlador/numeros.js';

class Router {
    constructor() {
        this.router = express.Router();
        this.controlador = new Controlador();
    }
    start() {
        this.router.get('/entrada', this.controlador.obtenerNumeros);
        this.router.post('/entrada', this.controlador.guardarNumero);
        this.router.get('/promedio', this.controlador.promedioNumeros);
        this.router.get('/minmax', this.controlador.minMaxNumeros);
        this.router.get('/cantidad', this.controlador.cantidadNumeros);
        return this.router;
    }
}


export default Router;

