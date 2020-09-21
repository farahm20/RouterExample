<template>
  <div class="view-profile">
      <h2>Profile for {{ userId }}</h2>
      <p>VueJs recycling data and doesnt update data. SO no use
          changing userid in broweser without 'watch' object. It 
          will not change
          We set up watch and tell Vuejs that when that variable
          we need to watch that might change. 
      </p>

  </div>
</template>

<script>
export default {
    name: 'ViewProfile',
    data() { //method with empty object
        return {
            //access the route paramterer from the current route here
            userId: this.$route.params.user_id
            //this should be same as the path in index.js
            //vue.js is grabbing the routeparameteruserId from the
            //route object. 

        }
    },
    method: {
        updateId(){
            //we want to show the new Id that the user types in the browser so
            this.userId = this.$route.params.user_id

        }
    }, 
    watch: {
        $route: 'updateId' //here we are watching the updateId which will be a method
    } 

}
</script>

<style>

</style>