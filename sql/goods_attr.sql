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

 Date: 06/11/2019 21:39:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods_attr
-- ----------------------------
DROP TABLE IF EXISTS `goods_attr`;
CREATE TABLE `goods_attr` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `goods_id` int(11) DEFAULT NULL COMMENT '商品ID',
  `cate_id` int(11) DEFAULT NULL COMMENT '商品分类ID',
  `attribute_id` int(11) DEFAULT NULL COMMENT '商品属性ID',
  `attribute_type` tinyint(1) DEFAULT NULL COMMENT '1是单航文本框(input)，2 是多行文件框(textarea)，3时下拉列表(select)',
  `attribute_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '属性分类名称',
  `attribute_value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '属性内容',
  `cid` int(11) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=271 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of goods_attr
-- ----------------------------
BEGIN;
INSERT INTO `goods_attr` VALUES (103, 12, 1, 1, 2, '主机1', '11111111', NULL, NULL, 1, '2019-06-08 17:30:49', '2019-06-08 17:30:49');
INSERT INTO `goods_attr` VALUES (104, 12, 1, 2, 2, '基本信息', '22222222222', NULL, NULL, 1, '2019-06-08 17:30:49', '2019-06-08 17:30:49');
INSERT INTO `goods_attr` VALUES (105, 12, 1, 3, 1, '操作系统', '3333333333', NULL, NULL, 1, '2019-06-08 17:30:49', '2019-06-08 17:30:49');
INSERT INTO `goods_attr` VALUES (106, 12, 1, 4, 2, '处理器', '44444444444', NULL, NULL, 1, '2019-06-08 17:30:49', '2019-06-08 17:30:49');
INSERT INTO `goods_attr` VALUES (107, 12, 1, 5, 3, '是否支持蓝牙', '是', NULL, NULL, 1, '2019-06-08 17:30:49', '2019-06-08 17:30:49');
INSERT INTO `goods_attr` VALUES (108, 12, 1, 7, 3, '显示器', '55555555555', NULL, NULL, 1, '2019-06-08 17:30:49', '2019-06-08 17:30:49');
INSERT INTO `goods_attr` VALUES (121, 13, 1, 1, 2, '主机1', 'gggggg______\r\ngggggg______\r\ngggggg______\r\n', NULL, NULL, 1, '2019-06-08 22:02:23', '2019-06-08 22:02:23');
INSERT INTO `goods_attr` VALUES (122, 13, 1, 2, 2, '基本信息', 'ggggggg', NULL, NULL, 1, '2019-06-08 22:02:23', '2019-06-08 22:02:23');
INSERT INTO `goods_attr` VALUES (123, 13, 1, 3, 1, '操作系统', 'iiiiiii', NULL, NULL, 1, '2019-06-08 22:02:23', '2019-06-08 22:02:23');
INSERT INTO `goods_attr` VALUES (124, 13, 1, 4, 2, '处理器', 'uuuuu', NULL, NULL, 1, '2019-06-08 22:02:23', '2019-06-08 22:02:23');
INSERT INTO `goods_attr` VALUES (125, 13, 1, 5, 3, '是否支持蓝牙', '否', NULL, NULL, 1, '2019-06-08 22:02:23', '2019-06-08 22:02:23');
INSERT INTO `goods_attr` VALUES (126, 13, 1, 7, 3, '显示器', '33X33', NULL, NULL, 1, '2019-06-08 22:02:23', '2019-06-08 22:02:23');
INSERT INTO `goods_attr` VALUES (127, 14, 10, 1, 2, '主机1', '11111111', NULL, NULL, 1, '2019-06-08 22:03:01', '2019-06-08 22:03:01');
INSERT INTO `goods_attr` VALUES (128, 14, 10, 2, 2, '基本信息', '22222222222', NULL, NULL, 1, '2019-06-08 22:03:01', '2019-06-08 22:03:01');
INSERT INTO `goods_attr` VALUES (129, 14, 10, 3, 1, '操作系统', '3333333333', NULL, NULL, 1, '2019-06-08 22:03:01', '2019-06-08 22:03:01');
INSERT INTO `goods_attr` VALUES (130, 14, 10, 4, 2, '处理器', '44444444444', NULL, NULL, 1, '2019-06-08 22:03:01', '2019-06-08 22:03:01');
INSERT INTO `goods_attr` VALUES (131, 14, 10, 5, 3, '是否支持蓝牙', '是', NULL, NULL, 1, '2019-06-08 22:03:01', '2019-06-08 22:03:01');
INSERT INTO `goods_attr` VALUES (132, 14, 10, 7, 3, '显示器', '1X1', NULL, NULL, 1, '2019-06-08 22:03:01', '2019-06-08 22:03:01');
INSERT INTO `goods_attr` VALUES (157, 9, 1, 1, 2, '主机1', '', NULL, NULL, 1, '2019-06-08 23:06:28', '2019-06-08 23:06:28');
INSERT INTO `goods_attr` VALUES (158, 9, 1, 2, 2, '基本信息', '', NULL, NULL, 1, '2019-06-08 23:06:28', '2019-06-08 23:06:28');
INSERT INTO `goods_attr` VALUES (159, 9, 1, 3, 1, '操作系统', '', NULL, NULL, 1, '2019-06-08 23:06:28', '2019-06-08 23:06:28');
INSERT INTO `goods_attr` VALUES (160, 9, 1, 4, 2, '处理器', '', NULL, NULL, 1, '2019-06-08 23:06:28', '2019-06-08 23:06:28');
INSERT INTO `goods_attr` VALUES (161, 9, 1, 5, 3, '是否支持蓝牙', '是', NULL, NULL, 1, '2019-06-08 23:06:28', '2019-06-08 23:06:28');
INSERT INTO `goods_attr` VALUES (162, 9, 1, 7, 3, '显示器', '1X1', NULL, NULL, 1, '2019-06-08 23:06:28', '2019-06-08 23:06:28');
INSERT INTO `goods_attr` VALUES (265, 8, 1, 1, 2, '主机1', '高通845', NULL, NULL, 1, '2019-06-10 01:20:45', '2019-06-10 01:20:45');
INSERT INTO `goods_attr` VALUES (266, 8, 1, 2, 2, '基本信息', '超级发烧友', NULL, NULL, 1, '2019-06-10 01:20:45', '2019-06-10 01:20:45');
INSERT INTO `goods_attr` VALUES (267, 8, 1, 3, 1, '操作系统', 'unix', NULL, NULL, 1, '2019-06-10 01:20:45', '2019-06-10 01:20:45');
INSERT INTO `goods_attr` VALUES (268, 8, 1, 4, 2, '处理器', 'i7', NULL, NULL, 1, '2019-06-10 01:20:45', '2019-06-10 01:20:45');
INSERT INTO `goods_attr` VALUES (269, 8, 1, 5, 3, '是否支持蓝牙', '是', NULL, NULL, 1, '2019-06-10 01:20:45', '2019-06-10 01:20:45');
INSERT INTO `goods_attr` VALUES (270, 8, 1, 7, 3, '显示器', '1X1', NULL, NULL, 1, '2019-06-10 01:20:45', '2019-06-10 01:20:45');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
