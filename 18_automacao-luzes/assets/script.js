class CentralDeLuzes {
    constructor() {
        if (CentralDeLuzes.instance) {
            return CentralDeLuzes.instance;
        }
        CentralDeLuzes.instance = this;
    }

    static getInstance() {
        if (!CentralDeLuzes.instance) {
            CentralDeLuzes.instance = new CentralDeLuzes();
        }
        return CentralDeLuzes.instance;
    }

    ligar(comodo) {
        const janela = document.getElementById(comodo);
        janela.classList.add("ligado");

        const artigo = comodo === "sala" ? "da" : "do";

        document.getElementById("status").textContent =
            `Luz ${artigo} ${comodo} ligada`;
    }

    desligar(comodo) {
        const janela = document.getElementById(comodo);
        janela.classList.remove("ligado");

        const artigo = comodo === "sala" ? "da" : "do";

        document.getElementById("status").textContent =
            `Luz ${artigo} ${comodo} desligada`;
    }
}

const central = CentralDeLuzes.getInstance();

document.querySelectorAll("button").forEach(botao => {
    botao.addEventListener("click", () => {
        const comodo = botao.dataset.comodo;
        const acao = botao.dataset.acao;

        if (acao === "ligar") {
            central.ligar(comodo);
        } else {
            central.desligar(comodo);
        }
    });
});