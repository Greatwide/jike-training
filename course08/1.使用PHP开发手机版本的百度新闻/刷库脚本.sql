drop database if exists baidunews;
create database baidunews;
use baidunews;
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `newstype` char(128) DEFAULT NULL,
  `newstitle` char(200) DEFAULT NULL,
  `newsimg` varchar(200) DEFAULT NULL,
  `newstime` datetime DEFAULT NULL,
  `newssrc` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','崇尚劳动的习近平','img/news2.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','国际观察：政府军收复摩苏尔还要多久','img/news1.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','金价周一暴跌背后的原因是什么？','img/news3.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','韩大选民调文在寅领先 “向美国说不”吸引年轻人','img/4.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','灭火战士奋战72小时 累了睡地上','img/5.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('百家','中国海军首位女副舰长获表彰 曾拿百万年薪','img/6.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('本地','国产大飞机C919首飞现场','img/7.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('图片','北京狂风吹倒大树 汽车被砸道路严重拥堵','img/8.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('娱乐','春耕拂晓红客来，乡村游可以这么嗨 ','img/9.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('娱乐','酒店脑洞大开在楼顶修人工河全长160米','img/10.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('社会','2016上市公司高管薪酬大起底：前十金融和房地产共占8席','img/11.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('军事','NBA季后赛西部半决赛 ，勇士主场115-104轻松战胜爵士','img/12.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('女人','12岁中挪混血美少女SOFIE，天才小提琴手诞生','img/13.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('搞笑','传统武术是怎样被推上神坛的','img/14.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('百家','1库克：Apple Watch健身功能很好 它让我瘦了20多斤','img/15.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('互联网','IT数码受众人群属性分析','img/71.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('互联网','IT峰会在深圳召开','img/72.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('互联网','电子营销和电子商务时代','img/73.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('百家','1传统武术是怎样被推上神坛的','img/14.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/15.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/16.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/17.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/18.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/19.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/20.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/21.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/22.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/23.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/24.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/25.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/26.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/27.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/28.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/29.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/30.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/31.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/32.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/33.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/34.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/35.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/36.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/37.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/38.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/39.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/40.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/41.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/42.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/43.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/44.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/45.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/46.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/47.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/48.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/49.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/50.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/51.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/52.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/53.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/54.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/55.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/56.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/57.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/58.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/59.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/60.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/61.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/62.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/63.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/64.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/65.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/66.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/67.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/68.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/69.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/60.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/61.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/62.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/63.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/64.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/65.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/66.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/67.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/68.jpg','2017-05-03 01:07:16','凤凰网');
insert into news(newstype,newstitle,newsimg,newstime,newssrc) values('精选','这里是测试新闻：请欣赏国画','img/70.jpg','2017-05-03 01:07:16','凤凰网');