class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    exibirPerfil() {
        return `Nome: ${this.nome} | E-mail: ${this.email}`;
    }
}

class Aluno extends Usuario {
    constructor(nome, email, senha, turma) {
        super(nome, email, senha);
        this.turma = turma;
        this.tipo = "Aluno";
    }

    exibirPerfil() {
        return `${super.exibirPerfil()} | Turma: ${this.turma}`;
    }
}

class Professor extends Usuario {
    constructor(nome, email, senha, materias) {
        super(nome, email, senha);
        this.materias = materias;
        this.tipo = "Professor";
    }

    exibirPerfil() {
        return `${super.exibirPerfil()} | Matérias: ${this.materias}`;
    }
}

var usuariosGlobal = [
    new Aluno("Thayla Trindade", "thayla@amarilis.edu.com", "123", "Sistemas - 4A"),
    new Professor("Mestre Yoda", "yoda@amarilis.edu.com", "123", "Desenvolvimento Web"),
    new Aluno("João Silva", "joao@amarilis.edu.com", "123", "ADS - Turma B")
];

function login() {
    const emailInput = document.getElementById("email").value.trim();
    const senhaInput = document.getElementById("senha").value;
    const erroTxt = document.getElementById("erro");

    const u = usuariosGlobal.find(user => user.email === emailInput && user.senha === senhaInput);

    if (u) {
        console.log("Perfil Logado:", u.exibirPerfil());

        const payload = {
            nome: u.nome,
            tipo: u.tipo,
            info: u.turma || u.materias
        };
        localStorage.setItem("usuarioLogado", JSON.stringify(payload));

        window.location.href = "perfil.html";
    } else {
        erroTxt.innerText = "E-mail ou senha incorretos!";
    }
}