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

// Aqui temos nossa interação JS com nossos produtos, a lógica funciona exatamente igual para as 3 opções, no caso temos a criação das função, uma variável controle "condicco" e abrimos um loop que pergunta para o usuário se ele realmente deseja adicionar ou comprar o item, o tratamento dessa informação é feito aceitando receber somente a opção "1" ou "2" que irá ou cancelar ou adicionar o produto dando um alert na tela e tornando nossa variável controle "condicao" = false interrompendo o loop, caso o usuário não coloque a opção que desejamos somente é enviado um "alert" na tela falando que a opção é inválida e voltando para o começo do loop que é "opcao".