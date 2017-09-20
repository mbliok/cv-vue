<template>
  <div class="list">
    List component

    <ul>
      <li v-for="project in postData">
        <p> {{project[1].id}}</p>
      
         <router-link v-bind:to="'/works/' + project/2">{{project[1].title}}</router-link>
      </li>
    </ul>
   
  </div>
</template>

<script>

 import postData  from './data.json';
 // console.log(postData)
export default {
  name: 'list',
  data () {
    return {
       postData: postData,
       projects: []
    }
  },
  methods: {
      // getData() {
      //   this.$http.get('./data.json',
      //     {
      //       headers: {
      //         'Content-Type': 'application/json'
            
      //       }
      //     })
      //     .then((response) => {
      //       this.projects = response.data
      //       console.log(response.data)
      //     })
      // }  
  },
   created: function() {
     // this.getData()
    
    }
}
</script>


<style lang="scss">
  @import "./../style/main.scss";
</style>
