<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <h2>User Profiles</h2>
      <ul>
        <li v-for="(id, index) in userIds" :key="index">
          <router-link :to="{ name: 'ViewProfile', params:{user_id:id}}">
            <span> Profile {{ id }}</span>
          </router-link>
        </li>
      </ul>
      <ul>
        <li><button @click="goBack"> Go Back</button></li>
        <li>
          <p>To redirect a page we use this.$router.push. 
            We can also go back and forward in our navigation history </p> 
          <button @click="goHome">Redirect to home</button>
        </li>
        <li><button @click="goForward"> Go Forward</button></li>
      </ul>
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      userIds: ['1','2','3','4']
    }
  },
  methods:{
    goHome() {
      this.$router.push({ name: 'Home' })
    },
    goBack(){
      this.$router.go(-1)
    },
    goForward(){
      this.$router.go(+1)
    }
  }
}
/**
 * ouput a link for all the above profiles. 
 * we are sayimng that router link is linking to ViewProfile component
 * params: is an pbject in which we pass the userId which will be equal to the id here in array
*/
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
