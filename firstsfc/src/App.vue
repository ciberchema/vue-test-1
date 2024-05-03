<script>
export default {
  data(){
    return {
      message: 'Food'
    };
  }
};
</script>

<template>
  <h1>{{ message }}</h1>
  <p>My favorite food has a diploma image attached to id.</p>
  <div class="wrapper">
    <food-item 
      food-name="Apples"
      food-desc="Apples are a type of fruit that grow in trees."
      v-bind:is-favorite="true"
    />
    <food-item 
      food-name="Pizza"
      food-desc="Pizza has a bread base with tomato sauce, chees, and topping on top."
      v-bind:is-favorite="false"
    />
    <food-item 
      food-name="Rice"
      v-bind:is-favorite="false"
    />
  </div>
</template>

<style>
    .wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .wrapper div{
        border: dashed black 1px;

        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
    }
    .wrapper > div:hover{
        cursor:pointer;
    }
    #red {
        font-weight: bold;
        color: red;
    }
</style>
