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

 Date: 06/11/2019 21:38:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `username` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '登录者昵称',
  `password` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '登录密码，MD5加密',
  `mobile` bigint(20) DEFAULT NULL COMMENT '手机号',
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '邮箱',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态，默认是1',
  `role_id` int(11) NOT NULL DEFAULT '0' COMMENT '角色ID',
  `is_super` tinyint(1) DEFAULT '0' COMMENT '是否是超级管理员， 默认是0, 1是超级管理员',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of admin
-- ----------------------------
BEGIN;
INSERT INTO `admin` VALUES (2, 'admin', '21232f297a57a5a743894a0e4a801fc3', 987654321, '123456789@139.com', 0, 2, 1, '2019-05-26 19:56:12', '2019-06-01 17:20:18');
INSERT INTO `admin` VALUES (3, 'qly', '67c800fa7497e7196da7a75cfa7e3e80', 987654321, '123456789@139.com', 0, 1, 0, '2019-05-26 19:56:27', '2019-05-30 22:41:05');
INSERT INTO `admin` VALUES (4, 'guoyue', '4ef262db42f8b07d896ea4fe0533eacc', 987654321, '123456789@139.com', 0, 6, 1, '2019-05-26 19:56:41', '2019-05-29 22:42:29');
INSERT INTO `admin` VALUES (5, 'xiaocai', '548c71f18162b32b59af4a5671252bab', 123456, '123456@qq.com', 0, 2, 0, '2019-05-27 00:41:24', '2019-05-29 22:43:05');
INSERT INTO `admin` VALUES (6, 'xiao', 'd2bf7126723ea8f6005ba141ea3c3e2c', 12121, '75615465@qq.com', 1, 7, 0, '2019-05-27 01:05:00', '2019-05-29 22:42:58');
INSERT INTO `admin` VALUES (8, 'yyy', 'f0a4058fd33489695d53df156b77c724', 15189112345, '75615465@qq.com', 1, 6, 0, '2019-05-27 22:07:49', '2019-05-29 22:42:58');
INSERT INTO `admin` VALUES (9, 'laohan', '54a1856d9915a66ced1538d782b9d65b', 123456, '4553267@qq.com', 1, 8, 0, '2019-06-01 00:28:18', '2019-06-01 00:28:18');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
