<template>
  <!-- Hero -->
  <main>
    <!-- 게시판 시작-->
    <section class="section-header overflow-hidden pb-0 my-3">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="display-2 mb-3">어디로 떠나고 싶나요?</h1>
            <p>여행을 떠나요</p>
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
            <!-- <TripSearchItem> -->
            <TripSearchItem
              v-for="trip in trips"
              :key="trip.contentID"
              :trip="trip"
            ></TripSearchItem>
          </div>
        </div>
        <div class="row">
          <div style="display: flex; justify-content: center">
            <b-button-toolbar key-nav aria-label="Toolbar with button groups">
              <b-button-group class="mx-1">
                <b-button @click="gotoFrist">&laquo;</b-button>
                <b-button @click="down">&lsaquo;</b-button>
              </b-button-group>
              <b-button-group class="mx-1">
                <b-button>{{ this.page }}</b-button>
              </b-button-group>
              <b-button-group class="mx-1">
                <b-button @click="up">&rsaquo;</b-button>
                <b-button @click="gotoEndPage">&raquo;</b-button>
              </b-button-group>
            </b-button-toolbar>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="section section-md pt-4 mt-3"></div> -->
  </main>
</template>

<script>
import TripSearchItem from "./TripSerchItem.vue";
import TripSearch from "./TripListSearch.vue";

export default {
  components: {
    TripSearchItem,
    TripSearch,
  },
  data() {
    return {
      sidoCode: "",
      contentTypeId: "",
      keyword: "",
      trips: [],
      page: 1,
      endpage: 0,
    };
  },computed:{
     getInput: function(){
      return  this.$store.state.TripSerchStore.input;
    }
  },
  watch:{
    async getInput(input){
      this.sidoCode = input.sidoCode;
      this.contentTypeId = input.contentTypeId;
      this.keyword = input.keyword;
      this.page=input.page;

      await this.setTripSerchItem();
      await this.$store.dispatch("TripSerchStore/EndPageNum", {
      sidoCode: this.sidoCode,
      contentTypeId: this.contentTypeId,
      keyword: this.keyword,
    });
    this.endpage = this.$store.state.TripSerchStore.endPage;
    }

  },
  created: async function () {
    this.sidoCode = this.$route.params.param1;
    this.contentTypeId = this.$route.params.param2;
    this.keyword = this.$route.params.param3;

    await this.setTripSerchItem();
    await this.$store.dispatch("TripSerchStore/EndPageNum", {
      sidoCode: this.sidoCode,
      contentTypeId: this.contentTypeId,
      keyword: this.keyword,
    });
    this.endpage = this.$store.state.TripSerchStore.endPage;
  },
  methods: {
    setTripSerchItem: async function () {
      await this.$store.dispatch("TripSerchStore/TripSerchList", {
        sidoCode: this.sidoCode,
        contentTypeId: this.contentTypeId,
        keyword: this.keyword,
        page: this.page,
      });
      this.trips = this.$store.state.TripSerchStore.TripSerch;
    },
    down: function () {
      if (this.page > 1) {
        this.page--;
        this.moveToPage();
      }
    },
    up: function () {
      if (this.endpage > this.page) {
        this.page++;
        this.moveToPage();
      }
    },
    gotoFrist: function () {
      this.page = 1;
      this.moveToPage();
    },
    gotoEndPage: function () {
      this.page = this.endpage;
      this.moveToPage();
    },
    moveToPage: async function () {
      console.log("검색에서 페이지 이동이 가능합니까? ", this.page);
      await this.setTripSerchItem();
      this.trips = this.$store.state.TripSerchStore.TripSerch;
      console.log(this.trips[0].title);
      console.log(this.$store.state.TripSerchStore.TripSerch[0].title);
    },
  },
};
</script>
