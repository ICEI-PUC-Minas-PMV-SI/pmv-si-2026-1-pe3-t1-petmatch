// pet-detalhes.js

// 0. Mesmo array de exemplos do catálogo (bolt.jpg, mia.jpg, luna.jpg na pasta)
const samplePets = [
  { id: 'ex1', nome: 'Bolt', sexo: 'Macho', foto: 'bolt.jpg',    especie: 'Cachorro', idade: '2', porte: 'Médio', localizacao: 'Rio de Janeiro',   nivelEnergia: 'Alta', conviveCriancas: 'Sim', conviveAnimais: 'Sim', castrado: 'Sim', historicoVac: 'V8, V9', comportamento: 'Brincalhão', observacoes: '' },
  { id: 'ex2', nome: 'Mia',  sexo: 'Fêmea', foto: 'mia.jpg',     especie: 'Gato',     idade: '1', porte: 'Pequeno', localizacao: 'São Paulo',         nivelEnergia: 'Média', conviveCriancas: 'Não', conviveAnimais: 'Sim', castrado: 'Não', historicoVac: 'V7',     comportamento: 'Calma',     observacoes: '' },
  { id: 'ex3', nome: 'Luna', sexo: 'Fêmea', foto: 'luna.jpg',    especie: 'Gato',     idade: '3', porte: 'Pequeno', localizacao: 'Belo Horizonte',   nivelEnergia: 'Baixa', conviveCriancas: 'Sim', conviveAnimais: 'Não', castrado: 'Sim', historicoVac: 'V8',     comportamento: 'Dorminhoca', observacoes: '' }
];

// 1. Lê o parâmetro `id` da URL
const params = new URLSearchParams(window.location.search);
const petId  = params.get('id');
if (!petId) {
  alert('Pet não encontrado.');
  window.location.href = 'catalogo.html';
}

// 2. Monta um array com cadastrados + exemplos
const cadastrados = JSON.parse(localStorage.getItem('petsPetMatch')) || [];
const allPets     = cadastrados.concat(samplePets);

// 3. Procura o pet pelo ID
const pet = allPets.find(p => p.id === petId);
if (!pet) {
  alert('Pet não encontrado.');
  window.location.href = 'catalogo.html';
}

// 4. Preenche a página
document.getElementById('petImage').src             = pet.foto || 'placeholder.png';
document.getElementById('petName').textContent      = pet.nome;
document.getElementById('petEspecie').textContent   = pet.especie;
document.getElementById('petIdade').textContent     = pet.idade;
document.getElementById('petLocalizacao').textContent = pet.localizacao;
document.getElementById('petContato').textContent   = pet.contato || 'Não informado';
document.getElementById('petSexo').textContent      = pet.sexo;
document.getElementById('petCastrado').textContent  = pet.castrado;
document.getElementById('petVacinas').textContent   = pet.historicoVac;
document.getElementById('petEnergia').textContent   = pet.nivelEnergia;
document.getElementById('petCriancas').textContent  = pet.conviveCriancas;
document.getElementById('petAnimais').textContent   = pet.conviveAnimais;
document.getElementById('petComportamento').textContent = pet.comportamento;
document.getElementById('petObservacoes').textContent   = pet.observacoes;

