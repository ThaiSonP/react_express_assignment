DROP DATABASE IF EXISTS userlist;
CREATE DATABASE  userlist;

\c userlist;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  phone INT NOT NULL
);

INSERT INTO "users" (name , phone) values ('kevin',123),('melvin',234),('tevin',567)
