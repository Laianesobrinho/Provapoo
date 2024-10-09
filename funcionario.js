//Você deve criar um software em JavaScript que simule um sistema de cadastro e cálculo de salários para funcionários e gerentes de uma empresa.//

class Funcionario {
    constructor(id, nome, alocacao) {
      this.id = id;
      this.nome = nome;
      this.alocacao = alocacao;
    }
  
    calculaSalario() {
      return 2000;
    }
  
    info() {
      return `Funcionário: ${this.nome} (ID: ${this.id}) - Alocação: ${this.alocacao} - Salário: R$ ${this.calculaSalario()}`;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(id, nome, alocacao, quantidadeDeSubordinados) {
      super(id, nome, alocacao);
      this.quantidadeDeSubordinados = quantidadeDeSubordinados;
    }
  
    calculaSalario() {
      return super.calculaSalario() * 1.4; // Adiciona 40% de bonificação
    }
  }
  
  // Criando instâncias
  const funcionario = new Funcionario(1, 'Maria Silva', 'Pediatria');
  const gerente = new Gerente(2, 'João Pedro', 'Administrativo', 10);
  
  // Exibindo informações e salários
  console.log(funcionario.info());
  console.log(gerente.info());