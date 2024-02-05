<template>
  <button :class="Class">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    Class: {
      type: String,
      default:
        "font-bold w-36 rounded-xl border border-solid border-slate-900 dark:border-none bg-[#0F136B] text-white p-3",
    },
    text: {
      type: String,
      default: "Save",
    },
  },
};
</script>

<style></style>
