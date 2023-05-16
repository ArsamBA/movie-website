<template>
   <div class="movie-section-wrapper">
      <div class="movies-column">
         <div class="movie-items-wrapper" v-for="(movie, index) in movies" :key="index">
            <div class="movies-items">
               <div class="movie-side-items">
                  <div class="movie-poster">
                     <img :src="`_nuxt/public/images/movies/${movie.image_url}`" :alt="movie.image_alt" />   
                  </div>
                  <div class="watch-online-button">
                     <input class="watch-online" type="button" value="Watch Online" />
                  </div>
               </div>
               <div class="movie-description">
                  <div class="movie-title">
                     <h3>{{ movie.name }}</h3>
                  </div>
                  <div class="movie-description-items movie-star">
                     <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z"/></svg>
                     <p>Movie Star: <span>{{ movie.movie_star }}</span></p>
                  </div>
                  <div class="movie-description-items movie-genre">
                     <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="m261 530 220-354 220 354H261Zm445 446q-74 0-124-50t-50-124q0-74 50-124t124-50q74 0 124 50t50 124q0 74-50 124t-124 50Zm-586-25V647h304v304H120Zm586.085-35Q754 916 787 882.916q33-33.085 33-81Q820 754 786.916 721q-33.085-33-81.001-33Q658 688 625 721.084q-33 33.085-33 81Q592 850 625.084 883q33.085 33 81.001 33ZM180 891h184V707H180v184Zm189-421h224L481 289 369 470Zm112 0ZM364 707Zm342 95Z"/></svg>
                     <p>Genre: <span v-for="genre in movie.genre" :key="genre">{{ genre }},</span></p>
                  </div>
                  <div class="movie-description-items movie-running-time">
                     <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="m627 769 45-45-159-160V363h-60v225l174 181ZM480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-82 31.5-155t86-127.5Q252 239 325 207.5T480 176q82 0 155 31.5t127.5 86Q817 348 848.5 421T880 576q0 82-31.5 155t-86 127.5Q708 913 635 944.5T480 976Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480 236q-140 0-240 100T140 576q0 140 100 240t240 100Z"/></svg>
                     <p>Running Time: <span>{{ movie.running_time }}</span></p>
                  </div>
                  <div class="movie-description-items movie-language">
                     <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="m475 976 181-480h82l186 480h-87l-41-126H604l-47 126h-82Zm151-196h142l-70-194h-2l-70 194Zm-466 76-55-55 204-204q-38-44-67.5-88.5T190 416h87q17 33 37.5 62.5T361 539q45-47 75-97.5T487 336H40v-80h280v-80h80v80h280v80H567q-22 69-58.5 135.5T419 598l98 99-30 81-127-122-200 200Z"/></svg>
                     <p>Language: <span>{{ movie.language }}</span></p>
                  </div>
                  <div class="movie-description-items movie-country">
                     <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="M200 936V256h343l19 86h238v370H544l-18.933-85H260v309h-60Zm300-452Zm95 168h145V402H511l-19-86H260v251h316l19 85Z"/></svg>
                     <p>Country: <span>{{ movie.country }}</span></p>
                  </div>
                  <div class="movie-description-items movie-imdb">
                     <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                     <p>IMDb: <span>{{ movie.imdb }}/10</span></p>
                  </div>
                  <div class="movie-summary">
                     <p><span>{{ movie.description }}</span></p>
                  </div>
               </div>
            </div>
            <div class="download-button">
               <nuxt-link to="/" class="download-button">
                  <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="M220 896q-24 0-42-18t-18-42V693h60v143h520V693h60v143q0 24-18 42t-42 18H220Zm260-153L287 550l43-43 120 120V256h60v371l120-120 43 43-193 193Z"/></svg>
                  Download
               </nuxt-link>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         movies:[
            {
               image_url: 'the-godfather.png',
               image_alt: 'The Godfather poster',
               name: 'The Godfather 1979',
               movie_star: 'Marlon Brando',
               genre: ['Crime', 'Drama'],
               running_time: '2h 55m',
               language:'English',
               country: 'USA',
               imdb: '9.2',
               description: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.'
            },
            {
               image_url: 'batman-begins.png',
               image_alt: 'Batman Begins poster',
               name: 'Batman Begins 2005',
               movie_star: 'Christian Bale',
               genre: ['Action', 'Fantasy '],
               running_time: '2h 20m',
               language:'English',
               country: 'USA',
               imdb: '8.2',
               description: 'After witnessing his parents death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.'
            },
            {
               image_url: 'the-godfather.png',
               image_alt: 'The Godfather poster',
               name: 'The Godfather 1979',
               movie_star: 'Marlon Brando',
               genre: ['Crime', 'Drama'],
               running_time: '2h 55m',
               language:'English',
               country: 'USA',
               imdb: '9.2',
               description: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.'
            },
            {
               image_url: 'the-godfather.png',
               image_alt: 'The Godfather poster',
               name: 'The Godfather 1979',
               movie_star: 'Marlon Brando',
               genre: ['Crime', 'Drama'],
               running_time: '2h 55m',
               language:'English',
               country: 'USA',
               imdb: '9.2',
               description: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.'
            },
         ]
      }
   },
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.movies-column {
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
}

.movie-items-wrapper {
   width: 100%;
   display: flex;
   flex-direction: column;
   margin-bottom: 50px;

   .download-button{
      width: 100%;
      padding: 8px;
      color: #fff;
      border-radius: 0px 0px 10px 10px;
      background: $primary;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      svg {
         margin-right: 8px;
      }
      path {
         fill: #fff;
      }
   }
}

.movies-items {
   width: 100%;
   border-radius: 10px 10px 0 0;
   padding: 30px;
   background-color: $bg-secondary;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: flex-start;

   .movie-side-items{
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .movie-poster {
         img {
            border-radius: 10px 10px 0px 0px;
            object-fit: cover;
         }
      }
      
      .watch-online-button{
         width: 100%;
         input{
            width: 100%;
            height: 50px;
            border-radius: 0px 0px 10px 10px;
            font-size: 18px;
         }
      }

   }

   .movie-description{
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      
      .movie-title{
         margin-bottom: 15px;    
      }

      .movie-description-items {
         margin-top: 20px;  
         display: flex;
         flex-direction: row;
         align-items: center;

         svg {
            margin-right: 8px;
         }

         p{
            color: #cdcdcd;
            span {
               color: #fff;
               margin-left: 10px;
            }
         }
      }

      .movie-star{
         h3{
            font-size: 40px;
         }
      }

      .movie-summary{
         margin-top: 20px;
         width: 625px;
         p{
            font-size: 14px;
         }
      }
   }
}
</style>