<template>
  <section id="Our_Clients" class="scroll-smooth">
    <h5 class="text-center text-[#F3AF1C] text-xl p-6 scroll-mb-32">
      Our Clients
    </h5>
    <h1
      class="text-center sm:text-5xl/[40px] text-3xl font-bold text-[#0F113C] sm:mb-0 mb-5"
    >
      clients who trust us
    </h1>

    <!-- <div class="flex justify-center my-10 rounded text-white">
      <div class="cursor-pointer flex items-center">
        <img src="assets/imgs/CircleLeftArrow.svg" alt="" />
      </div>
      <img src="assets/imgs/onesight.svg" class="cursor-pointer mx-3" alt="" />
      <img src="assets/imgs/Al-Jammal.svg" class="cursor-pointer mx-3" alt="" />
      <img src="assets/imgs/Restore.svg" class="cursor-pointer mx-3" alt="" />
      <img src="assets/imgs/MIS.svg" class="cursor-pointer mx-3" alt="" />
      <img src="assets/imgs/tree.svg" class="cursor-pointer mx-3" alt="" />
      <img src="assets/imgs/tree.svg" class="cursor-pointer mx-3" alt="" />
      <div class="cursor-pointer flex items-center">
        <img src="assets/imgs/CircleLeftArrow.svg" class="rotate-180" alt="" />
      </div>
    </div> -->
  </section>
  <div class="flex justify-center my-10 rounded text-white">
    <swiper
      :slidesPerView="1"
      :breakpoints="{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        '@2.00': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        '@2.50': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img
          src="assets/imgs/Al-Jammal.svg"
          class="cursor-pointer mx-3"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="assets/imgs/onesight.svg"
          class="cursor-pointer mx-3"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="assets/imgs/onesight.svg"
          class="cursor-pointer mx-3"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="assets/imgs/onesight.svg"
          class="cursor-pointer mx-3"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="assets/imgs/onesight.svg"
          class="cursor-pointer mx-3"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="assets/imgs/onesight.svg"
          class="cursor-pointer mx-3"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="assets/imgs/onesight.svg"
          class="cursor-pointer mx-3"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      Attribute: "flex justify-center my-10 rounded text-white",
    };
  },
};
</script>

<style>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
