<template>
<div @:click="countClicks()">
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
        <p id="red">You have clicked me {{ clicks }} times.</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name: 'Apples',
                message: 'I like apples',
                clicks: 0
            }
        },
        methods: {
            countClicks(){
                this.clicks++;
            }
        }
    };
</script>

<style>
    #app > div{
        border: dashed black 1px;
        display: inline-block;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
    }
    #app > div:hover{
        cursor:pointer;
    }
    #red {
        font-weight: bold;
        color: red;
    }
</style>