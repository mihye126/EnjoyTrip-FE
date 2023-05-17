<template>
  <section class="section-header">
    <div class="container">
      <div class="row justify-content-center">
        <!-- 상세정보 시작-->
        <div class="col-8 card border-gray-300 p-0 p-md-4 mb-4">
          <div class="card-body">
            <h3 class="h5 mb-0">사용자 정보 수정</h3>
            <form
              action="/account/updateUserProcess"
              method="post"
              class="form mt-5"
              autocomplete="off"
            >
              <div class="mb-4">
                <label for="id">사용자 ID</label><br />

                <input
                  type="text"
                  class="form-control"
                  id="id"
                  name="id"
                  required=""
                  v-model="user.id"
                  disabled
                />
              </div>
              <div class="mb-4">
                <label for="pass">비밀번호</label><br />

                <input
                  type="text"
                  class="form-control"
                  id="pass"
                  name="pass"
                  required=""
                  v-model="user.pw"
                />
              </div>
              <div class="mb-4">
                <label for="InfoName">사용자 이름</label><br />

                <input
                  type="text"
                  class="form-control"
                  id="InfoName"
                  required=""
                  name="username"
                  v-model="user.name"
                />
              </div>
              <div class="form-group">
                <div class="col-md-2" style="float: left">
                  <div class="d-grid">
                    <button
                      type="button"
                      class="btn btn-danger mb-3"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-default"
                      @click="deleteusermodal"
                    >
                      탈퇴
                    </button>
                  </div>
                  <div
                    class="modal fade"
                    id="modal-default"
                    tabindex="-1"
                    aria-labelledby="modal-default"
                    style="display: none"
                    aria-hidden="true"
                    v-if="opendeletemodal == true"
                  >
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h2 class="h6 modal-title">정말로 탈퇴하시겠습니까?</h2>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-footer">
                          <button type="button" @click="delectUser">탈퇴</button>
                          <button
                            type="button"
                            class="btn btn-link ms-auto"
                            data-bs-dismiss="modal"
                            @click="opendeletemodal"
                          >
                            아니오
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-dark col-md-2"
                  @click.prevent="gotoLoginUpdate"
                  style="float: right"
                >
                  저장
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "test",
        pw: "wnd",
        name: "dkq",
      },
      deleteusermodal: false,
    };
  },
  methods: {
    gotoLoginUpdate() {},
    deleteUser() {},
    opendeletemodal() {
      if (this.deleteusermodal) this.deleteusermodal = false;
      else this.deleteusermodal = true;
    },
  },
};
</script>

<style></style>
