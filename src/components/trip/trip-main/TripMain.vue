<template>
  <main>
    <!-- Hero -->
    <section
      class="section-header overflow-hidden mt-5 pt-7 pt-lg-8 pb-9 pb-lg-12 bg-img text-white"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="fw-bolder display-2">Enjoy Trip</h1>
            <h2 class="lead fw-normal text-muted mb-4 px-lg-10">
              Let Enjoy Trip be your compass to discovering new horizons.
            </h2>
            <TripSearch/>
          </div>
        </div>
      </div>
    </section>

    <div class="section section-sm pb-0 mb-n4">
      <div class="container">
        <div class="row justify-content-center">
          <h3 class="text-center">어디로 떠나고 싶나요?</h3>
        </div>
      </div>

      
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid px-4 px-lg-5">
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
          <form class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#!">항공권</a>
              </li>
              <li class="nav-item"><a class="nav-link" href="#!">숙소</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#!">투어 티켓</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#!">국내 렌터카</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#!">패키지</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#!">호텔 특가</a>
              </li>
              <li>
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >더보기</a
                >
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#!">All Products</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav> -->

    </div>

    <!--End of Title section-->
    <div class="section section-md">
      <div class="container">
        <div class="row mb-5">
          <div class="col-6 col-lg-3 mb-5" v-for="(category, index) in categories" :key="index">
            <router-link to="" target="_blank" class="page-preview scale-up-hover-2">
              <img
                class="shadow-lg rounded scale"
                :src="`${category.img}`"
                :alt="`${category.name}`"
              />
              <div class="text-center show-on-hover">
                <h3 class="h6 m-0 text-center text-white">
                  {{ category.name }}<span class="fas fa-external-link-alt ms-2"></span>
                </h3>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <section class="section bg-tertiary pt-0 pb-0">
      <!-- Section -->
      <div class="section section-md">
        <div class="container">
          <div class="row justify-content-between align-items-center mb-5 mb-lg-7 text-white">
            <div class="col-lg-5 order-lg-2 mb-5 mb-lg-0">
              <h2 class="h1">Let's Go on A Trip</h2>
              <p class="mb-4 lead fw-bold">전국의 여행지를 더 보고 싶다면</p>
              <p class="mb-4">
                Get started building your project using a collection of over 1000 premium web
                components such as buttons, alerts, cards, modals, and many more
              </p>
              <router-link to="" class="btn btn-warning mt-2 animate-up-2">
                Show More
                <span class="me-1">
                  <i class="fa-solid fa-angles-right"></i>
                </span>
              </router-link>
            </div>
            <div class="col-lg-6 order-lg-1">
              <img
                src="@/assets/img/sections/about-us-1.jpg"
                alt="MapBox Leaflet.js Custom Integration Mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Section -->
  </main>
</template>

<script>
import TripSearch from '../TripSearch.vue';
// import http from "@/router/axios-common.js";
export default {
  created() {
  },
  data() {
    return {
      categories: [
        {
          img: require("@/assets/img/location/Seoul.jpg"),
          code: "1",
          name: "Seoul",
        },
        {
          img: require("@/assets/img/location/Jeju.jpg"),
          code: "39",
          name: "Jeju",
        },
        {
          img: require("@/assets/img/location/Busan.jpg"),
          code: "6",
          name: "Busan",
        },
        {
          img: require("@/assets/img/location/Sokcho.jpg"),
          code: "32",
          name: "Sokcho",
        },
        {
          img:require("@/assets/img/location/Suwon.jpg"),
          code: "31",
          name: "Suwon",
        },
        {
          img: require("@/assets/img/location/Jeonju.jpg"),
          code: "38",
          name: "Jeonju",
        },
        {
          img: require("@/assets/img/location/Incheon.jpg"),
          code: "2",
          name: "Incheon",
        },
        {
          img:require("@/assets/img/location/Gangneung.jpg"),
          code: "32",
          name: "Gangneung",
        },
      ],
      ContentTypes: [],
      carousels: [],
      sidos: [],
    };
  },
  methods: {
  },
  components:{
    TripSearch
  }
};
</script>
