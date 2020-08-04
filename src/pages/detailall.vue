<template>
    <div id="detailall">
        <div class="detailall1">
            <div class="detailall1_font">
                <img src="/imgs/details/section1_1.png" class="img">
                    <div class="transi-up">
                        <spn class="current-price">
                            <sup>¥</sup>
                            <i class="price-num">1899</i>
                            <span class="price-per">起</span>
                        </spn>
                    </div>
            </div>
        </div>
         <div class="detailall2">
            <div class="content">
                <div class="title">敢想,敢创作</div>
            </div>
           <h2  class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s" data-wow-offset="2">核心功能</h2>
        </div>
        <div class="detailall3">
            <img src="/imgs/details/section4_1.png" style="width:70%;height:80;margin-top:10%;">
            <div class="detail-title wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s" data-wow-offset="2">
                <span>设计</span>
                <br>
                轻轻的青春版
                <br>
                轻轻地来到你手中
            </div>
            <div class="desc_text  wow fadeInUp" data-wow-duration="0.75s" data-wow-delay="0.75s" data-wow-offset="2">
                轻薄的设计，设计起来并不轻松。为了追求更好的手感，我们重新定制了
                <br>
                屏幕、相机，并重新设计了散热架构，厚度一降再降，最终薄至 7.88mm*，
                <br>
                轻至192g*。一款轻巧非凡的 5G 手机，由此登场。
            </div>
        </div>
       <div class="swiper-container">
            <div class="swiper-wrapper">
                    <div class="swiper-slide" style="background-image:url(/imgs/details/section5_1.jpg);width:100%;background-repeat: no-repeat;"></div>
                    <div class="swiper-slide" style="background-image:url(/imgs/details/section5_2.jpg)"></div>
                    <div class="swiper-slide" style="background-image:url(/imgs/details/section5_3.jpg)"></div>
                    <div class="swiper-slide" style="background-image:url(/imgs/details/section5_4.jpg)"></div>
                    <div class="swiper-slide" style="background-image:url(/imgs/details/section5_5.jpg)"></div>
            </div>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="detail-title wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s" data-wow-offset="2" style="z-index:2;">
               舒适的手感中，
                <br>
                透着明亮上扬的香甜。
                <br>
            </div>
            <div class="desc_text  wow fadeInUp" data-wow-duration="0.75s" data-wow-delay="0.75s" data-wow-offset="2">
                轻薄的设计，设计起来并不轻松。为了追求更好的手感，我们重新定制了
                <br>
                屏幕、相机，并重新设计了散热架构，厚度一降再降，最终薄至 7.88mm*，
                <br>
                轻至192g*。一款轻巧非凡的 5G 手机，由此登场。
            </div>

       </div>
            
    </div>
