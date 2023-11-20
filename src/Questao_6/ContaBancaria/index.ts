class ContaBancaria {
    private saldo: number = 0

    sacar(valor : number) : number {
       if (valor <= this.saldo) {
            this.saldo -= valor
            return this.saldo
       } else {
        throw new Error("SaqueIndisponível")
       }
    }

    depositar(valor : number) : number{
        this.saldo += valor
        return this.saldo
    }

    getSaldo() : number {
        return Number(console.log(this.saldo));
    }
}

export { ContaBancaria }

//Invocação dos objetos e métodos no arquivo index.ts da pasta main do projeto (src)