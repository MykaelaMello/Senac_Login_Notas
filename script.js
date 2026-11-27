const formulario = document.getElementById("formLogin");
const login = document.getElementById("login");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const cancelar = document.getElementById("cancelar");

// Credenciais fictícias para a demonstração em sala de aula.
const acessoDemonstracao = {
    email: "aluno@example.com",
    senha: "Senac123"
};

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (login.value.toLowerCase() === acessoDemonstracao.email &&
        senha.value === acessoDemonstracao.senha) {
        window.location.assign("notas.html");
        return;
    }

    mensagem.classList.add("erro");
    mensagem.textContent = "E-mail ou senha incorretos.";
    senha.focus();
});

formulario.addEventListener("reset", () => {
    mensagem.classList.remove("erro");
    mensagem.textContent = "";
    login.focus();
});

cancelar.addEventListener("click", () => {
    formulario.reset();
    mensagem.textContent = "Acesso cancelado.";
});
