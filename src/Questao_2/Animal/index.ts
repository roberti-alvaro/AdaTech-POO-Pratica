// Herança e Polimorfismo:
// • Crie uma classe base chamada Animal com métodos como emitirSom e mover.
// • Derive duas classes, Cachorro e Pássaro, que herdam da classe Animal.
// • Sobrescreva o método emitirSom em ambas as classes derivadas.
// • Crie instâncias de Cachorro e Pássaro e chame seus métodos.

abstract class Animal {

    emitirSom(): string{
        return "som neutro..."
    }
    mover(): string {
        return "Locomovendo..."
    }
}

export { Animal }

//Criação das instâncias e invocação dos métodos no arquivo index.ts da pasta main do projeto (src)