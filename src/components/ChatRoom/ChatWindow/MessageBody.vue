<template>
  <div class="message-container">  
      {{this.body}}     
  </div>
</template>

<script>

export default {
  name: 'MessageBody',
  props: [
    'body'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 

div.message-container {
    border-radius: 5px;
    background: rgb(255, 230, 244);
    margin-left: 4px;
    margin-right: 4px;
    color: #545454;
    flex: 1;
    padding: 8px;
    word-wrap: break-word;
    width: 200px;
}
</style>
