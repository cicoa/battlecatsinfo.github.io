var fs,info1,info2,info3,star,char_groups,stage_name="";const QQ="？？？",M1=document.getElementById("M1"),M2=document.getElementById("M2"),M3=document.getElementById("M3"),st1=document.getElementById("st-1").children,st2=document.getElementById("st-2").children,st3=document.getElementById("st-3").children,stName=document.getElementById("st-name"),stName2=document.getElementById("st-name2"),stLines=document.getElementById("lines"),main_div=document.getElementById("main"),search_result=document.getElementById("search-result"),m_drops=document.getElementById("drops"),rewards=document.getElementById("rewards"),m_times=document.getElementById("times"),mM=document.getElementById("mM"),ex_stages=document.getElementById("ex-stages"),stageL=parseInt(localStorage.getItem("stagel")||"0");var stageF="s"==localStorage.getItem("stagef")?new Intl.NumberFormat(void 0,{maximumFractionDigits:2}):null,Buffer=BrowserFS.BFSRequire("buffer").Buffer;const event_types={3:[1e3,1001,1002,1003,1004,1250,1150,1151,1152,1073,1074,1075,1076,1077,1208,1269,1270,1271,1275,1276,1111,1112,1114,1184,1186,1192,1194,1197,1165,1166,1167,1168,1170,1171,1175,1140,1149,1154,1125,1160,1234,1235,1236,1237,24032,24033,24039,24040,24043,24044,24046,24047,24050,24051,24015,24016,24017,24018,24021,24022,24023,24024,24025,24026,24028,24029,24030,24031,7e3,7001,7002,7003,7004,7005,7006,7007,7008,16e3,33e3,2066,2208,2209,27007,1343,1309,1182,1069,1120,1190,1287,1289,24053,24054,2100,2185,2089,27013,1344,2026,27011,2169,27e3,2128,27005,2211,2086,27004,1261,1262,1263,1264,24056,1321,1361,1362,24058,1365,1366,24063,7009,24045,1290,1291,1292,27015],4:[1027,1028,1059,1124,1155,1319,1308,1033,1034,1035,1070,1079,1146,24049,2080,2078,2127,2163,2085,1260,1359,1360],5:[1097,1098,1099,1100,1101,1162,1222,1274,1118,1326,31e3,31001,31002,1315,1316,1317,1318,1364,1367],0:[1014,1016,1015,1043,1039,1066,1096,1122,1157,1189,1259,1095,1119,1117,1128,1158,1177,1215,1226,1246,1272,1217,1219,1220,1229,1231,1232,1273,1340,1017,1018,1019,1020,1021,1022,1023,1024,1025,1161,1277,1278,1279,1280,1011,1012,1013,1026,1029,1030,1031,1032,1036,1038,1009,1010,2006,1297,24042,1129,1164,1115,1174,1072,1325,2065,2205,2001,2002,2088,1348,2024,1281,2166,2168,2170,2126,2007,2008,1320,2021,2022],1:[1169,1172,1176,1185,1187,1193,1195,1196,1198,1247,1199,1201,1203,1205,1207,1214,1243,1296,1338,1102,1103,1104,1105,1106,1107,1108,1109,1110,1130,1131,1132,1133,1134,1135,1136,1137,1138,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1143,1144,1153,2037,1337,2206,2207,1342,2043,2044,2025,2167,2204,2018,2046,2047,1350,1351,1352,1353,1354,1355,1356,1357,1358],6:[24055,24020,24027,24034,24035,24037,24038,24061],7:[1006,1007,1078,1173,1336,1349],"-1":[1255,1256,1257,1258,1265,1266,1312,1313,1314,1333,1334,1335,1339,1251,1252,1253,1305,1306,1307,11e3,11001,11002,11003,11004,11005,11006,11007,11008,11009,11011,11012,11013,11014,11015,11016,11017,11018,11019,11020,11021,11022,11023,11024,1345,1346,1347,11025],2:[1209,2210,1363,1288],8:[24052,24019,24062,24041]},mapConditions={10:{condition:[101017,-114024]},11:{condition:[101018,-114025]},12:{condition:[101019,-114026]},13:{condition:[101020,-114027]},14:{condition:[101021,-114028]},15:{condition:[101022,-114029]},16:{condition:[101023,-114030]},17:{condition:[101024,-114031]},18:{condition:[101025,-114032]},19:"通過狂亂貓咪降臨關卡(共9種)",21:"通過New Challenger4個",30:{condition:[101014,-114018]},31:{condition:[101015,-114019]},32:{condition:[101016,-114020]},33:{condition:[101039,-114021]},34:{condition:[101043,-114022]},35:{condition:[101066,-114023]},36:{condition:[101095,-114012]},37:{condition:[101117,-114013]},38:{condition:[101119,-114014]},39:{condition:[101128,-114015]},40:{condition:[101158,-114016]},41:{condition:[101177,-114017]},42:{condition:[101095,-201095]},43:{condition:[101117,-201117]},44:{condition:[101119,-201119]},45:{condition:[101128,-201128]},46:{condition:[101158,-201158]},47:{condition:[101177,-201177]},48:{condition:[101014,-201014]},49:{condition:[101015,-201015]},50:{condition:[101016,-201016]},51:{condition:[101039,-201039]},52:{condition:[101043,-201043]},53:{condition:[101066,-201066]},54:{condition:[101017,-201017]},55:{condition:[101018,-201018]},56:{condition:[101019,-201019]},57:{condition:[101020,-201020]},58:{condition:[101021,-201021]},59:{condition:[101022,-201022]},60:{condition:[101023,-201023]},61:{condition:[101024,-201024]},62:{condition:[101025,-201025]},63:"通過第4、第6、第9、第10使徒關卡",64:"通過”斷罪天使海蝶降臨”和”地獄門”",65:"通過”女帝飛來”和”亡者肥普降臨”",66:"通過”吉娃娃伯爵降臨”和”春宵苦短，少女做夢吧！”",67:{condition:[101257,101258,101266]},68:"通過時空的彎曲・解放的貓咪們2關卡",69:{condition:[107e3],stage:39},70:'通過魔界篇的"魔界火山"',71:"通過”藍色衝擊”和”亡者肥普降臨”",72:"通過”女帝飛來”和”春宵苦短，少女做夢吧！”",73:"通過”斷罪天使海蝶降臨”和”吉娃娃伯爵降臨”",74:{condition:[101215,-201215]},75:{condition:[101161,-201161]},76:{condition:[101096,-201096]},77:{condition:[101122,-201122]},78:{condition:[101189,-201189]},79:{condition:[101259,-201259]},80:{condition:[101226,-201226]},81:{condition:[101102,-201102]},82:{condition:[101103,-201103]},83:{condition:[101104,-201104]},84:{condition:[101105,-201105]},85:{condition:[101106,-201106]},86:{condition:[101107,-201107]},87:{condition:[101108,-201108]},88:{condition:[101109,-201109]},89:{condition:[101110,-201110]},90:{condition:[101157,-201157]},91:{condition:[101096,-114035]},92:{condition:[101122,-114036]},93:{condition:[101157,-114049]},94:{condition:[101189,-114037]},95:{condition:[101226,-114039]},96:{condition:[131e3],stage:3},97:{condition:[131001],stage:3},98:{condition:[131002],stage:3},99:{condition:[113047],stage:4},100:{condition:[131e3],stage:9},101:{condition:[131001],stage:9},102:{condition:[131002],stage:9},103:{condition:[101130,101131,101132,101133,101134,101135,101136,101137,101138]},104:{condition:[101259,-114038]},105:{condition:[131e3],stage:15},106:{condition:[131001],stage:15},107:{condition:[131002],stage:15},108:"通過”甲普拉密林”的所有關卡",109:"通過”亞蜥比沙漠”的所有關卡",110:"",0:"通過前一個關卡",1:"通過世界篇第1章",2:"通過世界篇第2章",3:"通過世界篇第3章",4:"通過未來篇第1章",5:"通過未來篇第2章",6:"通過未來篇第3章",7:"通過宇宙篇第1章",8:"通過宇宙篇第2章",9:"通過宇宙篇第3章",20:"通過所有的傳奇故事",25:"需要先達到等級排行1600以上",26:"通過3月・4月・5月活動3地圖",27:"通過6月・7月・8月活動3地圖",28:"通過9月・10月・11月活動3地圖",29:"通過12月・1月・2月活動3地圖",1e5:'通過"傳說的開始"全關卡',100001:'通過"熱情的國家"全關卡',100002:'通過"葡萄糖胺沙漠 "全關卡',100003:'通過"貓咪們渡海"全關卡',100004:'通過"凝視著貓眼石"全關卡',100005:'通過"西方街道"全關卡',100006:'通過"鮪魚海域"全關卡',100007:'通過"竹子島"全關卡',100008:'通過"黏糊糊的鐘乳洞"全關卡',100009:'通過"瓦魯肯諾火山"全關卡',100010:'通過"千里之道"全關卡',100011:'通過"鹹魚要塞"全關卡',100012:'通過"軍艦島"全關卡',100013:'通過"貓咪磨爪的走廊"全關卡',100014:'通過"帕德嫩神殿"全關卡',100015:'通過"退潮的海水浴場"全關卡',100016:'通過"惡魔島"全關卡',100017:'通過"越獄隧道"全關卡',100018:'通過"卡彭監獄"全關卡',100019:'通過"絲綢之路"全關卡',100020:'通過"通向黑暗的地下道"全關卡',100021:'通過"魔王的豪宅"全關卡',100022:'通過"終焉宣告之夜"全關卡',100023:'通過"大混戰"全關卡',100024:'通過"戰爭的傷痕"全關卡',100025:'通過"污染海洋的壞人"全關卡',100026:'通過"連接心身的東西"全關卡',100027:'通過"脆弱性和弱酸性"全關卡',100028:'通過"被引導的貓咪們"全關卡',100029:'通過"黑暗的國際城市"全關卡',100030:'通過"加拉・巴・哥"全關卡',100031:'通過"岩海苔半島"全關卡',100032:'通過"惡羅斯聯邦"全關卡',100033:'通過"亡者聚集之地"全關卡',100034:'通過"孤島大瘟疫"全關卡',100035:'通過"迪死你樂園"全關卡',100036:'通過"豪來塢帝國"全關卡',100037:'通過"小跟班海岸"全關卡',100038:'通過"雲泥溫泉鄉"全關卡',100039:'通過"濃濃春色島"全關卡',100040:'通過"IT地下墓穴"全關卡',100041:'通過"怪展會之畫"全關卡',100042:'通過"22區"全關卡',100043:'通過"超越大草原"全關卡',100044:'通過"暴風雪車道"全關卡',100045:'通過"奇點村"全關卡',100046:'通過"最終大陸"全關卡',100047:'通過"傳說的終點"全關卡',100048:'通過"古代研究所"全關卡',101009:"通過勞動感謝特別活動！",101010:"通過聖誕節居然來了！",101011:"通過新年快樂？",101012:"通過被召喚的福！",101013:"通過人偶架上的戰士們",101014:"通過紅色突變關卡",101026:"通過春天來了!高校教師",101029:"通過相思病戀歌",101030:"通過禁斷之妻",101031:"通過因為夏天喵！",101032:"通過返鄉熱潮！",101036:"通過在鎮上看到的超強老人",101038:"通過秋天運動會！",101196:"通過所有的絕・斷罪天使海蝶降臨關卡",101199:"通過絕・地獄門全關卡",101201:"通過絕・女帝飛來",101205:"通過絕・亡者肥普降臨",101207:"通過絕・吉娃娃伯爵降臨",101214:'通過"絕・春宵苦短，少女做夢吧！"全關卡',102035:"通過魔女之夜",113e3:"通過真・傳說的開始",101184:"通過新年快樂了？全關卡",101186:"通過再次被召喚的福！全關卡",101192:"通過人偶架上的戰士們特別版全關卡",101194:"通過新・春天來了!高校教師全關卡",101197:"通過再一次的相思病戀歌全關卡",101165:"通過續・禁斷之妻全關卡",101166:"通過因為超級夏天喵！全關卡",101167:"通過收假熱潮！全關卡",101168:"通過在鎮上看到的超強老人2全關卡",101170:"通過夜間運動會！全關卡",101171:"通過工作方式大革命全關卡",101175:"通過宇宙中聖誕節居然也來了！全關卡",101262:"通過熱血！兩人三腳賽 低學年",101263:"通過熱血！兩人三腳賽 中學年",101290:"通過後輩送的本命巧克力",101291:"通過前輩送的本命巧克力",999999:"目前的版本只能挑戰到這裡喵。等待下次的更新吧！",101312:"通過密林的異變",101313:"通過沙漠的怪事",101314:"通過火山的威脅",101315:"通過蟲蟲王者相撲 預賽",101316:"通過蟲蟲王者相撲 半準決賽",101317:"通過蟲蟲王者相撲 準決賽",101303:"通過Season4～畢業之日～",101300:"通過Weekend～告白～",101301:"通過Weekend～告白～",101302:"通過Weekend～告白～",101333:"通過密林的異變Ⅱ",101334:"通過沙漠的怪事Ⅱ",101335:"通過火山的威脅Ⅱ",101345:"通過密林的異變Ⅲ",101346:"通過沙漠的怪事Ⅲ",101347:"通過火山的威脅Ⅲ"},materialDrops=[85,86,87,88,89,90,91,140,187,188,189,190,191,192,193,194],treasures=(BrowserFS.install(window),[300,300,300,300,300,300,300,300,300,300,300,30,10,30,30,30,30,30,30,30,100,600,1500,300,100,30,300,300,300,300,100]);for(let e=0;e<31;++e){const b=localStorage.getItem("t$"+e.toString());null!=b&&(treasures[e]=parseInt(b))}function N(e){return e.name||e.jpname||QQ}function TI(e){return stageF?stageF.format(e):e}function createReward(e,t){var n=document.createElement("td"),o=document.createElement("td"),a=new Image(128,128);if(a.style.maxWidth="2.7em",a.style.height="auto",o.appendChild(a),3!=t.length){var i=t[4],r=t3str(i),r=(t[3].endsWith("的權利")?a.src=`/img/u/${r}/s/uni${r}_s00.png`:a.src=`/img/u/${r}/f/uni${r}_f00.png`,document.createElement("a"));r.href="/unit.html?id="+i,r.textContent=t[3],r.style.verticalAlign="center",n.appendChild(r)}else{let e=t[1];i=document.createElement("span");i.style.verticalAlign="center",i.textContent=RWNAME[e]+(" ×"+t[2]),e<=13&&11<=e&&(e+=9),a.src=`/img/r/gatyaitemD_${duo(e)}_f.png`,n.appendChild(i)}e.appendChild(n),e.appendChild(o)}function duo(e){return e<10?"0"+e.toString():e.toString()}const hidden_groups=[[25e3,25001,25003],[25007,25002,25004],[25008,25005,25006],[25009,25012,25015,25018,25021,25024,25027],[25010,25013,25016,25019,25022,25025,25028],[25011,25014,25017,25020,25023,25026,25029],[25063],[25064],[25065],[25030,25051,25052,25053],[25031,25054,25055,25056],[25032,25057,25058,25059],[25060],[25061],[25062],[25066]];function numStr(e){return(Math.round(100*(e+Number.EPSILON))/100).toString()}function loadStage(){return new Promise(o=>{var e=indexedDB.open("stage",18);e.onupgradeneeded=function(e){e=e.target.result;try{e.deleteObjectStore("data")}catch(e){}e.createObjectStore("data",{keyPath:"name"}).createIndex("data","",{unique:!1})},e.onsuccess=function(e){const n=e.target.result;n.transaction("data").objectStore("data").get("stages").onsuccess=function(e){e=e.target.result;if(e)return o(e.data);fetch("/stages.zip").then(e=>e.arrayBuffer()).then(e=>{var t=n.transaction(["data"],"readwrite");t.objectStore("data").put({name:"stages",data:e}),t.oncomplete=function(){n.close()},o(e)})}}})}function main(){var e=new URL(location.href),t=e.searchParams.get("star"),t=((!t||(star=parseInt(t),isNaN(star))||star<=0||4<star)&&(star=1),e.searchParams.get("s"));if(t){e=t.split("-").map(e=>parseInt(e)).filter(e=>!isNaN(e));if(e.length)return M1.selectedIndex=e[0],M1.oninput(null,e),void(main_div.style.display="block")}M1.selectedIndex=0,M1.oninput(),main_div.style.display="block"}function getConditionHTML(e){if(1e5<e){var t=Math.abs(e)%1e5,n=~~(t/1e3),t=t%1e3,o=JSON.parse(fs.readFileSync(`/stages/${n}/${t}/info`)),a=document.createElement("a");const i=document.createElement("div");return i.append("通過"),a.href=`/stage.html?v=${n}-`+t,a.textContent=N(o),i.appendChild(a),i}if(!(e=mapConditions[e]))return document.createTextNode(QQ);if("string"==typeof e)return document.createTextNode(e);if(e.hasOwnProperty("stage")){n=Math.abs(e.condition)%1e5,t=~~(n/1e3),o=n%1e3,a=JSON.parse(fs.readFileSync(`/stages/${t}/${o}/info`)),n=document.createElement("a");const i=document.createElement("div");i.append("通過"),n.href=`/stage.html?${t}-`+o;t=e.stage;return n.textContent=N(a)+"第"+(t+1).toString()+"關",i.appendChild(n),i}const i=document.createElement("div");let r=0,d=0;for(const u of e.condition){var s=Math.abs(u),c=s%1e5,l=~~(c/1e3),c=c%1e3,m=JSON.parse(fs.readFileSync(`/stages/${l}/${c}/info`)),p=document.createElement("a");p.href=`/stage.html?v=${l}-`+c,p.textContent=N(m),r&&i.append(Math.sign(u)!=Math.sign(d)?"或":"及"),i.append(2e5<s?"通過":"玩過"),i.appendChild(p),++r,d=u}return i}function merge(t,n){if(group=[t[0],[...t[1]]],0==t[0]&&0==n[0]){group[1]=[];for(var e of t[1])n[1].includes(e)&&group[1].push(e)}else if(0==t[0]&&2==n[0])group[1]=group[1].filter(e=>n[1].contains(e));else if(2==t[0]&&0==n[0]){group[0]=0;for(var o of n[1])group[1].includes(o)||group[1].push(o);group[1]=group[1].filter(e=>t[1].contains(e))}else if(2==t[0]&&2==n[0])for(var a of n[1])group[1].includes(a)||group[1].push(a);return group}function getRarityString(t){var n=["基本","EX","稀有","激稀有","超激稀有","傳説稀有"],o=[];let a=0;for(let e=1;e<64;e<<=1)t&e&&o.push(n[a]),++a;return o.join("，")}loadStage().then(function(e){BrowserFS.configure({fs:"ZipFS",options:{zipData:Buffer.from(e)}},function(e){if(e)console.error(e);else{var t,n=["未分類","角色","進化權利","貓罐頭","道具","XP","進化素材","本能珠珠","貓咪券","活動券"];fs=BrowserFS.BFSRequire("fs");for(t of Object.entries(event_types)){var o=document.createElement("option");o.textContent=n[parseInt(t[0])+1],o.value=t[0],M1.appendChild(o)}char_groups=JSON.parse(fs.readFileSync("/stages/group")),main(),(e=document.getElementById("prev")).onclick=function(){M3.selectedIndex?(--M3.selectedIndex,M3.oninput()):M2.selectedIndex?(--M2.selectedIndex,M2.oninput()):alert("沒有上一關了！")},e.nextElementSibling.onclick=function(){M3.selectedIndex+2<=M3.options.length?(M3.selectedIndex+=1,M3.oninput()):M2.selectedIndex+2<=M2.options.length?(M2.selectedIndex+=1,M2.oninput()):alert("沒有下一關了！")}}})});class Limit{constructor(e){null!=e?(this.star=e[0],this.sid=e[1],this.rare=e[2],this.num=e[3],this.line=e[4],this.min=e[5],this.max=e[6],this.group=char_groups[e[7]]):(this.star=-1,this.sid=-1,this.rare=0,this.num=0,this.line=0,this.min=0,this.max=0)}combine(e){0==this.rare?this.rare=e.rare:0!=e.rare&&(this.rare&=e.rare),0<this.num*e.num?this.num=Math.min(this.num,e.num):this.num=Math.max(this.num,e.num),this.line|=e.line,this.min=Math.max(this.min,e.min),this.max=0<this.max&&0<e.max?Math.min(this.max,e.max):this.max+e.max,e.hasOwnProperty("group")&&(this.hasOwnProperty("group")?this.group=merge(this.group,e.group):this.group=e.group)}}function makeTd(e,t){var n=document.createElement("td");n.textContent=t,e.appendChild(n)}function t3str(e){var t=e.toString();switch(t.length){case 2:return"0"+t;case 1:return"00"+t}return t}function getDropData(){var e,t=[],n=0,o=info3.drop;for(e of o)n+=e[0];if(1e3==n)for(var a of o)t.push(numStr(a[0]/10));else if(n==o.length&&1!=n||-3==info3.rand){var i,r=Math.floor(100/o.length).toString();for(i of o)t.push(r)}else if(100==n)for(var d of o)t.push(d[0].toString());else if(100<n&&(0==info3.rand||1==info3.rand)){var s=100;if(100==o[0][0]){t.push("100");for(let e=1;e<o.length;++e){var c=s*o[e][0]/100;s-=c,t.push(numStr(c))}}else for(var l of o){l=s*l[0]/100;s-=l,t.push(numStr(l))}}else if(-4==info3.rand)for(var m of o)t.push(numStr(100*m[0]/n));else for(var p of o)t.push(p[0].toString());return t}function doSearch(e){const o=e.value.split(" ")[0];if(o){search_result.textContent="",main_div.style.display="none",search_result.style.display="block";let e=0;var t,n,a;for(const d of fs.readdirSync("/stages"))if("group"!=d){t=JSON.parse(fs.readFileSync(`/stages/${d}/info`));for(const s of fs.readdirSync("/stages/"+d))if("info"!=s){if((i((n=JSON.parse(fs.readFileSync(`/stages/${d}/${s}/info`))).name)||i(n.jpname))&&(r(d+"-"+s,[t,n]),20<++e))return;for(const c of fs.readdirSync(`/stages/${d}/`+s))if("info"!=c&&(i((a=JSON.parse(fs.readFileSync(`/stages/${d}/${s}/`+c))).name)||i(a.jpname))&&(r(`${d}-${s}-`+c,[t,n,a]),20<++e))return}}function i(e){return e&&e.includes(o)}function r(e,t){var n=document.createElement("a");for(let e=0;e<t.length;++e)t[e].name&&(t[e].name=t[e].name.replaceAll(o,e=>`<span>${e}</span>`)),t[e].jpname&&(t[e].jpname=t[e].jpname.replaceAll(o,e=>`<span>${e}</span>`));n.href="/stage.html?v="+e,n.innerHTML=t.map(e=>e.name?e.jpname?`${e.name}(${e.jpname})`:e.name:e.jpname).join(" - "),n.classList.add("res"),search_result.appendChild(n)}e||(search_result.textContent="沒有結果")}else search_result.style.display="none",main_div.style.display="block"}M1.oninput=function(e,t){M2.textContent="",event_types[M1.selectedOptions[0].value].forEach(e=>{var t=document.createElement("option"),n=~~(e/1e3),e=e%1e3;try{var o=JSON.parse(fs.readFileSync(`/stages/${n}/${e}/info`));t.textContent=stageL?1==stageL?o.jpname||QQ:[o.name,o.jpname].filter(e=>e).join("/"):N(o)}catch(e){return}M2.appendChild(t)}),t&&1<t.length?M2.selectedIndex=t[1]:M2.selectedIndex=0,M2.oninput(null,t)},M2.oninput=function(e,t){M3.textContent="";var n=event_types[M1.selectedOptions[0].value][M2.selectedIndex];const o=`/stages/${~~(n/1e3)}/`+n%1e3;fs.readdirSync(o).forEach(e=>{var t;"info"!=e&&(t=document.createElement("option"),e=JSON.parse(fs.readFileSync(t.value=o+"/"+e)),t.textContent=stageL?1==stageL?e.jpname||QQ:[e.name,e.jpname].filter(e=>e).join("/"):N(e),M3.appendChild(t))}),t&&2<t.length?M3.selectedIndex=t[2]:M3.selectedIndex=0,M3.oninput()},M3.oninput=function(){var t,n,o,a,i,e=event_types[M1.selectedOptions[0].value][M2.selectedIndex],r=~~(e/1e3),e=e%1e3,d=(info1=JSON.parse(fs.readFileSync(`/stages/${r}/info`)),info2=JSON.parse(fs.readFileSync(`/stages/${r}/${e}/info`)),info3=JSON.parse(fs.readFileSync(M3.value)),new URL(location.href)),r=(d.searchParams.set("s",[M1.selectedIndex,M2.selectedIndex,M3.selectedIndex].join("-")),star=info2.stars.length?Math.min(info2.stars.length,star):1,d.searchParams.set("star",star),history.pushState({},"",d),stName.textContent=stage_name=[info1.name||QQ,info2.name||QQ,info3.name||QQ].join(" - "),stName2.textContent=[info1.jpname||QQ,info2.jpname||QQ,info3.jpname||QQ].join(" - "),document.title=stage_name,document.getElementById("stars-tr")),e=(r&&r.parentNode.removeChild(r),document.getElementById("warn-tr")),r=(e&&e.parentNode.removeChild(e),document.getElementById("limit-bt"));r&&r.parentNode.removeChild(r);let s=info2.stars[star-1];if(s=s||100,info2.stars.length){var e=document.createElement("tr"),c=document.createElement("th");c.colSpan=6;for(let t=0;t<info2.stars.length;++t){const v=document.createElement("a");v.classList.add("star"),v.textContent=(t+1).toString()+"★: "+info2.stars[t].toString()+"%",d.searchParams.set("star",t+1),v.href=d.href,v.onclick=function(e){return star=t+1,M3.oninput(),!1},(star||t)&&star-1!=t||v.classList.add("W"),c.appendChild(v)}e.appendChild(c),e.id="stars-tr",stName.parentNode.parentNode.appendChild(e)}if((info3.hasOwnProperty("nC")||info2.rM||info1.hasOwnProperty("gc")||info2.hasOwnProperty("gc")||info2.hasOwnProperty("wT")||info2.hasOwnProperty("hC"))&&(r=document.createElement("tr"),e=document.createElement("th"),r.style.fontSize="larger",e.colSpan=6,info2.rM&&((S=document.createElement("div")).textContent=["過關獎勵將會在再次出現時重置","清除狀況將會在再次出現時重置","可過關次數將會在再次出現時重置"][info2.rM-1],S.classList.add("I"),e.appendChild(S)),info2.hasOwnProperty("wT")&&((S=document.createElement("div")).classList.add("W"),S.textContent="成功挑戰冷卻時長："+info2.wT.toString()+"分鐘",e.appendChild(S)),info2.hasOwnProperty("hC")&&((S=document.createElement("div")).classList.add("I"),S.textContent="全破後隱藏",e.appendChild(S)),(info1.hasOwnProperty("gc")||info2.hasOwnProperty("gc"))&&((S=document.createElement("div")).classList.add("W"),S.textContent="※掃蕩不可※",e.appendChild(S)),info3.hasOwnProperty("nC")&&((S=document.createElement("div")).classList.add("w"),S.textContent="※接關不可※",e.appendChild(S)),r.appendChild(e),r.id="warn-tr",stName.parentNode.parentNode.appendChild(r)),rewards.textContent="",info3.drop.length){var m,p,u,f,h=getDropData();for(let e=0;e<info3.drop.length;++e)parseInt(h[e])&&(m=info3.drop[e],p=document.createElement("tr"),u=document.createElement("td"),f=document.createElement("td"),u.appendChild(document.createTextNode(h[e]+"%"+(0==e&&100!=m[0]&&-4!=info3.rand?" (寶雷)":""))),f.textContent=0==e&&(1==info3.rand||1e3<=info3.drop[0][1]&&info3.drop[0][1]<3e4)?"一次":"無",createReward(p,m),p.appendChild(u),p.appendChild(f),rewards.appendChild(p))}rewards.children.length?rewards.parentNode.style.display="table":rewards.parentNode.style.display="none",m_drops.textContent="";for(let e=1;e<info2.mD.length;++e)info2.mD[e]<=0||(t=new Image(128,128),i=materialDrops[e-1],t.style.maxWidth="2.7em",t.style.height="auto",t.src=`/img/r/gatyaitemD_${duo(i)}_f.png`,n=document.createElement("td"),o=document.createElement("tr"),(a=document.createElement("td")).textContent=RWNAME[i],o.appendChild(a),n.appendChild(t),o.appendChild(n),(i=document.createElement("td")).textContent=info2.mD[e]+"%",o.appendChild(i),m_drops.appendChild(o));if(m_drops.children.length?m_drops.parentNode.style.display="table":m_drops.parentNode.style.display="none",mM.textContent=`抽選次數: ${~~Math.round(info3.mM*info2.mP[star-1])}回`,info3.time){m_times.textContent="";for(var g of info3.time){var C=document.createElement("tr"),x=document.createElement("td"),y=document.createElement("td");x.textContent=g[2],y.textContent=g[0],createReward(C,g),C.appendChild(x),C.appendChild(y),m_times.appendChild(C)}m_times.parentNode.style.display="table"}else m_times.parentNode.style.display="none";st1[1].textContent="/stages/14"==M1.selectedOptions[0].value?"喵力達"+String.fromCharCode(65+info3.e/1e3)+"×"+(info3.e%1e3).toString():info3.e,st1[3].textContent=info3.max,st1[5].textContent=info3.len,info2.hasOwnProperty("mapcond")?(st3[3].textContent="",st3[3].appendChild(getConditionHTML(info2.mapcond))):st3[3].textContent="無限制",st2[1].textContent=info3.H;var E,S=document.createElement("a"),e=t3str(info3.castle%1e3),r=["rc","ec","wc","sc"][Math.floor(info3.castle/1e3)];S.href="/img/"+r+"/"+r+e+".png",S.textContent=e,st2[3].textContent="",st2[3].appendChild(S);const v=document.createElement("a");if(v.href="/img/bg/bg"+t3str(info3.bg)+".png",v.textContent=t3str(info3.bg),st2[5].textContent="",st2[5].appendChild(v),info2.hasOwnProperty("stagecond")?(st3[5].textContent="",st3[5].appendChild(getConditionHTML(info2.stagecond))):st3[5].textContent="無限制",st3[1].textContent=~~(info3.xp*(.95+.05*treasures[19]+.005*treasures[9]+.0025*treasures[10])),stLines.textContent="",info2.hasOwnProperty("Lim")){var r=info2.Lim.map(e=>new Limit(e)),Q=star-1,M=new Limit,e=M3.selectedOptions[0].value,D=parseInt(e.slice(e.lastIndexOf("/")+1));for(l of r)-1!=l.star&&l.star!=Q||-1!=l.sid&&l.sid!=D||M.combine(l);S=[];M.rare&&S.push("稀有度:"+getRarityString(M.rare)),M.num&&S.push("最多可出戰角色數量:"+M.num),M.max&&M.min?S.push(`生產成本${M.min}元與${M.max}元之間`):M.max?S.push(`生產成本${M.max}元以下`):M.min&&S.push(`生產成本${M.min}元以上`),M.line&&S.push("出陣列表:僅限第1頁"),M.group&&M.group[1].length&&S.push("可出擊角色的ID: "+M.group[1].join("/")),S.length&&(e=document.createElement("tr"),r=document.createElement("th"),(I=document.createElement("div")).textContent="※出擊限制※："+S.join("、"),I.classList.add("W"),e.style.fontSize="larger",r.colSpan=6,r.appendChild(I),e.appendChild(r),e.id="limit-bt",stName.parentNode.parentNode.appendChild(e))}if(ex_stages.textContent="",0<info3.eC){S=document.createElement("div");S.textContent="EX關卡(出現機率 "+info3.eC+"%)",ex_stages.appendChild(S);for(let e=info3.eI;e<=info3.eA;++e){var J=document.createElement("div"),W=JSON.parse(fs.readFileSync("/stages/4/"+info3.eM.toString()+"/"+e.toString()));const v=document.createElement("a");v.textContent=N(W),v.href="/stage.html?s=4-"+info3.eM.toString()+"-"+e.toString(),J.appendChild(v),ex_stages.appendChild(J)}}else if(info3.hasOwnProperty("exS")){var I=document.createElement("table"),w=(I.classList.add("w3-table","w3-centered"),document.createElement("tbody")),r=document.createElement("tr"),e=document.createElement("td"),S=document.createElement("td");e.textContent="EX關卡",S.textContent="機率",r.appendChild(e),r.appendChild(S),w.appendChild(r);for(let e=0;e<info3.exS.length;++e){const k=info3.exS[e];var R=document.createElement("td"),A=document.createElement("td"),_=document.createElement("tr");const v=document.createElement("a");var H=k%100,X=~~(k%1e5/100),z=~~(k/1e5),q=JSON.parse(fs.readFileSync(`/stages/${z}/${X}/`+H));v.textContent=N(q),v.href=`/stage.html?v=${z}-${X}-`+H,R.appendChild(v),A.textContent=numStr(info3.exC[e])+"%",_.appendChild(R),_.appendChild(A),w.appendChild(_)}I.appendChild(w),ex_stages.appendChild(I)}else if(info3.hasOwnProperty("enc")){var e=document.createElement("table"),$=(e.classList.add("w3-table","w3-centered"),document.createElement("tbody")),S=document.createElement("tr"),r=document.createElement("td"),I=document.createElement("td");r.textContent="EX關卡",I.textContent="機率",S.appendChild(r),S.appendChild(I),$.appendChild(S);for(let e=0;e<info3.eni.length;++e){var O=document.createElement("td"),U=document.createElement("td"),b=document.createElement("tr"),B=(U.textContent=numStr(info3.enc[e])+"%",b.appendChild(O),b.appendChild(U),hidden_groups[info3.eni[e]]);for(let e=0;e<B.length;++e){const v=document.createElement("a");var K=~~(B[e]/1e3),Z=B[e]%1e3,G=JSON.parse(fs.readFileSync(`/stages/${K}/${Z}/info`));v.textContent=N(G);v.href=`/stage.html?v=${K}-`+Z,O.appendChild(v),e!=B.length-1&&O.appendChild(document.createTextNode(" or "))}$.appendChild(b)}e.appendChild($),ex_stages.appendChild(e)}ex_stages.children.length?ex_stages.style.display="block":ex_stages.style.display="none";for(E of info3.l){var L=document.createElement("tr"),T=E[0],j=(makeTd(L,enemy_names[T]||"?"),new Image(64,64));const v=document.createElement("a");var P=E[13]||100,F=E[9]||100,T=(v.href=`/enemy.html?id=${T}&mag=${F}&atkMag=${P}&stageMag=`+s,k=t3str(T),j.src="/img/e/"+k+"/enemy_icon_"+k+".png",document.createElement("td")),k=(T.style.padding="0px",v.appendChild(j),T.appendChild(v),L.appendChild(T),s/100),T=(makeTd(L,(F=Math.ceil(F*k).toString()+"%")==(P=Math.ceil(P*k).toString()+"%")?F:`HP:${F},ATK:`+P),makeTd(L,E[1]||"無限"),makeTd(L,100<E[5]?E[5]:E[5].toString()+"%"),E[3]>E[4]&&(j=E[3],E[3]=E[4],E[4]=j),Math.abs(E[2])>=Math.abs(E[10])?makeTd(L,TI(E[2])):makeTd(L,TI(E[2])+TI(E[10])),makeTd(L,1==E[1]?"-":E[3]==E[4]?TI(E[3]):TI(E[3])+TI(E[4])),makeTd(L,E[14]),E[8]);2==T?((k=document.createElement("span")).textContent="(BOSS,震波)",k.classList.add("boss"),L.firstElementChild.appendChild(k)):1==T&&((F=document.createElement("span")).textContent="(BOSS)",F.classList.add("boss"),L.firstElementChild.appendChild(F)),stLines.appendChild(L)}},document.getElementById("form").onsubmit=function(e){return e.preventDefault(),setTimeout(doSearch,0,e.currentTarget.firstElementChild),!1},window.onpopstate=()=>setTimeout(main,0);