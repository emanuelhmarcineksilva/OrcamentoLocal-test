const { expect } = require('chai');
const { Orcamento } = require('../orcamento.js');
const { GerenciadorItemOrcamento } = require('../gerenciadorItemOrcamento.js');
 
describe('Editar item do orçamento', () => {
  // Dado um orçamento "Reforma da cozinha" com o item "Cimento" (valor 35, quantidade 10, categoria "Material")
  // Quando eu editar o item "Cimento" para nome "Cimento CP-II", valor 40, quantidade 20 e categoria "Estrutura"
  // Então o item deve ter nome "Cimento CP-II", valor 40, quantidade 20 e categoria "Estrutura"
  it('(sucesso) edita um item existente', () => {
    const gerenciador = new GerenciadorItemOrcamento();
    const orcamento = new Orcamento('Reforma da cozinha');
    orcamento.itens.push(gerenciador.criarItemOrcamento('Cimento', 35, 10, 'Material'));
 
    const item = gerenciador.editarItemOrcamento(orcamento, 'Cimento', 'Cimento CP-II', 40, 20, 'Estrutura');
 
    expect(item.nome).to.equal('Cimento CP-II');
    expect(item.valor).to.equal(40);
    expect(item.quantidade).to.equal(20);
    expect(item.categoria).to.equal('Estrutura');
  });
 
  // Dado um orçamento "Reforma da cozinha" com o item "Cimento" (valor 35, quantidade 10, categoria "Material")
  // Quando eu tentar editar o item "Areia"
  // Então deve ser retornado o erro "Item não encontrado!"
  it('(exceção) item que não existe', () => {
    const gerenciador = new GerenciadorItemOrcamento();
    const orcamento = new Orcamento('Reforma da cozinha');
    orcamento.itens.push(gerenciador.criarItemOrcamento('Cimento', 35, 10, 'Material'));
 
    const resultado = gerenciador.editarItemOrcamento(orcamento, 'Areia', 'Areia fina', 20, 5, 'Material');
 
    expect(resultado).to.equal('Item não encontrado!');
  });
});