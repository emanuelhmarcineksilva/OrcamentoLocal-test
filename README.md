# OrcamentoLocal-test

Sistema de Orçamento de Insumos, desenvolvido com **BDD** (cenários em Gherkin) e **TDD** (ciclo Red → Green → Refactor), testado com Mocha + Chai. Cada funcionalidade começa pelo cenário em Gherkin e só depois vai para os testes e o código (ver [seção 4](#4-o-ciclo-bdd--tdd)). Projeto só de terminal, no mesmo padrão do [template](template/README.md).

Entrega: **15/11 no AVA**, com os cenários BDD, o relatório do TDD (descrição e print de cada passo) e o código.

```
.
├── README.md
├── cenariosGherkin.md   # cenários BDD (Gherkin) de todas as funcionalidades
├── orcamento.js         # classe Orcamento (lógica)
├── itemOrcamento.js     # classe ItemOrcamento (lógica)
├── package.json         # criado no passo 2
├── testes/              # testes Mocha + Chai, um arquivo por funcionalidade
└── template/            # exemplo de referência (calculadora)
```

## Divisão das funcionalidades

| # | Integrante | Funcionalidade | Arquivo de teste |
|---|------------|----------------|------------------|
| 1 | Gustavo P | Criar orçamento | `testes/criarOrcamento.test.js` |
| 1 | Gustavo P | Deletar orçamento | `testes/deletarOrcamento.test.js` |
| 2 | Emanuel | Alterar nome do orçamento | `testes/alterarNomeOrcamento.test.js` |
| 2 | Emanuel | Criar item do orçamento | `testes/criarItem.test.js` |
| 3 | Murilo | Editar item do orçamento | `testes/editarItem.test.js` |
| 3 | Murilo | Deletar item do orçamento | `testes/deletarItem.test.js` |
| 4 | Gabriel | Buscar item do orçamento | `testes/buscarItem.test.js` |
| 4 | Gabriel | Adicionar meta do orçamento | `testes/adicionarMeta.test.js` |
| 5 | Julio | Visualizar progresso da meta | `testes/progressoMeta.test.js` |
| 5 | Julio | Filtrar itens por categoria | `testes/filtrarCategoria.test.js` |

Cada integrante mexe só nos próprios arquivos de teste e na sua seção do `cenariosGherkin.md`. As classes em `orcamento.js` e `itemOrcamento.js` são compartilhadas: avise o grupo antes de mudar algo que outra pessoa já usa.

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

Na raiz do projeto:

```bash
npm init -y            # só se ainda não existir package.json
npm i -D mocha chai
```

Em `package.json`, deixe o script de teste assim:

```json
"scripts": {
  "test": "mocha testes"
}
```

Coloque `node_modules/` no `.gitignore` para não subir as dependências no repositório.

## 3. O padrão

### `cenariosGherkin.md`: os cenários BDD

Cada funcionalidade tem a sua seção, com pelo menos um cenário de **sucesso** e um de **exceção**. Exemplo no formato (usando o caso do template):

```gherkin
# language: pt
Funcionalidade: Desconto na primeira compra

  Cenário: Primeira compra recebe desconto
    Dado o primeiro pedido de um cliente
    Quando realizar uma compra de 100
    Então o valor cobrado deve ser 90

  Cenário: Segunda compra não recebe desconto
    Dado um cliente que já realizou uma compra
    Quando realizar uma compra de 100
    Então o valor cobrado deve ser 100
```

Cada `Cenário` vira um `it` no arquivo de teste da funcionalidade.

### `orcamento.js` e `itemOrcamento.js`: a lógica

A regra de negócio fica nas classes da raiz, e cada arquivo exporta a sua classe:

```js
class Orcamento {
  // ...
}

module.exports = { Orcamento };
```

```js
class ItemOrcamento {
  // ...
}

module.exports = { ItemOrcamento };
```

### `testes/*.test.js`: os testes

Os testes ficam em `testes/`, então o `require` sobe um nível (`../`). Os comentários **Dado / Quando / Então** repetem o cenário do `cenariosGherkin.md`:

```js
const { expect } = require('chai');
const { Orcamento } = require('../orcamento.js');
const { ItemOrcamento } = require('../itemOrcamento.js');

// Dado ...
// Quando ...
// Então ...
describe('Nome da funcionalidade', () => {
  it('cenário de sucesso', () => {
    // ...
  });

  it('cenário de exceção', () => {
    // ...
  });
});
```

- `describe`: agrupa os testes de uma funcionalidade.
- `it`: um cenário.
- `expect(x).to.equal(y)`: o teste passa se `x === y`.
- `expect(() => fn()).to.throw()`: o teste passa se `fn()` lançar erro (útil nos cenários de exceção).

## 4. O ciclo BDD + TDD

Cada funcionalidade passa por duas etapas, **nesta ordem**: primeiro o cenário em Gherkin (BDD) e só depois o código guiado por testes (TDD). Nenhum teste é escrito antes de o cenário estar no `cenariosGherkin.md`.

### Etapa 1: BDD (escrever o cenário)

1. No `cenariosGherkin.md`, na seção da sua funcionalidade, escreva os cenários em Gherkin (`Dado` / `Quando` / `Então`).
2. Cubra pelo menos um cenário de **sucesso** e um de **exceção** (dado inválido, item que não existe, etc.).
3. Faça o commit dos cenários antes de começar os testes:

```bash
git commit -m "BDD: cenários de criar orçamento"
```

### Etapa 2: TDD (um ciclo por cenário)

Pegue um cenário de cada vez, na ordem do `cenariosGherkin.md`, e passe pelas três fases. **Tire um print do terminal em cada uma** para o relatório:

1. **Red:** transforme o cenário num `it`. O `Dado` / `Quando` / `Então` vira comentário e o `Então` vira o `expect`. Rode e veja falhar (o print mostra o `failing`).
2. **Green:** escreva o mínimo de código na classe para o teste passar. Rode e veja passar.
3. **Refactor:** melhore o código (nomes, duplicação, organização) sem mudar o comportamento. Rode de novo e veja que continua passando.

Repita para o próximo cenário até todos os cenários da funcionalidade virarem testes passando.

No relatório, cada funcionalidade mostra o cenário Gherkin e, em seguida, os prints de cada fase com uma descrição curta do que mudou. Fazer um commit por fase também ajuda a provar a sequência:

```bash
git commit -m "BDD: cenários de criar orçamento"
git commit -m "RED: criar orçamento com nome vazio"
git commit -m "GREEN: criar orçamento com nome vazio"
git commit -m "REFACTOR: criar orçamento"
```

## 5. Rodar os testes

```bash
npm test                                          # roda todos os arquivos de testes/
npx mocha testes/criarOrcamento.test.js           # roda só uma funcionalidade
npx mocha --watch testes/criarOrcamento.test.js   # roda de novo a cada alteração
```

## Problemas comuns

| Erro | Causa / solução |
|------|-----------------|
| `Cannot find module 'chai'` | Rode `npm i -D mocha chai` na raiz do projeto. |
| `Cannot find module './orcamento.js'` | Os testes estão em `testes/`: use `require('../orcamento.js')`. |
| `Orcamento is not a constructor` | Falta o `module.exports = { Orcamento };` no fim do `orcamento.js`. |
| `ERR_REQUIRE_ESM` | Seu Node é antigo (Chai 6 precisa de Node 22+). Atualize o Node. |
