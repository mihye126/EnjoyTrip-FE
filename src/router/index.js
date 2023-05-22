import Vue from "vue";
import VueRouter from "vue-router";

import TripMainView from "@/views/TripMainView.vue";
import LoginView from "@/views/LoginView.vue";
import MyPageView from "@/views/MyPageView.vue";
import BlogInputView from "@/views/BlogInputView.vue";
import TripDetailView from "@/views/TripDetailView.vue";
import PlanInputView from "@/views/PlanInputView.vue"
import BlogDetailView from "@/views/BlogDetailView.vue"

Vue.use(VueRouter);

//VueRouter전역사용 위해.
//VueRouter(플러그인)은 일반적으로 전역 수준 기능을 Vue에 추가
//플러그인은 여러 컴포넌트에서 사용되는(특히 전역) 기능을 만들 때 사용
//this.$router로 접근 가능

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: TripMainView, name: "TripMainView" },
    { path: "/trips", component: TripMainView },
    { path: "/trips?sidocode=:sidocode", component: TripMainView },
    { path: "/login", component: LoginView },
    { path: "/mypage", component: MyPageView },
    { path: "/blog/new", component: BlogInputView },
    { path: "/trip/:contentID", component: TripDetailView },
    { path: "/plan/new", component: PlanInputView },
    { path: "/blog/1", component: BlogDetailView },


    /* { path: "/modify/:no", component: TodoModify },
		{ path: "/deleteAll", component: TodoModify },  */
  ],
});
