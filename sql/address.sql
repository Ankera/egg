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

 Date: 06/11/2019 21:38:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `uid` int(11) NOT NULL COMMENT '用户ID',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '收件人姓名',
  `phone` decimal(11,0) NOT NULL COMMENT '收件人手机号码',
  `address` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '收件人地址',
  `default_address` tinyint(1) NOT NULL DEFAULT '1' COMMENT '默认地址1',
  `zipcode` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0' COMMENT '邮编',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of address
-- ----------------------------
BEGIN;
INSERT INTO `address` VALUES (1, 2, '余亚勇', 15189120919, 'fasdfs fdaf adfas ', 0, '56780', '2019-06-13 00:03:36', '2019-06-13 22:28:10');
INSERT INTO `address` VALUES (2, 2, '张三', 15189120912, 'xxx xxx xxx 122', 0, '441804', '2019-06-13 00:04:21', '2019-06-15 20:19:34');
INSERT INTO `address` VALUES (3, 2, '大屁股11', 15189120912, '湖北省  老河口市  张集镇  余刘村', 1, '232123', '2019-06-13 00:10:04', '2019-06-15 20:19:34');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
