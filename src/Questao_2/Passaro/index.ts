import { Animal } from "../Animal";

class Passaro extends Animal {

    emitirSom(): string {
        return "Piu piu..."
    }

    mover(): string {
        return "Voando..."
    }
}

export { Passaro }

//Invocação dos objetos e métodos no arquivo index.ts da pasta main do projeto (src)