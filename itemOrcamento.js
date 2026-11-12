class ItemOrcamento {
  nome;
  valor;
  quantidade;
  categoria;
  constructor(nome, valor, quantidade, categoria) {
    this.nome = nome;
    this.valor = valor;
    this.quantidade = quantidade;
    this.categoria = categoria;
  }
}

module.exports = { ItemOrcamento };