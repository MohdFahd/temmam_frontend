<template>
  <fwb-navbar
    class="flex justify-between sm:justify-between sm:mx-[82px] my-5 font-bold"
  >
    <template #logo>
      <div>
        <fwb-navbar-logo alt=" logo" image-url="/assets/imgs/logo.svg" link="#">
          <img src="" alt="" />
        </fwb-navbar-logo>
      </div>
    </template>
    <template #default="{isShowMenu}">
      <div class="hidden lg:block">
        <nav class="space-x-8 text-xl text-center" aria-label="main">
          <router-link to="/">
            <a
              href="#Home"
              class="hover:opacity-90 hover:text-blue-700"
              :class="{ 'text-blue-700': $route.path === '/' }"
              >Home</a
            >
          </router-link>

          <a href="#Call_Center" class="hover:opacity-90 hover:text-blue-700"
            >Call Center</a
          >

          <a href="#About_Us" class="hover:opacity-90 hover:text-blue-700"
            >About Us</a
          >
          <a href="#Services" class="hover:opacity-90 hover:text-blue-700"
            >Services</a
          >
          <a href="#Projects" class="hover:opacity-90 hover:text-blue-700"
            >Projects
          </a>
          <router-link to="/ContactUs">
            <a
              href="#Contact_Us"
              class="hover:opacity-90"
              :class="{ 'text-blue-700': $route.path === '/ContactUs' }"
              >Contact Us</a
            >
          </router-link>
        </nav>
      </div>

      <fwb-navbar-collapse class="lg:hidden" :is-show-menu="isShowMenu">
        <fwb-navbar-link :class="$route.path === '/' ? 'is-active' : ''">
          <router-link to="/">
            <h1>Home</h1>
          </router-link>
        </fwb-navbar-link>
        <fwb-navbar-link
          :class="$route.path === '/callcenter/:id' ? 'is-active' : ''"
        >
          <router-link to="/callcenter/:id">
            <h1>Call Center</h1>
          </router-link>
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          About Us
        </fwb-navbar-link>
        <fwb-navbar-link
          :class="$route.path === '/Services' ? 'is-active' : ''"
        >
          <router-link to="/Services">
            <h1>Services</h1>
          </router-link>
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          Projects
        </fwb-navbar-link>
        <fwb-navbar-link
          :class="$route.path === '/ContactUs' ? 'is-active' : ''"
          link="#"
        >
          <router-link to="/ContactUs">
            <h1>Contact Us</h1>
          </router-link>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from "flowbite-vue";
</script>
<style scoped>
.is-active {
  background-color: #212ae4;
  color: white;
  border-radius: 10px;
}
.is-active h1 {
  background-color: #212ae4;
  color: white;
  border-radius: 10px;
}
</style>
