// catalogo.js

// 0. Pets de exemplo para demonstração
const samplePets = [
  { id: 'ex1', nome: 'Bolt',    sexo: 'Macho', foto: 'bolt.jpg',  especie: 'Cachorro', idade: '2', porte: 'Médio',   localizacao: 'Rio de Janeiro, RJ',  nivelEnergia: 'Alta',  conviveCriancas: 'Sim', conviveAnimais: 'Sim', castrado: 'Sim', historicoVac: 'V8, Antirrábica', comportamento: 'Muito brincalhão e cheio de energia.',   observacoes: 'Ideal para famílias ativas.' },
  { id: 'ex2', nome: 'Mia',     sexo: 'Fêmea', foto: 'mia.jpg',   especie: 'Gato',     idade: '1', porte: 'Pequeno', localizacao: 'São Paulo, SP',        nivelEnergia: 'Média', conviveCriancas: 'Sim', conviveAnimais: 'Não', castrado: 'Sim', historicoVac: 'Tríplice felina',   comportamento: 'Curiosa e carinhosa.',                    observacoes: 'Prefere ser filha única.' },
  { id: 'ex3', nome: 'Luna',    sexo: 'Fêmea', foto: 'luna.jpg',  especie: 'Gato',     idade: '3', porte: 'Pequeno', localizacao: 'Belo Horizonte, MG',  nivelEnergia: 'Baixa', conviveCriancas: 'Sim', conviveAnimais: 'Sim', castrado: 'Sim', historicoVac: 'Tríplice felina, Raiva', comportamento: 'Tranquila e afetuosa.',                observacoes: 'Ótima companheira para adultos.' },
  { id: 'ex4', nome: 'Rex',     sexo: 'Macho', foto: 'bolt.jpg',  especie: 'Cachorro', idade: '4', porte: 'Grande',  localizacao: 'Curitiba, PR',         nivelEnergia: 'Alta',  conviveCriancas: 'Sim', conviveAnimais: 'Sim', castrado: 'Não', historicoVac: 'V10, Antirrábica',   comportamento: 'Leal e dócil com crianças.',             observacoes: 'Precisa de espaço.' },
  { id: 'ex5', nome: 'Mel',     sexo: 'Fêmea', foto: 'mia.jpg',   especie: 'Cachorro', idade: '1', porte: 'Pequeno', localizacao: 'Salvador, BA',         nivelEnergia: 'Alta',  conviveCriancas: 'Sim', conviveAnimais: 'Sim', castrado: 'Sim', historicoVac: 'V8, Giárdia',        comportamento: 'Alegre e extremamente sociável.',         observacoes: 'Ótima para apartamentos.' },
  { id: 'ex6', nome: 'Thor',    sexo: 'Macho', foto: 'bolt.jpg',  especie: 'Cachorro', idade: '5', porte: 'Grande',  localizacao: 'Porto Alegre, RS',     nivelEnergia: 'Média', conviveCriancas: 'Sim', conviveAnimais: 'Não', castrado: 'Sim', historicoVac: 'V10, Leishmaniose',  comportamento: 'Calmo e inteligente.',                   observacoes: 'Adora passeios tranquilos.' },
  { id: 'ex7', nome: 'Pipoca',  sexo: 'Fêmea', foto: 'luna.jpg',  especie: 'Gato',     idade: '2', porte: 'Pequeno', localizacao: 'Fortaleza, CE',        nivelEnergia: 'Alta',  conviveCriancas: 'Sim', conviveAnimais: 'Sim', castrado: 'Sim', historicoVac: 'Tríplice felina, FeLV', comportamento: 'Agitada e brincalhona.',              observacoes: 'Companheira para quem tem energia.' },
  { id: 'ex8', nome: 'Bruno',   sexo: 'Macho', foto: 'bolt.jpg',  especie: 'Cachorro', idade: '7', porte: 'Médio',   localizacao: 'Recife, PE',           nivelEnergia: 'Baixa', conviveCriancas: 'Sim', conviveAnimais: 'Sim', castrado: 'Sim', historicoVac: 'V10, Antirrábica',   comportamento: 'Sossegado e carinhoso.',                 observacoes: 'Adora pets idosos com lar tranquilo.' },
];

function isLocalStorageAvailable() {
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, '1');
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

function getFavoritos() {
  if (!isLocalStorageAvailable()) return [];
  try {
    return JSON.parse(localStorage.getItem('favoritosPetMatch')) || [];
  } catch (e) {
    return [];
  }
}

function setFavoritos(favs) {
  if (!isLocalStorageAvailable()) return;
  try {
    localStorage.setItem('favoritosPetMatch', JSON.stringify(favs));
  } catch (e) {}
}

if (!isLocalStorageAvailable()) {
  console.warn('localStorage não disponível. Favoritar pode não funcionar.');
}

