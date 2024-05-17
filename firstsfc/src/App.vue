<template>
  <h1>{{ message }}</h1>
  <p>My favorite food has a diploma image attached to id.</p>
  <button @click="removeItem">Remove Item</button>
  <div class="wrapper">
    <food-item 
      v-for="x in foods"
      :key="x.name"
      :food-name="x.name"
      :food-desc="x.desc"
      :is-favorite="x.favorite"
    />
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: 'Food',
      foods: [
        {name :'Apples',
         desc :'Apples are a type of fruit that grow in trees.',
         favorite: true
        },
        {name :'Pizza',
         desc :'Pizza has a bread base with tomato saue, cheese, and toppings on top.',
         favorite: false
        },
        {name :'Rice',
         desc :'Rice is a type of grain that people like to eat.',
         favorite: false
        },
        {name :'Fish',
         desc :'Fish is an animal that lives in water.',
         favorite: true
        },
        {name :'Cake',
         desc : 'Cake is something sweet that tastes good.',
         favorite: false
        }
      ]
    };
  },
  methods: {
    removeItem() {
      this.foods.splice(1,1);
    }
  }
};
</script>



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
