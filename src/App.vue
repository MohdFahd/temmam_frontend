<template>
  <header-one />
  <!--  -->
  <router-view />
  <FooterPage />
</template>

<script>
import FooterPage from "./components/FooterPage.vue";
import HeaderOne from "./components/HeaderOne.vue";

export default {
  components: { HeaderOne, FooterPage },
};
</script>
