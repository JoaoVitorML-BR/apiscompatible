CREATE DATABASE  IF NOT EXISTS `apiscompatible` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `apiscompatible`;
-- MySQL dump 10.13  Distrib 8.0.30, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: apiscompatible
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `amdcpus`
--

DROP TABLE IF EXISTS `amdcpus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amdcpus` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `amdcpuname` varchar(150) NOT NULL,
  `amdcpugen` int NOT NULL,
  `amdcpuversion` int NOT NULL,
  `cpuvoltage` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `amdcpus_UNIQUE` (`amdcpuname`),
  KEY `cpuvoltage` (`cpuvoltage`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amdcpus`
--

LOCK TABLES `amdcpus` WRITE;
/*!40000 ALTER TABLE `amdcpus` DISABLE KEYS */;
INSERT INTO `amdcpus` VALUES (22,'AMD Ryzen 9 5950X',9,5950,'105'),(23,'AMD Ryzen 9 5900X',9,5950,'105'),(24,'AMD Ryzen 9 3950X',9,3950,'105'),(25,'AMD Ryzen 9 3900XT',9,3900,'105'),(26,'AMD Ryzen 9 3900X',9,3900,'105'),(27,'AMD Ryzen 9 3900',9,3900,'105'),(29,'AMD Ryzen 7 5800X',7,5800,'105'),(30,'AMD Ryzen 7 5700X',7,5700,'65'),(32,'AMD Ryzen 7 5700G',7,5700,'65'),(36,'AMD Ryzen 7 4700G',7,4700,'65'),(38,'AMD Ryzen 7 3800XT',7,3800,'105'),(39,'AMD Ryzen 7 3800X',7,3800,'105'),(40,'AMD Ryzen 7 3700X',7,3700,'65'),(42,'AMD Ryzen 7 2700X',7,2700,'105'),(44,'AMD Ryzen 7 2700',7,2700,'65'),(46,'AMD Ryzen 7 2700E',7,2700,'45'),(47,'AMD Ryzen 5 5600X',5,5600,'65'),(48,'AMD Ryzen 5 5600',5,5600,'65'),(51,'AMD Ryzen 5 5600G',5,5600,'65'),(52,'AMD Ryzen 5 5500',5,5500,'65'),(53,'AMD Ryzen 5 4600G',5,4600,'65'),(54,'AMD Ryzen 5 4500',5,4500,'65'),(55,'AMD Ryzen 5 3600X',5,3600,'95'),(56,'AMD Ryzen 5 3600XT',5,3600,'95'),(57,'AMD Ryzen 5 3600',5,3600,'65'),(58,'AMD Ryzen 5 3500X',5,3500,'65'),(59,'AMD Ryzen 5 3500',5,3500,'65'),(60,'AMD Ryzen 5 3400G',5,3400,'65'),(61,'AMD Ryzen 5 3350G',5,3350,'65'),(62,'AMD Ryzen 5 2600X',5,2600,'95'),(63,'AMD Ryzen 5 2600',5,2600,'65'),(64,'AMD Ryzen 5 2500X',5,2500,'65'),(65,'AMD Ryzen 5 1600',5,1600,'65'),(66,'AMD Ryzen 3 5300G',3,5300,'65'),(68,'AMD Ryzen 3 4300G',3,4300,'65'),(69,'AMD Ryzen 3 4100',3,4100,'65'),(70,'AMD Ryzen 3 3300X',3,3300,'65'),(71,'AMD Ryzen 3 3200G',3,3200,'65'),(72,'AMD Ryzen 3 3100',3,3100,'65'),(73,'AMD Ryzen 3 2300X',3,2300,'65'),(74,'AMD Ryzen 3 2200G',3,2200,'65'),(75,'AMD Ryzen 3 1200',3,1200,'65'),(76,'AMD Ryzen 5 1600X',5,1600,'95'),(77,'AMD Ryzen 5 1500X',5,1500,'65'),(78,'AMD Ryzen 5 1400',5,1400,'65'),(79,'AMD Ryzen 7 1800X',7,1800,'95'),(80,'AMD Ryzen 7 1700X',7,1700,'95'),(81,'AMD Ryzen 7 1700',7,1700,'65');
/*!40000 ALTER TABLE `amdcpus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amdcpus_motheboards_memoryram`
--

DROP TABLE IF EXISTS `amdcpus_motheboards_memoryram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amdcpus_motheboards_memoryram` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `amdmotheboard_id` int unsigned DEFAULT NULL,
  `amdcpu_id` int unsigned DEFAULT NULL,
  `cpu_name` varchar(150) DEFAULT NULL,
  `memoryram_name` varchar(150) DEFAULT NULL,
  `memoryram_id` int unsigned DEFAULT NULL,
  `operatingvoltage_memoryram` varchar(150) DEFAULT NULL,
  `operatingvoltage_cpu` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `FK_amdcpus_motheboards_amdmotheboards` (`amdmotheboard_id`),
  KEY `FK_amdcpus_motheboards_amdcpus` (`amdcpu_id`,`id`) USING BTREE,
  KEY `FK_amdcpus_motheboards_memoryram_amdintelmemoryram_name` (`memoryram_name`),
  KEY `FK_amdcpus_motheboards_memoryram_amdintelmemoryram` (`memoryram_id`),
  KEY `FK_amdcpus_motheboards_amdcpus_name` (`cpu_name`),
  KEY `FK_amdcpus_motheboards_amdcpus_operatingvoltage_memoryram` (`operatingvoltage_memoryram`),
  KEY `FK_amdcpus_motheboards_amdcpus_operatingvoltage_cpu` (`operatingvoltage_cpu`),
  CONSTRAINT `FK_amdcpus_motheboards_amdcpus` FOREIGN KEY (`amdcpu_id`) REFERENCES `amdcpus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_amdcpus_motheboards_amdcpus_name` FOREIGN KEY (`cpu_name`) REFERENCES `amdcpus` (`amdcpuname`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_amdcpus_motheboards_amdcpus_operatingvoltage_cpu` FOREIGN KEY (`operatingvoltage_cpu`) REFERENCES `amdcpus` (`cpuvoltage`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_amdcpus_motheboards_amdcpus_operatingvoltage_memoryram` FOREIGN KEY (`operatingvoltage_memoryram`) REFERENCES `amdintelmemoryram` (`operatingvoltage`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_amdcpus_motheboards_amdmotheboards` FOREIGN KEY (`amdmotheboard_id`) REFERENCES `amdmotheboards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_amdcpus_motheboards_memoryram_amdintelmemoryram` FOREIGN KEY (`memoryram_id`) REFERENCES `amdintelmemoryram` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_amdcpus_motheboards_memoryram_amdintelmemoryram_name` FOREIGN KEY (`memoryram_name`) REFERENCES `amdintelmemoryram` (`namememoryram`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amdcpus_motheboards_memoryram`
--

LOCK TABLES `amdcpus_motheboards_memoryram` WRITE;
/*!40000 ALTER TABLE `amdcpus_motheboards_memoryram` DISABLE KEYS */;
INSERT INTO `amdcpus_motheboards_memoryram` VALUES (1,14,22,'AMD Ryzen 9 5950X','XPG Gammix D10 Red - 8GB - 3200MHz',1,'1,35','105'),(2,14,22,'AMD Ryzen 9 5950X','Memória XPG Spectrix D41 RGB - 8GB - 3000MHz',2,'1,35','105'),(3,14,22,'AMD Ryzen 9 5950X','Memória Crucial Ballistix - 8GB - 3200MHz',4,'1,35','105'),(4,14,22,'AMD Ryzen 9 5950X','Corsair Vengeance RGB Pro - 8GB - 3200MHz',5,'1,35','105'),(5,14,22,'AMD Ryzen 9 5950X','Kingston Fury Beast - 8GB - 3200MHz',6,'1,35','105'),(6,14,22,'AMD Ryzen 9 5950X','GeIL evo Potenza - 8GB - 2666MHZ',8,'1,35','105'),(7,14,22,'AMD Ryzen 9 5950X','Corsair Vegance LPX - 8GB - 2666MHZ',9,'1,35','105'),(8,14,22,'AMD Ryzen 9 5950X','XPG Gammix D30 - 8GB - 3200MHZ',10,'1,35','105'),(9,14,22,'AMD Ryzen 9 5950X','GeIL evo Potenza - 8GB - 3000MHZ',12,'1,35','105'),(10,14,22,'AMD Ryzen 9 5950X','GeIL evo Potenza - 8GB - 2400MHZ',13,'1,35','105'),(11,14,22,'AMD Ryzen 9 5950X','GeIL evo Potenza - 8GB - 3200MHZ',14,'1,35','105'),(12,14,22,'AMD Ryzen 9 5950X','Corsair Vegance LPX - 8GB - 2400MHZ',16,'1,35','105'),(13,14,22,'AMD Ryzen 9 5950X','Corsair Vegance LPX - 8GB - 3000MHZ',17,'1,35','105'),(14,14,22,'AMD Ryzen 9 5950X','Corsair Vegance LPX - 8GB - 3200MHZ',18,'1,35','105'),(15,14,22,'AMD Ryzen 9 5950X','Kingston Fury Beast - 8GB - 2400MHZ',19,'1,35','105'),(16,14,22,'AMD Ryzen 9 5950X','Kingston Fury Beast - 8GB - 2666MHZ',20,'1,35','105'),(17,14,22,'AMD Ryzen 9 5950X','Kingston Fury Beast - 8GB - 3000MHZ',21,'1,35','105'),(18,14,22,'AMD Ryzen 9 5950X','Corsair Vengeance RGB Pro - 8GB - 3000MHZ',22,'1,35','105'),(19,14,22,'AMD Ryzen 9 5950X','Corsair Vengeance RGB Pro - 8GB - 2400MHZ',23,'1,35','105'),(20,14,22,'AMD Ryzen 9 5950X','Corsair Vengeance RGB Pro - 8GB - 2666MHZ',24,'1,35','105'),(21,14,22,'AMD Ryzen 9 5950X','Memória Crucial Ballistix - 8GB - 3000MHZ',26,'1,35','105'),(22,14,22,'AMD Ryzen 9 5950X','Memória Crucial Ballistix - 8GB - 2400MHZ',27,'1,35','105'),(23,14,22,'AMD Ryzen 9 5950X','Memória Crucial Ballistix - 8GB - 2666MHZ',28,'1,35','105'),(24,14,22,'AMD Ryzen 9 5950X','Team Group T-Force Vulcan Pichau RTB - 8GB - 3200MHZ',29,'1,35','105'),(25,14,22,'AMD Ryzen 9 5950X','Team Group T-Force Vulcan Pichau RTB - 8GB - 3000MHz',3,'1,35','105'),(26,14,22,'AMD Ryzen 9 5950X','Team Group T-Force Vulcan Pichau RTB - 8GB - 2666MHZ',30,'1,35','105'),(27,14,22,'AMD Ryzen 9 5950X','Team Group T-Force Vulcan Pichau RTB - 8GB - 2400MHZ',31,'1,35','105'),(28,14,22,'AMD Ryzen 9 5950X','Memória XPG Spectrix D41 RGB - 8GB - 3200MHZ',32,'1,35','105'),(29,14,22,'AMD Ryzen 9 5950X','Memória XPG Spectrix D41 RGB - 8GB - 2666MHZ',33,'1,35','105'),(30,14,22,'AMD Ryzen 9 5950X','Memória XPG Spectrix D41 RGB - 8GB - 2400MHZ',35,'1,35','105'),(31,14,22,'AMD Ryzen 9 5950X','XPG Gammix D10 Red - 8GB - 3000MHZ',36,'1,35','105'),(32,14,22,'AMD Ryzen 9 5950X','XPG Gammix D10 Red - 8GB - 2666MHZ',37,'1,35','105'),(33,14,22,'AMD Ryzen 9 5950X','XPG Gammix D30 - 8GB - 3000MHZ',39,'1,35','105'),(34,14,22,'AMD Ryzen 9 5950X','XPG Gammix D10 Red - 8GB - 2400MHZ',38,'1,35','105'),(35,14,22,'AMD Ryzen 9 5950X','XPG Gammix D30 - 8GB - 2666MHZ',40,'1,35','105'),(36,14,22,'AMD Ryzen 9 5950X','XPG Gammix D30 - 8GB - 2400MHZ',41,'1,35','105'),(37,14,22,'AMD Ryzen 9 5950X','XPG SPECTRIX D60 RGB - 8GB - 3200MHZ',42,'1,35','105'),(38,14,22,'AMD Ryzen 9 5950X','XPG SPECTRIX D60 RGB - 8GB - 3000MHZ',43,'1,35','105'),(39,14,22,'AMD Ryzen 9 5950X','XPG SPECTRIX D60 RGB - 8GB - 2666MHZ',44,'1,35','105'),(40,14,22,'AMD Ryzen 9 5950X','XPG SPECTRIX D60 RGB - 8GB - 2400MHZ',45,'1,35','105'),(41,14,22,'AMD Ryzen 9 5950X','Memória XPG Spectrix D41 RGB - 16GB - 3000MHz',46,'1,35','105'),(42,14,24,'AMD Ryzen 9 3950X','XPG Gammix D10 Red - 8GB - 3200MHz',1,'1,35','105'),(43,14,24,'AMD Ryzen 9 3950X','Team Group T-Force Vulcan Pichau RTB - 8GB - 3000MHz',3,'1,35','105'),(44,14,24,'AMD Ryzen 9 3950X','Memória XPG Spectrix D41 RGB - 8GB - 3000MHz',2,'1,35','105'),(45,14,24,'AMD Ryzen 9 3950X','Memória Crucial Ballistix - 8GB - 3200MHz',4,'1,35','105'),(46,14,24,'AMD Ryzen 9 3950X','Corsair Vengeance RGB Pro - 8GB - 3200MHz',5,'1,35','105'),(47,14,24,'AMD Ryzen 9 3950X','Kingston Fury Beast - 8GB - 3200MHz',6,'1,35','105'),(48,14,24,'AMD Ryzen 9 3950X','GeIL evo Potenza - 8GB - 2666MHZ',8,'1,35','105'),(49,14,24,'AMD Ryzen 9 3950X','Corsair Vegance LPX - 8GB - 2666MHZ',9,'1,35','105'),(50,14,24,'AMD Ryzen 9 3950X','XPG Gammix D30 - 8GB - 3200MHZ',10,'1,35','105'),(51,14,24,'AMD Ryzen 9 3950X','GeIL evo Potenza - 8GB - 3000MHZ',12,'1,35','105'),(52,14,24,'AMD Ryzen 9 3950X','GeIL evo Potenza - 8GB - 2400MHZ',13,'1,35','105'),(53,14,24,'AMD Ryzen 9 3950X','GeIL evo Potenza - 8GB - 3200MHZ',14,'1,35','105'),(54,14,24,'AMD Ryzen 9 3950X','Corsair Vegance LPX - 8GB - 2400MHZ',16,'1,35','105'),(55,14,24,'AMD Ryzen 9 3950X','Corsair Vegance LPX - 8GB - 3000MHZ',17,'1,35','105'),(56,14,24,'AMD Ryzen 9 3950X','Corsair Vegance LPX - 8GB - 3200MHZ',18,'1,35','105'),(57,14,24,'AMD Ryzen 9 3950X','Kingston Fury Beast - 8GB - 2400MHZ',19,'1,35','105'),(58,14,24,'AMD Ryzen 9 3950X','Kingston Fury Beast - 8GB - 2666MHZ',20,'1,35','105'),(59,14,24,'AMD Ryzen 9 3950X','Kingston Fury Beast - 8GB - 3000MHZ',21,'1,35','105'),(60,14,24,'AMD Ryzen 9 3950X','Corsair Vengeance RGB Pro - 8GB - 3000MHZ',22,'1,35','105'),(61,14,24,'AMD Ryzen 9 3950X','Corsair Vengeance RGB Pro - 8GB - 2400MHZ',23,'1,35','105'),(62,14,24,'AMD Ryzen 9 3950X','Corsair Vengeance RGB Pro - 8GB - 2666MHZ',24,'1,35','105'),(63,14,24,'AMD Ryzen 9 3950X','Memória Crucial Ballistix - 8GB - 3000MHZ',26,'1,35','105'),(64,14,24,'AMD Ryzen 9 3950X','Memória Crucial Ballistix - 8GB - 2400MHZ',27,'1,35','105'),(65,14,24,'AMD Ryzen 9 3950X','Memória Crucial Ballistix - 8GB - 2666MHZ',28,'1,35','105'),(66,14,24,'AMD Ryzen 9 3950X','Team Group T-Force Vulcan Pichau RTB - 8GB - 3200MHZ',29,'1,35','105'),(67,14,24,'AMD Ryzen 9 3950X','Team Group T-Force Vulcan Pichau RTB - 8GB - 2666MHZ',30,'1,35','105'),(68,14,24,'AMD Ryzen 9 3950X','Team Group T-Force Vulcan Pichau RTB - 8GB - 2400MHZ',31,'1,35','105'),(69,14,24,'AMD Ryzen 9 3950X','Memória XPG Spectrix D41 RGB - 8GB - 3200MHZ',32,'1,35','105'),(70,14,24,'AMD Ryzen 9 3950X','Memória XPG Spectrix D41 RGB - 8GB - 2666MHZ',33,'1,35','105'),(71,14,24,'AMD Ryzen 9 3950X','Memória XPG Spectrix D41 RGB - 8GB - 2400MHZ',35,'1,35','105'),(72,14,24,'AMD Ryzen 9 3950X','XPG Gammix D10 Red - 8GB - 3000MHZ',36,'1,35','105'),(73,14,24,'AMD Ryzen 9 3950X','XPG Gammix D10 Red - 8GB - 2666MHZ',37,'1,35','105'),(74,14,24,'AMD Ryzen 9 3950X','XPG Gammix D10 Red - 8GB - 2400MHZ',38,'1,35','105'),(75,14,24,'AMD Ryzen 9 3950X','XPG Gammix D30 - 8GB - 3000MHZ',39,'1,35','105'),(76,14,24,'AMD Ryzen 9 3950X','XPG Gammix D30 - 8GB - 2666MHZ',40,'1,35','105'),(77,14,24,'AMD Ryzen 9 3950X','XPG Gammix D30 - 8GB - 2400MHZ',41,'1,35','105'),(78,14,24,'AMD Ryzen 9 3950X','XPG SPECTRIX D60 RGB - 8GB - 3200MHZ',42,'1,35','105'),(79,14,24,'AMD Ryzen 9 3950X','XPG SPECTRIX D60 RGB - 8GB - 3000MHZ',43,'1,35','105'),(80,14,24,'AMD Ryzen 9 3950X','XPG SPECTRIX D60 RGB - 8GB - 2666MHZ',44,'1,35','105'),(81,14,24,'AMD Ryzen 9 3950X','XPG SPECTRIX D60 RGB - 8GB - 2400MHZ',45,'1,35','105'),(82,14,24,'AMD Ryzen 9 3950X','Memória XPG Spectrix D41 RGB - 16GB - 3000MHz',46,'1,35','105'),(83,17,26,'AMD Ryzen 9 3900X','XPG Gammix D10 Red - 8GB - 3200MHz',1,'1,35','105'),(84,17,26,'AMD Ryzen 9 3900X','Memória XPG Spectrix D41 RGB - 8GB - 3000MHz',2,'1,35','105'),(85,17,26,'AMD Ryzen 9 3900X','Team Group T-Force Vulcan Pichau RTB - 8GB - 3000MHz',3,'1,35','105'),(86,17,26,'AMD Ryzen 9 3900X','Memória Crucial Ballistix - 8GB - 3200MHz',4,'1,35','105'),(87,17,26,'AMD Ryzen 9 3900X','Corsair Vengeance RGB Pro - 8GB - 3200MHz',5,'1,35','105'),(88,17,26,'AMD Ryzen 9 3900X','Kingston Fury Beast - 8GB - 3200MHz',6,'1,35','105'),(89,17,26,'AMD Ryzen 9 3900X','GeIL evo Potenza - 8GB - 2666MHZ',8,'1,35','105'),(90,17,26,'AMD Ryzen 9 3900X','XPG Gammix D30 - 8GB - 3200MHZ',10,'1,35','105'),(91,17,26,'AMD Ryzen 9 3900X','GeIL evo Potenza - 8GB - 3000MHZ',12,'1,35','105'),(92,17,26,'AMD Ryzen 9 3900X','Corsair Vegance LPX - 8GB - 2666MHZ',9,'1,35','105'),(93,17,26,'AMD Ryzen 9 3900X','GeIL evo Potenza - 8GB - 2400MHZ',13,'1,35','105'),(94,17,26,'AMD Ryzen 9 3900X','GeIL evo Potenza - 8GB - 3200MHZ',14,'1,35','105'),(95,17,26,'AMD Ryzen 9 3900X','Corsair Vegance LPX - 8GB - 2400MHZ',16,'1,35','105'),(96,17,26,'AMD Ryzen 9 3900X','Corsair Vegance LPX - 8GB - 3000MHZ',17,'1,35','105'),(97,17,26,'AMD Ryzen 9 3900X','Corsair Vegance LPX - 8GB - 3200MHZ',18,'1,35','105'),(98,17,26,'AMD Ryzen 9 3900X','Kingston Fury Beast - 8GB - 2400MHZ',19,'1,35','105'),(99,17,26,'AMD Ryzen 9 3900X','Kingston Fury Beast - 8GB - 2666MHZ',20,'1,35','105'),(100,17,26,'AMD Ryzen 9 3900X','Kingston Fury Beast - 8GB - 3000MHZ',21,'1,35','105'),(101,17,26,'AMD Ryzen 9 3900X','Corsair Vengeance RGB Pro - 8GB - 3000MHZ',22,'1,35','105'),(102,17,26,'AMD Ryzen 9 3900X','Corsair Vengeance RGB Pro - 8GB - 2400MHZ',23,'1,35','105'),(103,17,26,'AMD Ryzen 9 3900X','Corsair Vengeance RGB Pro - 8GB - 2666MHZ',24,'1,35','105'),(104,17,26,'AMD Ryzen 9 3900X','Memória Crucial Ballistix - 8GB - 3000MHZ',26,'1,35','105'),(105,17,26,'AMD Ryzen 9 3900X','Memória Crucial Ballistix - 8GB - 2400MHZ',27,'1,35','105'),(106,17,26,'AMD Ryzen 9 3900X','Memória Crucial Ballistix - 8GB - 2666MHZ',28,'1,35','105'),(107,17,26,'AMD Ryzen 9 3900X','Team Group T-Force Vulcan Pichau RTB - 8GB - 3200MHZ',29,'1,35','105'),(108,17,26,'AMD Ryzen 9 3900X','Team Group T-Force Vulcan Pichau RTB - 8GB - 2666MHZ',30,'1,35','105'),(109,17,26,'AMD Ryzen 9 3900X','Team Group T-Force Vulcan Pichau RTB - 8GB - 2400MHZ',31,'1,35','105'),(110,17,26,'AMD Ryzen 9 3900X','Memória XPG Spectrix D41 RGB - 8GB - 3200MHZ',32,'1,35','105'),(111,17,26,'AMD Ryzen 9 3900X','Memória XPG Spectrix D41 RGB - 8GB - 2666MHZ',33,'1,35','105'),(112,17,26,'AMD Ryzen 9 3900X','Memória XPG Spectrix D41 RGB - 8GB - 2400MHZ',35,'1,35','105'),(113,17,26,'AMD Ryzen 9 3900X','XPG Gammix D10 Red - 8GB - 3000MHZ',36,'1,35','105'),(114,17,26,'AMD Ryzen 9 3900X','XPG Gammix D10 Red - 8GB - 2666MHZ',37,'1,35','105'),(115,17,26,'AMD Ryzen 9 3900X','XPG Gammix D10 Red - 8GB - 2400MHZ',38,'1,35','105'),(116,17,26,'AMD Ryzen 9 3900X','XPG Gammix D30 - 8GB - 3000MHZ',39,'1,35','105'),(117,17,26,'AMD Ryzen 9 3900X','XPG Gammix D30 - 8GB - 2666MHZ',40,'1,35','105'),(118,17,26,'AMD Ryzen 9 3900X','XPG Gammix D30 - 8GB - 2400MHZ',41,'1,35','105'),(119,17,26,'AMD Ryzen 9 3900X','XPG SPECTRIX D60 RGB - 8GB - 3200MHZ',42,'1,35','105'),(120,17,26,'AMD Ryzen 9 3900X','XPG SPECTRIX D60 RGB - 8GB - 3000MHZ',43,'1,35','105'),(121,17,26,'AMD Ryzen 9 3900X','XPG SPECTRIX D60 RGB - 8GB - 2666MHZ',44,'1,35','105'),(122,17,26,'AMD Ryzen 9 3900X','XPG SPECTRIX D60 RGB - 8GB - 2400MHZ',45,'1,35','105'),(123,17,26,'AMD Ryzen 9 3900X','Memória XPG Spectrix D41 RGB - 16GB - 3000MHz',46,'1,35','105');
/*!40000 ALTER TABLE `amdcpus_motheboards_memoryram` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amdintelmemoryram`
--

DROP TABLE IF EXISTS `amdintelmemoryram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amdintelmemoryram` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `namememoryram` varchar(150) NOT NULL DEFAULT '',
  `sizememoryram` varchar(45) NOT NULL DEFAULT '',
  `frequencymemoryram` varchar(45) NOT NULL DEFAULT '',
  `ddrversion` varchar(45) NOT NULL DEFAULT '',
  `operatingvoltage` varchar(45) DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `namememoryram` (`namememoryram`),
  KEY `operatingvoltage` (`operatingvoltage`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amdintelmemoryram`
--

LOCK TABLES `amdintelmemoryram` WRITE;
/*!40000 ALTER TABLE `amdintelmemoryram` DISABLE KEYS */;
INSERT INTO `amdintelmemoryram` VALUES (1,'XPG Gammix D10 Red - 8GB - 3200MHz','8GB','3200MHZ','DDR4','1,35'),(2,'Memória XPG Spectrix D41 RGB - 8GB - 3000MHz','8GB','3000MHZ','DDR4','1,35'),(3,'Team Group T-Force Vulcan Pichau RTB - 8GB - 3000MHz','8GB','3000MHZ','DDR4','1,35'),(4,'Memória Crucial Ballistix - 8GB - 3200MHz','8GB','3200MHZ','DDR4','1,35'),(5,'Corsair Vengeance RGB Pro - 8GB - 3200MHz','8GB','3200MHZ','DDR4','1,35'),(6,'Kingston Fury Beast - 8GB - 3200MHz','8GB','3200MHZ','DDR4','1,35'),(8,'GeIL evo Potenza - 8GB - 2666MHZ','8GB','2666MHZ','DDR4','1,35'),(9,'Corsair Vegance LPX - 8GB - 2666MHZ','8GB','2666MHZ','DDR4','1,35'),(10,'XPG Gammix D30 - 8GB - 3200MHZ','8GB','3200MHZ','DDR4','1,35'),(12,'GeIL evo Potenza - 8GB - 3000MHZ','8GB','3000MHZ','DDR4','1,35'),(13,'GeIL evo Potenza - 8GB - 2400MHZ','8GB','2400MHZ','DDR4','1,35'),(14,'GeIL evo Potenza - 8GB - 3200MHZ','8GB','3200MHZ','DDR4','1,35'),(16,'Corsair Vegance LPX - 8GB - 2400MHZ','8GB','2400MHZ','DDR4','1,35'),(17,'Corsair Vegance LPX - 8GB - 3000MHZ','8GB','3000MHZ','DDR4','1,35'),(18,'Corsair Vegance LPX - 8GB - 3200MHZ','8GB','3200MHZ','DDR4','1,35'),(19,'Kingston Fury Beast - 8GB - 2400MHZ','8GB','2400MHZ','DDR4','1,35'),(20,'Kingston Fury Beast - 8GB - 2666MHZ','8GB','2666MHZ','DDR4','1,35'),(21,'Kingston Fury Beast - 8GB - 3000MHZ','8GB','3000MHZ','DDR4','1,35'),(22,'Corsair Vengeance RGB Pro - 8GB - 3000MHZ','8GB','3000MHZ','DDR4','1,35'),(23,'Corsair Vengeance RGB Pro - 8GB - 2400MHZ','8GB','2400MHZ','DDR4','1,35'),(24,'Corsair Vengeance RGB Pro - 8GB - 2666MHZ','8GB','2666MHZ','DDR4','1,35'),(26,'Memória Crucial Ballistix - 8GB - 3000MHZ','8GB','3000MHZ','DDR4','1,35'),(27,'Memória Crucial Ballistix - 8GB - 2400MHZ','8GB','2400MHZ','DDR4','1,35'),(28,'Memória Crucial Ballistix - 8GB - 2666MHZ','8GB','2666MHZ','DDR4','1,35'),(29,'Team Group T-Force Vulcan Pichau RTB - 8GB - 3200MHZ','8GB','3200MHZ','DDR4','1,35'),(30,'Team Group T-Force Vulcan Pichau RTB - 8GB - 2666MHZ','8GB','2666MHZ','DDR4','1,35'),(31,'Team Group T-Force Vulcan Pichau RTB - 8GB - 2400MHZ','8GB','2400MHZ','DDR4','1,35'),(32,'Memória XPG Spectrix D41 RGB - 8GB - 3200MHZ','8GB','3200MHZ','DDR4','1,35'),(33,'Memória XPG Spectrix D41 RGB - 8GB - 2666MHZ','8GB','2666MHZ','DDR4','1,35'),(35,'Memória XPG Spectrix D41 RGB - 8GB - 2400MHZ','8GB','2400MHZ','DDR4','1,35'),(36,'XPG Gammix D10 Red - 8GB - 3000MHZ','8GB','3000MHZ','DDR4','1,35'),(37,'XPG Gammix D10 Red - 8GB - 2666MHZ','8GB','2666MHZ','DDR4','1,35'),(38,'XPG Gammix D10 Red - 8GB - 2400MHZ','8GB','2400MHZ','DDR4','1,35'),(39,'XPG Gammix D30 - 8GB - 3000MHZ','8GB','3000MHZ','DDR4','1,35'),(40,'XPG Gammix D30 - 8GB - 2666MHZ','8GB','2666MHZ','DDR4','1,35'),(41,'XPG Gammix D30 - 8GB - 2400MHZ','8GB','2400MHZ','DDR4','1,35'),(42,'XPG SPECTRIX D60 RGB - 8GB - 3200MHZ','8GB','3200MHZ','DDR4','1,35'),(43,'XPG SPECTRIX D60 RGB - 8GB - 3000MHZ','8GB','3000MHZ','DDR4','1,35'),(44,'XPG SPECTRIX D60 RGB - 8GB - 2666MHZ','8GB','2666MHZ','DDR4','1,35'),(45,'XPG SPECTRIX D60 RGB - 8GB - 2400MHZ','8GB','2400MHZ','DDR4','1,35'),(46,'Memória XPG Spectrix D41 RGB - 16GB - 3000MHz','16GB','3000MHZ','DDR','1,35');
/*!40000 ALTER TABLE `amdintelmemoryram` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amdintelssd`
--

DROP TABLE IF EXISTS `amdintelssd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amdintelssd` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `namessd` varchar(150) NOT NULL,
  `sizessd` varchar(45) NOT NULL,
  `operatingvoltage` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `namessd_UNIQUE` (`namessd`),
  KEY `operatingvoltage` (`operatingvoltage`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amdintelssd`
--

LOCK TABLES `amdintelssd` WRITE;
/*!40000 ALTER TABLE `amdintelssd` DISABLE KEYS */;
INSERT INTO `amdintelssd` VALUES (1,'ADATA Premier Pro SP600 - 128GB','128GB','1,5'),(3,'SSD Crucial BX500 - 240GB','248GB','1,5');
/*!40000 ALTER TABLE `amdintelssd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amdmotheboards`
--

DROP TABLE IF EXISTS `amdmotheboards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amdmotheboards` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `motheboard` varchar(45) NOT NULL,
  `motheboardversion` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amdmotheboards`
--

LOCK TABLES `amdmotheboards` WRITE;
/*!40000 ALTER TABLE `amdmotheboards` DISABLE KEYS */;
INSERT INTO `amdmotheboards` VALUES (14,'GIGABYTE B550 AORUS ELITE','B550'),(15,'GIGABYTE B550M AORUS PRO','B550'),(16,'GIGABYTE B450M AORUS ELITE','B450'),(17,'GIGABYTE X570 AORUS ULTRA','X570'),(18,'GIGABYTE X570 AORUS ELITE','X570'),(19,'GIGABYTE B450 AORUS ELITE','B450'),(20,'GIGABYTE X370 Gaming 5','X370'),(21,'GIGABYTE X470 AORUS ULTRA GAMING','X470'),(22,'GIGABYTE X470 B450 AORUS PRO','B450'),(23,'GIGABYTE B550M AORUS ELITE','B550'),(24,'GIGABYTE X570 AORUS ELITE WIFI','X570'),(25,'GIGABYTE B550 AORUS PRO','B550'),(26,'GIGABYTE X570 AORUS PRO','X570'),(27,'GIGABYTE X570 AORUS XTREME','X570'),(28,'GIGABYTE X570 AORUS MASTER','X570'),(29,'GIGABYTE B450 AORUS Elite V2','B450'),(30,'GIGABYTE B550 AORUS ELITE V2','B550'),(31,'GIGABYTE B550M GAMING','B550'),(32,'GIGABYTE B350 GAMING','B350'),(33,'GIGABYTE X370 GAMING','X370'),(34,'GIGABYTE B450M GAMING','B450'),(35,'GIGABYTE B550 GAMING X V2','B550'),(36,'GIGABYTE A320M S2H','A320'),(37,'GIGABYTE B550M DS3H','B550'),(38,'GIGABYTE B550M S2H','B550'),(39,'GIGABYTE X570 UD','X570'),(40,'GIGABYTE B350M D3H','B350'),(41,'GIGABYTE B450M S2H','B450'),(42,'GIGABYTE B450M DS3H','B450'),(43,'GIGABYTE X370M DS3H','X370'),(44,'GIGABYTE A520M S2H','A520'),(45,'ASUS PRIME A320M-C R2.0','A320'),(46,'ASUS PRIME B450M-GAMING II','B450'),(47,'ASUS ROG CROSSHAIR VI HERO','X370'),(48,'ASUS TUF GAMING X570 PLUS','X570'),(49,'ASUS TUF GAMING B450M-PRO II','B450'),(50,'ASUS TUF GAMING B450M PLUS II','B450'),(51,'MSI B450M PRO-M2 MAX','B450'),(52,'MSI B450 TOMAHAWK MAX','B450'),(53,'MSI PRESTIGE X570 CREATION','X570'),(54,'MSI MPG X570 GAMING PLUS','X570'),(55,'MSI A520M-A PRO','A520'),(56,'MSI MAG B550M VECTOR WIFI','B550'),(57,'MSI MPG B550I GAMING EDGE MAX WIFI','B550'),(58,'ASROCK B550M-HDV','B550'),(59,'ASROCK X570 Steel Legend','X570'),(60,'ASROCK X570 Phantom Gaming 4','X570'),(61,'ASROCK B550 Taichi Razer Edition','B550'),(62,'ASROCK B550 Taichi','B550'),(63,'ASROCK B550 Steel Legend','B550'),(64,'ASROCK B550M Steel Legend','B550'),(65,'ASROCK B550M Phantom Gaming 4','B550'),(66,'ASROCK A520M Phantom Gaming 4','A520'),(67,'ASROCK A520M-HDV','A520'),(68,'ASROCK X470 Taichi Ultimate','X470'),(69,'ASROCK B450 Steel Legend','B450'),(70,'ASROCK B450M Steel Legend','B450'),(71,'ASROCK B450M PRO4','B450'),(72,'ASROCK X370 Taichi','X370'),(73,'ASROCK X370 Pro4','X370'),(74,'ASROCK B350M','B350'),(75,'ASROCK A320M-HD','A320'),(76,'ASROCK A320M Pro4-F','A320'),(77,'BIOSTAR X570GTA','X570'),(78,'BIOSTAR X570GT','X570'),(79,'BIOSTAR B550T-SILVER ','B550'),(80,'BIOSTAR B550M-SILVER ','B550'),(81,'BIOSTAR B550GTA','B550'),(82,'BIOSTAR B550MH','B550'),(83,'BIOSTAR A520MH','A520'),(84,'BIOSTAR X470GTA','X470'),(85,'BIOSTAR X470MH','X470'),(86,'BIOSTAR B450MH','B450'),(87,'BIOSTAR B450GT','B450'),(88,'BIOSTAR B450MHP','B450'),(89,'BIOSTAR X370GT3','X370'),(90,'BIOSTAR X370GT5','X370'),(91,'BIOSTAR B350GTX','B350'),(92,'BIOSTAR B350M','B350'),(93,'BIOSTAR A320MH 2.0','A320'),(94,'BIOSTAR A320MH','A320');
/*!40000 ALTER TABLE `amdmotheboards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amdssd_motheboard`
--

DROP TABLE IF EXISTS `amdssd_motheboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amdssd_motheboard` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `amdmotheboard_id` int unsigned DEFAULT NULL,
  `amdssd_id` int unsigned DEFAULT NULL,
  `ssd_name` varchar(150) DEFAULT NULL,
  `operatingvoltage_ssd` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `FK_amdssd_motheboards_ssd_amdintelssd_name` (`ssd_name`),
  KEY `FK_amdssd_motheboards_amdssd_operatingvoltage_ssd` (`operatingvoltage_ssd`),
  KEY `FK_amdssd_mothebords_motheboards_id` (`amdmotheboard_id`),
  KEY `FK_amdssd_motheboards_amdssd_id_idx` (`amdssd_id`),
  CONSTRAINT `FK_amdssd_motheboards_amdssd_id` FOREIGN KEY (`amdssd_id`) REFERENCES `amdintelssd` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_amdssd_motheboards_amdssd_operatingvoltage_ssd` FOREIGN KEY (`operatingvoltage_ssd`) REFERENCES `amdintelssd` (`operatingvoltage`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_amdssd_motheboards_motheboards_id` FOREIGN KEY (`amdmotheboard_id`) REFERENCES `amdmotheboards` (`id`),
  CONSTRAINT `FK_amdssd_motheboards_ssd_amdintelssd_name` FOREIGN KEY (`ssd_name`) REFERENCES `amdintelssd` (`namessd`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amdssd_motheboard`
--

LOCK TABLES `amdssd_motheboard` WRITE;
/*!40000 ALTER TABLE `amdssd_motheboard` DISABLE KEYS */;
INSERT INTO `amdssd_motheboard` VALUES (1,21,1,'ADATA Premier Pro SP600 - 128GB','1,5');
/*!40000 ALTER TABLE `amdssd_motheboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intelcpus`
--

DROP TABLE IF EXISTS `intelcpus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intelcpus` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `intelcpuname` varchar(150) NOT NULL,
  `intelcpuversion` varchar(45) NOT NULL,
  `intelcpulga` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `intelcpuname_UNIQUE` (`intelcpuname`)
) ENGINE=InnoDB AUTO_INCREMENT=179 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intelcpus`
--

LOCK TABLES `intelcpus` WRITE;
/*!40000 ALTER TABLE `intelcpus` DISABLE KEYS */;
INSERT INTO `intelcpus` VALUES (10,'Core i9-10900K','I9','1200'),(11,'Core i9-10900','I9','1200'),(12,'Core i9-10900T','I9','1200'),(13,'Core i9-10850K','I9','1200'),(14,'Core i7-10700K','I7','1200'),(15,'Core i7-10700','I7','1200'),(16,'Core i7-10700T','I7','1200'),(17,'Core i5-10600K','I5','1200'),(18,'Core i5-10600','I5','1200'),(19,'Core i5-10600T','I5','1200'),(20,'Core i5-10500','I5','1200'),(21,'Core i5-10500T','I5','1200'),(22,'Core i5-10400','I5','1200'),(23,'Core i5-10400T','I5','1200'),(24,'Core i3-10325','I3','1200'),(25,'Core i3-10305','I3','1200'),(26,'Core i3-10305T','I3','1200'),(27,'Core i3-10105','I3','1200'),(28,'Core i3-10105T	','I3','1200'),(29,'Core i3-10320','I3','1200'),(30,'Core i3-10300','I3','1200'),(31,'Core i3-10300T','I3','1200'),(32,'Core i3-10100T','I3','1200'),(33,'Pentium G6605','Pentium','1200'),(34,'Pentium G6505','Pentium','1200'),(35,'Pentium G6505T','Pentium','1200'),(36,'Pentium G6405','Petium','1200'),(37,'Pentium G6405T','Petium','1200'),(38,'Pentium G6600','Petium','1200'),(39,'Pentium G6500','Petium','1200'),(40,'Pentium G6500T','Petium','1200'),(41,'Pentium G6400','Petium','1200'),(42,'Pentium G6400T','Petium','1200'),(43,'Celeron G5925','Celeron','1200'),(44,'Celeron G5920','Celeron','1200'),(45,'Celeron G5905','Celeron','1200'),(46,'Celeron G5905T','Celeron','1200'),(47,'Celeron G5900','Celeron','1200'),(48,'Celeron G5900T','Celeron','1200'),(49,'Core i9-13900KF','i9','000'),(50,'Core i9-13900K','i9','000'),(51,'Core i7-13700KF','i7','000'),(52,'Core i7-13700K','i7','000'),(53,'Core i5-13600KF','i5','000'),(54,'Core i5-13600K','i5','000'),(55,'Core i9-12900KS','i9','000'),(56,'Core i5-12600T','i5','000'),(57,'Core i5-12600','i5','000'),(58,'Core i5-12500T','i5','000'),(59,'Core i5-12500','i5','000'),(60,'Core i5-12400T','i5','000'),(61,'Core i5-12400F','i5','000'),(62,'Core i5-12400','i5','000'),(63,'Core i3-12100T','i3','000'),(64,'Core i3-12100F','i3','000'),(65,'Core i3-12100','i3','000'),(66,'Core i3-12300T','i3','000'),(67,'Core i3-12300','i3','000'),(68,'Pentium G7400T','Pentium','000'),(69,'Pentium G7400','Pentium','000'),(70,'Celeron G6900T','Celeron','000'),(71,'Celeron G6900','Celeron','000'),(72,'Core i9-12900T','i9','000'),(73,'Core i9-12900KF','i9','000'),(74,'Core i9-12900K','i9','000'),(75,'Core i9-12900F','i9','000'),(76,'Core i9-12900','i9','000'),(77,'Core i7-12700T','i7','000'),(78,'Core i7-12700KF','i7','000'),(79,'Core i7-12700K','i7','000'),(80,'Core i7-12700F','i7','000'),(81,'Core i7-12700','i7','000'),(82,'Core i5-12600KF','i5','000'),(83,'Core i5-12600K','i5','000'),(98,'Core i5-11400','i5','000'),(99,'Core i5-11400F','i5','000'),(100,'Core i5-11400T','i5','000'),(101,'Core i5-11500','i5','000'),(102,'Core i5-11500T','i5','000'),(103,'Core i5-11600','i5','000'),(104,'Core i5-11600K','i5','000'),(105,'Core i5-11600KF','i5','000'),(106,'Core i5-11600T','i5','000'),(111,'Core i7-11700F','i7','000'),(112,'Core i7-11700K','i7','000'),(113,'Core i7-11700KF','i7','000'),(114,'Core i7-11700T','i7','000'),(115,'Core i9-11900','i9','000'),(116,'Core i9-11900F','i9','000'),(117,'Core i9-11900K','i9','000'),(118,'Core i9-11900KF','i9','000'),(119,'Core i9-11900T','i9','000'),(120,'Pentium Gold G6400','Pentium','000'),(121,'Pentium Gold G6400T','Pentium','000'),(122,'Pentium Gold G6405','Pentium','000'),(123,'Pentium Gold G6405T','Pentium','000'),(124,'Pentium Gold G6500','Pentium','000'),(125,'Pentium Gold G6500T','Pentium','000'),(126,'Pentium Gold G6505','Pentium','000'),(127,'Pentium Gold G6505T','Pentium','000'),(128,'Pentium Gold G6600','Pentium','000'),(129,'Pentium Gold G6605','Pentium','000'),(130,'Pentium Gold G7400','Pentium','000'),(131,'Pentium Gold G7400T','Pentium','000'),(132,'Core i5-12490F','i5','000'),(133,'Core i9-9900KS','i9','000'),(134,'Core i9-9900KF','i9','000'),(135,'Core i9-9900K','i9','000'),(136,'Core i9-9900','i9','000'),(137,'Core i7-9700K','i7','000'),(138,'Core i7-9700T','i7','000'),(139,'Core i7-9700','i7','000'),(140,'Core i7-9700KF','i7','000'),(141,'Core i7-9700F','i7','000'),(142,'Core i7-8700K','i7','000'),(143,'Core i7-8700','i7','000'),(144,'Core i7-8086K','i7','000'),(145,'Core i5-9600KF','i5','000'),(146,'Core i5-9600K','i5','000'),(147,'Core i5-9400F','i5','000'),(148,'Core i5-9400T','i5','000'),(149,'Core i5-9600','i5','000'),(150,'Core i5-9500','i5','000'),(151,'Core i5-9400','i5','000'),(152,'Core i5-9500T','i5','000'),(153,'Core i5-8600K','i5','000'),(154,'Core i5-8600','i5','000'),(155,'Core i5-8500','i5','000'),(156,'Core i5-8500T','i5','000'),(157,'Core i5-8400','i5','000'),(158,'Core i5-8400T','i5','000'),(159,'Core i3-8350K','i3','000'),(160,'Core i3-9350KF','i3','000'),(161,'Core i3-9100F','i3','000'),(162,'Core i3-9300','i3','000'),(163,'Core i3-9100','i3','000'),(164,'Core i3-8300','i3','000'),(165,'Core i3-8100','i3','000'),(166,'Pentium Gold G5600T','Pentium','000'),(167,'Pentium Gold G5420T','Pentium','000'),(168,'Pentium Gold G5600F','Pentium','000'),(169,'Pentium Gold G5420','Pentium','000'),(170,'Pentium Gold G5620','Pentium','000'),(171,'Pentium Gold G5600','Pentium','000'),(172,'Pentium Gold G5500','Pentium','000'),(173,'Pentium Gold G5500T','Pentium','000'),(174,'Pentium Gold G5400','Pentium','000'),(175,'Pentium Gold G4920','Pentium','000'),(176,'Pentium Gold G4930T','Pentium','000'),(177,'Pentium Gold G4950','Pentium','000'),(178,'Pentium Gold G4900','Pentium','000');
/*!40000 ALTER TABLE `intelcpus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intelcpus_motheboard_memoryram`
--

DROP TABLE IF EXISTS `intelcpus_motheboard_memoryram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intelcpus_motheboard_memoryram` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `intelmotheboard_id` int unsigned DEFAULT NULL,
  `intelcpu_id` int unsigned DEFAULT NULL,
  `cpu_name` varchar(150) DEFAULT NULL,
  `memoryram_name` varchar(150) DEFAULT NULL,
  `memoryram_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `FK_intelcpus_motheboard_memoryram_intelcpus` (`intelcpu_id`),
  KEY `FK_intelcpus_motheboard_memoryram_amdintelmemoryram` (`memoryram_name`),
  KEY `FK_intelcpus_motheboard_memoryram_amdintelmemoryram_2` (`memoryram_id`),
  KEY `FK_intelcpus_motheboard_memoryram_intelcpus_2` (`cpu_name`),
  KEY `FK_intelcpus_motheboard_memoryram_intelmotheboards_idx` (`intelmotheboard_id`),
  CONSTRAINT `FK_intelcpus_motheboard_memoryram_amdintelmemoryram` FOREIGN KEY (`memoryram_name`) REFERENCES `amdintelmemoryram` (`namememoryram`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_intelcpus_motheboard_memoryram_amdintelmemoryram_2` FOREIGN KEY (`memoryram_id`) REFERENCES `amdintelmemoryram` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_intelcpus_motheboard_memoryram_intelcpus` FOREIGN KEY (`intelcpu_id`) REFERENCES `intelcpus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_intelcpus_motheboard_memoryram_intelcpus_2` FOREIGN KEY (`cpu_name`) REFERENCES `intelcpus` (`intelcpuname`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_intelcpus_motheboard_memoryram_intelmotheboards` FOREIGN KEY (`intelmotheboard_id`) REFERENCES `intelmotheboards` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intelcpus_motheboard_memoryram`
--

LOCK TABLES `intelcpus_motheboard_memoryram` WRITE;
/*!40000 ALTER TABLE `intelcpus_motheboard_memoryram` DISABLE KEYS */;
/*!40000 ALTER TABLE `intelcpus_motheboard_memoryram` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intelmotheboards`
--

DROP TABLE IF EXISTS `intelmotheboards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intelmotheboards` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `motheboard` varchar(45) NOT NULL,
  `motheboardversionintel` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intelmotheboards`
--

LOCK TABLES `intelmotheboards` WRITE;
/*!40000 ALTER TABLE `intelmotheboards` DISABLE KEYS */;
INSERT INTO `intelmotheboards` VALUES (4,'GIGABYTE H410M H V3','H410M'),(5,'Gigabyte B360M Aorus Gaming 3','B360M'),(7,'Gigabyte B660 AORUS ELITE','B660'),(8,'Gigabyte  Z590 AORUS TACHYON','Z590'),(9,'Gigabyte B560M AORUS PRO','B560M'),(10,'Gigabyte H470 AORUS PRO AX','H470'),(11,'Gigabyte B460 AORUS PRO AC','B460'),(12,'Gigabyte H470I AORUS PRO AX','H470I'),(13,'Gigabyte Z490 AORUS ELITE AC','Z490'),(14,'Gigabyte Z370 AORUS GAMING WIFI','Z370'),(15,'Gigabyte B460M AORUS PRO','B460M'),(16,'Gigabyte Z490 AORUS PRO AX','Z490'),(17,'Gigabyte B560 AORUS PRO AX','B560'),(18,'Gigabyte Z590 AORUS ELITE','Z590'),(19,'Gigabyte B660M AORUS PRO','B660M'),(20,'Gigabyte Z690 AORUS ELITE','Z690'),(21,'Gigabyte B360M GAMING HD','B360M'),(22,'Gigabyte Z390 M GAMING','Z390'),(23,'Gigabyte Z490M GAMING','Z490M'),(24,'Gigabyte B560M GAMING HD','B560M'),(25,'Gigabyte B660M GAMING X','B660M'),(26,'Gigabyte Z690 GAMING X','Z690'),(27,'Gigabyte H410M S2H','H410M'),(28,'Gigabyte H310M D3H','H310M'),(29,'Gigabyte B460M H','B460M'),(30,'Gigabyte H510M S2H V2','HS10M'),(31,'Gigabyte H610M S2H','H610M'),(34,'ASUS PRIME Z790M-PLUS D4','Z790M'),(35,'ASUS TUF GAMING Z790-PLUS D4','Z790'),(36,'ASUS ROG STRIX Z790-A GAMING WIFI D4','Z790'),(37,'ASUS EX-B660M-V5 D4','B660'),(38,'ASUS PRIME H610M-E D4','B610'),(39,'ASUS TUF GAMING B660M-E D4','B660'),(40,'ASUS ROG STRIX B660-A GAMING WIFI D4','B660'),(41,'ASUS TUF GAMING B660-PLUS WIFI D4','B660'),(42,'ASUS PRIME Z690M-PLUS D4','Z690'),(43,'ASUS PRIME Z590-P WIFI','Z590'),(44,'ASUS PRIME H510M-D','Z590'),(45,'ASUS PRIME Z590-P','Z590'),(46,'ASUS TUF GAMING B460-PLUS','B460'),(47,'ASUS PRIME H410M-E','B410'),(48,'ASUS PRIME Z490-P','B490'),(49,'ASUS ROG MAXIMUS XII FORMULA','Z490'),(53,'ASROCK Z690 Steel Legend','Z690'),(54,'ASROCK Z690 Phantom Gaming 4','Z690'),(55,'ASROCK Z690 Pro RS','Z690'),(56,'ASROCK H670 Steel Legend','H670'),(57,'ASROCK B660 Steel Legend','B660'),(58,'ASROCK B660M Steel Legend','B660'),(59,'ASROCK B660M Phantom Gaming 4','B660'),(60,'ASROCK H470 Steel Legend','H470'),(61,'ASROCK H470M-ITX/ac','H470'),(62,'ASROCK H470 Phantom Gaming 4','H470'),(63,'ASROCK B460 Steel Legend','B460'),(64,'ASROCK H410M/ac','H410'),(65,'ASROCK B460TM-ITX','B460'),(66,'ASROCK B460M Pro4/ac','B460'),(67,'ASROCK B560 Steel Legend','B560'),(68,'ASROCK B560 Pro4','B560'),(69,'ASROCK H570 Steel Legend','H570'),(70,'ASROCK H570 Phantom Gaming 4','H570'),(71,'ASROCK Z590 Phantom Gaming 4','Z590'),(72,'ASROCK Z590M Pro4','Z590'),(73,'ASROCK H370M-HDV','H370'),(74,'ASROCK B365 Phantom Gaming 4','B365'),(75,'ASROCK B365 Pro4','B365'),(76,'ASROCK H310CM-HDV/M.2','H310'),(79,'BIOSTAR B660T-SILVER','B660'),(80,'BIOSTAR B660MXC PRO','B660'),(81,'BIOSTAR H610MHP','H610'),(82,'BIOSTAR B660MX-E','B660'),(83,'BIOSTAR B560MHP 2.0','B560'),(84,'BIOSTAR H510MHP 2.0','H510'),(86,'BIOSTAR H410MH S2','H410'),(87,'BIOSTAR B560M-SILVER','B560'),(88,'BIOSTAR H310MHP 3.0','H310'),(89,'BIOSTAR B560MH-E PRO','B560'),(90,'BIOSTAR B365GTQ','B365'),(91,'BIOSTAR Z370GT7','Z370');
/*!40000 ALTER TABLE `intelmotheboards` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-23 21:34:28
