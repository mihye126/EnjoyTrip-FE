<template>
    <div class="home">
      <navigation-header></navigation-header>
      <trip-recommend></trip-recommend>
      <navigation-footer></navigation-footer>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
  import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
 import TripRecommend from '@/components/ai/TripRecommendPage.vue';
  export default {
    name: "TripMainView",
    components: {
        TripRecommend,
      NavigationFooter,
      NavigationHeader,
    },
  };
  </script>
  