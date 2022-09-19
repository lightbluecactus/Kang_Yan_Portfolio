-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1:3306
-- 產生時間： 2022-09-19 02:44:29
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
  `ord` int(2) NOT NULL,
  `title` varchar(50) NOT NULL,
  `year` varchar(20) NOT NULL,
  `category` varchar(40) NOT NULL,
  `role` varchar(60) NOT NULL,
  `link` varchar(60) NOT NULL,
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

INSERT INTO `tbl_projects` (`id`, `ord`, `title`, `year`, `category`, `role`, `link`, `thumbPic`, `heroPic`, `animatePic`, `video`, `mediaType`, `descMain`, `desc2`, `desc3`, `posterDesc`, `abbr`) VALUES
(1, 1, 'APOPO Charity 5K Run (Part A)', '2022', 'Group project of 3', 'Motion designer, back-end developer', '', 'proj-nav-1.jpg', '', '', 'apopo.mp4', 'featured', 'The current page shows how the campaign idea developed in our group work. APOPO is an NGO that trains rats and dogs to detect landmines and tuberculosis. We chose APOPO to carry out a summer campaign because we believe the potential audience will be easily attracted by APOPO\'s work with their cute animals helping human to make this world better. During the designing process of the campaign, the war in Ukraine has happened, so we decided to not only include the landmine area in general, but also target on people in Ukraine who needs help.', 'With some research, we found that in past campaigns, APOPO has put more effort into offline activities, and during the pandemic time, it is not a good idea to gather guests for a training center trip. Also, in past campaign such as \"2020 Year of Rat\", APOPO has created a rat character as visual interest, but it is less attractive.', 'Firstly, we decided to build a 3D model of HeroRat that stands for APOPO. We wanted to carry out a campaign that most people, if not everyone, can participate in, regardless of their equipment or location. Therefore, we planned a location-based camera function for users to let the HeroRat detect fictional landmines by taking photos. In the second stage, we thought the purpose of the camera function is less clear, so we adjusted the activity to a 5 km running event that collects funds for APOPO and Ukraine warzones. The user can use our campaign app to track their running time and distance. If the user does not like running, they can also donate directly through the app.', 'Design process of character model.', 'apopo'),
(12, 12, 'Photography & Artworks', '', '', '', '', 'proj-nav-ed.jpg', 'gallery-1.jpg', '', '', 'gallery', 'Apart from the projects, I also like illustrating and photographing. I used to learn painting skills by communicating with friends in an anime club, but now I also attended several online courses to improve my skill. I enjoy creating my own world through illustrating. For photographing part, my interest is in things such as the environment,  buildings, streets, or items. The environment and surroundings are good places to let us dig into our thoughts, or just take a quick rest from the complexity of the human world.', '', '', '', 'gallery'),
(10, 10, 'Sportsnet Football Intro', '2021', 'Individual project', 'Motion designer', '', 'proj-nav-10.jpg', '', '', 'sportsnet.mp4', 'motion', 'This sportsnet video is made up for a football event between Chicago Bears and Dallas Cowboys. In this project, I followed a tutorial series of Cinema 4D and Adobe After Effects. I build 3d models for the stadium, then edit the rendered image sequence into a final video.', '', '', '', 'sportsnet'),
(7, 7, 'Makeup Product Line', '2021', 'Individual project', 'Branding, marketing & motion designer', '', 'proj-nav-7.jpg', '', '', 'seven.mp4', 'motion', 'This is an integrated design project for a cosmetic brand called Seven. I related the brand to the seven sisters in Greek mythology to indicate the elegance and feminine features of cosmetic products. The product line includes brand and logo design, style guide, product mockup, magazine spread and social media advertising, and promotional video.', '', '', '', 'seven'),
(2, 2, 'APOPO Charity 5K Run (Part B)', '2022', 'Group project of 3', 'Motion designer, back-end developer', 'https://apopongocampaign.netlify.app', 'proj-nav-2.jpg', 'apopo-1.jpg', 'apopo-2.gif', 'apopoBack.mp4', 'website', 'Part B of this project is the back-end development. To expand the reach and influence of the campaign, we included a newsletter subscribing function to store users\' emails. There is also a gallery page that should present image data from our database. To achieve the two functions, the campaign site connects to the database by PHP, then passes the data by routers in VueCli\'s back-end and front-end.', 'When clicking on the \"sign up\" button, the site will navigate to the newsletter page. After filling out the form and clicking on the \"submit\" button, the user\'s name and email will be stored in our database, and a message of successful submission will show up.', 'Here is a screen recording of how the functions with back-end works.', '', 'apopoBack'),
(3, 3, 'No Need for Weed Campaign', '2022', 'Group project of 3', 'Campaign poster designer (without tagline), video polishing', '', 'proj-nav-3.jpg', '', '', 'miniAd.mp4', 'featured', 'This is a mini-campaign assignment carried out for Health Canada aiming to rise awareness of the improper use of marijuana. In the 3 posters, we decided to show how hallucinations affect our cognition of the real world, and we selected 3 contexts where the use of marijuana could cause negative effects. In the short video, we focus on the danger of driving when loses control of consciousness. ', 'The core of the mini-campaign is to convey the message that drug use causes danger. This task can be broken down into several steps: 1) letting the audience understand the context of the posters; 2) visualizing the fluid, everchanging hallucination on still images; 3) applying the environment to suggest the outcome of the story.', 'By researching related topics, I found that after using marijuana, people reported that they are more aware of sensations and see vivid colors. As a result, I choose to make the background be black, showing the boredom of real life; to bring contrast, I use bright colours on the surreal elements on the posters. The noise and distorted effects on the poster and video are also showing the feelings of unreal and unreliable.', 'Three campaign posters.', 'miniAd'),
(4, 4, 'Title Sequence Recreating', '2022', 'Individual project', 'Video producer', '', 'proj-nav-4.jpg', '', '', 'blyManor.mp4', 'motion', 'For this project, I select one of my favourite shows, the Haunting of Bly Manor, to recreate its opening title. Water is a key element in the show. It stands for the lady of the lake, or a different world, so the main style of my work is related to water. I researched on creating water drops, building an underwater world, and making reflective water surface in After Effect. Then I use yellowish colour on the text for a contrast; also, it suggests the ancient history of the Bly Manor.', '', '', '', 'blyManor'),
(8, 8, 'Media Accessibility Research', '2022', 'Individual project', 'Front-end developer', 'https://av-accessibility-research.herokuapp.com', 'proj-nav-8.jpg', 'accessibility-1.jpg', 'accessibility-2.gif', 'accessibility.mp4', 'website', 'The Audio/ Video Accessibility Research Project aims to make media as available to everyone as possible. Users can use the Tab key to select all buttons across the three-page website. There are also custom video and audio controls that accept keyboard navigation. To help describe the media content, I included WebVTT subtitles for the video and text transcription for the audio.', 'The media player is built with Plyr to enable customized controls. Users can enable and disable subtitles, change to full screen or Picture-in-Picture mode, and set video speed.', 'By using only the Tab key, users can have access to all buttons throughout the site.', '', 'accessibility'),
(9, 9, 'Boxing Sports Data Visualization', '2022', 'Group work of 2', 'Video producer', '', 'proj-nav-9.jpg', '', '', 'sportsVis.mp4', 'motion', 'In this assignment, we presented data and graphs about boxing by HUD animation. My work was to animate the UI design and style frames from my partner to make a finished video. With slow motion footage, I used motion trackers to attach UI to the athlete\'s movement. Other parts of the UI and decorations are all applied with dynamic animation by expression in After Effect.', '', '', '', 'sportsVis'),
(5, 5, 'Northern Shopify Development', '2022', 'Individual project', 'Front-end designer & developer', '', 'proj-nav-5.jpg', 'blueCactus-1.jpg', 'blueCactus-2.gif', 'blueCactus.mp4', 'website', 'I took an online Shopify course provided by Northern Commerce from February to April 2022. This final project that I built is a fictional stationery store that presents all of the skills and tricks I have learned. I designed the branding assets and the page style, organized products and collections, enhanced customers\' account and payment processes, and customized default codes using Shopify CLI. The link to the site is temporary since my Shopify account was provided by Northern, so I\'d like to present the site by screen recording below.', 'This part shows the customer logging-in page, customer\'s cart, and payment process. The gift card checkbox is added through Shopify CLI.', 'The main parts of the prototype: home page, products, products\' detail page, customer logging in, cart and check out, payment, about, and blog posts.', '', 'blueCactus'),
(6, 6, 'Seikai Fanart Gallery', '2022', 'Individual project for client', 'Designer & front-end developer', 'https://seikai-fanart-gallery.herokuapp.com', 'proj-nav-6.jpg', 'seikai-1.jpg', 'seikai-2.gif', 'seikai.mp4', 'website', 'This static, front-end-only site exhibits several collections of fanart illustrations within Seikai Anime Club,  a group of Japanese ACG enthusiasts. I joined this club during my undergraduate years, so I offered to create a website to hold an online exhibition for my campus fellows.  During the process of designing and building the site, I kept in touch with the client to display my work in each phase and listened to her feedback.', 'To mediate the difference between each illustrator\'s personal style, I took the visual style of collage and applied elements such as sailing, ocean, campus life, and handicrafts. I also made a style guide for the character Ms. Seikai, hoping to inspire others to paint more artworks in the future.', 'Here are the collections of paintings on the featured pages.', '', 'seikai'),
(11, 11, 'CoC Game Replay Opening', '2022', 'Individual project', 'General designer & video producer', '', 'proj-nav-11.jpg', '', '', 'nanahyo.mp4', 'motion', 'This is a fanart project for a Call of Cthulhu table-top role playing game (CoC TRPG) that I have played. The finished work is similar to a title sequence, as it introduces the characters and storyline as well as the main title (七凭之祭). Most of the assets used are my original creation, including character design for 23 players and NPCs, 11 digital illustrations, logo design, 2D frame animation, 3D modeling of a crime scene, and animation with After Effects. Music credit: ノルニル by Yakushimaru Etsuko Metro Orchestra.', '', '', '', 'nanahyo');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
