<template>
    <div id="continuex" >
        <el-row>
            <el-col :span="12" style="height:800px;">
                <div class="grid-content bg-purple">
                     <div class="swiper-container gallery-top">
                       
                         <div class="swiper-wrapper">
                            <div class="swiper-slide" style="background-image:url(/imgs/products/m1.jpg);width:100%;height:500px;"></div>
                            <div class="swiper-slide" style="background-image:url(/imgs/products/m2.jpg);width:100%;height:500px;"></div>
                            <div class="swiper-slide" style="background-image:url(/imgs/products/m3.jpg);width:100%;height:500px;"></div>
                            <div class="swiper-slide" style="background-image:url(/imgs/products/m4.jpg);width:100%;height:500px;"></div>
                            <div class="swiper-slide" style="background-image:url(/imgs/products/m5.jpg);width:100%;height:500px;"></div>
                            </div>
                            <!-- Add Arrows -->
                            <div class="swiper-button-next swiper-button-black" ></div>
                            <div class="swiper-button-prev swiper-button-black" ></div>
                        </div>
                          <div class="swiper-container gallery-thumbs">
                            <div class="swiper-wrapper">
                            <div class="swiper-slide" style="background-image:url(/imgs/products/m1.jpg);width:200px;height:150px;"></div>
                            <div class="swiper-slide" style="background-image:url(/imgs/products/m2.jpg);width:200px;height:150px;"></div>
                            <div class="swiper-slide" style="background-image:url(/imgs/products/m3.jpg);width:200px;height:150px;"></div>
                            <div class="swiper-slide" style="background-image:url(/imgs/products/m4.jpg);width:200px;height:150px;"></div>
                            <div class="swiper-slide" style="background-image:url(/imgs/products/m5.jpg);width:200px;height:150px;"></div>
                            </div>
                        </div>
                </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                  <h1 id="pro-name">
                    HUAWEI nova 7 5G 前置3200万像素高清自拍 后置6400万变焦四摄  麒麟985 5G SoC 芯片 8GB+128GB 全网通版（绮境森林）
                  </h1>
                <div class="product-slogan-hide" >
                  <a class="product-slogan-link">【消暑换新节】①享6期免息②整点赠50元花币卡③积分双倍抵现,最高抵50元④V1及以上老用户加赠延保|以旧换新最高补贴1818元，点击参与>>></a>
                  <span style="font-family:微软雅黑;">麒麟985 5G SoC 旗舰级芯片；前置3200万像素高清自拍，后置6400万变焦四摄，前后双景录像； 新一代OLED极点全面屏；40W超级快充，4000mAh大电池</span>
                </div>
                <div class="product-info">
                    <ul>
                      <li class="pricefont">价格</li>
                      <li>
                        <span><em>¥</em>2999元</span></li>
                    </ul>
                    <div style="clear: both;"></div>
                     <ul>
                      <li class="pricefont">促销</li>
                      <li>
                       <div class="product-prom-item clearfix">
                         <div class="tag"><em >一站式换新</em></div>
                         <div class="product-prom-word">
                            APP专享，最高补贴530元 
                         </div>
                       </div>
                       <div class="product-prom-item clearfix">
                         <div class="tag"><em >整点赠送</em></div>
                         <div class="product-prom-word">
                           0点/10点/16点/20点购买前200名赠100元花币卡（nova系列共用）
                         </div>
                       </div>
                       <div class="product-prom-item clearfix">
                         <div class="tag"><em >积分双倍抵现</em></div>
                         <div class="product-prom-word">
                           积分双倍抵现，最高抵现50元，下单即可使用
                         </div>
                       </div>
                       <div class="product-prom-item clearfix">
                         <div class="tag"><em >分期免息</em></div>
                         <div class="product-prom-word">
                           银联、掌上生活、花呗、工行分期支付可享免息
                         </div>
                       </div>
                       <div class="product-prom-item clearfix">
                         <div class="tag"><em >赠送积分</em></div>
                         <div class="product-prom-word">
                           购买即赠商城积分，积分可抵现~
                         </div>
                       </div>
                      </li>
                    </ul>
                </div>
                 <el-divider></el-divider>
                 <el-row>
                    <el-col :span="4"><div class="product-choose ">选择颜色</div></el-col>
                    <el-col :span="20">
                      <div class="ulfloat">
                      <ul>
                        <li>亮黑色</li>
                        <li>仲夏紫</li>
                        <li>奇景森林</li>
                        <li>密语红</li>
                      </ul>
                      </div>
                    </el-col>
                </el-row>
                 <el-row style="margin-top:30px;">
                    <el-col :span="4"><div class="product-choose ">选择版本</div></el-col>
                    <el-col :span="20">
                      <div class="ulfloat">
                      <ul>
                        <li>亮黑色</li>
                        <li>仲夏紫</li>
                        <li>奇景森林</li>
                        <li>密语红</li>
                      </ul>
                      </div>
                    </el-col>
                </el-row>
              </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle.js'
export default {
    data:{

    },
    mounted(){
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 5,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 5,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
    }

}
</script>
<style scoped>
 #continuex{
    width: 1226px;
    margin: 0 auto;
}
.swiper-container {
      width: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      height: 80%;
      width: 100%;
    }
    .gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-thumb-active {
      opacity: 1;
    }
#pro-name{
  font-size: 21px;
  overflow: hidden;
   margin-bottom: 10px;
   font-weight: 540;
   margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #3a3a3a;
    
}
body{
  font: 12px/1.5 "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;

}
.product-slogan-hide {
      height: 40px;
    
      overflow: hidden;
      transition:height 0.5s;
     -webkit-transition:height 0.5s;
  	
}
 .product-slogan {
    font-size: 14px;
    padding-right: 40px;
    margin-bottom: 12px;
    position: relative;
    top: -3px;
    line-height: 20px;
}
.product-slogan-link {
    text-decoration: underline;
    margin-right: 15px;
    color: #ca141d;  
}

.product-slogan-hide:hover{
  height: 100px;
}
.product-info {
    margin-top:10px;
    background: #f5f5f5;
    padding-top: 14px;
    padding-bottom: 3px;
    height:140px;
    margin: 50px;;
    margin-left:0px;
    transition:height 0.5s;
   -webkit-transition:height 0.5s;
    width: 100%;
       overflow: hidden;
   
}

.product-info:hover{
  height:180px;
}
.product-info ul li{
  float: left;
}
.product-info ul li span{
  color: #ca141d;
  font-size: 24px;
}
.product-info ul .pricefont{
  margin-top:5px;
}
.product-prom-item{
  width: 500px;
}
.product-prom-item .tag {
    float: left;
    line-height: 18px;
    height: 18px;
    width: 100px;
    border: 1px solid #ca141d;
    padding: 0 6px;
    min-width: 24px;
    color: #ca141d;
    text-align: center;
    margin-right: 10px;
    margin-top: 5px;
}
em{
    font-style: normal;
    font-weight: 400;
}
.product-prom-item .product-prom-con {
    float: right;
    line-height: 1.5;
    margin-top: 6px;
    width: 310px;
    overflow: hidden;
 
}
.product-prom-word{
  font:12px/1.5 "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
      color: #3a3a3a;
     margin-top:5px;

}
.product-choose {
  font: 12px/1.5 "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
   color: #3a3a3a;
}
.ulfloat ul li{
  float: left;
 
}
.ulfloat{
  width: 100%;
}
.ulfloat ul li{
  border: 1px black solid;
  width: 80px;
  text-align: center;
 
}

</style>