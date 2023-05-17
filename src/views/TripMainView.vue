<template>
  <div class="home">
    <navigation-header></navigation-header>
    <trip-main></trip-main>
    <navigation-footer></navigation-footer>
  </div>
</template>

<script>
// @ is an alias to /src

import TripMain from "@/components/trip/trip-main/TripMain.vue";
import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
export default {
  name: "TripMainView",
  components: {
    TripMain,
    NavigationFooter,
    NavigationHeader,
  },
};
</script>
