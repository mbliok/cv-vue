<template>
  <div class="list">
    list component
 <ul>
             <li v-for="project in postData">
              <p> {{project.id}}</p>
              <router-link v-bind:to="'/works/' + project.id">view</router-link>
              </li>
          </ul>
  </div>
</template>

<script>
import postData from './data.json';

export default {
  name: 'list',
  // props: ['postData'],
  data () {
    return {
       postData: postData,
       projects: []
    }
  },
  methods: {
    
  },
   created: function() {
     
    }
}
</script>


<style lang="scss">
  @import "./../style/main.scss";
</style>
