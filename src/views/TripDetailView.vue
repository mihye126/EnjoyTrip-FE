<template>
  <div class="home">
    <navigation-header></navigation-header>
    <trip-view></trip-view>
    <navigation-footer></navigation-footer>
  </div>
</template>

<script>
import TripView from "@/components/trip/trip-view/TripView.vue";
import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
export default {
  name: "TripMainView",
  components: {
    TripView,
    NavigationFooter,
    NavigationHeader,
  },
};
</script>
