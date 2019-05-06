create table consultorios (
	id bigint(20) primary key auto_increment,
	nome varchar(50) not null
)engine=InnoDB default charset=utf8;

insert into consultorios (nome) values ('consultorio 1');
insert into consultorios (nome) values ('consultorio 2');
insert into consultorios (nome) values ('consultorio 3');