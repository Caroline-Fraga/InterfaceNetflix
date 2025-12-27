/*
 Inicialização do carrossel (setup.js)
 - Nomes e comentários em português para facilitar leitura do projeto.
 - Mantemos as opções esperadas pelo OwlCarousel (não alterar as chaves).
*/
$(document).ready(function () {
    // Seletor usado para encontrar o carrossel na página
    const seletorCarrossel = '.owl-carousel';

    // Opções do carrossel (mantêm as chaves exigidas pela biblioteca)
    const opcoesCarrossel = {
        loop: true,
        margin: 10,
        nav: true,
        // Texto/labels dos botões de navegação com acessibilidade
        navText: [
            '<span aria-label="Anterior">‹</span>',
            '<span aria-label="Próximo">›</span>'
        ],
        responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 5 }
        }
    };

    // Função que inicializa o carrossel; exposta apenas no escopo local
    function inicializarCarrossel(seletor = seletorCarrossel, opcoes = opcoesCarrossel) {
        $(seletor).owlCarousel(opcoes);
    }

    // Executa inicialização
    inicializarCarrossel();

    // Suporte a navegação por teclado quando o carrossel estiver focado
    $(seletorCarrossel).on('keydown', function (e) {
        // ArrowLeft -> anterior, ArrowRight -> próximo
        if (e.key === 'ArrowLeft') {
            $(this).trigger('prev.owl.carousel');
            e.preventDefault();
        } else if (e.key === 'ArrowRight') {
            $(this).trigger('next.owl.carousel');
            e.preventDefault();
        }
    });
});