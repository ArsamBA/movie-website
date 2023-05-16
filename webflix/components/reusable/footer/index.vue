<template>
   <v-app>
      <v-footer class="d-flex flex-column">
         <div class="bg-teal d-flex w-100 align-center px-4">
            <strong>Unlimited movies, TV shows, and more</strong>

            <v-spacer></v-spacer>

            <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="plain"
            size="small"
            ></v-btn>
         </div>

         <div class="footer-data-wrapper px-4 py-2 bg-black text-center w-100">
            {{ new Date().getFullYear() }} — <strong>Webflix</strong>
         </div>
      </v-footer>
   </v-app>
</template>

<script setup lang="ts">
const icons = ref([
   'mdi-facebook',
   'mdi-twitter',
   'mdi-linkedin',
   'mdi-instagram',
])
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.v-application__wrap {
   min-height: unset !important;
}

.v-footer {
   padding: 0 !important;
}

.bg-teal {
   background: $primary !important;
   color: #000 !important;
}

.v-btn__content{
   color: #000 !important;
}

.footer-data-wrapper{
   border: 5px solid $primary !important;
   border-top: none !important;
}
</style>