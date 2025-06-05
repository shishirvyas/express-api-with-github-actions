const request = require('supertest');
const app = require('./app');

describe('GET /api/hello', () => {
  it('responds with json', async () => {
    const response = await request(app)
      .get('/api/hello')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body.message).toBe('Hello from Express API!');
  });
});