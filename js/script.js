const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

function render(filtro = "") {
  const filtrados = cursos.filter(curso =>
    curso.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const itens = filtrados.map(function(curso) {
    return `<li>${curso.nome}</li>`;
  });

  if (itens.length === 0) {
    lista.innerHTML = "<li>Nada encontrado</li>";
  } else {
    lista.innerHTML = itens.join("");
  }
}

render();

busca.addEventListener("input", () => {
  render(busca.value);
});
