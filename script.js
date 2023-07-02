document.querySelector(".menu-toggle").addEventListener("click", function() { document.querySelector(".menu").classList.toggle("open");
});
                // Selecionar todos os botões de "Ler Mais"
        const btnsLerMais = document.querySelectorAll('.btn-ler-mais');

        // Iterar sobre cada botão e adicionar o evento de clique
        btnsLerMais.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Trocar a exibição do texto completo e botões
            const textoCompleto = this.parentNode.querySelector('.texto-completo');
            const btnDiminuir = this.parentNode.querySelector('.btn-diminuir');
            textoCompleto.style.display = 'block';
            btnDiminuir.style.display = 'inline';
            this.style.display = 'none';
        });
        });

        // Selecionar todos os botões de "Diminuir"
        const btnsDiminuir = document.querySelectorAll('.btn-diminuir');

        // Iterar sobre cada botão e adicionar o evento de clique
        btnsDiminuir.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Recolher o texto completo e mostrar o botão de "Ler Mais"
            const textoCompleto = this.parentNode.querySelector('.texto-completo');
            const btnLerMais = this.parentNode.querySelector('.btn-ler-mais');
            textoCompleto.style.display = 'none';
            btnLerMais.style.display = 'inline';
            this.style.display = 'none';
        });
        });  


        // IMAGEM AMPLIADA NOS PROJETOS
        function ampliarImagem(elemento) {
            elemento.classList.toggle("imagem-ampliada");
            
        }

        // ANIMAÇÃO AO ROLAR A PÁGINA

            const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2000,
            delay: 200,
        //     reset: true
        });

        sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
        sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
        sr.reveal('.home__social-icon',{ interval: 200}); 
        sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
