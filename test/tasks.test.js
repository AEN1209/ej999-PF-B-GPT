import request from 'supertest';
import { describe, it, expect, beforeAll } from 'vitest';
import app from '../src/server.js';

describe('Tasks API CRUD', () => {
  let createdId;

  it('GET /health → ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });

  it('POST /tasks → crea una task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Tarea test', description: 'desde vitest', completed: false });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Tarea test');
    createdId = res.body.id;
  });

  it('GET /tasks/:id → devuelve la task creada', async () => {
    const res = await request(app).get(`/tasks/${createdId}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(createdId);
  });

  it('PATCH /tasks/:id → actualiza la task', async () => {
    const res = await request(app)
      .patch(`/tasks/${createdId}`)
      .send({ completed: true });
    expect(res.status).toBe(200);
    expect(res.body.completed).toBe(1);
  });

  it('DELETE /tasks/:id → borra la task', async () => {
    const res = await request(app).delete(`/tasks/${createdId}`);
    expect(res.status).toBe(200);
    expect(res.body.deleted.id).toBe(createdId);
  });
});
