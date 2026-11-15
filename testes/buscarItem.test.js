const { expect } = require('chai');
const { Orcamento } = require('../orcamento.js');
const { GerenciadorItemOrcamento } = require('../gerenciadorItemOrcamento.js');

describe('Buscar item do orçamento', () => {
  // Dado um orçamento "Reforma da cozinha" com os itens "Cimento" (valor 35, quantidade 10, categoria "Material") e "Tinta" (valor 120, quantidade 2, categoria "Pintura")
  // Quando eu buscar o item "Cimento"
  // Então deve ser retornado o item "Cimento" com valor 35, quantidade 10 e categoria "Material"
  it('(sucesso) busca um item existente pelo nome', () => {
    const gerenciador = new GerenciadorItemOrcamento();
    const orcamento = new Orcamento('Reforma da cozinha');
    orcamento.itens.push(gerenciador.criarItemOrcamento('Cimento', 35, 10, 'Material'));
    orcamento.itens.push(gerenciador.criarItemOrcamento('Tinta', 120, 2, 'Pintura'));

    const item = gerenciador.buscarItemOrcamento(orcamento, 'Cimento');

    expect(item.nome).to.equal('Cimento');
    expect(item.valor).to.equal(35);
    expect(item.quantidade).to.equal(10);
    expect(item.categoria).to.equal('Material');
  });

  // Dado um orçamento "Reforma da cozinha" com o item "Cimento" (valor 35, quantidade 10, categoria "Material")
  // Quando eu buscar o item "Areia"
  // Então deve ser retornado o erro "Item não encontrado!"
  it('(exceção) busca um item que não existe', () => {
    const gerenciador = new GerenciadorItemOrcamento();
    const orcamento = new Orcamento('Reforma da cozinha');
    orcamento.itens.push(gerenciador.criarItemOrcamento('Cimento', 35, 10, 'Material'));

    const resultado = gerenciador.buscarItemOrcamento(orcamento, 'Areia');

    expect(resultado).to.equal('Item não encontrado!');
  });
});
