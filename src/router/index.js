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
import NoticeInsertView from "@/views/NoticeInsertView.vue";
import UserRegisterView from "@/views/UserRegisterView.vue";
import TripRecommendView from "@/views/TripRecommendView.vue";
import BlogEditView from "@/views/BlogEditView.vue";
import BlogListView from "@/views/BlogListView.vue";
import TripSerchView from "@/views/TripSerchView.vue";
import ErrorView from "@/views/ErrorView.vue";

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
    { path: "/trips?sidocode=:sidocode&contentTypeID=:contentTypeID&keyword=:keyword", component: TripListView },
    { path: "/trips?sidocode=:sidocode&keyword=:keyword", component: TripListView },
    // { path: "/trips", component: TripListView },
    // { path: "/trips?sidocode=:sidocode", component: TripListView },
    { path: "/login", component: LoginView },
    { path: "/mypage", component: MyPageView },
    { path: "/blogs", component: BlogListView },
    { path: "/blogs/new", component: BlogInputView },
    { path: "/blogs/edit/:id", component: BlogEditView },
    { path: "/trips/:contentID", component: TripDetailView },
    { path: "/plans/new", component: PlanInputView },
    { path: "/blogs/:id", component: BlogDetailView },
    { path: "/notice/list", component: NoticeListView },
    { path: "/notice/insert", component: NoticeInsertView },
    { path: "/register", component: UserRegisterView },
    {path:"/recommend",component: TripRecommendView},
    {
      path: "/trips/serch",
      component: TripSerchView,
      name: "TripSerchView",
    },

    {path:"/:error",component: ErrorView},

    // {
    //   path: "/trips?sidoCode=:sidoCode&contentTypeID=:contentTypeID&keyword=:keyword",
    //   component: TripSerchView,
    // },

    /* { path: "/modify/:no", component: TodoModify },
		{ path: "/deleteAll", component: TodoModify },  */
  ],
});
