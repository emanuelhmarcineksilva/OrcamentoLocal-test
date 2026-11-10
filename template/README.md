# Calculadora com testes (Mocha + Chai)

Padrão de 3 arquivos: a **mesma** lógica roda no navegador (`index.html`) e nos testes (`test2.js`).

```
funcionalidadeNotacao/
├── calculadora.js   # lógica (classe Cliente) + função ligada ao HTML
├── index.html       # tela que usa a calculadora no navegador
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
  "test": "mocha funcionalidadeNotacao/test2.js"
}
```

## 3. O padrão

### `calculadora.js`: a lógica

A regra de negócio fica numa classe, sem depender do HTML:

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
```

Depois vem a parte que conversa com a página (lê o input e escreve o resultado):

```js
cliente = new Cliente();
function simularCalculo() {
  valor = document.getElementById("valor").value;
  resultado = cliente.realizarCompra(valor);
  resultadoTexto = document.getElementById("resultado");
  resultadoTexto.innerText = "Subtotal: " + resultado;
}
```

E no final vem o truque que deixa o mesmo arquivo funcionar nos dois lugares:

```js
if (typeof module !== 'undefined') {
  module.exports = { Cliente };
}
```

- No **navegador** `module` não existe, então o `if` é ignorado.
- No **Node** (testes) `module` existe, então a classe é exportada para o `require`.

### `index.html`: a tela

Carrega o `calculadora.js` com `<script>`, e o botão chama `simularCalculo()`:

```html
<label for="valor">Valor:</label>
<input type="number" id="valor">
<button onclick="simularCalculo()">Realizar Compra</button>
<h1 id="resultado"></h1>

<script src="calculadora.js"></script>
```

Para usar, abra o `index.html` no navegador (duplo clique no arquivo).

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
npm test                                    # usa o script do package.json
npx mocha funcionalidadeNotacao/test2.js    # roda um arquivo direto
npx mocha --watch funcionalidadeNotacao/test2.js   # roda de novo a cada alteração
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
| `Cliente is not a constructor` | Falta o bloco `module.exports` no fim do `calculadora.js`. |
| `ERR_REQUIRE_ESM` | Seu Node é antigo (Chai 6 precisa de Node 22+). Atualize o Node. |
| `document is not defined` | O teste chamou `simularCalculo()`. Teste só a classe, não a parte do HTML. |
