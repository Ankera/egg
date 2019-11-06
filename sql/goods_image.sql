/*
 Navicat Premium Data Transfer

 Source Server         : anker_egg
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : anker_egg

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 06/11/2019 21:40:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods_image
-- ----------------------------
DROP TABLE IF EXISTS `goods_image`;
CREATE TABLE `goods_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `goods_id` int(11) NOT NULL COMMENT '商品ID',
  `img_url` varchar(500) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `color_id` int(11) DEFAULT NULL,
  `is_delete` tinyint(1) NOT NULL DEFAULT '1' COMMENT '默认都是1，存在状态， 如果为0则表示是删除',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of goods_image
-- ----------------------------
BEGIN;
INSERT INTO `goods_image` VALUES (2, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/775372165133.2563u%3D4174009325%2C3291539771%26fm%3D15%26gp%3D0.jpg', NULL, 1, 0, 1, '2019-06-05 00:09:57', '2019-06-09 20:33:31');
INSERT INTO `goods_image` VALUES (3, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/213953113041.0881u%3D1823332651%2C80941870%26fm%3D27%26gp%3D0.jpg', NULL, 1, 0, 1, '2019-06-05 00:09:57', '2019-06-09 20:33:29');
INSERT INTO `goods_image` VALUES (4, 12, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/221124636172.9029u%3D4094753358%2C3609501592%26fm%3D27%26gp%3D0.jpg', NULL, NULL, 1, 1, '2019-06-05 23:57:07', '2019-06-05 23:57:07');
INSERT INTO `goods_image` VALUES (5, 12, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/206186127512.24408u%3D2660875484%2C1583840579%26fm%3D27%26gp%3D0.jpg', NULL, NULL, 1, 1, '2019-06-05 23:57:07', '2019-06-05 23:57:07');
INSERT INTO `goods_image` VALUES (6, 13, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/655270665835.4799u%3D1823332651%2C80941870%26fm%3D27%26gp%3D0.jpg', NULL, NULL, 1, 1, '2019-06-06 00:15:33', '2019-06-07 12:52:18');
INSERT INTO `goods_image` VALUES (7, 13, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/550911490513.3428u%3D2660875484%2C1583840579%26fm%3D27%26gp%3D0.jpg', NULL, 2, 1, 1, '2019-06-06 00:15:33', '2019-06-07 12:52:19');
INSERT INTO `goods_image` VALUES (8, 13, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/836845448942.9222u%3D4174009325%2C3291539771%26fm%3D15%26gp%3D0.jpg', NULL, 4, 1, 1, '2019-06-06 00:15:33', '2019-06-07 12:52:20');
INSERT INTO `goods_image` VALUES (9, 13, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/976435632352.1875u%3D4094753358%2C3609501592%26fm%3D27%26gp%3D0.jpg', NULL, NULL, 0, 1, '2019-06-06 00:15:33', '2019-06-07 12:52:43');
INSERT INTO `goods_image` VALUES (10, 13, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/266011708159.66867u%3D2660875484%2C1583840579%26fm%3D27%26gp%3D0.jpg', NULL, 4, 1, 1, '2019-06-07 12:53:51', '2019-06-07 12:54:07');
INSERT INTO `goods_image` VALUES (11, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/962409696672.85337667c3f40823764d.jpg', NULL, 8, 1, 1, '2019-06-09 20:35:43', '2019-06-09 20:35:51');
INSERT INTO `goods_image` VALUES (12, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/956396744429.3022a57323b77d9c53e5.jpg', NULL, 8, 1, 1, '2019-06-09 20:35:43', '2019-06-09 20:35:52');
INSERT INTO `goods_image` VALUES (13, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/120200820842.0784093a366897bf3460.jpg', NULL, 8, 1, 1, '2019-06-09 20:35:43', '2019-06-09 20:35:54');
INSERT INTO `goods_image` VALUES (14, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/312525281909.1551fd9db81438c68fa9.jpg', NULL, 8, 1, 1, '2019-06-09 20:35:43', '2019-06-09 20:35:55');
INSERT INTO `goods_image` VALUES (15, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/997611093119.08531dfd0f9264584517.jpg', NULL, 10, 1, 1, '2019-06-09 20:38:30', '2019-06-09 20:38:39');
INSERT INTO `goods_image` VALUES (16, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/466198809976.009035e3c294b4ab350bd.jpg', NULL, 10, 1, 1, '2019-06-09 20:38:30', '2019-06-09 20:38:41');
INSERT INTO `goods_image` VALUES (17, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/592140336889.4806b8a518a3e281dfa0.jpg', NULL, 10, 1, 1, '2019-06-09 20:38:30', '2019-06-09 20:38:43');
INSERT INTO `goods_image` VALUES (18, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/262801827856.25406f8c5cdcacb0cad5e.jpg', NULL, 10, 1, 1, '2019-06-09 20:38:30', '2019-06-09 20:38:45');
INSERT INTO `goods_image` VALUES (19, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/215829118845.282327d83f024c6715f15.jpg', NULL, 11, 1, 1, '2019-06-09 20:40:24', '2019-06-09 20:41:10');
INSERT INTO `goods_image` VALUES (20, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/506699767288.223639f23a8fb8987d517.jpg', NULL, 11, 1, 1, '2019-06-09 20:40:24', '2019-06-09 20:40:45');
INSERT INTO `goods_image` VALUES (21, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/701160445499.486712fc8119d31e58c3.jpg', NULL, 11, 1, 1, '2019-06-09 20:40:24', '2019-06-09 20:40:46');
INSERT INTO `goods_image` VALUES (22, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/179506595087.1726f1426e502ac2e120.jpg', NULL, 11, 1, 1, '2019-06-09 20:40:24', '2019-06-09 20:40:48');
INSERT INTO `goods_image` VALUES (23, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/515049461521.307507e7fe8c215798f6.jpg', NULL, 9, 1, 1, '2019-06-09 20:44:28', '2019-06-09 20:44:38');
INSERT INTO `goods_image` VALUES (24, 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/420647078143.3784307f8ea1cb8280e0.png', NULL, 9, 1, 1, '2019-06-09 20:44:28', '2019-06-09 20:44:40');
INSERT INTO `goods_image` VALUES (25, 18, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/879121574384.97695ad04674975b1dfd.jpg', NULL, 2, 1, 1, '2019-06-09 21:59:49', '2019-06-09 22:56:33');
INSERT INTO `goods_image` VALUES (26, 18, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/93907524789.44719ff5644cdc57e6b59.jpg', NULL, 8, 1, 1, '2019-06-09 21:59:49', '2019-06-09 22:56:35');
INSERT INTO `goods_image` VALUES (27, 19, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/719069709468.5865bbec31eN1a4b0083.jpg', NULL, 4, 1, 1, '2019-06-09 22:00:11', '2019-06-09 22:56:57');
INSERT INTO `goods_image` VALUES (28, 19, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/917354286672.88815bbf1fc9N3ced3749.jpg', NULL, 9, 1, 1, '2019-06-09 22:00:11', '2019-06-09 22:56:59');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
