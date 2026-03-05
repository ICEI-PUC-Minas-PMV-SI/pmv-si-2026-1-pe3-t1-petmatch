document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuario) {
    alert("Você precisa estar logado para acessar essa página.");
    window.location.href = "../cadastro_login_catalogo/login.html";
    return;
  }

  // Preenche os campos com os dados do usuário
  document.getElementById("nome").value = usuario.nome || "";
  document.getElementById("email").value = usuario.email || "";
  document.getElementById("telefone").value = usuario.telefone || "";
  document.getElementById("idade").value = usuario.idade || "";

  // Atualiza os dados ao confirmar
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const idade = document.getElementById("idade").value.trim();

    if (!nome || !email || !telefone || !idade) {
      alert("Preencha todos os campos.");
      return;
    }

    const novoUsuario = { ...usuario, nome, email, telefone, idade };

    // Atualiza no localStorage
    localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario));

    // Atualiza também na lista geral de usuários
    const lista = JSON.parse(localStorage.getItem("usuariosPetMatch")) || [];
    const index = lista.findIndex((u) => u.email === usuario.email);
    if (index !== -1) {
      lista[index] = novoUsuario;
      localStorage.setItem("usuariosPetMatch", JSON.stringify(lista));
    }
    alert("Dados atualizados com sucesso!");
  });

  const favoritosContainer = document.getElementById("favoritos-container");

  function renderizarFavoritos() {
    favoritosContainer.innerHTML = ""; // Limpa os cards existentes
    // Corrigido: busca os ids dos favoritos na chave correta
    const favoritosIds = JSON.parse(localStorage.getItem("favoritosPetMatch")) || [];
    // Busca todos os pets cadastrados
    const pets = (JSON.parse(localStorage.getItem("petsPetMatch")) || []).concat(
      [
        { id: 'ex1', nome: 'Bolt', sexo: 'Macho', foto: 'bolt.jpg', especie: 'Cachorro', idade: '2', porte: 'Médio', localizacao: 'Rio de Janeiro', nivelEnergia: 'Alta', conviveCriancas: 'Sim', conviveAnimais: 'Sim', castrado: 'Sim', historicoVac: 'V8, V9', comportamento: 'Brincalhão', observacoes: '' },
        { id: 'ex2', nome: 'Mia', sexo: 'Fêmea', foto: 'mia.jpg', especie: 'Gato', idade: '1', porte: 'Pequeno', localizacao: 'São Paulo', nivelEnergia: 'Média', conviveCriancas: 'Não', conviveAnimais: 'Sim', castrado: 'Não', historicoVac: 'V7', comportamento: 'Calma', observacoes: '' },
        { id: 'ex3', nome: 'Luna', sexo: 'Fêmea', foto: 'luna.jpg', especie: 'Gato', idade: '3', porte: 'Pequeno', localizacao: 'Belo Horizonte', nivelEnergia: 'Baixa', conviveCriancas: 'Sim', conviveAnimais: 'Não', castrado: 'Sim', historicoVac: 'V8', comportamento: 'Dorminhoca', observacoes: '' }
      ]
    );
    const favoritos = favoritosIds.map(id => pets.find(p => p.id === id)).filter(Boolean);

    if (favoritos.length === 0) {
      favoritosContainer.innerHTML = "<p>Você ainda não favoritou nenhum pet.</p>";
    } else {
      favoritos.forEach((pet, index) => {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");
        const petIdentifier = pet.id || pet.nome || index;
        petCard.innerHTML = `
          <div class="pet-image">
            <img src="${pet.foto || pet.imagem || 'animalteste.jpg'}" alt="${pet.nome}">
          </div>
          <div class="pet-icons">
            <img class="icon gender" src="${getGenderIcon(pet.sexo)}" alt="${pet.sexo}">
            <img class="icon favorite" src="favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 16.png" alt="Favorito">
          </div>
          <div class="pet-info">
            <div class="pet-name">${pet.nome}</div>
            <div class="pet-location">${pet.localizacao}</div>
          </div>
          <button class="adopt-button" onclick="window.location.href='../cadastro_login_catalogo/pet-detalhes.html?id=${encodeURIComponent(pet.id)}'">Quero adotar</button>
          <button class="remove-favorite-button" data-pet-identifier="${petIdentifier}">Remover Favorito</button>
        `;
        favoritosContainer.appendChild(petCard);
      });
    }
  }

  // Event listener para botões de remover (delegação de evento)
  favoritosContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-favorite-button')) {
      const petIdentifierToRemove = event.target.getAttribute('data-pet-identifier');
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
      
      // Filtra o array para remover o pet.
      // Esta lógica de filtro pode precisar ser ajustada dependendo se você usa id, nome ou índice.
      favoritos = favoritos.filter((pet, index) => {
        const currentPetIdentifier = pet.id || pet.nome || index;
        return currentPetIdentifier.toString() !== petIdentifierToRemove.toString();
      });
      
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      renderizarFavoritos(); // Re-renderiza a lista de favoritos
    }
  });

  renderizarFavoritos(); // Chama a função para carregar os favoritos inicialmente
});

function getGenderIcon(gender) {
  if (gender && gender.toLowerCase() === 'fêmea') {
    return 'female-24-dp-e-3-e-3-e-3-fill-0-wght-400-grad-0-opsz-24-40.svg';
  } else if (gender && gender.toLowerCase() === 'macho') {
    return 'male-24-dp-e-3-e-3-e-3-fill-0-wght-400-grad-0-opsz-24-90.svg';
  }
  return '../assets/icons/default-gender-placeholder.svg'; 
}

