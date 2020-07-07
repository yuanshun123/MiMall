<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import jsonp from 'jsonp'

export default {
  name: 'App',
  data(){
    return {
      dta:null
    }
  },
  components: {
    HelloWorld
  },
  mounted(){
    let url="https://www.imooc.com/common/adver-getadver";
    jsonp(url,(err,res)=>{
      let resoult=res;
      this.dta=resoult;
      console.log(this.dta);

     
      
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
