<template>
   <div class="advantages-section-wrapper">
      <div class="advantages-items" v-for="advantage in advantages" :key="advantage">
         <div class="advantages-image">
            <img :src="`_nuxt/public/images/advantages/${advantage.image_url}`" :alt="advantage.image_alt" />   
         </div>
         <h5>{{ advantage.title }}</h5>
         <p>{{ advantage.description }}</p>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         advantages: [
            {
               image_url: 'enjoy-on-your-tv.png',
               image_alt: 'Enjoy on your TV image',
               title: 'Enjoy on your TV',
               description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
            },
            {
               image_url: 'watch-everywhere.png',
               image_alt: 'Watch everywhere image',
               title: 'Watch everywhere',
               description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            },
            {
               image_url: 'create-profiles-for-kids.png',
               image_alt: 'Create profiles for kids image',
               title: 'Create profiles for kids',
               description: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
            },
            {
               image_url: 'download-your-shows-to-watch-offline.png',
               image_alt: 'Download your shows to watch offline image',
               title: 'Download your shows to watch offline',
               description: 'Only available on ad-free plans.',
            },
         ]
      }
   },
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.advantages-section-wrapper{
   position: relative;
   margin-top: -110px;
   z-index: 222;
   width: 100%;
   padding: 50px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   flex-wrap: wrap;
   gap: 50px;
   
   .advantages-items{
      flex-basis: 48%;
      padding: 50px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: radial-gradient(99.93% 134.44% at 17.93% 0%, $bg-secondary 0%, $bg-secondary 57.21%, $primary 99.57%);
      
      h5 {
         margin: 15px 0px;
      }
      
   }
}
</style>