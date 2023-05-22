<template>
    <div class="home">
      <navigation-header></navigation-header>
      <trip-list></trip-list>
      <navigation-footer></navigation-footer>
    </div>
  </template>
  
  <script>
  import TripList from "@/components/trip/trip-list/TripListPage.vue";
  import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
  import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
  export default {
    name: "TripListView",
    components: {
        TripList,
      NavigationFooter,
      NavigationHeader,
    },
  };
  </script>
  