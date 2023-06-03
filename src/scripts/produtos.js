function adicionarFavoritos() {
  var condicao = true;
  while(condicao) {
    var opcao = Number(prompt('Deseja realmente adicionar aos favoritos? \n1 - Sim / 2 - Não'));
    if(opcao == 1) {
      alert('Item adicionado aos favoritos.');
      condicao = false;
    } else if (opcao == 2){
      alert('Operação cancelada.');
      condicao = false;
    } else {
      alert('Essa não é uma opção válida');
    }
  }
} 

function adicionarCarrinho() {
  var condicao = true;
  while(condicao) {
    var opcao = Number(prompt('Deseja realmente adicionar ao carrinho? \n1 - Sim / 2 - Não'));
    if(opcao == 1) {
      alert('Item adicionado ao carrinho.');
      condicao = false;
    } else if (opcao == 2){
      alert('Operação cancelada.');
      condicao = false;
    } else {
      alert('Essa não é uma opção válida');
    }
  }
}

function comprar() {
  var condicao = true;
  while(condicao) {
    var opcao = Number(prompt('Deseja realmente comprar o item? \n1 - Sim / 2 - Não'));
    if(opcao == 1) {
      alert('Item comprado com sucesso.');
      condicao = false;
    } else if (opcao == 2){
      alert('Operação cancelada.');
      condicao = false;
    } else {
      alert('Essa não é uma opção válida');
    }
  }
}