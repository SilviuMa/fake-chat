<template>
  <div class="container">
    <form @submit.prevent="attemptLogin()">        
      <label for="name">Give yourself a cool nickname...</label>
      <input type="text" id="name" placeholder="Your nickname.."
              v-model="nickname">      
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { loginUser } from '@/utils/auth'


export default {
  name: 'Login',
  methods: {
    attemptLogin: function() {
      loginUser(this.nickname).then( resp => {
        if(resp.error) {
          this.$store.dispatch('UpdateErrorMessage', resp.msg);
        } else {
          this.$store.dispatch('ResetErrorMessage');
          this.$router.push('chat');
        }
      });
    }
  },
  computed: {
    nickname: {
        get() { 
          return this.$store.getters['login/getNickname']; 
        },
        set(value) { 
          this.$store.dispatch('login/updateNicknameInput', value); 
        },
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  font-size: 20px;
  color: #999999;
}

input[type=text], select, textarea {
    width: 100%; 
    padding: 12px;  
    border: 1px solid #ccc; 
    border-radius: 4px; 
    box-sizing: border-box; 
    margin-top: 6px; 
    margin-bottom: 16px; 
    resize: vertical 
}

input[type=submit] {
    background-color: #fb406c;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s; 
}

input[type=submit]:hover {
    opacity: 0.6;
    transition: 0.3s;
}

.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    width: 400px;
    margin: auto;
    top: 50%;    
    margin-top: 200px;
}
</style>
