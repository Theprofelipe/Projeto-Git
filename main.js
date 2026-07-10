// ===== ANO NO RODAPÉ =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== MENU MOBILE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== NAVBAR COM SOMBRA AO ROLAR =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 10);
  });
}

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
}

// ===== EFEITO DE DIGITAÇÃO NO TERMINAL =====
const typedLine = document.getElementById('typedLine');
if (typedLine) {
  const phrases = [
    'npm run build-carreira',
    'git commit -m "sempre aprendendo"',
    'console.log("vamos criar algo?")',
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      typedLine.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      charIndex--;
      typedLine.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(typeLoop, deleting ? 35 : 65);
  }
  typeLoop();
}

// ===== BARRAS DE HABILIDADE ANIMADAS =====
const skillBars = document.querySelectorAll('.bar__fill');
if (skillBars.length) {
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          fill.style.width = fill.dataset.value + '%';
          barObserver.unobserve(fill);
        }
      });
    },
    { threshold: 0.4 }
  );
  skillBars.forEach((bar) => barObserver.observe(bar));
}

// ===== PROJETOS (comentado até serem preenchidos) =====
// const projects = [
//   {
//     title: 'Nome do projeto',
//     description: 'Breve descrição do que o projeto faz.',
//     stack: ['HTML', 'CSS', 'JavaScript'],
//     link: 'https://github.com/Theprofelipe/seu-projeto',
//   },
// ];
//
// const projectsGrid = document.getElementById('projectsGrid');
// if (projectsGrid && typeof projects !== 'undefined') {
//   projectsGrid.innerHTML = projects
//     .map(
//       (p) => `
//         <article class="project-card">
//           <h3>${p.title}</h3>
//           <p>${p.description}</p>
//           <div class="pill-group">
//             ${p.stack.map((s) => `<span class="pill">${s}</span>`).join('')}
//           </div>
//           <a href="${p.link}" target="_blank" rel="noopener" class="btn btn--ghost">Ver projeto</a>
//         </article>
//       `
//     )
//     .join('');
// }

// ===== CONTADOR DE ESTATÍSTICAS =====
const statNumbers = document.querySelectorAll('.stat__number');
if (statNumbers.length) {
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10) || 0;
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 60));
          const tick = () => {
            current = Math.min(target, current + step);
            el.textContent = current;
            if (current < target) requestAnimationFrame(tick);
          };
          tick();
          statObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  statNumbers.forEach((el) => statObserver.observe(el));
}

// ===== FORMULÁRIO DE CONTATO =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Hoje o formulário só dá feedback visual — não envia e-mail de verdade.
    // Para receber mensagens de fato, integre Formspree, EmailJS ou uma
    // função serverless da Vercel aqui.
    status.textContent = 'Mensagem registrada! Em breve integraremos o envio real.';
    status.classList.add('is-success');
    form.reset();
    setTimeout(() => {
      status.textContent = '';
      status.classList.remove('is-success');
    }, 5000);
  });
}
initContactForm();

// ===== BOTÃO VOLTAR AO TOPO =====
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 400);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
