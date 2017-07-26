<template>
  <div class="home">
   home comp
    <button v-on:click="collapsedMenu = !collapsedMenu">Show menu</button> 
    <div v-show="collapsedMenu">
      <main-menu-popup></main-menu-popup>
    </div>
  </div>
</template>

<script>
import MainMenuPopup from './../components/mainmenupopup'  


export default {
  name: 'home',
 // props: ['collapsedMenu'],
  data () {
    return {
      collapsedMenu: false
    }
  },
  methods: {
     
  },
  components:{
      MainMenuPopup
  },
  created() {
    this.$on('emit-this-event', function () {
      this.collapsedMenu = false
    })
  }
}
</script>


<style lang="scss">
  
  @import "./../style/main.scss";
</style>
