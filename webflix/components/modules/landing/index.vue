<template>
   <div class="homePage-landing-wrapper">
      <div class="landing-header-wrapper">
         <div class="landing-logo">
            <nuxt-link to="/" class="nav-link nav-link-blog">
               <img src="@/public/images/logo/Logo.png" alt="webflix-logo"/>
            </nuxt-link>
         </div>
         <div class="landing-header-modules">
            <div class="navbar-items">
					<nuxt-link to="/" class="nav-link nav-link-blog">Home</nuxt-link>
					<nuxt-link to="/blog" class="nav-link nav-link-blog">Blog</nuxt-link>
					<nuxt-link to="/blog" class="nav-link nav-link-blog">Top 250 Movies</nuxt-link>
					<nuxt-link to="/blog" class="nav-link nav-link-blog">Top 250 series</nuxt-link>
            </div>
            <div class="search-icon">
               <svg v-if="!searchBox" @click="searchBoxTrue" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/></svg>
               <div class="close-search-box" v-if="searchBox" @click="searchBoxFalse">
                  <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
               </div>
               <div class="search-popup-wrapper" v-if="searchBox">
                  <input class="search-input" type="search" placeholder="Search Movie or Series Name..."/>
                  <input class="search-button" type="button" value="Search"/>
               </div>
            </div>
         </div>
      </div>
      <div class="landing-content-wrapper">
         <h1 v-if="landing.title">{{ landing.title }}</h1>
         <p v-if="landing.description">{{ landing.description }}</p>
         <input class="landing-content-button" type="button" v-if="landing.button" :value="landing.button"/>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         searchBox: false,
         landing :{
            title: 'Unlimited movies, TV shows, and more',
            description: 'Download anywhere. Watch anytime.',
            button: "Let's watch movie",
         }
      }
   },
   methods: {
      searchBoxTrue(){
         this.searchBox = true
         let body = document.querySelector('body')
         body.style.overflow = 'hidden'
      },
      searchBoxFalse(){
         this.searchBox = false
         let body = document.querySelector('body')
         body.style.overflow = 'unset'
      }
   }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.homePage-landing-wrapper{
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-image: url('@/public/images/homePage/background.jpg');
   background-repeat: no-repeat;
   // background-attachment: fixed;
   padding: 0px 50px;
   position: relative;
   &:after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 200px;
      background-image: linear-gradient(to top, #000000, #00000000,);
   }
}

.landing-header-wrapper{
   width: 100%;
   height: 15%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding: unset;

   .landing-logo{
      flex-basis: 10%;
   }

   .landing-header-modules{
      flex-basis: 55%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      
      .navbar-items{
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: space-between;

         a {
            color: $primary;
            font-size: 20px;
            padding: 8px 20px;
            border-radius: 10px;
            
            &:hover,
            .nuxt-link-exact-active {
               background: $primary;
               color: #fff;
            }
         
         }
      }

      .search-icon{
         display: flex;
         align-items: center;
         justify-content: flex-end;
         flex-basis: 10%;

         cursor: pointer;
         
         svg {
            z-index: 999999;
         }

         .close-search-box {
            z-index: 999999;
            // background: #ffffff;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
         }

         .search-popup-wrapper {
            cursor: auto;
            z-index: 9999;
            width: 100%;
            height: 100vh;
            background: #00000099;
            backdrop-filter: blur(8px);   
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            left: 0;

            .search-input {
               width: 40%;
               height: 45px;
               border-radius: 10px 0px 0px 10px;
               padding: 0px 15px;
               outline: none;
               border: none;
            }

            .search-button{
               width: 8%;
               height: 45px;
               border-radius: 0px 10px 10px 0px;
            }
         }
      }
   }
}

.landing-content-wrapper{
   width: 100%;
   position: relative;
   top: 80px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   user-select: none;

   h1{
      font-size: 70px;
      width: 800px;
      line-height:80px;
   }

   p{
      font-size: 26px;
      margin: 50px 0px;
   }

   .landing-content-button {
      width: 300px;
      height: 50px;
      font-size: 22px;
   }
}

</style>