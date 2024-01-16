<!-- components/Slider.vue -->
<template>
    <div class="slider rounded-lg">
      <div class="slider-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="slide">
          <!-- <p class="absolute">Kami Terlindungi</p> -->
          <img :src="image.src" :alt="image.alt" class="w-full h-full">
        </div>
      </div>
      <div class="controls">
        <button @click="prev" class="control-btn">&lt;</button>
        <button @click="next" class="control-btn">&gt;</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    data() {
      return {
        currentIndex: ref(0),
        images: [
          { src: '/img/header7.png', alt: 'Image 1' },
          { src: '/img/header9.png', alt: 'Image 2' },
          // { src: 'path/to/image3.jpg', alt: 'Image 3' },
        ],
      };
    },
    methods: {
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
    },
  };
  </script>
  
  <style scoped>
  /* components/Slider.vue */
  .slider {
    position: relative;
    overflow: hidden;
    width: 100%;
    /* max-width: 10000px; */
    margin: 0 auto;
  }
  
  .slider-inner {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .slide {
    flex: 0 0 100%;
  }
  
  .controls {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }
  
  .control-btn {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }
  </style>
  