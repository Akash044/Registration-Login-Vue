<template>
    <div id="app">
    {if()<h1 class="title">Sign in</h1>
    
    <form @submit.prevent="handleLoginBtn(email,password)">
      
      <input class="input-field" type="email" v-model="email" name="email" id="email" placeholder="Enter Email..." required>
      <input class="input-field" type="password" v-model="password" name="password" id="password" placeholder="Enter Your Password" required>
  
      <input type="submit" value="Login">
    </form>
    <div><h2>You don't have an account? <span class="sign-in">Sign up.</span></h2></div>}
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'Login',
    data(){
      return{
        email:'',
        password:'',
        message:'',
      }
  },
  methods:{
    handleLoginBtn(email,password){
      console.log(email,password)
  
      axios.post('http://localhost:8080/api/login',{
        email:email,   
        password:password,
      })
    .then(res=>{
      console.log("res--->",res.data)
      const {isSuccess, message, user} = res.data;
        if(isSuccess){
          
          this.message = user.firstName + " " + user.lastName + " " + "You logged in successfully" ;
        }
      })
    .catch(error=>{
        console.log("error-->",error);
      })
      
    },
  }
  }
  </script> 
  
  <style scoped>
  
      #app {
        background-color: rgb(65,184,131);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        border-radius: 8px;
        width: 30%;
        margin: auto;
        
      }
  
      h1 {
        text-align: center;
        color: #333333;
      }
  
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
  
      label {
        margin-bottom: 8px;
        color: #555555;
      }
  
      .input-field {
        width: 60%;
        padding: 10px;
        margin-bottom: 16px;
        box-sizing: border-box;
        border: 1px solid #cccccc;
        border-radius: 4px;
        font-size: 14px;
      }
  
      input[type="submit"] {
        background-color: rgb(46, 69, 95);
        color: #ffffff;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      }
  
      input[type="submit"]:hover {
        background-color: #3c627a;
      }
  
      div {
        margin-top: 20px;
        text-align: center;
      }
  
      p {
        color: #555555;
        margin-bottom: 8px;
      }
      .sign-in{
        cursor: pointer;
      }
      .sign-in:hover{
        text-decoration: underline;
      }
  </style>
  