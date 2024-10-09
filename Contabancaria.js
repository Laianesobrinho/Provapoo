class ContaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    verSaldo() {
        console.log(`Saldo atual de: ${this.titular}: R$ ${this._saldo.toFixed(2)}`);
}

    depositar(valor){
        if(valor <=0){
            console.log(`O valor do deposito deve ser positivo`);
            return;
        }
        this._saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso`);
    }   
    sacar(valor) {
        if(valor<=0){
            console.log(`O valor do saque deve ser positivo!`);
            return;
        }
        if(valor > this._saldo){
            console.log(`Saldo insuficiente para saque`);
            return;
        }
        this._saldo -= valor;
        console.log(`Saldo atualizado ${valor.toFixed(2)}`)
    }

}
let  minhaConta = new ContaBancaria("Laiane", 3000);

minhaConta.verSaldo();
minhaConta.depositar(500);
minhaConta.verSaldo();
minhaConta.sacar(200);