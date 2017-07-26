<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <home></home>
    <works></works>
 
  </div>
</template>

<script>
import Home from './components/Home'
import Works from './components/works'
import Bio from './components/bio'
import ProjectDetail from './components/ProjectDetail'
import List from './components/List'


export default {
  name: 'app',
  components: {
   Home,
   Works,
   ProjectDetail,
   Bio,
   List
  }
}
</script>

<!--
<style lang="scss" >
  @import './style/main.scss';
</style>-->
