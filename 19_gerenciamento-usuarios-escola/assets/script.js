class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataCadastro = new Date();
    }
    exibirPerfil() { return `${this.nome} (${this.email})`; }
}

class Aluno extends Usuario {
    constructor(nome, email, senha, turma) {
        super(nome, email, senha);
        this.turma = turma;
        this.tipo = "Aluno";
    }
    exibirPerfil() { return `${super.exibirPerfil()} - Turma: ${this.turma}`; }
}

class Professor extends Usuario {
    constructor(nome, email, senha, materias) {
        super(nome, email, senha);
        this.materias = materias;
        this.tipo = "Professor";
    }
    exibirPerfil() { return `${super.exibirPerfil()} - Matérias: ${this.materias}`; }
}

var usuariosGlobal = [
    new Aluno("Thayla Trindade", "thayla@amarilis.edu.com", "123", "Sistemas - 4A"),
    new Professor("Mestre Yoda", "yoda@amarilis.edu.com", "123", "Desenvolvimento Web"),
    new Aluno("João Silva", "joao@amarilis.edu.com", "123", "ADS - Turma B")
];

usuariosGlobal[0].dataCadastro = new Date("2024-05-15T09:00:00");
usuariosGlobal[1].dataCadastro = new Date("2026-01-10T14:30:00");
usuariosGlobal[2].dataCadastro = new Date("2025-12-20T15:00:00");

function login() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const u = usuariosGlobal.find(user => user.email === email && user.senha === senha);

    if (u) {
        localStorage.setItem("usuarioLogado", JSON.stringify({ nome: u.nome, tipo: u.tipo, info: u.turma || u.materias }));
        document.getElementById("screen-login").style.display = "none";
        document.getElementById("screen-painel").style.display = "block";
        angular.element(document.getElementById('screen-painel')).scope().init();
    } else {
        document.getElementById("erro").innerText = "E-mail ou senha incorretos.";
    }
}
document.getElementById("btn-entrar").addEventListener("click", login);