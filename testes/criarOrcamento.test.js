const { expect } = require('chai');
const { GerenciadorOrcamentos } = require('../gerenciadorOrcamentos.js');

describe('Criar orçamento', () => {
  // Dado que não existe nenhum orçamento existente chamado "Projetores puc"
  // Quando eu criar um orçamento chamado "Projetores puc"
  // Então o orçamento "Projetores puc" ser criado
  // E o orçamento deve estar sem itens
  // E o orçamento deve estar sem meta definida
  it('Criar orçamento com nome válido', () => {
    const gerenciador = new GerenciadorOrcamentos();
    const orcamento = gerenciador.criarOrcamento('Projetores puc');
    expect(orcamento.nome).to.equal('Projetores puc');
    expect(orcamento.itens).to.be.an('array').that.is.empty;
    expect(orcamento.meta).to.be.null;
  });

  // Dado que eu não informei um nome de orçamento
  // Quando eu criar um orçamento
  // Então deve ser retornado uma mensagem "O nome do orçamento é obrigatório!"
  it('Impedir orçamento com nome vazio', () => {
    const gerenciador = new GerenciadorOrcamentos();
    expect(gerenciador.criarOrcamento('')).to.equal('O nome do orçamento é obrigatório!');
  });

  // Dado que já existe um orçamento chamado "Cozinha"
  // Quando eu criar um orçamento chamado "Cozinha"
  // Então deve ser retornado uma mensagem "O nome do orçamento deve ser único!"
  it('Impedir orçamento com nome já existente', () => {
    const gerenciador = new GerenciadorOrcamentos();
    gerenciador.criarOrcamento('Cozinha');
    expect(gerenciador.criarOrcamento('Cozinha')).to.equal('O nome do orçamento deve ser único!');
  });
});
