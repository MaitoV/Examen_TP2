import fs from 'fs';

class ModelFile {
    #nombreArchivo;
    constructor() {
        this.#nombreArchivo = 'numeros.json';
    }

    #leerArchivo = async (nombreArchivo) => {
        let numeros = [];
        try {
            const numeros = JSON.parse(await fs.promises.readFile(nombreArchivo, 'utf-8'));
            return numeros;
        } catch {}
        return numeros;
    }
    #escribirArchivo = async (nombreArchivo, numeros) => {
        await fs.promises.writeFile(nombreArchivo, JSON.stringify(numeros, null, '\t'));
    }
    
    obtenerNumeros = async () => {
        const numeros = await this.#leerArchivo(this.#nombreArchivo);
        return numeros;
    }
    guardarNumero = async (numero) => {
        const numeros = await this.#leerArchivo(this.#nombreArchivo);
        numeros.push(numero);
    
        await this.#escribirArchivo(this.#nombreArchivo, numeros);
    
        return numero;
    }
}


export default ModelFile;