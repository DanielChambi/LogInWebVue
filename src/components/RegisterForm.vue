<!--

Not functional yet

<template>
    <b-form @submit="onSubmit">
        <h1>Register</h1>
        <b-form-group :invalid-feedback="invalidFeedback">
            <b-form-input v-model="username" type="text" placeholder="Username" required></b-form-input>
        </b-form-group>

        <b-form-group>
            <b-form-input v-model="password" type="password" placeholder="Password" required></b-form-input>
        </b-form-group>

        <div class="text-center">
            <b-button type="submit" variant="primary" block>Sign up</b-button>
            <b-button variant="link" @click="$emit('swap-form')">Sign in?</b-button>
        </div>
    </b-form>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      invalidFeedback: ''
    }
  },
  methods: {
    onSubmit (evt) {

    }
  }
}
</script>
-->