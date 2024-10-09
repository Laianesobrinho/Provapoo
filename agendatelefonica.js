// Questão 2: Faça um programa de agenda telefônica, com as classes Agenda e Contato.//

class Contato {
    constructor(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }

    detalhes() {
        return `Nome: ${this.nome}, Telefone: ${this.telefone}`;
    }
}

class Agenda {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(nome, telefone) {
        const contato = new Contato(nome, telefone);
        this.contatos.push(contato);
    }

    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }

    listarContatos() {
        if (this.contatos.length === 0) {
            console.log("Agenda vazia.");
            return;
        }
        this.contatos.forEach(contato => {
            console.log(contato.detalhes());
        });
    }

}

// Exemplo de uso:
const minhaAgenda = new Agenda();
minhaAgenda.adicionarContato("João", "0000-0000");
minhaAgenda.adicionarContato("Maria", "1111-1111");

console.log("Lista de Contatos:");
minhaAgenda.listarContatos();


