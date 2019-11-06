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

 Date: 06/11/2019 21:40:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for nav
-- ----------------------------
DROP TABLE IF EXISTS `nav`;
CREATE TABLE `nav` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '导航名称',
  `link` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '链接地址',
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '2' COMMENT '导航位置，1顶部，2中间，3底部',
  `relation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '导航和那些商品关联',
  `is_opennew` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否新窗口打开，1是新窗口，2本窗口',
  `sort` int(11) NOT NULL DEFAULT '100' COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of nav
-- ----------------------------
BEGIN;
INSERT INTO `nav` VALUES (1, '小米手机', '', '2', '8,9,10', 2, 10, 1, '2019-06-07 21:35:52', '2019-06-08 17:37:05');
INSERT INTO `nav` VALUES (2, 'Redmi 红米', '222', '2', '11,12,13,14', 2, 10, 1, '2019-06-07 21:36:02', '2019-06-08 22:01:22');
INSERT INTO `nav` VALUES (3, '电视', '', '2', '', 1, 10, 1, '2019-06-07 21:36:13', '2019-06-07 21:36:13');
INSERT INTO `nav` VALUES (4, '笔记本', '', '2', '', 1, 10, 1, '2019-06-07 21:36:20', '2019-06-07 21:36:20');
INSERT INTO `nav` VALUES (5, '空调', '', '2', '', 1, 10, 1, '2019-06-07 21:36:27', '2019-06-07 21:36:27');
INSERT INTO `nav` VALUES (6, '路由器', '', '2', '', 1, 10, 1, '2019-06-07 21:36:39', '2019-06-07 21:36:39');
INSERT INTO `nav` VALUES (7, '智能硬件', '', '2', '', 1, 10, 1, '2019-06-07 21:36:53', '2019-06-07 21:36:53');
INSERT INTO `nav` VALUES (8, '服务', '', '2', '', 1, 10, 1, '2019-06-07 21:36:59', '2019-06-07 21:36:59');
INSERT INTO `nav` VALUES (9, '社区', '', '2', '', 1, 10, 1, '2019-06-07 21:37:06', '2019-06-07 21:37:06');
INSERT INTO `nav` VALUES (10, 'BBS', 'xxx', '3', '112', 2, 10, 1, '2019-06-07 21:43:16', '2019-06-07 21:53:05');
INSERT INTO `nav` VALUES (11, '小米商场', 'https://www.mi.com/', '1', '', 1, 10, 1, '2019-06-08 14:54:55', '2019-06-08 14:54:55');
INSERT INTO `nav` VALUES (12, 'MUI', 'http://dev.dcloud.net.cn/mui/getting-started/', '1', '', 1, 10, 1, '2019-06-08 14:55:27', '2019-06-08 14:55:27');
INSERT INTO `nav` VALUES (13, '云服务', 'https://www.aliyun.com', '1', '', 2, 10, 1, '2019-06-08 14:56:06', '2019-06-08 14:56:32');
INSERT INTO `nav` VALUES (14, '金融', '', '1', '', 1, 10, 1, '2019-06-08 14:56:22', '2019-06-08 14:56:22');
INSERT INTO `nav` VALUES (15, '有品', 'https://re.jd.com', '1', '', 2, 10, 1, '2019-06-08 14:57:05', '2019-06-08 15:26:51');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
