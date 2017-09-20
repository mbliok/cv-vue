<template>
  <div class="project-detail">
   ProjectDetail comp
  <p> {{project.ProjectName}}</p>
  <!--<pre>  {{ $data}} </pre>
 -->
    </div>
</template>

<script>
import jsonServiceData from './data.json';

import List from './list';
export default {
  name: 'ProjectDetail',
  data () {
    return {
      project: ''
    }
  },
  methods: {
    getDataId(id) {
        this.$http.get(jsonServiceData+id,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
            this.project = response.data
            console.log(response.data)
          })
      }  
  },
   created: function() {
     this.getDataId(this.$route.params.id)
    }
}
</script>

<style lang="scss">
  @import "./../style/main.scss";
</style>
