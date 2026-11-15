const readline = require('readline/promises');
const { GerenciadorOrcamentos } = require('./gerenciadorOrcamentos.js');
const { GerenciadorItemOrcamento } = require('./gerenciadorItemOrcamento.js');

async function menu() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const gerenciador = new GerenciadorOrcamentos();
  const gerenciadorItem = new GerenciadorItemOrcamento();

  while (true) {
    console.log('\n1 - Criar orçamento');
    console.log('2 - Ver todos os orçamentos');
    console.log('3 - Alterar nome do orçamento');
    console.log('4 - Deletar orçamento');
    console.log('5 - Adicionar item');
    console.log('6 - Ver itens de um orçamento');
    console.log('7 - Editar item');
    console.log('8 - Deletar item');
    console.log('0 - Sair');
    const opcao = await rl.question('Escolha: ');

    if (opcao == '0') {
      break;
    } else if (opcao == '1') {
      const nome = await rl.question('Nome: ');
      const resultado = gerenciador.criarOrcamento(nome);
      if (typeof resultado == 'string') {
        console.log(resultado);
      } else {
        console.log('Orçamento criado!');
      }
    } else if (opcao == '2') {
      for (const orcamento of gerenciador.lista_orcamentos) {
        console.log(`- ${orcamento.nome} (${orcamento.itens.length} itens)`);
      }
    } else if (opcao == '3') {
      const nomeAtual = await rl.question('Nome atual: ');
      const novoNome = await rl.question('Novo nome: ');
      const resultado = gerenciador.alterarNomeOrcamento(nomeAtual, novoNome);
      if (resultado == undefined) {
        console.log('Orçamento não encontrado');
      } else if (typeof resultado == 'string') {
        console.log(resultado);
      } else {
        console.log('Nome alterado!');
      }
    } else if (opcao == '4') {
      const nome = await rl.question('Nome: ');
      const resultado = gerenciador.deletarOrcamento(nome);
      if (resultado) {
        console.log(resultado);
      } else {
        console.log('Orçamento deletado!');
      }
    } else if (opcao >= '5' && opcao <= '8') {
      const nomeOrcamento = await rl.question('Nome do orçamento: ');
      const orcamento = gerenciador.lista_orcamentos.find(o => o.nome == nomeOrcamento);
      if (!orcamento) {
        console.log('Orçamento não encontrado');
      } else if (opcao == '5') {
        const nome = await rl.question('Nome do item: ');
        const valor = Number(await rl.question('Valor: '));
        const quantidade = Number(await rl.question('Quantidade: '));
        const categoria = await rl.question('Categoria: ');
        const item = gerenciadorItem.criarItemOrcamento(nome, valor, quantidade, categoria);
        if (typeof item.valor == 'string') {
          console.log(item.valor);
        } else {
          gerenciadorItem.adicionarItemAorcamento(orcamento, item);
          console.log('Item adicionado!');
        }
      } else if (opcao == '6') {
        for (const item of orcamento.itens) {
          console.log(`- ${item.nome} | R$ ${item.valor} | qtd ${item.quantidade} | ${item.categoria}`);
        }
      } else if (opcao == '7') {
        const nomeItem = await rl.question('Item a editar: ');
        const novoNome = await rl.question('Novo nome: ');
        const valor = Number(await rl.question('Valor: '));
        const quantidade = Number(await rl.question('Quantidade: '));
        const categoria = await rl.question('Categoria: ');
        const resultado = gerenciadorItem.editarItemOrcamento(orcamento, nomeItem, novoNome, valor, quantidade, categoria);
        if (typeof resultado == 'string') {
          console.log(resultado);
        } else {
          console.log('Item editado!');
        }
      } else {
        const nomeItem = await rl.question('Item a deletar: ');
        const resultado = gerenciadorItem.deletarItemOrcamento(orcamento, nomeItem);
        if (resultado) {
          console.log(resultado);
        } else {
          console.log('Item deletado!');
        }
      }
    } else {
      console.log('Opção inválida');
    }
  }

  rl.close();
}

menu();
