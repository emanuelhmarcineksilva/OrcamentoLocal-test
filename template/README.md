# Calculadora com testes (Mocha + Chai)

Projeto só de terminal: a lógica fica em `calculadora.js` e os testes em `test2.js`, rodados com Mocha.

```
template/
├── calculadora.js   # lógica (classe Cliente)
└── test2.js         # testes com Mocha + Chai
```

## 1. Instalar o Node

Confira se já está instalado:

```bash
node -v
npm -v
```

Se não estiver:

- **Windows / macOS:** baixe o instalador LTS em <https://nodejs.org> e siga o assistente.
- **Arch Linux:** `sudo pacman -S nodejs npm`
- **Ubuntu / Debian:** `sudo apt install nodejs npm`

## 2. Instalar Mocha e Chai

Na pasta do projeto (onde fica o `package.json`):

```bash
npm init -y            # só se ainda não existir package.json
npm i -D mocha chai
```

Em `package.json`, deixe o script de teste assim:

```json
"scripts": {
  "test": "mocha template/test2.js"
}
```

## 3. O padrão

### `calculadora.js`: a lógica

A regra de negócio fica numa classe, que é exportada para os testes:

```js
class Cliente {
  #primeiro;                       // campo privado: é a primeira compra?
  constructor() {
    this.#primeiro = true;
  }
  realizarCompra(valor) {
    if (this.#primeiro == true) {
      valor -= valor * 0.10;       // 10% de desconto na primeira compra
      this.#primeiro = false;
      return valor;
    }
    return valor;
  }
}

module.exports = { Cliente };
```

O `module.exports` é o que permite fazer `require('./calculadora.js')` no teste.

### `test2.js`: os testes

Importa o Chai e a classe, e descreve os cenários no formato **Dado / Quando / Então**:

```js
const { expect } = require('chai');
const { Cliente } = require('./calculadora.js');

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
```

- `describe`: agrupa os testes de uma funcionalidade.
- `it`: um cenário.
- `expect(x).to.equal(y)`: o teste passa se `x === y`.

## 4. Rodar os testes

```bash
npm test                              # usa o script do package.json
npx mocha template/test2.js           # roda um arquivo direto
npx mocha --watch template/test2.js   # roda de novo a cada alteração
```

Saída esperada:

```
  Teste compra cliente
    ✔ calcula primeira compra
    ✔ calcula segunda compra

  2 passing
```

## Problemas comuns

| Erro | Causa / solução |
|------|-----------------|
| `Cannot find module 'chai'` | Rode `npm i -D mocha chai` na pasta do `package.json`. |
| `Cliente is not a constructor` | Falta o `module.exports = { Cliente };` no fim do `calculadora.js`. |
| `ERR_REQUIRE_ESM` | Seu Node é antigo (Chai 6 precisa de Node 22+). Atualize o Node. |
