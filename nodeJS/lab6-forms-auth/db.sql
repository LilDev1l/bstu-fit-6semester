create database auth;

use auth;
create table users (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(30) NOT NULL
);

insert users(username, password) values
	('user', 'user'),
    ('user1', 'user1');