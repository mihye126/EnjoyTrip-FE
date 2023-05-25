<template>
  <div class="card shadow px-4 py-1 mb-6">
    <div class="card-body text-center text-md-left">
      <div class="row align-items-center">
        <div class="col-12 col-md-3 mt-4 mt-md-0 text-md-right">
          <img :src="trip.firstImage" :alt="trip.title" />
        </div>
        <div class="col-md-9">
          <router-link :to="`/trips/${trip.contentID}`"
            ><h4 class="mb-3">{{ trip.title }}</h4></router-link
          >
          <p class="mb-4">{{ trip.address }}</p>
          <p class="mb-4">{{ trip.tel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["trip"],
};
</script>
