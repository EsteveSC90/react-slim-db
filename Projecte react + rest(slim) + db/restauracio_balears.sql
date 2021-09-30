-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-03-2021 a las 17:57:01
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restauracio_balears`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `establiment`
--

CREATE TABLE `establiment` (
  `id_establiment` int(10) UNSIGNED NOT NULL,
  `nom_comercial` varchar(200) NOT NULL,
  `horari_obertura` varchar(200) NOT NULL,
  `descripcio_general` varchar(2000) DEFAULT NULL,
  `web` varchar(250) DEFAULT NULL,
  `mitja_puntuacio` int(2) UNSIGNED DEFAULT NULL,
  `boolean_destacat` tinyint(1) NOT NULL,
  `poblacio` varchar(60) NOT NULL,
  `carrer` varchar(200) NOT NULL,
  `numero` int(5) UNSIGNED NOT NULL,
  `pis` varchar(10) DEFAULT NULL,
  `telefon` int(9) UNSIGNED NOT NULL,
  `id_localitzacio` int(10) UNSIGNED NOT NULL,
  `id_preu` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `establiment`
--

INSERT INTO `establiment` (`id_establiment`, `nom_comercial`, `horari_obertura`, `descripcio_general`, `web`, `mitja_puntuacio`, `boolean_destacat`, `poblacio`, `carrer`, `numero`, `pis`, `telefon`, `id_localitzacio`, `id_preu`) VALUES
(1, 'Hamburgueseria Paco', 'Tots els dies a partir de les 11:30h', 'Restaurant especialista amb hamburguesses', 'www.hamburguerPaco.com', NULL, 1, 'Manacor', 'Sant Amengual', 27, NULL, 971453482, 1, 2),
(2, 'Ca\'n Pep', 'Tots els dies a partir de les 9:00:00', 'Bar especialista amb cuina Mallorquina', 'www.canpep.com', NULL, 0, 'Inca', 'Jaume III', 15, NULL, 971528647, 2, 1),
(3, 'Arroces Caracol', 'Tots els dies a partir de les 11:00:00', 'Restaurant especialista de paelles', NULL, NULL, 1, 'Palma', 'San Fernando', 56, 'Baixos', 971821434, 3, 3),
(4, 'Sushi club', '11:00:00', 'Restaurant sushi', NULL, NULL, 1, 'Palma', 'Via Asima', 47, 'Baixos', 971333014, 4, 2),
(5, 'Restaurant Lipari', ' Tots els dies a partir de les 11:00:00', 'Hambuerguesses, pizzes, menjars variats, ...', NULL, NULL, 1, 'Inca', 'Gran Via Colon', 27, 'Baixos', 971503014, 5, 2),
(6, 'I Love Japo', 'Tots els dies de 13:30 a 15:30h.', 'I Love Japo és un restaurant japonés que et porta un trosset de Japón a Mallorca. Un restaurant que et captivarà per la seva original decoració i l\'alegria que desprèn. L\'equip d\'I Love Japo porta 5 anys situat al barri de Santa Catalina oferint una oferta única: sushi i menjar japonès amb una bona relación qualitat-preu. Per la seva ubicació en una zona de gran activitat, resulta ideal per endinsar-se i descobrir les diverses propostes i combinacions de la seva fantàstica carta. La gastronoia i cultura japonesa es revelen en els seus plats. Des del sushi tradicional, els futomakis tempuritzats o degustant l\'autèntica cuina típica de les tavernes japoneses, com els takoyaki, les gyozas o les tradicionals broquetes (kushiyaki) fins a arribar a les postres perquè visquis una experiència inoblidable.', 'www.ilovejapo.com', NULL, 1, 'Palma', 'c/ Sant Magí', 25, 'Baixos', 971738321, 6, 2),
(7, 'Celler Pagés', 'De 13.00h. a 15.30h i de 20.00 h. a 23.00 h. Diumenges i dilluns nit tancat.', 'Situat en plena Llotja de Palma, el Celler Pagès obre les portes allà per l\'any 1956. És un negoci familiar, que ha sabut mantenir la tradició al llarg de tres generacions. Per ell han passat personalitats de la talla de Lola Flores, Chavela Vargas, Gerhard Schröeder ... Ofereix una cuina tradicional mallorquina, de temporada, típica i casolana, la de sempre. Receptes familiars sempre millorades amb un toc de modernitat. Destaquen per un servei absolutament professional i atent, pendent de cada detall.', 'www.cellerpages.com', NULL, 1, 'Palma', 'Felipe Bauzà', 2, 'Baixos', 971726036, 7, 2),
(8, 'Es Siurell', 'De 13.00h. a 15.30h i de 20.00 h. a 23.00 h. Diumenges i dilluns nit tancat.', 'Especialistes en pa amb oli, frit mallorquí i caragols. El pa amb oli estrella és el que rep el nom del restaurant, Pa amb oli És Siurell. Un deliciós pa amb oli de verdures a la planxa acompanyat de sípia, o llom, o formatge de cabra. També tenim l\'anomenat Pa amb oli Mallorquí, amb sobrassada, camaiot i formatge maonès o el pa amb oli d\'ibèrics. Encara que sempre poden optar per demanar-nos que embotits desitgen. Tots els nostres postres, a excepció dels gelats són casolans.', 'www.essiurell.com', NULL, 1, 'Palma', 'Carretera Valldemossa', 12, 'Baixos', 971781240, 8, 2),
(9, 'Es Trinxet', 'De dilluns a dissabte de 8 a 23 hores.', 'Restaurant de cuina mallorquína, pa amb oli, i preus económics', 'www.estrinxet.com', NULL, 1, 'Palma', 'Carretera Palma-Manacor', 12, 'Baixos', 971781253, 9, 2),
(11, 'Restaurante Galeón', 'Esmorzars: 08:00-10:00h. Cafeteria, Snacks i Menú diari: 12:30-16:00h. Sopars: 1', 'Restaurant Galeón es situa enfront de la platja de Llenaire i compta amb unes vistes úniques a la Badia del Port de Pollença. Ofereix Menú diari, Snacks i A la Carta. Obert tots els dies. Servei per a celebracions de grups, casaments i esdeveniments. No podeu deixar de provar les carns servides a la pedra volcànica, la lasanya de llagosta o les delicioses paelles. Per a grups mínim 10 persones és imprescindible prèvia reserva. Ofereixen diferents opcions de menú i pressupost..', 'www.restaurantegaleon.com', NULL, 1, 'Port de Pollença', 'Passeig de Londres', 85, 'Baixos', 971534020, 11, 2),
(12, 'Ca\'n Cannoli', 'De 7:00-00:00. Dimarts tancat excepte festius.', 'Restaurant Italià', 'www.cancannoli.com', NULL, 1, 'Santa Maria', 'Plaça Hostals', 26, 'Baixos', 971621041, 12, 2),
(13, 'BASANT INDIAN FOOD', 'De 7:00-00:00. Dimarts tancat excepte festius.', 'Restaurant Hindú', 'www.basantindianfood.com', NULL, 1, 'inca', 'gran via colon', 80, 'Baixos', 871510906, 13, 2),
(68, 'Una prova react', 'asd', NULL, NULL, NULL, 0, 'inca', 'un carrer', 1, NULL, 971503014, 125, 2),
(69, 'provaReact', '9h', NULL, NULL, NULL, 0, 'Inca', 'sol', 2, NULL, 971502014, 126, 2),
(70, 'provaReact', '9h', NULL, NULL, NULL, 0, 'Inca', 'sol', 2, NULL, 971502014, 127, 2),
(71, 'provaReactInser123', '9h obrim', NULL, NULL, NULL, 0, 'Inca', 'sol', 123, NULL, 971501234, 128, 2),
(72, 'provaReactInser123', '9h obrim', NULL, NULL, NULL, 0, 'Inca', 'sol', 123, NULL, 971501234, 129, 2),
(73, 'una prova de nom comercial react', '9h', NULL, NULL, NULL, 0, 'Inca', 'sol', 2, NULL, 971504826, 130, 2),
(74, 'prova nom comercial react', 'A les 12h obrim, diumenges tancat', NULL, NULL, NULL, 0, 'Inca', 'sol', 2, NULL, 971504826, 131, 3),
(77, 'asd', '5h', NULL, NULL, NULL, 1, 'Inca', 'sol', 125, NULL, 971504826, 134, 2),
(80, 'prova nom comercial react ', '2h', NULL, NULL, NULL, 0, 'Inca', 'sol', 2, NULL, 971504826, 137, 2),
(81, 'prova nom comercial react ', '2h', NULL, NULL, NULL, 0, 'Inca', 'sol', 2, NULL, 971504826, 138, 2),
(84, 'd', 's', NULL, NULL, NULL, 0, 'd', 'a', 125, NULL, 971504826, 141, 2),
(86, 'Prova nom comercial', '12h obrim', NULL, NULL, NULL, 1, 'a', 'd', 125, NULL, 971504826, 143, 1),
(87, 'Prova nom comercial', '12h obrim', NULL, NULL, NULL, 1, 'a', 'd', 125, NULL, 971504826, 144, 1),
(88, 'Prova nom comercial', '12h obrim', NULL, NULL, NULL, 0, 'a', 'd', 125, NULL, 971504826, 145, 1),
(95, 'Una prova react', 'asd', NULL, NULL, NULL, 0, 'inca', 'un carrer', 1, NULL, 971503014, 152, 2),
(96, 'Una prova react', 'asd', NULL, NULL, NULL, 0, 'inca', 'un carrer', 1, NULL, 971503014, 155, 2),
(97, 'Una prova react', 'asd', NULL, NULL, NULL, 0, 'inca', 'un carrer', 1, NULL, 971503014, 158, 2),
(99, 'Una prova react', 'asd', NULL, NULL, NULL, 0, 'inca', 'un carrer', 1, NULL, 971503014, 161, 2),
(116, 'Prova', '12h', NULL, NULL, NULL, 1, 'Inca', 'sol', 125, NULL, 971504826, 179, 2),
(117, 'Prova', '12h', NULL, NULL, NULL, 1, 'Inca', 'sol', 125, NULL, 971504826, 180, 2),
(118, 'Una prova react', 'asd', NULL, NULL, NULL, 0, 'inca', 'un carrer', 1, NULL, 971503014, 181, 2),
(119, 'prova', '12h', 'o', NULL, NULL, 1, 'Inca', 'sol', 1, NULL, 971504826, 182, 2),
(126, 'prova', '2', NULL, NULL, NULL, 1, 'inca', 'sol', 125, NULL, 971504826, 189, 2),
(151, 'NOM COMERCIAL', '3H', NULL, NULL, NULL, 0, 'Inca', 'sol', 125, NULL, 971504826, 214, 2),
(165, 'Can Esteve', '1', NULL, NULL, NULL, 1, 'Inca', 'sol', 2, NULL, 971504826, 229, 1),
(166, 'ProvaReactEsteve', '2', NULL, NULL, NULL, 1, '2', '2', 2, NULL, 971504826, 230, 2),
(167, 'e', 'a', NULL, NULL, NULL, 0, 'inca', 'sol', 125, NULL, 971504826, 231, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `establiment_tipus_cuina`
--

CREATE TABLE `establiment_tipus_cuina` (
  `id_establiment` int(10) UNSIGNED NOT NULL,
  `id_tipus_cuina` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `establiment_tipus_cuina`
--

INSERT INTO `establiment_tipus_cuina` (`id_establiment`, `id_tipus_cuina`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotografia`
--

