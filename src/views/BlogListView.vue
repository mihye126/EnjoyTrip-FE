<template>
    <div class="home">
      <navigation-header></navigation-header>
      <blog-list></blog-list>
      <navigation-footer></navigation-footer>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
  import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
import BlogList from '@/components/blog/blog-list/BlogListPage.vue';
  export default {
    name: "BlogListView",
    components: {
      BlogList,
      NavigationFooter,
      NavigationHeader,
    },
  };
  </script>
  