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
    E o orçamento "Cozinha deve continuar existindo" 


```

---

## 2. Emanuel

### Alterar nome do orçamento

Teste: `testes/alterarNomeOrcamento.test.js`

```gherkin
# language: pt
Funcionalidade: Alterar nome do orçamento

  Cenário: (sucesso) ...
    Dado ...
    Quando ...
    Então ...

  Cenário: (exceção) ...
    Dado ...
    Quando ...
    Então ...
```

### Criar item do orçamento

Teste: `testes/criarItem.test.js`

```gherkin
# language: pt
Funcionalidade: Criar item do orçamento

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

## 3. Murilo

### Editar item do orçamento

Teste: `testes/editarItem.test.js`

```gherkin
# language: pt
Funcionalidade: Editar item do orçamento

  Cenário: (sucesso) ...
    Dado ...
    Quando ...
    Então ...

  Cenário: (exceção) ...
    Dado ...
    Quando ...
    Então ...
```

### Deletar item do orçamento

Teste: `testes/deletarItem.test.js`

```gherkin
# language: pt
Funcionalidade: Deletar item do orçamento

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

  Cenário: (sucesso) ...
    Dado ...
    Quando ...
    Então ...

  Cenário: (exceção) ...
    Dado ...
    Quando ...
    Então ...
```

### Filtrar itens por categoria

Teste: `testes/filtrarCategoria.test.js`

```gherkin
# language: pt
Funcionalidade: Filtrar itens por categoria

  Cenário: (sucesso) ...
    Dado ...
    Quando ...
    Então ...

  Cenário: (exceção) ...
    Dado ...
    Quando ...
    Então ...
```
