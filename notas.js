const formulario = document.getElementById("formAluno");
const resultado = document.getElementById("resultado");
const nome = document.getElementById("nome");
const voltar = document.getElementById("voltar");
const notas = ["nota1", "nota2", "nota3"].map((id) => document.getElementById(id));
const formatoMedia = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const [primeira, segunda, terceira] = notas.map((campo) => campo.valueAsNumber);
    const media = (primeira + segunda + terceira) / 3;
    const situacao = media >= 7 ? "APROVADO" : "REPROVADO";

    const titulo = document.createElement("h2");
    titulo.textContent = "Resultado do aluno";

    const aluno = document.createElement("p");
    aluno.textContent = `Aluno: ${nome.value.trim()}`;

    const mediaExibida = document.createElement("p");
    mediaExibida.textContent = `Média: ${formatoMedia.format(media)}`;

    const situacaoExibida = document.createElement("p");
    situacaoExibida.textContent = `Situação: ${situacao}`;

    resultado.replaceChildren(titulo, aluno, mediaExibida, situacaoExibida);
});

formulario.addEventListener("reset", () => {
    resultado.replaceChildren();
    nome.focus();
});

voltar.addEventListener("click", () => {
    window.location.assign("index.html");
});
