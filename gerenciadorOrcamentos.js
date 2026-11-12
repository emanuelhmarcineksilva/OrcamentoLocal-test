const { Orcamento } = require('./orcamento.js');
class GerenciadorOrcamentos{
  #lista_orcamentos;
  constructor() {
    this.#lista_orcamentos = [];
  }
  criarOrcamento(titulo) {
    if (titulo == "") {
      return "O nome do orçamento é obrigatório!";
    }
    if (this.#lista_orcamentos.length == 0) {
      const orcamento = new Orcamento(titulo); 
      this.#lista_orcamentos.push(orcamento);
      return orcamento
   } 
    else {
      this.#lista_orcamentos.forEach(orcamento => {
        if (orcamento.titulo == titulo) {
          return "O nome do orçamento deve ser único!";
        } 
      });
      const orcamento = new Orcamento(titulo); 
   }
  }
  this.#lista_orcamentos.push(orcamento);
}

module.exports = { GerenciadorOrcamentos };
