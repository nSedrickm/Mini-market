-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 06, 2020 at 08:35 AM
-- Server version: 10.3.23-MariaDB-0+deb10u1
-- PHP Version: 7.3.19-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` int(100) NOT NULL,
  `date` text NOT NULL,
  `time` time NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `category`, `price`, `quantity`, `total`, `date`, `time`) VALUES
(3, 'Sardinezz', 'groceries', 50000, 10, 5000, '2020-08-13', '22:34:00'),
(4, 'Sardine', 'groceries', 500, 10, 5000, '2020-08-12', '10:00:00'),
(5, 'Sardine', 'groceries', 500, 10, 5000, '2020-08-12', '10:00:00'),
(6, 'Toothbrush', 'sanitation', 100, 1, 100, '2020-08-04', '07:08:00'),
(8, 'Toothbrush', 'sanitation', 100, 1, 100, '2020-10-05', '10:43:00'),
(9, 'Sardivan', 'as', 50, 5, 250, '2020-08-04', '07:21:00'),
(10, 'Sardine', 'groceries', 500, 10, 5000, '2020-08-13', '22:09:00'),
(11, 'Milk', 'groceries', 100, 10, 1000, '2020-08-14', '06:34:00');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `supplier` varchar(100) NOT NULL,
  `date` text NOT NULL,
  `time` time NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `price`, `quantity`, `supplier`, `date`, `time`) VALUES
(1, 'Maggi', 'groceries', 50, 100, 'MAGGICAM', '2020-08-04', '07:40:00'),
(2, 'Maggi', 'groceries', 50, 100, 'MAGGICAM', '2020-08-03', '15:25:00'),
(3, 'Milk', 'groceries', 50, 100, 'CAMLAIT', '2020-08-03', '15:25:00'),
(4, 'Sardine', 'groceries', 50, 100, 'Sardine SARL', '2020-08-03', '15:25:00'),
(6, 'Sardine', 'groceries', 50, 1000, 'Sardine SARL', '2020-08-03', '15:25:00'),
(8, 'Maggi', 'groceries', 50, 100, 'MAGGICAM', '2020-08-03', '15:25:00'),
(9, 'Milk', 'groceries', 50, 100, 'CAMLAIT', '2020-08-03', '15:25:00'),
(10, 'Sardine', 'groceries', 50, 100, 'Sardine SARL', '2020-08-03', '15:25:00'),
(11, 'Sardine', 'groceries', 50, 1000, 'Sardine SARL', '2020-08-03', '15:25:00'),
(12, 'Salt', 'seasoning', 100, 7, 'Salt SA', '2020-08-03', '18:38:00'),
(16, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '18:42:00'),
(17, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '18:51:00'),
(18, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '18:51:00'),
(20, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '18:51:00'),
(21, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '18:51:00'),
(22, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '18:51:00'),
(23, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '18:51:00'),
(24, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '18:51:00'),
(25, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '18:51:00'),
(26, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '18:51:00'),
(27, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '18:51:00'),
(28, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '18:51:00'),
(29, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '19:34:00'),
(31, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '19:34:00'),
(32, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '19:41:00'),
(33, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '19:41:00'),
(34, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '19:41:00'),
(35, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '19:41:00'),
(37, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '19:47:00'),
(39, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '20:05:00'),
(40, 'Salt', 'seasoning', 100, 100, 'Salt SA', '2020-08-03', '20:05:00'),
(41, 'Sardine', 'groceries', 61, 34, 'SardineSA', '2020-08-03', '20:53:00'),
(42, 'fish ', 'fish ', 500, 10, 'Cold house', '2020-08-03', '20:56:00'),
(43, 'fish ', 'fish ', 500, 10, 'Cold house', '2020-08-03', '21:00:00'),
(45, 'Chocolate', 'candy too', 500, 18, 'CHOCOCAM', '2020-08-13', '22:28:00'),
(46, 'Oil', 'groceries', 500, 10, 'OILCAM', '2020-08-14', '06:35:00'),
(47, 'test_create_product', 'test ', 12, 15, 'test_supplier', '2020-10-05', '11:05:00');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `price` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `phone_number`, `product_name`, `category`, `price`) VALUES
(1, 'CAMFISH', '23764589756', 'Fish', 'groceries', 500000),
(3, 'BONBON', '234566789', 'bonbon', 'sweets', 50),
(4, 'BONBON', '234566789', 'bonbon', 'sweets', 50),
(5, 'BONBON', '234566789', 'bonbon', 'sweets', 50),
(6, 'BONBON', '234566789', 'bonbon', 'sweets', 50);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`) VALUES
(1, 'admin', 'admin'),
(3, 'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec', 'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