function criaPetCard(pet) {
  const card = document.createElement('div');
  card.classList.add('pet-card');
  card.dataset.id          = pet.id;
  card.dataset.especie     = pet.especie;
  card.dataset.porte       = pet.porte;
  card.dataset.idade       = pet.idade;
  card.dataset.genero      = pet.sexo;
  card.dataset.localizacao = pet.localizacao;
  card.dataset.energia     = pet.nivelEnergia;

  // Foto
  const img = document.createElement('img');
  img.src = pet.foto || 'placeholder.png';
  img.alt = pet.nome;
  card.appendChild(img);

  // Nome + gênero + coração
  const info = document.createElement('div');
  info.classList.add('info-container');

  const nomeEl = document.createElement('h3');
  nomeEl.textContent = pet.nome;
  info.appendChild(nomeEl);

  const generoEl = document.createElement('span');
  generoEl.classList.add('genero');
  generoEl.textContent = pet.sexo === 'Macho' ? '♂' : '♀';
  info.appendChild(generoEl);

  const fav = document.createElement('span');
  fav.classList.add('favoritar');
  let favoritos = getFavoritos();
  if (favoritos.includes(pet.id)) {
    fav.innerHTML = '♥';
    fav.style.color = '#e74c3c';
  } else {
    fav.innerHTML = '♡';
    fav.style.color = '#ccc';
  }
  fav.addEventListener('click', e => {
    e.stopPropagation();
    let favs = getFavoritos();
    if (favs.includes(pet.id)) {
      favs = favs.filter(id => id !== pet.id);
      fav.innerHTML = '♡';
      fav.style.color = '#ccc';
      if (window.Toast) Toast.info(`${pet.nome} removido dos favoritos.`);
    } else {
      favs.push(pet.id);
      fav.innerHTML = '♥';
      fav.style.color = '#e74c3c';
      if (window.Toast) Toast.success(`${pet.nome} adicionado aos favoritos! ❤️`);
    }
    setFavoritos(favs);
  });
  info.appendChild(fav);

  card.appendChild(info);

  // Botão "Quero adotar"
  const btnAdotar = document.createElement('button');
  btnAdotar.classList.add('btn-adotar');
  btnAdotar.textContent = 'Quero adotar';
  btnAdotar.addEventListener('click', () => {
    window.location.href = `pet-detalhes.html?id=${encodeURIComponent(pet.id)}`;
  });
  card.appendChild(btnAdotar);

  return card;
}

/* ---- Atualiza contador de resultados ---- */
function atualizaContagem(n) {
  const el = document.getElementById('contagem-resultado');
  if (el) el.textContent = n === 0 ? '' : `${n} pet${n !== 1 ? 's' : ''} encontrado${n !== 1 ? 's' : ''}`;
}

/* ---- Renderiza estado vazio ---- */
function mostraVazio(container) {
  container.innerHTML = `
    <div class="empty-state" style="grid-column:1/-1">
      <span class="empty-icon">🐾</span>
      <h3>Nenhum pet encontrado</h3>
      <p>Tente outros filtros ou <a href="cadastro-pets.html" style="color:var(--color-primary)">cadastre um animal</a>.</p>
    </div>`;
}

// 1. Renderiza a lista de pets: exemplos sempre + cadastrados
function renderizaListaPets() {
  const container = document.querySelector('.lista-pets');
  container.innerHTML = '';

  const cadastrados = JSON.parse(localStorage.getItem('petsPetMatch') || '[]');
  const pets = samplePets.concat(cadastrados);

  if (!pets.length) { mostraVazio(container); atualizaContagem(0); return; }

  const ord = document.getElementById('ordenarPor')?.value || 'nome';
  pets.sort((a, b) => {
    if (ord === 'idade')   return parseInt(a.idade) - parseInt(b.idade);
    if (ord === 'energia') return ['Baixa','Média','Alta'].indexOf(a.nivelEnergia) - ['Baixa','Média','Alta'].indexOf(b.nivelEnergia);
    return (a.nome || '').localeCompare(b.nome || '');
  });

  pets.forEach(pet => container.appendChild(criaPetCard(pet)));
  atualizaContagem(pets.length);
}

function filtrarPets() {
  const busca   = (document.getElementById('inputBusca')?.value || '').trim().toLowerCase();
  const especie = document.getElementById('filtroEspecie').value;
  const porte   = document.getElementById('filtroPorte').value;
  const idade   = document.getElementById('filtroIdade').value;
  const genero  = document.getElementById('filtroGenero').value;
  const loc     = document.getElementById('filtroLocalizacao').value.trim().toLowerCase();
  const energia = document.getElementById('filtroEnergia').value;
  const ord     = document.getElementById('ordenarPor')?.value || 'nome';

  const cadastrados = JSON.parse(localStorage.getItem('petsPetMatch') || '[]');
  let pets = samplePets.concat(cadastrados);

  pets = pets.filter(p => {
    if (busca   && !p.nome.toLowerCase().includes(busca)) return false;
    if (especie && p.especie     !== especie) return false;
    if (porte   && p.porte       !== porte)   return false;
    if (idade   && parseInt(p.idade) > parseInt(idade)) return false;
    if (genero  && p.sexo        !== genero)  return false;
    if (loc     && !p.localizacao?.toLowerCase().includes(loc)) return false;
    if (energia && p.nivelEnergia !== energia) return false;
    return true;
  });

  pets.sort((a, b) => {
    if (ord === 'idade')   return parseInt(a.idade) - parseInt(b.idade);
    if (ord === 'energia') return ['Baixa','Média','Alta'].indexOf(a.nivelEnergia) - ['Baixa','Média','Alta'].indexOf(b.nivelEnergia);
    return (a.nome || '').localeCompare(b.nome || '');
  });

  const container = document.querySelector('.lista-pets');
  container.innerHTML = '';
  if (!pets.length) { mostraVazio(container); atualizaContagem(0); return; }
  pets.forEach(p => container.appendChild(criaPetCard(p)));
  atualizaContagem(pets.length);
}

document.getElementById('btnBuscar')?.addEventListener('click', filtrarPets);
document.getElementById('inputBusca')?.addEventListener('keydown', e => { if (e.key === 'Enter') filtrarPets(); });
document.getElementById('btnLimparFiltros')?.addEventListener('click', () => {
  ['filtroEspecie','filtroPorte','filtroIdade','filtroGenero','filtroLocalizacao','filtroEnergia','inputBusca']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  renderizaListaPets();
});

window.addEventListener('DOMContentLoaded', renderizaListaPets);



