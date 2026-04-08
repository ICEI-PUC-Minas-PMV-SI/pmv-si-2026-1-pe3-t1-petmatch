document.addEventListener("DOMContentLoaded", () => {
  const cadastroForm = document.querySelector(".formulario");
  const loginForm    = document.getElementById("loginForm");

  function toast(msg, type = 'error') {
    if (window.Toast) { window.Toast[type](msg); } else { alert(msg); }
  }

  function salvarUsuario(usuario) {
    const lista = JSON.parse(localStorage.getItem("usuariosPetMatch")) || [];
    lista.push(usuario);
    localStorage.setItem("usuariosPetMatch", JSON.stringify(lista));
  }

  // CADASTRO
  if (cadastroForm) {
    cadastroForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = cadastroForm.querySelectorAll("input[type='text'], input[type='tel'], input[type='email'], input[type='password'], input[type='number']");
      const nome           = inputs[0]?.value.trim();
      const telefone       = inputs[1]?.value.trim();
      const email          = inputs[2]?.value.trim();
      const senha          = inputs[3]?.value.trim();
      const confirmarSenha = inputs[4]?.value.trim();
      const idade          = inputs[5]?.value.trim();

      if (!nome || !telefone || !email || !senha || !confirmarSenha || !idade) {
        toast("Preencha todos os campos obrigatórios.", "error"); return;
      }
      if (senha !== confirmarSenha) {
        toast("As senhas não coincidem.", "error"); return;
      }
      if (senha.length < 6) {
        toast("A senha deve ter pelo menos 6 caracteres.", "error"); return;
      }

      const lista = JSON.parse(localStorage.getItem("usuariosPetMatch")) || [];
      if (lista.some(u => u.email === email)) {
        toast("Este e-mail já está cadastrado.", "warning"); return;
      }

      const usuario = { nome, telefone, email, senha, idade };
      salvarUsuario(usuario);
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

      toast("Cadastro realizado com sucesso! Redirecionando…", "success");
      setTimeout(() => { window.location.href = "../home/usuariologado.html"; }, 1500);
    });
  }

  // LOGIN
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailEl = document.getElementById("email");
      const senhaEl = document.getElementById("senha");

      // Limpa erros anteriores
      ["field-email", "field-senha"].forEach(id => {
        document.getElementById(id)?.classList.remove("error");
      });

      const email = emailEl?.value.trim();
      const senha = senhaEl?.value.trim();

      if (!email) {
        document.getElementById("field-email")?.classList.add("error");
        document.getElementById("err-email").hidden = false;
        return;
      }
      if (!senha) {
        document.getElementById("field-senha")?.classList.add("error");
        document.getElementById("err-senha").hidden = false;
        return;
      }

      const lista = JSON.parse(localStorage.getItem("usuariosPetMatch")) || [];
      const usuario = lista.find(u => u.email === email && u.senha === senha);

      if (usuario) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        toast(`Bem-vindo de volta, ${usuario.nome}!`, "success");
        setTimeout(() => { window.location.href = "../home/usuariologado.html"; }, 1000);
      } else {
        toast("E-mail ou senha incorretos.", "error");
        document.getElementById("field-email")?.classList.add("error");
        document.getElementById("field-senha")?.classList.add("error");
      }
    });
  }
});
