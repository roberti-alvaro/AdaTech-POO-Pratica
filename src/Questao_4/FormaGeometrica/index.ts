// Interfaces e Implementação:
// • Crie uma interface FormaGeometrica com métodos como calcularArea e calcularPerimetro.
// • Implemente a interface em classes como Quadrado e Círculo.
// • Instancie objetos dessas classes e chame seus métodos.

interface FormaGeometrica {
    calcularArea(a : number): number
    calcularPerimetro(a : number) : number
}

export { FormaGeometrica }

//Criação das instâncias e invocação dos métodos no arquivo index.ts da pasta main do projeto (src)