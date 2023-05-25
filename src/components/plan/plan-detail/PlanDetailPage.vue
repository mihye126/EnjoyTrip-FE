<template>
    <main>
        <section class="section-header pb-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 text-center">
                        <h1 class="mb-3">{{plan.title}}</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-lg pt-6">
            <div class="container">
                    <div class="row justify-content-center mb-5 mb-lg-6">

                        <div class="col-lg-8" v-if="trips.length">
                            <plan-map v-model="trips" :trips="trips"></plan-map>
                        </div>
                        <div class="col-lg-4">
                            <draggable v-model="trips" :disabled="true" group="people" @start="drag = true" @end="drag = false"
                                :move="checkMove">

                                <div class="card " v-for="trip in trips" :key="trip.content_id">
                                    <div class="card-body px-3 py-3 text-center text-md-left">
                                        <div class="row align-items-center">
                                            <h5 class="mb-3">{{ trip.title }}</h5>
                                            <p class="mb-0">
                                                {{ trip.address }}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </draggable>
                        </div>

                    </div>
                    <div class="row">
                        <router-link to="/plans/edit/${id}" class="btn rounded btn-secondary">수정하기</router-link>
                        <router-link to="/plans/delete/${id}" class="btn rounded btn-danger">삭제하기</router-link>
                    </div>

                </div>
        </section>
    </main>
</template>

<script>
import PlanMap from "../PlanMap.vue";
import draggable from "vuedraggable";

