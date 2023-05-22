<template>
    <div class="home">
      <navigation-header></navigation-header>
      <blog-detail></blog-detail>
      <navigation-footer></navigation-footer>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import BlogDetail from "@/components/blog/blog-detail/BlogDetailPage.vue";
  import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
  import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
  export default {
    name: "BlogDetailView",
    components: {
        BlogDetail,
      NavigationFooter,
      NavigationHeader,
    },
  };
  </script>
  