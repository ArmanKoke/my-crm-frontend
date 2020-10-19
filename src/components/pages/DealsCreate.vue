<template>
    <div id="contact">
        <form class="vue-form" @submit.prevent="">
            <input type="hidden" name="_token" :value="token">
            <div class="error-message">

            </div>

            <div>
                <label class="label" for="company">Company name</label>
                <input type="text" name="company" id="company" required=""
                       v-model="company">
            </div>
            <div>
                <label class="label" for="description">Description</label>
                <input type="text" name="description" id="description" required=""
                       v-model="description">
            </div>
            <div>
                <label class="label" for="notes">Notes</label>
                <input type="text" name="notes" id="notes" required=""
                       v-model="notes">
            </div>
            <div>
                <label class="label" for="status">Status</label>
                <input type="number" name="status" id="status" required=""
                       v-model="status">
            </div>
            <div>
                <input type="submit" v-on:click="create" value="Create">
            </div>
        </form>
    </div>
</template>

<script>

    import axios from "axios";

    export default {
        data() {
            return {
                company: '',
                description: '',
                notes: '',
                status: 0,
            }
        },
        computed: {
            token() {
                // let token = document.head.querySelector('meta[name="csrf-token"]');
                // return token.content
                return 's'
            }
        },
        methods: {
            create () {
                axios.post('/user/deals', {
                        company_name: this.company,
                        description: this.description,
                        notes: this.notes,
                        status_id: this.status,
                    })
                    .then(() => {
                        this.$router.push({ name: 'deals' })
                    })
                    .catch(err => {
                        console.log(err) //show some msg
                    })
            },
        },
        watch: {

        },
    }
</script>

<style scoped>
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
    .router {
        font-size: 13px;
        text-decoration: none;
    }
    .vue-form {
        font-size: 16px;
        min-height: 500px;
        width: 25%;
        padding: 15px 30px;
        margin: 20px auto;
    }
    .vue-form div {
        position: relative;
        margin: 20px 0;
    }
    .vue-form h4,
    .vue-form label {
        color: cornflowerblue;
        margin-bottom: 5px; /* not works */
    }
    /* text color inside input, text */
    .vue-form input,
    .vue-form textarea {
        color: #2b3e51;
    }
    .vue-form input[type="text"],
    .vue-form input[type="number"],
    .vue-form input[type="email"],
    .vue-form textarea {
        display: block;
        width: 100%;
        appearance: none;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
    }
    .vue-form input[type="text"],
    .vue-form input[type="number"],
    .vue-form input[type="email"],
    .vue-form textarea {
        padding: 12px;
        border: 1px solid #cfd9db;
        background-color: #ffffff;
        border-radius: 0.25em;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
    }
    .vue-form input[type="text"]:focus,
    .vue-form input[type="number"]:focus,
    .vue-form input[type="email"]:focus,
    .vue-form textarea:focus {
        outline: none;
        border-color: #cfd9db;
        box-shadow: 0 0 5px #cfd9db;
    }
    .vue-form .button,
    .vue-form input[type="submit"] {
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
    .no-touch .vue-form .button:hover,
    .no-touch .vue-form input[type="submit"]:hover {
        background: #42a2e1;
    }
    .vue-form .button:focus,
    .vue-form input[type="submit"]:focus {
        outline: none;
        background: cornflowerblue;
    }
    .vue-form .button:active,
    .vue-form input[type="submit"]:active {
        transform: scale(0.9);
    }
    .vue-form .error-message {
        height: 35px;
        margin: 0;
    }
    .vue-form .error-message p {
        color: #e94b35;
        font-size: 1.4rem;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        border-radius: 0.25em;
        padding: 16px;
    }
    /* for input field highlight */
    .vue-form .error {
        border-color: #e94b35 !important;
    }
    .vue-form .error:focus {
        box-shadow: 0 0 5px #e94b35 !important;
    }

    @-webkit-keyframes cd-bounce {
        0%,
        100% {
            -webkit-transform: scale(1);
        }
        50% {
            -webkit-transform: scale(0.8);
        }
    }
    @-moz-keyframes cd-bounce {
        0%,
        100% {
            -moz-transform: scale(1);
        }
        50% {
            -moz-transform: scale(0.8);
        }
    }
    @keyframes cd-bounce {
        0%,
        100% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.8);
        }
    }

    @media screen and (max-width: 900px) {
        .vue-form {
            min-height: 550px;
            width: auto;
        }
    }
</style>