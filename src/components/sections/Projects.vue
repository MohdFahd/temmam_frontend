<template>
  <section id="Projects">
    <h5 class="text-center text-[#F3AF1C] text-xl p-6 scroll-mb-32">
      recent work
    </h5>
    <h1
      class="text-center sm:text-5xl/[40px] text-4xl font-bold text-[#0F113C] sm:mb-0 mb-5"
    >
      our recent projects
    </h1>
    <div
      class="lg:grid-cols-2 gap-6 my-10 rounded p-10 text-white hidden lg:grid flex-wrap"
    >
      <Card
        :ImgClass="Class"
        :ParClass="ParClass"
        v-for="Project in Projects"
        :key="Project"
        :Contents="Project"
      />
    </div>
    <!-- This section will be visible on small screens -->
    <div class="block lg:hidden">
      <Card
        :ImgClass="Class"
        :ParClass="ParClassMobile"
        v-for="Project in Projects"
        :key="Project"
        :Contents="Project"
      />
    </div>
  </section>
</template>

<script>
import Card from "../Resources/Card";

import { ref } from "vue";
export default {
  name: "Projects",
  components: {
    Card,
  },
  data() {
    return {
      Class: "",
      ParClass:
        "cursor-pointer mx-2 flex items-center drop-shadow-lg bg-white p-5 w-[548px] h-[236px] text-black rounded-xl ",
      ParClassMobile:
        "my-3 cursor-pointer mx-3 flex flex-col items-center drop-shadow-lg bg-white p-5 text-black rounded-xl text-centers",
    };
  },
  setup() {
    const Projects = ref([
      {
        id: 1,
        title: "Help Desk System",
        img: "assets/imgs/RecentWork.svg",
        desc:
          "We Provides Integrated Call Center Services In An Equipment AndSoftware.",
      },
      {
        id: 2,
        title: "Help Desk System",
        img: "assets/imgs/RecentWork.svg",
        desc:
          "We Provides Integrated Call Center Services In An Equipment AndSoftware.",
      },
      {
        id: 3,
        title: "Help Desk System",
        img: "assets/imgs/RecentWork.svg",
        desc:
          "We Provides Integrated Call Center Services In An Equipment AndSoftware.",
      },
      {
        id: 3,
        title: "Help Desk System",
        img: "assets/imgs/RecentWork.svg",
        desc:
          "We Provides Integrated Call Center Services In An Equipment AndSoftware.",
      },
    ]);
    return { Projects };
  },
};
</script>

<style></style>
