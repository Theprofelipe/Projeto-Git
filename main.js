(() => {
  'use strict';

  // ---------- footer year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- mobile nav toggle ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- contact form ----------
  // Envia a mensagem direto para o WhatsApp, já preenchida.
  // Para receber por email em vez disso, troque este bloco por um
  // serviço como Formspree (https://formspree.io) ou EmailJS.
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();

      const texto = `Olá, Felipe! Meu nome é ${nome} (${email}).\n\n${mensagem}`;
      const url = `https://wa.me/5511989954030?text=${encodeURIComponent(texto)}`;

      window.open(url, '_blank', 'noopener');
      form.reset();
    });
  }
})();
