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

document.addEventListener('DOMContentLoaded', loadProjects);
