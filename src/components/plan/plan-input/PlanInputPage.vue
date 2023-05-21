<!-- 경로를 볼수 있어야함
관련되어서 지도를 볼수 있어야한다. -->

<template>
    <main>
        <section class="section-header pb-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 text-center">
                        <h1 class="mb-3">나만의 여행계획을 세워보세요</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-lg pt-6">
            <div class="container">
                <div class="row justify-content-center mb-5 mb-lg-6">
                    <div class="col-lg-9 mb-5">
                        <label for="name">제목</label>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="제목을 입력해주세요" id="title" required=""
                                name="title">
                        </div>
                    </div>
                    <div class="row justify-content-center mb-5 mb-lg-6">

                        <div class="col-lg-8">
                            <plan-map v-model=trips></plan-map>
                        </div>
                        <div class="col-lg-4">
                            <draggable v-model="trips" group="people" @start="drag = true" @end="drag = false">

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

                            <b-button  v-b-modal="'modal-default'"  class="card">
                                <div class="card-body px-3 py-3 text-center text-md-left ">
                                    <div class="d-flex justify-content-center">
                                        <div class=" btn-icon"><i class="fa-solid fa-plus"></i></div>
                                    </div>
                                </div>

                            </b-button>

                            <b-modal class="modal" id="modal-default" aria-labelledby="modal-default">
                                <div class="modal-body">
                                            <p>With less than a month to go before the European Union enacts new consumer
                                                privacy laws for its citizens, companies around the world are updating their
                                                terms of service agreements to comply.</p>
                                            <p>The European Union’s General Data Protection Regulation (G.D.P.R.) goes into
                                                effect on May 25 and is meant to ensure a common set of data rights in the
                                                European Union. It requires organizations to notify users as soon as
                                                possible of high-risk data breaches that could personally affect them.</p>
                                        </div>
                            </b-modal>
                        </div>

                    </div>
                    <div class="row">

                        <button type="submit" class="btn rounded btn-secondary" @click="updateBlog">저장하기</button>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>

<script>
// import http from "@/router/axios-common.js";
import PlanMap from "../PlanMap.vue";
import draggable from "vuedraggable";
import { mapState, mapActions } from "vuex";

export default {
    components: {
        PlanMap,
        draggable
    },
    computed: {
        ...mapState("planStore", ["trips", "trip_ids"]),
    },
    methods: {
        ...mapActions("planStore", ["GET_TRIP_INFO"])
    },mounted(){
        this.GET_TRIP_INFO()
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
}</style>