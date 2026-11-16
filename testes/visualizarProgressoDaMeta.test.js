const { expect } = require("chai");
const { ItemOrcamento } = require("../itemOrcamento.js");
const { GerenciadorOrcamentos } = require("../gerenciadorOrcamentos.js");


describe("Visualizar progresso da meta", () => {
  it("retorna o valor dos itens em relação à meta do orçamento", () => {
    // Dado que o orçamento "Projetores PUC" possui meta de R$ 800 e um item de R$ 400
    const gerenciador = new GerenciadorOrcamentos();
    const orcamento = gerenciador.criarOrcamento("Projetores PUC");
    orcamento.meta = 800;
    orcamento.itens.push(new ItemOrcamento("Projetor", 400, 1, "Eletrônicos"));

    // Quando eu visualizar o progresso da meta
    const progresso = gerenciador.visualizarProgressoMeta(orcamento);

    // Então o progresso deve ser de R$ 400
    expect(progresso).to.equal(400);
  });
});

