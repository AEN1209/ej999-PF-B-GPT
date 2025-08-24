# IA Tasks CRUD (Node.js + MySQL 8)

CRUD de `task` con MySQL corriendo en contenedor (WSL) y app Node/Express corriendo en Windows (VS Code).

## Requisitos

- Windows 10/11 con Docker Desktop (backend WSL2)
- WSL habilitado y corriendo una distro Linux
- Node.js LTS (18+)

## Primer arranque

```powershell
./scripts/start-db.ps1
```

## Correr la API

```powershell
npm install
npm run dev
```

## Tests

```powershell
npm test
```
## Endpoints

- `GET    /health` → `{ ok: true }`
- `GET    /tasks` → lista todas
- `GET    /tasks/:id` → una por id
- `POST   /tasks` → crea (`{ title, description?, completed? }`)
- `PUT    /tasks/:id` → actualiza total/parcial
- `PATCH  /tasks/:id` → actualiza parcial
- `DELETE /tasks/:id` → elimina

### Ejemplos con `curl`

```bash
# Crear
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Nueva tarea","description":"texto","completed":false}'

# Listar
curl http://localhost:3000/tasks

# Actualizar
curl -X PATCH http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'

# Borrar
curl -X DELETE http://localhost:3000/tasks/1# ej999-PF-B-GPT
