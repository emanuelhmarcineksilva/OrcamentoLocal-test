const { expect } = require('chai');
const { GerenciadorOrcamentos } = require('../gerenciadorOrcamentos.js');

describe('Alterar nome do orçamento', () => {
//   Cenário: (sucesso) Mudar nome de orçamento com nome valido
//     Dado que exista um orçamento chamado "Projetores puc"
//     Quando eu mudar o nome para "RetroProjetores puc"
//     Então o orçamento deve ter seu nome alterado
//     E deve conter os mesmos itens que possuia antes
//     E as metas ja definidas devem continuar nele
  it('Mudar nome de orçamento com nome valido', () => {
    const gerenciador = new GerenciadorOrcamentos();
    const orcamento = gerenciador.criarOrcamento('Projetores puc');
    const orcamentoAlterado = gerenciador.alterarNomeOrcamento('Projetores puc', 'RetroProjetores puc');
    expect(orcamentoAlterado.nome).to.equal('RetroProjetores puc');
    expect(orcamentoAlterado.itens).to.be.an('array').that.is.empty;
    expect(orcamentoAlterado.meta).to.be.null;
  });

//   Impedir mudar nome para nome vazio
//     Dado que exista um orçamento chamado "Projetores puc"
//     Quando eu mudar o nome para ""
//     Então deve ser retornado uma mensagem "O nome do orçamento é obrigatório!" 
  it('Impedir mudar nome de orçamento com nome invalido', () => {
    const gerenciador = new GerenciadorOrcamentos();
    const orcamento = gerenciador.criarOrcamento('Projetores puc');
    const resultado = gerenciador.alterarNomeOrcamento('Projetores puc', '');
    expect(resultado).to.equal('O nome do orçamento é obrigatório!');
  });

});
