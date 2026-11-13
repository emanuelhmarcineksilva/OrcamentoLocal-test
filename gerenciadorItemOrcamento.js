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

  adicionarItemAorcamento(orcamento, itemOrcamento) {
    orcamento.itens.push(itemOrcamento);
  }
   editarItemOrcamento(orcamento, nomeItem, novoNome, novoValor, novaQuantidade, novaCategoria) {
    for (const item of orcamento.itens) {
      if (item.nome == nomeItem) {
        item.nome = novoNome;
        item.valor = novoValor;
        item.quantidade = novaQuantidade;
        item.categoria = novaCategoria;
        return item;
      }
    }
    return 'Item não encontrado!';
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
