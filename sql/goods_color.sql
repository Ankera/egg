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

 Date: 06/11/2019 21:39:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods_color
-- ----------------------------
DROP TABLE IF EXISTS `goods_color`;
CREATE TABLE `goods_color` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `color_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '颜色名称',
  `color_value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '颜色值',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of goods_color
-- ----------------------------
BEGIN;
INSERT INTO `goods_color` VALUES (1, '红色', 'CC0000', 0, '2019-06-02 23:29:44', '2019-06-07 15:01:41');
INSERT INTO `goods_color` VALUES (2, '淡红色', '#663300', 1, '2019-06-02 23:39:01', '2019-06-02 23:45:46');
INSERT INTO `goods_color` VALUES (3, '蓝色', '#3300FF', 1, '2019-06-02 23:40:21', '2019-06-02 23:46:06');
INSERT INTO `goods_color` VALUES (4, '橘黄色', '#FFCC00', 1, '2019-06-02 23:45:09', '2019-06-02 23:45:09');
INSERT INTO `goods_color` VALUES (7, '淡蓝色', '3433FF', 1, '2019-06-07 15:02:49', '2019-06-07 15:03:03');
INSERT INTO `goods_color` VALUES (8, '幻彩蓝', '7ACEFF', 1, '2019-06-09 20:31:13', '2019-06-09 20:31:13');
INSERT INTO `goods_color` VALUES (9, '淡黑色', '28291F', 1, '2019-06-09 20:31:56', '2019-06-09 20:31:56');
INSERT INTO `goods_color` VALUES (10, '幻彩紫', '6826FF', 1, '2019-06-09 20:32:22', '2019-06-09 20:32:22');
INSERT INTO `goods_color` VALUES (11, '深空灰', 'B0B0B0', 1, '2019-06-09 20:32:44', '2019-06-09 20:32:44');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
