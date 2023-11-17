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