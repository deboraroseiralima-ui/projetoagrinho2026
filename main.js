console.log('SustentAgro carregado!');

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert(card.querySelector('h3').innerText);
    });
});

// SustentAgro - main.js

document.addEventListener("DOMContentLoaded", () => {

    console.log("SustentAgro carregado!");

    // Atualiza o título da página
    document.title = "Forragem | SustentAgro";


    // Cria uma interação para os cards/seções
    const secoes = document.querySelectorAll("section");


    secoes.forEach(secao => {

        secao.addEventListener("mouseenter", () => {
            secao.style.transform = "scale(1.02)";
            secao.style.transition = "0.3s";
        });


        secao.addEventListener("mouseleave", () => {
            secao.style.transform = "scale(1)";
        });

    });



    // Mensagem no console
    console.log(
        "Conheça as culturas forrageiras e sua importância para a sustentabilidade do solo"
    );

});

// SustentAgro - Meio Ambiente
// main.js

document.addEventListener("DOMContentLoaded", () => {

    console.log("Página Meio Ambiente carregada!");


    // Atualiza o título da página
    document.title = "Meio Ambiente | SustentAgro";


    // Texto da seção de Meio Ambiente
    const ambiente = document.querySelector("#meio-ambiente");


    if (ambiente) {

        ambiente.innerHTML = `

            <h2>🌎 Meio Ambiente</h2>

            <p>
            Como práticas agrícolas sustentáveis protegem o meio ambiente
            e evitam a expansão agrária.
            </p>


            <div class="card">

                <h3>Preservação dos recursos naturais</h3>

                <p>
                A agricultura sustentável ajuda a conservar a água,
                o solo e a biodiversidade.
                </p>

            </div>


            <div class="card">

                <h3>Produção consciente</h3>

                <p>
                Produzir alimentos cuidando da natureza garante
                um futuro melhor.
                </p>

            </div>

        `;


        // efeito ao passar o mouse
        ambiente.addEventListener("mouseenter", () => {

            ambiente.style.transform = "scale(1.02)";
            ambiente.style.transition = "0.3s";

        });


        ambiente.addEventListener("mouseleave", () => {

            ambiente.style.transform = "scale(1)";

        });

    }


});