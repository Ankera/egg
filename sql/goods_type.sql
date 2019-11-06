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

 Date: 06/11/2019 21:40:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods_type
-- ----------------------------
DROP TABLE IF EXISTS `goods_type`;
CREATE TABLE `goods_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '商品名称',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '描述',
  `sort` int(11) DEFAULT '100' COMMENT '排序',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态，默认是1',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of goods_type
-- ----------------------------
BEGIN;
INSERT INTO `goods_type` VALUES (2, '笔记本电脑', '所有笔记本系列22', 5, 0, '2019-06-01 16:57:40', '2019-06-02 00:01:32');
INSERT INTO `goods_type` VALUES (3, '路由器', '所有路由器', 100, 1, '2019-06-01 16:57:57', '2019-06-01 17:22:40');
INSERT INTO `goods_type` VALUES (5, '服装', '全套服装系列', 100, 1, '2019-06-01 17:10:36', '2019-06-01 17:22:39');
INSERT INTO `goods_type` VALUES (6, '电视机', '电视机系列', 100, 1, '2019-06-01 17:15:15', '2019-06-01 17:22:41');
INSERT INTO `goods_type` VALUES (7, '手机', '手机系列', 90, 1, '2019-06-01 22:16:53', '2019-06-02 00:04:00');
INSERT INTO `goods_type` VALUES (8, '加湿器', '加湿器系列', 50, 1, '2019-06-02 00:02:01', '2019-06-02 00:02:32');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
