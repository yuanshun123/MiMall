<template>
<!--顶部-->
  <div id="navheader">
   <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">小米商城</el-menu-item>
  <el-menu-item index="2">MUI</el-menu-item>
  <el-menu-item index="3" disabled>loT</el-menu-item>
  <el-menu-item index="4">云服务</el-menu-item>
  <el-menu-item index="2">金融</el-menu-item>
  <el-menu-item index="3" disabled>有品</el-menu-item>
  <el-menu-item index="4">下载app</el-menu-item>
  <ul>
  <li style="width:50px;"><el-menu-item index="2"><i class="el-icon-shopping-cart-full"></i> 购物车</el-menu-item></li>
  <li style="width:50px;"><el-menu-item index="3">登录</el-menu-item></li>
  <li style="width:50px;"><el-menu-item index="3">注册</el-menu-item></li>

  </ul>
  
</el-menu>
<!--搜索框-->
<el-row style="margin-top:20px;">
  <el-col :span="1"><div class="grid-content bg-purple"><p>&nbsp;&nbsp;&nbsp;</p></div></el-col>
  <el-col :span="3">
    <div class="grid-content bg-purple-light">
         <div class="header-logo">
          <img v-lazy="'/imgs/logo-mi.png'" style="width:70px;height:70px;">
        </div>
    </div>
    </el-col>
  <el-col :span="13">
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"  @mouseover.native="mouseOver()" @mouseleave.native="mouseLeave()" >手机</el-menu-item>
        <el-menu-item index="2"   @mouseover.native="mouseOver1()" @mouseleave.native="mouseLeave1()">
       电视机
        </el-menu-item>
        <el-menu-item index="3"  @mouseover.native="mouseOver2()" @mouseleave.native="mouseLeave2()">电脑</el-menu-item>
        <el-menu-item index="4"  @mouseover.native="mouseOver3()" @mouseleave.native="mouseLeave3()">家电</el-menu-item>
        <el-menu-item index="3"  @mouseover.native="mouseOver2()" @mouseleave.native="mouseLeave2()">路由器</el-menu-item>
        <el-menu-item index="4"  @mouseover.native="mouseOver3()" @mouseleave.native="mouseLeave3()">智能硬件</el-menu-item>
      </el-menu>
  </el-col>
   <el-col :span="6">
     <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
     </div>
    </el-col>
  <el-col :span="1">
    <div class="grid-content bg-purple">

    </div>
  </el-col>
</el-row>
<el-card class="box-card" 
         style="height:227px;width:97%;position:absolute; display:none;top:150px;margin-left:1%;z-index:15;"
         ref="div1">
  <ul class="ul">
    <li>
      <img v-lazy="'/imgs/phone/1.webp'" style="width:150px;height:100px;">
     <P style="margin-left:15px;">&nbsp;&nbsp;&nbsp;小米青春版 5G</p>
      </li>
    <li>
      <img v-lazy="'/imgs/phone/2.webp'" style="width:150px;height:100px;">
       <P style="margin-left:15px;">&nbsp;&nbsp;&nbsp;小米青春版 5G</p>
      </li>
    <li>
      <img v-lazy="'/imgs/phone/3.webp'" style="width:150px;height:100px;">
       <P style="margin-left:15px;">&nbsp;&nbsp;&nbsp;小米青春版 5G</p>
      </li>
    <li>
      <img v-lazy="'/imgs/phone/4.webp'" style="width:150px;height:100px;">
       <P style="margin-left:15px;">&nbsp;&nbsp;&nbsp;小米青春版 5G</p>
      </li>
  </ul>
</el-card>
<el-card class="box-card" 
         style="height:227px;width:97%;position:absolute; opacity:0;top:150px;margin-left:1%;"
         ref="div2">
  <ul class="ul">
    <li>
      <img v-lazy="'/imgs/TV/t1.jpg'" style="width:150px;height:100px;">
     <P style="margin-left:15px;">&nbsp;&nbsp;&nbsp;小米青春版 5G</p>
      </li>
    <li>
      <img v-lazy="'/imgs/TV/t2.webp'" style="width:150px;height:100px;">
       <P style="margin-left:15px;">&nbsp;&nbsp;&nbsp;小米青春版 5G</p>
      </li>
    <li>
      <img v-lazy="'/imgs/TV/t3.webp'" style="width:150px;height:100px;">
       <P style="margin-left:15px;">&nbsp;&nbsp;&nbsp;小米青春版 5G</p>
      </li>
    <li>
      <img v-lazy="'/imgs/TV/t4.webp'" style="width:150px;height:100px;">
       <P style="margin-left:15px;">&nbsp;&nbsp;&nbsp;小米青春版 5G</p>
      </li>
       <li>
      <img v-lazy="'/imgs/TV/t5.webp'" style="width:150px;height:100px;">
       <P style="margin-left:15px;">&nbsp;&nbsp;&nbsp;小米青春版 5G</p>
      </li>
  </ul>
</el-card>

  </div>


 
</template>
<script>
export default {
   name:'nav-header',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
       mouseOver(){
        this.$refs.div1.$el.style.display="block";
      
      },
    // 移出
      mouseLeave(){
         this.$refs.div1.$el.style.display="none";
     },
       mouseOver1(){
 
        this.$refs.div1.$el.style.display="block";
      
      },
    // 移出
      mouseLeave1(){
          this.$refs.div1.$el.style.display="none";
     },
       mouseOver2(){
         this.$refs.div1.$el.style.display="block";
      
      },
    // 移出
      mouseLeave2(){
           this.$refs.div1.$el.style.display="none";
     },
       mouseOver3(){
       this.$refs.div1.$el.style.display="block";
      
      },
    // 移出
      mouseLeave3(){
         this.$refs.div1.$el.style.display="none";
     }

    },
  }

</script>
<style lang="scss">
 @import './../assets/scss/base.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/config.scss';
  ul li{ float:right; margin-left:20px; list-style-type:none;}
  .ul li{
    float: left;
  }
 .header-search{
          width:319px;
          .wrapper{
            height:50px;
            border:1px solid #E0E0E0;
            display:flex;
            align-items:center;
            input{
              border:none;
              box-sizing: border-box;
              border-right:1px solid #E0E0E0;
              width:264px;
              height:50px;
              padding-left:14px;
            }
            a{
              @include bgImg(18px,18px,'/imgs/icon-search.png');
              margin-left:17px;
            }
          }
 }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
  
</style>