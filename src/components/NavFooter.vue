<template>
  <div class="footer site-footer">
      <div class="container">
          <div class="footer-service ">
            <ul class="list-service clearfix">
                <li class="firstli"><a href="#">预约维修服务</a></li>
                <li><a href="#">七天无理由退货</a></li>
                <li><a href="#">十五天无理由换货</a></li>
                <li><a href="#">满99元包邮</a></li>
                <li><a href="#">满99元包邮</a></li>
            </ul>
          </div>
          <div class="footer-links clearfix">
            <dl class="col-links col-links-first">
              <dt>帮助中心</dt>
              <dd><a href="#">账户管理</a></dd>
              <dd><a href="#">购物指南</a></dd>
              <dd><a href="#">订单操作</a></dd>
            </dl>
            <dl class="col-links">
              <dt>服务支持</dt>
              <dd><a href="#">售后政策</a></dd>
              <dd><a href="#">自主服务</a></dd>
              <dd><a href="#">相关下载</a></dd>
            </dl>
            <dl class="col-links">
              <dt>线下门店</dt>
              <dd><a href="#">小米之家</a></dd>
              <dd><a href="#">服务网点</a></dd>
              <dd><a href="#">授权体验店</a></dd>
            </dl>
            <dl class="col-links">
              <dt>关于小米</dt>
              <dd><a href="#">了解小米</a></dd>
              <dd><a href="#">加入小米</a></dd>
              <dd><a href="#">投资者关系</a></dd>
              <dd><a href="#">企业社会责任</a></dd>
              <dd><a href="#">廉洁举报</a></dd>
            </dl>
            <dl class="col-links">
              <dt>关注我们</dt>
              <dd><a href="#">新浪微博</a></dd>
              <dd><a href="#">官方微信</a></dd>
              <dd><a href="#">联系我们</a></dd>
              <dd><a href="#">公益基金会</a></dd>
            </dl>
            <dl class="col-links">
              <dt>特色服务</dt>
              <dd><a href="#">F码通道</a></dd>
              <dd><a href="#">礼物码</a></dd>
              <dd><a href="#">防伪查询</a></dd>
            </dl>
            <div class="col-contact">
              <p class="phone">400-100-5678</p>
              <p>8:00-18:00(仅收市话费)</p>
              <a href="#">
                <em class="iconfont-message2"></em>人工服务
              </a>
              <p>关注小米</p>
            </div>
          </div>
          <p>
            <a>小米商城</a><span class="sep">|</span>
            <a>米家</a><span class="sep">|</span>
            <a>MIUI</a><span class="sep">|</span>
            <a>米聊</a><span class="sep">|</span>
            <a>多看</a><span class="sep">|</span>
            <a>游戏</a><span class="sep">|</span>
            <a>小米集团隐私政策</a><span class="sep">|</span>
            <a>小米公司儿童信息保护政策</a><span class="sep">|</span>
            <a>小米商城隐私政策</a><span class="sep">|</span>
            <a>小米商城用户协议</a><span class="sep">|</span>
            <a>问题反馈</a><span class="sep">|</span>
            <a>Select Location</a><span class="sep">|</span>
             <a>政企服务</a><span class="sep">|</span>
            <a>小米天猫店</a><span class="sep">|</span>
          </p>
          <p class="site">
            <a>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</a>
            <br/>
            <a>（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)-非经营性-2014-0090 营业执照 医疗器械质量公告</a>
            <br>
            <a>增值电信业务许可证 网络食品经营备案（京）【2018】WLSPJYBAHF-12  食品经营许可证</a>
            <br>
            <a>违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</a>
          </p>
      </div>
  </div>
</template>
<script>
  export default{
    name:'nav-footer'
  }
</script>
<style scoped>
  .footer{
    font: 14px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
    color: #333;
    margin-top:50px;
}
.container{
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
}
.footer-service{
    padding: 20px 0;
    border-bottom: 1px solid #e0e0e0;
}

a {
    color: #616161;
    transition: color .2s;
    background-color: rgba(0,0,0,0);
}
 a, a:hover {
    text-decoration: none;
}
a:-webkit-any-link {
  cursor: pointer;
}
.site-footer .list-service {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
ul {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
site-footer .list-service li:first-child {
    border-left: 0;
}
.firstli{
   border-right: 0px 
}
.clearfix:after {
    clear: both;
}
.clearfix:after, .clearfix:before {
    content: " ";
    display: table;
}
.site-footer .list-service li {
    float: left;
    width: 18%;
    height: 25px;
    border-right: 1px solid #e0e0e0;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
}


.site-footer .footer-links {
    padding: 40px 0;
}
.site-footer .footer-links .col-links {
    float: left;
    width: 160px;
    height: 112px;
    margin: 0;
}
dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.site-footer .footer-links .col-links dt {
    margin: -1px 0 26px;
    font-size: 14px;
    line-height: 1.25;
    color: #424242;
}
.site-footer .footer-links .col-links dd {
    margin: 10px 0 0;
    font-size: 12px;
}
.site-footer .footer-links .col-contact {
    float: right;
    width: 251px;
    border-left: 1px solid #e0e0e0;
    text-align: center;
    color: #616161;
}
.site-footer .footer-links .col-contact .phone {
    font-size: 22px;
    line-height: 1;
    color: #ff6700;
}
.site-footer .footer-links .col-contact p {
    margin: 0 0 5px 0;
    font-size: 12px;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.sep {
    margin: 0 .45em;
    font-family: sans-serif;
}
body{
  font: 14px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
  color:#333;
}


</style>

  