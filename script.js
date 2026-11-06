/**
 * =====================================================
 * DAGA BEBIDAS
 * Script Principal
 * =====================================================
 *
 * ÍNDICE:
 * 1. Aviso de Idade
 * 2. Lista de Produtos (EDITÁVEL)
 * 3. Montagem das Vitrines
 * 4. Filtro de Categorias
 * 5. Setas dos Carrosséis
 * 6. Menu Mobile
 * 7. Header Scroll Effect
 * 8. Link WhatsApp
 *
 * =====================================================
 */

/* =====================================================
   2. LISTA DE PRODUTOS
   =====================================================
   EDITÁVEL: Cada produto tem nome, tipo, categoria
   (cachaca, licor ou kit), preço no PIX, condição no
   cartão, selo opcional, foto e link da loja.
   "listas" diz em quais vitrines ele aparece:
   - premium: "Cachaças nobres e premium"
   - maisvendidos: "Mais vendidos"
   Todos aparecem em "Nossas bebidas".
*/

const IMG = 'https://assets.sistemawbuy.com.br/arquivos/829e6bff907fc6de7a54a7629c9eeafe/produtos/';
const LOJA = 'https://www.dagabebidas.com.br/';

const produtos = [
    { nome: 'Jambeijo – Licor do Beijo 500ml', tipo: 'Licor fino com jambu · 22% vol', categoria: 'licor', pix: '67,90', cartao: 'ou R$ 70,00 no cartão', selo: 'Carro-chefe', foto: '68dff2cdbae5f/jambeijo-500-site-sem-fundo-6ad65d2819f9d_mini.jpeg', link: 'daga-bebidas-licor-fino-jambeijo-500-ml/', listas: ['maisvendidos'] },
    { nome: 'Cachaça Jequitibá 750ml', tipo: 'Envelhecida em Jequitibá · 40% vol', categoria: 'cachaca', pix: '97,00', cartao: 'ou 2x de R$ 50,00 sem juros', selo: 'Premiada', foto: '68feb06fc4356/14-2-68febe8052cea_mini.jpg', link: 'cachaca-daga-jequitiba-40-vol-750ml/', listas: ['premium'] },
    { nome: 'Cachaça Single Barrel Carvalho Americano 750ml', tipo: 'Barril único · 40% vol', categoria: 'cachaca', pix: '194,00', cartao: 'ou 4x de R$ 50,00 sem juros', selo: 'Premium', foto: '690f56d878019/single-barrel-site-69176ee9752cc_mini.jpg', link: 'cachaca-daga-single-barrel-carvalho-americano-40-vol-750ml/', listas: ['premium'] },
    { nome: 'Licor Leite Condensado 500ml', tipo: 'Linha Castro-PR · 20% vol', categoria: 'licor', pix: '67,90', cartao: 'ou R$ 70,00 no cartão', selo: 'Linha Castro-PR', foto: '68fd50a02eabe/sem-nome-1600-x-1200-px-1600-x-1200-px-5-68fd6f0438fd9_mini.jpg', link: 'daga-bebidas-licor-fino-leite-condensado-castro-vol-20-500ml/', listas: ['maisvendidos'] },
    { nome: 'Cachaça Blend Reserva Porto 750ml', tipo: 'Blend reserva · 40% vol', categoria: 'cachaca', pix: '242,50', cartao: 'ou 5x de R$ 50,00 sem juros', selo: 'Reserva', foto: '690f56d219a4a/18-69177a706367a_mini.jpg', link: 'cachaca-daga-blend-reserva-porto-40-vol-750ml/', listas: ['premium'] },
    { nome: 'Licor Fire 750ml', tipo: 'Licor fino · 27,2% vol', categoria: 'licor', pix: '67,90', cartao: 'ou R$ 70,00 no cartão', selo: 'Novidade', foto: '68dd68ef79e3c/20260313_094433-1-jpg-69bdc538f370a_mini.jpg', link: 'daga-bebidas-licor-fino-fire-27-2-vol-750ml/', listas: ['maisvendidos'] },
    { nome: 'Cachaça Louro Canela 750ml', tipo: 'Envelhecida em Louro Canela · 40% vol', categoria: 'cachaca', pix: '97,00', cartao: 'ou 2x de R$ 50,00 sem juros', foto: '690f56d654517/louro-canela-6917721d75844_mini.jpg', link: 'cachaca-daga-louro-canela-40-vol-750ml/', listas: ['premium'] },
    { nome: 'Kit MDF com 5 Cachaças 60ml', tipo: 'Madeiras brasileiras', categoria: 'kit', pix: '97,00', cartao: 'ou 2x de R$ 50,00 sem juros', selo: 'Presente', foto: '68fd7a19efd13/12-2-photoroom-jegj33wn8i-68fff3267ba6a_mini.jpg', link: 'kit-caixa-mdf-c-5-cachaca-daga-60ml-madeiras-brasileiras/', listas: ['maisvendidos'] },
    { nome: 'Licor Jabuticaba 750ml', tipo: 'Licor fino · 16% vol', categoria: 'licor', pix: '58,20', cartao: 'ou R$ 60,00 no cartão', foto: '68dd68f242490/sem-nome-1600-x-1200-px-1600-x-1200-px-18-68fdad8b1ae50_mini.jpg', link: 'daga-bebidas-licor-fino-jabuticaba-16-vol-750ml/', listas: ['maisvendidos'] },
    { nome: 'Cachaça Amburana 750ml', tipo: 'Envelhecida em Amburana · 40% vol', categoria: 'cachaca', pix: '97,00', cartao: 'ou 2x de R$ 50,00 sem juros', foto: '68dd494753ba4/sem-ti-tulo-14-68feaebfb34c4_mini.jpg', link: 'cachaca-daga-amburana-40-vol-750ml/', listas: ['premium'] },
    { nome: 'Cachaça Carvalho 750ml', tipo: 'Envelhecida em Carvalho · 40% vol', categoria: 'cachaca', pix: '97,00', cartao: 'ou 2x de R$ 50,00 sem juros', foto: '690f56e16dd2b/carvalho-site-69176d48c0ec3_mini.jpg', link: 'cachaca-daga-carvalho-40-vol-750ml/', listas: ['premium'] },
    { nome: 'Cachaça Clássica 750ml', tipo: 'Ideal para coquetelaria · 40% vol', categoria: 'cachaca', pix: '58,20', cartao: 'ou R$ 60,00 no cartão', selo: 'Coquetelaria', foto: '690f56ebf2946/cla-ssica-6966a0e7764fe_mini.jpg', link: 'cachaca-daga-classica-40-vol-750ml/', listas: [] },
    { nome: 'Licor Limão e Mel 750ml', tipo: 'Licor fino · 16% vol', categoria: 'licor', pix: '67,90', cartao: 'ou R$ 70,00 no cartão', foto: '68dd68d9e25ba/08-photoroom-fjgfr7zo56-68fea700599c5_mini.jpg', link: 'daga-bebidas-licor-fino-limao-e-mel-16-vol-750ml/', listas: [] },
    { nome: 'Licor Maracujá 750ml', tipo: 'Licor fino · 16% vol', categoria: 'licor', pix: '67,90', cartao: 'ou R$ 70,00 no cartão', foto: '68dd68d762344/maracuja-750-68fea8a7b5bee_mini.jpg', link: 'daga-bebidas-licor-fino-maracuja-16-vol-750ml/', listas: [] },
    { nome: 'Licor Banana 750ml', tipo: 'Licor fino · 25,2% vol', categoria: 'licor', pix: '58,20', cartao: 'ou R$ 60,00 no cartão', foto: '68dd68ca7a22d/banana-68fea9693e181_mini.jpg', link: 'daga-bebidas-licor-fino-banana-25-2-vol-750ml/', listas: [] },
    { nome: 'Kit MDF com 5 Licores 60ml', tipo: 'Sabores mistos', categoria: 'kit', pix: '87,30', cartao: 'ou R$ 90,00 no cartão', selo: 'Presente', foto: '690f542cd5605/prancheta-690f7408463fc_mini.jpg', link: 'kit-caixa-mdf-c-5-licor-daga-60ml-misto/', listas: [] },
    { nome: 'Kit MDF com 5 Licores 160ml', tipo: 'Sabores mistos', categoria: 'kit', pix: '184,30', cartao: 'ou 3x de R$ 63,33 sem juros', foto: '68f58d5db2615/kit-site-6920942d5bb25_mini.jpg', link: 'kit-caixa-mdf-c-5-licor-daga-160ml-misto/', listas: [] },
    { nome: 'Maleta Degustação Kraft com 5 Licores 60ml', tipo: 'Sabores mistos', categoria: 'kit', pix: '67,90', cartao: 'ou R$ 70,00 no cartão', foto: '68fd79a2b8ce2/39fa5699fbef97ccc34e61af5e01b9ce-q80spkqw2a-68fec0cb74219_mini.jpg', link: 'kit-maleta-degustacao-kraft-c-5licor-daga-60ml-misto/', listas: [] },
    { nome: 'Cachaça Jequitibá 375ml', tipo: 'Envelhecida em Jequitibá · 40% vol', categoria: 'cachaca', pix: '67,90', cartao: 'ou R$ 70,00 no cartão', selo: 'Premiada', foto: '68feb06dccae4/17-68febf4c16b01_mini.jpg', link: 'cachaca-daga-jequitiba-40-vol-375ml/', listas: [] },
    { nome: 'Cachaça Carvalho 375ml', tipo: 'Envelhecida em Carvalho · 40% vol', categoria: 'cachaca', pix: '67,90', cartao: 'ou R$ 70,00 no cartão', foto: '690f56da7b78a/carvalho-375-69176e140503c_mini.jpg', link: 'cachaca-daga-carvalho-40-vol-375ml/', listas: [] },
    { nome: 'Cachaça Louro Canela 160ml', tipo: 'Envelhecida em Louro Canela · 40% vol', categoria: 'cachaca', pix: '29,10', cartao: 'ou R$ 30,00 no cartão', foto: '68f58ce724009/louro-canela-68f8f5ea25b80_mini.jpg', link: 'cachaca-daga-louro-canela-40-vol-160ml/', listas: [] }
];

