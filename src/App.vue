<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

//import jsonp from 'jsonp'
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return {
      dta:null
    }
  },
  components: {
   
  },
  mounted(){
   // let url="https://www.imooc.com/common/adver-getadver";
   /*
    jsonp(url,(err,res)=>{
      let resoult=res;
      this.dta=resoult;
      console.log(this.dta); 
      
    });*/
    axios.get('/api/common/adver-getadverlistbymarking?marking=global_newcomer')
      .then( (response) => {
        console.log(response);
     })
      .catch( (error) => {
        console.log(error);
    });
  }
}
</script>

<style>


</style>
