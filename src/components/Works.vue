<template>
  <div class="works">
    My works component
   
  <list></list>

 
  </div>
</template>

<script>
import postData from './data.json';
import List from './list';

export default {
  name: 'works',
  data () {
    return {
       postData: postData,
       projects: []
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
</style>
