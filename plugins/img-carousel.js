import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: {
            carousel: Carousel,
            carouselSlide: Slide,
            carouselPagination: Pagination,
            carouselNavigation: Navigation,

        }
    }
})