<template>
    <b-container>
        <b-form @submit="onSubmit">
            <h1>Login</h1>
            <b-form-group>
                <b-form-input v-model="username" type="text" placeholder="Username" required/>
            </b-form-group>

            <b-form-group :invalid-feedback="invalidFeedback">
                <b-form-input v-model="password" type="password" placeholder="Password" required/>
            </b-form-group>

            <div class="text-center">
                <b-button type="submit" variant="primary" block>Sign In</b-button>
                <b-button variant="link" @click="$emit('swap-form')">Sign Up?</b-button>
            </div>
        </b-form>
    </b-container>
</template>

<script>
import Axios from 'axios';
import Router from '../router';
import {mapState, mapMutations} from 'vuex';


export default {
  data () {
    return {
      username: '',
      password: '',
      invalidFeedback: ''
    }
  },
  computed: {
      //not used
      ...mapState({
            loggedUsername: 'username',
            loggedEmail: 'email',
            authenticated: 'auth',
      })
      //
  },
  mounted(){
      console.log(localStorage.getItem('user'))
      localStorage.removeItem('user');
  },
  methods: {
    //Call to the API for authentication
    onSubmit (evt) {
        var querystring = require('querystring');

        var body = querystring.stringify({ 
            username: this.username, 
            password: this.password,
        });

        let vm = this;
        Axios({
            method: 'post',
            url: '/authenticate',
            data: body,
        }).then(function (response) {
            body = response.data.userLogged;
            console.log(body);
            localStorage.setItem('user', JSON.stringify(body));

            vm.$router.replace({name: 'Home'});

        }).catch(function (error) {
            console.log(error.response);
            if(error.response){
                if(error.response.status == 401){
                    alert("contraseña incorrecta o usuario desactivado");
                }else if(error.response.status == 404){
                    alert("Usuario no existe");
                }
            }
        });
    },
  }
};
</script>