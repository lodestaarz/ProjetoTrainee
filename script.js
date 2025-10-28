let paginaAtualCarrossel = 1;
const totalPaginasCarrossel = 3;

function trocarPagina(direcao) {
    const banners = document.querySelectorAll('.banner-carrossel');
    const circulos = document.querySelectorAll('.div-circulos');

    if (direcao === 'prev') {
        paginaAtualCarrossel = paginaAtualCarrossel === 1 ? totalPaginasCarrossel : paginaAtualCarrossel - 1;
    } else if (direcao === 'next') {
        paginaAtualCarrossel = paginaAtualCarrossel === totalPaginasCarrossel ? 1 : paginaAtualCarrossel + 1;
    } else if (typeof direcao === 'number') {
        paginaAtualCarrossel = direcao;
    }

    banners.forEach((banner, index) => {
        banner.style.display = (index + 1 === paginaAtualCarrossel) ? 'flex' : 'none';
    });

    circulos.forEach((circulos, index) => {
       circulos.style.backgroundColor = (index + 1 === paginaAtualCarrossel) ? 'var(--cor11)' : 'var(--cor6)'; 
    });
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
    { nome: "Carlos Alberto", texto: "Atendimento excepcional! A equipe foi muito cuidadosa e atenciosa com meu pet.", foto: "avaliacao1.png" },
    { nome: "Neymar Jr", texto: "Não poderia estar mais feliz com o serviço desta clínica. Profissionais qualificados e atenciosos.", foto: "avaliacao2.png" },
    { nome: "Josseana da Silva", texto: "Excelente clínica! Desde o primeiro contato, fui atendido com profissionalismo e gentileza.", foto: "avaliacao3.png" }
  ],
  [
    { nome: "Mariana Lopes", texto: "Meu gato foi super bem atendido, adorei o carinho da equipe!", foto: "avaliacao1.png" },
    { nome: "Rafael Costa", texto: "Ambiente limpo e atendimento rápido. Recomendo muito!", foto: "avaliacao2.png" },
    { nome: "Aline Fernandes", texto: "Atendimento incrível, voltarei com certeza!", foto: "avaliacao3.png" }
  ],
  [
    { nome: "Pedro Henrique", texto: "Equipe excelente e atendimento super humano.", foto: "avaliacao1.png" },
    { nome: "Juliana Mendes", texto: "Fiquei impressionada com o cuidado e atenção com meu cachorro!", foto: "avaliacao2.png" },
    { nome: "Lucas Pereira", texto: "Serviço rápido e veterinários muito atenciosos.", foto: "avaliacao3.png" }
  ]
];

function atualizarAvaliacoes() {
  const btnPrev = document.getElementById("prev-avaliacao");
  const btnNext = document.getElementById("next-avaliacao");

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

  if (paginaAvaliacoes === 1) {
    btnPrev.style.display = "none";
    btnNext.style.display = "inline-block";
  } else if (paginaAvaliacoes === totalPaginasAvaliacoes) {
    btnPrev.style.display = "inline-block";
    btnNext.style.display = "none";
  } else {
    btnPrev.style.display = "inline-block";
    btnNext.style.display = "inline-block";
  }
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

// REDIRECIONAMENTO INTERNO 
document.addEventListener("DOMContentLoaded", function () {
  
  function rolarPara(seletor) {
    const destino = document.querySelector(seletor);
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  }

  const linksMenu = document.querySelectorAll(".menu a");
  linksMenu.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const texto = this.textContent.trim().toLowerCase();

      if (texto.includes("início")) rolarPara("body");
      else if (texto.includes("serviço")) rolarPara(".nossos-servicos");
      else if (texto.includes("sobre")) rolarPara(".quem-somos");
      else if (texto.includes("contato")) rolarPara(".contato");
    });
  });

  const linksBanner = document.querySelectorAll(".banner-links a");
  linksBanner.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const texto = this.textContent.trim().toLowerCase();

      if (texto.includes("sobre")) rolarPara(".quem-somos");
      else if (texto.includes("serviço")) rolarPara(".nossos-servicos");
      else if (texto.includes("termo")) alert("Página de Termos ainda em desenvolvimento");
    });
  });

});

// MENU HAMBURGUER
document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguer = document.getElementById('menuHamburguer');
    const menuMobile = document.getElementById('menuMobile');
    
    menuHamburguer.addEventListener('click', function() {
        this.classList.toggle('active');
        menuMobile.classList.toggle('active');
    });
    
    const menuLinks = menuMobile.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuHamburguer.classList.remove('active');
            menuMobile.classList.remove('active');
        });
    });
});

