var E,I,dst_g,mult=document.getElementById("mult"),mult_atk=document.getElementById("mult-atk"),st_mag=document.getElementById("st-mag"),my_params=new URLSearchParams(location.search),my_id=parseInt(my_params.get("id")),stats=document.getElementById("stats"),chs=stats.children,specials=chs[3].children[1],my_mult=my_params.get("mult")||my_params.get("mag"),atk_mag=my_params.get("atkMag"),stageMag=my_params.get("stageMag"),enemy_content=document.getElementById("ctn"),set=new Set;function hClick(event){event.preventDefault(),event.stopPropagation(),this.s?(this.style.removeProperty("background-color"),this.s=!1,set.delete(this.i)):(this.style.setProperty("background-color","#5cabd273","important"),this.s=!0,set.add(this.i)),calc()}function T(s,icon){var p=document.createElement("div"),U=(p.style.cursor="pointer",new Image(40,40));U.src="https://i.imgur.com/"+icon+".png",p.appendChild(U),p.append(s),p.i=I,p.s=!1,p.onclick=hClick,specials.appendChild(p)}function W(s,icon){var p=document.createElement("div"),i=document.createElement("img");i.src="https://i.imgur.com/"+icon+".png",p.appendChild(i),p.append(s),specials.appendChild(p)}function createAbIcons(){createImuIcons(E.imu,specials);let d,U=E.pre1?"*":"";E.trait&TB_SAGE&&W("超賢者：將我方的打飛距離縮短 50%，其他妨害減少 70%","ksiqGZE");for([I,d]of Object.entries(E.ab))switch(I=parseInt(I)){case AB_KB:W(d[0]+" % 打飛敵人"+U,"cLZsanQ");break;case AB_STOP:W(`${d[0]} % 使動作停止${U}持續 ${numStrT(d[1])}，控場覆蓋率 ${getCoverUnit(E,d[0],d[1])} %`,"i1pP3Mi");break;case AB_SLOW:W(`${d[0]} % 使動作變慢${U}持續 ${numStrT(d[1])}，控場覆蓋率 ${getCoverUnit(E,d[0],d[1])} %`,"MyoCUMu");break;case AB_CRIT:T(d+" % 會心一擊"+U,"FV6We1L");break;case AB_ATKBASE:T("善於攻城（對塔傷害 4 倍）","xIcbDzl");break;case AB_WAVE:T(`${d[0]} % 發射 Lv. ${d[1]} 波動`+U,"ZbPqGoj");break;case AB_MINIWAVE:T(`${d[0]} % 發射 Lv. ${d[1]} 小波動`+U,"W18c1hw");break;case AB_WEAK:W(`${d[0]} % 降低攻擊力${U}至 ${d[2]} % 持續 ${numStrT(d[1])}，控場覆蓋率 ${getCoverUnit(E,d[0],d[1])} %`,"yRkhAHL");break;case AB_STRONG:T(`血量 ${d[0]} % 以下攻擊力增加至 ${100+d[1]} %`,"dlZ8xNU");break;case AB_LETHAL:W(`死後 ${d} % 以1血量復活`,"WcMDxXS");break;case AB_WAVES:W("波動滅止","BH3LOrK");break;case AB_BURROW:W(`進入射程範圍時鑽地 ${numStr(d[1])} 距離（${-1==d[0]?"無限":d[0].toString()+" "}次）`,"j9psrEP");break;case AB_REVIVE:W(`擊倒後 ${numStrT(d[1])} 以 ${d[2]} % 血量復活（${-1==d[0]?"無限":d[0].toString()+" "}次）`,"BX2GLgu");break;case AB_WARP:W(`${d[0]} % 將目標向${d[2]<0?"前":"後"}傳送${U} ${Math.abs(d[2])} 距離持續 `+numStrT(d[1]),"KkYm2Og");break;case AB_CURSE:W(`${d[0]} % 詛咒${U}持續 ${numStrT(d[1])}，控場覆蓋率 ${getCoverUnit(E,d[0],d[1])} %`,"0Rraywl");break;case AB_S:T(`${d[0]} % 渾身一擊${U}（攻擊力增加至 ${100+d[1]} %）`,"KDpH72p");break;case AB_IMUATK:W(d[0]+" % 發動攻擊無效持續 "+numStrT(d[1]),"8Eq6vPV");break;case AB_GLASS:W("一次攻擊(自殺)","VY93npj");break;case AB_SHIELD:W(`護盾 ${numStr(d[0])} HP`,"https://i.imgur.com/ERkdLLP.png");break;case AB_DSHIELD:{var p=document.createElement("div");p.style.cursor="pointer";let U=new Image(40,40);U.src="https://i.imgur.com/LESVycw.png",p.appendChild(U),(dst_g=document.createElement("span")).textContent=~~(Math.round(d[0]*(my_mult/100))*(stageMag/100)),p.append("惡魔盾 "),p.appendChild(dst_g),p.append(` HP，KB時惡魔盾恢復 ${d[1]} %`),p.i=I,p.s=!1,p.onclick=hClick,specials.appendChild(p)}break;case AB_COUNTER:W("烈波反擊","tchDtAr");break;case AB_AFTERMATH:W(`死後 ${d[0]} % 發射 Lv. ${d[3]}烈波（範圍 ${d[1]}～${d[2]}，持續 ${numStrT(20*d[3])}）`,"amhSmHa");break;case AB_POIATK:W(`${d[0]} % 毒擊（造成角色血量 ${d[1]} % 傷害）`,"6O6zwrp");break;case AB_VOLC:T(`${d[0]} % 發射 Lv. ${d[3]} 烈波（出現位置 ${d[1]}～${d[2]}，持續 ${numStrT(20*d[3])}）`,"at4bW0n");break;case AB_MINIVOLC:T(`${d[0]} % 發射 Lv. ${d[3]} 小烈波（出現位置 ${d[1]}～${d[2]}，持續 ${numStrT(20*d[3])}）`,"AEITK8t")}}function calc(){var k,_atk_mag=atk_mag/100,_my_mult=my_mult/100,_stageM=stageMag/100;let HP=E.hp,atk=E.atk,atk1=E.atk1,atk2=E.atk2;if(E.trait&TB_ALIEN){let m;m=1==E.star?16-treasures[22]/100:7-treasures[21]/100,HP*=m,atk*=m,atk1*=m,atk2*=m}else if(2<=E.star){let m;switch(E.star){case 2:m=11-treasures[20]/10;break;case 3:m=11-treasures[24]/10;break;case 4:m=11-treasures[30]/10}HP*=m,atk*=m,atk1*=m,atk2*=m}atk=~~(Math.round(atk*_atk_mag)*_stageM),atk1=~~(Math.round(atk1*_atk_mag)*_stageM),atk2=~~(Math.round(atk2*_atk_mag)*_stageM),HP=~~(Math.round(HP*_my_mult)*_stageM);let DPS=atk+atk1+atk2;function ATK(x){atk*=x,atk1*=x,atk2*=x}for(k of set){var v=E.ab[k];switch(k){case AB_CRIT:DPS*=1+v/100,ATK(2);break;case AB_S:DPS*=1+v[0]*v[1]/1e4,ATK(1+v[1]/100);break;case AB_ATKBASE:DPS*=4,ATK(4);break;case AB_WAVE:ATK(2),DPS*=1+v[0]/100;break;case AB_MINIWAVE:ATK(1.2),DPS*=1+v[0]/500;break;case AB_VOLC:ATK(1+v[3]),DPS*=1+v[3]*v[0]/100;break;case AB_MINIVOLC:ATK(1+v[3]/5),DPS*=1+v[3]*v[0]/500;break;case AB_STRONG:var a=1+v[1]/100;ATK(a),DPS*=a;break;case AB_DSHIELD:a=~~(Math.round(v[0]*_my_mult)*_stageM);HP+=~~(a+a*(v[1]/100)*(E.kb-1))}}E.ab[AB_DSHIELD]&&dst_g&&(dst_g.textContent=~~(Math.round(E.ab[AB_DSHIELD][0]*_my_mult)*_stageM)),chs[0].children[2].textContent=numStr(HP),chs[0].children[4].textContent=[atk,atk1,atk2].filter(x=>x).map(numStr).join("/"),chs[1].children[3].textContent=numStr(~~(30*DPS/E.attackF))}function hfocus(){this.focus();var s=window.getSelection(),r=document.createRange();r.selectNodeContents(this),s.removeAllRanges(),s.addRange(r)}isNaN(my_id)&&(my_id=0),my_id+=2,loadEnemy(my_id).then(e=>{E=e,document.getElementById("loader").style.display="none",document.getElementById("loader-text").style.display="none",document.getElementById("main").style.display="block",my_mult&&(my_mult=parseInt(my_mult),!isNaN(my_mult))||(my_mult=100),atk_mag&&(atk_mag=parseInt(atk_mag),!isNaN(atk_mag))||(atk_mag=my_mult),stageMag&&(stageMag=parseInt(stageMag),!isNaN(stageMag))||(stageMag=100),mult.textContent="倍率:"+my_mult.toString()+"%",mult_atk.textContent="攻擊倍率:"+atk_mag.toString()+"%",st_mag.textContent="★倍率:"+stageMag.toString()+"%";var e=[E.name+E.ts,E.jp_name].filter(x=>x).join("/")||"?",e=(document.title=e,document.getElementById("e-id").textContent=e,[]),e=(E.trait&TB_RED&&e.push("紅色敵人"),E.trait&TB_FLOAT&&e.push("漂浮敵人"),E.trait&TB_BLACK&&e.push("黑色敵人"),E.trait&TB_METAL&&e.push("鋼鐵敵人"),E.trait&TB_ANGEL&&e.push("天使敵人"),E.trait&TB_ALIEN&&(1==E.star?e.push("異星戰士(有星星)"):e.push("異星戰士")),E.trait&TB_ZOMBIE&&e.push("不死生物"),E.trait&TB_RELIC&&e.push("古代種"),E.trait&TB_WHITE&&e.push("無屬性敵人"),E.trait&TB_EVA&&e.push("使徒"),E.trait&TB_WITCH&&e.push("魔女"),E.trait&TB_DEMON&&e.push("惡魔"),E.trait&TB_BEAST&&e.push("超獸"),E.trait&TB_BARON&&e.push("超生命體"),E.trait&TB_INFN&&e.push("道場塔"),E.trait&TB_SAGE&&e.push("超賢者"),chs[0].children[8].textContent=e.join("・"),(E.atk1||E.atk2)&&(e=E.atk2?3:2,atksPre=[E.atk,E.atk1,E.atk2].slice(0,e).map(x=>(x/(E.atk+E.atk1+E.atk2)*100).toFixed(0)+" %"),specials.append(`${e}回連續攻擊（傷害 ${atksPre.join(" / ")}）`+getAbiString(E.abi)),specials.appendChild(document.createElement("br"))),""),lds=(E.atkType&ATK_OMNI?e+="全方位":E.atkType&ATK_LD&&(e+="遠方"),e+=E.atkType&ATK_RANGE?"範圍攻擊":"單體攻擊",E.atkType&ATK_KB_REVENGE&&(e+="・擊退反擊"),E.lds),ldr=E.ldr;if(lds[0]||ldr[0]){var s="";for(let i=0;i<lds.length;++i){var x=lds[i],y=x+ldr[i];s+=x<=y?""+"①②③"[i]+x+"～"+y:""+"①②③"[i]+y+"～"+x}e+="・範圍 "+s}if(E.atkType&ATK_RANGE){const s=new Image(40,40);s.src="https://i.imgur.com/BeuHYlZ.png",specials.appendChild(s)}else{const s=new Image(40,40);s.src="https://i.imgur.com/CZwFP3H.png",specials.appendChild(s)}if(E.atkType&ATK_LD){const s=new Image(40,40);s.src="https://i.imgur.com/fYILfa8.png",specials.appendChild(s)}if(E.atkType&ATK_OMNI){const s=new Image(40,40);s.src="https://i.imgur.com/rvGrwIL.png",specials.appendChild(s)}if(E.atkType&ATK_KB_REVENGE){const s=new Image(40,40);s.src="https://i.imgur.com/KqtrO2b.png",specials.appendChild(s)}specials.append(e),specials.appendChild(document.createElement("br"));var e=chs[0].children[0].children[0],atksPre=t3str(E.id-2);e.src="https://battlecatsinfo.github.io/img/e/"+atksPre+"/enemy_icon_"+atksPre+".png",chs[2].children[3].textContent=numStrT(E.backswing),chs[2].children[5].textContent=numStrT(E.tba),chs[2].children[7].textContent=numStrT(E.attackF),e=new URL("https://battlecats-db.com/enemy/"+t3str(my_id)+".html"),100!=my_mult&&e.searchParams.set("mag",my_mult),document.getElementById("open-db").href=e.href,chs[1].children[5].textContent=E.range,chs[1].children[7].textContent=E.getcost(),"F"==_l_unit?chs[2].children[1].textContent=[E.pre,E.pre1,E.pre2].filter(x=>x).map(numStr).join("/")+" F":chs[2].children[1].textContent=[E.pre,E.pre1,E.pre2].filter(x=>x).map(x=>numStr(x/30)).join("/")+" 秒",chs[0].children[6].textContent=E.speed,chs[1].children[1].textContent=E.kb,calc(),chs[4].children[1].innerHTML=E.desc,createAbIcons(),document.getElementById("search-appear").href="/appear.html?id="+(my_id-2).toString(),e=t3str(my_id-2),document.getElementById("open-imgcut").href=`/anim/imgcut.html?cutfile=$/data/enemy/${e}/${e}_e.imgcut&imgfile=/img/e/${e}/${e}_e.png`,document.getElementById("open-anim").href="/anim/anim.html?id=-"+(my_id-1),document.getElementById("fandom").href="https://battle-cats.fandom.com/wiki/"+E.fandom,mult.addEventListener("focus",hfocus),mult.addEventListener("blur",function(){var num=mult.textContent.match(/\d+/);num?(atk_mag=my_mult=parseInt(num[0]),mult_atk.textContent=`攻擊倍率:${num}%`,mult.textContent=`倍率:${num}%`,calc()):mult.textContent=`倍率:${my_mult}%`}),mult_atk.addEventListener("focus",hfocus),mult_atk.addEventListener("blur",function(){var num=mult_atk.textContent.match(/\d+/);num?(atk_mag=parseInt(num[0]),mult_atk.textContent=`攻擊倍率:${num}%`,calc()):mult_atk.textContent=`攻擊倍率:${atk_mag}%`}),st_mag.addEventListener("focus",hfocus),st_mag.addEventListener("blur",function(){var num=st_mag.textContent.match(/\d+/);num?(stageMag=parseInt(num[0]),st_mag.textContent=`★倍率:${num}%`,calc()):st_mag.textContent=`★倍率:${stageMag}%`});const abar=document.getElementById("abar");atksPre=abar.previousElementSibling;atksPre.onmouseover=function(event){abar.style.display="block"},atksPre.onclick=function(event){event.stopPropagation(),event.preventDefault(),abar.style.display="block"},window.onclick=function(){abar.style.display="none"}});