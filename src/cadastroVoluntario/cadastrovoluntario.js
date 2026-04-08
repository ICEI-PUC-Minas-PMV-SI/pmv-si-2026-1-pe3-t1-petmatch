document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-ong");
  const fotoVoluntarioInput = document.getElementById('fotoVoluntarioInput');
  const imagePreview = document.getElementById('imagePreview');
  const fileUploadVisual = document.querySelector('.file-upload-visual');
  const removeImageButton = document.getElementById('removeImageButton');
  const cpfInput = document.getElementById('cpfInput');

  // Preview da foto
  if (fotoVoluntarioInput) {
    fotoVoluntarioInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = ev => {
          imagePreview.src = ev.target.result;
          imagePreview.style.display = 'block';
          fileUploadVisual.style.display = 'none';
          removeImageButton.style.display = 'block';
        };
        reader.readAsDataURL(file);
      } else {
        clearImagePreview();
      }
    });
  }

  if (removeImageButton) {
    removeImageButton.addEventListener('click', clearImagePreview);
  }

  function clearImagePreview() {
    imagePreview.src = '#';
    imagePreview.style.display = 'none';
    fileUploadVisual.style.display = 'flex';
    removeImageButton.style.display = 'none';
    fotoVoluntarioInput.value = '';
  }

  // Máscara de CPF
  if (cpfInput) {
    cpfInput.addEventListener('input', function (e) {
      let v = e.target.value.replace(/\D/g, '').slice(0, 11);
      v = v.replace(/^(\d{3})(\d)/, '$1.$2');
      v = v.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
      v = v.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/, '$1.$2.$3-$4');
      e.target.value = v;
    });
  }

  // Submit do formulário
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']");
      const nome = inputs[0].value.trim();
      const email = inputs[1].value.trim();
      const telefone = inputs[2].value.trim();
      const cep = inputs[3].value.trim();
      const endereco = inputs[4].value.trim();
      const cpf = cpfInput ? cpfInput.value.trim() : '';
      const cidade = inputs[6].value.trim();
      const experiencia = form.querySelector("input[name='experiencia']:checked")?.value || "Não informado";
      const missao = form.querySelector("input[placeholder='Descreva sua missão']")?.value.trim() || '';

      if (!nome || !email || !telefone || !cep || !endereco || !cpf || !cidade || !missao) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      const voluntario = { nome, email, telefone, cep, endereco, cpf, cidade, experiencia, missao };

      // Salva no localStorage
      const lista = JSON.parse(localStorage.getItem("voluntariosPetMatch")) || [];
      lista.push(voluntario);
      localStorage.setItem("voluntariosPetMatch", JSON.stringify(lista));

      alert("Cadastro de voluntário realizado com sucesso!");
      form.reset();
      clearImagePreview();
      window.location.href = "../home/home.html";
    });
  }
});
