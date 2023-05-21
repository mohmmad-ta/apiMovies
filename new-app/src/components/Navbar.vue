<template>
    <header class="container fixed top-0 left-0 w-screen z-20 h-16 flex items-center justify-between bg-zinc-100">
        <div class="w-[10%]">
          <img alt="Vue logo" class="w-9 " src="@/assets/logo.svg" />
        </div>
        <div>
          <div class="flex flex-wrap items-center bg-white justify-between w-96 rounded-2xl overflow-hidden px-3 py-1">
            <input @focus="isSearching = true" @focusout="isSearching = false" @input="searchMoviesDebounced" v-model="search" class="bg-white w-80 outline-none" type="text" placeholder="Search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <Transition name="slide-fade">
            <div v-if="isSearch && isSearching"
                 class="absolute bottom-[-%100] w-96 mt-2 p-2 rounded-lg z-10 bg-white overflow-y-scroll scrollbar-hide scr max-h-[70vh] ">
              <div v-if="search == null">
                <h2>Loading...</h2>
              </div>
              <transition-group name="fade">

                <div class="flex mb-2 hover:bg-gray-100 rounded duration-150 cursor-pointer" v-for="movieSearch in moviesSearch" :key="movieSearch.id">
                  <router-link class="flex" :to="{ name: 'Product', params: { id: movieSearch.id } }">
                    <div class="flex items-center w-1/4">
                      <img class="w-full rounded" :src="`https://image.tmdb.org/t/p/w500/${movieSearch.backdrop_path}`" alt="">
                    </div>
                    <div class="flex ms-2 w-4/6 flex-col my-2">
                      <h3 class="text-[1rem] font-bold">{{ movieSearch.title }}
                        {{movieSearch.title.length > 10 ? movieSearch.title.slice(0,10)+ " ..." :  movieSearch.title}}
                      </h3>
                      <p class="text-xs">
                        {{movieSearch.overview.length > 70 ? movieSearch.overview.slice(0,70)+ " ..." :  movieSearch.overview}}
                      </p>
                    </div>
                  </router-link>
                </div>
                <div v-if="moviesSearch != null && moviesSearch.length === 0" class="flex justify-center">
                  <h1>No Results.</h1>
                </div>
              </transition-group>
            </div>

          </Transition>
        </div>
        <nav class=" flex items-center h-16 gap-4 text-gray-400 font-bold">
            <RouterLink to="/" class="hover:text-gray-500 duration-150">New Product</RouterLink>
            <RouterLink to="/all" class="hover:text-gray-500 duration-150">All Product</RouterLink>
        </nav>
    </header>
</template>
<script setup>
import {RouterLink} from "vue-router";
import axios from "axios";
import {computed, ref} from "vue";
import {debounce} from "lodash";
const moviesSearch = ref([]);
const search = ref('');
const isSearching = ref(false);
const isSearch = computed(() => {
  return search.value !== '';
});


const searchMovies = async () => {
  const {data} = await axios.get('/search/movie', {
    params: {
      query: search.value
    },
  });
  moviesSearch.value = data.results;
  console.log(moviesSearch.value)
}
const searchMoviesDebounced = debounce(searchMovies, 200)

</script>
<style scoped>
nav a.router-link-exact-active {
    color: #ef4444;
}
</style>