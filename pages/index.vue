<template>
    <div>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
        <div>
            {{ _toUpper('ajay ganteng') }}
        </div>
        <div>
            <QR value="https://www.youtube.com/watch?v=cC8fDX3ETmc&ab_channel=GASENTRAPAJAMPANGAN" 
                :color="{ dark: '#000000ff', light: '#ffffffff' }"
                type="image/png" />
        </div>
    </div>
</template>

<script setup>
import {useParamsStore} from '~/stores/myStore'
// import {getData} from '~/repositories/getData'
const {$qrCode} = useNuxtApp()

const params = useParamsStore().data
const QR = $qrCode

onMounted(async () => {
    await useParamsStore().setData('aaaaaa')
    // console.log(getData.getData())
})
</script>