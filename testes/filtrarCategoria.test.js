const { expect } = require("chai");
const { GerenciadorItemOrcamento } = require("../gerenciadorItemOrcamento.js");
const { ItemOrcamento } = require("../itemOrcamento.js");
const { Orcamento } = require("../orcamento.js");

describe("Filtrar itens por categoria", () => {
  it("retorna somente os itens da categoria informada", () => {
    // Dado um orçamento com itens das categorias "Esporte" e "Material"
    const orcamento = new Orcamento("Bolas de volei");
    orcamento.itens.push(
      new ItemOrcamento("Bola", 100, 10, "Esporte"),
      new ItemOrcamento("Rede", 250, 1, "Esporte"),
      new ItemOrcamento("Fita", 15, 2, "Material")
    );
    const gerenciador = new GerenciadorItemOrcamento();

    // Quando eu filtrar pela categoria "Esporte"
    const itens = gerenciador.filtrarItensPorCategoria(orcamento, "Esporte");

    // Então somente os itens da categoria "Esporte" devem ser retornados
    expect(itens.map((item) => item.nome)).to.deep.equal(["Bola", "Rede"]);
  });

  it("retorna uma lista vazia quando não há itens da categoria", () => {
    // Dado um orçamento sem itens da categoria "Esporte"
    const orcamento = new Orcamento("Bolas de volei");
    orcamento.itens.push(new ItemOrcamento("Fita", 15, 2, "Material"));
    const gerenciador = new GerenciadorItemOrcamento();

    // Quando eu filtrar pela categoria "Esporte"
    const itens = gerenciador.filtrarItensPorCategoria(orcamento, "Esporte");

    // Então nenhum item deve ser retornado
    expect(itens).to.deep.equal([]);
  });
});
