<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center align-items-center min-h-100vh">
        <form
          v-on:submit.prevent="submit"
        >
          <h1 class="text-align-center mb-3">Login</h1>

          <label class="d-block mb-2">
            <p class="mb-1">Login:</p>

            <input type="text" placeholder="Login"
              v-model="login"
            >
          </label>
          
          <label class="d-block mb-3">
            <p class="mb-1">Password:</p>

            <input type="password" placeholder="Password"
              v-model="password"
            >
          </label>

          <div>
            <button class="w-100" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  import AuthenticatonServiceTemporary from '../services/AuthenticationServiceTemporary'
  
  export default {
    setup() {
      const login = ref(null)
      const password = ref(null)

      const submit = () => {
        const token = AuthenticatonServiceTemporary.login(login.value, password.value)
        console.log(token)
      }

      return { login, password, submit }
    }
  }
</script>