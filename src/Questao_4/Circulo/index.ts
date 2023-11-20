import { FormaGeometrica } from "../FormaGeometrica";

class Circulo implements FormaGeometrica {

    private _raio : number

    constructor (raio : number) {
        this._raio = raio
    }

    calcularArea() : number {
        const area = 3.1415 * (this._raio * this._raio)
        return Number(area.toFixed(2))
    }

    calcularPerimetro() {
        const perimetro = 2 * 3.1415 * this._raio
        return Number(perimetro.toFixed(2))
    }

}

export { Circulo }

//Invocação dos objetos e métodos no arquivo index.ts da pasta main do projeto (src)