class Orcamento{
  nome;
  meta;
  itens;
  constructor(nome) {
    this.nome = nome;
    this.meta = null;
    this.itens = [];
  }
  
}

module.exports = { Orcamento };

