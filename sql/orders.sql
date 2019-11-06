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

 Date: 06/11/2019 21:40:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `order_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '订单加密MD5，签名',
  `uid` int(11) NOT NULL COMMENT '订单人ID',
  `all_price` decimal(18,2) NOT NULL DEFAULT '0.00' COMMENT '订单价格',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '订单人姓名',
  `phone` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '订单人电话',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '订单人地址',
  `zipcode` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '订单人邮编',
  `pay_status` tinyint(1) DEFAULT '0' COMMENT '支付状态，0未支付， 1支付',
  `pay_type` tinyint(1) DEFAULT '1' COMMENT '支付类型，微信，支付宝',
  `order_status` tinyint(1) DEFAULT NULL COMMENT '支付状态， 0已下单，1已付款，2已配货， 3发货， 4交易成功， 5退货， 6取消',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of orders
-- ----------------------------
BEGIN;
INSERT INTO `orders` VALUES (1, '15604369858693978', 2, 15993.00, '大屁股11', '15189120912', '湖北省  老河口市  张集镇  余刘村', '232123', 1, 1, 0, '2019-06-13 22:43:05', '2019-06-15 21:57:47');
INSERT INTO `orders` VALUES (2, '15604370548699071', 2, 11994.00, '张三', '15189120912', 'xxx xxx xxx 122', '441804', 0, 1, 1, '2019-06-13 22:44:14', '2019-06-15 21:57:48');
INSERT INTO `orders` VALUES (3, '15605264324848457', 2, 1999.00, '张三', '15189120912', 'xxx xxx xxx 122', '441804', 0, 1, 3, '2019-06-14 23:33:52', '2019-06-15 21:57:49');
INSERT INTO `orders` VALUES (4, '15606011760760188', 2, 1999.00, '大屁股11', '15189120912', '湖北省  老河口市  张集镇  余刘村', '232123', 0, 1, 0, '2019-06-15 20:19:36', '2019-06-15 20:19:36');
INSERT INTO `orders` VALUES (5, '15606062875408072', 2, 1999.00, '大屁股11', '15189120912', '湖北省  老河口市  张集镇  余刘村', '232123', 0, 1, 0, '2019-06-15 21:44:47', '2019-06-15 21:44:47');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