</template>
<script>
import WOW from 'wowjs';
export default {
    data:{

    },
    mounted(){
     let wow = new WOW.WOW({
	  boxClass: 'wow',
	  animateClass: 'animated',
	  offset: 0,
	  mobile: true,
	  live: true
	});
    wow.init();
      var swiper = new Swiper('.swiper-container', { 
     centeredSlides: true,
      autoplay:2000, //swiper3.0
     //autoplay:true,   //swiper4.0
      effect: 'fade',
      loop: true,//是否可循环

       pagination:'.swiper-pagination',
       direction: 'horizontal',
       paginationClickable: true,
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
       
    }
    
}
</script>
<style scoped>
.detailall1{
    height: 45rem;
    width: 100%;
    background-image: url(/imgs/details/section1.jpg);
    background-position: 90%;
    background-repeat: no-repeat;
    background-size: cover;
    line-height: 1;
    text-align: left;
    position: relative;
    -webkit-font-smoothing: antialiased;
}
.img{
    width: 400px;
    height:50px;
    padding-top:150px;
    padding-left:150px;
    opacity: 0;
    animation:mymove 1s ;
    animation-iteration-count:1;
    animation-fill-mode:forwards;
	/*Safari 和 Chrome:*/
	-webkit-animation:mymove 1s ;
    -webkit-animation-iteration-count:1;
    -webkit-animation-fill-mode:forwards;
}
@keyframes mymove
	{
	from { opacity: 0; padding-top:150px;}
	to { opacity: 1; padding-top:130px;}
}
@-webkit-keyframes mymove
{
    from { opacity: 0; padding-top:150px;}
    to { opacity: 1; padding-top:130px;}
}
 .transi-up {
   opacity: 0;
   transform: translateZ(0);
   transition-delay: .5s;
   transition: opacity .8s,transform .8s,-webkit-transform .8s;
   font-size: 2rem;
   color:#4858e7;
   margin-left:220px;
   font-style: normal;
   font-family: Avenir,Arial;
   animation:font 5s ;
   animation-iteration-count:1;
   animation-fill-mode:forwards;
	/*Safari 和 Chrome:*/
   -webkit-animation:font 5s ;
   -webkit-animation-iteration-count:1;
   -webkit-animation-fill-mode:forwards;

}
@keyframes font
	{
	from { opacity: 0;}
	to { opacity: 1;}
}
@-webkit-keyframes font
{
    from { opacity: 0; }
    to { opacity: 1;}
}
.detailall2{
     height: 45rem;
    width: 100%;
    background-image: url(/imgs/details/section2.jpg);
    background-position: 90%;
    background-repeat: no-repeat;
    background-size: cover;
    line-height: 1;
    text-align: left;
    position: relative;
    -webkit-font-smoothing: antialiased;
    
}
.content .title{
        opacity: 1;
        transform: translateZ(0);
        transition-delay: .1s;
        font-family: F583ee;
        font-size: 45px;
        font-weight: 500;
        text-align: center;
        padding-top: 10%;
        line-height: 1.1rem;
        transition: opacity .8s,transform .8s,-webkit-transform .8s;
       
        color: #333;
}
.title :hover{
        animation:movefont 4s ;
        animation-iteration-count:1;
        animation-fill-mode:forwards;
        /*Safari 和 Chrome:*/
        -webkit-animation:movefont 4s ;
        -webkit-animation-iteration-count:1;
        -webkit-animation-fill-mode:forwards;
}
@keyframes movefont 
	{
	from { opacity: 0;}
	to { opacity: 1;}
}
@-webkit-keyframes movefont
{
    from { opacity: 0; }
    to { opacity: 1;}
}
.detailall3{
    height: 45rem;
    width: 100%;
    background-image: url(/imgs/details/section4.png);
    background-position: 90%;
    background-repeat: no-repeat;
    background-size: cover;
    line-height: 1;
    text-align: left;
    position: relative;
    -webkit-font-smoothing: antialiased;
}
.detail-title{
    position:absolute;
    top: 100px;
    left: 800px;
    line-height: 70px;
    transform: translateZ(0);
     opacity: 1;
     font-family: F583ee;
     font-size: 50px;
    font-weight: 500;
  
}
.desc_text{
     position:absolute;
    top: 340px;
    left: 800px;
    font-size: 20px;
    color: #7c7c7c;
    line-height: 30px;
    font-weight: 500;
    font-family: F583ee;
}
   .swiper-container {
      width: 100%;
      height: 650px;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
    }
   .section__content{
       position: absolute;
       
   }
   .swiper-container .detail-title{
    position:absolute;
    top: 150px;
    left: 250px;
    font-size: 40px;
    line-height: 50px;
    color: #000;
    font-family: F583ee;
    font-weight:700;
}
 .swiper-container .desc_text{
     position:absolute;
    top: 250px;
    left: 250px;
    font-size: 20px;
    color: #7c7c7c;
    line-height: 30px;
    font-weight: 6
    00;
    font-family: F583ee;
    z-index: 2;
}

</style>