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
   // Dado que existem os orçamentos "Projetores puc" e "Cozinha" 
   // Quando eu deletar o orcamento chamado "Transportadora"
   // Então eu devo receber a mensagem "Orçamento não encontrado
  it('Deletar orçamento inexistente', () => {
    const gerenciador = new GerenciadorOrcamentos();
    gerenciador.criarOrcamento('Projetores puc');
    gerenciador.criarOrcamento('Cozinha');
    resultado = gerenciador.deletarOrcamento('Sala de aula');
    expect(resultado).to.equal("Orçamento não encontrado");
  });
});
