<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
<<<<<<< HEAD
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
=======
        <div v-if="!editeMode">
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
        </div>
        <div v-else>
          <input type="text" v-model="editNotice.title" class="form-control" />
        </div>
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
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
<<<<<<< HEAD
          {{ notice.content }}
          <div class="row-2 float-right">
            <button class="btn btn-primary me-1 mt-3" @click="modifyNotice">수정</button>
            <button class="btn btn-danger me-1 mt-3" @click="deleteNotice">삭제</button>
=======
          <div v-if="!editeMode">
            {{ notice.content }}
            <div
              v-if="this.$store.getters['userStore/checkIsAdmin'] === true"
              class="row-2 float-right"
            >
              <button class="btn btn-primary me-1 mt-3" @click="modifyediteMode">수정</button>
              <button class="btn btn-danger me-1 mt-3" @click="deleteNotice">삭제</button>
            </div>
          </div>

          <div v-else>
            <textarea v-model="editNotice.content" class="form-control" rows="10"></textarea>
            <div class="row-2 float-right">
              <button class="btn btn-primary me-1 mt-3" @click="modifyNotice">저장</button>
              <button class="btn btn-danger me-1 mt-3" @click="cancelEdit">취소</button>
            </div>
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
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
<<<<<<< HEAD
    };
  },
  // created() {
  //   this.num = this.notice.id;
  //   console.log(this.num);
  // },
  methods: {
    deleteNotice: function () {
      this.$store.dispatch("NoticeStore/DeleteItem", this.notice.id);
    },
    modifyNotice: function () {
      // this.$stpre.dispatch(``);
=======
      editeMode: false,
      editNotice: {
        id: "",
        title: "",
        content: "",
      },
    };
  },
  created() {
    this.editeMode = false;
    this.editNotice.id = this.notice.id;
    this.editNotice.title = this.notice.title;
    this.editNotice.content = this.notice.content;
  },
  methods: {
    deleteNotice: async function () {
      await this.$store.dispatch("NoticeStore/DeleteItem", this.notice.id);
      this.$emit("moving");
    },
    modifyediteMode: function () {
      this.editeMode = true;
    },
    modifyNotice: async function () {
      await this.$store.dispatch("NoticeStore/ModifyItem", this.editNotice);
      this.editeMode = false;
      console.log("여긴");
      this.$emit("moving");
    },
    cancelEdit: function () {
      this.editeMode = false;
      this.editNotice.id = this.notice.id;
      this.editNotice.title = this.notice.title;
      this.editNotice.content = this.notice.content;
>>>>>>> 4c706ce4c3ccbfddcd54c9c794e8c6cbea0c47cf
    },
  },
};
</script>
