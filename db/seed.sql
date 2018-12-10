-- add your seed data here!!!! 
DROP DATABASE IF EXISTS cheeses_db;
CREATE DATABASE cheeses_db;
\c cheeses_db
CREATE TABLE cheeses(id serial primary key, name varchar, color varchar, origin varchar, stink_level integer);
INSERT INTO cheeses (name, color, origin, stink_level) VALUES
('Roquefort', 'yellow', 'french', 5),
('Epoisses', 'orange', 'french', 9),
('Charolais', 'white', 'french', 5),
('Maroilles', 'white', 'french', 10),
('Durrus', 'yellow', 'irish', 2),
('Hooligan', 'yellow', 'american', 3),
('Teleme', 'white', 'american', 2),
('Stichelton', 'white', 'english', 4);