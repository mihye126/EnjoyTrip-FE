<template>
    <div class="home">
      <navigation-header></navigation-header>
      <blog-input></blog-input>
      <navigation-footer></navigation-footer>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import BlogInput from "@/components/blog/blog-input/BlogInputPage.vue";
  import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
  import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
  export default {
    name: "BlogInputView",
    components: {
    BlogInput,
      NavigationFooter,
      NavigationHeader,
    },
  };
  </script>
  