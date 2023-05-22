<template>
    <main>
        <section class="section-header overflow-hidden pb-0 my-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">

                        <h1 class="display-2 mb-3">어디로 떠나고 싶나요?</h1>
                        <p> 여행을 떠나요</p>
                    </div>
                </div>
            </div>
        </section>

        <div class="section section-md pt-4 mt-3">
            <div class="container">
                <div class="row mb-4 mb-lg-5">
                    <trip-search></trip-search>
                </div>
                <div class="row mb-4 mb-lg-5">
                    <div class="col-12">
                        <trip-item v-for="trip in trips" :key="trip.contentID" :trip="trip"></trip-item>
<!-- <trip-item v-for="trip in trips" :key="trip.content_id" :trip="trip"></trip-item> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="section section-md pt-4 mt-3">
            <!-- <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                aria-controls="my-table"></b-pagination> -->
        </div>

    </main>
</template>
<script>
import TripSearch from '../TripSearch.vue';
import TripItem from './TripItem.vue';
export default {
    components: {
        TripItem,
        TripSearch
    },
    data() {
        return {
            index: 0,
            trips: [{
    "contentID": 125266,
    "content_type_id": "12",
    "title": "국립 청태산자연휴양림",
    "address": "강원도 횡성군 둔내면 청태산로 610 ",
    "tel": "",
    "firstImage": "http://tong.visitkorea.or.kr/cms/resource/21/2657021_image2_1.jpg",
    "sidoCode": null,
    "latitude": 37.52251412,
    "longitude": 128.2919115,
    "overview": "해발 1,200m의 청태산을 주봉으로 하여 인공림과 천연림이 잘 조화된 울창한 산림을 바탕으로 한 국유림 경영 시범단지로서 숲속에는 온갖 야생 동식물이 고루 서식하고 있어 자연박물관을 찾은 기분을 느낄 수 있다. 영동고속도로 신갈기점 강릉방향 128km 지점에 위치하고 있어 여름철 동해안 피서객들이 잠시 쉬었다 가기에 편리하고, 청소년의 심신수련을 위한 숲속교실도 설치되어 있으며 울창한 잣나무 숲속의 산림욕장은 한번왔다간 사람은 누구나 매료되어 찾는 곳이기도 하다. * 구역면적 - 403 ha"
  }]
        }
    },
    created(){
        // this.setAttraction(this.index)
    },
    methods: {
        setAttraction: function (index) {
            this.trips = this.$store.state.trips.slice(index * 10, index + 10);
            console.log(this.trips)
        },
    }

};
</script>
  