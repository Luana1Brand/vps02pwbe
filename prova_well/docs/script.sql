drop database if exists Cursos;
create database Cursos charset=UTF8 collate utf8_general_ci;
use Cursos;



create table  alunos(
    id integer  not null primary key auto_increment,
    nome varchar(30) not null,
    data_nascimento varchar(30) not null
);


create table cursos(
    id integer not null primary key auto_increment,
    curso varchar(50) not null,
    duracao float (3,1)

);


create table cursados(
    aluno integer(10) not null,
    curso integer(10) not null,
    data varchar(30) not null,
    foreign key (aluno) references alunos(id),
    foreign key (curso) references cursos(id)

);


describe alunos;
describe cursos;
describe cursados;

show tables;


LOAD DATA INFILE 'F:/Pudim/2SEMESTRE/backend/prova_well/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;




LOAD DATA INFILE 'F:/Pudim/2SEMESTRE/backend/prova_well/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE 'F:/Pudim/2SEMESTRE/backend/prova_well/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;



select * from alunos;

select * from cursos;

select * from cursados;

