CREATE DATABASE IF NOT EXISTS IA CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE IA;

CREATE TABLE IF NOT EXISTS task (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT NULL,
  completed TINYINT(1) NOT NULL DEFAULT 0,
  create_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO task (title, description, completed)
VALUES
  ('Primera tarea', 'Descripción de ejemplo', 0),
  ('Segunda tarea', 'Otra descripción', 1);
