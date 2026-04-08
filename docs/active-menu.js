/**
 * active-menu.js — PetMatch
 * Gerencia: autenticação no header, menu hamburger mobile, link ativo.
 */

/* ---- Logout global ---- */
function logout() {
  localStorage.removeItem('usuarioLogado');
  showToast('Até logo! Você saiu com sucesso.', 'info');
  setTimeout(() => { window.location.href = '../cadastro_login_catalogo/login.html'; }, 900);
}

/* ---- Toast helper (usa toast.js se carregado, senão fallback simples) ---- */
function showToast(msg, type = 'info') {
  if (window.Toast) { window.Toast[type]?.(msg) || window.Toast.info(msg); return; }
  const c = document.querySelector('.toast-container') || (() => {
    const el = document.createElement('div');
    el.className = 'toast-container';
    document.body.appendChild(el);
    return el;
  })();
  const t = document.createElement('div');
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  t.className = `toast ${type}`;
  t.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ️'}</span><span class="toast-msg">${msg}</span>`;
  c.appendChild(t);
  t.addEventListener('click', () => t.classList.add('out'));
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 300); }, 3500);
}

document.addEventListener('DOMContentLoaded', function () {

  /* ======================================================
     1. LINK ATIVO NO MENU
  ====================================================== */
  try {
    const current = window.location.pathname.split('/').pop();
    if (current) {
      document.querySelectorAll('.menu-links a, .dropdown-content a').forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href.endsWith(current)) {
          link.classList.add('menu-link-active');
        } else {
          link.classList.remove('menu-link-active');
        }
      });
    }
  } catch (e) { /* silencioso */ }

  /* ======================================================
     2. INJEÇÃO DO MENU DO USUÁRIO
  ====================================================== */
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') || 'null');
  const menuEl = document.querySelector('.menu-usuario');

  if (menuEl) {
    if (usuarioLogado?.nome) {
      menuEl.innerHTML = `
        <span class="nome-usuario">Olá, ${usuarioLogado.nome.split(' ')[0]}!</span>
        <button class="btn-primary btn-perfil" onclick="location.href='../perfil/perfil.html'">Meu Perfil</button>
        <button class="btn-sair" onclick="logout()">Sair</button>
      `;
    } else {
      menuEl.innerHTML = `
        <a href="../cadastro_login_catalogo/login.html"    class="btn-entrar">Entrar</a>
        <a href="../cadastro_login_catalogo/cadastro.html" class="btn-primary btn-cadastro">Cadastre-se</a>
      `;
    }
  }

  /* ======================================================
     3. REDIRECIONAMENTO (página logada sem sessão)
  ====================================================== */
  if (window.location.pathname.includes('usuariologado.html') && !usuarioLogado) {
    window.location.href = '../cadastro_login_catalogo/login.html';
  }

  /* ======================================================
     4. HAMBURGER MENU MOBILE
  ====================================================== */
  const headerContainer = document.querySelector('.header-container');
  if (!headerContainer) return;

  /* Cria o botão hamburger */
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.setAttribute('aria-label', 'Abrir menu');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  headerContainer.appendChild(hamburger);

  /* Cria a navegação mobile */
  const mobileNav = document.createElement('nav');
  mobileNav.className = 'mobile-nav';
  mobileNav.setAttribute('aria-label', 'Menu mobile');

  const links = [
    { href: '../cadastro_login_catalogo/catalogo.html', label: '🐾 Quero adotar' },
    { href: '../cadastroOng/cadastroong.html',           label: '🏠 Cadastrar uma ONG' },
    { href: '../cadastroVoluntario/cadastrovoluntario.html', label: '🤝 Me voluntariar' },
    { href: '../blog/blog.html',                         label: '📝 Blog' },
    { href: '../protetores/protetores.html',             label: '🛡️ Protetores' },
    { href: '../sobreNos/sobre.html',                   label: 'ℹ️ Sobre nós' },
  ];

  links.forEach(l => {
    const a = document.createElement('a');
    a.href = l.href;
    a.textContent = l.label;
    mobileNav.appendChild(a);
  });

  const divider = document.createElement('div');
  divider.className = 'mobile-divider';
  mobileNav.appendChild(divider);

  const actions = document.createElement('div');
  actions.className = 'mobile-actions';
  if (usuarioLogado?.nome) {
    actions.innerHTML = `
      <a href="../perfil/perfil.html" class="btn-primary" style="padding:12px 24px;text-align:center;border-radius:100px;">Meu Perfil</a>
      <button class="btn-sair" style="width:100%;padding:12px 24px;" onclick="logout()">Sair</button>
    `;
  } else {
    actions.innerHTML = `
      <a href="../cadastro_login_catalogo/login.html"    class="btn-entrar" style="padding:12px 24px;text-align:center;border-radius:100px;">Entrar</a>
      <a href="../cadastro_login_catalogo/cadastro.html" class="btn-primary" style="padding:12px 24px;text-align:center;border-radius:100px;">Cadastre-se</a>
    `;
  }
  mobileNav.appendChild(actions);
  document.body.appendChild(mobileNav);

  /* Toggle */
  function toggleMenu(open) {
    hamburger.classList.toggle('open', open);
    mobileNav.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleMenu(!mobileNav.classList.contains('open')));

  /* Fechar ao clicar fora */
  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('open') &&
        !mobileNav.contains(e.target) &&
        !hamburger.contains(e.target)) {
      toggleMenu(false);
    }
  });

  /* Fechar ao navegar para link */
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => toggleMenu(false));
  });

  /* Fechar ao pressionar Escape */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) toggleMenu(false);
  });

  /* ======================================================
     5. SCROLL REVEAL
  ====================================================== */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

});
