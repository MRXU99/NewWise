function aa(id){
    return document.getElementById(id);
}

//立即优化
function liji(){
    aa("liji_wai").style.visibility =  (aa("liji_wai").style.visibility == "visible"  ) ? "hidden" : "visible";
}

function load() {
    aa("lunbo_a1").style.backgroundColor='rgb(51, 133, 255)';
    aa("lunbo_a2").style.backgroundColor='#000000';
    aa("lunbo_a1").style.opacity='1';
    aa("lunbo_a2").style.opacity='0.4';


    aa("zonghe_hidd").style.display="block";
    aa("jieshui").style.display="none";
}
//轮播按钮组，点击跳转个税、节税
function geshui() {
    aa("lunbo_a1").style.backgroundColor='rgb(51, 133, 255)';
    aa("lunbo_a2").style.backgroundColor='#000000';
    aa("lunbo_a1").style.opacity='1';
    aa("lunbo_a2").style.opacity='0.4';


    aa("zonghe_hidd").style.display="block";
    aa("jieshui").style.display="none";
}
function jieshui() {
    aa("lunbo_a1").style.backgroundColor='#000000';
    aa("lunbo_a2").style.backgroundColor='rgb(51, 133, 255)';
    aa("lunbo_a2").style.opacity='1';
    aa("lunbo_a1").style.opacity='0.4';


    aa("jieshui").style.display="block";
    aa("zonghe_hidd").style.display="none";
    aa("lixi_hidd").style.display="none";
    aa("geti_hidd").style.display="none";
    aa("zulin_hidd").style.display="none";
    aa("zhuanrang_hidd").style.display="none";
    aa("ouran_hidd").style.display="none";
    aa("qita_hidd").style.display="none";
    aa("jisuan").style.display="block";
}

