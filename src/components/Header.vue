<template>
    <div id="header">
        <div id="container">
            <h1><router-link :to="{ name: 'home' }" v-text="main"></router-link></h1>
            <b v-text="under"></b>
        </div>

        <div id="nav">
            <ul>
                <li><router-link v-if="isLogged" :to="{ name: 'about' }">About</router-link></li>
                <li><router-link v-if="isLogged" :to="{ name: 'contact' }">Contact</router-link></li>
                <li><router-link v-if="isLogged" :to="{ name: 'profile' }">Profile</router-link></li>
            </ul>
            <ul>
                <li><router-link v-if="!isLogged" :to="{ name: 'login' }">Sign in</router-link></li>
                <li><button v-if="isLogged" v-on:click='logout' class="button">Sign out</button></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Header',
        data () {
            return {
                main: 'My CRM',
                under: 'By Dud',
                authenticated: false,
            }
        },
        computed: {
            ...mapGetters([
                'isLogged'
            ])
        },
        created () {
            this.setTitle();
        },
        methods: {
            setTitle () {
                document.title = this.main
            },
            logout () {
                this.$store.dispatch('logout');

                // Navigate back to home
                this.$router.push({ name: 'home' })
            }
        },
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

    * {
        box-sizing: border-box;
        display: block;
        margin: 0;
        padding: 0;
    }

    #header {
        position: relative;
        width: 100%;
        height: 80px;
        left: 0;
        right: 0;
        top: 0;
    }

    #container {
        float: left;
        width: 30%;
        height: 100%;
        justify-content: flex-start;
        align-items: center;
        padding: 5px 1%;
    }

    #container a {
        color: #1a1a1a;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        transition: all 0.3s ease 0s;
    }

    #container a:hover {
        color: cornflowerblue;
    }

    #container b {
        margin-left: 1%; /*todo change*/
    }

    #container b:hover {
        color: #2b3e51;
    }

    #nav {
        float: right;
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20px 10%;
    }

    #nav a, li{
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        font-weight: 500;
        font-size: 20px;
        color: cornflowerblue;
    }

    #nav li {
        display: inline-block;
        padding: 0 10px;
    }

    #nav li a {
        transition: all 0.3s ease 0s;
    }

    #nav a:hover {
        /*background-color: cornflowerblue;*/
        color: #1a1a1a;
    }

    #nav a.router-link-exact-active {
        color: #1a1a1a;
    }

    #nav .button {
        border: none;
        background: cornflowerblue;
        border-radius: 0.25em;
        padding: 12px 20px;
        color: #ffffff;
        font-weight: bold;
        float: right;
        cursor: pointer;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 1px;
        appearance: none;
    }

    @media screen and (max-width: 900px) {
        #header {
            height: 100%;
        }
        #container {
            float: none;
            display: block;
            width: 100%;
            align-items: center;
            text-align: center;
        }
        #nav {
            float: none;
            display: inline-block;
            width: 100%;
            text-align: center;
            align-items: center;
        }
    }
</style>