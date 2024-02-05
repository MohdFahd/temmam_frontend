<template>
  <section class="min-w-4xl flex flex-col sm:mx-14 p-3" id="Services">
    <h5 class="text-center text-[#F3AF1C] text-xl p-6 scroll-mb-32">
      Features
    </h5>
    <h1
      class="text-center sm:text-5xl/[40px] text-4xl font-bold text-[#0F113C] sm:mb-0 mb-5 items-end"
    >
      Features and Services
    </h1>

    <Card
      :ImgClass="Class"
      :ParClass="ParClass"
      v-for="(service, index) in Services"
      :key="index"
      :Contents="service"
      :class="{ 'self-start': index % 2 === 0, 'self-end': index % 2 !== 0 }"
    />
    <div
      class="cursor-pointer bg-white p-10 text-black rounded-xl flex flex-col sm:flex-row shadow-md sm:w-1/2 mb-3"
    >
      <img
        src="assets/imgs/CallCenter.svg"
        class="w-[80px] h-[80px] self-center mx-3"
        alt=""
      />
      <div class="mx-4">
        <h2 class="text-xl py-3 font-extrabold">call center system</h2>
        <p class="text-lg font-normal w-[80%]">
          We Provide Integrated Call Center Services In Equipment And Software
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "../components/Resources/Card";
export default {
  data() {
    return {
      Services: [],
      Class: "w-[80px] h-[80px] self-center mx-5",
      ParClass:
        "cursor-pointer mt-5  bg-white p-10 text-black rounded-xl flex flex-col sm:flex-row items-start shadow-md sm:w-1/2 mb-3",
    };
  },
  components: {
    Card,
  },
  mounted() {
    fetch("http://localhost:3000/Services")
      .then((res) => res.json())
      .then((data) => (this.Services = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
