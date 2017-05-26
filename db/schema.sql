CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burger (
 id INT AUTO_INCREMENT NOT NULL,
 burger_name VARCHAR(30) NOT NULL,
 devour BOOLEAN,
 date1 DATETIME DEFAULT CURRENT_TIMESTAMP,
 createdAt timestamp Not null,
 description VARCHAR(255),
 PRIMARY KEY (id));
 
 