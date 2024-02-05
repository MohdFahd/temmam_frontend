<template>
  <section id="Call_Center" class="scroll-smooth">
    <h5 class="text-center text-[#F3AF1C] text-xl sm:p-6 p-0">
      Call Center
    </h5>
    <h1
      class="text-center sm:text-5xl/[40px] text-3xl font-bold text-[#0F113C] sm:my-0 my-2"
    >
      Our Special Service
    </h1>
    <div
      class="flex flex-wrap justify-center items-center sm:my-10 gap-5 rounded text-white mt-3"
    >
      <router-link
        :to="{ name: 'CallCenter', params: { id: Service.id } }"
        v-for="Service in Services"
        :key="Service.id"
      >
        <Card :ImgClass="Class" :Contents="Service" :ParClass="ParClass" />
      </router-link>
    </div>

    <a
      href=""
      class="flex justify-center hover:opacity-90 text-[#212AE4] font-extrabold sm:mt-0 mt-4"
    >
      browse all
      <span><img src="assets/imgs/left-arrorw.svg" class="mx-1" alt="" /></span
    ></a>
  </section>
</template>

<script>
import Card from "../Resources/Card";

import { ref } from "vue";
export default {
  name: "CallCenters",
  components: {
    Card,
  },
  data() {
    return {
      Class: "bg-[#F3AF1C] rounded-full ",
      Services: [],
      ParClass:
        "cursor-pointer mx-3 drop-shadow-lg bg-white p-5 w-[270px] h-[252px] text-center text-black hover:text-white hover:bg-[#0F136B] rounded-xl mx-3 flex flex-col items-center",
    };
  },

  mounted() {
    fetch("http://localhost:3000/CallCenter")
      .then((res) => res.json())
      .then((data) => (this.Services = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
