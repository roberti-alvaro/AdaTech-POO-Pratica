// Encapsulamento e Métodos Estáticos:
// • Crie uma classe Calculadora com métodos de operações matemáticas (soma, subtração,
// multiplicação, divisão).
// • Encapsule as operações matemáticas, permitindo apenas o acesso através dos métodos da
// classe.
// • Adicione um método estático que retorna o valor absoluto de um número.

class Calculadora {

    static soma(a : number, b : number) {
        return a + b
    }
    
    static subtracao(a : number, b : number) {
        return a - b
    }

    static multiplicacao(a : number, b : number) {
        return a * b
    }

    static divisao(a : number, b : number) {
        if (b != 0) {
            return a / b
        } else {
            return "Erro. Digite um número diferente de zero para o segundo número"
        }
    }

    static absoluto(a : number) {
        return Math.abs(a)
    }
}

export { Calculadora }

//Invocação dos objetos e métodos no arquivo index.ts da pasta main do projeto (src)