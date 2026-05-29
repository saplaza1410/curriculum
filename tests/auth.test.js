const request = require('supertest');
const app = require('../server');

describe('Auth API', () => {
  test('POST /api/auth/login - contraseña incorrecta → 401', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ password: 'wrong' });
    expect(res.status).toBe(401);
  });

  test('POST /api/auth/login - contraseña correcta → 200', async () => {
    process.env.ADMIN_PASSWORD = 'testpass';
    const res = await request(app)
      .post('/api/auth/login')
      .send({ password: 'testpass' });
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });

  test('POST /api/auth/logout → 200', async () => {
    const res = await request(app).post('/api/auth/logout');
    expect(res.status).toBe(200);
  });
});
