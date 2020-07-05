create database apiDB;

use apiDB;


create table tb_filme (
	id_filme			int not null primary key auto_increment,
	nm_filme			varchar(100) not null,
	ds_genero			varchar(100) not null,
	nr_duracao			int,
	vl_avaliacao		decimal(15,2),
	bt_disponivel		bool not null ,
	dt_lancamento		datetime not null 
);

create table tb_diretor (
	id_diretor			int not null primary key auto_increment,
	nm_diretor			varchar(100) not null,
	dt_nascimento		datetime not null,
	id_filme			int not null,
	foreign key (id_filme) references tb_filme (id_filme) on delete cascade
);

create table tb_ator (
	id_ator				int not null primary key auto_increment,
	nm_ator				varchar(100) not null,
    vl_altura			decimal(10,2) not null,
	dt_nascimento		datetime not null
);

create table tb_filme_ator (
	id_filme_ator		int not null primary key auto_increment,
	nm_personagem		varchar(100) not null,
    id_filme			int not null,
	id_ator				int not null,
	foreign key (id_filme) references tb_filme (id_filme) on delete cascade,
   	foreign key (id_ator) references tb_ator (id_ator) on delete cascade
);

