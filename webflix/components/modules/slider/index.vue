<template>
   <v-sheet
     class="mx-auto"
     elevation="8"   
     width="100%"
     max-height="400px"
   >
     <v-slide-group
       v-model="model"
       class="pa-4"
       selected-class="bg-success"
       show-arrows
     >
       <v-slide-group-item
         v-for="movie in movies"
         :key="movie"
         v-slot="{ toggle, selectedClass }"
       >
         <v-card
           color="grey-lighten-1"
           :class="['ma-4', selectedClass]"
           height="300"
           width="200"
           border-radius="10px"
           @click="toggle"
         >
           <div class="d-flex fill-height align-center justify-center">
             <v-scale-transition>
               <img 
               class="carousel-item-image"
               :src='`${movie.image_url}`'
               />
              </v-scale-transition>
            </div>
         </v-card>
       </v-slide-group-item>
     </v-slide-group>
   </v-sheet>
</template>

<script setup lang="ts">
const movies = ref([
   {
      image_url: '/images/series/game-of-thrones-image.png',
      poster_url: 'game-of-thrones-poster.png',
      image_alt: 'Game of Thrones',
      name: 'Game of Thrones',
      movie_stars: ['Emilia Clarke', 'Peter Dinklage', 'Kit Harington'],
      genre: ['Action', 'Adventure', 'Fantasy', 'Drama', 'Tragedy'],
      last_episode: '73',
      language:'English',
      country: 'USA',
      imdb: '9.2',
      description: 'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.'
   },
   {
      image_url: '/images/series/breaking-bad-image.png',
      poster_url: 'breaking-bad-poster.png',
      image_alt: 'Breaking Bad',
      name: 'Breaking Bad',
      movie_stars: ['Bryan Cranston','Aaron Paul','Anna Gunn'],
      genre: ['Action', 'Adventure', 'Fantasy', 'Drama', 'Tragedy'],
      last_episode: '62',
      language:'English',
      country: 'USA',
      imdb: '9.5',
      description: 'Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.'
   },
   {
      image_url: '/images/series/friends-image.png',
      poster_url: 'friends-poster.png',
      image_alt: 'Friends',
      name: 'Friends',
      movie_stars: ['Jennifer Aniston','Courteney Cox','Lisa Kudrow'],
      genre: ['Action', 'Adventure', 'Fantasy', 'Drama', 'Tragedy'],
      last_episode: '236',
      language:'English',
      country: 'USA',
      imdb: '8.9',
      description: 'Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.'
   },
   {
      image_url: '/images/series/dark-image.png',
      poster_url: 'dark-poster.png',
      image_alt: 'Dark',
      name: 'Dark',
      movie_stars: ['Louis Hofmann','Karoline Eichhorn','Lisa Vicari'],
      genre: ['Science fiction', 'Thriller', 'Mystery', 'Tragedy'],
      last_episode: '26',
      language:'German',
      country: 'Germany',
      imdb: '8.7',
      description: 'When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.'
   },

])
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.v-sheet,
.v-card{
  background: none !important;
}


.v-icon {
  background-color: $primary;
  color: black;
  padding: 15px;
  border-radius: 50%;
}

.carousel-item-image {
  object-fit: cover;
  min-height: 100%;
}

</style>