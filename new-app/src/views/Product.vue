<template>
  <div class="container mx-auto bg-none py-24">
    <div class="rounded-xl flex-wrap flex min-h-[80vh] w-full p-6 bg-white shadow-md">
      <div class="flex-col w-1/4 gap-4 overflow-hidden justify-center">
        <img class="w-full h-96 rounded-2xl" :src="`https://image.tmdb.org/t/p/w500/${product.backdrop_path}`" :alt="product.backdrop_path">
        <div class="flex justify-center items-center py-3">
          <button class="border-red-500 border-2 hover:bg-red-500 hover:text-white duration-200 rounded-xl px-4 py-1 font-bold text-red-500 text-xl" type="button">Play Now</button>
        </div>
      </div>
      <div class="w-3/4 px-8">
        <h2 class="font-bold text-3xl py-4">{{ product.original_title }}</h2>
        <div class="flex gap-2">
          <p class="text-sm text-emerald-800 bg-emerald-200 rounded-md px-2 mb-1">{{ product.original_language }}</p>
          <p class="text-sm text-yellow-800 bg-yellow-200 rounded-md px-2 mb-1">{{ product.popularity }}</p>
        </div>
        <p class="font-semibold pt-3">Synopsis :</p>
        <p class="text-gray-500">{{product.overview}}</p>
        <div class="flex items-center gap-2 pt-2">
          <h2 class="text-xl">Genre :</h2>
          <div class="flex items-center" v-for="genre in product.genres">
            <h2 class="font-semibold text-xl">{{ genre.name }}</h2>
          </div>
        </div>
        <div class="flex items-start gap-2 py-2">
          <h2 class="text-xl">Countries :</h2>
          <div class="flex-col items-center">
            <div v-for="countrie in product.production_countries">
              <h2 class="font-semibold text-xl text-gray-700">{{ countrie.name }} <span class="text-sm text-emerald-700 bg-emerald-200 rounded-md px-2 ml-1"> {{ countrie.iso_3166_1 }}</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
const route = useRoute();
const userId = route.params.id;
const product = ref([])
const fetchData = async () => {
  try {
    const {data} = await axios.get(`movie/${userId}`);
    product.value = data;
    console.log(product.value)
  } catch (error) {
    console.error(error);
  }
};
onMounted(fetchData)
</script>