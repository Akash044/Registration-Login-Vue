<template>
    <div id="app">
    <h1 class="title">Sign in</h1>
    
    <form @submit.prevent="handleLoginBtn(email,password)">
      
      <input class="input-field" type="email" v-model="email" name="email" id="email" placeholder="Enter Email..." required>
      <input class="input-field" type="password" v-model="password" name="password" id="password" placeholder="Enter Your Password" required>
  
      <input type="submit" v-model="value" :disabled="isLoading">
      
    </form>
    <div><h2>You don't have an account? <router-link to="/registration" class="sign-in">Sign up</router-link></h2></div>
    <div><h3>{{ message }}</h3></div>
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
        isLoading:false,
        isSuccess:false,
        value: 'Login',
      }
  },
  methods:{
    handleLoginBtn(email,password){
      console.log(email,password)
      this.isLoading = true;
      this.value = 'Please wait...';
      axios.post('http://localhost:8080/api/login',{
        email:email,   
        password:password,
      })
    .then(res=>{
      console.log("res--->",res.data)
      this.value = 'Login';
      const {isSuccess, message, user} = res.data;
        if(isSuccess){
          
          this.message = user.firstName + " " + user.lastName + ", " + "you logged in successfully!!" ;
          this.isLoading = !isSuccess;
          this.isSuccess = isSuccess;
          
        }else{
          this.message = message;
          this.isLoading = false;
        }
      })
    .catch(error=>{
        console.log("error-->",error);
        this.isLoading = false;
        this.value = 'Login';
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
  