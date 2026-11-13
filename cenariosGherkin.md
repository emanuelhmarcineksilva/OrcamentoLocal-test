# Cenários BDD (Gherkin)

Cenários de todas as funcionalidades do Sistema de Orçamento de Insumos, organizados por integrante. Cada funcionalidade tem pelo menos um cenário de **sucesso** e um de **exceção**. Os cenários são escritos **antes** dos testes (ver a [seção 4 do README](README.md#4-o-ciclo-bdd--tdd)).

Cada integrante edita só a própria seção. Troque os `...` pelos cenários da funcionalidade e acrescente quantos cenários forem necessários.

| # | Integrante | Funcionalidades |
|---|------------|-----------------|
| 1 | [Gustavo P](#1-gustavo-p) | Criar orçamento · Deletar orçamento |
| 2 | [Emanuel](#2-emanuel) | Alterar nome do orçamento · Criar item do orçamento |
| 3 | [Murilo](#3-murilo) | Editar item do orçamento · Deletar item do orçamento |
| 4 | [Gabriel](#4-gabriel) | Buscar item do orçamento · Adicionar meta do orçamento |
| 5 | [Julio](#5-julio) | Visualizar progresso da meta · Filtrar itens por categoria |

---

## 1. Gustavo P

### Criar orçamento

Teste: `testes/criarOrcamento.test.js`

```gherkin
# language: pt
Funcionalidade: Criar orçamento

  Cenário: (sucesso) Criar orçamento com nome válido 
    Dado que não existe nenhum orçamento existente chamado "Projetores puc" 
    Quando eu criar um orçamento chamado "Projetores puc" 
    Então o orçamento "Projetores puc" ser criado 
    E o orçamento deve estar sem itens
    E o orçamento deve estar sem meta definida

  Cenário: (exceção) Impedir orçamento com nome vazio 
    Dado que eu não informei um nome de orçamento 
    Quando eu criar um orçamento 
    Então deve ser retornado uma mensagem "O nome do orçamento é obrigatório!" 

  Cenário: (exceção) Impedir orçamento com nome já existente
    Dado que já existe um orçamento chamado "Cozinha"
    Quando eu criar um orçamento chamado "Cozinha"
    Então deve ser retornado uma mensagem "O nome do orçamento deve ser único!"
```

### Deletar orçamento

Teste: `testes/deletarOrcamento.test.js`

```gherkin
# language: pt
Funcionalidade: Deletar orçamento

  Cenário: (sucesso) Deletar orçamento existente
    Dado que existem os orçamentos "Projetores puc" e "Cozinha"
    Quando eu deletar o orçamento chamado "Projetores puc"
    Então o orçamento "Projetores puc" não deve mais existir
    E o orçamento "Cozinha" deve continuar existindo

  Cenário: (exceção) Deletar orçamento não existente
    Dado que existem os orçamentos "Projetores puc" e "Cozinha"
    Quando eu deletar o orçamento chamado "Transportadora"
    Então eu devo receber a mensagem "Orçamento não encontrado"
```

---

## 2. Emanuel

### Alterar nome do orçamento

Teste: `testes/alterarNomeOrcamento.test.js`

```gherkin
# language: pt
Funcionalidade: Alterar nome do orçamento

  Cenário: (sucesso) Mudar nome de orçamento com nome valido
    Dado que exista um orçamento chamado "Projetores puc"
    Quando eu mudar o nome para "RetroProjetores puc"
    Então o orçamento deve ter seu nome alterado
    E deve conter os mesmos itens que possuia antes
    E as metas ja definidas devem continuar nele

  Cenário: (exceção) Impedir mudar nome para nome vazio
    Dado que exista um orçamento chamado "Projetores puc"
    Quando eu mudar o nome para ""
    Então deve ser retornado uma mensagem "O nome do orçamento é obrigatório!" 
```

### Criar item do orçamento

Teste: `testes/criarItemOrcamento.test.js`

```gherkinAlterar nome do orçamento'
# language: pt
Funcionalidade: Criar item do orçamento

  Cenário: (sucesso) Criar item do orçamento com valor valido
    Dado que exista um orçamento chamado "Cama-elastica puc"
    Quando eu criar um item do orçamento com nome "Cama-elastica puc", valor '50.000', quantidade "60", categoria "Festa"
    Então um novo item do orçamento com o valor de 50.000 é criado

  Cenário: (exceção) Impedir criar um item do orçamento com valor invalido
    Dado que não exista um orçamento chamado "Cama-elastica"
    Quando eu criar um item do orçamento com nome "Cama-elastica", valor '-50.000', quantidade "60", categoria "Festa"
    Então deve ser retornado uma mensagem "O campo valor não pode conter valores nagativos!" 
```

---

## 3. Murilo

### Editar item do orçamento

Teste: `testes/editarItem.test.js`

```gherkin
# language: pt
Funcionalidade: Editar item do orçamento

Cenário: (sucesso) Editar um item existente
    Dado um orçamento "Reforma da cozinha" com o item "Cimento" (valor 35, quantidade 10, categoria "Material")
    Quando eu editar o item "Cimento" para nome "Cimento CP-II", valor 40, quantidade 20 e categoria "Estrutura"
    Então o item deve ter nome "Cimento CP-II", valor 40, quantidade 20 e categoria "Estrutura"

  Cenário: (exceção) Editar um item que não existe
    Dado um orçamento "Reforma da cozinha" com o item "Cimento" (valor 35, quantidade 10, categoria "Material")
    Quando eu tentar editar o item "Areia"
    Então deve ser retornado o erro "Item não encontrado!"
```

### Deletar item do orçamento

Teste: `testes/deletarItem.test.js`

```gherkin
# language: pt
Funcionalidade: Deletar item do orçamento

Cenário: (sucesso) Remover um item existente
    Dado um orçamento "Reforma da cozinha" com os itens "Cimento" (valor 35, quantidade 10) e "Tinta" (valor 120, quantidade 2)
    Quando eu deletar o item "Cimento"
    Então o orçamento deve ter apenas 1 item
    E o item "Tinta" deve continuar no orçamento

  Cenário: (exceção) Deletar um item que não existe
    Dado um orçamento "Reforma da cozinha" com o item "Cimento" (valor 35, quantidade 10)
    Quando eu tentar deletar o item "Areia"
    Então deve ser retornado o erro "Item não encontrado!"
    E o orçamento deve continuar com 1 item
```

---

## 4. Gabriel

### Buscar item do orçamento

Teste: `testes/buscarItem.test.js`

```gherkin
# language: pt
Funcionalidade: Buscar item do orçamento

  Cenário: (sucesso) ...
    Dado ...
    Quando ...
    Então ...

  Cenário: (exceção) ...
    Dado ...
    Quando ...
    Então ...
```

### Adicionar meta do orçamento

Teste: `testes/adicionarMeta.test.js`

```gherkin
# language: pt
Funcionalidade: Adicionar meta do orçamento

  Cenário: (sucesso) ...
    Dado ...
    Quando ...
    Então ...

  Cenário: (exceção) ...
    Dado ...
    Quando ...
    Então ...
```

---

## 5. Julio

### Visualizar progresso da meta

Teste: `testes/progressoMeta.test.js`

```gherkin
# language: pt
Funcionalidade: Visualizar progresso da meta

  Cenário: (sucesso) Visualizar progresso da meta quando não estiver visível
    Dado que o progresso da meta não está visível
    Quando o usuário selecionar "Ver progresso"
    Então o progresso da meta será exibido

  Cenário: (exceção) Impedir alteração na visualização já estando visível
    Dado que o progresso da meta está visível
    Quando o usuário selecionar "Ver progresso"
    Então deve ser retornada a mensagem "O progresso já está visível"
```

### Filtrar itens por categoria

Teste: `testes/filtrarCategoria.test.js`

```gherkin
# language: pt
Funcionalidade: Filtrar itens por categoria

  Cenário: (sucesso) Filtrar itens por categoria com valor válido
    Dado que a categoria "Festa" foi selecionada
    Quando o usuário selecionar "Buscar"
    Então os itens da categoria "Festa" devem ser exibidos

  Cenário: (exceção) Filtrar item por categoria sem resultados
    Dado que a categoria selecionada não possui nenhum item
    Quando o usuário selecionar "Buscar"
    Então deve ser retornada a mensagem "Não existe nenhum item com essa categoria"
``` 