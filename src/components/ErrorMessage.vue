<template>
  <div class="errMsg">
    {{errorMessage}}
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: [
    errorMessage
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.errMsg {
  position: fixed;
  bottom: 0;
  right: 0;
  background: red;
  color: white;

}
</style>
