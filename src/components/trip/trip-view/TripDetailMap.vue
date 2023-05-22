<template> 
    <div>
        <div id="map"></div>
    </div>
</template>
  
<script>
// import { mapState } from "vuex";

export default {
    data() {
        return {
            markers: [],
            infowindow: null,
            map: null,
            attraction: {},
        };
    },
    created() {
        this.$store.dispatch("tripDetailStore/TripDetailinfo", this.$route.params.contentID);
        this.setAttraction();
    },
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement("script");
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9aec3b964ed8614de3ec88c7cd3be6ce";
            document.head.appendChild(script);
        }
    },

    methods: {
        initMap() {
            const container = document.getElementById("map");
            const options = {
                center: new kakao.maps.LatLng(this.attraction.latitude, this.attraction.longitude),
                level: 3,
            };

            //지도 객체를 등록합니다.
            //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
            this.map = new kakao.maps.Map(container, options)

            // 마커가 표시될 위치입니다 
            var markerPosition = new kakao.maps.LatLng(this.attraction.latitude, this.attraction.longitude);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(this.map);

        },

        setAttraction: function () {
            this.attraction = this.$store.state.tripDetailStore.attraction;
        },
    },
    computed: {
    },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
    width: 100%;
    height: 500px;
}
</style>