const { expect } = require("chai");
const { GerenciadorItemOrcamento } = require("../gerenciadorItemOrcamento.js");
const { ItemOrcamento } = require("../itemOrcamento");
const { GerenciadorOrcamentos } = require("../gerenciadorOrcamentos.js");


describe ('Criar item de orçamento', () => {
    // Cenário: (sucesso) Criar item do orçamento com valor valido
    // Dado que exista um orçamento chamado "Cama-elastica"
    // Quando eu criar item do orçamento com nome "Cama-elastica", valor '50000', quantidade "60", categoria "Festa"
    // Então um novo orçamento com o valor de 50.000 é criado

    it('Criar item do orçamento com valor valido', () => {
      const gerenciadorOrcamento = new GerenciadorOrcamentos();
      const gerenciadorItem = new GerenciadorItemOrcamento();
      const itemOrcamento = gerenciadorItem.criarItemOrcamento('Cama-elastica', 50000, 60, 'Festa');
      const novoOrcamento = gerenciadorOrcamento.criarOrcamento("Cama-Elástica");
      expect(itemOrcamento.nome).to.equal('Cama-elastica');
      expect(itemOrcamento.valor).to.equal(50000);
      expect(itemOrcamento.quantidade).to.equal(60);
      expect(itemOrcamento.categoria).to.equal('Festa');
      gerenciadorItem.adicionarItemAorcamento(novoOrcamento, itemOrcamento);
      
      expect(gerenciadorOrcamento.lista_orcamentos[ 0 ].itens[ 0 ].nome).to.equal(novoOrcamento.itens[0].nome);
    })

    // Cenário: (exceção) Criar item do orçamento com valor invalido
    // Dado que não exista um orçamento chamado "Cama-elastica"
    // Quando eu criar um item do orçamento com nome "Cama-elastica", valor '-50.000', quantidade "60", categoria "Festa"
    // Então deve ser retornado uma mensagem "O campo valor não pode conter valores nagativos!" 

    it('Impedir criar um item do orçamento com valor invalido',() => {
        const gerenciadorItem = new GerenciadorItemOrcamento();
        const itemOrcamento = gerenciadorItem.criarItemOrcamento('Cama-elastica', -50000, 60, 'Festa');
        expect(itemOrcamento.valor).to.equal('O campo valor não pode conter valores nagativos!');
    })
    //     orcamento.criarItemOrcamento('Cama-elastica', -50000, 60, 'Festa');
    //     const itemOrcamento = orcamento.itens.find(item => item.nome === 'Cama-elastica'); // buscar item pelo nome
    //     expect(itemOrcamento.valor).to.equal('O campo valor não pode conter valores nagativos!');
    // })
})