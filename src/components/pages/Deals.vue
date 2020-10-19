<template>
    <div id="deals">
        <div>
            <router-link :to="{ name: 'deals_create' }"><button id="createBtn" class="button">Create Deal</button></router-link>
        </div>
        <div id="showDeals">
            <Deal v-bind:key="key" v-for="(value,key) in deals" :data="value"></Deal>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Deal from "./Deal";

    export default {
        name: 'Deals',
        components: {
            Deal,
        },
        data () {
            return {
                deals: []
            }
        },
        created() {
            this.getDealData();
        },
        methods: {
            getDealData() {
                axios.get('user/deals')
                    .then(({ data }) => {
                        this.deals = data
                        console.log(data)
                    })
            }
        }
    }
</script>

<style scoped>
    #deals {
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    #showDeals {
        display: flex;
        /*flex-direction: column;*/
        justify-content: center;
        width: 100%;
    }

    .button a {
        color: #cfd9db;
        text-decoration: none;
    }

    .button {
        border: none;
        background: #34495e;
        padding: 12px 20px;
        color: #ffffff;
        font-weight: bold;
        float: left;
        cursor: pointer;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        appearance: none;
    }
</style>