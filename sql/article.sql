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

 Date: 06/11/2019 21:39:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `cate_id` int(11) NOT NULL COMMENT '文章分类ID',
  `article_img` varchar(500) DEFAULT NULL COMMENT '文章图片',
  `link` varchar(500) DEFAULT NULL COMMENT '文章链接',
  `keywords` varchar(255) DEFAULT NULL COMMENT '关键字',
  `description` varchar(500) DEFAULT NULL COMMENT '描述语',
  `content` text COMMENT '文章内容',
  `sort` int(11) NOT NULL DEFAULT '100' COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of article
-- ----------------------------
BEGIN;
INSERT INTO `article` VALUES (1, '小米手机9999', 1, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/474340039747.9039u%3D4094753358%2C3609501592%26fm%3D27%26gp%3D0.jpg', 'https://www.mi.com/', '小米商城', '小米商城 - 小米9、小米MIX 3、Redmi K20，小米电视官方网站', '', 100, 0, '2019-06-08 00:42:22', '2019-06-08 01:04:30');
INSERT INTO `article` VALUES (2, '账户管理12', 2, 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/507552837147.24084u%3D4094753358%2C3609501592%26fm%3D27%26gp%3D0.jpg', 'https://www.mi.com/', '小米商城', '小米商城 - 小米9、小米MIX 3、Redmi K20，小米电视官方网站', '<p><span style=\'color: rgb(255, 103, 0);font-size: 16px;margin-top: 0px;background-color: rgb(255, 255, 255);font-family: \"Helvetica Neue\", Helvetica, Arial, \"Microsoft Yahei\", \"Hiragino Sans GB\", \"Heiti SC\", \"WenQuanYi Micro Hei\", sans-serif;font-style: normal;font-weight: 400;text-indent: 0px;\'>小米账户如何注册？</span></p><div style=\'padding: 32px 48px;margin: 0px;color: rgb(51, 51, 51);font-family: \"Helvetica Neue\", Helvetica, Arial, \"Microsoft Yahei\", \"Hiragino Sans GB\", \"Heiti SC\", \"WenQuanYi Micro Hei\", sans-serif;font-size: 14px;font-style: normal;font-weight: 400;text-align: start;text-indent: 0px;\'><p style=\"margin: 0px;color: rgb(117, 117, 117);padding: 0px;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微软雅黑;\">1.打开小米</span><span style=\"font-family: 微软雅黑;\">商城，点击右上角&ldquo;注册&rdquo;按钮 &nbsp;&gt; &nbsp;2.输入手机号和图片上的验证码 &nbsp;&gt; &nbsp;3.输入短信验证码，点击&ldquo;下一步&rdquo;按钮 &nbsp;&gt; &nbsp; 4.按提示输入您的信息，设置密码，完成注册。</span></span></p><p style=\"margin: 0px;color: rgb(117, 117, 117);padding: 0px;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微软雅黑;\">图文解释您可以</span><a data-stat-id=\"5c1bd8ba88582c34\" href=\"http://cdn.cnbj1.fds.api.mi-img.com/ics-resources/articles/5b6b9f0af98afb3208f94cf7.html\" style=\"color: rgb(117, 117, 117);text-decoration: none;\"><span style=\"color: rgb(0, 0, 205);\"><span style=\"font-family: 微软雅黑;\">点击这里</span></span></a></span></p></div>', 100, 1, '2019-06-08 00:43:14', '2019-06-08 01:20:51');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
