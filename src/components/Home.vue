<template>
    <b-container>
        <h1>Home</h1>
        <span>
            <h3>Bienvenido {{username}}</h3>
            <router-link to="/edit">Editar perfil</router-link>
        </span>
        
        <ul>
            <li v-for="user in users" :key="user.id">
                <span>
                {{user.username + ' ' + user.email}}
                <a @click="deleteUser(user._id)" class="text-danger">Delete</a>
                </span>
            </li>
        </ul>
        <p>Refrescar página para ver los cambios</p>
        <router-link to="/">logout</router-link>
    </b-container>
</template>

<script>
const user = JSON.parse(localStorage.getItem('user'));
import Axios from 'axios';

export default {
    data(){
        return{
            username: user.username,
            email: user.email,
            users: []
        }
    },
    mounted(){
        console.log(localStorage.getItem('user'));
        if(localStorage.getItem('user') == null){
            this.$router.push('/');
        }
        let vm = this;
        Axios({
            method: 'get',
            url: '/activated&true'
        }).then(function(response){
            console.log(response.data.users);
            vm.users = response.data.users;
            console.log(vm.users);
            
        }).catch(function(error){
            console.log(error.response);
        });
    }, 
    methods:{
        deleteUser(id){
            var querystring = require('querystring');

            var body = querystring.stringify({ 
                activated: false,
            });

            console.log(id);

            var vm = this;
            Axios({
                method: 'put',
                url: `/${id}`,
                data: body,
            }).then(function(response){
                console.log(response.data);
                
            }).catch(function(error){
                console.log(error.response);
            });
        }
    }
}
</script>

<style scoped>
    div{
        margin: 10% 5%,
    }
</style>
