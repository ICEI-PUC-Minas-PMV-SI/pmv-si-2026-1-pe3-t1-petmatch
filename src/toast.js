/**
 * toast.js — PetMatch
 * Sistema de notificações via Toast.
 * Uso: Toast.success('Salvo!') | Toast.error('Erro') | Toast.info('Msg') | Toast.warning('Cuidado')
 */

const Toast = (() => {
  let container = null;

  function getContainer() {
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    return container;
  }

  function show(message, type = 'info', duration = 3500) {
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    const c = getContainer();

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
      <span class="toast-msg">${message}</span>
    `;

    c.appendChild(toast);

    function dismiss() {
      toast.classList.add('out');
      setTimeout(() => toast.remove(), 280);
    }

    toast.addEventListener('click', dismiss);
    setTimeout(dismiss, duration);

    return toast;
  }

  return {
    success: (msg, dur) => show(msg, 'success', dur),
    error:   (msg, dur) => show(msg, 'error',   dur),
    info:    (msg, dur) => show(msg, 'info',     dur),
    warning: (msg, dur) => show(msg, 'warning',  dur),
  };
})();

window.Toast = Toast;
