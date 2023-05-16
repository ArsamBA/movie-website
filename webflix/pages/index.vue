<template>
   <div>
      <ModulesLanding />
      <SectionsMainPageAdvantages />
      <modulesSlider />
      <div class="home-page-content-wrapper">
         <div class="home-page-side-content">
            <SectionsMainPageSeries />
            <SectionsMainPageGenre />
         </div>
         <div class="home-page-main-content">
            <SectionsMainPageMovies />
         </div>
      </div> 
   </div>
</template>

<script>

</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.home-page-content-wrapper {
   width: 100%;
   padding: 0px 50px;
   margin-top: 100px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-start;
   flex-wrap: nowrap;
}

.home-page-side-content {
   flex-basis: 30%;
   display: flex;
   flex-direction: column;
   align-items: center;
   row-gap: 30px;
}

.home-page-main-content {
   flex-basis: 68%;
}
</style>