<template>
  <main>
    <section class="section-header pb-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 text-center">
            <h1 class="display-2 mb-3">{{ attraction.title }}</h1>
          </div>
        </div>
      </div>
    </section>
    <div class="section section-md pt-4 mt-3">
      <div class="container">
        <!-- Button Modal -->
        <div class="row align-items-center pt-4 mb-3">
          <!-- kakao map start -->
          <div class="col">
            <div id="map" style="width: 100%; height: 400px"></div>
            <!-- kakao map end -->
          </div>
          <div class="col">
            <table class="table table-hover" style="table-layout: fixed">
              <tbody>
                <tr>
                  <td colspan="1"><b>대표 이미지</b></td>
                  <td colspan="3">
                    <img :src="attraction.firstImage" style="max-width: 350px; height: 100%" />
                  </td>
                </tr>
                <tr>
                  <td colspan="1"><b>주소</b></td>
                  <td colspan="3">{{ attraction.address }}</td>
                </tr>
                <tr>
                  <td><b>위도</b></td>
                  <td>{{ attraction.latitude }}</td>
                  <td><b>경도</b></td>
                  <td>{{ attraction.longitude }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row justify-content-center pt-3">
          <div class="col-12">
            <p>{{ attraction.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      attraction: [],
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
<style></style>
