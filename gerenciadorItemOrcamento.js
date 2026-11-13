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
    editarItemOrcamento(orcamento, nomeItem, novoNome, novoValor, novaQuantidade, novaCategoria) {
    for (let i = 0; i < orcamento.itens.length; i++) {
      if (orcamento.itens[i].nome == nomeItem) {
        orcamento.itens[i].nome = novoNome;
        orcamento.itens[i].valor = novoValor;
        orcamento.itens[i].quantidade = novaQuantidade;
        orcamento.itens[i].categoria = novaCategoria;
        return orcamento.itens[i];
      }
    }
  }
   deletarItemOrcamento(orcamento, nomeItem) {
    for (let i = 0; i < orcamento.itens.length; i++) {
      if (orcamento.itens[i].nome == nomeItem) {
        orcamento.itens.splice(i, 1);
        return;
      }
    }
    return 'Item não encontrado!';
  }
}

module.exports = { GerenciadorItemOrcamento };
