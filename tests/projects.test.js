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
