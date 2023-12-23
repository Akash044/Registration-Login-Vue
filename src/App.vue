<script>
  import Login from './components/Login.vue';
  import Registration from './components/Registration.vue';
  export default{
    name: 'app',
    components: {
      Registration,
      Login,
    },
    data() {
      return {
        component: "Registration",
      };
    },
  }
</script>

<template>
  
  <main class="main-section">

    <router-link to="/login">Login</router-link>
    <router-link to="/registration">Register</router-link>
  </main>
</template>

<style scoped>
.main-section{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>
