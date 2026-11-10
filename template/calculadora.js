class Cliente{
  #primeiro; 
  constructor() {
    this.#primeiro = true;
  }
  realizarCompra(valor) {
    if (this.#primeiro == true) {
      valor -= valor * 0.10;
      this.#primeiro = false;
      return  valor;
    }
    return valor;
  }
}
cliente = new Cliente();
function simularCalculo() {
  valor = document.getElementById("valor").value;
  resultado = cliente.realizarCompra(valor);
  resultadoTexto = document.getElementById("resultado");
  resultadoTexto.innerText = "Subtotal: " + resultado;
}

if (typeof module !== 'undefined') {
  module.exports = { Cliente };
}