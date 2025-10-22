let paginaAtualCarrossel = 1;
const totalPaginasCarrossel = 3;

function trocarPagina(direcao) {
const banners = document.querySelectorAll('.banner-carrossel');
  const circulos = document.querySelectorAll('.div-circulos');
  const setaEsquerda = document.getElementById('prev');
  const setaDireita = document.getElementById('next');

  if (direcao === 'prev') {
    paginaAtualCarrossel = Math.max(1, paginaAtualCarrossel - 1);
  } else if (direcao === 'next') {
    paginaAtualCarrossel = Math.min(totalPaginasCarrossel, paginaAtualCarrossel + 1);
  } else if (typeof direcao === 'number') {
    paginaAtualCarrossel = direcao;
  }

  banners.forEach((banner, index) => {
    banner.style.display = (index + 1 === paginaAtualCarrossel) ? 'flex' : 'none';
  });

  circulos.forEach((c, index) => {
    c.style.backgroundColor = (index + 1 === paginaAtualCarrossel) ? 'var(--cor11)' : 'var(--cor6)';
  });

  if (paginaAtualCarrossel === 1) {
    setaEsquerda.style.display = 'none';
    setaDireita.style.display = 'block';
  } else if (paginaAtualCarrossel === totalPaginasCarrossel) {
    setaEsquerda.style.display = 'block';
    setaDireita.style.display = 'none';
  } else {
    setaEsquerda.style.display = 'block';
    setaDireita.style.display = 'block';
  }
}

window.onload = function () {
    trocarPagina(1);
}

document.getElementById("next").addEventListener("click", function () {
    trocarPagina('next');
});

document.getElementById("prev").addEventListener("click", function () {
    trocarPagina('prev');
});

// AVALIAÇÕES
let paginaAvaliacoes = 1;
const totalPaginasAvaliacoes = 3;
const listaAvaliacoes = document.querySelector(".avaliacoes-lista");
const spanPagina = document.getElementById("pagina-avaliacoes");

const avaliacoesPorPagina = [
  [
    { nome: "Carlos Alberto", texto: "Atendimento excepcional! A equipe foi muito cuidadosa e atenciosa com meu pet.", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { nome: "Neymar Jr", texto: "Não poderia estar mais feliz com o serviço desta clínica. Profissionais qualificados e atenciosos.", foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
    { nome: "Josseana da Silva", texto: "Excelente clínica! Desde o primeiro contato, fui atendido com profissionalismo e gentileza.", foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" }
  ],
  [
    { nome: "Mariana Lopes", texto: "Meu gato foi super bem atendido, adorei o carinho da equipe!", foto: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=face" },
    { nome: "Rafael Costa", texto: "Ambiente limpo e atendimento rápido. Recomendo muito!", foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face" },
    { nome: "Aline Fernandes", texto: "Atendimento incrível, voltarei com certeza!", foto: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face" }
  ],
  [
    { nome: "Pedro Henrique", texto: "Equipe excelente e atendimento super humano.", foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
    { nome: "Juliana Mendes", texto: "Fiquei impressionada com o cuidado e atenção com meu cachorro!", foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face" },
    { nome: "Lucas Pereira", texto: "Serviço rápido e veterinários muito atenciosos.", foto: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=face" }
  ]
];

function atualizarAvaliacoes() {
  listaAvaliacoes.innerHTML = avaliacoesPorPagina[paginaAvaliacoes - 1]
    .map(av => `
      <div class="avaliacao-item">
        <img src="${av.foto}" alt="${av.nome}" class="avaliacao-foto">
        <div class="avaliacao-conteudo">
          <div class="avaliacao-cabecalho">
            <div class="estrelas">★★★★★</div>
            <div class="avaliacao-nome">${av.nome}</div>
          </div>
          <div class="avaliacao-texto">${av.texto}</div>
        </div>
      </div>
      <hr class="linha-avaliacao">
    `).join("");
  spanPagina.textContent = paginaAvaliacoes;
}

document.getElementById("next-avaliacao").addEventListener("click", () => {
  paginaAvaliacoes = paginaAvaliacoes < totalPaginasAvaliacoes ? paginaAvaliacoes + 1 : 1;
  atualizarAvaliacoes();
});

document.getElementById("prev-avaliacao").addEventListener("click", () => {
  paginaAvaliacoes = paginaAvaliacoes > 1 ? paginaAvaliacoes - 1 : totalPaginasAvaliacoes;
  atualizarAvaliacoes();
});

window.addEventListener("load", atualizarAvaliacoes);
