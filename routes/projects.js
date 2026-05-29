const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const requireAuth = require('../middleware/requireAuth');

const DATA_FILE = path.join(__dirname, '../data/projects.json');

const readProjects = () => {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return [];
  }
};

const writeProjects = (projects) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2));
};

router.get('/', (req, res) => {
  res.json(readProjects().filter(p => p.visible));
});

router.get('/all', requireAuth, (req, res) => {
  res.json(readProjects());
});

router.post('/', requireAuth, (req, res) => {
  const projects = readProjects();
  const project = {
    id: uuidv4(),
    name: req.body.name || '',
    description: req.body.description || '',
    technologies: Array.isArray(req.body.technologies)
      ? req.body.technologies
      : (req.body.technologies || '').split(',').map(t => t.trim()).filter(Boolean),
    image: req.body.image || '',
    github: req.body.github || '',
    live: req.body.live || '',
    visible: req.body.visible !== false && req.body.visible !== 'false'
  };
  projects.push(project);
  writeProjects(projects);
  res.status(201).json(project);
});

router.put('/:id', requireAuth, (req, res) => {
  const projects = readProjects();
  const index = projects.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });
  const updated = { ...projects[index], ...req.body };
  if (req.body.technologies && !Array.isArray(req.body.technologies)) {
    updated.technologies = req.body.technologies.split(',').map(t => t.trim()).filter(Boolean);
  }
  projects[index] = updated;
  writeProjects(projects);
  res.json(updated);
});

router.delete('/:id', requireAuth, (req, res) => {
  const projects = readProjects();
  const index = projects.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });
  projects.splice(index, 1);
  writeProjects(projects);
  res.json({ ok: true });
});

module.exports = { router, readProjects, writeProjects };
