-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2023 at 11:29 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `folkatech`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `category_id`, `brand`, `stock`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'ABID CLEVER DRIPPER 102', 1, 'UBRUKOPI', 10, 480000, '2023-09-29 13:52:44', '2023-09-29 13:52:44'),
(2, 'ABID CLEVER DRIPPER 102', 1, 'UBRUKOPI', 10, 480000, '2023-09-29 14:04:44', '2023-09-29 14:04:44'),
(3, 'ABID CLEVER DRIPPER 102', 1, 'UBRUKOPI', 10, 480000, '2023-09-29 14:04:57', '2023-09-29 14:04:57'),
(4, 'Almond Biscuit', 1, 'G COFFEE ROASTERY', 10, 250000, '2023-09-29 14:06:12', '2023-09-29 14:06:12'),
(5, 'Aceh Gayo Coffee Beans', 1, 'ANOMALI COFFEE', 10, 90000, '2023-09-29 14:07:04', '2023-09-29 14:07:04'),
(6, 'Blackpearl Coffee Beans', 1, 'ANOMALI COFFEE', 10, 90000, '2023-09-29 14:08:05', '2023-09-29 14:08:05'),
(7, 'Bokasso #3', 1, 'TITIK TEMU ROASTERY', 10, 160000, '2023-09-29 14:08:41', '2023-09-29 14:08:41'),
(8, 'Ciwidey West Java Frinsa', 1, 'REIROM COFFEE SOLUTION', 10, 104500, '2023-09-29 14:09:20', '2023-09-29 14:09:20'),
(9, 'Espresso Blend - Kungfu Kicks', 1, 'G COFFEE ROASTERY', 10, 185000, '2023-09-29 14:09:59', '2023-09-29 14:09:59'),
(10, 'Espresso Blend 1.0 - 200gr', 1, 'REIROM COFFEE SOLUTION', 10, 99000, '2023-09-29 14:10:35', '2023-09-29 14:10:35'),
(11, 'Ethiopia Guji Washed', 1, 'IRENK BEANS', 10, 150000, '2023-09-29 14:11:28', '2023-09-29 14:11:28'),
(12, 'Flores Colol Coffee Beans...', 1, 'ANOMALI COFFEE', 10, 90000, '2023-09-29 14:12:00', '2023-09-29 14:12:00');

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`id`, `category_name`, `createdAt`, `updatedAt`) VALUES
(1, 'kopi', '2023-09-29 15:51:03', '2023-09-29 15:51:03');

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `id` int(11) NOT NULL,
  `links` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_image`
--

INSERT INTO `product_image` (`id`, `links`, `createdAt`, `updatedAt`, `product_id`) VALUES
(1, 'http://localhost:5000/images/d1f25005cfd72f51d8eaa05d1b09881b.png', '2023-09-29 13:52:45', '2023-09-29 13:52:45', 1),
(2, 'http://localhost:5000/images/37c99cf5c66a19a0f2412d916e562102.png', '2023-09-29 14:04:44', '2023-09-29 14:04:44', 2),
(3, 'http://localhost:5000/images/6d1dc169d61499ee20825839262bf3c8.png', '2023-09-29 14:04:58', '2023-09-29 14:04:58', 3),
(4, 'http://localhost:5000/images/b4317d6bf7f9dfcde61133026ba85b8e.png', '2023-09-29 14:06:12', '2023-09-29 14:06:12', 4),
(5, 'http://localhost:5000/images/ea30558b31eb0bf87a3693cb005a3da7.png', '2023-09-29 14:07:04', '2023-09-29 14:07:04', 5),
(6, 'http://localhost:5000/images/af833a69d90463e13e74152df1e27bec.png', '2023-09-29 14:08:05', '2023-09-29 14:08:05', 6),
(7, 'http://localhost:5000/images/6d1dc169d61499ee20825839262bf3c8.png', '2023-09-29 14:08:41', '2023-09-29 14:08:41', 7),
(8, 'http://localhost:5000/images/abad6c8d483f50cd62de471828d05b4e.png', '2023-09-29 14:09:21', '2023-09-29 14:09:21', 8),
(9, 'http://localhost:5000/images/d1f25005cfd72f51d8eaa05d1b09881b.png', '2023-09-29 14:09:59', '2023-09-29 14:09:59', 9),
(10, 'http://localhost:5000/images/abad6c8d483f50cd62de471828d05b4e.png', '2023-09-29 14:10:35', '2023-09-29 14:10:35', 10),
(11, 'http://localhost:5000/images/32b9e5099e383a6dfc072102ae5b889b.png', '2023-09-29 14:11:28', '2023-09-29 14:11:28', 11),
(12, 'http://localhost:5000/images/37c99cf5c66a19a0f2412d916e562102.png', '2023-09-29 14:12:00', '2023-09-29 14:12:00', 12);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'nama depan', 'nama belakang', 'email@gmail.com', '$2b$10$9zi0cOi8UR4CCQFF8vmcve9sfTfJgI5D/nS0s0Ac29RCqJwsin41m', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImZpcnN0X25hbWUiOiJuYW1hIGRlcGFuIiwidXNlcl9lbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImlhdCI6MTY5NjAyMTc2NSwiZXhwIjoxNjk2MTA4MTY1fQ.Db5Rs9CtQYOHZ0yvNMhToeKnyxATHvXgF9939Ozkfz4', '2023-09-29 15:22:06', '2023-09-29 21:09:25'),
(2, 'Hanggitya', 'Raharjo', 'hanggityasri@gmail.com', '$2b$10$FmZmauSKNDh6d9nm8FdN5O./cQ2Jy6I9sseL8igC6HFlL/F6MbE8m', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImZpcnN0X25hbWUiOiJIYW5nZ2l0eWEiLCJ1c2VyX2VtYWlsIjoiaGFuZ2dpdHlhc3JpQGdtYWlsLmNvbSIsImlhdCI6MTY5NjAyMjEwMCwiZXhwIjoxNjk2MTA4NTAwfQ.RGKsu-4UMSK1jv13S5Uc6djmUVRjyMsjkapKGAniw8U', '2023-09-29 20:16:17', '2023-09-29 21:15:00'),
(3, 'Dadan', 'Firmansyah', 'dadan@gmail.com', '$2b$10$xmPGyN3/oyv0LY58vIawK.B/4MAS7VJuk8bdhRPbF/kRmXj1eQdhW', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImZpcnN0X25hbWUiOiJEYWRhbiIsInVzZXJfZW1haWwiOiJkYWRhbkBnbWFpbC5jb20iLCJpYXQiOjE2OTYwMjIxNDQsImV4cCI6MTY5NjEwODU0NH0.69oK312yAc2eYv1FOHOKroNhllGCkjb6oENgz-ZVQ68', '2023-09-29 21:15:37', '2023-09-29 21:15:44');

-- --------------------------------------------------------

--
-- Table structure for table `user_carts`
--

CREATE TABLE `user_carts` (
  `id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `total_price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_carts`
