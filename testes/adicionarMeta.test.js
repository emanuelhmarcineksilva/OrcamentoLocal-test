const { expect } = require('chai');
const { GerenciadorOrcamentos } = require('../gerenciadorOrcamentos.js');

describe('Adicionar meta do orçamento', () => {
  // Dado um orçamento "Projetores puc" sem meta definida
  // Quando eu adicionar a meta de 800 ao orçamento
  // Então a meta do orçamento deve ser 800
  it('(sucesso) adiciona meta a um orçamento sem meta', () => {
    const gerenciador = new GerenciadorOrcamentos();
    const orcamento = gerenciador.criarOrcamento('Projetores puc');

    gerenciador.adicionarMeta(orcamento, 800);

    expect(orcamento.meta).to.equal(800);
  });

  // Dado um orçamento "Projetores puc" sem meta definida
  // Quando eu adicionar a meta de -800 ao orçamento
  // Então deve ser retornado a mensagem "O valor da meta deve ser maior que zero!"
  it('(exceção) impede meta com valor inválido', () => {
    const gerenciador = new GerenciadorOrcamentos();
    const orcamento = gerenciador.criarOrcamento('Projetores puc');

    const resultado = gerenciador.adicionarMeta(orcamento, -800);

    expect(resultado).to.equal('O valor da meta deve ser maior que zero!');
    expect(orcamento.meta).to.be.null;
  });
});
