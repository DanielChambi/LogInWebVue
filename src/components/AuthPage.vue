<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="6">
        <login-form v-if="wantSignIn" @swap-form="swapForm" @sign-in="$emit('sign-in')"/>
        <register-form v-else @swap-form="swapForm" @sign-in="$emit('sign-in')"/>
      </b-col>
    </b-row>
  </b-container>
  
</template>

<script>
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm' //Not used, but don't touch
export default {
  data () {
    return {
      wantSignIn: true
    }
  },
  methods: {
    swapForm () {
      this.wantSignIn = !this.wantSignIn
    }
  },
  components: {
    LoginForm,
    RegisterForm
  }
}
</script>