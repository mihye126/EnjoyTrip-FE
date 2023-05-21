<template>
    <div class="home">
      <navigation-header></navigation-header>
      <plan-input></plan-input>
      <navigation-footer></navigation-footer>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import PlanInput from "@/components/plan/plan-input/PlanInputPage.vue"
  import NavigationFooter from "@/components/navigation/NavigationFooter.vue";
  import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
  
  export default {
    name: "PlanInputView",
    components: {
      NavigationFooter,
      NavigationHeader,
      PlanInput,
    },
  };
  </script>
  