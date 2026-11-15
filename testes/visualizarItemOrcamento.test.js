const { expect } = require("chai");
const { GerenciadorItemOrcamento } = require("../gerenciadorItemOrcamento.js");
const { ItemOrcamento } = require("../itemOrcamento");


describe ('Visualizar progresso da meta', () => {
    // Cenário: (sucesso) Criar item do orçamento com valor valido
    // Dado que não exista um orçamento chamado "Cama-elastica"
    // Quando eu criar item do orçamento com nome "Cama-elastica", valor '50000', quantidade "60", categoria "Festa"
    // Então um novo orçamento com o valor de 50.000 é criado

    it('Visualizar progresso da meta quando não estiver visível', () => {
        
    })

    // Cenário: (exceção) Criar item do orçamento com valor invalido
    // Dado que não exista um orçamento chamado "Cama-elastica"
    // Quando eu criar um item do orçamento com nome "Cama-elastica", valor '-50.000', quantidade "60", categoria "Festa"
    // Então deve ser retornado uma mensagem "O campo valor não pode conter valores nagativos!" 

    it('Impedir criar um item do orçamento com valor invalido',() => {
        
    })
    //     orcamento.criarItemOrcamento('Cama-elastica', -50000, 60, 'Festa');
    //     const itemOrcamento = orcamento.itens.find(item => item.nome === 'Cama-elastica'); // buscar item pelo nome
    //     expect(itemOrcamento.valor).to.equal('O campo valor não pode conter valores nagativos!');
    // })
})







