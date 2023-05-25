<template>
  <div class="home">
    <navigation-header></navigation-header>
    <!-- <TripSearch></TripSearch> -->
    <TripSerchList></TripSerchList>
    <navigation-footer></navigation-footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import TripSearch from "@/components/trip/TripSearch.vue";
import TripSerchList from "@/components/trip/trip-serch/TripSerchList.vue";
import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
import NavigationHeader from "@/components/navigation/NavigationHeader.vue";

export default {
  name: "TripSearchView",
  components: {
    // TripSearch,
    NavigationFooter,
    NavigationHeader,
    TripSerchList,
  },
};
</script>
