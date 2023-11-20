import { Animal } from "../Animal";

class Cachorro extends Animal {

    emitirSom(): string {
        return "Au Au..."
    }

    mover(): string {
        return "Correndo..."
    }
}

export { Cachorro }

//Invocação dos objetos e métodos no arquivo index.ts da pasta main do projeto (src)