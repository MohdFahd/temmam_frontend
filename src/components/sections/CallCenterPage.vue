<template>
  <div>
    <!-- Check if Service is available -->
    <div v-if="Service">
      <section
        class="min-w-4xl flex justify-between flex-col md:flex-row sm:mx-14"
        id="Service"
      >
        <div class="container w-[100%] sm:mx-10">
          <h6 class="text-xl py-3 text-[#c4beb2]">call center system</h6>
          <h1 class="sm:text-4xl text-4xl font-bold text-[#0F113C]">
            {{ Service.title }}
          </h1>
          <p class="text-lg py-3 text-gray-600">
            {{ Service.paragraph }}
          </p>
        </div>
        <div class="w-[90%] flex justify-center items-center">
          <img src="assets/imgs/CallCenterPage.svg" alt="" />
        </div>
      </section>

      <section class="sm:w-[75%] sm:mx-[82px] mb-5 p-3">
        <h1 class="sm:text-5xl/[50px] text-4xl font-bold text-[#0F113C]">
          main features
        </h1>
        <div class="mt-10 grid sm:grid-cols-2">
          <div class="flex items-center my-4">
            <img
              src="assets/imgs/Features 1.svg"
              class="bg-[#F3AF1C] rounded-full p-3"
              alt=""
            />
            <h1 class="text-xl font-bold mx-4">format partition</h1>
          </div>
          <div class="flex items-center my-4">
            <img
              src="assets/imgs/Features 2.svg"
              class="bg-[#F3AF1C] rounded-full p-3"
              alt=""
            />
            <h1 class="text-xl font-bold mx-4">
              create tasks
            </h1>
          </div>
          <div class="flex items-center my-4">
            <img
              src="public/assets/imgs/Features 3.svg"
              class="bg-[#F3AF1C] rounded-full p-3"
              alt=""
            />
            <h1 class="text-xl font-bold mx-4">
              Creating departments or services
            </h1>
          </div>
          <div class="flex items-center my-4">
            <img
              src="/assets/imgs/Features 4.svg"
              class="bg-[#F3AF1C] rounded-full p-3"
              alt=""
            />
            <h1 class="text-xl font-bold mx-4">
              upload the numbers to be called as an excel file
            </h1>
          </div>
          <div class="flex items-center my-4">
            <img
              src="/assets/imgs/Features 5.svg"
              class="bg-[#F3AF1C] rounded-full p-3"
              alt=""
            />
            <h1 class="text-xl font-bold mx-4">
              define questions and collect answer
            </h1>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <!-- Display a message when Service is not available -->
      Data not found
    </div>
  </div>
</template>

<script>
import data from "data/db.json";

export default {
  name: "CallCenter",
  props: ["id"],
  data() {
    return {
      Class: "bg-[#F3AF1C] rounded-full",
      Service: data["CallCenter"][this.id - 1],
    };
  },

  // beforeRouteEnter(to, from, next) {
  //   // Use the provided id parameter to fetch data before the component is created
  //   fetch("http://localhost:3000/CallCenter?id=" + to.params.id)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // Pass the fetched data to the next callback
  //       next((vm) => {
  //         vm.Service = data[0];
  //       });
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching data:", err.message);
  //       // Handle errors or set Service to null
  //       next((vm) => {
  //         vm.Service = null;
  //       });
  //     });
  // },
};
</script>

<style></style>
