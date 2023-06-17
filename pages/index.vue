<template>
    <div>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
        <div>
            {{ _toUpper('ajay ganteng') }}
        </div>
    </div>
</template>

<script setup>
import {useParamsStore} from '~/stores/myStore'
// import {getData} from '~/repositories/getData'

const params = useParamsStore().data

onMounted(async () => {
    await useParamsStore().setData('aaaaaa')
    // console.log(getData.getData())
})
</script>