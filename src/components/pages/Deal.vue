<template>
<!--    <div id="deal">-->
        <div class = row>
            <div class= 'card'>
                <div class = 'card-header'>
                    <h1 class = 'card-header-title'>{{title}}</h1>
                    <i v-bind:class = 'icon'>{{icon}}</i>
                </div>
                <div class = 'card-content'>
                    <p class = 'card-content-text'>{{message}}</p>
                </div>
                <button id="delBtn" v-on:click='deleteDeal' class="button">Delete</button>
                <button id="updBtn" class="button"><router-link :to="{ name: 'deals_update' }">Edit</router-link></button>
                <div class = 'card-footer'>
                    <i @mouseover = 'animateRight'
                       @mouseleave = 'animateLeft'
                       v-on:click = 'click'
                       class="fas fa-arrow-right fa-2x"
                    > >>> </i>
                </div>
            </div>
        </div>
<!--    </div>-->
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Deal',
        data () {
            return {
                clicked:false,
                title: this.data.company_name,
                message: this.data.description,
                icon: this.data.id,
            }
        },
        props: {
            data: Object,
        },
        methods: {
            deleteDeal () {
                axios.delete('/user/deals/' + this.data.id)
                    .then(() => {
                        this.$router.go(0)
                    })
                    .catch(err => {
                        console.log(err) //show some msg
                    })
            },
            /*
            blowUp: function(){
                var ele = event.currentTarget;
                ele.classList.add('blowUp');
            },
            collapse: function(){
                var ele = event.currentTarget;
                ele.classList.remove('blowUp');
                ele.classList.add('collapse');


                setTimeout(function(){
                    //ele.classList.remove('blowUp');
                    ele.classList.remove('collapse');
                }, 1000);
            },
            */
            animateRight: function(){
                let ele = event.currentTarget;
                ele.classList.add('moveRight');
            },
            animateLeft: function(){
                let ele = event.currentTarget;
                ele.classList.add('moveLeft');

                setTimeout(function(){
                    ele.classList.remove('moveRight');
                    ele.classList.remove('moveLeft');
                }, 500);
            },
            click: function(){
                let ele = event.currentTarget;
                if(!this.clicked){
                    ele.parentElement.parentElement.style.flexGrow = '3';
                    ele.style.transform = 'scaleX(-1)';
                    this.clicked = true;
                }else{
                    ele.parentElement.parentElement.style.flexGrow = '0';
                    ele.style.transform = 'scaleX(1)';
                    this.clicked = false;
                }
            }
        }
    }
</script>

<style scoped>
    button a {
        text-decoration: none;
        background: #ecf0f1;
        color: #0072b1;
    }

    #delBtn {
        background: #e94b35;
    }
    /*#updBtn {*/
    /*    background: #ecf0f1;*/
    /*    color: #0072b1;*/
    /*}*/

    .button {
        border: none;
        padding: 12px 20px;
        color: #ffffff;
        font-weight: bold;
        float: left;
        cursor: pointer;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        appearance: none;
    }

    div.card {
        font-family: "Open Sans", sans-serif;
        width: 330px;
        height: 270px;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
    }
    div.card.blowUp {
        animation: blowUp 0.5s;
        animation-fill-mode: forwards;
    }
    div.card.collapse {
        animation: collapse 0.5s;
    }
    @keyframes blowUp {
        from {
            width: 330px;
            height: 270px;
        }
        to {
            width: 400px;
            height: 340px;
        }
    }
    @keyframes collapse {
        from {
            width: 400px;
            height: 340px;
        }
        to {
            width: 330px;
            height: 270px;
        }
    }
    div.card div.card-header {
        display: flex;
        width: 100%;
        height: 65px;
        max-height: 65px;
        align-items: center;
        justify-content: space-between;
        flex: 1 0 auto;
    }
    div.card div.card-header i {
        color: white;
        padding-right: 25px;
    }
    div.card div.card-header h1.card-header-title {
        padding-left: 25px;
        margin: 0;
        color: white;
        line-height: 65px;
        font-weight: 400;
    }
    div.card div.card-content {
        padding: 25px;
        flex: 1 0 auto;
    }
    div.card div.card-content p.card-content-text {
        margin: 0;
        color: white;
        letter-spacing: 1px;
    }
    div.card div.card-footer {
        height: 40px;
        display: flex;
        justify-content: flex-end;
        flex-shrink: 0;
    }
    div.card div.card-footer i {
        color: white;
        position: relative;
        right: 20px;
    }
    div.card div.card-footer i.moveRight {
        animation-name: moveRight;
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
    }
    @keyframes moveRight {
        from {
            right: 20px;
        }
        to {
            right: 15px;
        }
    }
    div.card div.card-footer i.moveLeft {
        animation-name: moveLeft;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;
    }
    @keyframes moveLeft {
        from {
            right: 15px;
        }
        to {
            right: 20px;
        }
    }
    div.card:nth-child(1) {
        background-color: #3498db;
    }
    div.card:nth-child(1) div.card-header {
        background-color: #2980b9;
    }

    div.card:nth-child(2) {
        background-color: #34495e;
    }
    div.card:nth-child(2) div.card-header {
        background-color: #2c3e50;
    }

    div.card:nth-child(3) {
        background-color: #9b59b6;
    }
    div.card:nth-child(3) div.card-header {
        background-color: #8e44ad;
    }

    div.row {
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }
</style>