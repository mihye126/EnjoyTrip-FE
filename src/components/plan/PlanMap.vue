<template>
    <div>
        <div id="map"></div>
    </div>
</template>
  
<script>
// import { mapState } from "vuex";

export default {
    props: {
        trips: Array
    },
    data() {
        return {
            markers: [],
            infowindow: null,
            map: null,
        };
    },
    created() {
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
    }, watch: {
        trips:function() {
            console.log('변경 감지');
            this.initMap()
        }
    },
    methods: {
        initMap() {
            const container = document.getElementById("map");
            const options = {
                center: new kakao.maps.LatLng(this.trips[0].latitude, this.trips[0].longitude),
                level: 3,
            };

            //지도 객체를 등록합니다.
            //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
            this.map = new kakao.maps.Map(container, options);
            // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
            const linePath = [];

            this.trips.forEach(trip => {
                linePath.push(new kakao.maps.LatLng(trip.latitude, trip.longitude))
            })

            // 지도에 표시할 선을 생성합니다
            const polyline = new kakao.maps.Polyline({
                path: linePath, // 선을 구성하는 좌표배열 입니다
                strokeWeight: 5, // 선의 두께 입니다
                strokeColor: '#ff0000', // 선의 색깔입니다
                strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle: 'solid' // 선의 스타일입니다
            });
            polyline.setMap(this.map);
            this.displayMarker(linePath);
        },

        displayMarker(positions) {
            if (this.markers.length > 0) {
                this.markers.forEach((marker) => marker.setMap(null));
            }

            if (positions.length > 0) {
                this.markers = positions.map(
                    (position) =>
                        new kakao.maps.Marker({
                            map: this.map,
                            position,
                        })
                );

                const bounds = positions.reduce(
                    (bounds, latlng) => bounds.extend(latlng),
                    new kakao.maps.LatLngBounds()
                );

                this.map.setBounds(bounds);
            }
        },
        displayInfoWindow() {
            if (this.infowindow && this.infowindow.getMap()) {
                //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.
                this.map.setCenter(this.infowindow.getPosition());
                return;
            }

            var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new kakao.maps.LatLng(33.450701, 126.570667), //인포윈도우 표시 위치입니다
                iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

            this.infowindow = new kakao.maps.InfoWindow({
                map: this.map, // 인포윈도우가 표시될 지도
                position: iwPosition,
                content: iwContent,
                removable: iwRemoveable,
            });

            this.map.setCenter(iwPosition);
        },
    },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
    width: 700px;
    height: 500px;
}


.map_wrap {
    width: 100%;
    position: relative;
}

.modes {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
}

.getdata {
    position: absolute;
    top: 370px;
    left: 10px;
    z-index: 1;
}
</style>
  