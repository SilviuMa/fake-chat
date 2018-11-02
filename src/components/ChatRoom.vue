<template>
  <div class="container">
    <div id="youtube" class="youtube-container">
      <iframe 
        src="https://www.youtube.com/embed/uTpDWzfRMg8" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    <div id="chat" class="chat-container">
      <ChatWindow />
    </div> 
  </div>
</template>

<script>
import ChatWindow from './ChatRoom/ChatWindow'

export default {  
  name: 'ChatRoom',
  components: {
    ChatWindow
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
.container {
  display: inline-flex;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 5px;
  width: 90%;
  margin: auto;
  top: 20%;   
  height: 750px;
}

.youtube-container {
	position:relative;
	padding-bottom:46.25%;
	padding-top:30px;
  width: 80%;
	height:0;
	overflow:hidden;
}

.youtube-container iframe, .youtube-container object, .youtube-container embed {
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
}

.chat-container {
  width: 20%;
}
</style>
