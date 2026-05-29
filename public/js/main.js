// Language switcher
function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Re-render projects if already loaded (translate loading/error states)
  const grid = document.getElementById('projectsGrid');
  if (grid && grid.querySelector('.portfolio__loading')) {
    grid.querySelector('.portfolio__loading span').textContent = t.portfolio_loading;
  }
}

document.getElementById('langSwitcher').addEventListener('click', e => {
  const btn = e.target.closest('.lang-btn');
  if (btn) applyLang(btn.dataset.lang);
});

// Apply saved or browser language on load
const savedLang = localStorage.getItem('lang');
const browserLang = navigator.language.slice(0, 2);
const defaultLang = savedLang || (['es','ca','en'].includes(browserLang) ? browserLang : 'es');

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const navBurger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');
navBurger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

function renderProjectCard(project) {
  const techTags = (project.technologies || []).map(t => `<span>${t}</span>`).join('');

  const imageHtml = project.image
    ? `<img class="project-card__image" src="${project.image}" alt="${project.name}" loading="lazy"
         onerror="this.outerHTML='<div class=\\'project-card__image-placeholder\\'><i class=\\'fas fa-code\\'></i></div>'">`
    : `<div class="project-card__image-placeholder"><i class="fas fa-code"></i></div>`;

  const githubLink = project.github
    ? `<a href="${project.github}" target="_blank" rel="noopener" class="project-card__link">
         <i class="fab fa-github"></i> GitHub
       </a>`
    : '';

  const liveLink = project.live
    ? `<a href="${project.live}" target="_blank" rel="noopener" class="project-card__link">
         <i class="fas fa-external-link-alt"></i> Ver live
       </a>`
    : '';

  return `
    <div class="project-card">
      ${imageHtml}
      <div class="project-card__body">
        <h3 class="project-card__name">${project.name}</h3>
        <p class="project-card__desc">${project.description}</p>
        <div class="project-card__tags">${techTags}</div>
        ${(githubLink || liveLink) ? `<div class="project-card__links">${githubLink}${liveLink}</div>` : ''}
      </div>
    </div>
  `;
}

async function loadProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  try {
    const res = await fetch('/api/projects');
    const projects = await res.json();
    if (!projects.length) {
      grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--color-text-light);padding:40px">No hay proyectos publicados aún.</p>';
      return;
    }
    grid.innerHTML = projects.map(renderProjectCard).join('');
  } catch {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--color-text-light);padding:40px">Error al cargar proyectos.</p>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  if (defaultLang !== 'es') applyLang(defaultLang);
  else applyLang('es');
});
