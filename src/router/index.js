import Vue from "vue";
import VueRouter from "vue-router";

import TripMainView from "@/views/TripMainView.vue";
import LoginView from "@/views/LoginView.vue";
import MyPageView from "@/views/MyPageView.vue";
import BlogInputView from "@/views/BlogInputView.vue";
import TripDetailView from "@/views/TripDetailView.vue";
import PlanInputView from "@/views/PlanInputView.vue";
import BlogDetailView from "@/views/BlogDetailView.vue";
import TripListView from "@/views/TripListView.vue";
import NoticeListView from "@/views/NoticeListView.vue";

Vue.use(VueRouter);

//VueRouter전역사용 위해.
//VueRouter(플러그인)은 일반적으로 전역 수준 기능을 Vue에 추가
//플러그인은 여러 컴포넌트에서 사용되는(특히 전역) 기능을 만들 때 사용
//this.$router로 접근 가능

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: TripMainView, name: "TripMainView" },
    { path: "/trips", component: TripListView },
    { path: "/trips?sidocode=:sidocode", component: TripListView },
    { path: "/login", component: LoginView },
    { path: "/mypage", component: MyPageView },
    { path: "/blogs/new", component: BlogInputView },
    { path: "/trips/:contentID", component: TripDetailView },
    { path: "/plans/new", component: PlanInputView },
    { path: "/blogs/1", component: BlogDetailView },
    { path: "/notice/list", component: NoticeListView },

    /* { path: "/modify/:no", component: TodoModify },
		{ path: "/deleteAll", component: TodoModify },  */
  ],
});
