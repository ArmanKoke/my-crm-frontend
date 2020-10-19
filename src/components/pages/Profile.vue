<template>
    <div>
        <ul>
            <li v-bind:key="key" v-for="(value,key) in profile">
                <p>{{key}} : {{value}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data () {
        return {
            profile: []
        }
    },
    created() {
        this.getProfileData();
    },
    methods: {
        getProfileData() {
            axios.get('user/data')
                .then(({ data }) => {
                    this.profile = data.data
                })
        }
    }
}
</script>