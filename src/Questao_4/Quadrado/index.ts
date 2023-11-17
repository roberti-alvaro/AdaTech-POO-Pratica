import { FormaGeometrica } from "../FormaGeometrica";

class Quadrado implements FormaGeometrica {

    private _lado : number

    constructor (lado : number) {
        this._lado = lado
    }

    calcularArea(): number {
        const area = this._lado * this._lado
        return area
    }

    calcularPerimetro(): number {
        const perimetro = 4 * this._lado
        return perimetro
    }
}

export { Quadrado }