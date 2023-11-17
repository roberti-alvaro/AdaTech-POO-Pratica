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