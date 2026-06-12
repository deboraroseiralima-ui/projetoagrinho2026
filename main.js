
document.addEventListener("DOMContentLoaded", () => {

    console.log("SustentAgro carregado!");

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            card.classList.toggle("ativo");

        });

    });

});

// SustentAgro - Página Forragem

document.addEventListener("DOMContentLoaded", () => {

    console.log("Página Forragem carregada!");

    // altera o título da página
    document.title = "Forragem | SustentAgro";


    // efeito nos cards da seção de forragem
    const cards = document.querySelectorAll(".card");


    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "scale(1.05)";
            card.style.transition = "0.3s";

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "scale(1)";

        });


        // clique no card
        card.addEventListener("click", () => {

            const titulo = card.querySelector("h3");

            if(titulo){

                alert(
                    "Você acessou: " + titulo.innerText
                );

            }

        });

    });


    // mensagem da página
    const secaoForragem = document.querySelector("#forragem");


    if(secaoForragem){

        console.log(
            "Conheça as culturas forrageiras e sua importância para a sustentabilidade do solo."
        );

    }


});

// SustentAgro - Página Meio Ambiente

document.addEventListener("DOMContentLoaded", () => {

    console.log("Página Meio Ambiente carregada!");

    // altera o título da página
    document.title = "Meio Ambiente | SustentAgro";


    // seleciona os cards da página
    const cards = document.querySelectorAll(".card");


    cards.forEach(card => {


        // efeito ao passar o mouse
        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";
            card.style.transition = "0.3s";

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });


        // interação ao clicar
        card.addEventListener("click", () => {

            const titulo = card.querySelector("h3");


            if (titulo) {

                alert(
                    "Tema: " + titulo.innerText +
                    "\n\nA agricultura sustentável ajuda a proteger o meio ambiente."
                );

            }

        });

    });



    // mensagem no console
    console.log(
        "Como práticas agrícolas sustentáveis protegem o meio ambiente e evitam a expansão agrária."
    );


});

import { Header } from "@/components/header"
import { PestsSection } from "@/components/pests-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Pragas | AgroForte",
  description: "Identificação e tratamento das pragas agrícolas",
}

export default function PragasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PestsSection />
      <Footer />
    </main>
  )
}

import { Header } from "@/components/header"
import { PracticesSection } from "@/components/practices-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Práticas Sustentáveis | SustentAgro",
  description: "Conheça as principais práticas de agricultura sustentável: Plantio Direto, FBN e ILPF",
}

export default function PraticasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PracticesSection />
      <Footer />
    </main>
  )
}

import { Header } from "@/components/header"
import { ReferencesSection } from "@/components/references-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Referências | SustentAgro",
  description: "Referências confiáveis de sementes, análise de solo e adubos para sua produção agrícola",
}

export default function ReferenciasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ReferencesSection />
      <Footer />
    </main>
  )
}

