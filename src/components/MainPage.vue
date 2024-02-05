<template>
  <main>
    <HomeSection />
    <!--  -->
    <CallCenter />
    <!--  -->
    <AboutSection />
    <!--  -->
    <Services />
    <!--  -->
    <Projects />
    <!--  -->
    <Testimonial />
    <!--  -->
    <Our_Clients />
  </main>
</template>

<script>
import HomeSection from "./sections/HomeSection";
import CallCenter from "./sections/CallCenter";
import AboutSection from "./sections/AboutSection";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Testimonial from "./sections/Testimonial";
import Our_Clients from "./sections/Our_Clients";

export default {
  name: "MainPage",
  components: {
    HomeSection,
    CallCenter,
    AboutSection,
    Services,
    Projects,
    Testimonial,
    Our_Clients,
  },
};
</script>

<style></style>
