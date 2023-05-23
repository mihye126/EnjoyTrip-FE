<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button
          v-b-toggle="`${notice.id}`"
          :class="this.visible ? null : 'collapsed'"
          :aria-expanded="this.visible ? 'true' : 'false'"
          aria-controls="collapse-4"
          variant="light"
          @click="this.visible = !this.visible"
          class="m-1 accordion-header"
          role="tab"
          >{{ notice.title }}</b-button
        >
      </b-card-header>

      <!-- Element to collapse -->
      <b-card-body>
        <b-collapse
          :id="`${notice.id}`"
          role="tabpanel"
          accordion="product-accordion"
          class="mb-4"
          v-model="this.visible"
        >
          {{ notice.content }}
          <div class="row-2 float-right">
            <button class="btn btn-primary me-1 mt-3" @click="modifyNotice">수정</button>
            <button class="btn btn-danger me-1 mt-3" @click="deleteNotice">삭제</button>
          </div>
        </b-collapse>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["notice"],
  data() {
    return {
      visible: false,
      // num: "",
    };
  },
  created() {
    this.num = this.notice.id;
    console.log(this.num);
  },
  methods: {
    deleteNotice: function () {
      // this.$store.dispatch(`/notice/delete?num=${this.notice.id}`);
    },
    modifyNotice: function () {
      // this.$stpre.dispatch(``);
    },
  },
};
</script>
