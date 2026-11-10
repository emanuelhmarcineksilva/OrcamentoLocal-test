const { expect } = require('chai');
const { Cliente } = require('./calculadora.js');

// O código sendo testado
// Dado o primeiro pedido de um cliente
// Quando realizar uma compra  
// Então receber 10% de desconto 
describe('Teste compra cliente', () => {
  it('calcula primeira compra', () => {
    const cliente = new Cliente();
    expect(cliente.realizarCompra(100)).to.equal(90);
  });

  it('calcula segunda compra', () => {
    const cliente = new Cliente();
    cliente.realizarCompra(100);
    expect(cliente.realizarCompra(100)).to.equal(100);
  });
});

