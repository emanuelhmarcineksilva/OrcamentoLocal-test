const { expect } = require('chai');
const { GerenciadorOrcamentos } = require('../gerenciadorOrcamentos.js');

describe('Deletar orçamento', () => {
    // Dado que existem os orçamentos "Projetores puc" e "Cozinha"
    // Quando eu deletar o orçamento chamado "Projetores puc"
    // Então o orçamento "Projetores puc" não deve mais existir
    // E o orçamento "Cozinha deve continuar existindo" 

  it('Deletar orçamento existente', () => {
    const gerenciador = new GerenciadorOrcamentos();
    gerenciador.criarOrcamento('Projetores puc');
    gerenciador.criarOrcamento('Cozinha');
    gerenciador.deletarOrcamento('Projetores puc');
    expect(gerenciador.lista_orcamentos[0].nome).to.equal('Cozinha');
  });
});
