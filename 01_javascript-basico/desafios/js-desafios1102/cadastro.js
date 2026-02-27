const readline = require("readline");

const leitorTeclado = readline.createInterface({
  input: process.stdin,   
  output: process.stdout  
});

let listaUsuarios = []; // lista dos usuários cadastrados

function mostrarMenu() { //menu principal
  console.log("MENU");
  console.log("1 - Adicionar usuário");
  console.log("2 - Remover usuário pelo email");
  console.log("3 - Listar usuários");
  console.log("4 - Sair");

  leitorTeclado.question("Escolha uma opção: ", function(opcaoEscolhida) {

    if (opcaoEscolhida == 1) {
      adicionarUsuario();

    } else if (opcaoEscolhida == 2) {
      removerUsuario();

    } else if (opcaoEscolhida == 3) {
      listarUsuarios();

    } else if (opcaoEscolhida == 4) {
      console.log("Programa encerrado.");
      leitorTeclado.close(); //encerrar programa

    } else {
      console.log("Opção inválida!");
      mostrarMenu(); //volta p menu
    }
  });
}

function adicionarUsuario() { //adicionar usuário

  leitorTeclado.question("Digite o nome: ", function(nomeDigitado) {

    leitorTeclado.question("Digite a idade: ", function(idadeDigitada) {

      leitorTeclado.question("Digite o email: ", function(emailDigitado) {

        let emailJaExiste = false; //vê se o mesmo email já foi cadastrado antes

        for (let i = 0; i < listaUsuarios.length; i++) {
          if (listaUsuarios[i].email === emailDigitado) {
            emailJaExiste = true;
          }
        }

        if (emailJaExiste) {
          console.log("Email já cadastrado por um usuário, favor verificar.");
        } else {

          let novoUsuario = {
            nome: nomeDigitado,
            idade: idadeDigitada,
            email: emailDigitado
          };

          listaUsuarios.push(novoUsuario);

          console.log("Usuário cadastrado com sucesso");
        }

        mostrarMenu();
      });
    });
  });
}

function removerUsuario() { //remover usuário pelo email

  leitorTeclado.question("Para remover usuário, informe o email cadastrado: ", function(emailParaRemover) {

    let usuarioEncontrado = false;

    for (let i = 0; i < listaUsuarios.length; i++) {
      if (listaUsuarios[i].email === emailParaRemover) {
        listaUsuarios.splice(i, 1); // Remove do array
        usuarioEncontrado = true;
      }
    }

    if (usuarioEncontrado) {
      console.log("Usuário removido com sucesso");
    } else {
      console.log("Usuário não encontrado, favor verificar o email informado");
    }

    mostrarMenu();
  });
}

function listarUsuarios() {

  if (listaUsuarios.length === 0) {
    console.log("Nenhum usuário cadastrado.");
  } else {
    console.log("CADASTROS DE USUÁRIOS");

    for (let i = 0; i < listaUsuarios.length; i++) {
      console.log("Nome:", listaUsuarios[i].nome);
      console.log("Idade:", listaUsuarios[i].idade);
      console.log("Email:", listaUsuarios[i].email);
    }
  }

  mostrarMenu();
}

mostrarMenu();