--

INSERT INTO `user_carts` (`id`, `quantity`, `total_price`, `createdAt`, `updatedAt`, `productId`, `userId`) VALUES
(1, 4, 1000000, '2023-09-29 17:13:35', '2023-09-29 17:13:35', 4, 1),
(2, 2, 180000, '2023-09-29 17:14:59', '2023-09-29 17:14:59', 6, 1),
(3, 3, 480000, '2023-09-29 19:21:37', '2023-09-29 19:21:37', 7, 1),
(4, 2, 180000, '2023-09-29 20:57:04', '2023-09-29 20:57:04', 5, 1),
(5, 2, 960000, '2023-09-29 20:57:17', '2023-09-29 20:57:17', 3, 1),
(6, 2, 180000, '2023-09-29 21:09:46', '2023-09-29 21:09:46', 5, 1),
(7, 2, 960000, '2023-09-29 21:10:46', '2023-09-29 21:10:46', 2, 1),
(8, 2, 960000, '2023-09-29 21:11:51', '2023-09-29 21:11:51', 2, 2),
(9, 10, 4800000, '2023-09-29 21:12:02', '2023-09-29 21:12:02', 3, 2),
(10, 2, 180000, '2023-09-29 21:15:51', '2023-09-29 21:15:51', 6, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_carts`
--
ALTER TABLE `user_carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_carts`
--
ALTER TABLE `user_carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `product_categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `product_image`
--
ALTER TABLE `product_image`
  ADD CONSTRAINT `product_image_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `user_carts`
--
ALTER TABLE `user_carts`
  ADD CONSTRAINT `user_carts_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `user_carts_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
