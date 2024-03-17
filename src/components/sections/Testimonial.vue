<template>
  <section
    class="min-w-4xl capitalize flex justify-between flex-col md:flex-row scroll-mb-80"
    id="About_Us"
  >
    <div
      class="container w-[100%] sm:mx-10 p-5"
      :class="{ fade: FadeClass }"
      id="Testimonial"
    >
      <h6 class="text-xl py-3 text-[#6e6b64]">testimonial</h6>
      <h1 class="text-4xl font-bold text-[#0F113C]">what our customers say</h1>
      <img src="assets/imgs/colon.svg" class="mt-7" alt="" />

      <div
        v-for="(quote, index) in Quotes"
        :key="index"
        :class="{ mySlides: true, active: index === currentIndex }"
      >
        <p class="text-lg p-3 text-gray-600">{{ quote.Paragraph }}</p>
        <h1 class="px-3 font-bold">{{ quote.author }}</h1>
        <h1 class="px-3">{{ quote.job }}</h1>
      </div>

      <div class="flex items-end justify-end">
        <div
          class="rounded-full flex items-center justify-center bg-[#D9D9D9] w-[40px] h-[40px] cursor-pointer mx-3 Parent"
          @click="prevSlide"
        >
          <img
            src="assets/imgs/CircleLeftArrow.svg"
            width="30%"
            alt=""
            class="Child"
          />
        </div>
        <div
          class="rounded-full flex items-center justify-center bg-[#D9D9D9] w-[40px] h-[40px] cursor-pointer mx-3 Parent"
          @click="nextSlide"
        >
          <img
            src="assets/imgs/CircleLeftArrow.svg"
            width="30%"
            class="rotate-180 Child"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- <div class="w-[80%]">
      <img src="assets/imgs/testimonial.svg" wi alt="" />
    </div> -->
    <div class="w-full flex justify-center items-center">
      <img src="assets/imgs/testimonial.svg" width="70%" wi alt="" />
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
    const FadeClass = ref(false); // Initialize FadeClass with false

    const currentIndex = ref(0);

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % Quotes.value.length;
      FadeClass.value = true; // Set FadeClass to true when prevSlide is clicked
      setTimeout(() => {
        FadeClass.value = false; // Reset FadeClass after a delay
      }, 1500); // Adjust the delay as needed
    };

    const prevSlide = () => {
      currentIndex.value =
        (currentIndex.value - 1 + Quotes.value.length) % Quotes.value.length;
      FadeClass.value = true; // Set FadeClass to true when nextSlide is clicked
      setTimeout(() => {
        FadeClass.value = false; // Reset FadeClass after a delay
      }, 1500); // Adjust the delay as needed
    };

    return {
      Quotes,
      currentIndex,
      nextSlide,
      prevSlide,
      FadeClass,
    };
  },
};
</script>

<style scoped>
.Parent:hover .Child {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%)
    contrast(100%);
}
.Parent:hover {
  background: #0f113c;
}

.mySlides {
  /* display: none; */
  display: none;
  opacity: 0;
  /* position: absolute; */
  transition: opacity 0.5s ease-in-out;
}

.mySlides.active {
  opacity: 1;
  display: block;
}
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateX(-500px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>

<!-- <style scoped>
.mySlides {
  display: none;
  opacity: 0;
  position: absolute;
  transition: opacity 0.5s ease-in-out;
}

.mySlides.active {
  display: block;
  opacity: 1;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateX(300px);
  }
  to {
    opacity: 1;
    transform: translateX(-300px);
  }
}
</style> -->
