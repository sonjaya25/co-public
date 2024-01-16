<template>
    <carousel :items-to-show="1" :autoplay="10000" :wrap-around="false" :responsive="false">
        <!-- <slide v-for="slide in 10" :key="slide">
            <CompanyAnnouncement></CompanyAnnouncement>
        </slide> -->

        <slide v-if="defAnnoun1==true">
            <CompanyAnnouncement :img="img1" :title="title1" :subtitle="subtitle1" :date="date1" :description="description1"></CompanyAnnouncement>
        </slide>
        <slide v-if="defAnnoun2==true">
            <CompanyAnnouncement2 :img="img2" :title="title2" :date="date2" :description="description2"></CompanyAnnouncement2>
        </slide>

        <slide v-if="customAnnoun==true">
            
        </slide>
    </carousel>
</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide} from 'vue3-carousel'

const { defAnnoun1, defAnnoun2, customAnnoun, img1, title1, subtitle1, date1, description1, img2, title2, date2, description2 } = defineProps(['defAnnoun1', 'defAnnoun2', 'customAnnoun', 'img1', 'title1', 'subtitle1', 'date1', 'description1', 'img2', 'title2', 'date2', 'description2'])

</script>