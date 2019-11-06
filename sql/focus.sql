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

 Date: 06/11/2019 21:39:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for focus
-- ----------------------------
DROP TABLE IF EXISTS `focus`;
CREATE TABLE `focus` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `title` varchar(200) DEFAULT NULL COMMENT '轮播图名称',
  `type` tinyint(1) NOT NULL COMMENT 'Type = 1是网站，2是APP， 3是小程序',
  `focus_img` varchar(500) DEFAULT NULL COMMENT '图片地址',
  `link` varchar(500) DEFAULT NULL COMMENT '链接地址',
  `sort` int(11) DEFAULT NULL COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态，默认显示1， 0取消',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of focus
-- ----------------------------
BEGIN;
INSERT INTO `focus` VALUES (1, '小米电视', 1, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/68617356106.94586focus1.jpg', 'https://www.mi.com/mi9/', 100, 1, '2019-05-30 22:27:33', '2019-06-08 15:34:09');
INSERT INTO `focus` VALUES (2, '小米笔记本', 1, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/511367961256.7026focus2.jpg', 'https://www.mi.com/redminote7/', 100, 1, '2019-05-30 22:58:26', '2019-06-08 15:34:33');
INSERT INTO `focus` VALUES (5, '小米手机', 1, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/892319503408.6978focus3.jpg', 'https://www.mi.com/mi9se/', 1000, 1, '2019-06-08 15:35:08', '2019-06-08 15:35:08');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
