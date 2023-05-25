<template>

</template>

<script>
import TripSearchVue from '@/components/trip/TripSearch.vue';
// import http from "@/router/axios-common.js";
import { mapState, mapActions } from "vuex";

export default {
    components: {
        TripSearchVue,
        
    },
    data(){
        return {
            trips:[],
            rows:0
        }
    },mounted(){
        this.rows=this.$store.dispatch() // 전체 갯수 가져오기
    },
    computed: {
        ...mapState("planStore", ["trips", "trip_ids"]),
        rows() {
        return this.items.length
      }
    },
    methods: {
        ...mapActions("planStore", ["GET_TRIP_INFO"])
    }, mounted() {
        this.GET_TRIP_INFO()
    }
};

</script>
<style scoped>
.p10 {
    padding: 10px
}

.p20 {
    padding: 20px
}

.normal {
    background-color: grey;
}

.dragArea {
    min-height: 10px;
}

.sortable-chosen {
    opacity: 0.7;
    background-color: #dcdcdc;
}

.sortable-ghost {
    background-color: #dcdcdc;
}

.del {
    cursor: pointer;
    color: red;
}
</style>