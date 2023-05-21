<template>
    <main>
        <Navbar />
        <RouterView :isRemove="isRemove" @removeProduct="removeProduct" @addProduct="addProduct" :products="products"/>
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

const products = ref([])
const isRemove = ref(false)

const addProduct = (product)=>{
    products.value.push(product)
}
const removeProduct = (index)=>{
    products.value.pop(index)
}
const fetchData = async () => {
  try {
    const res = await axios.get('trending/movie/day');
    console.log(res.data.results)
    products.value = res.data.results;
  } catch (error) {
    console.error(error);
  }
};
onMounted(fetchData)
</script>