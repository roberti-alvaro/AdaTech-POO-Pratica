//FAVOR DESCOMENTAR OS CÓDIGOS DE CADA QUESTÃO PARA CORREÇÃO

import { ConfiguracaoApp } from "./Questao_7/ConfiguracaoApp"

//QUESTÃO 1: ------------------------------------------------------------------------------------------------------------

// import { Carro } from "./Questao_1/Carro";

// const carro1 = new Carro("Fiat FastBack", "Cinza Strato", 2023)
// const carro2 = new Carro("Volksvagen Nivus", "Preto", 2022)

// console.log(carro1, carro2);

//-----------------------------------------------------------------------------------------------------------------------

//QUESTÃO 2: 

// import { Cachorro } from "./Questao_2/Cachorro";
// import { Passaro } from "./Questao_2/Passaro";

// const cachorro = new Cachorro

// console.log(cachorro.emitirSom())
// console.log(cachorro.mover())

// const passaro = new Passaro

// console.log(passaro.emitirSom());
// console.log(passaro.mover());

//-----------------------------------------------------------------------------------------------------------------------

//QUESTÃO 3:

// import { Calculadora } from "./Questao_3/Calculadora";

// const somando = Calculadora.soma(2,2)

// const multiplicando = Calculadora.multiplicacao(2,2)

// const dividindo = Calculadora.divisao(2,2)
// const dividindo2 = Calculadora.divisao(2,0)

// const absoluto = Calculadora.absoluto(-2)
// const absoluto2 = Calculadora.absoluto(2)

// console.log(
// `Resultado da soma é ${somando}
// Resultado da multiplicação é ${multiplicando}
// Resultado da primeira divisão é ${dividindo}
// Resultado da segunda divisão é ${dividindo2}
// Resultado da primeira conversão em absoluto é ${absoluto}
// Resultado da segunda conversão em absoluto é ${absoluto2}`
// )

//--------------------------------------------------------------------------------------------------------------------------

// QUESTÃO 4: 

// import { Circulo } from "./Questao_4/Circulo";
// import { Quadrado } from "./Questao_4/Quadrado";

// const circulo = new Circulo(4)

// console.log(circulo.calcularArea());
// console.log(circulo.calcularPerimetro());

// const quadrado = new Quadrado(2)

// console.log(quadrado.calcularArea());
// console.log(quadrado.calcularPerimetro());

//------------------------------------------------------------------------------------------------------------------------

//QUESTÃO 5: 

// import { Carro } from "./Questao_5/Carro";

// const marea = new Carro()

// marea.ligarCarro()
// marea.desligarCarro()

//-------------------------------------------------------------------------------------------------------------------------

//QUESTÃO 6:

//import { ContaBancaria } from "./Questao_6/ContaBancaria";

// const conta = new ContaBancaria()

// try {
//     conta.getSaldo()
//     conta.depositar(100)
//     conta.getSaldo()
//     conta.sacar(50)
//     conta.getSaldo()
//     conta.sacar(100)
// } catch (error) {
//     console.log("valor indisponpivel para saque devido à falta de saldo.")  
// }
// conta.getSaldo()

//-------------------------------------------------------------------------------------------------------------------------

//QUESTÃO 7:

// const tela1 = () => {
//     const saudacao = ConfiguracaoApp.getInstance()
//     saudacao.adjetivo = 'legal'
//     saudacao.ola('Alvaro')
// }

// const tela2 = () => {
//     const saudacao = ConfiguracaoApp.getInstance()
//     saudacao.ola('Marilene')
// }

// tela1()
// tela2() // aqui provamos que é a mesma instancia, pois marilene também sai com adjetivo 'legal' que defini somente na tela do 'Alvaro'

//------------------------------------------------------------------------------------------------------------------------------------------
