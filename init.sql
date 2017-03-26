-- create database onetoone;
use onetoone;

CREATE TABLE `admin` (         
  `id` int unsigned auto_increment,
  `account` varchar(20) DEFAULT '',
  `password` char(40) DEFAULT '',
  `degree` tinyint(1) DEFAULT 0,
  PRIMARY KEY  (`id`)
);

insert into admin(`account`,`password`) values("admin","9cbf8a4dcb8e30682b927f352d6559a0");
