import { query } from './db.js';

export async function listTasks() {
  return query('SELECT id, title, description, completed, create_at, update_at FROM task ORDER BY id DESC');
}

export async function getTask(id) {
  const rows = await query('SELECT id, title, description, completed, create_at, update_at FROM task WHERE id = ?', [id]);
  return rows[0] || null;
}

export async function createTask({ title, description = '', completed = false }) {
  const comp = completed ? 1 : 0;
  const result = await query(
    'INSERT INTO task (title, description, completed) VALUES (?, ?, ?)',
    [title, description, comp]
  );
  return getTask(result.insertId);
}

export async function updateTask(id, { title, description, completed }) {
  const fields = [];
  const params = [];
  if (title !== undefined) { fields.push('title = ?'); params.push(title); }
  if (description !== undefined) { fields.push('description = ?'); params.push(description); }
  if (completed !== undefined) { fields.push('completed = ?'); params.push(completed ? 1 : 0); }
  if (fields.length === 0) return getTask(id);

  params.push(id);
  await query(`UPDATE task SET ${fields.join(', ')} WHERE id = ?`, params);
  return getTask(id);
}

export async function deleteTask(id) {
  const row = await getTask(id);
  if (!row) return null;
  await query('DELETE FROM task WHERE id = ?', [id]);
  return row;
}
