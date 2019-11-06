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

 Date: 06/11/2019 21:40:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for role_access
-- ----------------------------
DROP TABLE IF EXISTS `role_access`;
CREATE TABLE `role_access` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `access_id` int(11) NOT NULL COMMENT '权限ID',
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of role_access
-- ----------------------------
BEGIN;
INSERT INTO `role_access` VALUES (33, 1, 7, '2019-05-28 23:07:16', '2019-05-28 23:07:16');
INSERT INTO `role_access` VALUES (34, 5, 7, '2019-05-28 23:07:16', '2019-05-28 23:07:16');
INSERT INTO `role_access` VALUES (35, 2, 7, '2019-05-28 23:07:16', '2019-05-28 23:07:16');
INSERT INTO `role_access` VALUES (36, 7, 7, '2019-05-28 23:07:16', '2019-05-28 23:07:16');
INSERT INTO `role_access` VALUES (37, 11, 7, '2019-05-28 23:07:16', '2019-05-28 23:07:16');
INSERT INTO `role_access` VALUES (38, 13, 7, '2019-05-28 23:07:16', '2019-05-28 23:07:16');
INSERT INTO `role_access` VALUES (39, 15, 7, '2019-05-28 23:07:16', '2019-05-28 23:07:16');
INSERT INTO `role_access` VALUES (54, 1, 6, '2019-05-28 23:55:42', '2019-05-28 23:55:42');
INSERT INTO `role_access` VALUES (55, 4, 6, '2019-05-28 23:55:42', '2019-05-28 23:55:42');
INSERT INTO `role_access` VALUES (56, 5, 6, '2019-05-28 23:55:42', '2019-05-28 23:55:42');
INSERT INTO `role_access` VALUES (57, 8, 6, '2019-05-28 23:55:42', '2019-05-28 23:55:42');
INSERT INTO `role_access` VALUES (58, 2, 6, '2019-05-28 23:55:42', '2019-05-28 23:55:42');
INSERT INTO `role_access` VALUES (59, 3, 6, '2019-05-28 23:55:42', '2019-05-28 23:55:42');
INSERT INTO `role_access` VALUES (60, 13, 6, '2019-05-28 23:55:42', '2019-05-28 23:55:42');
INSERT INTO `role_access` VALUES (61, 14, 6, '2019-05-28 23:55:42', '2019-05-28 23:55:42');
INSERT INTO `role_access` VALUES (62, 15, 6, '2019-05-28 23:55:42', '2019-05-28 23:55:42');
INSERT INTO `role_access` VALUES (63, 2, 2, '2019-05-29 00:23:26', '2019-05-29 00:23:26');
INSERT INTO `role_access` VALUES (64, 6, 2, '2019-05-29 00:23:26', '2019-05-29 00:23:26');
INSERT INTO `role_access` VALUES (65, 7, 2, '2019-05-29 00:23:26', '2019-05-29 00:23:26');
INSERT INTO `role_access` VALUES (66, 9, 2, '2019-05-29 00:23:26', '2019-05-29 00:23:26');
INSERT INTO `role_access` VALUES (67, 13, 2, '2019-05-29 00:23:26', '2019-05-29 00:23:26');
INSERT INTO `role_access` VALUES (68, 14, 2, '2019-05-29 00:23:26', '2019-05-29 00:23:26');
INSERT INTO `role_access` VALUES (69, 15, 2, '2019-05-29 00:23:26', '2019-05-29 00:23:26');
INSERT INTO `role_access` VALUES (78, 22, 1, '2019-06-01 00:21:38', '2019-06-01 00:21:38');
INSERT INTO `role_access` VALUES (79, 25, 1, '2019-06-01 00:21:38', '2019-06-01 00:21:38');
INSERT INTO `role_access` VALUES (80, 23, 1, '2019-06-01 00:21:38', '2019-06-01 00:21:38');
INSERT INTO `role_access` VALUES (81, 1, 1, '2019-06-01 00:21:38', '2019-06-01 00:21:38');
INSERT INTO `role_access` VALUES (82, 4, 1, '2019-06-01 00:21:38', '2019-06-01 00:21:38');
INSERT INTO `role_access` VALUES (83, 5, 1, '2019-06-01 00:21:38', '2019-06-01 00:21:38');
INSERT INTO `role_access` VALUES (84, 13, 1, '2019-06-01 00:21:38', '2019-06-01 00:21:38');
INSERT INTO `role_access` VALUES (85, 14, 1, '2019-06-01 00:21:38', '2019-06-01 00:21:38');
INSERT INTO `role_access` VALUES (86, 15, 1, '2019-06-01 00:21:38', '2019-06-01 00:21:38');
INSERT INTO `role_access` VALUES (87, 13, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (88, 14, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (89, 15, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (90, 32, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (91, 33, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (92, 34, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (93, 28, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (94, 29, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (95, 36, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (96, 37, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (97, 38, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (98, 39, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (99, 30, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (100, 40, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (101, 41, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (102, 42, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (103, 43, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
INSERT INTO `role_access` VALUES (104, 31, 8, '2019-06-02 22:54:31', '2019-06-02 22:54:31');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
