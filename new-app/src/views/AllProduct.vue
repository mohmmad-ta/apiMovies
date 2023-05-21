<template>
    <div class="container mx-auto bg-none py-24">
        <div class="rounded-xl w-full p-6 bg-white shadow-md">
            <div class="w-full flex justify-between py-3 pb-10 px-14">
                <h2 class="font-bold text-xl">All Movie</h2>
            </div>
            <div class="w-full flex gap-4 flex-wrap justify-center" v-if="products != []">
                <TransitionGroup name="allPro" mode="in-out">
                  <div class="w-72 h-96 overflow-hidden rounded-xl flex flex-wrap" v-for="(product, index) in products">
                    <router-link :to="{ name: 'Product', params: { id: product.id } }">
                      <img class="rounded-xl w-full h-48" :src="`https://image.tmdb.org/t/p/w500/${product.backdrop_path}`" :alt="`${product.backdrop_path}`">
                      <div class="px-3 w-full gap-4 h-32">
                        <h2 class="text-gray-500 text-sm"># language {{ product.original_language }}</h2>
                        <h2 class="font-bold text-xl py-1">{{product.title.length > 20 ? product.title.slice(0,20)+ " ..." :  product.title}}</h2>
                        <p class="text-gray-500 font-semibold text-sm">{{product.overview.length > 100 ? product.overview.slice(0,100)+ " ...." :  product.overview}}</p>
                      </div>
                      <div class="flex justify-between items-center py-2 px-3">
                        <button class="px-3 duration-200 rounded-2xl hover:text-red-500 hover:border-red-500 border-gray-500 text-gray-500 font-bold border-2">Show</button>
                        <div class="flex gap-3">
                          <i class="fa-solid fa-pen-to-square hover:text-emerald-600 duration-200 cursor-pointer"></i>
                          <i @click.prevent="deleteProduct(product, index)" class="cursor-pointer fa-solid fa-trash-can hover:text-red-600 duration-150"></i>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </TransitionGroup>
            </div>
        </div>
    </div>
    <Transition>
        <RemoveProduct @deProduct="deProduct" :indexRe="indexRe" @deleteProduct="deleteProduct" v-if="isRemove">
            <div class="w-full bg-white rounded-md p-3">
                <h2 class="text-red-500 text-xl font-bold py-1">Do you went</h2>
                <p class="text-gray-500 font-semibold">Delete : {{prRemove.title}}</p>
            </div>
        </RemoveProduct>
    </Transition>
</template>

<script setup>
import RemoveProduct from "@/components/RemoveProduct.vue";
import {computed, ref, watch} from "vue";
import axios from "axios";
const props = defineProps({
    products:{
        type: Array,
        required: true
    },
})
const isRemove = ref(false)
const prRemove = ref({})
const indexRe = ref(0)
const search = ref('')
const searchFilters = ref([])


const deleteProduct = (product, index) => {
    isRemove.value === false ? isRemove.value = true : isRemove.value = false;
    prRemove.value = product
    indexRe.value = index
}
const emit = defineEmits(['removeProduct','searchFilter'])
const deProduct = (index) => {
    emit('removeProduct',index)
    isRemove.value === false ? isRemove.value = true : isRemove.value = false;
}

const searchMovies = async () => {
  const {data} = await axios.get('/search/movie', {
    params: {
      query: search.value
    },
  });
  searchFilters.value = data.results;
}
</script>