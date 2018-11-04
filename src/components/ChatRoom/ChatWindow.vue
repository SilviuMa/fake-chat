<template>
  <div class="window-container">  
    <div class="header"> 
      <button class="log-out-btn"
              @click="attemptLogout"> Log out </button>
    </div>         
    <div class="top"
          id="messageList"
          ref="message-list">
      <p
        class="message" 
        v-for="(message,index) in this.messageList"
         :key="index">
        {{message.name}}: <MessageBody 
                            :body="message.body"/>
      </p>
    </div>
    <div class="bottom">      
      <form @submit.prevent="sendMessage()"
             autocomplete="off" >        
        <textarea 
          cols="40" rows="5"
          class="message-input"
          id="name" 
          placeholder="Your message.."
          v-model="messageToBeSent"/>      
        <input 
          type="submit"
          class="submit"
          value="Send">
      </form>
    </div>
  </div>
</template>

<script>
import MessageBody from './ChatWindow/MessageBody'
import { logoutUser } from '@/utils/auth'

export default {
  name: 'ChatWindow',
  components: {
    MessageBody
  },
  updated: function() {
    var messageList = this.$el.querySelector("#messageList");
    messageList.scrollTop = messageList.scrollHeight;
  }, 
  computed: {
    messageToBeSent: {
        get() { return this.$store.getters['chat/messageToBeSent'] },
        set(value) { 
          this.$store.dispatch('chat/updateMessageToBeSent', value); 
        }
    },
    messageList: {
        get() { return this.$store.getters['chat/messageList'] },
    }
  },
  methods: {
    sendMessage: function() {
      try {
        this.$socket.emit('client_message', this.messageToBeSent);
      }
      finally {
        this.$store.dispatch('chat/updateMessageToBeSent', ''); 
      }
    },
    attemptLogout: function() {
      logoutUser().then( resp => {
        if(resp.error) {
          this.$store.dispatch('UpdateErrorMessage', resp.msg);
        } else {
          this.$store.dispatch('ResetErrorMessage');
          this.$router.push('/');
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  

.window-container {
  height: 99%;
  padding: 5px;
  display: flex; 
  flex-direction: column; 
}

.window-container >.header {
  width: 100%;
  background: white;
  margin-bottom: 5px;
}

.header >.log-out-btn {
  width: 100%;
  color: white;
  background-color: #fb406c;
  border:none;
  cursor: pointer;
}

.header >.log-out-btn:hover {
    opacity: 0.6;
    transition: 0.3s;
}

.window-container >.top {
  width: 100%;
  flex: 1; 
  background: white;
  margin-bottom: 5px;
  overflow: scroll;
}

.window-container >.bottom {
  position: relative;
  width: 100%;
  height: 70px;
  bottom: 0;
}

.window-container >.bottom > form {
  display: flex; 
  flex-direction: row; 
}

input[type=submit] {
    height: 60px;
    margin: auto;
    width: auto;
    background-color: #fb406c;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.3s; 
}

input[type=submit]:hover {
    opacity: 0.6;
    transition: 0.3s;
}

.message-input {
  margin: 1px;
  border: none;
  width: 80%;
  flex: 1; 
  height: 65px;
  resize: none;
}

.message-input {
    outline: none;
}

p.message {
  text-align: left;
  margin-left: 5px;
  display: flex;
}
</style>
