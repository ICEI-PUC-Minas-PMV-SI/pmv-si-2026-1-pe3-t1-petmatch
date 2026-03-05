// cadastro-ong.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-ong");
  const fotoInput = document.getElementById("fotoOngInput");
  const imagePreview = document.getElementById("imagePreview");
  const removeImageButton = document.getElementById("removeImageButton");

  if (!form) return;

  // Função utilitária para converter imagem em Base64
  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  // Preview da imagem
  fotoInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = "block";
        removeImageButton.style.display = "inline-block";
        document.querySelector(".file-upload-visual").style.display = "none";
      };
      reader.readAsDataURL(file);
    }
  });

  removeImageButton.addEventListener("click", () => {
    fotoInput.value = "";
    imagePreview.src = "";
    imagePreview.style.display = "none";
    removeImageButton.style.display = "none";
    document.querySelector(".file-upload-visual").style.display = "flex";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Coleta os valores
    const data = {
      nome: document.getElementById("nome").value.trim(),
      email: document.getElementById("email").value.trim(),
      telefone: document.getElementById("telefone").value.trim(),
      cep: document.getElementById("cep").value.trim(),
      endereco: document.getElementById("endereco").value.trim(),
      cnpj: document.getElementById("cnpjInput").value.trim(),
      cidade: document.getElementById("cidade").value.trim(),
      missao: document.getElementById("missao").value.trim(),
      responsavel: document.getElementById("responsavel").value.trim(),
      telefoneResponsavel: document.getElementById("telefoneResponsavel").value.trim(),
      voluntario: form.querySelector('input[name="voluntario"]:checked')?.value || "",
      registrada: form.querySelector('input[name="registrada"]:checked')?.value || "",
      imagem: ""
    };

    // Validação dos campos obrigatórios
    for (const key in data) {
      if (key !== "imagem" && data[key] === "") {
        alert(`Por favor, preencha o campo: ${key}`);
        return;
      }
    }

    if (!document.getElementById("aceitaTermos").checked) {
      alert("Você precisa concordar com os termos");
      return;
    }

    // Processa imagem (agora obrigatória)
    if (fotoInput.files.length > 0) {
      try {
        data.imagem = await toBase64(fotoInput.files[0]);
      } catch (err) {
        console.error("Erro ao converter imagem:", err);
        alert("Erro ao processar a imagem. Por favor, tente novamente.");
        return;
      }
    } else {
      alert("É necessário anexar uma imagem da ONG.");
      return;
    }

    // Salva no localStorage
    const ongs = JSON.parse(localStorage.getItem("ongsPetMatch")) || [];
    ongs.push(data);
    localStorage.setItem("ongsPetMatch", JSON.stringify(ongs));

    alert("ONG cadastrada com sucesso!");
    window.location.href = "../pagina protetores/protetores.html";
  });

  // Corrige links do menu se necessário
  document.querySelectorAll("a").forEach((link) => {
    const text = link.textContent.trim().toLowerCase();
    if (text === "blog") {
      link.setAttribute("href", "../blog/blog.html");
    } else if (text === "quero adotar") {
      link.setAttribute("href", "../cadastro_login_catalogo/catalogo.html");
    }
  });
});
