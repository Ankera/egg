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

 Date: 06/11/2019 21:40:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `title` varchar(200) NOT NULL COMMENT '标题',
  `description` varchar(500) DEFAULT NULL COMMENT '描述',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of role
-- ----------------------------
BEGIN;
INSERT INTO `role` VALUES (1, '市场部门', 'Market department231', '2019-05-26 23:20:20', '2019-05-27 00:07:21');
INSERT INTO `role` VALUES (2, '网站编辑', 'Website editor', '2019-05-26 23:47:33', '2019-05-26 23:47:33');
INSERT INTO `role` VALUES (6, '技术部门', '技术部门', '2019-05-27 00:16:34', '2019-05-27 00:16:34');
INSERT INTO `role` VALUES (7, '财务部门', 'Finance Department', '2019-05-27 01:03:34', '2019-05-27 01:03:34');
INSERT INTO `role` VALUES (8, '销售部门', 'Sales Department', '2019-06-01 00:23:35', '2019-06-01 00:23:35');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
