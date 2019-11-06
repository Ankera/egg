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

 Date: 06/11/2019 21:41:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `phone` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '手机号码',
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码',
  `last_ip` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '登录设备IP',
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '邮箱',
  `add_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (2, '15189120910', 'e10adc3949ba59abbe56e057f20f883e', '127.0.0.1', NULL, '2019-06-12 00:20:02', '2019-06-12 00:20:02');
INSERT INTO `user` VALUES (3, '15189120917', 'e10adc3949ba59abbe56e057f20f883e', '127.0.0.1', NULL, '2019-06-12 00:24:21', '2019-06-12 00:25:29');
INSERT INTO `user` VALUES (4, '15189120911', 'e10adc3949ba59abbe56e057f20f883e', '127.0.0.1', NULL, '2019-06-12 00:31:14', '2019-06-12 00:31:25');
INSERT INTO `user` VALUES (5, '15189120912', 'e10adc3949ba59abbe56e057f20f883e', '127.0.0.1', NULL, '2019-06-12 00:33:11', '2019-06-12 21:02:49');
INSERT INTO `user` VALUES (6, '15189120919', 'e10adc3949ba59abbe56e057f20f883e', '127.0.0.1', NULL, '2019-06-12 21:05:29', '2019-06-12 21:05:29');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