// 节税下拉菜单
// 综合所得
function zonghe(){
    aa("zonghe_hidd").style.display="block";
    aa("lixi_hidd").style.display="none";
    aa("geti_hidd").style.display="none";
    aa("zulin_hidd").style.display="none";
    aa("zhuanrang_hidd").style.display="none";
    aa("ouran_hidd").style.display="none";
    aa("qita_hidd").style.display="none";
}
function hidd(){
    var dd=aa("hidd").style.display;
    if (dd != "none") {
        return aa("hidd").style.display="none";
    } else {
        return aa("hidd").style.display="block";
    }

}
//利息、股息、红利所得
function lixi(){
    aa("zonghe_hidd").style.display="none";
    aa("lixi_hidd").style.display="block";
    aa("geti_hidd").style.display="none";
    aa("zulin_hidd").style.display="none";
    aa("zhuanrang_hidd").style.display="none";
    aa("ouran_hidd").style.display="none";
    aa("qita_hidd").style.display="none";
}
function hidd_lx(){
    var dd=aa("hidd_lx").style.display;
    if (dd != "none") {
        return aa("hidd_lx").style.display="none";
    } else {
        return aa("hidd_lx").style.display="block";
    }
}
// 个体工商户生产、经营所得
function geti(){
    aa("zonghe_hidd").style.display="none";
    aa("lixi_hidd").style.display="none";
    aa("geti_hidd").style.display="block";
    aa("zulin_hidd").style.display="none";
    aa("zhuanrang_hidd").style.display="none";
    aa("ouran_hidd").style.display="none";
    aa("qita_hidd").style.display="none";

}
function hidd_gt(){
    var dd=aa("hidd_gt").style.display;
    if (dd != "none") {
        return aa("hidd_gt").style.display="none";
    } else {
        return aa("hidd_gt").style.display="block";
    }
}
// 租赁所得
function zulin(){
    aa("zonghe_hidd").style.display="none";
    aa("lixi_hidd").style.display="none";
    aa("geti_hidd").style.display="none";
    aa("zulin_hidd").style.display="block";
    aa("zhuanrang_hidd").style.display="none";
    aa("ouran_hidd").style.display="none";
    aa("qita_hidd").style.display="none";

}
function hidd_zl(){
    var dd=aa("hidd_zl").style.display;
    if (dd != "none") {
        return aa("hidd_zl").style.display="none";
    } else {
        return aa("hidd_zl").style.display="block";
    }
}
// 转让所得
function zhuanrang(){
    aa("zonghe_hidd").style.display="none";
    aa("lixi_hidd").style.display="none";
    aa("geti_hidd").style.display="none";
    aa("zulin_hidd").style.display="none";
    aa("zhuanrang_hidd").style.display="block";
    aa("ouran_hidd").style.display="none";
    aa("qita_hidd").style.display="none";

}
function hidd_zr(){
    var dd=aa("hidd_zr").style.display;
    if (dd != "none") {
        return aa("hidd_zr").style.display="none";
    } else {
        return aa("hidd_zr").style.display="block";
    }
}
// 偶然所得(如中奖、中彩)
function ouran(){
    aa("zonghe_hidd").style.display="none";
    aa("lixi_hidd").style.display="none";
    aa("geti_hidd").style.display="none";
    aa("zulin_hidd").style.display="none";
    aa("zhuanrang_hidd").style.display="none";
    aa("ouran_hidd").style.display="block";
    aa("qita_hidd").style.display="none";

}
function hidd_or(){
    var dd=aa("hidd_or").style.display;
    if (dd != "none") {
        return aa("hidd_or").style.display="none";
    } else {
        return aa("hidd_or").style.display="block";
    }
}
// 被确定征税的其他部分
function qita(){
    aa("zonghe_hidd").style.display="none";
    aa("lixi_hidd").style.display="none";
    aa("geti_hidd").style.display="none";
    aa("zulin_hidd").style.display="none";
    aa("zhuanrang_hidd").style.display="none";
    aa("ouran_hidd").style.display="none";
    aa("qita_hidd").style.display="block";

}
function hidd_qt(){
    var dd=aa("hidd_qt").style.display;
    if (dd != "none") {
        return aa("hidd_qt").style.display="none";
    } else {
        return aa("hidd_qt").style.display="block";
    }
}
// 节税计算器
function qing() {
    aa("qing").value="";
}
//计算
//个税部分
//综合所得
function zong() {
    var gongzi=aa("gongzi").value;
    gongzi!=""?gongzi=gongzi:gongzi=0;
    console.log(gongzi);
    var laowu=aa("laowu").value;
    laowu!=""?laowu=laowu:laowu=0;
    var texu=aa("texu").value;
    texu!=""?texu=texu:texu=0;
    var gaochou=aa("gaochou").value;
    gaochou!=""?gaochou=gaochou:gaochou=0;
    var baoxian=aa("baoxian").value;
    baoxian!=""?baoxian=baoxian:baoxian=0;
    // 应纳税所得额=工薪资金+劳务报酬所得*80%+稿酬所得*70%*80%+特许权使用费所得*80%-社会保险等扣除项-起征点(5000)
    var ynsd=parseFloat(gongzi)+parseFloat(laowu*0.8)
        +parseFloat(gaochou*0.7*0.8)+parseFloat(texu*0.8)
        -parseFloat(baoxian)-5000;
    // 应纳税额=应纳税所得额*税率-速算扣除数
    var ynse=0;
    var shuilv=0;
    var kouchu=0;
    if (ynsd<=3000){
        ynse=ynsd*0.03;
        shuilv="0%";
    }else if(3000<ynsd && ynsd<=12000){
        ynse=ynsd*0.1-210;
        shuilv="10%";
        kouchu=210;
    }else if(12000<ynsd && ynsd<=25000){
        ynse=ynsd*0.2-1410;
        shuilv="20%";
        kouchu=1410;
        console.log(12);
    }else if(25000<ynsd && ynsd<=35000) {
        ynse = ynsd * 0.25 - 2660;
        shuilv="25%";
        kouchu=2660;
    }else if(35000<ynsd && ynsd<=55000) {
        ynse = ynsd * 0.3 - 4410;
        shuilv="30%";
        kouchu=4410;
    }else if(55000<ynsd && ynsd<=80000) {
        ynse = ynsd * 0.35 - 7160;
        shuilv="35%";
        kouchu=7160;
    }else if(80000<ynsd) {
        ynse = ynsd * 0.45 - 15160;
        shuilv="45%";
        kouchu=15160;
    }
    // 实际收入：=工薪资金+劳务报酬所得+稿酬所得+特许权使用费所得-应纳税额-社会保险
    var shiji=parseFloat(gongzi)+parseFloat(laowu)+parseFloat(gaochou)
        +parseFloat(texu)-ynse-baoxian;

    aa("ynsd").innerText=ynsd.toFixed(2);
    aa("shuilv").innerText=shuilv;
    aa("kouchu").innerText=kouchu.toFixed(2);
    aa("ynse").innerText=ynse.toFixed(2);
    aa("shiji").innerText=shiji.toFixed(2);
    if(ynsd<=0){
        aa("ynsd").innerText="0.00";
        aa("ynse").innerText="0.00";
        aa("shiji").innerText="0.00";
    }
}
// 利息、股息、红利所得
function li() {
    var li_yj=aa("li").value;
    li_yj==""?li_yj=0:li_yj=li_yj;
    var li_jc=li_yj*0.2;
    var li_sd=li_yj-li_jc;
    aa("li_jc").innerText=li_jc.toFixed(2);
    aa("li_yj").innerText=li_yj+".00";
    aa("li_sd").innerText=li_sd.toFixed(2);
}
// 个体工商户生产、经营所得
function ge() {
    var ge_yn=aa("ge").value;
    ge_yn==""?ge_yn=0:ge_yn=ge_yn;
    var ge_yj=0;
    var ge_sl=0;
    var ge_kc=0;
    if (ge_yn<=30000){
        ge_yj=ge_yn*0.03;
        ge_sl="0%";
    }else if(30000<ge_yn && ge_yn<=90000){
        ge_yj=ge_yn*0.1-1500;
        ge_sl="10%";
        ge_kc=1500;
    }else if(90000<ge_yn && ge_yn<=300000){
        ge_yj=ge_yn*0.2-10500;
        ge_sl="20%";
        ge_kc=10500;
        console.log(12);
    }else if(300000<ge_yn && ge_yn<=500000) {
        ge_yj = ge_yn * 0.30 - 40500;
        ge_sl="30%";
        ge_kc=40500;
    }else if(500000<ge_yn) {
        ge_yj = ge_yn * 0.45 - 65500;
        ge_sl="35%";
        ge_kc=65500;
    }
    var ge_sd=ge_yn-ge_yj;
    aa("ge_yn").innerText=ge_yn+".00";
    aa("ge_yj").innerText=ge_yj.toFixed(2);
    aa("ge_sl").innerText=ge_sl;
    aa("ge_kc").innerText=ge_kc.toFixed(2);
    aa("ge_sd").innerText=ge_sd.toFixed(2);
}
// 租赁所得
function zu() {
    var zu_bc=aa("zu_bc").value;
    var zu_yn=0;
    var zu_kc=0;
    if(zu_bc<800){
        zu_yn=0;
    }else if(zu_bc<=4000){
        zu_yn=zu_bc-800;
        zu_kc=800;
    }else{
        zu_yn=zu_bc*0.8;
        zu_kc=zu_yn*0.8;
    }
    var zu_yj=zu_yn*0.2;
    var zu_sd=zu_bc-zu_yj;
    aa("zu_yn").innerText=zu_yn.toFixed(2);
    aa("zu_kc").innerText=zu_kc.toFixed(2);
    aa("zu_yj").innerText=zu_yj.toFixed(2);
    aa("zu_sd").innerText=zu_sd.toFixed(2);
}
// 转让所得
function zhuan() {
    var zr_yj=aa("zhuan").value;
    zr_yj==""?zr_yj=0:zr_yj=zr_yj;
    console.log(zr_yj);
    var zr_jc=zr_yj*0.2;
    var zr_sd=zr_yj-zr_jc;
    aa("zr_jc").innerText=zr_jc.toFixed(2);
    aa("zr_yj").innerText=zr_yj+".00";
    aa("zr_sd").innerText=zr_sd.toFixed(2);
}
// 偶然所得(如中奖、中彩)
function ou() {
    var ou_yj=aa("ou").value;
    ou_yj==""?ou_yj=0:ou_yj=ou_yj;
    var ou_jc=ou_yj*0.2;
    var ou_sd=ou_yj-ou_jc;
    aa("ou_jc").innerText=ou_jc.toFixed(2);
    aa("ou_yj").innerText=ou_yj+".00";
    aa("ou_sd").innerText=ou_sd.toFixed(2);
}
// 被确定征税的其他部分
function qi() {
    var qi_yj=aa("qi").value;
    qi_yj==""?qi_yj=0:qi_yj=qi_yj;
    var qi_jc=qi_yj*0.2;
    var qi_sd=qi_yj-qi_jc;
    aa("qi_jc").innerText=qi_jc.toFixed(2);
    aa("qi_yj").innerText=qi_yj+".00";
    aa("qi_sd").innerText=qi_sd.toFixed(2);
}

