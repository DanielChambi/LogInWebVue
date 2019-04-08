<template>
    <b-container>
        <b-form @submit="onSubmit">
            <h1>Edit</h1>
            <p>Editando el perfil de {{username}}</p>
            <b-form-group :invalid-feedback="invalidFeedback">
                <b-form-input v-model="username" type="text" placeholder="Username" required></b-form-input>
            </b-form-group>

            <b-form-group>
                <b-form-input v-model="email" type="email" placeholder="e-mail" required></b-form-input>
            </b-form-group>

            <b-form-group>
                <b-form-input v-model="password" type="password" placeholder="Password" required></b-form-input>
            </b-form-group>

            <div class="text-center">
                <b-button type="submit" variant="primary" block>Editar</b-button>
                <router-link to="/home">vuelta atras</router-link>
            </div>
        </b-form>
    </b-container>
</template>

<script>
const user = JSON.parse(localStorage.getItem('user'));
import Axios from 'axios';

export default {
    data(){
        return{
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
        }
    },
  methods: {
    onSubmit (evt) {
        var querystring = require('querystring');

        var body = querystring.stringify({ 
            username: this.username,
            email: this.email, 
            password: this.password,
        });

        var vm = this;
        Axios({
            method: 'put',
            url: `/${this.id}`,
            data: body,
        }).then(function(response){
            console.log(response.data);

            user.username = vm.username;
            user.email = vm.email;

            localStorage.removeItem('user')
            localStorage.setItem('user', JSON.stringify(user));

            console.log(localStorage.getItem('user'));

            vm.$router.replace({name: 'Home'});

        }).catch(function(error){
            console.log(error.response);
        });

    }
  }
}
</script>