<template>
  <div class="works">
    My works component inject list projects

    <list></list>
    

  </div>
</template>

<script>
  //import postData from './data.json';
  import List from './list';
  //import { apiData } from './../config'


  export default {
    name: 'works',
    data() {
      return {
       
      }
    },
    methods: {
    
    },
    created: function() {
     
    },
    components: {
      List
    }
  }

</script>


<style lang="scss">
  @import "./../style/main.scss";
</style>