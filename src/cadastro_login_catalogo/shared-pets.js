// shared-pets.js — PetMatch
// Banco de dados de exemplo e utilitários de card compartilhados.

export const samplePets = [
  {
    id: 'ex1',
    nome: 'Bolt',
    sexo: 'Macho',
    foto: 'bolt.jpg',
    especie: 'Cachorro',
    idade: '2',
    porte: 'Médio',
    localizacao: 'Rio de Janeiro, RJ',
    nivelEnergia: 'Alta',
    castrado: 'Sim',
    conviveCriancas: 'Sim',
    conviveAnimais: 'Sim',
    comportamento: 'Muito brincalhão e cheio de energia. Adora correr no parque.',
    historicoVac: 'V8, Antirrábica, Giárdia — em dia.',
    observacoes: 'Ideal para famílias ativas.',
  },
  {
    id: 'ex2',
    nome: 'Mia',
    sexo: 'Fêmea',
    foto: 'mia.jpg',
    especie: 'Gato',
    idade: '1',
    porte: 'Pequeno',
    localizacao: 'São Paulo, SP',
    nivelEnergia: 'Média',
    castrado: 'Sim',
    conviveCriancas: 'Sim',
    conviveAnimais: 'Não',
    comportamento: 'Curiosa e carinhosa. Adora colo e janelas ensolaradas.',
    historicoVac: 'Tríplice felina — em dia.',
    observacoes: 'Prefere ser filha única.',
  },
  {
    id: 'ex3',
    nome: 'Luna',
    sexo: 'Fêmea',
    foto: 'luna.jpg',
    especie: 'Gato',
    idade: '3',
    porte: 'Pequeno',
    localizacao: 'Belo Horizonte, MG',
    nivelEnergia: 'Baixa',
    castrado: 'Sim',
    conviveCriancas: 'Sim',
    conviveAnimais: 'Sim',
    comportamento: 'Tranquila e afetuosa. Perfeita para lares calmos.',
    historicoVac: 'Tríplice felina, Raiva — em dia.',
    observacoes: 'Ótima companheira para adultos.',
  },
  {
    id: 'ex4',
    nome: 'Rex',
    sexo: 'Macho',
    foto: 'bolt.jpg',
    especie: 'Cachorro',
    idade: '4',
    porte: 'Grande',
    localizacao: 'Curitiba, PR',
    nivelEnergia: 'Alta',
    castrado: 'Não',
    conviveCriancas: 'Sim',
    conviveAnimais: 'Sim',
    comportamento: 'Leal, protetor e muito dócil com crianças. Adora aprendizados.',
    historicoVac: 'V10, Antirrábica — em dia.',
    observacoes: 'Precisa de espaço e exercícios diários.',
  },
  {
    id: 'ex5',
    nome: 'Mel',
    sexo: 'Fêmea',
    foto: 'mia.jpg',
    especie: 'Cachorro',
    idade: '1',
    porte: 'Pequeno',
    localizacao: 'Salvador, BA',
    nivelEnergia: 'Alta',
    castrado: 'Sim',
    conviveCriancas: 'Sim',
    conviveAnimais: 'Sim',
    comportamento: 'Alegre, linda e extremamente sociável. Ama todos!',
    historicoVac: 'V8, Giárdia — em dia.',
    observacoes: 'Ótima para apartamentos.',
  },
  {
    id: 'ex6',
    nome: 'Thor',
    sexo: 'Macho',
    foto: 'bolt.jpg',
    especie: 'Cachorro',
    idade: '5',
    porte: 'Grande',
    localizacao: 'Porto Alegre, RS',
    nivelEnergia: 'Média',
    castrado: 'Sim',
    conviveCriancas: 'Sim',
    conviveAnimais: 'Não',
    comportamento: 'Calmo, obediente e muito inteligente. Já tem comandos básicos.',
    historicoVac: 'V10, Antirrábica, Leishmaniose — em dia.',
    observacoes: 'Adora passeios tranquilos.',
  },
  {
    id: 'ex7',
    nome: 'Pipoca',
    sexo: 'Fêmea',
    foto: 'luna.jpg',
    especie: 'Gato',
    idade: '2',
    porte: 'Pequeno',
    localizacao: 'Fortaleza, CE',
    nivelEnergia: 'Alta',
    castrado: 'Sim',
    conviveCriancas: 'Sim',
    conviveAnimais: 'Sim',
    comportamento: 'Agitada, brincalhona e adora brinquedos interativos.',
    historicoVac: 'Tríplice felina, FeLV — em dia.',
    observacoes: 'Companheira perfeita para quem tem energia.',
  },
  {
    id: 'ex8',
    nome: 'Bruno',
    sexo: 'Macho',
    foto: 'bolt.jpg',
    especie: 'Cachorro',
    idade: '7',
    porte: 'Médio',
    localizacao: 'Recife, PE',
    nivelEnergia: 'Baixa',
    castrado: 'Sim',
    conviveCriancas: 'Sim',
    conviveAnimais: 'Sim',
    comportamento: 'Sossegado, carinhoso e muito grato. Ama sonecas no sofá.',
    historicoVac: 'V10, Antirrábica — em dia.',
    observacoes: 'Adora pets idosos que precisam de lar tranquilo.',
  },
];

