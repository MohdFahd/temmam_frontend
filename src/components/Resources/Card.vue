<template>
  <div :class="ParClass">
    <img :src="Contents.img" :class="ImgClass" alt="" />
    <div>
      <h2 class="text-xl py-3 font-extrabold">{{ Contents.title }}</h2>
      <p class="text-lg font-normal">
        {{ Contents.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Contents: {
      type: Object,
      default: () => ({
        // Default value for the object
        img: "assets/imgs/headphone.svg",
        title: "Auto outbound calls",
        desc:
          "for web and mobile applications within international standards...",
      }),
    },
    ImgClass: {
      type: String,
      default: "",
    },
    ParClass: {
      type: String,
      default:
        "cursor-pointer mx-3 drop-shadow-lg bg-white p-5 w-[270px] h-[252px] text-center text-black hover:text-white hover:bg-[#0F136B] rounded-xl mx-3 flex flex-col items-center",
    },
  },
};
</script>

<style></style>