//节税部分
function jisuan() {
    var zhi=aa("qing").value;
    var shebao=zhi*0.3;
    var cb_be=parseFloat(zhi) + parseFloat(shebao);
    var shuidian=zhi>100000?0.1536:0.12;
    console.log(shuidian);
    var fuwu_be=zhi*shuidian;
    var dikou=zhi*0.0677;
    var fuwu_af=fuwu_be-dikou;
    var cb_af=parseFloat(zhi) + parseFloat(fuwu_af);
    // console.log(cb_af);
    var jscb=cb_be-cb_af;
    var jsbl=jscb/cb_be*100;

    // console.log(jsbl);
    if (zhi!=""){

        aa("xufa_be").innerText=zhi+".00";
        aa("shebao_be").innerText=shebao.toFixed(2);
        aa("cb_be").innerText=cb_be.toFixed(2);
        aa("xufa_af").innerText=zhi+".00";
        aa("shuidian").innerText=shuidian*100+"%";
        aa("fuwu_be").innerText=fuwu_be.toFixed(2);
        aa("dikou").innerText=dikou.toFixed(2);
        aa("fuwu_af").innerText=fuwu_af.toFixed(2);
        aa("cb_af").innerText=cb_af.toFixed(2);
        aa("jscb").innerText=jscb.toFixed(2);
        aa("jsbl").innerText=jsbl.toFixed(2)+"%";

    }else {
        aa("xufa_be").innerText="0.00";
        aa("shebao_be").innerText="0.00";
        aa("cb_be").innerText="0.00";
        aa("xufa_af").innerText="0.00";
        aa("shuidian").innerText="12%";
        aa("fuwu_be").innerText="0.00";
        aa("dikou").innerText="0.00";
        aa("fuwu_af").innerText="0.00";
        aa("cb_af").innerText="0.00";
        aa("jscb").innerText="0.00";
        aa("jsbl").innerText="0.00%";
    }
}