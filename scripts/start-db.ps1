Write-Host "Creando carpeta de datos en WSL si no existe..."
wsl.exe bash -lc "mkdir -p /home/aenadmin/dockers/mysql-ia/data"

Write-Host "Levantando contenedor mysql-ia..."
docker compose up -d mysql-ia

Write-Host "Estado de salud del contenedor:" 
docker ps --filter "name=mysql-ia"
