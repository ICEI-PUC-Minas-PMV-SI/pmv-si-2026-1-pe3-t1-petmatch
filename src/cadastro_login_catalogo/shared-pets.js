// shared-pets.js

export const samplePets = [
  {
    id: 'ex1',
    nome: 'Bolt',
    sexo: 'Macho',
    foto: '../cadastro_login_catalogo/bolt.jpg',
    especie: 'Cachorro',
    idade: '2',
    porte: 'Médio',
    localizacao: 'Rio de Janeiro',
    nivelEnergia: 'Alta'
  },
  {
    id: 'ex2',
    nome: 'Mia',
    sexo: 'Fêmea',
    foto: '../cadastro_login_catalogo/mia.jpg',
    especie: 'Gato',
    idade: '1',
    porte: 'Pequeno',
    localizacao: 'São Paulo',
    nivelEnergia: 'Média'
  },
  {
    id: 'ex3',
    nome: 'Luna',
    sexo: 'Fêmea',
    foto: '../cadastro_login_catalogo/luna.jpg',
    especie: 'Gato',
    idade: '3',
    porte: 'Pequeno',
    localizacao: 'Belo Horizonte',
    nivelEnergia: 'Baixa'
  }
];


export function getAllPets() {
  const cadastrados = JSON.parse(localStorage.getItem('petsPetMatch')) || [];
  return samplePets.concat(cadastrados);
}

export function criaPetCard(pet) {
  const card = document.createElement('div');
  card.classList.add('pet-card');

  const img = document.createElement('img');
  img.src = pet.foto || 'placeholder.png';
  img.alt = pet.nome;
  card.appendChild(img);

  const info = document.createElement('div');
  info.classList.add('info-container');

  const nomeEl = document.createElement('h3');
  nomeEl.textContent = pet.nome;
  info.appendChild(nomeEl);

  const generoEl = document.createElement('span');
  generoEl.classList.add('genero');
  generoEl.textContent = pet.sexo === 'Macho' ? '♂' : '♀';
  info.appendChild(generoEl);

  card.appendChild(info);

  const btn = document.createElement('button');
  btn.className = 'btn-adotar';
  btn.textContent = 'Quero adotar';
  btn.onclick = () => location.href = `../cadastro_login_catalogo/catalogo.html`;
  card.appendChild(btn);

  return card;
}
