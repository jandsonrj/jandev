$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // Close menu when a menu item is clicked
    $('.navbar .menu li a').click(function () {
        // Close the menu by removing the "active" class
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");

        // Applying smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Frontend Developer/>", "Suporte Técnico", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Frontend Developer/>", "Suporte Técnico", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// $('form').submit(function () {
//     $('#confirmation-message').fadeIn();
// });



// // Geração de um número aleatório entre 1 e 100
// const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// // Número máximo de tentativas
// const maxTentativas = 10;

// // Inicialização do contador de tentativas
// let tentativas = 0;

// // Função para iniciar o jogo
// function iniciarJogo() {
//   const chute = prompt("Tente adivinhar o número entre 1 e 100:");

//   // Verifica se o jogador inseriu um número válido
//   if (chute === null) {
//     alert("Jogo encerrado. O número era " + numeroAleatorio);
//     return;
//   }

//   const numeroChute = parseInt(chute);

//   // Verifica se o chute é um número válido
//   if (isNaN(numeroChute)) {
//     alert("Por favor, insira um número válido.");
//     iniciarJogo();
//     return;
//   }

//   // Atualiza o contador de tentativas
//   tentativas++;

//   // Verifica se o jogador acertou o número
//   if (numeroChute === numeroAleatorio) {
//     alert("Parabéns! Você acertou em " + tentativas + " tentativas.");
//   } else if (tentativas === maxTentativas) {
//     alert("Fim de jogo. O número era " + numeroAleatorio);
//   } else {
//     const dica = numeroChute > numeroAleatorio ? "menor" : "maior";
//     alert("Tente novamente! O número é " + dica + " que " + numeroChute + ".");
//     iniciarJogo();
//   }
// }

// // Inicia o jogo
// iniciarJogo();
