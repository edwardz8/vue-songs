<template>
  <div>
    <h2>Register</h2>

    <input type="email" v-model="email" name="email" placeholder="email">

    <input type="password" v-model="password" name="password" placeholder="password">

    <br>

    <button @click="register">Sign Up</button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'hello',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
     email(value) {
      console.warn('email has changed', value)
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(this.data)
    }
  }
}
</script>

<style scoped>

a {
  color: #35495E;
}
</style>
