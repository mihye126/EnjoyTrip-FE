<!-- 경로를 볼수 있어야함
관련되어서 지도를 볼수 있어야한다. -->

<template>




</template>

<script>
import http from "@/router/axios-common.js";
import PlanMap from "./PlanMap.vue";

export default {
  components: {
    PlanMap,
  },
  data() {
    return {
        trip_ids: [125266,125405,125406,125407,125408],
        trips:[],
    }
  },methods:{
    getTripInfo(id){
        http.get("/trips/"+id)
        .then(res=> {
            this.trips.push(res.data.data)
        })
        .catch()
    }
  }
};


</script>