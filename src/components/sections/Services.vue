<template>
  <section
    class="flex justify-between items-center flex-wrap lg:flex-nowrap"
    id="Services"
  >
    <div class="flex flex-col w-[100%] sm:p-20 p-5">
      <h6 class="text-xl py-3 text-[#F3AF1C]">Our Services</h6>
      <h1 class="sm:text-5xl/[50px] text-3xl font-bold text-[#0F113C]">
        latest from the services
      </h1>
      <p class="text-lg w-[80%] py-3 text-gray-600">
        The most service we provide in Temmam light
      </p>
      <router-link to="/Services">
        <Button :text="text" />
      </router-link>
    </div>
    <!--  -->

    <div class="grid sm:grid-cols-2 grid-cols-1 gap-6 p-5">
      <Card
        :ImgClass="Class"
        :ParClass="ParClass"
        v-for="service in Services"
        :key="service"
        :Contents="service"
      />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import Button from "../Resources/Button";
import Card from "../Resources/Card";
import data from "/data/db.json";

export default {
  name: "Services",
  components: {
    Card,
    Button,
  },
  data() {
    return {
      Services: data["Services"],
      text: "View All",
      ParClass:
        "cursor-pointer bg-white p-10 text-black rounded-xl flex flex-col items-start shadow-md",
    };
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
