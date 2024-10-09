//Crie uma classe Produto com um construtor que aceite dois ou três parâmetros (nome, preco, categoria). Se categoria não for informado, defina como "Indefinido".//

class Produto {
    constructor(nome, preco, categoria = "Indefinido") {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    detalhes() {
        return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Categoria: ${this.categoria}`;
    }
}

const produto1 = new Produto("Geladeira", 4500.00, "Eletrodomestico");
const produto2 = new Produto("Caneta", 10.00);

console.log(produto1.detalhes());
console.log(produto2.detalhes());