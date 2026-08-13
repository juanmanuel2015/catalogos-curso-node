-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2026 a las 15:34:02
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `catalogo_cursos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `duracion` varchar(20) NOT NULL,
  `modalidad` varchar(20) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `estado` tinyint(1) DEFAULT 1,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id`, `titulo`, `descripcion`, `categoria`, `duracion`, `modalidad`, `imagen`, `estado`, `creado_en`) VALUES
(1, 'Desarrollo Web', 'Aprendé HTML, CSS, JavaScript y backend desde cero.', 'Programación', '40 horas', 'Online', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80', 1, '2026-07-03 13:09:17'),
(2, 'Diseño UI/UX', 'Diseñá interfaces modernas, claras y fáciles de usar.', 'Diseño', '30 horas', 'Online', 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80', 1, '2026-07-03 13:09:17'),
(3, 'Bases de Datos', 'Aprendé MySQL, tablas, relaciones y consultas SQL.', 'Base de datos', '20 horas', 'Presencial', 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80', 1, '2026-07-03 13:09:17'),
(4, 'JavaScript Moderno', 'Dominá JavaScript moderno para crear sitios dinámicos.', 'Programación', '25 horas', 'Online', 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80', 1, '2026-07-03 13:09:17'),
(5, 'Node.js Avanzado', 'Construí servidores, rutas y APIs con Node.js y Express.', 'Backend', '40 horas', 'Presencial', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', 1, '2026-07-03 13:09:17');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
