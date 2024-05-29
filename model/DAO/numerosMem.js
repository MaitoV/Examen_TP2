class ModelMem {
    #numeros;
    constructor() {
        this.#numeros = [12, 6, 20, 59]        
    }
    obtenerNumeros = async () => {
        return this.#numeros;
    }
    guardarNumero = async (numero) => {
        this.#numeros.push(numero);
        return numero;
    }
}

export default ModelMem;

