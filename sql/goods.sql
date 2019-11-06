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

 Date: 06/11/2019 21:39:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '商品标题',
  `sub_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '商品副标题',
  `goods_sn` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '商品的sn号',
  `cate_id` int(11) DEFAULT NULL COMMENT '商品的上一级',
  `click_count` int(11) NOT NULL DEFAULT '100' COMMENT '商品的点击数量',
  `goods_number` int(11) NOT NULL DEFAULT '1000' COMMENT '商品的库存量',
  `shop_price` varchar(20) NOT NULL DEFAULT '0' COMMENT '商品价格',
  `market_price` varchar(20) NOT NULL DEFAULT '0' COMMENT '市场价格',
  `relation_goods` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '与其他商品关联信息',
  `goods_attr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '与其他商品关联的附属信息',
  `goods_version` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '商品版本',
  `goods_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '商品图片地址',
  `goods_gift` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '关联赠品',
  `goods_fitting` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '关联配件',
  `goods_keywords` varchar(255) DEFAULT NULL,
  `goods_desc` varchar(255) DEFAULT NULL,
  `goods_color` varchar(255) DEFAULT NULL COMMENT '商品颜色关联',
  `goods_content` text,
  `sort` int(11) DEFAULT '100',
  `is_delete` tinyint(1) NOT NULL DEFAULT '1' COMMENT '默认都是1，存在状态， 如果为0则表示是删除',
  `is_hot` tinyint(1) DEFAULT '0' COMMENT '是否热销， 0否',
  `is_best` tinyint(1) DEFAULT '0' COMMENT '是否精品， 0否',
  `is_news` tinyint(1) DEFAULT '0' COMMENT '是否新品， 0否',
  `goods_type_id` int(11) DEFAULT NULL COMMENT '商品类型ID',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of goods
-- ----------------------------
BEGIN;
INSERT INTO `goods` VALUES (8, '小米9~', '4800万超广角三摄 6GB+128GB全息幻彩蓝 骁龙855 全网通4G 双卡双待 水滴全面屏拍照游戏智能手机', NULL, 1, 100, 1200, '1999', '3200', '18,19', 'more', '6G+128G', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/836530267269.35759f23a8fb8987d517.jpg', '小米手环', '蓝牙耳机', '手机', 'test', '[\"8\",\"9\",\"10\",\"11\"]', '<p><img data-fr-image-pasted=\"true\" usemap=\"#pcareaMap\" border=\"0\" alt=\"\" src=\"https://img13.360buyimg.com/cms/jfs/t28207/227/1658597638/176016/f8b8e685/5ce654eeN727f1864.jpg\" class=\"fr-fic fr-dii\"><map name=\"pcareaMap\"><area shape=\"rect\" coords=\"1,0,748,127\" href=\"https://pro.jd.com/mall/active/3QbJKmv2jEYiYHAmRDTtnPwBhD6U/index.html\" target=\"_blank\" alt=\"主会场\"><area shape=\"rect\" coords=\"3,130,248,218\" href=\"https://pro.jd.com/mall/active/28zsMgNqSmWnwsbYwKzm2mjeLpMq/index.html\" target=\"_blank\" alt=\"爆款热卖\"><area shape=\"rect\" coords=\"252,131,502,218\" href=\"https://pro.jd.com/mall/active/gyYuHwdMqfUX2dD25GU8FiPyBz8/index.html\" target=\"_blank\" alt=\"配件\"><area shape=\"rect\" coords=\"3,223,123,304\" href=\"https://shouji.jd.com/\" target=\"_blank\" alt=\"手机馆\"><area shape=\"rect\" coords=\"130,222,254,308\" href=\"https://pro.m.jd.com/mall/active/3c5pP9biLwTq9uhSPFu6MRPTqb2f/index.html\" target=\"_blank\" alt=\"KPL\"><area shape=\"rect\" coords=\"251,221,372,308\" href=\"https://phone.jd.com/\" target=\"_blank\" alt=\"手机好店\"><area shape=\"rect\" coords=\"375,221,503,313\" href=\"https://pro.jd.com/mall/active/3B5FdhVqfTCnSzjUn3Ky7hR5JxqP/index.html\" target=\"_blank\" alt=\"手机校园\"><area shape=\"rect\" coords=\"506,221,633,310\" href=\"https://pro.jd.com/mall/active/4J8KoHni8KUqeyER7PJRbLde2MGR/index.html\" target=\"_blank\" alt=\"手机靓号\"><area shape=\"rect\" coords=\"636,222,760,306\" href=\"https://sale.jd.com/act/WX2fhkEvletpdM.html\" target=\"_blank\" alt=\"有新机更有范\"><area shape=\"rect\" coords=\"506,130,748,219\" href=\"https://pro.jd.com/mall/active/4Tr1drMPME2uxotnuBnmdmDDyKMs/index.html\" target=\"_blank\" alt=\"心意好物\"></map></p><p><img data-fr-image-pasted=\"true\" border=\"0\" usemap=\"#Map22\" alt=\"\" src=\"https://img13.360buyimg.com/cms/jfs/t1/62005/27/543/186109/5cebe50fE231ad657/3f20d524a9bcc38d.jpg\" class=\"fr-fic fr-dii\"><map name=\"Map22\"><area shape=\"rect\" coords=\"12,289,246,680\" href=\"https://item.jd.com/7652091.html\" target=\"_blank\"><area shape=\"rect\" coords=\"259,290,495,677\" href=\"https://item.jd.com/7652029.html\" target=\"_blank\"><area shape=\"rect\" coords=\"505,289,743,679\" href=\"https://item.jd.com/7652093.html\" target=\"_blank\"></map></p><p><img data-fr-image-pasted=\"true\" border=\"0\" usemap=\"#Map14\" alt=\"\" src=\"https://img14.360buyimg.com/cms/jfs/t1/78557/6/502/239949/5cebbcdeE77c02713/5d7b6352b6b88d98.jpg\" class=\"fr-fic fr-dii\"><map name=\"Map14\"><area shape=\"rect\" coords=\"8,222,186,425\" href=\"https://item.jd.com/7652013.html\" target=\"_blank\"><area shape=\"rect\" coords=\"199,217,372,429\" href=\"https://item.jd.com/100000400010.html\" target=\"_blank\"><area shape=\"rect\" coords=\"381,216,560,426\" href=\"https://item.jd.com/7437710.html\" target=\"_blank\"><area shape=\"rect\" coords=\"566,215,744,427\" href=\"https://item.jd.com/100002677997.html\" target=\"_blank\"><area shape=\"rect\" coords=\"7,438,185,649\" href=\"https://item.jd.com/7437708.html\" target=\"_blank\"><area shape=\"rect\" coords=\"193,444,371,651\" href=\"https://item.jd.com/7437688.html\" target=\"_blank\"><area shape=\"rect\" coords=\"380,441,557,652\" href=\"https://item.jd.com/7120000.html\" target=\"_blank\"><area shape=\"rect\" coords=\"566,442,743,647\" href=\"https://item.jd.com/100000349372.html\" target=\"_blank\"><area shape=\"rect\" coords=\"7,661,186,877\" href=\"https://item.jd.com/7437786.html\" target=\"_blank\"><area shape=\"rect\" coords=\"192,669,371,878\" href=\"https://item.jd.com/7437564.html\" target=\"_blank\"><area shape=\"rect\" coords=\"379,667,557,880\" href=\"https://item.jd.com/100004771694.html\" target=\"_blank\"><area shape=\"rect\" coords=\"570,664,743,879\" href=\"https://item.jd.com/8264407.html\" target=\"_blank\"></map></p><p><img data-fr-image-pasted=\"true\" alt=\"\" src=\"https://img14.360buyimg.com/cms/jfs/t1/6613/4/7333/61736/5be2a65eE983f4e10/280e924d8319ee15.jpg\" class=\"fr-fic fr-dii\"></p><div data-id=\"M15542628954333\"><br></div>', NULL, 1, 1, 1, 1, 7, 1, '2019-06-05 00:09:57', '2019-06-10 01:20:45');
INSERT INTO `goods` VALUES (9, '小米9SE', '小米9透明板', NULL, 1, 100, 1000, '1999', '2100', '', '', '', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/739408013554.2511m8se-80.png', '', '', '', '', NULL, '', NULL, 1, 1, 1, 1, 7, 1, '2019-06-05 00:36:05', '2019-06-08 23:06:28');
INSERT INTO `goods` VALUES (10, '小米8 青春版', '小米8透明板', NULL, 1, 100, 1000, '1499', '1899', '', '', '', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/450559335628.3779lanse.jpg', '', '', '', '', NULL, '', NULL, 1, 1, 1, 1, 0, 1, '2019-06-05 00:45:40', '2019-06-08 23:06:41');
INSERT INTO `goods` VALUES (11, 'Redmi K20 Pro', 'NOTE第二品牌系列', NULL, 1, 100, 1000, '2499', '2599', '', 'more', 'v1.0', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/96011270808.9349red.jpg', '小米手环', '蓝牙耳机', '小米，note7', '口袋里的人像影棚，为人像照片加入一缕彩虹光的期许，亦或是窗边光的静谧，让平常的一瞬间，瞬间不平常。', '[\"1\",\"3\",\"4\"]', '<h3>四倍像素，更清晰</h3><p>像素越多，照片就越清晰。Redmi Note 7 Pro采用新一代 4800万像素索尼IMX586感光元件，对比主流1200万像素数提升4倍，4800万高像素模式，带给你分辨率极高的拍照体验。</p><h3>四合一 1.6&mu;m 高感光*<br>与小米9 相同的手持超级夜景算法*</h3><p>Redmi Note 7 Pro与小米9 采用相同的&ldquo;手持超级夜景&rdquo;算法：按一下快门，相机自动拍摄多个画面，并合成一张高质量照片。相机同时支持高感光模式，将 4 个像素合成一个 1.6&mu;m 大像素，输出一张 1200 万高质量夜景照片。1/2&rdquo;的大感光元件，在拍夜景时能捕获更多光线，拍出画面明亮少噪点的大作。<br>三项科技并用于一部手机，想拍下绝美夜景，不必使用三脚架，手持记录良辰夜色。</p>', NULL, 1, 1, 1, 1, 7, 1, '2019-06-05 23:38:00', '2019-06-08 17:49:42');
INSERT INTO `goods` VALUES (12, 'Redmi K20', '一面科技，一面艺术', NULL, 1, 100, 1000, '1499', '1899', '小米商场', 'more', 'v12', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/686494219952.6383hongse-1.jpg', '小米蓝牙耳机', '小米充电器', 'mix系列', '实际可用容量会由于诸多因素而减少并有所差异：由于操作系统运行占据了部分内存（RAM），实际可用空间小于标识内存容量；由于安装操作系统和预装的程序占据了部分闪存（ROM），实际可用存储空间小于标识闪存容量。', '[\"1\",\"2\"]', '<dl><dd>93.4% 超高屏占比</dd><dd>6.39&#39;&#39; 全面屏，正面只有屏幕</dd></dl><dl><dd>磁动力滑盖全面屏</dd><dd>全新交互，复杂操作一推即达</dd></dl><dl><dd>全新手持超级夜景</dd><dd>稳稳定格，绝美夜色</dd></dl><dl><dd>960 帧慢动作摄影</dd><dd>AI 智能配乐，捕捉至美一瞬</dd></dl><dl><dd>前置 24MP+2MP</dd><dd>超旗舰前置柔光双摄</dd></dl><dl><dd>后置 12MP+12MP</dd><dd>超旗舰 AI 超感光双摄</dd></dl><dl><dd>传承中华国宝艺术之美</dd><dd>小米MIX 3 故宫特别版</dd></dl><dl><dd>骁龙845 + 10GB</dd><dd>超旗舰性能</dd></dl><dl><dd>高效 10W 无线充电</dd><dd>随手机赠送无线充电器</dd></dl><dl><dd>小爱同学 独立 AI 键</dd><dd>支持 7 种地方语言</dd></dl>', NULL, 1, 1, 1, 1, 7, 1, '2019-06-05 23:57:07', '2019-06-08 17:30:49');
INSERT INTO `goods` VALUES (13, 'Redmi 红米7_hello', '续航小霸王', NULL, 1, 100, 1000, '699', '799', '1111100', '44444', 'v12', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/460790979541.6423hongse-1.jpg', '22222', '33333', '55555', '66666', '[\"2\",\"3\",\"4\"]', '<p>4000mAh 超长续航，18个月超长质保</p><dl><dd>400小时插卡待机*</dd><p><br></p><p>sdfa&nbsp;</p><dd>4000mAh大电量*</dd></dl><p>&nbsp;</p><dl><dd>品质承诺</dd><dd>18个月超长质保</dd></dl><dl><dd>性能提升40%*</dd><dd>骁龙632八核处理器</dd></dl><p>&nbsp;</p><dl><dd>多场景智能优化</dd><dd>1200万 AI双摄</dd></dl><dl><dd>优雅弧度，单手可握</dd><dd>炫彩渐变3D曲面机身</dd></dl><p>&nbsp;</p><dl><dd>19：9黄金比例</dd><dd>6.26&quot;水滴全面屏</dd></dl><dl><dd>手机就是遥控器</dd><dd>红外遥控</dd></dl><p>&nbsp;</p><dl><dd>金刚品质</dd><dd>康宁<sup>&reg;</sup>第五代大猩猩<sup>&reg;</sup>玻璃盖板</dd></dl><dl><dd>最高64GB可选</dd><dd>2 + 1卡槽，可扩展512GB</dd></dl><p>&nbsp;</p><dl><dd>纳米疏水涂层</dd><dd>整机 P2i 生活防泼溅</dd></dl>', NULL, 1, 1, 1, 1, 7, 1, '2019-06-06 00:15:33', '2019-06-08 22:02:23');
INSERT INTO `goods` VALUES (14, '小米MIX 3', '一面科技，一面艺术', NULL, 10, 100, 1000, '3500', '3800', '小米商场', 'more', 'v12', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/969816607810.1552index_section04_2.jpg', '小米蓝牙耳机', '小米充电器', 'mix系列', '实际可用容量会由于诸多因素而减少并有所差异：由于操作系统运行占据了部分内存（RAM），实际可用空间小于标识内存容量；由于安装操作系统和预装的程序占据了部分闪存（ROM），实际可用存储空间小于标识闪存容量。', '[\"1\",\"2\"]', '<dl><dd>93.4% 超高屏占比</dd><dd>6.39&#39;&#39; 全面屏，正面只有屏幕</dd></dl><dl><dd>磁动力滑盖全面屏</dd><dd>全新交互，复杂操作一推即达</dd></dl><dl><dd>全新手持超级夜景</dd><dd>稳稳定格，绝美夜色</dd></dl><dl><dd>960 帧慢动作摄影</dd><dd>AI 智能配乐，捕捉至美一瞬</dd></dl><dl><dd>前置 24MP+2MP</dd><dd>超旗舰前置柔光双摄</dd></dl><dl><dd>后置 12MP+12MP</dd><dd>超旗舰 AI 超感光双摄</dd></dl><dl><dd>传承中华国宝艺术之美</dd><dd>小米MIX 3 故宫特别版</dd></dl><dl><dd>骁龙845 + 10GB</dd><dd>超旗舰性能</dd></dl><dl><dd>高效 10W 无线充电</dd><dd>随手机赠送无线充电器</dd></dl><dl><dd>小爱同学 独立 AI 键</dd><dd>支持 7 种地方语言</dd></dl>', NULL, 1, 1, 1, 1, 7, 1, '2019-06-07 00:05:24', '2019-06-08 22:03:01');
INSERT INTO `goods` VALUES (15, '小米8 青春版', '潮流旗舰机', NULL, 11, 100, 1000, '1499', '1699', '', '', 'v1.0', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/153740328398.97757mi9se-320.png', '', '', '', '', NULL, '', 1000, 1, 1, 1, 1, 0, 1, '2019-06-08 23:03:47', '2019-06-08 23:03:47');
INSERT INTO `goods` VALUES (16, '15.6 Pro', '15.6 Pro i5 8G 1050MAX-Q 256G', NULL, 2, 100, 1000, '4199', '4499', '', '', '', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/812319124569.951580x80.png', '', '', '', '', NULL, '', 1000, 1, NULL, NULL, NULL, 0, 1, '2019-06-09 16:53:45', '2019-06-09 16:53:45');
INSERT INTO `goods` VALUES (17, '米家空调', '米家互联网立式空调C1', NULL, 4, 100, 1000, '1299', '1599', '', '', '', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/682938814288.6572lishikongtiao.png', '', '', '', '', NULL, '', 1000, 1, NULL, NULL, NULL, 0, 1, '2019-06-09 16:55:00', '2019-06-09 16:55:00');
INSERT INTO `goods` VALUES (18, '小米9pro', '小米9透明板', NULL, 1, 100, 1000, '2999', '3199', '', '', '8G+128G', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/168564399314.20853mi9-80.png', '', '', '', '', '[\"2\",\"8\"]', '', NULL, 1, 1, 1, 1, 0, 1, '2019-06-09 20:22:57', '2019-06-10 01:22:54');
INSERT INTO `goods` VALUES (19, '小米9SE', '800万超广角三摄 8G+256G', NULL, 1, 100, 1000, '3999', '3599', '', '', '8G+256G', 'http://egg-anker.oss-cn-hangzhou.aliyuncs.com/anker/523423084692.7679qingchun-320.png', '', '', '', '', '[\"4\",\"9\"]', '', NULL, 1, 1, 1, 1, 0, 1, '2019-06-09 20:23:42', '2019-06-10 01:23:14');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
