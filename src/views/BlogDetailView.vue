<template>
    <div class="home">
      <navigation-header></navigation-header>
      <blog-content></blog-content>
      <navigation-footer></navigation-footer>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import BlogContent from "@/components/blog/blog-detail/BlogContent.vue";
  import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
  import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
  export default {
    name: "BlogInputView",
    components: {
        BlogContent,
      NavigationFooter,
      NavigationHeader,
    },
  };
  </script>
  