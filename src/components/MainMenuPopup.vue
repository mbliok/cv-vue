<template>
  <div class="MainMenuPopup">
    <aside class="panel--left">
        <div class="route-link--home animated  slideInDown"><router-link to="/" >
      <h2>emoh</h2>
        </router-link></div>
        <div class="route-link--work animated  slideInDown">
          <router-link to="/work" ><h2>krow</h2></router-link></div>
        <div class="route-link--bio animated  slideInDown"><router-link to="/bio" ><h2>oib</h2></router-link></div>
        <div class="route-link--info animated  slideInDown"><router-link to="/" ><h2>ofin</h2></router-link></div>
    </aside>
    <aside class="panel--right">
        <button v-on:click="$parent.$emit('emit-this-event')">x</button>
        <div class="recent-work panel-fade animated fadeIn">
          <div class="list">
          <h4>Recent Work</h4>
          <list></list>
          </div>
        </div>
     
    </aside>

   
  
  </div>
</template>

<script>
  //import postData from './data.json';
  import List from './list';

export default {
  name: 'mainmenupopup',

  data () {
    return {
     // postData: postData,
      projects: ''
    }
  },
  methods: {
   
  },
  created: function() {
  
  },
  components:{
      List
  }
}
</script>

<style lang="scss">
 
  @import "./../style/main.scss";
  .MainMenuPopup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: #000;
    color: #fff;
  }
 /* =======================
   ROUTE list-style: none; 
   ======================= */ 
  %_route-link{
      height: 25%;
      width: 50%;

      a{
        color:#0f0e0e;
        text-decoration:none;
        text-transform:uppercase;
        
        h2{
          font-size: 26vh;
          margin: 0;
          display: inline;
        }
      }
  }
  .route-link{
     @extend %_route-link;

     &--home {
        @extend %_route-link;
          -webkit-animation-duration: 800ms;
           text-align:right;
           width: 100%;
     }
     &--work {
        @extend %_route-link;
          -webkit-animation-duration: 1000ms;
     }
     &--bio {
        @extend %_route-link;
          -webkit-animation-duration: 1200ms;
           text-align:right;
           width: 100%;
     }
     &--info {
        @extend %_route-link;
          -webkit-animation-duration: 1400ms;
     }
  }
 /* =======================
   COLUMN TEMPLATE 
   ======================= */ 
%_panel {
    position: absolute;
    width: 50%;
    height: 100%;
    overflow: hidden;
}

.panel {
    @extend %_panel;

    &--left {
        @extend %_panel;
         left: 0;
         top: 0;
    }
     &--right {
        @extend %_panel;
         right: 0;
         top: 0;

         
    }
}
.panel-fade{
   -webkit-animation-duration: 2000ms;
  -webkit-animation-delay: 500ms;
}
.recent-work{
    position: relative;
    width: 100%;
    height: 100%;
    display: table;
    
    h4{
      color:gray;
    }
    ul{
      li{
        a{
          position: relative;
          display: inline-block;
          width: 480px;
          border-top: 1px solid #333637;
          padding:24px;
          font-weight: 400;
          box-sizing: border-box;
          text-decoration: none;
          color:$white;
          font-size: 20px;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
    & .list {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        font-size: 16px;
        padding-bottom: 40px;
    }
  }

</style>
