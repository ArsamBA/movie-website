<template>
   <div class="series-section-wrapper">
      <div class="series-preview-header">
         <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="M140 976q-24 0-42-18t-18-42V476q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 24-18 42t-42 18H140Zm267-131 221-149-221-148v297ZM149 356v-60h662v60H149Zm131-120v-60h400v60H280Z"/></svg>
         <h3>Last Series Update</h3>
      </div>
      <div class="series-preview">
         <div class="first-series-preview">
            <img :src="`_nuxt/public/images/series/${series[0].image_url}`" :alt="series[0].image_alt" />   
            <div class="first-series-description">
               <h6>Episode <span style="background-color: #E40006; padding: 1px 5px; border-radius: 100px;">{{ series[0].last_episode }}</span> of {{ series[0].name }} added</h6>
            </div>
         </div>
         <nuxt-link to="/" class="last-update-series-preview" v-for="(tvShow, index) in series" :key="index">
            <img :src="`_nuxt/public/images/series/${tvShow.poster_url}`" :alt="tvShow.image_alt" />   
            <div class="last-update-series-description">
               <h6>Episode <span style="background-color: #E40006; padding: 1px 5px; border-radius: 100px;">{{ tvShow.last_episode }}</span> of {{ tvShow.name }} added</h6>
            </div>
         </nuxt-link>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         series:[
            {
               image_url: 'game-of-thrones-image.png',
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
               image_url: 'breaking-bad-image.png',
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
               image_url: 'friends-image.png',
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
               image_url: 'dark-image.png',
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
         ],
      }
   },
   mounted(){
      const reversedArray = this.series.reverse();
      const getLastSeries = this.series.splice(10)
      console.log("🚀 ~ file: index.vue:89 ~ mounted ~ this.series:", this.series)
   }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.series-section-wrapper{
   width: 100%;
   background-color: $bg-secondary;
   border-radius: 10px;
   padding: 20px 30px;
   display: flex;
   flex-direction: column;
   align-items: center;
   
   .series-preview-header{
      width: 100%;
      background: #000;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      margin-bottom: 20px;
      padding: 10px;
      border-radius: 10px;
      h3 {
         color: $primary;
         margin-left: 10px;
      }

      
   }
}

.series-preview {
   .first-series-preview{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
      img {
         border-radius: 10px 10px 0 0;
      }

      .first-series-description {
         text-align: center;
         width: 100%;
         padding: 10px 0px;
         background-color: #1c1c1c;
         border-radius: 0 0 10px 10px;
      }
   }

   .last-update-series-preview{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 15px;
      img {
            border-radius: 10px 10px 0 0;
            object-fit: cover;
            max-height: 200px;
            object-position: top;
         }
   
         .last-update-series-description {
            text-align: center;
            width: 100%;
            padding: 10px 0px;
            background-color: #1c1c1c;
            border-radius: 0 0 10px 10px;
         }
   }

}
</style>