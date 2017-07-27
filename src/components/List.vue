<template>
  <div class="list">
    List component

    <ul>
      <li v-for="project in projects">
        <p> {{project.id}}</p>
        <strong>{{project.ProjectName}}</strong>
         <router-link v-bind:to="'/works/' + project.id">view</router-link>
      </li>
    </ul>
   
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
       projects: ''
    }
  },
  methods: {
      getData() {
        this.$http.get('http://demo7289633.mockable.io/',
          {
            headers: {
              'Content-Type': 'application/json'
             // 'JsonStub-User-Key': 'a0120b30-7e3a-4cfa-b77a-d465d85318a6',
            //  'JsonStub-Project-Key': '8abda6bb-1a5b-4229-89cf-074b5df11332'
            }
          })
          .then((response) => {
            this.projects = response.data
            console.log(response.data)
          })
      }  
  },
   created: function() {
      this.getData()
    
    }
}
</script>


<style lang="scss">
  @import "./../style/main.scss";
</style>