export function getAllPets() {
  const cadastrados = JSON.parse(localStorage.getItem('petsPetMatch') || '[]');
  return samplePets.concat(cadastrados);
}

export function criaPetCard(pet) {
  const basePath = _resolveBase();

  const card = document.createElement('div');
  card.classList.add('pet-card', 'reveal');
  card.setAttribute('data-id', pet.id || '');

  /* Foto */
  const imgWrap = document.createElement('div');
  imgWrap.className = 'pet-img-wrap';

  const img = document.createElement('img');
  const foto = pet.foto || '';
  img.src = foto.startsWith('http') || foto.startsWith('..') || foto.startsWith('/')
    ? foto
    : `${basePath}${foto}`;
  img.alt = `Foto de ${pet.nome}`;
  img.loading = 'lazy';
  img.onerror = () => { img.src = `${basePath}placeholder.jpg`; };
  imgWrap.appendChild(img);

  /* Badge espécie */
  const badge = document.createElement('span');
  badge.className = `badge badge-${(pet.especie || 'cachorro').toLowerCase()}`;
  badge.textContent = pet.especie || 'Pet';
  imgWrap.appendChild(badge);

  /* Botão favorito */
  const favBtn = document.createElement('button');
  favBtn.className = 'favoritar';
  favBtn.title = 'Favoritar';
  const favs = JSON.parse(localStorage.getItem('favoritosPetMatch') || '[]');
  const isFav = favs.includes(String(pet.id));
  favBtn.textContent = isFav ? '❤️' : '🤍';
  if (isFav) favBtn.classList.add('ativo');
  favBtn.style.cssText = 'position:absolute;top:12px;right:12px;background:rgba(255,255,255,0.85);border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-size:16px;';
  favBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const ids = JSON.parse(localStorage.getItem('favoritosPetMatch') || '[]');
    const idx = ids.indexOf(String(pet.id));
    if (idx > -1) { ids.splice(idx, 1); favBtn.textContent = '🤍'; favBtn.classList.remove('ativo'); }
    else          { ids.push(String(pet.id)); favBtn.textContent = '❤️'; favBtn.classList.add('ativo'); }
    localStorage.setItem('favoritosPetMatch', JSON.stringify(ids));
  });
  imgWrap.appendChild(favBtn);
  card.appendChild(imgWrap);

  /* Info */
  const info = document.createElement('div');
  info.className = 'info-container';

  const nome = document.createElement('h3');
  nome.textContent = pet.nome;
  info.appendChild(nome);

  const genero = document.createElement('span');
  genero.className = 'genero';
  genero.title = pet.sexo || '';
  genero.textContent = pet.sexo === 'Macho' ? '♂' : '♀';
  info.appendChild(genero);
  card.appendChild(info);

  /* Localização */
  if (pet.localizacao) {
    const loc = document.createElement('p');
    loc.className = 'pet-location';
    loc.innerHTML = `📍 ${pet.localizacao}`;
    card.appendChild(loc);
  }

  /* Chips: porte + energia */
  const chips = document.createElement('div');
  chips.style.cssText = 'display:flex;gap:6px;padding:0 16px 10px;flex-wrap:wrap;';
  if (pet.porte)       chips.innerHTML += `<span class="chip">${pet.porte}</span>`;
  if (pet.nivelEnergia) chips.innerHTML += `<span class="chip">⚡ ${pet.nivelEnergia}</span>`;
  card.appendChild(chips);

  /* Botão adotar */
  const btn = document.createElement('button');
  btn.className = 'btn-adotar';
  btn.textContent = 'Quero adotar';
  btn.addEventListener('click', () => {
    if (pet.id) {
      window.location.href = `${basePath}pet-detalhes.html?id=${encodeURIComponent(pet.id)}`;
    } else {
      window.location.href = `${basePath}catalogo.html`;
    }
  });
  card.appendChild(btn);

  return card;
}

function _resolveBase() {
  const path = window.location.pathname;
  if (path.includes('/cadastro_login_catalogo/')) return '';
  return '../cadastro_login_catalogo/';
}
