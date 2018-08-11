CREATE DATABASE  IF NOT EXISTS `JSPangBlog` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `JSPangBlog`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: JSPangBlog
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `jspang_Blog`
--

DROP TABLE IF EXISTS `jspang_Blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jspang_Blog` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `BlogID` varchar(45) NOT NULL,
  `categoryID` int(11) NOT NULL,
  `Title` varchar(45) NOT NULL,
  `Content` varchar(45) NOT NULL,
  `TopImage` varchar(80) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `UpdateDate` datetime DEFAULT NULL,
  `Visit` int(11) NOT NULL DEFAULT '0',
  `Introduction` varchar(600) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jspang_Blog`
--

LOCK TABLES `jspang_Blog` WRITE;
/*!40000 ALTER TABLE `jspang_Blog` DISABLE KEYS */;
INSERT INTO `jspang_Blog` VALUES (6,'5145-1532745960097-94256',1,'水电费水电费','水电费水电费水电费水电费','http://jspang.com/wp-content/uploads/2018/01/zhibo.jpg','2018-07-28 10:46:09','2018-07-31 15:47:11',0,''),(7,'5145-1532745960097-94256',1,'水电费水电费','水电费水电费水电费水电费','http://jspang.com/wp-content/uploads/2018/01/zhibo.jpg','2018-07-28 10:46:16','2018-07-31 15:47:11',0,''),(8,'70cb-1532746017617-36775',2,'水电费第三方','都是范德萨发水电费是的','http://jspang.com/wp-content/uploads/2017/12/mongodb.jpg','2018-07-28 10:47:05','2018-07-31 15:47:41',0,'DSDA DAS '),(11,'31ff-1532766539226-11185',1,'测试一个文章','测试一下，1111','http://jspang.com/wp-content/uploads/2018/02/miji001.jpg','2018-07-28 16:29:20','2018-07-31 15:46:53',0,'递四方速递发送到XCVXCVXCV'),(12,'6fe3-1532853164634-63623',4,'水电费水电费','水电费水电费水电费s\'d\'f','http://jspang.com/wp-content/uploads/2018/02/bbbb.jpg','2018-07-29 16:33:58','2018-07-31 15:46:33',0,'是的防守打法水电费dfdsfdsfsdffdfdf 11111'),(13,'833e-1532943706741-44827',4,'后台设置权限后的第一篇文章','后台设置权限后的第一篇文章','http://jspang.com/wp-content/uploads/2018/06/typescriptlogo.jpg','2018-07-30 17:42:30','2018-07-31 15:46:17',0,'都是对的但是'),(14,'6d80-1532997353342-54603',2,'得分第三方第三方是','得分第三方第三方第三方','http://jspang.com/wp-content/uploads/2018/04/vuekoa2.jpg','2018-07-31 08:36:02','2018-07-31 15:45:13',0,'但是反倒是发送到');
/*!40000 ALTER TABLE `jspang_Blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jspang_category`
--

DROP TABLE IF EXISTS `jspang_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jspang_category` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jspang_category`
--

LOCK TABLES `jspang_category` WRITE;
/*!40000 ALTER TABLE `jspang_category` DISABLE KEYS */;
INSERT INTO `jspang_category` VALUES (1,'视频教程'),(2,'前端日记'),(3,'职场技能'),(4,'生活趣事');
/*!40000 ALTER TABLE `jspang_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jspang_User`
--

DROP TABLE IF EXISTS `jspang_User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jspang_User` (
  `User_ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `actionTime` varchar(45) DEFAULT NULL COMMENT '最后操作时间',
  `tokenID` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`User_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jspang_User`
--

LOCK TABLES `jspang_User` WRITE;
/*!40000 ALTER TABLE `jspang_User` DISABLE KEYS */;
INSERT INTO `jspang_User` VALUES (1,'jspang01','123456','1533023261000','428e-1533022988282-32843'),(2,'jspang02','1234567',NULL,NULL);
/*!40000 ALTER TABLE `jspang_User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-06 18:43:28
