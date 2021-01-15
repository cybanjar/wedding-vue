<template>
  <div class="about">
    <section id="video">
      <video class="w-full" autoplay loop muted>
        <source src="../assets/SuciRyan/menu_utama.mp4" type="video/mp4" />
      </video>
      <div class="w-full hidden md:visible">
        <div>
          <img src="../assets/SuciRyan/slider-top.jpg" />
        </div>
      </div>
    </section>

    <section id="bismillah">
      <div class="w-full bg-overlay">
        <img
          class="max-w-ss py-5 mx-auto"
          src="../assets/SuciRyan/bismillah.png"
        />
        <p class="text-white text-center px-5 py-3">
          Maha suci Allah SWT yang telah menciptakan Mahluk-Nya
          berpasangan-pasangan, Ya Allah SWT perkenankanlah Kami :
        </p>
        <div class="flex px-5 py-3 justify-center">
          <div class="card-time mr-3 min-w-78">
            <p class="caption-time">0</p>
            <p class="font-light text-xs">Days</p>
          </div>
          <div class="card-time mr-3 min-w-78">
            <p class="caption-time">0</p>
            <p class="font-light text-xs">Hours</p>
          </div>
          <div class="card-time mr-3 min-w-78">
            <p class="caption-time">0</p>
            <p class="font-light text-xs">Minutes</p>
          </div>
          <div class="card-time mr-3 min-w-78">
            <p class="caption-time">0</p>
            <p class="font-light text-xs">Seconds</p>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="px-8 py-2 hover:bg-gray-800 hover:text-gray-300 bg-gray-700 text-white rounded-md m-4"
          >
            <router-link to="/about"> Simpan tanggal Nikah </router-link>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { ref } from "vue";
  import "animate.css";
  export default {
    setup() {
      const isMobile = Boolean;

      return {
        isMobile,
      };
    },
  };
</script>
