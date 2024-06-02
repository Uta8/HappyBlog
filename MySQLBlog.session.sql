show databases;
create DATABASE IF NOT EXISTS blog;
use blog;
create table if NOT EXISTS user (
    id BIGINT auto_increment primary key,
    name varchar(50) not null,
    password varchar(100) not null,
    email varchar(100) unique
);
show tables;