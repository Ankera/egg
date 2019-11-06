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

 Date: 06/11/2019 21:39:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods_cate
-- ----------------------------
DROP TABLE IF EXISTS `goods_cate`;
CREATE TABLE `goods_cate` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `title` varchar(255) NOT NULL COMMENT '分类名称',
  `cate_img` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '分类图片',
  `filter_attr` varchar(500) DEFAULT NULL,
  `link` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '跳转地址',
  `pid` int(11) DEFAULT NULL COMMENT '自身关联，父级ID',
  `template` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '模板',
  `sub_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT 'SEO标题，关键字',
  `keywords` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `sort` int(11) DEFAULT '100',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '默认状态是1，',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of goods_cate
-- ----------------------------
BEGIN;
INSERT INTO `goods_cate` VALUES (1, '手机 电话卡', '', '', '', 0, '', '', '', '', 10, 1, '2019-06-02 10:07:33', '2019-06-08 16:57:23');
INSERT INTO `goods_cate` VALUES (2, '笔记本 平板', '', '', 'x x x', 0, '', '', '', '', 100, 1, '2019-06-02 10:08:53', '2019-06-08 16:54:07');
INSERT INTO `goods_cate` VALUES (3, '电视 盒子', '', '', 'https://eggjs.org/zh-cn/tutorials/mysql.html', 0, '', '', '', '', 101, 1, '2019-06-02 21:05:08', '2019-06-08 16:55:58');
INSERT INTO `goods_cate` VALUES (4, '家电 插线板', '', '', '', 0, '', '', '', '', 100, 1, '2019-06-08 16:54:24', '2019-06-08 16:54:24');
INSERT INTO `goods_cate` VALUES (5, '智能 路由器', '', '', '', 0, '', '', '', '', 100, 1, '2019-06-08 16:54:36', '2019-06-08 16:54:36');
INSERT INTO `goods_cate` VALUES (6, '电源 配件', '', '', '', 0, '', '', '', '', 100, 1, '2019-06-08 16:54:52', '2019-06-08 16:54:52');
INSERT INTO `goods_cate` VALUES (7, '健康 儿童', '', '', '', 0, '', '', '', '', 100, 1, '2019-06-08 16:55:10', '2019-06-08 16:55:10');
INSERT INTO `goods_cate` VALUES (8, '耳机 音响', '', '', '', 0, '', '', '', '', 100, 1, '2019-06-08 16:55:34', '2019-06-08 16:55:34');
INSERT INTO `goods_cate` VALUES (9, '生活 箱包', '', '', '', 0, '', '', '', '', 100, 1, '2019-06-08 16:56:33', '2019-06-08 16:56:33');
INSERT INTO `goods_cate` VALUES (10, '小米9', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/194430478393.45538mi9-80.png', '', '', 1, '', '', '', '', 100, 1, '2019-06-08 17:13:03', '2019-06-09 15:44:04');
INSERT INTO `goods_cate` VALUES (11, '小米8SE', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/71855955584.74m8se-80.png', '', 'https://eggjs.org/zh-cn/', 1, 'default/template.html', '', '', '', 100, 1, '2019-06-08 17:13:58', '2019-06-09 16:19:03');
INSERT INTO `goods_cate` VALUES (12, 'Redmi K20 Pro', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/326534098623.85986hongse-1.jpg', '', 'https://www.mi.com/redmik20pro/', 1, 'default/template.html', '', '', '', 100, 1, '2019-06-08 17:15:15', '2019-06-09 16:22:22');
INSERT INTO `goods_cate` VALUES (13, '小米笔记本 15.6\"', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/693697481119.7472bijiben80.jpg', '', 'https://search.mi.com/search_%E7%AC%94%E8%AE%B0%E6%9C%AC-246', 2, '', '', '', '', 100, 1, '2019-06-08 17:16:43', '2019-06-08 17:17:42');
INSERT INTO `goods_cate` VALUES (14, '小米笔记本 13.3\"', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/175746421335.4973480x80.png', '', 'https://search.mi.com/search_%E7%AC%94%E8%AE%B0%E6%9C%AC-247', 2, '', '', '', '', 100, 1, '2019-06-08 17:17:28', '2019-06-08 17:17:28');
INSERT INTO `goods_cate` VALUES (15, '米家激光投影电视', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/277867183032.5161mijiajiguang4k.jpg', '', 'https://search.mi.com/search_%E6%BF%80%E5%85%89', 3, '', '', '', '', 100, 1, '2019-06-08 17:18:33', '2019-06-08 17:18:33');
INSERT INTO `goods_cate` VALUES (16, '米家互联网立式空调C1', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/453130655554.526lishikongtiao.png', '', 'https://www.mi.com/aircondition-f/f3c1/', 4, '', '', '', '', 100, 1, '2019-06-08 17:19:11', '2019-06-08 17:19:11');
INSERT INTO `goods_cate` VALUES (17, '打印机', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/895071909512.4757zhaopiandayinj.jpg', '', 'https://search.mi.com/search_%E6%89%93%E5%8D%B0%E6%9C%BA-265', 5, '', '', '', '', 100, 1, '2019-06-08 17:19:50', '2019-06-08 17:19:50');
INSERT INTO `goods_cate` VALUES (18, '移动电源', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/691672141696.117dianyuan2.100080.jpg', '', '移动电源', 6, '', '', '', '', 100, 1, '2019-06-08 17:20:21', '2019-06-08 17:20:21');
INSERT INTO `goods_cate` VALUES (19, '洗手机', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/764964966511.0221xishouji.jpg', '', 'https://www.mi.com/dispenser/', 7, '', '', '', '', 100, 1, '2019-06-08 17:21:04', '2019-06-08 17:21:04');
INSERT INTO `goods_cate` VALUES (20, '小米小爱音箱mini', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/854953076444.0665xiaoaimini-08.jpg', '', 'https://item.mi.com/product/7832.html', 8, '', '', '', '', 100, 1, '2019-06-08 17:21:44', '2019-06-08 17:21:44');
INSERT INTO `goods_cate` VALUES (21, '双肩包', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/494423213607.28656xiangbao-80.jpg', '', 'https://search.mi.com/search_%E5%8F%8C%E8%82%A9%E5%8C%85-213', 9, '', '', '', '', 100, 1, '2019-06-08 17:22:20', '2019-06-08 17:23:22');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