document.addEventListener('DOMContentLoaded', function() {

    /* =====================================================
       1. AVISO DE IDADE
       =====================================================
       Mostra a pergunta "18 anos ou mais?" na primeira visita
       e lembra a resposta no navegador.
    */

    const idadeAviso = document.getElementById('idadeAviso');
    let maiorDeIdade = false;

    try {
        maiorDeIdade = localStorage.getItem('daga-18') === 'sim';
    } catch (e) {}

    if (!maiorDeIdade) {
        idadeAviso.hidden = false;
        document.body.classList.add('travado');
    }

    document.getElementById('idadeSim').addEventListener('click', function() {
        try {
            localStorage.setItem('daga-18', 'sim');
        } catch (e) {}
        idadeAviso.hidden = true;
        document.body.classList.remove('travado');
    });

    document.getElementById('idadeNao').addEventListener('click', function() {
        document.getElementById('idadeRecusa').hidden = false;
    });

    /* =====================================================
       3. MONTAGEM DAS VITRINES
       =====================================================
       Cria um card para cada produto nas vitrines da página.
    */

    function criarCard(produto) {
        const card = document.createElement('a');
        card.className = 'produto-card';
        card.href = LOJA + produto.link;
        card.target = '_blank';
        card.rel = 'noopener';
        card.dataset.categoria = produto.categoria;

        card.innerHTML = `
            <div class="produto-imagem">
                ${produto.selo ? `<span class="produto-tag">${produto.selo}</span>` : ''}
                <img src="${IMG + produto.foto}" alt="${produto.nome}" loading="lazy">
            </div>
            <h3>${produto.nome}</h3>
            <p class="produto-tipo">${produto.tipo}</p>
            <p class="produto-preco">R$ ${produto.pix} <small>no PIX</small></p>
            <p class="produto-parcela">${produto.cartao}</p>
            <span class="produto-comprar">Comprar</span>
        `;
        return card;
    }

    document.querySelectorAll('[data-lista]').forEach(trilho => {
        const lista = trilho.dataset.lista;
        produtos
            .filter(p => lista === 'todas' || p.listas.includes(lista))
            .forEach(p => trilho.appendChild(criarCard(p)));
    });

    /* =====================================================
       5. SETAS DOS CARROSSÉIS
       =====================================================
       Cada clique rola uma "página" de cards. As setas somem
       quando chegam no começo ou no fim.
    */

    const carrosseis = document.querySelectorAll('[data-carrossel]');

    function atualizarSetas(carrossel) {
        const trilho = carrossel.querySelector('.carrossel-trilho');
        const fim = trilho.scrollWidth - trilho.clientWidth - 4;
        carrossel.querySelector('.anterior').disabled = trilho.scrollLeft <= 4;
        carrossel.querySelector('.proxima').disabled = trilho.scrollLeft >= fim;
    }

    // Distância de uma "página": quantos cards inteiros cabem na tela
    function passo(trilho) {
        const card = trilho.querySelector('.produto-card:not([hidden])');
        if (!card) return trilho.clientWidth;
        const largura = card.getBoundingClientRect().width + parseFloat(getComputedStyle(trilho).columnGap);
        return Math.max(1, Math.floor((trilho.clientWidth + 1) / largura)) * largura;
    }

    carrosseis.forEach(carrossel => {
        const trilho = carrossel.querySelector('.carrossel-trilho');

        carrossel.querySelector('.anterior').addEventListener('click', () => {
            trilho.scrollBy({ left: -passo(trilho), behavior: 'smooth' });
        });

        carrossel.querySelector('.proxima').addEventListener('click', () => {
            trilho.scrollBy({ left: passo(trilho), behavior: 'smooth' });
        });

        trilho.addEventListener('scroll', () => atualizarSetas(carrossel), { passive: true });
        atualizarSetas(carrossel);
    });

    window.addEventListener('resize', () => carrosseis.forEach(atualizarSetas));

    /* =====================================================
       4. FILTRO DE CATEGORIAS
       =====================================================
       As abas Todas / Cachaças / Licores / Kits escondem os
       cards das outras categorias na vitrine "Nossas bebidas".
    */

    const filtros = document.querySelectorAll('.filtro');
    const vitrineBebidas = document.querySelector('#bebidas');

    filtros.forEach(botao => {
        botao.addEventListener('click', function() {
            filtros.forEach(b => {
                b.classList.toggle('ativo', b === botao);
                b.setAttribute('aria-selected', b === botao);
            });

            const filtro = botao.dataset.filtro;
            const trilho = vitrineBebidas.querySelector('.carrossel-trilho');

            trilho.querySelectorAll('.produto-card').forEach(card => {
                card.hidden = filtro !== 'todas' && card.dataset.categoria !== filtro;
            });

            trilho.scrollLeft = 0;
            atualizarSetas(vitrineBebidas.querySelector('[data-carrossel]'));
        });
    });

    /* =====================================================
       6. MENU MOBILE (HAMBÚRGUER)
       ===================================================== */

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    /* =====================================================
       7. HEADER SCROLL EFFECT
       ===================================================== */

    const header = document.getElementById('header');

    function atualizarHeader() {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }

    window.addEventListener('scroll', atualizarHeader, { passive: true });
    atualizarHeader();

    /* =====================================================
       8. LINK WHATSAPP COM MENSAGEM PADRÃO
       =====================================================
       EDITÁVEL: Altere as mensagens abaixo.
    */

    const mensagens = {
        padrao: 'Olá! Vim pelo site da Daga Bebidas e gostaria de mais informações.',
        novidades: 'Olá! Quero receber as novidades e descontos da Daga Bebidas.'
    };

    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        const currentHref = link.getAttribute('href');
        const texto = mensagens[link.dataset.msg] || mensagens.padrao;

        if (!currentHref.includes('text=')) {
            link.setAttribute('href', `${currentHref}?text=${encodeURIComponent(texto)}`);
        }
    });

});
