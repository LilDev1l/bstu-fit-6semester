create
database lab8_casl;

use
lab8_casl;
create table users
(
    id       INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(30) NOT NULL,
    email    VARCHAR(30) NOT NULL UNIQUE,
    role     VARCHAR(30) NOT NULL
);

insert
users(username, password, email, role) values
	('user', 'user', 'user@gmail.com', 'USER'),
    ('user2', 'user2', 'user2@gmail.com', 'USER'),
    ('user3', 'user3', 'user3@gmail.com', 'USER');

create table repositories
(
    id       INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(30) NOT NULL UNIQUE,
    authorId INT         NOT NULL
);

insert
repositories(name, authorId) values
	('repository', 1),
	('repository2', 1),
	('repository3', 3);

create table commits
(
    id       INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    message  VARCHAR(30) NOT NULL,
    repositoryId INT         NOT NULL
);

insert
commits(message, repositoryId) values
	('message', 1),
	('message2', 1),
	('message3', 2);