// Composição de Objetos:
// • Crie uma classe Motor com métodos como ligar e desligar.
// • Em seguida, crie uma classe Carro que possui uma instância de Motor.
// • Implemente métodos em Carro que delegam chamadas aos métodos correspondentes em
// Motor.
// • Teste a funcionalidade ligando e desligando o carro.

class Motor {

    ligarMotor() {
        return console.log("ligando o motor do carro...");
    }

    desligarMotor() {
        return console.log("Desligando o motor do carro...");
    }
}

export { Motor }