drop table exists `opinion`;
create table `opinion`(
    `id` int(11) not null auto_increment,
    `openid` varchar(100) not null,
    `src` text default null,
    `wechat` varchar(100) default null,
    `opinion` text not null,
    `create_time` timestamp not  null default current_timestamp,
    primary key(`id`)
)default charset='utf8';
