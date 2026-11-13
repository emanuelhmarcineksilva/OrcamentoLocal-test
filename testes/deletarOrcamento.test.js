const { expect } = require('chai');
const { GerenciadorOrcamentos } = require('../gerenciadorOrcamentos.js');

describe('Deletar orçamento', () => {
  it('Deletar orçamento existente', () => {
    const gerenciador = new GerenciadorOrcamentos();
    gerenciador.criarOrcamento('Projetores puc');
    gerenciador.criarOrcamento('Cozinha');

    gerenciador.deletarOrcamento('Projetores puc');

    expect(gerenciador.lista_orcamentos.find(orcamento => orcamento.nome === 'Projetores puc')).to.equal(undefined);
    expect(gerenciador.lista_orcamentos.find(orcamento => orcamento.nome === 'Cozinha')).to.not.equal(undefined);
  });
});
