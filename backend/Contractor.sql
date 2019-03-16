-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 16, 2019 at 01:20 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Contractor`
--

-- --------------------------------------------------------

--
-- Table structure for table `contractors`
--

CREATE TABLE `contractors` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contractors`
--

INSERT INTO `contractors` (`id`, `username`, `password`) VALUES
(1, 'amin', '123');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `contractor_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `notes` varchar(1024) NOT NULL,
  `sketch_link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `contractor_id`, `name`, `phone`, `email`, `notes`, `sketch_link`) VALUES
(1, 1, 'Tareq Aljebbeh', '0911111111', 'tareq@gmail.com', 'Android', 'https://firebasestorage.googleapis.com/v0/b/contractor-9cd12.appspot.com/o/images%2FCCBF63FB-3F4C-4ADD-83E2-00340C0E9CB7.png?alt=media&token=33af837e-8332-409f-a6d8-b12d7ab522f4'),
(2, 1, 'Ahmad Aljebbeh', '0922222222', 'ahmad@gmail.com', 'NodeJS ', 'https://firebasestorage.googleapis.com/v0/b/contractor-9cd12.appspot.com/o/images%2F4FCFEAB6-785E-42FD-ADDA-F1A5ED3A874D.png?alt=media&token=5876d505-5be5-4bb0-8155-abdedb9fec50'),
(3, 1, 'Sameer Aljebbeh', '0933333333', 'postman@gmail.com', 'Canada', 'https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpghttps://firebasestorage.googleapis.com/v0/b/contractor-9cd12.appspot.com/o/images%2F5B8F8C78-DC9A-4916-AE76-F75631A24B07.png?alt=media&token=6f7a7cbc-3859-4441-9653-ddb8a2e0d746'),
(4, 1, 'Dima Aljebbeh', '0957570213', 'postman2gmail.com', 'React Native ', 'https://firebasestorage.googleapis.com/v0/b/contractor-9cd12.appspot.com/o/images%2FCCBF63FB-3F4C-4ADD-83E2-00340C0E9CB7.png?alt=media&token=33af837e-8332-409f-a6d8-b12d7ab522f4'),
(7, 1, 'postman2222', '0957570213', 'postman@gmail.com2222', 'post mane notes asd a', 'postmane.com'),
(8, 1, 'postman2222', '0957570213', 'postman@gmail.com2222', 'post mane notes asd a', 'postmane.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contractors`
--
ALTER TABLE `contractors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contractor_id` (`contractor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contractors`
--
ALTER TABLE `contractors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`contractor_id`) REFERENCES `contractors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
