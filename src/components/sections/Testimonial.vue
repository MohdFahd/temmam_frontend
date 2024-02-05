<template>
  <section
    class="min-w-4xl capitalize flex justify-between flex-col md:flex-row scroll-mb-80"
    id="About_Us"
  >
    <div class="container w-[100%] sm:mx-10 p-5">
      <h6 class="text-xl py-3 text-[#F3AF1C]">testimonial</h6>
      <h1 class="text-4xl font-bold text-[#0F113C]">
        what our customers say
      </h1>
      <img src="assets/imgs/colon.svg" class="mt-7" alt="" />

      <div v-for="Quote in Quotes" :key="Quote" class="mySlides fade">
        <p class="text-lg p-3 text-gray-600">
          {{ Quote.Paragraph }}
        </p>
        <h1 class="px-3 font-bold">{{ Quote.author }}</h1>
        <h1 class="px-3">{{ Quote.job }}</h1>
      </div>

      <div class="flex items-end justify-end">
        <div
          onclick="plusSlides(-1)"
          class="rounded-full flex items-center justify-center bg-[#D9D9D9] w-[40px] h-[40px] cursor-pointer mx-3"
        >
          <img src="assets/imgs/CircleLeftArrow.svg" width="30%" alt="" />
        </div>
        <div
          onclick="plusSlides(1)"
          class="rounded-full flex items-center justify-center bg-[#D9D9D9] w-[40px] h-[40px] cursor-pointer mx-3"
        >
          <img
            src="assets/imgs/CircleLeftArrow.svg"
            width="30%"
            class="rotate-180"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="w-[90%]">
      <img src="assets/imgs/testimonial.svg" wi alt="" />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Testimonials",
  setup() {
    const Quotes = ref([
      {
        Paragraph:
          "We Provides Integrated Call Center Services In An Equipment And Software. We Provides Integrated Call Center Services In An Equipment And Software.",
        author: "Mohammed Saleem",
        job: "Customer Services",
      },
      {
        Paragraph:
          "We Provides Integrated Call Center Services In An Equipment And Software. We Provides Integrated Call Center Services In An Equipment And Software.",
        author: "Sam Mohammed",
        job: "Human recourses",
      },
      {
        Paragraph:
          "We Provides Integrated Call Center Services In An Equipment And Software. We Provides Integrated Call Center Services In An Equipment And Software.",
        author: "Ali Monsoor",
        job: "Customer Services",
      },
    ]);
    return { Quotes };
  },
};
</script>
<style scoped>
.mySlides {
  display: none;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    transform: translateX(-500px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
