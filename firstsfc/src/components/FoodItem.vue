<template>
    <div @:click="countClicks()">
        <h2>{{ foodName }}</h2>
        <img src="/approval.jpg" v-show="isFavorite" alt="imagen diploma"/>
        <p>{{ message }}</p>
        <p>{{ foodDesc }}</p>
        <p id="red">You have clicked me {{ clicks }} times.</p>
        <button @:click="toggleFavorite()">Favorite</button>
    </div>
</template>

<script>
    export default {
        // props: ['foodName','foodDesc','isFavorite'] //props como string por defecto
       /* 
        objeto props sencillo 
        props: {
            foodName: String,
            foodDesc: String,
            isFavorite: Boolean
        },*/
        props: {
            foodName: {
                type: String,
                required: true
            },
            foodDesc: {
                type: String,
                required: false,
                default: 'This is the default description',
                validator: (value) => { //arrow function sustituye a function (value)
                    if( 20 < value.length && value.length <50){
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            isFavorite:{
                type: Boolean,
                required: false,
                default: false
            }
        },
        emits: ['toggle-favorite'],
        data(){
            return{
                message: 'I like '+ this.foodName,
                clicks: 0,
            }
        },
        methods: {
            countClicks(){
                this.clicks++;
            },
            toggleFavorite(){
                this.$emit('toggle-favorite', this.foodName);
            }
        }
    };
</script>

<style>
    img {
        height: 5rem;
        float: right;
    }
   
</style>