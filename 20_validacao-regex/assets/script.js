const form = document.getElementById('meuFormulario');

const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const validar = (id, regex, campo) => {
        const input = document.getElementById(id);
        const msg = document.getElementById(`msg-${id}`);
        const valor = input.value.trim();

        if (regex.test(valor)) {
            input.style.borderColor = 'green';
            msg.textContent = 'Válido';
            msg.className = 'msg valido';
            return true;
        } else {
            input.style.borderColor = 'red';
            msg.textContent = `Inválido ${campo}`;
            msg.className = 'msg invalido';
            return false;
        }
    };

    const nOk = validar('nome', regexNome, 'Nome');
    const eOk = validar('email', regexEmail, 'Email');
    const cOk = validar('cpf', regexCPF, 'CPF');

    if (nOk && eOk && cOk) {
        alert('Tudo pronto para enviar!');
    }
});