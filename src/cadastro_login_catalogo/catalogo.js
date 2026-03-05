// catalogo.js

// 0. Pets de exemplo para demonstração (imagens bolt.jpg, mia.jpg e luna.jpg na mesma pasta)
const samplePets = [
  { id: 'ex1', nome: 'Bolt', sexo: 'Macho', foto: 'bolt.jpg',  especie: 'Cachorro', idade: '2', porte: 'Médio', localizacao: 'Rio de Janeiro',   nivelEnergia: 'Alta', conviveCriancas: 'Sim', conviveAnimais: 'Sim', castrado: 'Sim', historicoVac: 'V8, V9', comportamento: 'Brincalhão', observacoes: '' },
  { id: 'ex2', nome: 'Mia',  sexo: 'Fêmea', foto: 'mia.jpg',   especie: 'Gato',     idade: '1', porte: 'Pequeno', localizacao: 'São Paulo',         nivelEnergia: 'Média', conviveCriancas: 'Não', conviveAnimais: 'Sim', castrado: 'Não', historicoVac: 'V7',     comportamento: 'Calma',     observacoes: '' },
  { id: 'ex3', nome: 'Luna', sexo: 'Fêmea', foto: 'luna.jpg',  especie: 'Gato',     idade: '3', porte: 'Pequeno', localizacao: 'Belo Horizonte',    nivelEnergia: 'Baixa', conviveCriancas: 'Sim', conviveAnimais: 'Não', castrado: 'Sim', historicoVac: 'V8',     comportamento: 'Dorminhoca', observacoes: '' }
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
  alert('Atenção: Seu navegador está em modo restrito ou você está acessando por file://. Favoritar pets pode não funcionar corretamente. Use um servidor local para melhor experiência.');
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
    } else {
      favs.push(pet.id);
      fav.innerHTML = '♥';
      fav.style.color = '#e74c3c';
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

// 1. Renderiza a lista de pets: exemplos sempre + cadastrados
function renderizaListaPets() {
  const container = document.querySelector('.lista-pets');
  container.innerHTML = '';

  const cadastrados = JSON.parse(localStorage.getItem('petsPetMatch')) || [];
  const pets = samplePets.concat(cadastrados);

  pets.forEach(pet => {
    container.appendChild(criaPetCard(pet));
  });
}

function filtrarPets() {
  const especie = document.getElementById('filtroEspecie').value;
  const porte   = document.getElementById('filtroPorte').value;
  const idade   = document.getElementById('filtroIdade').value;
  const genero  = document.getElementById('filtroGenero').value;
  const loc     = document.getElementById('filtroLocalizacao').value.trim().toLowerCase();
  const energia = document.getElementById('filtroEnergia').value;

  const cards = Array.from(document.querySelectorAll('.pet-card'));
  const filtrados = cards.filter(card => {
    if (especie && card.dataset.especie !== especie) return false;
    if (porte   && card.dataset.porte   !== porte)   return false;
    if (idade   && parseInt(card.dataset.idade) !== parseInt(idade)) return false;
    if (genero  && card.dataset.genero  !== genero) return false;
    if (loc     && !card.dataset.localizacao.toLowerCase().includes(loc)) return false;
    if (energia && card.dataset.energia !== energia) return false;
    return true;
  });

  const container = document.querySelector('.lista-pets');
  container.innerHTML = '';
  filtrados.forEach(c => container.appendChild(c));
}

document.getElementById('btnBuscar')?.addEventListener('click', filtrarPets);
document.getElementById('btnLimparFiltros')?.addEventListener('click', () => {
  ['filtroEspecie','filtroPorte','filtroIdade','filtroGenero','filtroLocalizacao','filtroEnergia']
    .forEach(id => document.getElementById(id).value = '');
  renderizaListaPets();
});

window.addEventListener('DOMContentLoaded', renderizaListaPets);

window.addEventListener('DOMContentLoaded', renderizaListaPets);



