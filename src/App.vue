<template>
   <div id="app">
     <ErrorMessage v-if="errorMessage"
                    :errorMessage="errorMessage"/> 
     <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    errorMessage: {
      get() { 
        return this.$store.getters['errorMessage']; 
      },
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fb406c;
  margin-top: 60px;
}
</style>
