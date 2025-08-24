Write-Host "Deteniendo y eliminando contenedor mysql-ia..."
docker compose down

Write-Host "Eliminando volumen de datos en WSL (/home/aenadmin/dockers/mysql-ia/data)..."
wsl.exe bash -lc "rm -rf /home/aenadmin/dockers/mysql-ia/data"

Write-Host "Volviendo a crear y levantar..."
./scripts/start-db.ps1
