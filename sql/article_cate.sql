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

 Date: 06/11/2019 21:39:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article_cate
-- ----------------------------
DROP TABLE IF EXISTS `article_cate`;
CREATE TABLE `article_cate` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `title` varchar(255) DEFAULT NULL COMMENT '文章分类',
  `cate_img` varchar(500) DEFAULT NULL COMMENT '分类图片',
  `pid` int(11) NOT NULL DEFAULT '0' COMMENT '自身关联',
  `sub_title` varchar(255) DEFAULT NULL COMMENT '分类副标题',
  `keywords` varchar(255) DEFAULT NULL COMMENT '关键字',
  `description` varchar(1000) DEFAULT NULL COMMENT '描述',
  `sort` int(11) NOT NULL DEFAULT '100' COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of article_cate
-- ----------------------------
BEGIN;
INSERT INTO `article_cate` VALUES (1, '常见问题', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/249225512746.74332u%3D139643347%2C4267173940%26fm%3D27%26gp%3D0.jpg', 0, '1111', '2222', '22222222', 10, 0, '2019-06-07 23:52:02', '2019-06-08 01:21:14');
INSERT INTO `article_cate` VALUES (2, '小米社区', '', 0, '2222', '333', '小米论坛', 100, 1, '2019-06-07 23:52:59', '2019-06-07 23:52:59');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
