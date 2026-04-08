// pet-detalhes.js — usa shared-pets.js como fonte única dos pets
import { samplePets } from './shared-pets.js';

// 1. Lê o ID — da URL ou do localStorage como fallback
const params = new URLSearchParams(window.location.search);
const petId  = params.get('id') || localStorage.getItem('petDetalheId');

if (!petId) {
  window.location.href = 'catalogo.html';
}

// 2. Monta o array completo
const cadastrados = JSON.parse(localStorage.getItem('petsPetMatch')) || [];
const allPets     = samplePets.concat(cadastrados);

// 3. Procura o pet
const pet = allPets.find(p => p.id === petId);

if (!pet) {
  if (window.Toast) Toast.error('Pet não encontrado. Redirecionando…');
  setTimeout(() => { window.location.href = 'catalogo.html'; }, 1500);
} else {
  populatePage(pet);
}

function set(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text || '—';
}

function populatePage(pet) {
  // Título da aba
  document.title = `${pet.nome} — PetMatch`;

  // Imagem
  const img = document.getElementById('petImage');
  if (img) {
    img.src = pet.foto || 'placeholder.png';
    img.alt = `Foto de ${pet.nome}`;
  }

  // Nome e gênero
  set('petName', pet.nome);
  const generoTag = document.getElementById('petGeneroTag');
  if (generoTag) {
    generoTag.textContent = pet.sexo === 'Macho' ? '♂ Macho' : '♀ Fêmea';
    generoTag.style.color = pet.sexo === 'Macho' ? '#3c7e7a' : '#e07a8c';
  }

  // Chips de espécie e porte
  const chips = document.getElementById('petChips');
  if (chips) {
    if (pet.especie) chips.innerHTML += `<span class="chip">${pet.especie}</span>`;
    if (pet.porte)   chips.innerHTML += `<span class="chip" style="background:var(--color-bg-alt);">${pet.porte}</span>`;
  }

  // Stats rápidos
  set('statIdade',      pet.idade ? `${pet.idade} ${parseInt(pet.idade) === 1 ? 'ano' : 'anos'}` : '—');
  set('statLocalizacao', pet.localizacao);
  set('statEnergia',    pet.nivelEnergia);
  set('statCastrado',   pet.castrado);
  set('statCriancas',   pet.conviveCriancas);
  set('statAnimais',    pet.conviveAnimais);

  // Detalhes
  set('petVacinas',      pet.historicoVac);
  set('petComportamento', pet.comportamento);
  set('petObservacoes',  pet.observacoes);

  // Contato (barra inferior)
  if (pet.contato) {
    set('petContato', `📞 ${pet.contato}`);
  } else {
    const el = document.getElementById('petContato');
    if (el) el.style.display = 'none';
  }

  // Oculta seção de observações se vazia
  if (!pet.observacoes) {
    const obsSection = document.getElementById('obsSection');
    if (obsSection) obsSection.style.display = 'none';
  }
}
