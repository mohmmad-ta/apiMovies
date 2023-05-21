<template>
    <div class="h-screen top-0 left-0 fixed z-10  w-screen flex justify-center items-center">
        <div @click.prevent="poProduct" class="absolute top-0 left-0  bg-gray-900 opacity-90 h-full w-full"></div>
        <div class="text-white w-[25rem] text-left h-fit overflow-hidden relative rounded-md">
            <div class="relative z-40 p-10 flex flex-wrap gap-4">
                <slot></slot>
                <div class="flex w-full justify-center gap-8">
                    <button @click.prevent="delProduct(indexRe)" class="duration-150 rounded-sm bg-red-500 px-3.5 py-2 text-white font-bold shadow-sm hover:bg-red-600">Yes</button>
                    <button @click.prevent="poProduct" class="duration-150 rounded-sm bg-gray-400 px-3.5 py-2 text-white font-bold shadow-sm hover:bg-gray-500">No</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    indexRe:{
        type: Number,
        required: true
    },
})
const emit = defineEmits(['deleteProduct', 'deProduct'])
const poProduct = () => {
    emit('deleteProduct')
}
const delProduct = (index) => {
    emit('deProduct', index)
}
</script>