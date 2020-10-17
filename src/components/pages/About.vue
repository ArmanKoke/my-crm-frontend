<!--<template>-->
<!--    <div id="about">-->
<!--        <div id="photo" @mouseenter="activate" @mouseleave="activate">-->
<!--            <transition name="fade">-->
<!--                <span v-if="isHovered" id="dummy">{{dummyText}}</span>-->
<!--            </transition>-->
<!--        </div>-->
<!--        <div id="description">-->
<!--            <span>{{ recursion }}</span>-->
<!--            <h2>Biography</h2>-->
<!--            <p>-->
<!--                I was born in <a target="_blank" :href="cityWebsite">Shymkent, Kazakhstan</a>. Studied in-->
<!--                <a target="_blank" :href="schoolWebsite">gymnasium #8</a>. Then entered-->
<!--                <a target="_blank" :href="universityWebsite">Suleyman Demirel University</a> to Faculty of Engineering & Natural Sciences.-->
<!--            </p>-->
<!--            <h2>Professional Career</h2>-->
<!--            <p>-->
<!--                I am Software Developer more than {{yearsOfExperience}} years. Worked in international retail and fintech companies. Worked with the following stack of technologies:-->
<!--            </p>-->
<!--            <div id="langs">-->
<!--                <ul>-->
<!--                    <li><a :href="phpUrl"  id="php" target="_blank"><icon-base width="50" height="50" viewbox="0 -1 100 50" icon-name="PHP"><Php class="lang_icons" id="php-icon"/></icon-base></a></li>-->
<!--                    <li><a :href="golangUrl" id="golang" target="_blank"><icon-base width="50" height="50" viewbox="0 0 254.5 225" icon-name="Golang"><Golang class="lang_icons" id="golang-icon"/></icon-base></a></li>-->
<!--                    <li><a :href="jsUrl" id="js" target="_blank"><icon-base width="50" height="50" viewBox="0 0 256 256" icon-name="Js"><Js class="lang_icons" id="js-icon"/></icon-base></a></li>-->
<!--                    <li><a :href="sqlUrl" id="sql" target="_blank"><icon-base width="50" height="50" viewBox="0 0 256 252" icon-name="SQL"><Sql class="lang_icons" id="sql-icon"/></icon-base></a></li>-->
<!--                    <li><a :href="redisUrl" id="redis" target="_blank"><icon-base width="50" height="50" viewbox="0 0 256 220" icon-name="Redis"><Redis class="lang_icons" id="redis-icon"/></icon-base></a></li>-->
<!--                    <li><a :href="dockerUrl" id="docker" target="_blank"><icon-base width="50" height="50" viewbox="0 0 32 32" icon-name="Docker"><Docker class="lang_icons" id="docker-icon"/></icon-base></a></li>-->
<!--                </ul>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    import IconBase from "../IconBase";-->
<!--    import Php from '../icons/Php.vue'-->
<!--    import Golang from '../icons/Golang.vue'-->
<!--    import Js from '../icons/Javascript.vue'-->
<!--    import Sql from '../icons/Sql.vue'-->
<!--    import Redis from '../icons/Redis.vue'-->
<!--    import Docker from '../icons/Docker.vue'-->

