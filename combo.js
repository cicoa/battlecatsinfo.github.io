const combos=[["貓咪軍團",4,0,[0,0,1,0,2,0,3,0,4,0],1],["進化！貓咪軍團",6,0,[13,0,12,0],1],["下班後的樂趣",10,0,[51,1,6,1],1],["彈簧魔力",3,0,[19,0,148,0],1],["大鯨捕獲祭",0,1,[18,0,21,0,20,0,61,0],1],["DeathRock",4,0,[6,2,199,1],1],["小魔女",7,0,[56,1,5,0],1],["命中靶心",0,0,[13,1,2,0,72,1],1],["叩叩鏘ー",10,0,[14,1,39,0],1],["貓島少年",17,0,[1,0,169,1],1],["早安套餐",0,0,[16,0,131,0],1],["貓咪占心館",2,0,[17,1,158,0],1],["I LOVE JAPAN",4,0,[123,1,15,0],1],["家電一族",19,0,[72,1,127,0],1],["日光浴",7,0,[269,0,209,0],1],["飛上青天",2,0,[4,0,145,1],1],["王子殿下❤",3,1,[226,0,126,1],1],["四支槍",9,0,[37,0,88,0],1],["妖怪退散！",18,0,[30,0,9,1],1],["弄斧達人",15,0,[56,1,109,0],1],["橘子與蘋果",14,0,[150,1,18,1],1],["鐵・脖・功",3,1,[59,0,132,0],1],["偶像志願",16,0,[9,0,41,1],1],["重機快感",11,0,[19,0,11,0],1],["智慧型罪犯",15,0,[127,1,38,1],1],["眼帶們",5,0,[74,0,244,0],1],["站在高崗上",12,0,[153,1,9,0],1],["爆頭一哥",18,1,[3,0,168,1],1],["內在美小姐",10,0,[128,1,32,1],1],["錢乃身外之物",13,0,[237,1],1],["超級巨星團",17,0,[239,1],1],["盛開的季節",4,0,[238,1],1],["北風與太陽",2,1,[209,0,210,0,211,0,245,0,246,0],4],["我愛紋面",6,0,[197,1,5,1],4],["美女組",17,0,[3,1,94,1],4],["月亮與太陽",16,0,[148,1,60,1],4],["英雄們",1,0,[51,1,6,1,97,1],4],["黑暗英雄",9,0,[6,0,97,0,74,0],4],["西遊記",1,1,[60,0,88,0,78,0,126,0,154,0],4],["牛仔哥",17,0,[0,2,98,1],4],["最終頭目",15,0,[5,1,96,1],4],["定期維修",18,0,[78,1,81,1],4],["超進化！貓咪軍團",21,0,[3,2,9,2],4],["２人彈跳樂",5,1,[123,1,88,1],4],["超完美比例",5,0,[52,1,126,1],4],["戰國死敵",4,0,[7,2,42,1],4],["科學怪象",2,1,[18,0,261,0],4],["美腿怪魔",21,0,[130,0,194,0],4],["美術教室",4,0,[16,0,148,0],4],["超大鯨捕獲祭",20,0,[7,0,98,0,203,1],4],["魚之天國",1,0,[106,0,21,2],4],["暴風一家",19,0,[0,0,107,1],4],["進擊的狂亂貓",14,0,[4,2,109,1],4],["龐克頭愛好家",2,0,[136,0,14,0],4],["未確認飛行物體",19,0,[128,0,73,0],4],["機械友誼",19,0,[42,0,127,1],4],["小鮮肉",7,0,[78,0,138,1],4],["風神雷神",11,0,[52,1,19,2],4],["健身俱樂部",18,1,[85,0,20,2],4],["槍擊戰",12,0,[196,0,9,0],4],["４人彈跳樂",7,0,[63,0,81,0,80,2],4],["操偶職人",6,0,[63,0,70,1,136,0],4],["舞扇達人",3,0,[13,0,122,1],4],["國王與皇后",17,1,[130,0,13,1,80,0],4],["古代勇者",5,2,[91,0,92,0,93,0,94,0,95,0],5],["超級靈魂勇者",20,1,[2,2,13,2],5],["傳說的不明貓一族",19,1,[3,0,94,0,176,1],5],["大皇帝",4,0,[70,0,122,1],5],["超激烈爆彈",14,1,[100,0,104,0,109,0],5],["初代・武神巴薩拉斯",17,0,[32,1,80,1],5],["四人約會",16,0,[72,1,79,0],5],["懶鬼一族",5,1,[74,1,61,0],5],["幽魂來也",12,1,[44,0,80,0],5],["進化！進擊的狂亂貓",18,0,[126,1,152,1],5],["黑暗的力量",1,0,[100,1,36,1],5],["敲噁Derrrrr",9,0,[80,1,49,1],5],["貓咪有限公司",2,0,[17,0,104,0],5],["戀愛季節",4,1,[4,1,169,1],5],["美好入浴時光",1,0,[22,1,32,0,10,2],5],["暴露狂",17,1,[143,0,79,1],5],["賞花祭",16,1,[19,0,128,0,33,1],5],["日式定食",20,0,[201,1,31,0,100,0],5],["恐怖電影",19,0,[138,0,24,0],5],["以鬼之名",18,0,[212,0,88,0],5],["傳統藝能",18,0,[15,2,172,0],6],["運動系女子",19,0,[10,0,132,0],6],["紳士風範",1,0,[109,1,7,2,4,2],6],["風車",10,1,[100,0,150,0],6],["長頸族",5,1,[4,0,95,0,148,0],6],["舞力全開",9,0,[17,2,154,1],6],["請小心服藥",7,1,[15,2,20,2,176,0],6],["驚愕的不明貓一族",21,0,[240,1,7,2],6],["懷舊古玩",3,1,[130,0,172,0,268,0],6],["GJ",0,1,[8,0,99,0,100,0,34,1],6],["必殺13號",0,0,[2,0,130,0,44,0],6],["大土豪貓駕到",16,0,[80,1,257,0],6],["大地之王",1,1,[152,0,81,0,123,0,104,0,88,1],6],["烤蘋果",15,0,[75,0,267,0],6],["兔與龜",17,0,[267,0,23,0],6],["運送者與黑暗商人",12,0,[260,0,35,0],6],["人型師協會會員",11,1,[5,0,96,0,18,2,260,1],6],["究極降臨",18,0,[212,0,79,2],6],["愛之箭",5,1,[4,2,130,0,226,0],6],["冥界之力",11,0,[23,0,159,1],6],["貓咪支援隊",15,0,[152,0,81,0],10001],["角色扮演者",14,0,[33,0,79,0],10001],["最愛棒棒糖",19,0,[128,0,70,1],10001],["刺刺刺",9,0,[23,2,51,1],10002],["師徒同台",6,1,[5,2,8,1,55,0],10002],["三王齊聚",19,0,[3,1,227,1],10002],["兒童餐",4,1,[38,0,128,0,80,0],10003],["純情少女",6,0,[79,0,10,1],10003],["甩頭小隊",10,0,[7,0,46,0],10003],["金銀銅",12,0,[147,0,127,0,81,1],1],["五心級服務",5,0,[0,0,129,0],1],["絕對領域",7,1,[104,0,86,0],1],["多子多孫",14,0,[2,1,177,0],1],["街頭藝貓",20,0,[5,2,83,0],4],["食用",14,0,[195,0,260,1],6],["甜點",6,0,[11,1,268,0],6],["兜襠布祭典",4,0,[268,0,24,0],6],["鋼盔部隊",15,0,[71,2,25,2,95,2],6],["喵卜力工作室",7,0,[11,0,87,0],1],["百鬼夜行",16,0,[81,1,43,0],1],["湘南海岸",2,0,[78,0,135,1],1],["酒瘋青年",15,0,[76,0,19,2],4],["貓咪軍團",17,0,[8,2,171,1],4],["下班後的樂趣",12,0,[134,1,6,2],4],["大鯨捕獲祭",6,0,[130,0,258,0],5],["DeathRock",3,1,[125,0,97,2],6],["I LOVE JAPAN",7,1,[70,1,57,0],1],["日光浴",9,0,[18,0,134,0],1],["飛上青天",6,0,[100,0,259,0],1],["弄斧達人",14,0,[130,0,105,0],4],["橘子與蘋果",17,0,[135,0,18,2],4],["鐵・脖・功",10,1,[271,0,74,1],4],["偶像志願",3,1,[24,2,84,0],5],["重機快感",12,0,[212,1,268,0],6],["內在美小姐",3,1,[282,0,137,0],1],["盛開的季節",1,1,[8,0,10,0,9,2,170,1],4],["小貓的友情",6,1,[124,1,267,0,88,0],5],["牛仔哥",9,1,[272,0,260,0],6],["人型師協會會員",22,3,[299,0,300,0],1],["２人彈跳樂",12,1,[303,0,283,0],1],["慈愛的臂膀",9,0,[70,0,284,0],6],["墜入愛河",1,0,[201,1,287,0,38,1],6],["青蛙王子",5,0,[308,0,127,0],1],["祖孫情",20,0,[304,0,79,1],1],["敬業女演員",15,0,[305,1,6,0,311,0],1],["惡貓古堡",17,0,[306,0,17,0],1],["盛夏炎陽",18,0,[201,1,307,0],4],["馴鹿的禮物",3,0,[284,0,149,2],4],["銀幕大明星",7,0,[273,1,153,0],5],["長腿大叔",9,0,[319,0,0,0],1],["宴會部長",4,0,[316,0,109,1],1],["GJ",2,0,[286,0,260,1],5],["必殺13號",0,0,[325,0,21,0,10,0,100,2],5],["大土豪貓駕到",2,0,[152,0,324,0],6],["小小貓大進擊",6,1,[323,0,125,0],6],["科學怪象",12,0,[342,0],1],["美腿怪魔",23,3,[402,0,405,0],1],["美術教室",24,1,[16,0,418,0],1],["超大鯨捕獲祭",12,0,[359,0,176,0],1],["魚之天國",18,0,[360,0,343,0],1],["暴風一家",16,0,[361,0,267,0],4],["龐克頭愛好家",2,0,[401,0,260,0],5],["不明飛行物體",7,1,[351,0,123,0],1],["機械友誼",19,0,[417,0,329,0],1],["小鮮肉",11,1,[431,0,21,1],1],["４人彈跳樂",1,0,[397,1,273,1],5],["操偶職人",14,0,[338,0,81,0],1],["國王與皇后",10,1,[436,0,176,1],1],["THE・忍者",20,0,[427,0,63,0],1],["青春期妄想症",15,1,[336,1,23,0,15,0],4],["二重唱",21,1,[357,1,70,2],4],["小心火燭",0,0,[322,1,17,1,14,1],1],["豬肉蓋飯",11,2,[334,0,128,0,282,0],1],["在貓咪前才有的笑容",9,1,[358,0,21,0],1],["獅子王",14,0,[396,0,312,1],1],["桃子與香蕉",7,1,[439,0,17,0,14,1],1],["本能寺的怨念",0,0,[355,1,5,1,247,1],1],["熱天也涼爽",16,2,[335,0,6,0,311,0,74,1],1],["阿波羅",12,0,[505,0,210,0],1],["活骷髏",0,0,[502,0,74,0,104,0],1],["騎士道與西點道",11,2,[519,0,172,0,319,0],6],["午間連續劇共演",18,1,[496,0,268,0,16,0],6],["貓咪與坦克貓",7,0,[542,0],1],["頭巾部隊",5,0,[558,0],1],["舞鞭者",5,1,[238,2],1],["假面舞蹈會",24,0,[397,2],1],["狂亂貓大進擊",14,0,[287,2,376,2],6],["黑暗的力量",2,0,[528,1,452,2],6],["敲噁Derrrrr",18,0,[55,0,12,0],1],["貓咪有限公司",18,0,[153,0,15,0],1],["戀愛季節",17,0,[146,0,303,0],1],["暴露狂",15,0,[40,0,14,2],4],["賞花祭",20,0,[443,1,312,1],1],["日式定食",17,0,[444,1,313,1],1],["以鬼之名",0,0,[445,1,211,1],1],["傳統藝能",24,0,[446,1,311,1],1],["女運動員",16,0,[447,1,245,1],1],["紳士風範",11,0,[209,1,46,1],1],["風車",1,0,[210,1,149,1],1],["長頸族",14,0,[211,1,47,1],1],["舞力全開",17,0,[245,1,38,1],1],["請小心服藥",2,0,[246,1,49,1],1],["恐怖電影",19,0,[247,1,308,1],1],["貓咪學園",4,1,[624,0],1],["槍術對決",2,1,[626,0,627,0,628,0],1],["心如兔躍",18,0,[311,1,495,1],1],["最愛棒棒糖",0,0,[312,1,37,1],1],["師徒同台",1,0,[313,1,41,1],1],["三王齊聚",1,0,[617,0,12,0],1],["純情少女",7,2,[525,1,78,2,2,1],6],["甩頭小隊",14,0,[534,1,13,1],1],["街頭藝貓",1,0,[569,0,324,0],4],["甜點",4,1,[594,0,658,2],1],["刺刺刺",15,0,[607,0,14,2],4],["化敵為友",0,1,[632,2,96,2],6],["拳拳拳拳",7,0,[619,2],1],["狂戰士集團",12,2,[618,2,323,2,99,2],6],["給變態紳士來個天譴",14,0,[642,2,669,2],6],["二人組",16,1,[631,2,442,2],6],["雙重颱風",18,2,[617,2,93,2,8,2,247,2],6],["風的惡作劇",1,1,[620,2,663,2,319,2],6],["IT系",11,0,[633,2],6],["空中偵察部隊",15,0,[634,2],6],["逮捕令",4,1,[625,2,621,2],6],["貓咪馬戲團",1,0,[721,0],1]];