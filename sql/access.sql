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

 Date: 06/11/2019 21:38:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for access
-- ----------------------------
DROP TABLE IF EXISTS `access`;
CREATE TABLE `access` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `module_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '模板名称',
  `action_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '操作名称',
  `type` tinyint(1) NOT NULL COMMENT '节点类型: 1 表示模板； 2. 表示菜单， 3. 操作',
  `url` varchar(200) DEFAULT NULL COMMENT '地址',
  `module_id` int(11) DEFAULT NULL COMMENT '等于0时，表示是模块',
  `sort` int(11) DEFAULT NULL COMMENT '排序',
  `description` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '描述',
  `status` int(11) DEFAULT NULL COMMENT '状态',
  `is_delete` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否删除，0表示删除，1存在，默认1',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of access
-- ----------------------------
BEGIN;
INSERT INTO `access` VALUES (1, '管理员管理', '', 1, '', 0, 2, '顶级模板', NULL, 1, '2019-05-27 22:56:31', '2019-05-30 23:20:21');
INSERT INTO `access` VALUES (2, '角色管理', '', 1, '', 0, 3, '顶级模板', NULL, 1, '2019-05-27 22:58:30', '2019-05-30 23:20:34');
INSERT INTO `access` VALUES (5, '管理员管理', '增加管理员', 2, '/admin/manager/add', 1, 2, '增加管理员--菜单', NULL, 1, '2019-05-27 23:11:43', '2019-06-07 21:03:49');
INSERT INTO `access` VALUES (6, '角色管理', '角色列表', 2, '/admin/role', 2, 1, '角色列表--菜单', NULL, 1, '2019-05-27 23:16:38', '2019-06-07 21:04:02');
INSERT INTO `access` VALUES (7, '角色管理', '增加角色', 2, '/admin/role/add', 2, 2, '增加角色--菜单', NULL, 1, '2019-05-27 23:17:21', '2019-06-07 21:04:03');
INSERT INTO `access` VALUES (8, '管理员管理', '编辑管理员', 3, '/admin/manager/edit', 1, 4, '编辑管理员--操作', NULL, 1, '2019-05-27 23:19:37', '2019-06-07 21:03:52');
INSERT INTO `access` VALUES (9, '角色管理', '编辑角色', 3, '/admin/role/edit', 2, 4, '编辑角色--操作', NULL, 1, '2019-05-27 23:20:22', '2019-06-07 21:04:06');
INSERT INTO `access` VALUES (10, '权限管理', '权限列表', 2, '/admin/access', 3, 100, '权限列表--菜单', NULL, 1, '2019-05-27 23:22:19', '2019-05-27 23:22:19');
INSERT INTO `access` VALUES (11, '权限管理', '增加权限', 2, '/admin/access/add', 3, 100, '增加权限--菜单', NULL, 1, '2019-05-27 23:22:57', '2019-05-27 23:22:57');
INSERT INTO `access` VALUES (12, '权限管理', '编辑权限', 3, '/admin/access/edit', 3, 100, '编辑权限--操作', NULL, 1, '2019-05-27 23:23:46', '2019-05-27 23:23:46');
INSERT INTO `access` VALUES (13, '轮播图管理', '', 1, '', 0, 5, '轮播图管理--顶级', NULL, 0, '2019-05-28 01:35:53', '2019-06-08 05:43:42');
INSERT INTO `access` VALUES (14, '轮播图管理', '轮播图列表', 2, '/admin/focus', 49, 1, '轮播图列表--菜单', NULL, 1, '2019-05-28 01:37:06', '2019-06-08 05:36:12');
INSERT INTO `access` VALUES (15, '轮播图管理', '增加轮播图', 3, '/admin/focus/add', 49, 2, '增加轮播图--菜单', NULL, 1, '2019-05-28 01:38:21', '2019-06-08 05:38:20');
INSERT INTO `access` VALUES (16, '管理员管理', '增加管理员--提交', 3, '/admin/manager/doAdd', 1, 3, '增加管理员--提交-操作', NULL, 1, '2019-05-29 00:57:05', '2019-06-07 21:03:50');
INSERT INTO `access` VALUES (17, '管理员管理', '编辑管理员--提交', 3, '/admin/manager/doEdit', 1, 5, '编辑管理员--提交-操作', NULL, 1, '2019-05-29 00:58:01', '2019-06-07 21:03:53');
INSERT INTO `access` VALUES (18, '角色管理', '增加角色--提交', 3, '/admin/role/doAdd', 2, 3, '增加角色--提交-操作', NULL, 1, '2019-05-29 00:58:56', '2019-06-07 21:04:05');
INSERT INTO `access` VALUES (19, '角色管理', '编辑角色--提交', 3, '/admin/role/doEdit', 2, 5, '编辑角色--提交-操作', NULL, 1, '2019-05-29 00:59:35', '2019-06-07 21:04:08');
INSERT INTO `access` VALUES (20, '权限管理', '增加权限--提交', 3, '/admin/access/doAdd', 3, 100, '增加权限--提交-操作', NULL, 1, '2019-05-29 01:00:47', '2019-05-29 01:00:47');
INSERT INTO `access` VALUES (21, '权限管理', '编辑权限--提交', 3, '/admin/access/doEdit', 3, 100, '编辑权限--提交-操作', NULL, 1, '2019-05-29 01:02:15', '2019-05-29 01:02:15');
INSERT INTO `access` VALUES (22, '权限管理', '', 1, '', 0, 1, '', NULL, 1, '2019-05-30 23:12:27', '2019-05-30 23:20:11');
INSERT INTO `access` VALUES (23, '权限管理', '增加权限', 2, '/admin/access/add', 22, 2, '增加权限--菜单', NULL, 1, '2019-05-30 23:13:57', '2019-05-30 23:19:04');
INSERT INTO `access` VALUES (24, '权限管理', '编辑权限', 3, '/admin/access/edit', 22, 4, '编辑权限--操作', NULL, 1, '2019-05-30 23:14:59', '2019-06-07 21:03:30');
INSERT INTO `access` VALUES (25, '权限管理', '权限列表', 2, '/admin/access', 22, 1, '权限列表--菜单', NULL, 1, '2019-05-30 23:16:51', '2019-05-31 00:29:46');
INSERT INTO `access` VALUES (26, '权限管理', '增加权限--提交', 3, '/admin/access/doAdd', 22, 3, '增加管理员--提交-操作', NULL, 1, '2019-05-30 23:17:49', '2019-06-07 21:03:26');
INSERT INTO `access` VALUES (27, '权限管理', '编辑权限--提交', 3, '/admin/access/doEdit', 22, 5, '编辑权限--提交-操作', NULL, 1, '2019-05-30 23:18:35', '2019-06-07 21:03:32');
INSERT INTO `access` VALUES (28, '商品管理', '', 1, '', 0, 6, '', NULL, 1, '2019-06-01 01:29:55', '2019-06-02 23:03:47');
INSERT INTO `access` VALUES (29, '商品管理', '商品类型', 2, '/admin/goodsType', 28, 1, '商品列表--菜单', NULL, 1, '2019-06-01 15:22:28', '2019-06-07 21:07:39');
INSERT INTO `access` VALUES (30, '商品管理', '商品分类', 2, '/admin/goodsCate', 28, 11, '商品分类--菜单', NULL, 1, '2019-06-01 15:25:55', '2019-06-07 21:08:40');
INSERT INTO `access` VALUES (31, '商品管理', '商品列表', 2, '/admin/goods', 28, 21, '商品列表--菜单', NULL, 1, '2019-06-01 15:26:38', '2019-06-07 21:10:51');
INSERT INTO `access` VALUES (32, '轮播图管理', '编辑轮播图', 3, '/admin/focus/edit', 49, 4, '编辑轮播图--菜单', NULL, 1, '2019-06-01 17:04:42', '2019-06-08 05:38:41');
INSERT INTO `access` VALUES (33, '轮播图管理', '增加轮播图--提交', 3, '/admin/focus/doAdd', 49, 3, '增加轮播图--提交-操作', NULL, 1, '2019-06-01 17:06:00', '2019-06-08 05:36:56');
INSERT INTO `access` VALUES (34, '轮播图管理', '编辑轮播图--提交', 3, '/admin/focus/doEdit', 49, 5, '编辑轮播图--提交-操作', NULL, 1, '2019-06-01 17:07:47', '2019-06-08 05:37:29');
INSERT INTO `access` VALUES (35, '管理员管理', '管理员列表', 2, '/admin/manager', 1, 1, '管理员列表--菜单', NULL, 1, '2019-06-01 17:09:07', '2019-06-07 21:03:46');
INSERT INTO `access` VALUES (36, '商品管理', '增加商品类型', 3, '/admin/goodsType/add', 28, 2, '增加商品类型--操作', NULL, 1, '2019-06-02 22:44:46', '2019-06-02 22:48:18');
INSERT INTO `access` VALUES (37, '商品管理', '编辑商品类型', 3, '/admin/goodsType/edit', 28, 4, '编辑商品类型--操作', NULL, 1, '2019-06-02 22:45:38', '2019-06-07 21:07:55');
INSERT INTO `access` VALUES (38, '商品管理', '增加商品类型--提交', 3, '/admin/goodsType/doAdd', 28, 3, '增加商品类型--提交-操作', NULL, 1, '2019-06-02 22:46:25', '2019-06-07 21:17:16');
INSERT INTO `access` VALUES (39, '商品管理', '编辑商品类型--提交', 3, '/admin/goodsType/doEdit', 28, 5, '编辑商品类型--提交-操作', NULL, 1, '2019-06-02 22:47:51', '2019-06-07 21:16:57');
INSERT INTO `access` VALUES (40, '商品管理', '增加商品分类', 3, '/admin/goodsCate/add', 28, 12, '增加商品分类--操作', NULL, 1, '2019-06-02 22:49:48', '2019-06-07 21:08:42');
INSERT INTO `access` VALUES (41, '商品管理', '编辑商品分类', 3, '/admin/goodsCate/edit', 28, 14, '编辑商品分类--操作', NULL, 1, '2019-06-02 22:50:45', '2019-06-07 21:08:49');
INSERT INTO `access` VALUES (42, '商品管理', '增加商品分类--提交', 3, '/admin/goodsCate/doADD', 28, 13, '增加商品分类--提交-操作', NULL, 1, '2019-06-02 22:51:28', '2019-06-07 21:17:47');
INSERT INTO `access` VALUES (43, '商品管理', '编辑商品分类--提交', 3, '/admin/goodsCate/doEdit', 28, 15, '编辑商品分类--提交-操作', NULL, 1, '2019-06-02 22:52:05', '2019-06-07 21:17:34');
INSERT INTO `access` VALUES (44, '颜色管理', '', 1, '', 0, 4, '', NULL, 1, '2019-06-02 23:00:36', '2019-06-02 23:03:52');
INSERT INTO `access` VALUES (45, '颜色管理', '颜色列表', 2, '/admin/goodsColor', 44, 1, '颜色列表--菜单', NULL, 1, '2019-06-02 23:01:27', '2019-06-07 21:04:23');
INSERT INTO `access` VALUES (46, '颜色管理', '增加颜色', 2, '/admin/goodsColor/add', 44, 2, '增加颜色--菜单', NULL, 1, '2019-06-02 23:01:58', '2019-06-07 21:04:42');
INSERT INTO `access` VALUES (47, '颜色管理', '增加颜色--提交', 3, '/admin/goodsColor/doAdd', 44, 3, '增加颜色--提交-操作', NULL, 1, '2019-06-02 23:02:47', '2019-06-07 21:06:38');
INSERT INTO `access` VALUES (48, '颜色管理', '编辑颜色--提交', 3, '/admin/goodsColor/doEdit', 44, 5, '编辑颜色--提交-操作', NULL, 1, '2019-06-02 23:03:34', '2019-06-07 21:06:42');
INSERT INTO `access` VALUES (49, '系统设置', '', 1, '', 0, 7, '', NULL, 1, '2019-06-07 20:50:43', '2019-06-08 02:12:35');
INSERT INTO `access` VALUES (50, '导航管理', '导航列表', 2, '/admin/nav', 49, 11, '导航列表--菜单', NULL, 1, '2019-06-07 20:52:17', '2019-06-08 05:35:22');
INSERT INTO `access` VALUES (51, '导航管理', '增加导航', 3, '/admin/nav/add', 49, 12, '增加导航--菜单', NULL, 1, '2019-06-07 20:53:21', '2019-06-08 05:35:25');
INSERT INTO `access` VALUES (52, '导航管理', '编辑导航', 3, '/admin/nav/edit', 49, 14, '编辑导航--操作', NULL, 1, '2019-06-07 20:54:13', '2019-06-08 05:35:29');
INSERT INTO `access` VALUES (53, '导航管理', '增加导航--提交', 3, '/admin/nav/doAdd', 49, 13, '增加导航--提交-操作', NULL, 1, '2019-06-07 20:55:33', '2019-06-08 05:35:27');
INSERT INTO `access` VALUES (54, '导航管理', '编辑导航--提交', 3, '/admin/nav/doEdit', 49, 15, '编辑导航--提交-操作', NULL, 1, '2019-06-07 20:56:11', '2019-06-08 05:35:31');
INSERT INTO `access` VALUES (55, '权限管理', '删除权限', 3, '/admin/access/delete', 22, 6, '删除权限-操作', NULL, 1, '2019-06-07 20:56:58', '2019-06-07 21:03:33');
INSERT INTO `access` VALUES (56, '管理员管理', '删除管理员', 3, '/admin/manager/delete', 1, 6, '删除管理员--操作', NULL, 1, '2019-06-07 20:57:42', '2019-06-07 21:03:55');
INSERT INTO `access` VALUES (57, '角色管理', '删除角色', 3, '/admin/role/delete', 2, 6, '删除角色--操作', NULL, 1, '2019-06-07 20:57:55', '2019-06-07 21:04:11');
INSERT INTO `access` VALUES (58, '颜色管理', '删除颜色', 3, '/admin/goodsColor/delete', 44, 6, '删除颜色--操作', NULL, 1, '2019-06-07 20:58:57', '2019-06-07 21:06:44');
INSERT INTO `access` VALUES (59, '轮播图管理', '删除轮播图', 3, '/admin/focus/delete', 49, 6, '删除轮播图--操作', NULL, 1, '2019-06-07 20:59:55', '2019-06-08 05:37:42');
INSERT INTO `access` VALUES (60, '商品管理', '删除商品类型', 3, '/admin/goodsCate/delete', 28, 16, '删除商品类型--操作', NULL, 1, '2019-06-07 21:00:47', '2019-06-07 21:10:24');
INSERT INTO `access` VALUES (61, '商品管理', '删除商品分类', 3, '/admin/goodsType/delete', 28, 6, '删除商品分类--操作', NULL, 1, '2019-06-07 21:01:23', '2019-06-07 21:10:02');
INSERT INTO `access` VALUES (62, '商品管理', '删除商品列表', 3, '/admin/goods/delete', 28, 26, '删除商品列表--操作', NULL, 1, '2019-06-07 21:02:07', '2019-06-07 21:10:53');
INSERT INTO `access` VALUES (63, '导航管理', '删除导航', 3, '/admin/nav/delete', 49, 16, '删除导航--操作', NULL, 1, '2019-06-07 21:02:39', '2019-06-08 05:35:33');
INSERT INTO `access` VALUES (64, '颜色管理', '编辑颜色', 3, '/admin/goodsColor/edit', 44, 4, '编辑颜色--操作', NULL, 1, '2019-06-07 21:06:23', '2019-06-07 21:06:40');
INSERT INTO `access` VALUES (65, '商品管理', '增加商品', 3, '/admin/goods/add', 28, 22, '增加商品--操作', NULL, 1, '2019-06-07 21:11:56', '2019-06-07 21:14:45');
INSERT INTO `access` VALUES (66, '商品管理', '增加商品--提交', 3, '/admin/goods/doAdd', 28, 23, '增加商品--提交-操作', NULL, 1, '2019-06-07 21:12:21', '2019-06-07 21:14:47');
INSERT INTO `access` VALUES (67, '商品管理', '编辑商品', 3, '/admin/goods/edit', 28, 24, '编辑商品--操作', NULL, 1, '2019-06-07 21:12:54', '2019-06-07 21:14:49');
INSERT INTO `access` VALUES (68, '商品管理', '编辑商品--提交', 3, '/admin/goods/doEdit', 28, 25, '编辑商品--提交-操作', NULL, 1, '2019-06-07 21:14:35', '2019-06-07 21:16:20');
INSERT INTO `access` VALUES (69, '文章管理', '', 1, '', 0, 8, '', NULL, 1, '2019-06-07 23:14:31', '2019-06-07 23:15:18');
INSERT INTO `access` VALUES (70, '文章管理', '文章分类', 2, '/admin/articleCate', 69, 1, '文章列表--菜单', NULL, 1, '2019-06-07 23:16:32', '2019-06-08 00:13:45');
INSERT INTO `access` VALUES (71, '文章管理', '增加分类', 3, '/admin/articleCate/add', 69, 2, '增加文章分类--菜单', NULL, 1, '2019-06-07 23:17:15', '2019-06-07 23:55:44');
INSERT INTO `access` VALUES (72, '文章管理', '增加文章分类--提交', 3, '/admin/articleCate/doAdd', 69, 3, '增加文章分类--提交-操作', NULL, 1, '2019-06-07 23:18:42', '2019-06-07 23:21:58');
INSERT INTO `access` VALUES (73, '文章管理', '编辑文章分类', 3, '/admin/articleCate/edit', 69, 4, '编辑文章分类--操作', NULL, 1, '2019-06-07 23:20:16', '2019-06-07 23:22:01');
INSERT INTO `access` VALUES (74, '文章管理', '编辑文章分类--提交', 3, '/admin/articleCate/doEdit', 69, 5, '编辑文章分类--提交-操作', NULL, 1, '2019-06-07 23:20:48', '2019-06-07 23:22:02');
INSERT INTO `access` VALUES (75, '文章管理', '删除文章分类', 3, '/admin/articleCate/delete', 69, 6, '删除文章分类--操作', NULL, 1, '2019-06-07 23:21:27', '2019-06-07 23:22:03');
INSERT INTO `access` VALUES (76, '文章管理', '文章列表', 2, '/admin/article', 69, 11, '文章列表--菜单', NULL, 1, '2019-06-08 00:22:43', '2019-06-08 00:22:43');
INSERT INTO `access` VALUES (77, '文章管理', '增加文章', 3, '/admin/article/add', 69, 12, '增加文章--菜单', NULL, 1, '2019-06-08 00:23:45', '2019-06-08 00:23:45');
INSERT INTO `access` VALUES (78, '文章管理', '增加文章--提交', 3, '/admin/article/doAdd', 69, 13, '增加文章--提交-操作', NULL, 1, '2019-06-08 00:23:45', '2019-06-08 00:23:45');
INSERT INTO `access` VALUES (79, '文章管理', '编辑文章', 3, '/admin/article/edit', 69, 14, '编辑文章--操作', NULL, 1, '2019-06-08 00:23:45', '2019-06-08 00:23:45');
INSERT INTO `access` VALUES (80, '文章管理', '编辑文章--提交', 3, '/admin/article/doEdit', 69, 15, '编辑文章--提交-操作', NULL, 1, '2019-06-08 00:23:45', '2019-06-08 00:23:45');
INSERT INTO `access` VALUES (81, '文章管理', '删除文章', 3, '/admin/article/delete', 69, 16, '删除文章--操作', NULL, 1, '2019-06-08 00:23:45', '2019-06-08 00:23:45');
INSERT INTO `access` VALUES (82, '系统设置', '商店设置', 2, '/admin/setting', 49, 100, '商店设置--菜单', NULL, 1, '2019-06-08 02:23:03', '2019-06-08 02:23:03');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
