-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1:3306
-- 產生時間： 2022-04-03 22:59:10
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
  `animatePic` varchar(20) NOT NULL,
  `video` varchar(20) NOT NULL,
  `mediaType` varchar(10) NOT NULL,
  `descMain` text NOT NULL,
  `desc2` text NOT NULL,
  `desc3` text NOT NULL,
  `posterDesc` text NOT NULL,
  `abbr` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `tbl_projects`
--

INSERT INTO `tbl_projects` (`id`, `title`, `year`, `category`, `role`, `thumbPic`, `heroPic`, `animatePic`, `video`, `mediaType`, `descMain`, `desc2`, `desc3`, `posterDesc`, `abbr`) VALUES
(11, 'CoorS Beer Mashup', '2021', 'Individual project', 'Designer & front-end developer', 'proj-nav-11.jpg', 'beer-1.jpg', 'beer-2.gif', 'beer.mp4', 'website', 'The beer mashup  is an integrated project that contains branding, logo design, product packaging, 3D modeling, 3D animation and video editing, as well as page design and front-end coding with HTML, CSS and JavaScript. In this project, I applied the styling elements from Gas-X to the classic beer brand, Coors. Deriving from the overall look and feel of Gas-X, the new brand CoorS has an opening and sports-loving personality.', 'The website I build for CoorS.ca takes CSS animation and junior JavaScript functions. On the left there is an slide box to present different products that the user can choose from an icon list.', 'The commercial is an individual creation using Cinema 4D and Adobe After Effects. In the video, I would like the product to have a modern felling, and also indicate the crisp and refreshing taste of the beer.', '', 'beer'),
(1, 'APOPO Charity 5K Run (Part A)', '2022', 'Group project of 3', 'Motion designer, back-end developer', 'proj-nav-1.jpg', '', '', 'apopo.mp4', 'featured', 'On the current page I will talk about how the campaign idea developed as a group work. APOPO is a NGO that trains rats and dogs to detect landmines and tuberculosis. We chose APOPO to carry out a summer campaign because we believe the potential audience will be easily attracted by APOPO\'s work that cute animals helping human to make this world better. During the designing process of the campaign, the war in Ukraine has happened, so we decided to not only include the landmine area in general, but also target on people in Ukraine who need help.', 'With some research, we found that in the past campaigns, APOPO has put more efforts on offline activities, and during the pandemic time, it is not a good idea to gather guests for a training center trip. Also, in the past campaign such as 2020 Year of Rat, APOPO has created a rat character as visual interest, but it is less attracting.', 'Firstly, we decided to build a 3D model of HeroRat that stands for APOPO. We want to carry out a campaign that most people, if not everyone, can participate, regardless of their equipment or location. Therefore, we planned a location based camera function for users to let the HeroRat detecting fictional landmine by taking photos. On the second stage, we think the purpose of the camera function is less clear, so we have adjusted the activity to a 5 km running event that collect funds for APOPO and Ukraine warzones. The user can use our campaign app to track their running time and distance. If the user does not like running, they can also donate directly on the app.', 'Design process of character model.', 'apopo'),
(12, 'Photography & Artworks', '', '', '', 'proj-nav-ed.jpg', 'gallery-1.jpg', '', '', 'gallery', 'Apart from the projects, I also like drawing and photographing. I learn the drawing skills by communicating with friends in an anime club, and I believe it is a better way than learning it alone. For photographing part, my interest is in the none-human things like the environment, the building and street, or the items. The environment and surroundings are good place to let us dig into our thoughts, or just take a quick rest from the complexity of human world.', '', '', '', ''),
(8, 'Sportsnet Football Intro', '2021', 'Individual project', 'Motion designer', 'proj-nav-8.jpg', '', '', 'sportsnet.mp4', 'motion', 'This sportsnet video is made up for a football event between Chicago Bears and Dallas Cowboys. In this project, I followed tutorial series of Cinema 4D and Adobe After Effect. I build 3d models for the stadium, then edit the rendered images into final video.', '', '', '', 'sportsnet'),
(5, 'Makeup Product Line', '2021', 'Individual project', 'Branding, marketing & motion designer', 'proj-nav-5.jpg', '', '', 'seven.mp4', 'motion', 'This is an integrated designing project for a cosmetic brand called Seven. I related the brand to the seven sisters in Greek mythology to indicate the elegance and femine feature of cosmetic products. The product line includes brand and logo design, style guide, product mockup, magazine spread and social media advertising, and promotional video.', '', '', '', 'seven'),
(10, 'Morphing Commercial', '2021', 'Individual project', 'Motion designer', 'proj-nav-10.jpg', '', '', 'morphing.mp4', 'motion', 'In this project, I used free 3D models to create morphing animation in Cinema 4D, and enhanced the video in After Effect. The furniture shop is a fictional brand, but I tried to impress the audience by showing the coziness of chairs with energetic colors.', '', '', '', 'morphing'),
(2, 'APOPO Charity 5K Run (Part B)', '2022', 'Group project of 3', 'Motion designer, back-end developer', 'proj-nav-2.jpg', 'apopo-1.jpg', 'apopo-2.gif', 'apopoBack.mp4', 'website', 'On this page I will explain the back-end part of the project. To expand the reach and influence of the campaign, we need a newsletter subscribing function to store users\' email. There is also a gallery page that should present image data from database. To achieve the two functions, the campaign site connects to database by PHP, then pass the data by routers in VueCli back-end and front-end.', 'When click on the \"sign up\" button, the site will navigate to newsletter page. After filling the form and clicking on \"submit\" button, the user\'s name and email will be stored in our database, and a message of successful submission will show up.', 'Here is a screen recording of how the functions with back-end works.', '', 'apopoBack'),
(3, 'No Need for Weed Campaign', '2022', 'Group project of 3', 'Campaign poster designer (without tagline), video polishing', 'proj-nav-3.jpg', '', '', 'miniAd.mp4', 'featured', 'This is a mini campaign assignment that carried out for Health Canada aiming to rise awareness of improper use of marijuana. In the 3 posters, we decided to show how hallucinations affect our cognition of real world, and we selected 3 contexts where the use of marijuana could cause negative effect. In the short video, we focus on the danger of driving when lose control of consciousness. \r\n', 'The core of the mini campaign is to convey the message that drug use causes danger. This task can be broken down into several steps: 1) letting the audience understand the context of poster; 2) visualizing the fluid, everchanging hallucination on still image; 3) applying the environment to suggest the outcome of the story.', 'From researching on related topic, I found that after using marijuana, people reported that they are more aware of sensation and see vivid color. As a result, I choose to make the background be black, showing the boredom of real life; to bring a contrast, I use bright colour on the surreal elements on the posters. The noise and distort effects on the poster and video are also showing the feel of unreal and unreliable.', 'Three campaign posters.', 'miniAd'),
(4, 'Title Sequence Recreating', '2022', 'Individual', 'Video producer', 'proj-nav-4.jpg', '', '', 'blyManor.mp4', 'motion', 'For this project, I select one of my favourite show, the Haunting of Bly Manor, to recreate its opening title. Water is a key element in the show. It stands for the lay of the lake, or a different world, so the main style of my work is related to water. I researched about creating water drops, building underwater world, and making reflective water surface in After Effect. Then I use yellowish colour on the text for a contrast, also it suggests the ancient history of the Bly Manor.', '', '', '', 'blyManor'),
(6, 'Media Accessibility Research', '2022', 'Individual work', 'Front-end developer', 'proj-nav-6.jpg', 'accessibility-1.jpg', 'accessibility-2.gif', 'accessibility.mp4', 'website', 'The Audio/ Video Accessibility Research Project aims to make media as available to everyone as possible. Users can use Tab key to select all buttons across the three-page website. There are also custom video and audio controls that accept keyboard navigating. To help describe the media content, I included WebVTT subtitle for the video and text transcription for audio.', 'The media player is build with Plyr to enable customized controls. Users can enable and disable subtitle, change to full screen or Picture-in-Picture mode, and set video speed.', 'By using only Tab key, users can have access to all buttons throughout the site.', '', 'accessibility'),
(7, 'Boxing Sports Data Visualization', '2022', 'Group work of 2', 'Video producer', 'proj-nav-7.jpg', '', '', 'sportsVis.mp4', 'motion', 'In this assignment, we presented data and graphs about boxing by HUD animation. My work was to animate the UI design and style frames from my partner to make a finished video. With slow motion footages, I used motion tracker to attach UI to the athlete\'s movement. Other parts of the UI and decorations are all applied with dynamic animation by expression in After Effect.', '', '', '', 'sportsVis'),
(9, 'Chat Application', '2022', 'Individual work', 'Front-end and back-end developer', 'proj-nav-9.jpg', 'chatApp-1.jpg', 'chatApp-2.gif', 'chatApp.mp4', 'website', 'The Chat Application is an integrated build of Socket.io back-end server and VueCli front-end app. It supports multiple users connecting to the server and chatting together. Other features of this app includes: join chat anonymously, press Enter key to send message, label your own message in different colour, and showing users log on side bar.', 'In this easy-to-use app, users can type your message in the input area, then hit Enter or click on the send icon to deliver message, they can also receive messages from other joined users.', 'This is the whole process of using chat app, from logging in to carry out conversation.', '', 'chatApp');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
