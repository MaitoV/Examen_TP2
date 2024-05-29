import  ModelFile from "./numerosFile.js";
import ModelMem from "./numerosMem.js";

class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                return new ModelMem();
            break;
            case 'FILE':
                return new ModelFile();
            break;
            default: 
                return new ModelMem();
        }
    }
}

export default ModelFactory;