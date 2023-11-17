// Criação de Classe e Instância:
// • Crie uma classe Carro com propriedades como modelo, ano e cor.
// • Instancie dois objetos dessa classe com diferentes valores.
// • Imprima no console os detalhes de cada carro.

class Carro {
    public modelo: String
    public cor: string
    public ano: number

    constructor(modelo:string, cor: string, ano:number){
        this.modelo = modelo
        this.cor = cor
        this.ano = ano
    }
}

export { Carro }
// A instância do carro e o print no console estarão no arquivo index.ts da pasta main do projeto (src)