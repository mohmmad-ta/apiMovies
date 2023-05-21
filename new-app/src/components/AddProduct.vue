<template>
    <div class="h-screen top-0 left-0 fixed z-10  w-screen flex justify-center items-center">
        <div @click="openPup" class="absolute top-0 left-0  bg-gray-900 opacity-90 h-full w-full"></div>
        <div class="text-white w-[25rem] text-left h-fit overflow-hidden relative rounded-md">
            <form class="relative z-40 p-10 flex flex-wrap gap-4">
                <h2 class="text-center w-full text-xl p-2">New Product</h2>
                <h2 v-if="msg !== ''" class="text-center w-full text-sm text-red-700 bg-red-200 rounded-sm py-1">{{msg}}</h2>
                <input v-model.trim="newProduct.name" type="text" class="w-full px-4 py-2 text-red-500 outline-none rounded-sm" placeholder="Title" required/>
                <textarea v-model.trim="newProduct.description" type="text" class="w-full px-4 max-h-52 py-2 text-red-500 outline-none rounded-sm" placeholder="Enter Your Description" required/>
                <div class="flex items-center gap-3">
                    <p class="font-bold">Select Image :</p>
                    <select v-model="newProduct.image" class="px-2 py-1 rounded-sm text-red-500">
                        <option value="img/a1.jpg">image 1</option>
                        <option value="img/a2.jpg">image 2</option>
                        <option value="img/a3.jpg">image 3</option>
                        <option value="img/a4.jpg">image 4</option>
                    </select>
                </div>
                <div class="flex w-full justify-center p-2">
                    <button @click.prevent="addNew" type="submit" class="duration-150 rounded-sm bg-red-500 px-3.5 py-2 text-white font-bold shadow-sm hover:bg-red-600">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref} from 'vue'
const emit = defineEmits(['addNewProduct', 'open'])
const newProduct = ref({
    name: '',
    description: '',
    image: ''
});
const msg = ref('')
const addNew = ()=>{
    if (newProduct.value.name !== '' && newProduct.value.description !== '' && newProduct.value.image !== ''){
        emit('addNewProduct', newProduct.value)
    }else {
        msg.value = 'Please Enter All Data'
    }
}
const openPup = ()=>{
    emit('open')
}
</script>