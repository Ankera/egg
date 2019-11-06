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

 Date: 06/11/2019 21:40:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods_type_attribute
-- ----------------------------
DROP TABLE IF EXISTS `goods_type_attribute`;
CREATE TABLE `goods_type_attribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `cate_id` int(11) NOT NULL COMMENT '对应商品类型ID',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '属性名称',
  `attr_type` tinyint(1) NOT NULL COMMENT '1是单航文本框(input)，2 是多行文件框(textarea)，3时下拉列表(select)',
  `attr_value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '对应attr_type描述, 当是input.textarea时为空，select有默认值，多个默认值以回车隔开',
  `sort` int(11) NOT NULL DEFAULT '100' COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态，默认1',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of goods_type_attribute
-- ----------------------------
BEGIN;
INSERT INTO `goods_type_attribute` VALUES (1, 7, '主机1', 2, NULL, 100, 0, '2019-06-01 21:59:12', '2019-06-01 23:11:37');
INSERT INTO `goods_type_attribute` VALUES (2, 7, '基本信息', 2, NULL, 100, 1, '2019-06-01 22:17:29', '2019-06-01 23:37:37');
INSERT INTO `goods_type_attribute` VALUES (3, 7, '操作系统', 1, NULL, 100, 1, '2019-06-01 22:17:45', '2019-06-01 23:19:06');
INSERT INTO `goods_type_attribute` VALUES (4, 7, '处理器', 2, NULL, 100, 1, '2019-06-01 22:17:59', '2019-06-01 22:17:59');
INSERT INTO `goods_type_attribute` VALUES (5, 7, '是否支持蓝牙', 3, '是\r\n否', 5, 1, '2019-06-01 22:18:15', '2019-06-02 00:04:22');
INSERT INTO `goods_type_attribute` VALUES (7, 7, '显示器', 3, '1X1\r\n2X2\r\n33X33\r\n44X44', 100, 1, '2019-06-01 22:21:21', '2019-06-06 00:12:19');
INSERT INTO `goods_type_attribute` VALUES (9, 6, '遥控器', 2, NULL, 5, 1, '2019-06-01 23:01:03', '2019-06-03 00:15:33');
INSERT INTO `goods_type_attribute` VALUES (10, 2, '主体', 1, NULL, 100, 1, '2019-06-01 23:04:39', '2019-06-03 23:26:06');
INSERT INTO `goods_type_attribute` VALUES (11, 2, '内存', 1, NULL, 100, 1, '2019-06-01 23:04:46', '2019-06-03 23:26:18');
INSERT INTO `goods_type_attribute` VALUES (12, 6, '天线', 1, NULL, 100, 1, '2019-06-01 23:33:10', '2019-06-01 23:33:10');
INSERT INTO `goods_type_attribute` VALUES (13, 2, '硬盘', 1, NULL, 100, 1, '2019-06-01 23:38:04', '2019-06-03 23:26:33');
INSERT INTO `goods_type_attribute` VALUES (14, 6, '比路线', 1, NULL, 100, 1, '2019-06-01 23:54:46', '2019-06-03 00:15:48');
INSERT INTO `goods_type_attribute` VALUES (15, 2, '显示器', 3, '1920x1080\r\n1366x768\r\n1280x720\r\n960 x 540', 100, 1, '2019-06-03 23:28:59', '2019-06-03 23:29:17');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
