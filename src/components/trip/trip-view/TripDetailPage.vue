<template>
  <main>
    <section class="section-header pb-0">
      <div class="container col-lg-8">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 text-center">
            <h1 class="display-3 mb-3">{{ attraction.title }}</h1>
<<<<<<< HEAD
            <h5 class="display-5 mb-3"> {{ attraction.address }}</h5>

=======
            <h5 class="display-5 mb-3">{{ attraction.address }}</h5>
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
          </div>
        </div>
      </div>
    </section>
    <div class="section section-md pt-4 mt-3">
      <div class="container px-5">
        <!-- Button Modal -->
        <div class="row align-items-center pt-4 mb-3">
          <div class="col-lg-8">
            <img :src="attraction.firstImage" />
          </div>

          <div class="col">
            <ul class="list-unstyled mb-4">
<<<<<<< HEAD
              <li class="list-item py-3"><p class="paragraph badge bg-success text-uppercase me-2 px-3">관광지</p></li>
              <li class="list-item pb-3"><p class="paragraph">{{ attraction.overview }}</p></li>
          </ul>

          </div>
        </div>

          <div class="row align-items-center pt-4 mb-3">
            <div class="card text-center">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-md-3">
                <h4 class="text-primary mb-4 mt-2">오늘의 날씨는</h4>
                <span class="d-block">
                  <span class="display-1 text-dark fw-bold">
                    <img :src="sky[1]" class="wheater-img"/>
                  </span>
                  </span>
                </div>
                <div class="col-md-9">

                <ul class="list-unstyled mb-4">
                  <li class="list-item pb-3"><strong>1</strong> free domain</li>
                  <li class="list-item pb-3">Storage space: <strong>5GB</strong></li>
                  <li class="list-item pb-3"><strong>100k</strong> monthly visitors</li>
 
                </ul>
                </div>
              </div>
              </div>
=======
              <li class="list-item py-3">
                <p class="paragraph badge bg-success text-uppercase me-2 px-3">관광지</p>
              </li>
              <li class="list-item pb-3">
                <p class="paragraph">{{ attraction.overview }}</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="row align-items-center pt-4 mb-3">
          <div class="card text-center">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-md-3">
                  <h4 class="text-primary mb-4 mt-2">오늘의 날씨는</h4>
                  <span class="d-block">
                    <span class="display-1 text-dark fw-bold">
                      <img :src="sky[1]" class="wheater-img" />
                    </span>
                  </span>
                </div>
                <div class="col-md-9">
                  <ul class="list-unstyled mb-4">
                    <li class="list-item pb-3"><strong>1</strong> free domain</li>
                    <li class="list-item pb-3">Storage space: <strong>5GB</strong></li>
                    <li class="list-item pb-3"><strong>100k</strong> monthly visitors</li>
                  </ul>
                </div>
              </div>
            </div>
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
          </div>
        </div>
        <div class="row align-items-center pt-4 mb-3">
          <!-- kakao map start -->
<<<<<<< HEAD
            <trip-map></trip-map>
          </div>
        <div class="row justify-content-sm-center align-items-center py-3">

          <div class="col-12 col-lg-10  my-1 ">
            <div class="d-flex justify-content-center">
              <AwesomeVueStarRating :star="this.star" :disabled="true" :maxstars="this.maxstars" :starsize="`2x`"
                :hasresults="this.hasresults" :hasdescription="this.hasdescription" />
=======
          <trip-map></trip-map>
        </div>
        <div class="row justify-content-sm-center align-items-center py-3">
          <div class="col-12 col-lg-10 my-1">
            <div class="d-flex justify-content-center">
              <AwesomeVueStarRating
                :star="this.star"
                :disabled="true"
                :maxstars="this.maxstars"
                :starsize="`2x`"
                :hasresults="this.hasresults"
                :hasdescription="this.hasdescription"
              />
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
            </div>
            <div class="d-flex justify-content-center">
              <h5>4.5 ( 45 Reviews )</h5>
            </div>

            <div class="d-flex justify-content-center my-2">
              <b-button v-b-modal.modal-1> 별점 주러가기</b-button>

              <b-modal id="modal-1" title="별점 매기기">
                <div class="d-flex justify-content-center">
<<<<<<< HEAD
                  <AwesomeVueStarRating :star="this.star" :disabled="false" :maxstars="this.maxstars" :starsize="`2x`"
                    :hasresults="this.hasresults" :hasdescription="this.hasdescription" />
                </div>
              </b-modal>
            </div>


=======
                  <AwesomeVueStarRating
                    :star="this.star"
                    :disabled="false"
                    :maxstars="this.maxstars"
                    :starsize="`2x`"
                    :hasresults="this.hasresults"
                    :hasdescription="this.hasdescription"
                  />
                </div>
              </b-modal>
            </div>
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
          </div>

          <div class="col-12 col-lg-9">
            <div class="row">
              <utterances-comment></utterances-comment>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD



=======
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
  </main>
</template>

<script>
<<<<<<< HEAD
import UtterancesComment from '../../board/UtterancesComment.vue';
import AwesomeVueStarRating from 'awesome-vue-star-rating'
import TripMap from './TripDetailMap.vue';

=======
import UtterancesComment from "../../board/UtterancesComment.vue";
import AwesomeVueStarRating from "awesome-vue-star-rating";
import TripMap from "./TripDetailMap.vue";
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf

export default {
  components: {
    UtterancesComment,
    AwesomeVueStarRating,
<<<<<<< HEAD
    TripMap
=======
    TripMap,
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
  },
  data() {
    return {
      attraction: [],
      star: 5, // default star
      hasresults: false,
      hasdescription: false,
<<<<<<< HEAD
      starsize: 'lg', //[xs,lg,1x,2x,3x,4x,5x,6x,7x,8x,9x,10x],
      maxstars: 5,
      disabled: false,
      sky:{
        1:  require("@/assets/icons/sun.png"),
      }
=======
      starsize: "lg", //[xs,lg,1x,2x,3x,4x,5x,6x,7x,8x,9x,10x],
      maxstars: 5,
      disabled: false,
      sky: {
        1: require("@/assets/icons/sun.png"),
      },
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
    };
  },
  created() {
    this.$store.dispatch("tripDetailStore/TripDetailinfo", this.$route.params.contentID);
    this.setAttraction();
    console.log(this.attraction.first_Image);
    this.getFormattedLatitude();
  },
  methods: {
    setAttraction: function () {
      this.attraction = this.$store.state.tripDetailStore.attraction;
    },
    getFormattedLatitude() {
      this.attraction.latitude = parseFloat(this.attraction.latitude).toFixed(2);
      this.attraction.longitude = parseFloat(this.attraction.longitude).toFixed(2);
    },
  },
};
</script>
<style lang="scss">
.star {
  color: "#f3d23e";
}

.star.active {
  color: "#f3d23e";
}

.list,
.list.disabled {
  &:hover {
    .star {
      color: "#f3d23e" !important;
    }

    .star.active {
      color: "##f3d23e";
    }
  }
}

.progress .progress-bar {
  background: #f3d23e;
}

<<<<<<< HEAD
.wheater-img{
  height: 10rem;
  width: 10rem;

}

.paragraph{
  line-height:200%
=======
.wheater-img {
  height: 10rem;
  width: 10rem;
}

.paragraph {
  line-height: 200%;
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
}
</style>
