// protetores.js

window.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".cards");

  // Limpa qualquer conteúdo anterior
  cardsContainer.innerHTML = "";

  // Cria o modal no DOM
  const modal = document.createElement("div");
  modal.className = "modal hidden";
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <div class="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalBody = modal.querySelector(".modal-body");

  // Recupera ONGs do localStorage
  const ongs = JSON.parse(localStorage.getItem("ongsPetMatch")) || [];

  if (ongs.length === 0) {
    cardsContainer.innerHTML = '<p style="font-size: 18px;">Nenhuma ONG cadastrada até o momento.</p>';
    return;
  }

  // Renderiza dinamicamente os cards de ONGs
  ongs.forEach((ong, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = ong.imagem;
    img.alt = ong.nome || "Imagem da ONG";

    const title = document.createElement("h3");
    title.textContent = ong.nome || "Nome não informado";

    const button = document.createElement("button");
    button.className = "btn-localizacao";
    button.dataset.index = index;
    button.innerHTML = 'ONDE ESTAMOS? <img src="vector0.svg" alt="Seta">';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(button);
    cardsContainer.appendChild(card);
  });

  // Evento: abrir modal ao clicar em "ONDE ESTAMOS?"
  cardsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-localizacao");
    if (!btn) return;

    const index = btn.dataset.index;
    const ong = ongs[index];
    if (!ong) return;

    modalBody.innerHTML = `
      <h2>${ong.nome || "Sem nome"}</h2>
      <p><strong>Email:</strong> ${ong.email || "Não informado"}</p>
      <p><strong>Telefone:</strong> ${ong.telefone || "Não informado"}</p>
      <p><strong>Cidade:</strong> ${ong.cidade || "Não informado"}</p>
      <p><strong>Endereço:</strong> ${ong.endereco || "Não informado"}</p>
      <p><strong>CNPJ:</strong> ${ong.cnpj || "Não informado"}</p>
      <p><strong>Missão:</strong> ${ong.missao || "Não informada"}</p>
    `;

    modal.classList.remove("hidden");
  });

  // Evento: fechar modal ao clicar fora ou no botão fechar
  document.body.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal-overlay") ||
      e.target.classList.contains("modal-close")
    ) {
      modal.classList.add("hidden");
    }
  });

  // Corrige rotas dos links do menu se necessário
  document.querySelectorAll("a").forEach(link => {
    const texto = link.textContent.trim().toLowerCase();
    if (texto === "blog") {
      link.href = "../blog/blog.html";
    } else if (texto === "quero adotar") {
      link.href = "../cadastro_login_catalogo/catalogo.html";
    }
  });
});
