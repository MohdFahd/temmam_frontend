<template>
  <div class="home">
    <MainPage />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderOne from "../components/HeaderOne";
import MainPage from "../components/MainPage";
import FooterPage from "../components/FooterPage";

export default {
  name: "HomeView",
  components: { HeaderOne, MainPage, FooterPage },
};
</script>
