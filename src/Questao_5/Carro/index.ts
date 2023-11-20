import { Motor } from "../Motor";

class Carro {

    private motor : Motor

    constructor() {
        this.motor = new Motor()
    }

    ligarCarro() {
        return this.motor.ligarMotor()
    }

    desligarCarro() {
        return this.motor.desligarMotor()
    }
}

export { Carro }

//Invocação dos objetos e métodos no arquivo index.ts da pasta main do projeto (src)