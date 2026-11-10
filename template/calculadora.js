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

module.exports = { Cliente };
