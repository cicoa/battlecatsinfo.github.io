var fs,info1,info2,info3,star,char_groups,stage_name="";const M1=document.getElementById("M1"),M2=document.getElementById("M2"),M3=document.getElementById("M3"),st1=document.getElementById("st-1").children,st2=document.getElementById("st-2").children,st3=document.getElementById("st-3").children,st4=document.getElementById("st-4").children,stName=document.getElementById("st-name"),stName2=document.getElementById("st-name2"),stLines=document.getElementById("lines"),main_div=document.getElementById("main"),search_result=document.getElementById("search-result"),m_drops=document.getElementById("drops"),rewards=document.getElementById("rewards"),m_times=document.getElementById("times"),mM=document.getElementById("mM"),ex_stages=document.getElementById("ex-stages");var Buffer=BrowserFS.BFSRequire("buffer").Buffer;const materialDrops=[85,86,87,88,89,90,91,140,187,188,189,190,191,192,193,194],treasures=(BrowserFS.install(window),[300,300,300,300,300,300,300,300,300,300,300,30,10,30,30,30,30,30,30,30,100,600,1500,300,100,30,300,300,300,300,100]);for(let i=0;i<31;++i){const x=localStorage.getItem("t$"+i.toString());null!=x&&(treasures[i]=parseInt(x))}const event_types={3:[1e3,1001,1002,1003,1004,1250,1150,1151,1152,1073,1074,1075,1076,1077,1208,1269,1270,1271,1275,1276,1111,1112,1114,1184,1186,1192,1194,1197,1165,1166,1167,1168,1170,1171,1175,1140,1149,1154,1125,1160,1234,1235,1236,1237,24032,24033,24039,24040,24043,24044,24046,24047,24050,24051,24015,24016,24017,24018,24021,24022,24023,24024,24025,24026,24028,24029,24030,24031,7e3,7001,7002,7003,7004,7005,7006,7007,7008,16e3,33e3,2066,2208,2209,27007,1343,1309,1182,1069,1120,1190,1287,1289,24053,24054,2100,2185,2089,27013,1344,2026,27011,2128,27005,2211,2086,27004,1261,1262,1263,1264,24056,1321],4:[1027,1028,1059,1124,1155,1319,1308,1033,1034,1035,1070,1079,1146,24049,2080,2078,2127,2163,2085,1260,1359],5:[1097,1098,1099,1100,1101,1162,1222,1274,1118,1326,31e3,31001,31002,1315,1316,1317,1318],0:[1014,1016,1015,1043,1039,1066,1096,1122,1157,1189,1259,1095,1119,1117,1128,1158,1177,1215,1226,1246,1272,1217,1219,1220,1229,1231,1232,1273,1340,1017,1018,1019,1020,1021,1022,1023,1024,1025,1161,1277,1278,1279,1280,1011,1012,1013,1026,1029,1030,1031,1032,1036,1038,1009,1010,2006,1297,24042,1129,1164,1115,1174,1072,1325,2065,2205,2001,2002,2088,1348,2024,1281,2126,2007,2008,1320],1:[1169,1172,1176,1185,1187,1193,1195,1196,1198,1247,1199,1201,1203,1205,1207,1214,1243,1296,1338,1102,1103,1104,1105,1106,1107,1108,1109,1110,1130,1131,1132,1133,1134,1135,1136,1137,1138,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1143,1144,1153,2037,1337,2206,2207,1342,2043,2044,2025,2018,2046,2047,1350,1351,1352,1353,1354,1355,1356,1357,1358],"-1":[100,101,104,1255,1256,1257,1258,1265,1266,1312,1313,1314,1333,1334,1335,1339,1251,1252,1253,1305,1306,1307,11e3,11001,11002,11003,11004,11005,11006,11007,11008,11009,11011,11012,11013,11014,11015,11016,11017,11018,11019,11020,11021,11022,11023,11024,1345,1346,1347],6:[24055,24020,24027,24034,24035,24037,24038,24061],7:[1006,1007,1078,1173,1336,1349],2:[1209,2210],8:[24052,24019]},hidden_groups=[[25e3,25001,25003],[25007,25002,25004],[25008,25005,25006],[25009,25012,25015,25018,25021,25024,25027],[25010,25013,25016,25019,25022,25025,25028],[25011,25014,25017,25020,25023,25026,25029],[25063],[25064],[25065],[25030,25051,25052,25053],[25031,25054,25055,25056],[25032,25057,25058,25059],[25060],[25061],[25062],[25066]],mapConditions={10:{condition:[101017,-114024]},11:{condition:[101018,-114025]},12:{condition:[101019,-114026]},13:{condition:[101020,-114027]},14:{condition:[101021,-114028]},15:{condition:[101022,-114029]},16:{condition:[101023,-114030]},17:{condition:[101024,-114031]},18:{condition:[101025,-114032]},19:{name:"全狂亂貓關卡"},21:{name:"New Challenger全部關卡完成任意4關"},30:{condition:[101014,-114018]},31:{condition:[101015,-114019]},32:{condition:[101016,-114020]},33:{condition:[101039,-114021]},34:{condition:[101043,-114022]},35:{condition:[101066,-114023]},36:{condition:[101095,-114012]},37:{condition:[101117,-114013]},38:{condition:[101119,-114014]},39:{condition:[101128,-114015]},40:{condition:[101158,-114016]},41:{condition:[101177,-114017]},42:{condition:[101095,-201095]},43:{condition:[101117,-201117]},44:{condition:[101119,-201119]},45:{condition:[101128,-201128]},46:{condition:[101158,-201158]},47:{condition:[101177,-201177]},48:{condition:[101014,-201014]},49:{condition:[101015,-201015]},50:{condition:[101016,-201016]},51:{condition:[101039,-201039]},52:{condition:[101043,-201043]},53:{condition:[101066,-201066]},54:{condition:[101017,-201017]},55:{condition:[101018,-201018]},56:{condition:[101019,-201019]},57:{condition:[101020,-201020]},58:{condition:[101021,-201021]},59:{condition:[101022,-201022]},60:{condition:[101023,-201023]},61:{condition:[101024,-201024]},62:{condition:[101025,-201025]},63:{condition:[102065,102066,102205,102206]},64:{condition:[101095,-114012,101117,-114013]},65:{condition:[101119,-114014,101128,-114015]},66:{condition:[101158,-114016,101177,-114017]},67:{condition:[101257,101258,101266]},68:{condition:[101268]},69:{condition:[107e3],stage:39},70:{condition:[13e4],stage:29},71:{condition:[101128,-114015,101215,-114033]},72:{condition:[101119,-114014,101177,-114017]},73:{condition:[101095,-114012,101158,-114016]},74:{condition:[101215,-201215]},75:{condition:[101161,-201161]},76:{condition:[101096,-201096]},77:{condition:[101122,-201122]},78:{condition:[101189,-201189]},79:{condition:[101259,-201259]},80:{condition:[101226,-201226]},81:{condition:[101102,-201102]},82:{condition:[101103,-201103]},83:{condition:[101104,-201104]},84:{condition:[101105,-201105]},85:{condition:[101106,-201106]},86:{condition:[101107,-201107]},87:{condition:[101108,-201108]},88:{condition:[101109,-201109]},89:{condition:[101110,-201110]},90:{condition:[101157,-201157]},91:{condition:[101096,-114035]},92:{condition:[101122,-114036]},93:{condition:[101157,-114049]},94:{condition:[101189,-114037]},95:{condition:[101226,-114039]},96:{condition:[131e3],stage:3},97:{condition:[131001],stage:3},98:{condition:[131002],stage:3},99:{condition:[113047],stage:4},100:{condition:[131e3],stage:9},101:{condition:[131001],stage:9},102:{condition:[131002],stage:9},103:{condition:[101130,101131,101132,101133,101134,101135,101136,101137,101138]},104:{condition:[101259,-114038]},105:{condition:[131e3],stage:15},106:{condition:[131001],stage:15},107:{condition:[131002],stage:15},108:{condition:[131e3],stage:19},109:{condition:[131001],stage:19},1:{name:"世界篇第一章"},2:{name:"世界篇第二章"},3:{name:"世界篇第三章"},4:{name:"未來篇第一章"},5:{name:"未來篇第二章"},6:{name:"未來篇第三章"},7:{name:"宇宙篇第一章"},8:{name:"宇宙篇第二章"},9:{name:"宇宙篇第三章"}};function numStr(num){return(Math.round(100*(num+Number.EPSILON))/100).toString()}function loadStage(){return new Promise(resolve=>{var req=indexedDB.open("stage",4);req.onupgradeneeded=function(event){event=event.target.result;try{event.deleteObjectStore("data")}catch(e){}event.createObjectStore("data",{keyPath:"name"}).createIndex("data","",{unique:!1})},req.onsuccess=function(event){const db=event.target.result;db.transaction("data").objectStore("data").get("stages").onsuccess=function(event){event=event.target.result;if(event)return resolve(event.data);fetch("/stages.zip").then(res=>res.arrayBuffer()).then(buffer=>{var tx=db.transaction(["data"],"readwrite");tx.objectStore("data").put({name:"stages",data:buffer}),tx.oncomplete=function(){db.close()},resolve(buffer)})}}})}function main(){var url=new URL(location.href),stars=url.searchParams.get("star"),stars=((!stars||(star=parseInt(stars),isNaN(star))||star<=0||4<star)&&(star=1),url.searchParams.get("s"));if(stars){url=stars.split("-").map(x=>parseInt(x)).filter(x=>!isNaN(x));if(url.length)return M1.selectedIndex=url[0],M1.oninput(null,url),void(main_div.style.display="block")}M1.selectedIndex=0,M1.oninput(),main_div.style.display="block"}function getConditionHTML(obj){if(1e5<obj){var x=Math.abs(obj)%1e5;const m=~~(x/1e3),s=x%1e3;var x=JSON.parse(fs.readFileSync(`/stages/${m}/${s}/info`)),a=document.createElement("a");const div=document.createElement("div");return div.append("破完"),a.href=`/stage.html?v=${m}-`+s,a.textContent=x.name,a.onclick=function(event){return M1.value="/stages/"+m,M1.oninput(null,[null,s]),!1},div.appendChild(a),div}if(!(obj=mapConditions[obj]))return document.createTextNode("???");if(obj.hasOwnProperty("name"))return document.createTextNode(obj.name);if(obj.hasOwnProperty("stage")){const x=Math.abs(obj.condition)%1e5,m=~~(x/1e3),s=x%1e3,info=JSON.parse(fs.readFileSync(`/stages/${m}/${s}/info`)),a=document.createElement("a"),div=document.createElement("div"),st=(div.append("破完"),a.href=`/stage.html?${m}-`+s,obj.stage);return a.textContent=info.name+"第"+(st+1).toString()+"關",a.onclick=function(event){return M1.value="/stages/"+m,M1.oninput(null,[null,s,st]),!1},div.appendChild(a),div}const div=document.createElement("div");let i=0,last=0;for(const y of obj.condition){var ay=Math.abs(y);const x=ay%1e5,m=~~(x/1e3),s=x%1e3,info=JSON.parse(fs.readFileSync(`/stages/${m}/${s}/info`)),a=document.createElement("a");a.href=`/stage.html?v=${m}-`+s,a.textContent=info.name,a.onclick=function(event){return M1.value="/stages/"+m,M1.oninput(null,[null,s]),!1},i&&div.append(Math.sign(y)!=Math.sign(last)?"或":"及"),div.append(2e5<ay?"破完":"玩過"),div.appendChild(a),++i,last=y}return div}function merge(g1,g2){if(group=[g1[0],[...g1[1]]],0==g1[0]&&0==g2[0]){group[1]=[];for(var x of g1[1])g2[1].includes(x)&&group[1].push(x)}else if(0==g1[0]&&2==g2[0])group[1]=group[1].filter(x=>g2[1].contains(x));else if(2==g1[0]&&0==g2[0]){group[0]=0;for(let x of g2[1])group[1].includes(x)||group[1].push(x);group[1]=group[1].filter(x=>g1[1].contains(x))}else if(2==g1[0]&&2==g2[0])for(let x of g2[1])group[1].includes(x)||group[1].push(x);return group}function getRarityString(rare){var names=["基本","EX","稀有","激稀有","超激稀有","傳説稀有"],strs=[];let y=0;for(let i=1;i<64;i<<=1)rare&i&&strs.push(names[y]),++y;return strs.join("，")}loadStage().then(function(zipData){BrowserFS.configure({fs:"ZipFS",options:{zipData:Buffer.from(zipData)}},function(e){if(e)console.error(e);else{var x,event_names=["未分類","角色","進化權利","貓罐頭","道具","XP","進化素材","本能珠珠","貓咪券","活動券"];fs=BrowserFS.BFSRequire("fs");for(x of Object.entries(event_types)){var p=document.createElement("option");p.textContent=event_names[parseInt(x[0])+1],p.value=x[0],M1.appendChild(p)}char_groups=JSON.parse(fs.readFileSync("/stages/group","utf-8","r")),main()}})});class Limit{constructor(x){null!=x?(this.star=x[0],this.sid=x[1],this.rare=x[2],this.num=x[3],this.line=x[4],this.min=x[5],this.max=x[6],this.group=char_groups[x[7]]):(this.star=-1,this.sid=-1,this.rare=0,this.num=0,this.line=0,this.min=0,this.max=0)}combine(other){0==this.rare?this.rare=other.rare:0!=other.rare&&(this.rare&=other.rare),0<this.num*other.num?this.num=Math.min(this.num,other.num):this.num=Math.max(this.num,other.num),this.line|=other.line,this.min=Math.max(this.min,other.min),this.max=0<this.max&&0<other.max?Math.min(this.max,other.max):this.max+other.max,other.hasOwnProperty("group")&&(this.hasOwnProperty("group")?this.group=merge(this.group,other.group):this.group=other.group)}}function makeTd(p,txt){var td=document.createElement("td");td.textContent=txt,p.appendChild(td)}function t3str(x){var s=x.toString();switch(s.length){case 2:return"0"+s;case 1:return"00"+s}return s}function getDropData(){var x,res=[],sum=0,drops=info3.drop;for(x of drops)sum+=x[0];if(1e3==sum)for(let x of drops)res.push(numStr(x[0]/10));else{if(sum==drops.length&&-1!=sum||-3==info3.rand){var c=Math.floor(100/drops.length).toString();for(let x of drops)res.push(c);return res}if(100==sum)for(let x of drops)res.push(x[0].toString());else if(100<sum&&(0==info3.rand||1==info3.rand)){var rest=100;if(100==drops[0][0]){res.push("100");for(let i=1;i<drops.length;++i){var filter=rest*drops[i][0]/100;rest-=filter,res.push(numStr(filter))}}else for(let x of drops){const filter=rest*x[0]/100;rest-=filter,res.push(numStr(filter))}}else if(-4==info3.rand)for(let x of drops)res.push(numStr(100*x[0]/sum));else for(let x of drops)res.push(x[0].toString())}return res}function doSearch(t){const v=t.value.split(" ")[0];if(v){search_result.textContent="",main_div.style.display="none",search_result.style.display="block";var s1=fs.readdirSync("/stages");let num_results=0;for(let i=0;i<s1.length;++i){var m1=s1[i];if("group"!=m1){var i1=JSON.parse(fs.readFileSync(`/stages/${m1}/info`,"utf-8","r"));if((f(i1.name)||f(i1.jpname))&&(add([i],[i1]),20<++num_results))return;var s2=fs.readdirSync("/stages/"+m1);for(let j=0;j<s2.length;++j){var m2=s2[j];if("info"!=m2){var i2=JSON.parse(fs.readFileSync(`/stages/${m1}/${m2}/info`,"utf-8","r"));if((f(i2.name)||f(i2.jpname))&&(add([i,j],[i1,i2]),20<++num_results))return;var s3=fs.readdirSync(`/stages/${m1}/`+m2);for(let k=0;k<s3.length;++k){var m3=s3[k];if("info"!=m3){m3=JSON.parse(fs.readFileSync(`/stages/${m1}/${m2}/`+m3,"utf-8","r"));if((f(m3.name)||f(m3.jpname))&&(add([i,j,k],[i1,i2,m3]),20<++num_results))return}}}}}}function f(s){return s&&s.includes(v)}function add(ms,is){var a=document.createElement("a");for(let i=0;i<is.length;++i)is[i].name&&(is[i].name=is[i].name.replaceAll(v,match=>`<span>${match}</span>`)),is[i].jpname&&(is[i].jpname=is[i].jpname.replaceAll(v,match=>`<span>${match}</span>`));a.href="/stage.html?s="+ms.join("-"),a.onclick=function(){return M1.selectedIndex=ms[0],M1.oninput(null,ms),!1},a.innerHTML=is.map(x=>x.name?x.jpname?`${x.name}(${x.jpname})`:x.name:x.jpname).join(" • "),a.classList.add("res"),search_result.appendChild(a)}num_results||(search_result.textContent="沒有結果")}else search_result.style.display="none",main_div.style.display="block"}M1.oninput=function(event,sts){M2.textContent="",event_types[M1.selectedOptions[0].value].forEach(m1=>{var p=document.createElement("option"),mc=~~(m1/1e3),m1=m1%1e3;try{p.textContent=JSON.parse(fs.readFileSync(`/stages/${mc}/${m1}/info`)).name}catch(e){return}M2.appendChild(p)}),sts&&1<sts.length?M2.selectedIndex=sts[1]:M2.selectedIndex=0,M2.oninput(null,sts)},M2.oninput=function(event,sts){M3.textContent="";var m=event_types[M1.selectedOptions[0].value][M2.selectedIndex];const dir=`/stages/${~~(m/1e3)}/`+m%1e3;fs.readdirSync(dir).forEach(m1=>{var p;"info"!=m1&&(p=document.createElement("option"),m1=JSON.parse(fs.readFileSync(p.value=dir+"/"+m1,"utf-8","r")),p.textContent=[m1.name,m1.jpname].filter(x=>x).join("/"),M3.appendChild(p))}),sts&&2<sts.length?M3.selectedIndex=sts[2]:M3.selectedIndex=0,M3.oninput()},M3.oninput=function(){var x=event_types[M1.selectedOptions[0].value][M2.selectedIndex],mc=~~(x/1e3),x=x%1e3,url=(info1=JSON.parse(fs.readFileSync(`/stages/${mc}/info`)),info2=JSON.parse(fs.readFileSync(`/stages/${mc}/${x}/info`)),info3=JSON.parse(fs.readFileSync(M3.value)),new URL(location.href)),mc=(url.searchParams.set("s",[M1.selectedIndex,M2.selectedIndex,M3.selectedIndex].join("-")),star=info2.stars.length?Math.min(info2.stars.length,star):1,url.searchParams.set("star",star),history.pushState({},"",url),stName.textContent=stage_name=[info1.name,info2.name,info3.name].filter(x=>x).join(" • "),stName2.textContent=[info1.jpname,info2.jpname,info3.jpname].filter(x=>x).join(" • "),document.title=stage_name,document.getElementById("stars-tr")),x=(mc&&mc.parentNode.removeChild(mc),document.getElementById("warn-tr")),mc=(x&&x.parentNode.removeChild(x),document.getElementById("limit-bt"));mc&&mc.parentNode.removeChild(mc);let mult=info2.stars[star-1];if(mult=mult||100,info2.stars.length){var x=document.createElement("tr"),th=document.createElement("th");th.colSpan=6;for(let i=0;i<info2.stars.length;++i){const a=document.createElement("a");a.classList.add("star"),a.textContent=(i+1).toString()+"★: "+info2.stars[i].toString()+"%",url.searchParams.set("star",i+1),a.href=url.href,a.onclick=function(event){return star=i+1,M3.oninput(),!1},(star||i)&&star-1!=i||a.style.setProperty("color","#ffd53a","important"),th.appendChild(a)}x.appendChild(th),x.id="stars-tr",stName.parentNode.parentNode.appendChild(x)}if(info3.hasOwnProperty("nC")||info2.rM||info1.hasOwnProperty("gc")||info2.hasOwnProperty("gc")||info2.hasOwnProperty("wT")||info2.hasOwnProperty("hC")){const tr=document.createElement("tr"),th=document.createElement("th");if(tr.style.fontSize="larger",th.colSpan=6,info2.rM&&((mc=document.createElement("div")).textContent=["過關獎勵將會在再次出現時重置","清除狀況將會在再次出現時重置","可過關次數將會在再次出現時重置"][info2.rM-1],mc.style.setProperty("color","#3F51B5","important"),th.appendChild(mc)),info1.hasOwnProperty("gc")||info2.hasOwnProperty("gc")){const span=document.createElement("div");span.style.setProperty("color","#3F51B5","important"),span.textContent="掃蕩不可",th.appendChild(span)}if(info3.hasOwnProperty("nC")){const span=document.createElement("div");span.style.setProperty("color","#3F51B5","important"),span.textContent="接關不可",th.appendChild(span)}if(info2.hasOwnProperty("wT")){const span=document.createElement("div");span.style.setProperty("color","#3F51B5","important"),span.textContent="成功挑戰冷卻時長"+info2.wT.toString()+"分鐘",th.appendChild(span)}if(info2.hasOwnProperty("hC")){const span=document.createElement("div");span.style.setProperty("color","#3F51B5","important"),span.textContent="全破後隱藏",th.appendChild(span)}tr.appendChild(th),tr.id="warn-tr",stName.parentNode.parentNode.appendChild(tr)}if(rewards.textContent="",info3.drop.length&&3!=M1.selectedIndex){var chances=getDropData();for(let i=0;i<info3.drop.length;++i)if(parseInt(chances[i])){var v=info3.drop[i];const tr=document.createElement("tr");var td0=document.createElement("td"),td1=document.createElement("td"),td2=document.createElement("td"),rw=v[1];if(info3.ds){const a=document.createElement("a");a.href="/unit.html?id="+info3.ds[1],a.textContent=info3.ds[0],td0.appendChild(a)}else{let s=RWSTNAME[rw];s=s||RWNAME[rw]||"獎勵#"+rw.toString(),td0.textContent=s+(" ×"+v[2])}td1.appendChild(document.createTextNode(chances[i]+"%"+(0==i&&100!=info3.drop[i][0]&&-4!=info3.rand?" (寶雷)":""))),td2.textContent=0==i&&(1==info3.rand||1e3<=info3.drop[0][1]&&info3.drop[0][1]<3e4)?"一次":"無",tr.appendChild(td0),tr.appendChild(td1),tr.appendChild(td2),rewards.appendChild(tr)}}rewards.children.length?rewards.parentNode.style.display="table":rewards.parentNode.style.display="none",m_drops.textContent="";for(let i=1;i<info2.mD.length;++i)if(!(info2.mD[i]<=0)){const tr=document.createElement("tr"),td0=document.createElement("td"),td1=(td0.textContent=RWNAME[materialDrops[i-1]],tr.appendChild(td0),document.createElement("td"));td1.textContent=info2.mD[i]+"%",tr.appendChild(td1),m_drops.appendChild(tr)}if(m_drops.children.length?m_drops.parentNode.style.display="table":m_drops.parentNode.style.display="none",mM.textContent=`抽選次數: ${~~Math.round(info3.mM*info2.mP[star-1])}回`,info3.time.length){m_times.textContent="";for(var tm of info3.time){const tr=document.createElement("tr"),td0=document.createElement("td"),td1=document.createElement("td"),td2=document.createElement("td");var s="";const rw=tm[1];s=RWSTNAME[rw];s=s||RWNAME[rw],td0.textContent=s,td1.textContent=tm[2],td2.textContent=tm[0],tr.appendChild(td0),tr.appendChild(td1),tr.appendChild(td2),m_times.appendChild(tr)}m_times.parentNode.style.display="table"}else m_times.parentNode.style.display="none";st1[1].textContent="/stages/14"==M1.selectedOptions[0].value?"喵力達"+String.fromCharCode(65+info3.e/1e3)+"×"+(info3.e%1e3).toString():info3.e,st1[3].textContent=info3.max,st1[5].textContent=info3.len,info2.hasOwnProperty("mapcond")?(st4[1].textContent="",st4[1].appendChild(getConditionHTML(info2.mapcond))):st4[1].textContent="無限制",st2[1].textContent=info3.H;var x=document.createElement("a"),mc=t3str(info3.castle%1e3),cad=["rc","ec","wc","sc"][Math.floor(info3.castle/1e3)];x.href="/data/img/"+cad+"/"+cad+mc+".png",x.textContent=mc,st2[3].textContent="",st2[3].appendChild(x);const a=document.createElement("a");a.href="/data/img/bg/bg"+t3str(info3.bg)+".png",a.textContent=t3str(info3.bg),st2[5].textContent="",st2[5].appendChild(a),info2.hasOwnProperty("stagecond")?(st4[3].textContent="",st4[3].appendChild(getConditionHTML(info2.stagecond))):st4[3].textContent="無限制",info3.xp||3==M1.selectedIndex&&(info3.xp=1e3+300*Math.min(M3.selectedIndex,47));let totalXP=info3.xp*(.95+.05*treasures[19]+.005*treasures[9]+.0025*treasures[10]);[0,9,16].includes(M1.selectedIndex)&&(totalXP*=9),st3[1].textContent=~~totalXP;var line,cad=document.createElement("a"),mc=(cad.textContent=t3str(info3.m0),cad.href="/music.html?id="+info3.m0.toString(),document.createElement("a"));if(mc.textContent=t3str(info3.m1),mc.href="/music.html?id="+info3.m1.toString(),st3[3].textContent="",st3[3].appendChild(cad),st3[5].textContent="",st3[5].appendChild(mc),st4[5].textContent=info2.hasOwnProperty("userrank")?info2.userrank:"無限制",stLines.textContent="",info2.hasOwnProperty("Lim")){var x=info2.Lim.map(x=>new Limit(x)),theStar=star-1,lim=new Limit,cad=M3.selectedOptions[0].value,my_sid=parseInt(cad.slice(cad.lastIndexOf("/")+1));for(l of x)-1!=l.star&&l.star!=theStar||-1!=l.sid&&l.sid!=my_sid||lim.combine(l);mc=[];if(lim.rare&&mc.push("稀有度:"+getRarityString(lim.rare)),lim.num&&mc.push("最多可出戰角色數量:"+lim.num),lim.max&&lim.min?mc.push(`生產成本${lim.min}元與${lim.max}元之間`):lim.max?mc.push(`生產成本${lim.max}元以下`):lim.min&&mc.push(`生產成本${lim.min}元以上`),lim.line&&mc.push("出陣列表:僅限第1頁"),lim.group&&lim.group[1].length&&mc.push("可出擊角色的ID: "+lim.group[1].join("/")),mc.length){const tr=document.createElement("tr"),th=document.createElement("th");cad=document.createElement("div");cad.textContent="出擊限制："+mc.join("、"),cad.style.setProperty("color","#e97c47","important"),tr.style.fontSize="larger",th.colSpan=6,th.appendChild(cad),tr.appendChild(th),tr.id="limit-bt",stName.parentNode.parentNode.appendChild(tr)}}if(ex_stages.textContent="",0<info3.eC){x=document.createElement("div");x.textContent="EX關卡(出現機率 "+info3.eC+"%)",ex_stages.appendChild(x);for(let i=info3.eI;i<=info3.eA;++i){const td=document.createElement("div");var info=JSON.parse(fs.readFileSync("/stages/4/"+info3.eM.toString()+"/"+i.toString(),"utf-8","r"));const a=document.createElement("a");a.textContent=[info.name,info.jpname].join("/"),a.href="/stage.html?s=4-"+info3.eM.toString()+"-"+i.toString(),a.onclick=function(){return M1.value="/stages/4",M1.oninput(null,[null,i]),!1},td.appendChild(a),ex_stages.appendChild(td)}}else if(info3.hasOwnProperty("exS")){var mc=document.createElement("table"),tbody=(mc.classList.add("w3-table","w3-centered"),document.createElement("tbody"));const tr=document.createElement("tr"),td0=document.createElement("td"),td1=document.createElement("td");td0.textContent="EX關卡",td1.textContent="機率",tr.appendChild(td0),tr.appendChild(td1),tbody.appendChild(tr);for(let i=0;i<info3.exS.length;++i){const s=info3.exS[i],td0=document.createElement("td"),td1=document.createElement("td"),tr=document.createElement("tr"),a=document.createElement("a");var st=s%100,sm=~~(s%1e5/100);const mc=~~(s/1e5),sts=[mc,sm,st];a.textContent=JSON.parse(fs.readFileSync(`/stages/${mc}/${sm}/`+st)).name,a.onclick=function(event){return M1.value="/stages/"+sts[0],M1.oninput(null,sts),!1},a.href=`/stage.html?${mc}-${sm}-`+st,td0.appendChild(a),td1.textContent=numStr(info3.exC[i])+"%",tr.appendChild(td0),tr.appendChild(td1),tbody.appendChild(tr)}mc.appendChild(tbody),ex_stages.appendChild(mc)}else if(info3.hasOwnProperty("enc")){const table=document.createElement("table"),tbody=(table.classList.add("w3-table","w3-centered"),document.createElement("tbody")),tr=document.createElement("tr"),td0=document.createElement("td"),td1=document.createElement("td");td0.textContent="EX關卡",td1.textContent="機率",tr.appendChild(td0),tr.appendChild(td1),tbody.appendChild(tr);for(let i=0;i<info3.eni.length;++i){const td0=document.createElement("td"),td1=document.createElement("td"),tr=document.createElement("tr");td1.textContent=numStr(info3.enc[i])+"%",tr.appendChild(td0),tr.appendChild(td1);var groups=hidden_groups[info3.eni[i]];for(let j=0;j<groups.length;++j){const a=document.createElement("a"),mc=~~(groups[j]/1e3),sm=groups[j]%1e3,sts=(a.textContent=JSON.parse(fs.readFileSync(`/stages/${mc}/${sm}/info`)).name,a.href=`/stage.html?v=${mc}-`+sm,[mc,sm]);a.onclick=function(event){return M1.value="/stages/"+sts[0],M1.oninput(null,sts),!1},td0.appendChild(a),j!=groups.length-1&&td0.appendChild(document.createTextNode(" or "))}tbody.appendChild(tr)}table.appendChild(tbody),ex_stages.appendChild(table)}ex_stages.children.length?ex_stages.style.display="block":ex_stages.style.display="none";for(line of info3.l){const tr=document.createElement("tr");var enemy=line[0],img=(makeTd(tr,enemy_names[enemy]||"?"),new Image(85,32));const a=document.createElement("a");var atkM=numStr(line[13]||100),hpM=numStr(line[9]||100);a.href=`/enemy.html?id=${enemy}&mag=${hpM}&atkMag=${atkM}&stageMag=`+mult,s=t3str(enemy),img.src="https://battlecatsinfo.github.io/img/e/"+s+"/edi_"+s+".png";const td=document.createElement("td");a.appendChild(img),td.appendChild(a),tr.appendChild(td),makeTd(tr,hpM==atkM?hpM+"%":`HP:${hpM}%,ATK:${atkM}%`),makeTd(tr,line[1]||"無限"),makeTd(tr,line[5].toString()+"%"),line[3]>line[4]&&(enemy=line[3],line[3]=line[4],line[4]=enemy),Math.abs(line[2])>=Math.abs(line[10])?makeTd(tr,line[2]):makeTd(tr,line[2]+"~"+line[10]),makeTd(tr,1==line[1]?"-":line[3]==line[4]?line[3]:line[3]+"~"+line[4]),makeTd(tr,line[14]);img=line[8];if(2==img){const span=document.createElement("span");span.textContent="(BOSS,震波)",span.classList.add("boss"),tr.firstElementChild.appendChild(span)}else if(1==img){const span=document.createElement("span");span.textContent="(BOSS)",span.classList.add("boss"),tr.firstElementChild.appendChild(span)}stLines.appendChild(tr)}},document.getElementById("name-search").onchange=function(event){event.preventDefault(),event.stopPropagation(),setTimeout(doSearch,0,event.currentTarget)},window.onpopstate=main;