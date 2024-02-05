<template>
  <section
    class="min-w-4xl flex justify-between flex-col md:flex-row sm:mx-14 p-3"
    id="ContactUs"
  >
    <div class="container w-[100%] sm:mx-10">
      <h1 class="sm:text-4xl text-4xl font-bold text-[#0F113C]">
        Contact us
      </h1>
      <p class="text-lg py-3 text-gray-600 w-[80%]">
        You can contact us to request a service or express your feelings through
        this form using social media links.
      </p>
      <div class="flex flex-col">
        <div class="flex items-center my-4">
          <img src="assets/imgs/Location.svg" alt="" />
          <h1 class="text-base mx-2">You can contact us to service</h1>
        </div>
        <div class="flex items-center my-4">
          <img src="assets/imgs/PhoneCall.svg" alt="" />
          <h1 class="text-base mx-2">+679 77125590</h1>
        </div>
        <div class="flex items-center my-4">
          <img src="assets/imgs/Messgae.svg" alt="" />
          <h1 class="text-base mx-2">temmam123@gmail.com</h1>
        </div>
      </div>
    </div>
    <div class="">
      <input
        type="text"
        id="first_name"
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
        placeholder="Full Name"
        required
      />
      <input
        type="text"
        id="Email"
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
        placeholder="Your Email"
        required
      />
      <textarea
        name=""
        id=""
        class="bg-white border p-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[552px] h-[161px] px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
        cols="30"
        rows="10"
        placeholder="Your Email"
      ></textarea>

      <Button :class="Class" />
    </div>
  </section>
</template>

<script>
import Button from "../components/Resources/Button";
export default {
  name: "ContactUs",
  data() {
    return {
      text: "Save",
      Class:
        "font-bold w-full rounded-xl border border-solid border-slate-900 dark:border-none bg-[#0F136B] text-white p-3",
    };
  },
  components: {
    Button,
  },
};
</script>

<style></style>
