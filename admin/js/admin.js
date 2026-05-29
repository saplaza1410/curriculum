const loginView = document.getElementById('loginView');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const newProjectBtn = document.getElementById('newProjectBtn');
const cancelFormBtn = document.getElementById('cancelFormBtn');
const projectListSection = document.getElementById('projectListSection');
const projectFormSection = document.getElementById('projectFormSection');
const projectForm = document.getElementById('projectForm');
const formTitle = document.getElementById('formTitle');
const projectList = document.getElementById('projectList');

// Auth
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  loginBtn.disabled = true;
  loginError.classList.add('hidden');
  const password = document.getElementById('password').value;
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password })
  });
  if (res.ok) {
    showDashboard();
  } else {
    loginError.classList.remove('hidden');
    loginBtn.disabled = false;
  }
});

logoutBtn.addEventListener('click', async () => {
  await fetch('/api/auth/logout', { method: 'POST' });
  showLogin();
});

function showLogin() {
  dashboard.classList.add('hidden');
  loginView.classList.remove('hidden');
  document.getElementById('password').value = '';
}

function showDashboard() {
  loginView.classList.add('hidden');
  dashboard.classList.remove('hidden');
  loadProjects();
}

// Projects list
async function loadProjects() {
  const res = await fetch('/api/projects/all');
  if (res.status === 401) { showLogin(); return; }
  renderProjectList(await res.json());
}

function renderProjectList(projects) {
  if (!projects.length) {
    projectList.innerHTML = '<div class="loading-state">No hay proyectos aún. ¡Crea el primero!</div>';
    return;
  }
  projectList.innerHTML = projects.map(p => `
    <div class="project-row" data-id="${p.id}">
      ${p.image
        ? `<img class="project-row__img" src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">`
        : `<div class="project-row__img"></div>`}
      <div class="project-row__info">
        <div class="project-row__name">${p.name}</div>
        <div class="project-row__tech">${(p.technologies || []).join(', ')}</div>
      </div>
      <span class="project-row__badge ${p.visible ? 'project-row__badge--visible' : 'project-row__badge--hidden'}">
        ${p.visible ? 'Visible' : 'Oculto'}
      </span>
      <div class="project-row__actions">
        <button class="btn-admin btn-admin--outline" onclick="editProject('${p.id}')">
          <i class="fas fa-edit"></i> Editar
        </button>
        <button class="btn-admin btn-admin--outline-danger" onclick="deleteProject('${p.id}', '${p.name.replace(/'/g, "\\'")}')">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// New project
newProjectBtn.addEventListener('click', () => {
  projectForm.reset();
  document.getElementById('projectId').value = '';
  document.getElementById('projectVisible').checked = true;
  formTitle.textContent = 'Nuevo proyecto';
  showFormSection();
});

// Edit project
async function editProject(id) {
  const res = await fetch('/api/projects/all');
  const projects = await res.json();
  const p = projects.find(x => x.id === id);
  if (!p) return;
  document.getElementById('projectId').value = p.id;
  document.getElementById('projectName').value = p.name;
  document.getElementById('projectDesc').value = p.description;
  document.getElementById('projectTech').value = (p.technologies || []).join(', ');
  document.getElementById('projectImage').value = p.image || '';
  document.getElementById('projectGithub').value = p.github || '';
  document.getElementById('projectLive').value = p.live || '';
  document.getElementById('projectVisible').checked = p.visible;
  formTitle.textContent = 'Editar proyecto';
  showFormSection();
}
window.editProject = editProject;

// Save project
projectForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const saveBtn = document.getElementById('saveBtn');
  saveBtn.disabled = true;
  const id = document.getElementById('projectId').value;
  const payload = {
    name: document.getElementById('projectName').value,
    description: document.getElementById('projectDesc').value,
    technologies: document.getElementById('projectTech').value,
    image: document.getElementById('projectImage').value,
    github: document.getElementById('projectGithub').value,
    live: document.getElementById('projectLive').value,
    visible: document.getElementById('projectVisible').checked
  };
  const res = await fetch(id ? `/api/projects/${id}` : '/api/projects', {
    method: id ? 'PUT' : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (res.ok) {
    showListSection();
    loadProjects();
  } else {
    alert('Error al guardar. Inténtalo de nuevo.');
  }
  saveBtn.disabled = false;
});

// Delete project
async function deleteProject(id, name) {
  if (!confirm(`¿Eliminar "${name}"? Esta acción no se puede deshacer.`)) return;
  const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
  if (res.ok) loadProjects();
  else alert('Error al eliminar.');
}
window.deleteProject = deleteProject;

// Navigation
cancelFormBtn.addEventListener('click', () => { showListSection(); loadProjects(); });
function showFormSection() { projectListSection.classList.add('hidden'); projectFormSection.classList.remove('hidden'); }
function showListSection() { projectFormSection.classList.add('hidden'); projectListSection.classList.remove('hidden'); }

// Check session on load
(async function init() {
  const res = await fetch('/api/projects/all');
  if (res.ok) showDashboard();
})();
