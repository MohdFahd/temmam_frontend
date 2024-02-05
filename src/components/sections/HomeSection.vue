<template>
  <section
    class="min-w-4xl justify-between capitalize flex flex-col md:flex-row"
  >
    <div class="flex flex-col sm:w-[100%] sm:mx-24 mx-5">
      <h6 class="text-xl py-3 text-[#F3AF1C]">why choose us</h6>
      <h1
        class="text-3xl sm:leading-[62px] leading-normal sm:text-[50px] font-bold sm:w-[70%] text-[#0F113C]"
      >
        developing solutions for the future
      </h1>
      <p class="text-lg sm:w-[80%] py-3 text-gray-600">
        specializes in software development and call center consultation
        development and call center consultation
      </p>
      <Button :text="text" />
    </div>
    <div class="relative w-[90%]">
      <div
        class="drop-shadow-lg bg-white text-center text-black rounded-xl absolute top-[130px] left-[-50px] w-[200px] p-3"
      >
        <h2 class="text-2xl font-extrabold text-[#F3AF1C]">
          15k <span class="text-[#0F136B]">+</span>
        </h2>
        <p class="text-sm font-normal">
          clients who trust us
        </p>
      </div>
      <div
        class="drop-shadow-lg bg-white text-center text-black rounded-xl absolute top-[90px] right-0 w-[200px] p-3"
      >
        <h2 class="text-2xl font-bold text-[#0F113C] flex gap-2">
          <img src="assets/imgs/Stocks.svg" alt="" />
          7Years <span class="text-[#0F136B]">+</span>
        </h2>
        <p class="text-sm font-normal">
          experiences the excellence
        </p>
      </div>
      <div
        class="drop-shadow-lg bg-white text-center text-black rounded-xl absolute bottom-[50px] right-0 w-[200px] p-3"
      >
        <p class="text-sm[17px] text-[#0F113C] flex font-bold">
          service was fast and i got what i requested
        </p>
        <div class="flex">
          <img src="assets/imgs/person.svg" alt="" />
          <div class="text-start mx-2">
            <h1 class="text-sm[12px] font-bold">lamis saleem</h1>
            <h1 class="text-sm[10px]">customer service</h1>
          </div>
        </div>
      </div>
      <div class="w-full">
        <img src="assets/imgs/main.svg" class="w-full" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../Resources/Button";
export default {
  name: "HomeSection",
  components: {
    Button,
  },
  data() {
    return {
      text: "Contact Us",
    };
  },
};
</script>

<style></style>