CREATE TABLE `fotografia` (
  `id_fotografia` int(10) UNSIGNED NOT NULL,
  `nom_fotografia` varchar(50) NOT NULL,
  `fotografia` varchar(5000) NOT NULL,
  `id_establiment` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `fotografia`
--

INSERT INTO `fotografia` (`id_fotografia`, `nom_fotografia`, `fotografia`, `id_establiment`) VALUES
(1, 'foto_establiment1_cuina1', 'https://imgur.com/dmBRJzX', 1),
(2, 'foto_establiment2_cuina1', 'http://finca-agroturisme.com/cuina-mallorquina-1170/', 2),
(3, 'foto_establiment3_cuina1', 'https://www.valenciabonita.es/2016/02/13/arros-al-forn/', 3),
(4, 'foto_establiment1_plat_especial_de_la_casa', 'https://www.aj-kitchen.es/maquinaria-para-hamburgueseria/', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localitzacio`
--

CREATE TABLE `localitzacio` (
  `id_localitzacio` int(10) UNSIGNED NOT NULL,
  `latitud` int(11) NOT NULL,
  `longitud` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `localitzacio`
--

INSERT INTO `localitzacio` (`id_localitzacio`, `latitud`, `longitud`) VALUES
(1, 40, 3),
(2, 40, 3),
(3, 40, 3),
(4, 40, 3),
(5, 40, 3),
(6, 40, 3),
(7, 40, 3),
(8, 40, 3),
(9, 40, 3),
(10, 40, 3),
(11, 40, 3),
(12, 40, 3),
(13, 40, 3),
(14, 2, 4),
(15, 2, 4),
(16, 2, 4),
(17, 2, 4),
(18, 2, 4),
(19, 2, 4),
(20, 2, 4),
(21, 2, 4),
(22, 2, 4),
(23, 2, 4),
(24, 2, 4),
(25, 2, 4),
(26, 2, 4),
(27, 2, 4),
(28, 2, 4),
(29, 2, 2),
(30, 2, 2),
(31, 2, 2),
(32, 2, 2),
(33, 2, 2),
(34, 2, 2),
(35, 2, 2),
(36, 2, 3),
(37, 2, 3),
(38, 2, 3),
(39, 2, 3),
(40, 2, 3),
(41, 2, 3),
(42, 2, 3),
(43, 2, 3),
(44, 2, 3),
(45, 4, 2),
(46, 4, 2),
(47, 4, 2),
(48, 4, 2),
(49, 4, 2),
(50, 4, 2),
(51, 4, 2),
(52, 1, 1),
(53, 1, 1),
(54, 1, 1),
(55, 2, 2),
(56, 2, 2),
(57, 2, 2),
(58, 2, 2),
(59, 2, 2),
(60, 2, 2),
(61, 2, 2),
(62, 2, 2),
(63, 2, 2),
(64, 2, 2),
(65, 2, 2),
(66, 2, 2),
(67, 2, 2),
(68, 2, 2),
(69, 2, 2),
(70, 2, 2),
(71, 2, 2),
(72, 2, 2),
(73, 2, 2),
(74, 2, 2),
(75, 2, 2),
(76, 2, 2),
(77, 2, 2),
(78, 2, 2),
(79, 2, 2),
(80, 2, 2),
(81, 2, 2),
(82, 2, 2),
(83, 2, 2),
(84, 2, 2),
(85, 2, 2),
(86, 2, 2),
(87, 2, 2),
(88, 2, 2),
(89, 2, 2),
(90, 2, 2),
(91, 2, 2),
(92, 2, 2),
(93, 2, 2),
(94, 2, 2),
(95, 2, 2),
(96, 2, 2),
(97, 2, 2),
(98, 2, 2),
(99, 2, 2),
(100, 2, 2),
(101, 2, 2),
(102, 2, 2),
(103, 2, 2),
(104, 2, 2),
(105, 2, 2),
(106, 2, 2),
(107, 1, 2),
(108, 1, 2),
(109, 1, 2),
(110, 1, 2),
(111, 1, 2),
(112, 1, 2),
(113, 1, 2),
(114, 1, 2),
(115, 1, 2),
(116, 1, 2),
(117, 1, 2),
(118, 1, 2),
(119, 1, 2),
(120, 1, 2),
(121, 1, 2),
(122, 1, 2),
(123, 1, 2),
(124, 1, 2),
(125, 1, 2),
(126, 2, 2),
(127, 2, 2),
(128, 123, 321),
(129, 123, 321),
(130, 2, 3),
(131, 3, 1),
(132, 2, 4),
(133, 2, 4),
(134, 5, 1),
(135, 3, 2),
(136, 3, 2),
(137, 2, 3),
(138, 2, 3),
(139, 2, 3),
(140, 2, 2),
(141, 2, 2),
(142, 3, 1),
(143, 3, 1),
(144, 3, 1),
(145, 3, 1),
(146, 0, 0),
(147, 0, 0),
(148, 0, 0),
(149, 0, 0),
(150, 0, 0),
(151, 0, 0),
(152, 1, 2),
(153, 1, 2),
(154, 1, 2),
(155, 1, 2),
(156, 1, 2),
(157, 1, 2),
(158, 1, 2),
(159, 1, 2),
(160, 0, 0),
(161, 1, 2),
(162, 1, 2),
(163, 0, 0),
(164, 0, 0),
(165, 0, 0),
(166, 0, 0),
(167, 0, 0),
(168, 0, 0),
(169, 0, 0),
(170, 0, 0),
(171, 0, 0),
(172, 0, 0),
(173, 0, 0),
(174, 0, 0),
(175, 0, 0),
(176, 0, 0),
(177, 0, 0),
(178, 0, 0),
(179, 5, 2),
(180, 5, 2),
(181, 1, 2),
(182, 234, 124),
(183, 0, 0),
(184, 0, 0),
(185, 0, 0),
(186, 0, 0),
(187, 0, 0),
(188, 0, 0),
(189, 2, 3),
(190, 2, 3),
(191, 0, 0),
(192, 0, 0),
(193, 0, 0),
(194, 0, 0),
(195, 0, 0),
(196, 0, 0),
(197, 0, 0),
(198, 0, 0),
(199, 0, 0),
(200, 0, 0),
(201, 0, 0),
(202, 0, 0),
(203, 0, 0),
(204, 0, 0),
(205, 0, 0),
(206, 0, 0),
(207, 0, 0),
(208, 0, 0),
(209, 0, 0),
(210, 0, 0),
(211, 0, 0),
(212, 0, 0),
(213, 5, 1),
(214, 5, 1),
(215, 5, 1),
(216, 2, 1),
(217, 0, 0),
(218, 0, 0),
(219, 0, 0),
(220, 0, 0),
(221, 0, 0),
(222, 0, 0),
(223, 0, 0),
(224, 1, 2),
(225, 0, 0),
(226, 0, 0),
(227, 0, 0),
(228, 0, 0),
(229, 22, 12),
(230, 2, 2),
(231, 12, 21),
(232, 21, 12),
(233, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preu`
--

CREATE TABLE `preu` (
  `id_preu` int(10) UNSIGNED NOT NULL,
  `categoria_preus` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `preu`
--

INSERT INTO `preu` (`id_preu`, `categoria_preus`) VALUES
(1, 'menys de 10€'),
(2, 'entre 10 i 15€'),
(3, 'més de 50€');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipus_cuina`
--

CREATE TABLE `tipus_cuina` (
  `id_tipus_cuina` int(10) UNSIGNED NOT NULL,
  `tipus` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipus_cuina`
--

INSERT INTO `tipus_cuina` (`id_tipus_cuina`, `tipus`) VALUES
(1, 'Hamburgueseria'),
(2, 'Cuina Mallorquina'),
(3, 'Arrossos'),
(4, 'Japonés'),
(5, 'Hambuerguesses, pizzes, menjars variats, ...'),
(6, 'Japonés, Asiàtic'),
(7, 'mallorquí­,pa amb oli,romántic,económic'),
(8, 'Argentì'),
(9, 'Italià'),
(12, 'Americà');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuari`
--

CREATE TABLE `usuari` (
  `id_usuari` int(10) UNSIGNED NOT NULL,
  `nom` varchar(60) NOT NULL,
  `primer_cognom` varchar(60) NOT NULL,
  `segon_cognom` varchar(60) NOT NULL,
  `poblacio` varchar(60) NOT NULL,
  `carrer` varchar(200) NOT NULL,
  `numero` int(5) UNSIGNED NOT NULL,
  `pis` varchar(10) DEFAULT NULL,
  `correuElectronic` varchar(200) NOT NULL,
  `contrasenya` varchar(200) NOT NULL,
  `boolean_tipus_usuari` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuari`
--

INSERT INTO `usuari` (`id_usuari`, `nom`, `primer_cognom`, `segon_cognom`, `poblacio`, `carrer`, `numero`, `pis`, `correuElectronic`, `contrasenya`, `boolean_tipus_usuari`) VALUES
(3, 'Pere', 'Vallori', 'Muntaner', 'Palma', 'Mir', 41, '2A', 'perevm@gmail.com', '202cb962ac59075b964b07152d234b70', 1),
(7, 'Miquel', 'Pascual', 'Oliver', 'Petra', 'Coll', 33, '1A', 'miquelp@gmail.com', '202cb962ac59075b964b07152d234b70', 0),
(9, 'Juan', 'Carles', 'S', 'Lloseta', 'Canyellas', 32, '3B', 'jc@gmail.com', 'd9b1d7db4cd6e70935368a1efb10e377', 0),
(12, 'Tomeu', 'Rossello', 'Amengual', 'Alaro', 'Jaume I', 12, '5A', 'tomeuRossello@gmail.com', '202cb962ac59075b964b07152d234b70', 0),
(13, 'Pep', 'Oliver', 'Campaner', 'Palma', 'Son Amengual', 49, '2C', 'Pepoli4p@gmail.com', '202cb962ac59075b964b07152d234b70', 0),
(14, 'Tofol', 'Pascual', 'Rossello', 'Sa Pobla', 'Fonoll', 12, 'Baixos', 'tofol@gmail.com', '202cb962ac59075b964b07152d234b70', 0),
(15, 'Joan', 'Mas', 'Gelabert', 'Inca', 'Jaume III', 9, '3A', 'masJoan10@gmail.com', '202cb962ac59075b964b07152d234b70', 0),
(16, 'Guillem', 'Rossello', 'Muntaner', 'Binissalem', 'Enmig', 25, '2B', 'guillem@gmail.com', '202cb962ac59075b964b07152d234b70', 0),
(17, 'Tomeu', 'Carbomell', 'Perello', 'Inca', 'Mir', 54, 'Baixos', 'tomeuP@gmail.com', '202cb962ac59075b964b07152d234b70', 0),
(18, 'Pere', 'Pascual', 'Oliver', 'Petra', 'Fonoll', 31, '2B', 'perepacualp@gmail.com', 'caf1a3dfb505ffed0d024130f58c5cfa', 0),
(19, 'Bernat', 'Amengual', 'Segui', 'Alaro', 'Son Amengual', 87, '5A', 'Bernat@gmail.com', '202cb962ac59075b964b07152d234b70', 0),
(20, 'Francesc', 'Castell', 'Oliver', 'Lloseta', 'Canyelles', 4, 'Baixos', 'francesc@gmail.com', '202cb962ac59075b964b07152d234b70', 0),
(32, 'Bernat', 'Amengual', 'Segui', 'Alaro', 'Son Amengual', 87, '5A', 'Bernat@gmail.com', '202cb962ac59075b964b07152d234b70', 0),
(51, 'Esteve', 'Seguí', 'Casas', 'Inca', 'Sol', 123, 'bjs', 'esc@gmail.com', '202cb962ac59075b964b07152d234b70', 1),
(67, 'asd', 'afasa', 'asd', 'Lloseta', 'solLluna', 0, '3a', 'a', '0aa1ea9a5a04b78d4581dd6d17742627', 1),
(68, 'Antonia', 'Casas', 'Riusech', 'Inca', 'Justicia', 125, 'bjs', 'acr@gmail.com', '123', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuari_establiment`
--

CREATE TABLE `usuari_establiment` (
  `id_comentari` int(10) UNSIGNED NOT NULL,
  `data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `hora` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `valoracio` int(2) UNSIGNED NOT NULL,
  `boolean_comentari_validad` tinyint(1) NOT NULL,
  `id_establiment` int(10) UNSIGNED NOT NULL,
  `id_usuari` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuari_establiment`
--

INSERT INTO `usuari_establiment` (`id_comentari`, `data`, `hora`, `valoracio`, `boolean_comentari_validad`, `id_establiment`, `id_usuari`) VALUES
(3, '2020-11-09 13:00:00', '2020-11-09 13:00:00', 5, 0, 3, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `establiment`
--
ALTER TABLE `establiment`
  ADD PRIMARY KEY (`id_establiment`),
  ADD KEY `id_localitzacio` (`id_localitzacio`),
  ADD KEY `id_preu` (`id_preu`);

--
-- Indices de la tabla `establiment_tipus_cuina`
--
ALTER TABLE `establiment_tipus_cuina`
  ADD PRIMARY KEY (`id_establiment`,`id_tipus_cuina`),
  ADD KEY `id_tipus_cuina` (`id_tipus_cuina`);

--
-- Indices de la tabla `fotografia`
--
ALTER TABLE `fotografia`
  ADD PRIMARY KEY (`id_fotografia`),
  ADD KEY `id_establiment` (`id_establiment`);

--
-- Indices de la tabla `localitzacio`
--
ALTER TABLE `localitzacio`
  ADD PRIMARY KEY (`id_localitzacio`);

--
-- Indices de la tabla `preu`
--
ALTER TABLE `preu`
  ADD PRIMARY KEY (`id_preu`);

--
-- Indices de la tabla `tipus_cuina`
--
ALTER TABLE `tipus_cuina`
  ADD PRIMARY KEY (`id_tipus_cuina`);

--
-- Indices de la tabla `usuari`
--
ALTER TABLE `usuari`
  ADD PRIMARY KEY (`id_usuari`);

--
-- Indices de la tabla `usuari_establiment`
--
ALTER TABLE `usuari_establiment`
  ADD PRIMARY KEY (`id_comentari`),
  ADD KEY `id_establiment` (`id_establiment`),
  ADD KEY `id_usuari` (`id_usuari`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `establiment`
--
ALTER TABLE `establiment`
  MODIFY `id_establiment` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170;

--
-- AUTO_INCREMENT de la tabla `fotografia`
--
ALTER TABLE `fotografia`
  MODIFY `id_fotografia` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `localitzacio`
--
ALTER TABLE `localitzacio`
  MODIFY `id_localitzacio` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=234;

--
-- AUTO_INCREMENT de la tabla `preu`
--
ALTER TABLE `preu`
  MODIFY `id_preu` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tipus_cuina`
--
ALTER TABLE `tipus_cuina`
  MODIFY `id_tipus_cuina` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuari`
--
ALTER TABLE `usuari`
  MODIFY `id_usuari` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT de la tabla `usuari_establiment`
--
ALTER TABLE `usuari_establiment`
  MODIFY `id_comentari` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `establiment`
--
ALTER TABLE `establiment`
  ADD CONSTRAINT `establiment_ibfk_1` FOREIGN KEY (`id_localitzacio`) REFERENCES `localitzacio` (`id_localitzacio`) ON DELETE CASCADE,
  ADD CONSTRAINT `establiment_ibfk_2` FOREIGN KEY (`id_preu`) REFERENCES `preu` (`id_preu`);

--
-- Filtros para la tabla `establiment_tipus_cuina`
--
ALTER TABLE `establiment_tipus_cuina`
  ADD CONSTRAINT `establiment_tipus_cuina_ibfk_1` FOREIGN KEY (`id_establiment`) REFERENCES `establiment` (`id_establiment`) ON DELETE CASCADE,
  ADD CONSTRAINT `establiment_tipus_cuina_ibfk_2` FOREIGN KEY (`id_tipus_cuina`) REFERENCES `tipus_cuina` (`id_tipus_cuina`) ON DELETE CASCADE;

--
-- Filtros para la tabla `fotografia`
--
ALTER TABLE `fotografia`
  ADD CONSTRAINT `fotografia_ibfk_1` FOREIGN KEY (`id_establiment`) REFERENCES `establiment` (`id_establiment`) ON DELETE CASCADE;

--
-- Filtros para la tabla `usuari_establiment`
--
ALTER TABLE `usuari_establiment`
  ADD CONSTRAINT `usuari_establiment_ibfk_1` FOREIGN KEY (`id_establiment`) REFERENCES `establiment` (`id_establiment`) ON DELETE CASCADE,
  ADD CONSTRAINT `usuari_establiment_ibfk_2` FOREIGN KEY (`id_usuari`) REFERENCES `usuari` (`id_usuari`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
