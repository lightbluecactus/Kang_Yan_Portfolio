-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1:3306
-- 產生時間： 2021-12-03 23:07:00
-- 伺服器版本： 5.7.31
-- PHP 版本： 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `db_rsdportfolio`
--

-- --------------------------------------------------------

--
-- 資料表結構 `tbl_projects`
--

DROP TABLE IF EXISTS `tbl_projects`;
CREATE TABLE IF NOT EXISTS `tbl_projects` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `year` varchar(20) NOT NULL,
  `category` varchar(40) NOT NULL,
  `role` varchar(60) NOT NULL,
  `thumbPic` varchar(20) NOT NULL,
  `heroPic` varchar(20) NOT NULL,
  `animePic` varchar(20) NOT NULL,
  `video` varchar(20) NOT NULL,
  `mediaType` varchar(10) NOT NULL,
  `descMain` text NOT NULL,
  `desc2` text NOT NULL,
  `desc3` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `tbl_projects`
--

INSERT INTO `tbl_projects` (`id`, `title`, `year`, `category`, `role`, `thumbPic`, `heroPic`, `animePic`, `video`, `mediaType`, `descMain`, `desc2`, `desc3`) VALUES
(1, 'CoorS Beer Mashup', 'Year: 2021', 'Category: Individual project', 'Role: Full stack designer & developer', 'proj-nav-1.jpg', 'beer-1.jpg', 'beer-2.gif', 'beer-3.mp4', 'detail', 'The beer mashup  is an integrated project that contains branding, logo design, product packaging, 3D modeling, 3D animation and video editing, as well as page design and front-end coding with HTML, CSS and JavaScript. In this project, I applied the styling elements from Gas-X to the classic beer brand, Coors. Deriving from the overall look and feel of Gas-X, the new brand CoorS has an opening and sports-loving personality.', 'The website I build for CoorS.ca takes CSS animation and junior JavaScript functions. On the left there is an slide box to present different products that the user can choose from an icon list.', 'The commercial is an individual creation using Cinema 4D and Adobe After Effects. In the video, I would like the product to have a modern felling, and also indicate the crisp and refreshing taste of the beer.'),
(2, 'Mini Models with Dynamic Data', 'Year: 2021', 'Category: Individual project', 'Role: Full stack designer & developer', 'proj-nav-2.jpg', 'mini-1.jpg', 'mini-2.gif', 'mini-3.mp4', 'detail', 'The aim of this project is to practice using database and AJAX method. I rebuild the webpage of mini.ca to let it emphasize on the main function of this project. The programing languages used are JavaScript and PHP, also the framework of Vue.js is applied to display the content efficiently.', 'Users can click on one of the three models in the thumbnail list, then the website will retrieve the corresponding data from database and show text details, images and/or videos of this model.', 'Depending on which model is showing, the data will be customized - some contain a video, and others contain an image instead of the video. This is accomplished in Vue.js.'),
(3, 'Photography & Artworks', '', '', '', 'proj-nav-ed.jpg', 'gallery-1.jpg', '', '', 'gallery', 'Apart from the projects, I also like drawing and photographing. I learn the drawing skills by communicating with friends in an anime club, and I believe it is a better way than learning it alone. For photographing part, my interest is in the none-human things like the environment, the building and street, or the items. The environment and surroundings are good place to let us dig into our thoughts, or just take a quick rest from the complexity of human world.', '', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
