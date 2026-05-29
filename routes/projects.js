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

module.exports = { router, readProjects, writeProjects };
