<template>
  <div id="app">
    <router-view/>
    <!-- <HLfooter></HLfooter> -->
  </div>
</template>

<script>
import HLfooter from './public/HLfooter'
export default {
  name: 'App'
  // components:{
  //   HLfooter
  // }

  
}

</script>

<style>
html,body{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
