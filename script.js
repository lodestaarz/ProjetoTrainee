let paginaAtualCarrossel = 1;
const totalPaginasCarrossel = 3;

function trocarPagina(direcao) {
    const banners = document.querySelectorAll('.banner-carrossel');
    const circulos = document.querySelectorAll('.div-circulos');

    if (direcao === 'prev') {
        paginaAtualCarrossel = paginaAtualCarrossel === 1 ? totalPaginasCarrossel : paginaAtualCarrossel - 1;
    } else if (direcao === 'next') {
        paginaAtualCarrossel = paginaAtualCarrossel === totalPaginasCarrossel ? 1 : paginaAtualCarrossel + 1;
    } else if (direcao === 'number') {
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

// ======== EXPANDIR AVALIAÇÕES ========
document.getElementById("btn-expandir").addEventListener("click", function() {
  const extra = document.getElementById("avaliacoes-extra");
  const btn = this;

  if (extra.style.display === "none") {
    extra.style.display = "flex";
    extra.style.flexDirection = "column";
    btn.innerHTML = "↑ Ver menos avaliações";
  } else {
    extra.style.display = "none";
    btn.innerHTML = "↓ Ver mais avaliações";
  }
});