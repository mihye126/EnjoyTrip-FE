<template>
    <div class="home">
      <navigation-header></navigation-header>
      <blog-edit></blog-edit>
      <navigation-footer></navigation-footer>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
  import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
import BlogEdit from '@/components/blog/blog-edit/BlogEditPage.vue';
  export default {
    name: "BlogEditView",
    components: {
      BlogEdit,
      NavigationFooter,
      NavigationHeader,
    },
  };
  </script>
  