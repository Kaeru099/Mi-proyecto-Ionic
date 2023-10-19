-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-10-2023 a las 17:46:08
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sportsmatches`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos`
--

CREATE TABLE `datos` (
  `datId` int(11) NOT NULL,
  `datNombre` varchar(25) NOT NULL,
  `datApellido` varchar(25) NOT NULL,
  `datEdad` int(3) NOT NULL,
  `datDeporte` varchar(25) NOT NULL,
  `datImagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `datos`
--

INSERT INTO `datos` (`datId`, `datNombre`, `datApellido`, `datEdad`, `datDeporte`, `datImagen`) VALUES
(1, 'Prueba1', 'Prueba1', 20, 'Prueba1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv17rMAqVfOGwCF9JCx8S4eXAcg2kY6EC-wA&usqp=CAU'),
(4, 'Karina', 'Restrepo', 20, 'Boxeo', 'https://miro.medium.com/v2/resize:fit:3840/1*0ubYRV_WNR9iYrzUAVINHw.jpeg'),
(11, 'dsfgsdfgsd', 'sdfgsdfgsdfg', 21, 'sdfgsdfg', 'sdfgsdfgsdfg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parques`
--

CREATE TABLE `parques` (
  `id_parque` int(11) NOT NULL,
  `nombre_parque` varchar(50) NOT NULL,
  `direccion_parque` varchar(50) NOT NULL,
  `barrio_parque` varchar(30) NOT NULL,
  `deportes_parque` varchar(50) NOT NULL,
  `foto_parque` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `parques`
--

INSERT INTO `parques` (`id_parque`, `nombre_parque`, `direccion_parque`, `barrio_parque`, `deportes_parque`, `foto_parque`) VALUES
(1, 'Parque Lineal La Merced', 'Calle 2 con Carrera 19', 'La Merced', 'Ping pong', 'https://www.imagendelosvallecaucanos.com/web/wp-content/uploads/2018/05/PARQUE-BIOSALUDABLE-LA-MERCED.jpg'),
(2, 'dgasdgsdf', 'asdfsdgdfsg', 'sdgsdfgsdfg', 'asdgsfgf', 'sadgsdgasd');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `datos`
--
ALTER TABLE `datos`
  ADD PRIMARY KEY (`datId`);

--
-- Indices de la tabla `parques`
--
ALTER TABLE `parques`
  ADD PRIMARY KEY (`id_parque`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `datos`
--
ALTER TABLE `datos`
  MODIFY `datId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `parques`
--
ALTER TABLE `parques`
  MODIFY `id_parque` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
