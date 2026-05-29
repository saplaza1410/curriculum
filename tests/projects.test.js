const request = require('supertest');
const app = require('../server');

describe('Projects API - GET', () => {
  test('GET /api/projects devuelve solo proyectos visibles', async () => {
    const res = await request(app).get('/api/projects');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.every(p => p.visible)).toBe(true);
  });

  test('GET /api/projects/all sin auth → 401', async () => {
    const res = await request(app).get('/api/projects/all');
    expect(res.status).toBe(401);
  });
});

describe('Projects API - CRUD (requiere auth)', () => {
  let agent;

  beforeAll(async () => {
    process.env.ADMIN_PASSWORD = 'testpass';
    agent = request.agent(app);
    await agent.post('/api/auth/login').send({ password: 'testpass' });
  });

  test('POST /api/projects crea un proyecto → 201', async () => {
    const res = await agent.post('/api/projects').send({
      name: 'Test Project',
      description: 'Test desc',
      technologies: ['PHP', 'Laravel'],
      image: '',
      github: '',
      live: '',
      visible: true
    });
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe('Test Project');
  });

  test('PUT /api/projects/:id actualiza un proyecto → 200', async () => {
    const { readProjects } = require('../routes/projects');
    const projects = readProjects();
    const id = projects[projects.length - 1].id;
    const res = await agent.put(`/api/projects/${id}`).send({ name: 'Actualizado' });
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Actualizado');
  });

  test('DELETE /api/projects/:id elimina un proyecto → 200', async () => {
    const { readProjects } = require('../routes/projects');
    const projects = readProjects();
    const id = projects[projects.length - 1].id;
    const res = await agent.delete(`/api/projects/${id}`);
    expect(res.status).toBe(200);
  });

  test('POST /api/projects sin auth → 401', async () => {
    const res = await request(app).post('/api/projects').send({ name: 'x' });
    expect(res.status).toBe(401);
  });
});