export default {
    components: {
        PlanMap,
        draggable
    }, data() {
        return {
            trips: [{
                "contentID": 125405,
                "conTentTypeId": "12",
                "title": "토함산자연휴양림",
                "address": "경상북도 경주시 양북면 불국로 1208-45 ",
                "tel": "",
                "firstImage": "",
                "sidoCode": "35",
                "gugunCode": "2",
                "latitude": 35.7619577,
                "longitude": 129.3655037,
                "overview": "토함산 자연휴양림은 삼국통일의 위업을 달성한 신라천년의 찬란한 문화유적을 간직한 국제적 관광도시, 경주의 명산 토함산 기슭에 자리잡고 있으며, 불국사, 석굴암, 보문관광단지, 무열왕릉 등 신라 고적관광과 함께 대자연 속에서 조용히 쉬면서 생각할 수 있는 최적의 산림내 휴식공간이다. * 구역면적 - 123 ㏊(37만평)"
            }, {
                "contentID": 125406,
                "conTentTypeId": "12",
                "title": "비슬산자연휴양림",
                "address": "대구광역시 달성군 유가읍 일연선사길 61 ",
                "tel": "",
                "firstImage": "http://tong.visitkorea.or.kr/cms/resource/62/219162_image2_1.jpg",
                "sidoCode": "4",
                "gugunCode": "3",
                "latitude": 35.69138039,
                "longitude": 128.5159774,
                "overview": "비슬산 자연휴양림은 대견봉(1083.59m)을 중심으로 좌우에 조화봉(1,058m), 관기봉(990m)을 거느린 341ha의 면적에 사계절 자연의 아름다움을 전한다. 비슬산 자연휴양림의 가장 큰 특징은 주변의 뛰어난 자연경관은 그대로 활용해 휴식공간과 편의시설을 갖췄다는 것이다. 집채만한 바위가 산기슭에 군락을 이루듯 펼쳐진 수백개의 바위 마당 과 계곡 곳곳에 숨은 듯 자리잡은 기암 괴석은 보는 이의 탄성을 절로 자아낸다. 또한 휴양에 필요한 각종 편의시설이 잘 설치되어있는 것도 장점이다. 아울러 매년 4월 중순에서 5월 초인 비슬산 정상 30만평에 참꽃물결을 이루고 여름엔 안개분수를 이용한 무지개계곡 가을엔 오색단풍의 정취를 맛보는 가을등산, 겨울엔 얼음을 소재로한 동굴, 빙벽, 얼음탑, 썰매장, 고드름 동산 등 오색조명을 이용한 겨울밤은 전국 유일의 자연얼음동산으로 청소년들에겐 방학기간 자연학습관으로 큰 인기이다. 휴양에 숲속의 집과 야영장, 야외강당, 연못, 청소년수련장, 체력단련장, 잔디광장, 사진촬영소, 어린이놀이터, 폭포샤워장, 물놀이터, 삼림욕장 등과 자연석들이 널려 있는 산책로인 탐석로가 있다."
            },
            {
                "contentID": 125407,
                "conTentTypeId": "12",
                "title": "불정자연휴양림",
                "address": "경상북도 문경시 불정길 180 (불정동)",
                "tel": "",
                "firstImage": "http://tong.visitkorea.or.kr/cms/resource/83/1070183_image2_1.jpg",
                "sidoCode": "35",
                "gugunCode": "7",
                "latitude": 36.61882624,
                "longitude": 128.1342659,
                "overview": "불정자연휴양림은 경북 문경의 불정동 마을 안쪽에 위치한 나트막한 봉우리인 수정봉 (해발 487m, 약수산)과 조봉 사이에 자리잡고 있다. 불정자연휴양림 부근은 물맛이 좋기로도 유명한데, 휴양림 부근의 운암사 약수나 휴양림 입구의 마지막골 약수도 물맛이 좋아 찾는 이들의 쉼터가 되기도 한다. 천연 활엽수림으로 이루어진 휴양림 입구부터 산막으로 이어지는 길가에는 야생화단지의 꽃과 나무들이 뚜렷한 사계절의 향기를 담고 정겨움을 준다. 산 정상에서부터 맑은 물은 산막들 사이로 흐르고 계곡 중간 중간 보를 막아 만든 물놀이장이 길을 따라 이어져 있으며 나무 그늘 아래 놓인 통나무 데크와 벤치가 시원한 산바람과 함께 여유로운 휴식을 더한다. 휴양림 내 쉼터는 숲속의 집과 카라반 시설이 있으며 나무 사이사이 지어진 숲속의 집은 11동의 통나무집과 1동의 황토집이며, 카라반 시설 14동 포함 총 26동이 연중 운영된다. 또한 휴양림 내 설치된 (주)짚라인 코리아에서 운영하는 9개의 다이나믹한 짚라인 코스는 푸른 자연과 함께 즐기는 최고의 레포츠로 무한한 감둥을 준다. * 불정자연휴양림의 즐길거리 * 불정자연휴양림은 산악자전거 도로를 조성해 놓고 산악자전거를 대여해 주고 있으며 또한 근처에 클레이 사격장도 있다. 청소년수련관에서부터 출발하여 산악자전거 도로를 통과하여 클레이사격장까지 이용할 수 있는 코스가 마련되어 있다. 주변 관광지로는 휴양림 건너편 계곡에 신라 때 창건했다는 춘암사와 문경온천, 문경새재, 가은석탄박물관 등이 있어 일일 코스로 다녀올 수 있다."
            }, {
                "contentID": 125408,
                "conTentTypeId": "12",
                "title": "청송 자연휴양림 퇴적암층 (청송 국가지질공원)",
                "address": "경상북도 청송군 부남면 청송로 3478-96 (부남면)",
                "tel": "",
                "firstImage": "http://tong.visitkorea.or.kr/cms/resource/48/2533748_image2_1.jpg",
                "sidoCode": "35",
                "gugunCode": "21",
                "latitude": 36.31791942,
                "longitude": 129.0537206,
                "overview": "청송자연휴양림 퇴적암층은 상쾌한 공기와 수려한 경관을 모두 갖춘 지질명소이다. 다양한 코스의 산책로가 개설되어 있어 탐방객들에게 산책과 자연관찰의 기회를 제공하는데, 등산로를 따라 올라가다보면 쇄설성 퇴적물들이 뚜렷한 층리를 발달시키며 쌓여있는 노두를 관찰할 수 있다.노두를 살펴보면 운반과 퇴적 작용의 반복으로 인해서 밝은 색의 사암과 짙은 색의 셰일층이 서로 엇갈리면서 나타나는 층리가 잘 관찰된다. 또한 유수에 의한 퇴적물이 이동하면서 생기는 바닥 표면의 물결자국인 연흔과 사층리들을 관찰할 수 있다. <출처 : 청송 국가지질공원>"
            },
            ],
        }
    },
    created() {
        console.log("plan trips", this.trips)
    },
    computed: {

    },
    methods: {
    }, mounted() {
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