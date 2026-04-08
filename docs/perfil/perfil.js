import { getAllPets } from '../cadastro_login_catalogo/shared-pets.js';

document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuario) {
    if (window.Toast) Toast.warning("Você precisa estar logado para acessar essa página.");
    setTimeout(() => { window.location.href = "../cadastro_login_catalogo/login.html"; }, 1200);
    return;
  }

  // Preenche avatar com inicial do nome
  const avatarEl = document.getElementById("profileAvatar");
  if (avatarEl && usuario.nome) {
    avatarEl.textContent = usuario.nome.charAt(0).toUpperCase();
  }
  const avatarNameEl = document.getElementById("profileName");
  if (avatarNameEl) avatarNameEl.textContent = usuario.nome || "";
  const avatarEmailEl = document.getElementById("profileEmail");
  if (avatarEmailEl) avatarEmailEl.textContent = usuario.email || "";

  // Preenche campos do formulário
  document.getElementById("nome").value     = usuario.nome     || "";
  document.getElementById("email").value    = usuario.email    || "";
  document.getElementById("telefone").value = usuario.telefone || "";
  document.getElementById("idade").value    = usuario.idade    || "";

  // Atualiza dados ao confirmar
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome     = document.getElementById("nome").value.trim();
    const email    = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const idade    = document.getElementById("idade").value.trim();

    if (!nome || !email || !telefone || !idade) {
      if (window.Toast) Toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    const novoUsuario = { ...usuario, nome, email, telefone, idade };
    localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario));

    const lista = JSON.parse(localStorage.getItem("usuariosPetMatch")) || [];
    const index = lista.findIndex(u => u.email === usuario.email);
    if (index !== -1) {
      lista[index] = novoUsuario;
      localStorage.setItem("usuariosPetMatch", JSON.stringify(lista));
    }

    // Atualiza avatar sem recarregar
    if (avatarEl) avatarEl.textContent = nome.charAt(0).toUpperCase();
    if (avatarNameEl) avatarNameEl.textContent = nome;
    if (avatarEmailEl) avatarEmailEl.textContent = email;

    if (window.Toast) Toast.success("Dados atualizados com sucesso!");
  });

  renderizarFavoritos();

  // Event listener delegado para botão de remover favorito
  const favoritosContainer = document.getElementById("favoritos-container");
  favoritosContainer.addEventListener('click', e => {
    const btn = e.target.closest('.remove-favorite-button');
    if (!btn) return;
    const petId = btn.dataset.petId;
    let ids = JSON.parse(localStorage.getItem("favoritosPetMatch")) || [];
    ids = ids.filter(id => id !== petId);
    localStorage.setItem("favoritosPetMatch", JSON.stringify(ids));
    renderizarFavoritos();
    if (window.Toast) Toast.info("Pet removido dos favoritos.");
  });
});

function renderizarFavoritos() {
  const container = document.getElementById("favoritos-container");
  if (!container) return;
  container.innerHTML = "";

  const favoritosIds = JSON.parse(localStorage.getItem("favoritosPetMatch")) || [];
  const allPets = getAllPets();
  const favoritos = favoritosIds.map(id => allPets.find(p => p.id === id)).filter(Boolean);

  if (favoritos.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <span class="empty-icon">🐾</span>
        <h3>Nenhum favorito ainda</h3>
        <p>Explore o catálogo e favorite os pets que te interessam!</p>
        <a href="../cadastro_login_catalogo/catalogo.html" class="btn-primary" style="margin-top:16px;display:inline-block;padding:11px 28px;">Ver catálogo</a>
      </div>`;
    return;
  }

  favoritos.forEach(pet => {
    const card = document.createElement("div");
    card.className = "pet-card";
    card.innerHTML = `
      <div class="pet-image">
        <img src="../cadastro_login_catalogo/${pet.foto || 'placeholder.png'}" alt="${pet.nome}" loading="lazy" />
      </div>
      <div class="pet-info" style="padding:12px 14px 4px;">
        <div class="pet-name">${pet.nome} <span style="color:${pet.sexo==='Macho'?'#3c7e7a':'#e07a8c'};font-size:13px;">${pet.sexo==='Macho'?'♂':'♀'}</span></div>
        <div class="pet-location">📍 ${pet.localizacao || ''}</div>
      </div>
      <button class="adopt-button"
              onclick="window.location.href='../cadastro_login_catalogo/pet-detalhes.html?id=${encodeURIComponent(pet.id)}'">
        Quero adotar
      </button>
      <button class="remove-favorite-button" data-pet-id="${pet.id}">
        ♡ Remover favorito
      </button>`;
    container.appendChild(card);
  });
}
