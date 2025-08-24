import express from 'express';
import 'dotenv/config';
import { listTasks, getTask, createTask, updateTask, deleteTask } from './tasks.repo.js';

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

app.get('/tasks', async (_req, res) => {
  const rows = await listTasks();
  res.json(rows);
});

app.get('/tasks/:id', async (req, res) => {
  const row = await getTask(Number(req.params.id));
  if (!row) return res.status(404).json({ error: 'Not found' });
  res.json(row);
});

app.post('/tasks', async (req, res) => {
  const { title, description, completed } = req.body || {};
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'title requerido (string)' });
  }
  const created = await createTask({ title, description, completed });
  res.status(201).json(created);
});

app.put('/tasks/:id', async (req, res) => {
  const updated = await updateTask(Number(req.params.id), req.body || {});
  if (!updated) return res.status(404).json({ error: 'Not found' });
  res.json(updated);
});

app.patch('/tasks/:id', async (req, res) => {
  const updated = await updateTask(Number(req.params.id), req.body || {});
  if (!updated) return res.status(404).json({ error: 'Not found' });
  res.json(updated);
});

app.delete('/tasks/:id', async (req, res) => {
  const deleted = await deleteTask(Number(req.params.id));
  if (!deleted) return res.status(404).json({ error: 'Not found' });
  res.json({ deleted });
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`API escuchando en http://localhost:${PORT}`));
}

export default app;
