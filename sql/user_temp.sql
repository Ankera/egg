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

 Date: 06/11/2019 21:41:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user_temp
-- ----------------------------
DROP TABLE IF EXISTS `user_temp`;
CREATE TABLE `user_temp` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `phone` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '手机号码',
  `send_count` int(11) NOT NULL DEFAULT '1' COMMENT '手机短信验证码',
  `ip` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '电脑IP',
  `add_day` int(11) DEFAULT NULL COMMENT '保存时间',
  `sign` varchar(100) DEFAULT NULL COMMENT '签名',
  `add_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_temp
-- ----------------------------
BEGIN;
INSERT INTO `user_temp` VALUES (10, '15189120919', 4, '127.0.0.1', 20190612, 'b2beb053946573c89f07e2134fb6d343', '2019-06-12 00:29:31', '2019-06-12 21:05:08');
INSERT INTO `user_temp` VALUES (11, '15189120915', 1, '127.0.0.1', 20190612, '8320beac20e7c97d94ef41086a1a40b1', '2019-06-12 21:06:50', '2019-06-12 21:06:50');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
