<template>
  <div id="index">
        <div class="swiper-container qwe" style="width:1200px;margin-left:150px;margin-right:150px;margin-top:50px;">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
               <img src="/imgs/slider/slide-1.jpg" alt="图片未加载" style="width:100%;height:500px;" >
          </div>
          <div class="swiper-slide">
               <img src="/imgs/slider/slide-2.jpg" alt="图片未加载" style="width:100%;height:500px;">
         </div>
          <div class="swiper-slide">
              <img src="/imgs/slider/slide-3.jpg" alt="图片未加载" style="width:100%;height:500px;">
         </div>
          <div class="swiper-slide">
              <img src="/imgs/slider/slide-4.jpg" alt="图片未加载" style="width:100%;height:500px;">
         </div>
          <div class="swiper-slide">
              <img src="/imgs/slider/slide-5.jpg" alt="图片未加载" style="width:100%;height:500px;">
         </div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination paging"></div>
       <!-- 如果需要导航按钮 -->
       <div class="swiper-button-prev" style="margin-left:200px;top:250px;"></div>
       <div class="swiper-button-next" style="top:250px;"></div>
       <el-row :gutter="20" style="margin-top:20px;">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <a href="#"><img src="/imgs/ads/ads-1.png" style="width:300px;height:200px;"></a>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                 <a href="#"><img src="/imgs/ads/ads-2.jpg" style="width:300px;height:200px;"></a>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                 <a href="#"><img src="/imgs/ads/ads-3.png" style="width:300px;height:200px;"></a>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                 <a href="#"><img src="/imgs/ads/ads-4.jpg" style="width:300px;height:200px;"></a>
              </div>
            </el-col>
      </el-row>
      <div style="width:100%;height:150px; margin-top:30px;"><img src="/imgs/banner-1.png" style="width:100%;height:150px;"></div>
      <h2 class="title">手机</h2>
      <el-row>
        <el-col :span="5">
          <img src="/imgs/mix-alpha.jpg" style="width:100%;height:600px;">
        </el-col>
        <el-col :span="19">
            <el-row :gutter="20">
              <el-col :span="6">
                  <el-card >
                    <img src="/imgs/phone/1.webp">
                    <h3 class="title1">小米10青春版5G</h3>
                    <p class="desc">50倍潜望镜式变焦/轻薄5G手机</p>
                    <p class="price">1999元</p>
                  </el-card>
              </el-col>
              <el-col :span="6">
                  <el-card>
                    <img src="/imgs/phone/2.webp">
                     <h3 class="title1">小米10</h3>
                     <p class="desc">双模5G，曲面屏</p>
                     <p class="price">2999元</p>
                  </el-card>
              </el-col>
              <el-col :span="6">
                  <el-card >
                    <img src="/imgs/phone/3.webp">
                   <h3 class="title1">Redmi 9A</h3>
                    <p class="desc">50倍潜望镜式变焦/轻薄5G手机</p>
                    <p class="price">2499元</p>
                  </el-card>
              </el-col>
              <el-col :span="6">
                   <el-card>
                    <img src="/imgs/phone/3.webp">
                    <h3 class="title1">Redmi K30 Pro</h3>
                    <p class="desc">晓龙855，新款首发</p>
                    <p class="price">3199元</p>
                  </el-card>
              </el-col>
            </el-row>  
            <el-row :gutter="20">
              <el-col :span="6">
                  <el-card >
                    <img src="/imgs/phone/1.webp">
                    <h3 class="title1">小米10青春版5G</h3>
                    <p class="desc">50倍潜望镜式变焦/轻薄5G手机</p>
                    <p class="price">1999元</p>
                  </el-card>
              </el-col>
              <el-col :span="6">
                  <el-card>
                    <img src="/imgs/phone/2.webp">
                     <h3 class="title1">小米10</h3>
                     <p class="desc">双模5G，曲面屏</p>
                     <p class="price">2999元</p>
                  </el-card>
              </el-col>
              <el-col :span="6">
                  <el-card >
                    <img src="/imgs/phone/3.webp">
                   <h3 class="title1">Redmi 9A</h3>
                    <p class="desc">50倍潜望镜式变焦/轻薄5G手机</p>
                    <p class="price">2499元</p>
                  </el-card>
              </el-col>
              <el-col :span="6">
                   <el-card>
                    <img src="/imgs/phone/3.webp">
                    <h3 class="title1">Redmi K30 Pro</h3>
                    <p class="desc">晓龙855，新款首发</p>
                    <p class="price">3199元</p>
                  </el-card>
              </el-col>
            </el-row>
        </el-col>
      </el-row>
       <div style="width:100%;height:150px; margin-top:30px;"><img src="/imgs/banner-2.webp" style="width:100%;height:150px;"></div>
      <h2 class="title">家电</h2>
      <el-row :gutter="20">
          <el-col :span="5"><img src="/imgs/computer/cl.webp"  style="width:100%;height:340px;"></el-col>
          <el-col :span="19">
              <el-row :gutter="20">
                <el-col :span="6">
                    <el-card>
                      <img src="/imgs/computer/c1.webp" style="width:100%">
                      <h3 class="title1">小米电视4C 32英寸</h3>
                      <p class="desc">高清液晶屏，人工智能系统</p>
                      <p class="price">699元</p>
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card>
                      <img src="/imgs/computer/c2.webp" style="width:100%">
                      <h3 class="title1">全面屏电视 55英寸E55X</h3>
                      <p class="desc">潮流全面屏设计</p>
                      <p class="price">1799元</p>
                  </el-card>
                </el-col>
                <el-col :span="6">
                     <el-card>
                      <img src="/imgs/computer/c3.webp" style="width:100%">
                      <h3 class="title1">小米电视4A 70英寸</h3>
                      <p class="desc">大屏更享受</p>
                      <p class="price">2999元</p>
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card>
                      <img src="/imgs/computer/c4.jpg" style="width:100%">
                      <h3 class="title1">小米电视4C 43英寸</h3>
                      <p class="desc">FHD全高清屏，钢琴烤漆</p>
                      <p class="price">1099元</p>
                  </el-card>
                </el-col>
              </el-row> 
          </el-col>
       </el-row>

     </div>
     <div style="width:200px;height:500px; position:absolute;background:rgba(51,51,51,0.5);top:212px;z-index:11;left:159px;">
        <el-row style="color:#fff;"  @mouseover.native="mouseOver($event)" ref="div56" @mouseleave.native="mouseLeave()" >
          <el-col :span="4" ><div ><p></p></div></el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-light"  style="margin-top:30px;"  ref="div1" >
              <a href="#">手机</a>  <a href="#" >电话卡</a>
          </div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple-light" style="margin-top:25px;font-size:25px;">
              <img src="/imgs/icon-arrow.png" style="width:10px;height:20px">
              </div>
            </el-col>
          <el-card class="box-card" style="position:absolute;height:500px;width:600px;top:0px;z-index:20;left:200px;display:none;" ref="div">
                <ul>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li> 
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>
                  <li style="margin-top:20px;margin-left:20px;"><img src=/imgs/item-box-1.png style="width:60px;height:60px">小米9</li>         
                </ul>
           </el-card >
        </el-row>
        <el-row style="color:#fff;" @mouseover.native="mouseOver($event)" ref="div56" @mouseleave.native="mouseLeave()">
          <el-col :span="4" ><div ><p></p></div></el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-light"  style="margin-top:30px;"  ref="div1" >
              <a href="#">电视</a>  <a href="#">盒子</a>
          </div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple-light" style="margin-top:25px;font-size:25px;">
              <img src="/imgs/icon-arrow.png" style="width:10px;height:20px" >
              </div>
            </el-col>
        </el-row>
        <el-row style="color:#fff;" @mouseover.native="mouseOver($event)" ref="div56" @mouseleave.native="mouseLeave()">
          <el-col :span="4" ><div ><p></p></div></el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-light"  style="margin-top:30px;"  ref="div1" >
              <a href="#">笔记本</a>  <a href="#">显示器</a>
          </div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple-light" style="margin-top:25px;font-size:25px;">
              <img src="/imgs/icon-arrow.png"  style="width:10px;height:20px">
              </div>
            </el-col>
        </el-row>
        <el-row style="color:#fff;" @mouseover.native="mouseOver($event)" ref="div56" @mouseleave.native="mouseLeave()">
          <el-col :span="4" ><div ><p></p></div></el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-light"  style="margin-top:30px;"  ref="div1" >
              <a href="#">家电</a>  <a href="#">插线板</a>
          </div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple-light" style="margin-top:25px;font-size:25px;">
              <img src="/imgs/icon-arrow.png" style="width:10px;height:20px" >
              </div>
            </el-col>
        </el-row>
        <el-row style="color:#fff;" @mouseover.native="mouseOver($event)" ref="div56" @mouseleave.native="mouseLeave()">
          <el-col :span="4" ><div ><p></p></div></el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-light"  style="margin-top:30px;"  ref="div1" >
              <a href="#">出行</a>  <a href="#">穿戴</a>
          </div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple-light" style="margin-top:25px;font-size:25px;">
              <img src="/imgs/icon-arrow.png" style="width:10px;height:20px" >
              </div>
            </el-col>
        </el-row>
        <el-row style="color:#fff;" @mouseover.native="mouseOver($event)" ref="div56" @mouseleave.native="mouseLeave()">
          <el-col :span="4" ><div ><p></p></div></el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-light"  style="margin-top:30px;"  ref="div1" >
              <a href="#">智能</a>  <a href="#">路由器</a>
          </div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple-light" style="margin-top:25px;font-size:25px;">
              <img src="/imgs/icon-arrow.png" style="width:10px;height:20px" >
              </div>
            </el-col>
        </el-row>
        <el-row style="color:#fff;" @mouseover.native="mouseOver($event)" ref="div56" @mouseleave.native="mouseLeave()">
          <el-col :span="4" ><div ><p></p></div></el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-light"  style="margin-top:30px;"  ref="div1" >
              <a href="#">电源</a>  <a href="#">配件</a>
          </div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple-light" style="margin-top:25px;font-size:25px;">
              <img src="/imgs/icon-arrow.png" style="width:10px;height:20px">
              </div>
            </el-col>
        </el-row>
        <el-row style="color:#fff;" @mouseover.native="mouseOver($event)" ref="div56" @mouseleave.native="mouseLeave()">
          <el-col :span="4" ><div ><p></p></div></el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-light"  style="margin-top:30px;"  ref="div1" >
              <a href="#">耳机</a>  <a href="#">音箱</a>
          </div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple-light" style="margin-top:25px;font-size:25px;">
              <img src="/imgs/icon-arrow.png" style="width:10px;height:20px" >
              </div>
            </el-col>
        </el-row>
     </div>
    
  </div>
</template>
<script>
 export default {
     name: "HeadRotation",
     data () {
         return {

         };
     },
    methods:{
      mouseOver(event){
 
        this.$refs.div.$el.style.display="block"  
      },
      mouseLeave(){
       this.$refs.div.$el.style.display="none"
      
     },
     myclick(){
       alert(123);
     }
    },
     mounted() {
        new Swiper('.swiper-container', {
          loop:true,
         
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
      });
              
    },
   
}
</script>
<style lang="scss" scoped>
 .price{
    text-align: center;
    color: #ff6700;
 }
 .banner {
   width: 100%;
 }
 .swiper-slide img {
     width: 100%;
     min-width: 1200px;
     height: 100%;
 }
 a:link{text-decoration:none; }
 a:visited{text-decoration:none;}
 a:hover{text-decoration:none;}
 a:active{text-decoration:none;}
 a{
   color:white
 }
 ul li{
   float: left;
 }
 .title {
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
}
h2 {
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.title1{
  text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    color: #333;
}
h3{
  margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.desc{
      margin: 0 10px 10px;
      height: 18px;
      font-size: 12px;
      color: #b0b0b0;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
 </style>