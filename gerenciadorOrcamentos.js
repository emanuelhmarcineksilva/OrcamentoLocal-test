const { Orcamento } = require('./orcamento.js');
class GerenciadorOrcamentos{
  lista_orcamentos;
  constructor() {
    this.lista_orcamentos = [];
  }
  criarOrcamento(nome) {
    if (nome == "") {
      return "O nome do orçamento é obrigatório!";
    }
    if (this.lista_orcamentos.length == 0) {
      const orcamento = new Orcamento(nome); 
      this.lista_orcamentos.push(orcamento);
      return orcamento
   } 
    else {
      for (const orcamento of this.lista_orcamentos) {
        if (orcamento.nome == nome) {
          return "O nome do orçamento deve ser único!";
        }
      }
      const orcamento = new Orcamento(nome);
      this.lista_orcamentos.push(orcamento);
      return orcamento;
    }
  }

  deletarOrcamento(nome) {
    for (let i = 0; i < this.lista_orcamentos.length; i++) {
      if (this.lista_orcamentos[i].nome == nome) {
        this.lista_orcamentos.splice(i, 1);
        return;
      }
    }
    return;
  }

  }

module.exports = { GerenciadorOrcamentos };
