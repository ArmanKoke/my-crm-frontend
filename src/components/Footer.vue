<template>
    <div id="footer">
        <div class="container">
            <div id="copyright">
                <h1>
                    <span>© Designed by Arman Koketayev {{ currentYear }}</span>
                </h1>
            </div>
            <div id="social">
                <ul>
                    <li><a :href="githubUrl"  id="github" class="social" target="_blank"><icon-base width="30" height="30" icon-name="GitHub"><Github id="github-icon"/></icon-base></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Github from './icons/Github.vue'
    import IconBase from "./IconBase";

    export default {
        name: 'Footer',
        components: {
            IconBase,
            Github,
        },
        data () {
            return {
                owner: 'Arman ',
                githubUrl: 'https://github.com/ArmanKoke',
                currentYear: (new Date().getFullYear() === 2020) ? new Date().getFullYear() : "2020 - " + new Date().getFullYear(),
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Crushed&display=swap');

    * {
        box-sizing: border-box;
        display: block;
        margin: 0;
        padding: 0;
    }

    #footer {
        position: fixed;
        float: bottom;
        height: 80px;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #0072b1;
        border-top-color: rgba(0,0,0,0.1);
    }

    #copyright {
        text-align: left;
        float: left;
        width: 30%;
        height: 100%;
        justify-content: flex-start;
        align-items: center;
        padding: 40px 1%;
    }
    #copyright span {
        color: whitesmoke;
        font-size: 0.5em;
        font-family: 'Crushed', cursive;
        letter-spacing: 0.1em;
    }

    #social {
        text-align: right;
        display: inline-block;
        width: 70%;
        height: 100%;
        justify-content: flex-end;
        align-items: center;
        padding: 15px 1%;
    }

    #social li {
        display: inline-block;
        margin: 0 5px;
        padding: 10px;
    }

    #github-icon, #linkedin-icon {
        fill: whitesmoke;
        padding: 0 10px;
    }

    #social li:hover {
        transition: all 0.3s ease 0s;
    }

    #social li:hover #github-icon {
        transition: all 0.2s ease 0s;
        fill: #1a1a1a;
    }

    #social li:hover #linkedin-icon {
        transition: all 0.2s ease 0s;
        fill: #0072b1;
    }

    @media screen and (max-width: 800px) {
        #footer {
            position: static;
            float: none;
            bottom: 0;
            height: 100%;
        }
        #copyright {
            float: none;
            align-items: center;
            text-align: center;
            padding: 20px 0 0 0;
            height: 50%;
            width: 100%;
        }
        #social {
            float: none;
            align-items: center;
            text-align: center;
            height: 50%;
            width: 100%;
        }
    }
</style>