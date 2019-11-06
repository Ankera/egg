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

 Date: 06/11/2019 21:40:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for orders_item
-- ----------------------------
DROP TABLE IF EXISTS `orders_item`;
CREATE TABLE `orders_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `order_id` int(11) NOT NULL COMMENT '订单ID',
  `product_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '商品名称',
  `product_id` int(11) NOT NULL COMMENT '商品ID',
  `product_img` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '商品图片',
  `product_price` decimal(18,2) NOT NULL COMMENT '商品价格',
  `product_num` int(11) NOT NULL COMMENT '商品数量',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of orders_item
-- ----------------------------
BEGIN;
INSERT INTO `orders_item` VALUES (1, 1, '小米9SE', 19, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/523423084692.7679qingchun-320.png', 3999.00, 1, '2019-06-13 22:43:05', '2019-06-13 22:43:05');
INSERT INTO `orders_item` VALUES (2, 1, '小米9~', 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/836530267269.35759f23a8fb8987d517.jpg', 1999.00, 2, '2019-06-13 22:43:05', '2019-06-13 22:43:05');
INSERT INTO `orders_item` VALUES (3, 1, '小米9~', 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/836530267269.35759f23a8fb8987d517.jpg', 1999.00, 2, '2019-06-13 22:43:05', '2019-06-13 22:43:05');
INSERT INTO `orders_item` VALUES (4, 1, '小米9~', 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/836530267269.35759f23a8fb8987d517.jpg', 1999.00, 2, '2019-06-13 22:43:05', '2019-06-13 22:43:05');
INSERT INTO `orders_item` VALUES (5, 2, '小米9~', 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/836530267269.35759f23a8fb8987d517.jpg', 1999.00, 6, '2019-06-13 22:44:14', '2019-06-13 22:44:14');
INSERT INTO `orders_item` VALUES (6, 3, '小米9~', 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/836530267269.35759f23a8fb8987d517.jpg', 1999.00, 1, '2019-06-14 23:33:52', '2019-06-14 23:33:52');
INSERT INTO `orders_item` VALUES (7, 4, '小米9~', 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/836530267269.35759f23a8fb8987d517.jpg', 1999.00, 1, '2019-06-15 20:19:36', '2019-06-15 20:19:36');
INSERT INTO `orders_item` VALUES (8, 5, '小米9~', 8, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/836530267269.35759f23a8fb8987d517.jpg', 1999.00, 1, '2019-06-15 21:44:47', '2019-06-15 21:44:47');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
