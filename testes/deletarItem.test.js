const { expect } = require('chai');
const { Orcamento } = require('../orcamento.js');
const { GerenciadorItemOrcamento } = require('../gerenciadorItemOrcamento.js');
 
describe('Deletar item do orçamento', () => {
  // Dado um orçamento "Reforma da cozinha" com os itens "Cimento" (valor 35, quantidade 10) e "Tinta" (valor 120, quantidade 2)
  // Quando eu deletar o item "Cimento"
  // Então o orçamento deve ter apenas 1 item
  // E o item "Tinta" deve continuar no orçamento
  it('(sucesso) remove um item existente', () => {
    const gerenciador = new GerenciadorItemOrcamento();
    const orcamento = new Orcamento('Reforma da cozinha');
    orcamento.itens.push(gerenciador.criarItemOrcamento('Cimento', 35, 10, 'Material'));
    orcamento.itens.push(gerenciador.criarItemOrcamento('Tinta', 120, 2, 'Acabamento'));
 
    gerenciador.deletarItemOrcamento(orcamento, 'Cimento');
 
    expect(orcamento.itens).to.have.lengthOf(1);
    expect(orcamento.itens[0].nome).to.equal('Tinta');
  });
 
  // Dado um orçamento "Reforma da cozinha" com o item "Cimento" (valor 35, quantidade 10)
  // Quando eu tentar deletar o item "Areia"
  // Então deve ser retornado o erro "Item não encontrado!"
  // E o orçamento deve continuar com 1 item
  it('(exceção) item que não existe', () => {
    const gerenciador = new GerenciadorItemOrcamento();
    const orcamento = new Orcamento('Reforma da cozinha');
    orcamento.itens.push(gerenciador.criarItemOrcamento('Cimento', 35, 10, 'Material'));
 
    const resultado = gerenciador.deletarItemOrcamento(orcamento, 'Areia');
 
    expect(resultado).to.equal('Item não encontrado!');
    expect(orcamento.itens).to.have.lengthOf(1);
  });
});
 