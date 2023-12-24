<template>
  <div id="app">
  <h1 class="title">Registration Form</h1>
  
  <form @submit.prevent="handleSubmitBtn(email,firstName,lastName,contact,password)">
    
    <input class="input-field" type="email" v-model="email" name="email" id="email" placeholder="Enter Email..." required>
    <input class="input-field" type="text" v-model="firstName" name="firstName" id="firstName" placeholder="Enter First Name..." required>
    <input class="input-field" type="text" v-model="lastName" name="lastName" id="lastName" placeholder="Enter Last Name..." required>
    <input class="input-field" type="number" v-model="contact" name="contact" id="contact" placeholder="Enter Your Contact no..." required>
    <input class="input-field" type="password" v-model="password" name="password" id="password" placeholder="Enter Your Password" required>

    <input type="submit" v-model="value" :disabled="isLoading">
  </form>
  <div><h2>Already have an account? <router-link to="/login">Sign in</router-link></h2></div>
  <div><h3>{{ message }}</h3></div>
</div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Registration',
  data(){
    return{
      email:'',
      firstName:'',
      lastName:'',
      contact:'',
      password:'',
      message:'',
      isLoading:false,
      value: 'Register',
    }
},
methods:{
  handleSubmitBtn(email,firstName, lastName, contact, password){
    // console.log(email,firstName, lastName, contact, password)
    this.value = 'Please wait...';
    this.isLoading = true;
    axios.post('http://localhost:8080/api/register',{
      email:email,
      firstName:firstName,
      lastName:lastName,
      contact:contact,
      password:password,
      isVerified: false
    })
  .then(res=>{
      // console.log("res--->",res.data)
      const {message} = res.data;
      this.message = message;
      this.value = 'Register';
      this.isLoading = false;
    })
  .catch(error=>{
      // console.log("error-->",error);
      this.value = 'Register';
      this.isLoading = false;
    })   
  },
}}
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
