// ===== MENU MOBILE =====
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => links.classList.toggle('open'));
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// ===== DADOS =====
const pests = [
  { name: 'Lagarta-do-cartucho', type: 'inseto', emoji: '🐛', desc: 'Ataca milho e outras gramíneas. Controle com manejo integrado.' },
  { name: 'Percevejo-marrom', type: 'inseto', emoji: '🪲', desc: 'Praga da soja, suga grãos em formação.' },
  { name: 'Mosca-branca', type: 'inseto', emoji: '🦟', desc: 'Vetor de viroses em hortaliças e algodão.' },
  { name: 'Ferrugem-asiática', type: 'fungo', emoji: '🍂', desc: 'Doença fúngica da soja, exige rotação e fungicidas.' },
  { name: 'Mancha-alvo', type: 'fungo', emoji: '🎯', desc: 'Atinge folhas de soja e algodão.' },
  { name: 'Antracnose', type: 'fungo', emoji: '🌑', desc: 'Lesões escuras em frutos e folhas.' },
  { name: 'Nematoide-de-cisto', type: 'nematoide', emoji: '🪱', desc: 'Reduz produtividade da soja drasticamente.' },
  { name: 'Nematoide-das-galhas', type: 'nematoide', emoji: '🧬', desc: 'Forma nódulos nas raízes, comum em hortaliças.' },
];

const refs = {
  sementes: [
    { name: 'Embrapa Sementes', info: 'Cultivares adaptados para o Brasil.' },
    { name: 'Sementes Boa Safra', info: 'Soja, milho e forrageiras.' },
    { name: 'Dow Seeds', info: 'Híbridos de milho e sorgo.' },
  ],
  solo: [
    { name: 'Laboratório Solocria', info: 'Análises químicas e físicas completas.' },
    { name: 'Agrolab', info: 'Diagnóstico de fertilidade e recomendações.' },
    { name: 'Embrapa Solos', info: 'Pesquisa e referência nacional.' },
  ],
  adubos: [
    { name: 'Yara Brasil', info: 'Fertilizantes minerais e foliares.' },
    { name: 'Mosaic Fertilizantes', info: 'NPK, micronutrientes.' },
    { name: 'Heringer', info: 'Adubos formulados para cada cultura.' },
  ],
};

// ===== PRAGAS =====
const pestGrid = document.getElementById('pestGrid');
const renderPests = (filter = 'todos') => {
  const list = filter === 'todos' ? pests : pests.filter(p => p.type === filter);
  pestGrid.innerHTML = list.map(p => `
    <div class="card">
      <h3>${p.emoji} ${p.name}</h3>
      <p>${p.desc}</p>
    </div>`).join('');
};
document.getElementById('pestFilters').addEventListener('click', e => {
  if (!e.target.matches('.filter')) return;
  document.querySelectorAll('#pestFilters .filter').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderPests(e.target.dataset.filter);
});
renderPests();

// ===== REFERÊNCIAS =====
const refContent = document.getElementById('refContent');
const renderRefs = (tab = 'sementes') => {
  refContent.innerHTML = `<ul>${refs[tab].map(r => `<li><strong>${r.name}</strong> — ${r.info}</li>`).join('')}</ul>`;
};
document.getElementById('refTabs').addEventListener('click', e => {
  if (!e.target.matches('.tab')) return;
  document.querySelectorAll('#refTabs .tab').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderRefs(e.target.dataset.tab);
});
renderRefs();

// ===== GRÁFICOS =====
window.addEventListener('load', () => {
  if (typeof Chart === 'undefined') return;

  const green = '#16a34a';
  const darkGreen = '#14532d';
  const commonOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } },
    scales: { y: { beginAtZero: false } },
  };

  new Chart(document.getElementById('populationChart'), {
    type: 'line',
    data: {
      labels: ['1950','1970','1990','2010','2024','2030','2050'],
      datasets: [{
        label: 'População (bilhões)',
        data: [2.5, 3.7, 5.3, 6.9, 8.1, 8.5, 9.7],
        borderColor: green,
        backgroundColor: 'rgba(34,197,94,.15)',
        fill: true,
        tension: .35,
      }],
    },
    options: commonOpts,
  });

  new Chart(document.getElementById('unChart'), {
    type: 'line',
    data: {
      labels: ['2024','2050','2075','2100'],
      datasets: [
        { label: 'Cenário alto', data: [8.1,10.3,12.0,14.1], borderColor: '#dc2626', tension:.3 },
        { label: 'Cenário médio', data: [8.1,9.7,10.4,10.9], borderColor: green, tension:.3 },
        { label: 'Cenário baixo', data: [8.1,9.0,8.5,7.3], borderColor: darkGreen, tension:.3 },
      ],
    },
    options: commonOpts,
  });
});
