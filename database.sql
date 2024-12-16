-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: dicsys
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `eliminado` tinyint DEFAULT NULL,
  `url_img` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Televisores',0,'https://i.blogs.es/2148ed/b117c43a76364cc45f1599ef37c5ad5c/1200_900.jpeg'),(2,'Computadoras',0,'https://concepto.de/wp-content/uploads/2020/06/Computadora-de-escritorio-scaled-e1724955496406.jpg'),(3,'Smartphones',0,'https://www.losandes.com.ar/resizer/v2/SXIFFNHIO5HUVI2EP4BUSY3K3A.jpeg?quality=75&smart=true&auth=bb904a15530d40c8f8356504bc994c1292e032550bf819ff5322701b1e8db93a&width=980&height=640'),(4,'Tablets',0,'https://static.independent.co.uk/2024/11/01/16/best-tablets-1-november-2024.jpg'),(5,'Consolas de Videojuegos',0,'https://buenisimo.mx/images/easyblog_articles/308/b2ap3_large_mejores-consolas-de-videojuegos.webp');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `fecha_vencimiento` date DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `url_img` varchar(250) DEFAULT NULL,
  `eliminado` tinyint DEFAULT NULL,
  `id_categoria` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_categoria_idx` (`id_categoria`),
  CONSTRAINT `categorias` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'TV Samsung 55\"','2025-12-31',50,1200,'https://images.fravega.com/f1000/799a8ceaf934954792eea028e9b44cfd.jpg',0,1),(2,'TV LG 65\"','2025-12-31',30,1500,'https://images.fravega.com/f1000/401dc80bded5539d1a78e834f1eafa11.jpg',0,1),(3,'TV Sony 50\"','2025-12-31',40,1300,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdTMDtfEJHpNtmhv7v67-a-mSrBJBJntviA&s',0,1),(4,'Laptop Dell XPS 13','2026-06-30',25,2000,'https://m.media-amazon.com/images/I/61uCHVcsAvL._AC_SL1105_.jpg',0,2),(5,'MacBook Pro','2026-06-30',20,2500,'https://ipoint.com.ar/25996-large_default/macbook-pro-13-apple-m2-chip-8-core-cpu-10-core-gpu-512gb-ssd.jpg',0,2),(6,'HP Spectre x360','2026-06-30',30,2200,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02m5ZQ4esUQlUTi_-dJheuSUmc-SliSm3Hw&s',0,2),(7,'iPhone 13','2024-12-31',60,999,'https://m.media-amazon.com/images/I/61H3jeeHnUL.jpg',0,3),(8,'Samsung Galaxy S21','2024-12-31',50,899,'https://m.media-amazon.com/images/I/61dlAm9BpqL.jpg',0,3),(9,'Google Pixel 6','2024-12-31',40,799,'https://m.media-amazon.com/images/I/61YsYjlywtL._AC_SL1500_.jpg',0,3),(10,'iPad Pro','2024-12-31',35,1099,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKz0WAgjtaYd5rsSVcTPuy4mwWQ9gOZeL2Dg&s',0,4),(11,'Samsung Galaxy Tab S7','2024-12-31',40,849,'https://multipoint.com.ar/Image/0/750_750-SM-T870NDBLARO-1.jpg',0,4),(12,'Microsoft Surface Pro 7','2024-12-31',25,999,'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surface-Pro-7-Black-Highlight-3000x1682:VP2-859x540',0,4),(13,'PlayStation 5','2027-12-31',45,499,'https://hiperaudio.com.ar/wp-content/uploads/2022/08/play-5.png',0,5),(14,'Xbox Series X','2027-12-31',50,499,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFRrbQ9WDJ6hiIreMaoOfVVLfR6gzKlr5bw&s',0,5),(15,'Nintendo Switch','2027-12-31',60,299,'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg/2560px-Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg',0,5),(16,'TV QLED Samsung 75\"','2025-12-31',35,2800,'https://images.samsung.com/is/image/samsung/p6pim/ar/qn75qn85cagczb/gallery/ar-qled-tv-qn75qn85cagczb-front-black-537038067?$650_519_PNG$',0,1),(17,'Asus ROG Zephyrus G14','2026-06-30',25,2200,'https://http2.mlstatic.com/D_NQ_NP_918507-MLA74527554072_022024-O.webp',0,2),(18,'Samsung Galaxy Z Fold 3','2024-12-31',40,1800,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfuYWSSuVevfG7bltZg1NYpoF_ncPYp5n9w&s',0,3),(19,'Microsoft Surface Go 3','2024-12-31',30,499,'https://http2.mlstatic.com/D_NQ_NP_821507-MLA73037504300_112023-O.webp',0,4),(20,'Xbox Series S','2027-12-31',55,299,'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ALSWDCH7PJBJPG6WHP632NO7Q4.png',0,5),(21,'Nothing phone 2','2025-03-07',120,3320,'https://i.blogs.es/42cf73/leds/450_1000.jpeg',NULL,3);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-16 19:10:09
