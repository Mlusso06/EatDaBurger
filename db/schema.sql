-- Drops the Burger database if it already exists --
DROP DATABASE IF EXISTS kr8ca6mcha2veufh;

-- Create the database burgers_db and specified it for use.
CREATE DATABASE kr8ca6mcha2veufh;

USE kr8ca6mcha2veufh;

-- Create the table plans.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);