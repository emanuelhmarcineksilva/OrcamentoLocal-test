const { ItemOrcamento } = require('./itemOrcamento.js');

class GerenciadorItemOrcamento {

    constructor() {
        
    }

  criarItemOrcamento(nomeItem, valor, quantidade, categoria) {
    if (valor < 0) {
      return { valor: 'O campo valor não pode conter valores nagativos!' };
    }
    return new ItemOrcamento(nomeItem, valor, quantidade, categoria);
  }
}

module.exports = { GerenciadorItemOrcamento };