<!--    export default {-->
<!--        name: "About",-->
<!--        components: {-->
<!--            IconBase,-->
<!--            Php,-->
<!--            Golang,-->
<!--            Js,-->
<!--            Sql,-->
<!--            Redis,-->
<!--            Docker-->
<!--        },-->
<!--        data () {-->
<!--            return {-->
<!--                info: {-->
<!--                    "San Francisco County": {-->
<!--                        "info": [-->
<!--                            {-->
<!--                                "header": "County Guidelines",-->
<!--                                "body": [-->
<!--                                    {-->
<!--                                        "h4": "Shelter in Place",-->
<!--                                        "content": [-->
<!--                                            {-->
<!--                                                "p2": [-->
<!--                                                    {-->
<!--                                                        "p": "Residents should remain at home when possible as it is the safest choice. If you do leave your home, keep the following guidelines in mind."-->
<!--                                                    }-->
<!--                                                ],-->
<!--                                                "bullets": [-->
<!--                                                    {-->
<!--                                                        "bullet": "Maintain 6ft distance between yourself and people who are not in your hosehold unit."-->
<!--                                                    },-->
<!--                                                    {-->
<!--                                                        "bullet": "Wear a mask, scarf, bandana or other facial covering."-->
<!--                                                    },-->
<!--                                                    {-->
<!--                                                        "bullet": "Limit face to face interactions with those vulnerable to the coronavirus such as those over 60 or those with underlying health conditions."-->
<!--                                                    },-->
<!--                                                    {-->
<!--                                                        "bullet": "Wash hands frequently with soap and water for at least 20 seconds, or use hand sanitizer."-->
<!--                                                    },-->
<!--                                                    {-->
<!--                                                        "bullet": "Cover coughs and sneezes with a tissue or fabric or, if not possible, use the sleeve of your shirt or elbow. Do not cough or sneeze into your hand."-->
<!--                                                    },-->
<!--                                                    {-->
<!--                                                        "bullet": "Use antibactiral wipes to clean any surface that you have to touch."-->
<!--                                                    }-->
<!--                                                ],-->
<!--                                                "link": "https://sf.gov/stay-home-except-essential-needs"-->
<!--                                            }-->
<!--                                        ]-->
<!--                                    },-->
<!--                                ],-->
<!--                            },-->
<!--                        ],-->
<!--                    },-->
<!--                },-->
<!--                r: null,-->
<!--                yearsOfExperience: new Date().getFullYear() - 2018,-->
<!--                cityWebsite: "https://en.wikipedia.org/wiki/Shymkent",-->
<!--                schoolWebsite: "http://www.gymnasia8.kz/",-->
<!--                universityWebsite: "https://sdu.edu.kz/",-->

<!--                phpUrl: "",-->
<!--                golangUrl: "",-->
<!--                jsUrl: "",-->
<!--                sqlUrl: "",-->
<!--                redisUrl: "",-->
<!--                dockerUrl: "",-->
<!--                dummyText: "Will be dope studio photo :)",-->
<!--                isHovered: false-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            recursion() {-->
<!--                var a = JSON.parse(this.info)-->
<!--                console.log(a)-->

<!--            },-->
<!--            activate() {-->
<!--                this.isHovered = !this.isHovered-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');-->

<!--    #about {-->
<!--        text-align: left;-->
<!--        margin: 0 40px;-->
<!--        font-family: 'Montserrat', sans-serif;-->
<!--        font-weight: 500;-->
<!--        font-size: 20px;-->
<!--        color: #2c3e50;-->
<!--    }-->

<!--    #photo {-->
<!--        float: left;-->
<!--        width: 30%;-->
<!--        height: 100%;-->
<!--        min-height: 450px; /* height of future photo */-->
<!--        border: 1px solid cornflowerblue;-->
<!--        align-items: center;-->
<!--        display: table;-->
<!--    }-->

<!--    #photo span {-->
<!--        display: table-cell;-->
<!--        vertical-align: middle;-->
<!--        text-align: center;-->
<!--    }-->

<!--    .fade-enter-active, .fade-leave-active {-->
<!--        transition: opacity .5s;-->
<!--    }-->

<!--    .fade-enter, .fade-leave-to {-->
<!--        opacity: 0;-->
<!--    }-->

<!--    #description {-->
<!--        float: right;-->
<!--        width: 65%;-->
<!--        height: 100%;-->
<!--    }-->

<!--    #description a {-->
<!--        text-decoration: none;-->
<!--        color: #0072b1;-->
<!--    }-->

<!--    #description ul {-->
<!--        margin: 0;-->
<!--        padding: 0;-->
<!--    }-->

<!--    #description li {-->
<!--        display: inline-block;-->
<!--        margin: 0 5px;-->
<!--        padding: 0 10px;-->
<!--        transition: all 0.3s ease 0s;-->
<!--        filter: grayscale(100%) sepia(100%);-->
<!--    }-->
<!--    #description li:hover {-->
<!--        filter: none;-->
<!--    }-->

<!--    #golang-icon {-->
<!--        fill: #29BEB0;-->
<!--    }-->

<!--    /* todo change heights when photo */-->
<!--    @media screen and (max-width: 900px) {-->
<!--        #about {-->
<!--            width: 100%;-->
<!--            height: 100%;-->
<!--            min-height: 500px;-->
<!--            float: none;-->
<!--            display: inline-block;-->
<!--            align-items: center;-->
<!--            text-align: center;-->
<!--            margin: 0;-->
<!--            padding: 0;-->
<!--        }-->
<!--        #photo {-->
<!--            float: none;-->
<!--            height: 30%;-->
<!--            min-height: 100px;-->
<!--            width: 100%;-->
<!--        }-->
<!--        #description {-->
<!--            height: 50%;-->
<!--            min-height: 350px;-->
<!--            float: none;-->
<!--            width: 100%;-->
<!--            margin-bottom: 20px;-->
<!--        }-->
<!--    }-->
<!--</style>-->