let prompt = require("prompt-sync")(); // importa o prompt-sync

let listaDeCompras = []; // lista que começa vazia

let adicionarItem = (item) => {
  listaDeCompras.push(item); // adiciona o item no final da lista
  console.log('Item "' + item + '" adicionado!');
};

let removerItem = (item) => { // remover item da lista
  let index = listaDeCompras.indexOf(item); // procura o item na lista e retorna a posição

  if (index !== -1) { // se o item existir
    listaDeCompras.splice(index, 1); // remove 1 item da posição encontrada
    console.log('Item "' + item + '" removido!');
  } else {
    console.log('Item "' + item + '" não encontrado.');
  }
};

let exibirLista = () => { // exibir a lista de compras
  if (listaDeCompras.length === 0) { // vê se a lista está vazia
    console.log("A lista está vazia.");
  } else {
    console.log("Lista de Compras:");

    for (let i = 0; i < listaDeCompras.length; i++) { // percorre a lista e mostra os itens
      console.log((i + 1) + ". " + listaDeCompras[i]);
    }
  }
};

let opcao = "";

while (opcao !== "4") {
  console.log("\n1 - Adicionar item");
  console.log("2 - Remover item");
  console.log("3 - Exibir lista");
  console.log("4 - Sair");

  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      let itemAdicionar = prompt("Digite o nome do item: ");
      adicionarItem(itemAdicionar);
      break;

    case "2":
      let itemRemover = prompt("Digite o nome do item para remover: ");
      removerItem(itemRemover);
      break;

    case "3":
      exibirLista();
      break;

    case "4":
      console.log("Programa encerrado.");
      break;

    default:
      console.log("Opção inválida.");
  }
}