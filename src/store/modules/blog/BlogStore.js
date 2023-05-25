import {  blogAllList, blogCount, deletePost, insertPost, modifyPost, blogFindById } from "./BlogFunction";

export const BlogStore = {
  namespaced: true,
  state: {
    posts: [],
    blogCount:0,
    post:{}
  },
  getters: {
    allPosts:function(state){
      return state.posts
    },
    getPost:function(state){
      return state.post
    },
    getCount:function(state){
      return state.blogCount
    },
  },
  mutations: {
    SET_BLOG_ALL: (state, data) => {
      state.posts = data;
    },
    SET_BLOG: (state, data) => {
      state.post = data;
    },
    SET_BLOG_COUNT: (state, data) => {
      state.blogCount = data;
    }
  },

  actions: {
    async BlogList({ commit }) {
      await blogAllList(
        ({ data }) => {
          if (data.error == null) {
            commit("SET_BLOG_ALL", data.data);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
    async BlogRead({ commit }, id) {
      await blogFindById(id,
        ({ data }) => {
          if (data.error == null) {
            commit("SET_BLOG", data.data);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
    async BlogCount({ commit }) {
      await blogCount(
        ({ data }) => {
          if (data.error == null) {
            commit("SET_BLOG_COUNT", data.data.count);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
    async DeletePost({ commit }, id) {
      await deletePost(
        id,
        ({ data }) => {
          console.log(data);
          if (data.error == null) {
            commit("SET_BLOG_ALL", data.data);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },

    async InsertPost({ commit }, blog) {
      await insertPost(
        blog,
        ({ data }) => {
          console.log(data);
          if (data.error == null) {
            commit("SET_BLOG_ALL", data.data);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },

    async ModifyPost({ commit }, blog) {
      await modifyPost(
        blog,
        ({ data }) => {
          if (data.error == null) {
            // console.log(data, commit);
            commit("SET_BLOG", data.data);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
