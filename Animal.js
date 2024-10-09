/*Questão 9: Implemente uma classe chamada Animal com um método fazerSom(). 
Em seguida, crie uma classe Cachorro que herde da classe Animal e sobrescreva o método fazerSom() para retornar o som "Au Au".
 Demonstre o uso das classes criando uma instância de Cachorro e chamando o método fazerSom().*/ 

class Animal {
    fazerSom(){
        return 'som de animal'
    }
}

class cachorro extends Animal {
    fazerSom(){
    return 'Au Au'
    }
}

const meuCachorro = new cachorro();

console.log(meuCachorro.fazerSom());
