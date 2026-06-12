
document.addEventListener("DOMContentLoaded",()=>{

console.log("SustentAgro carregado!");

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("ativo");

});

});

});
