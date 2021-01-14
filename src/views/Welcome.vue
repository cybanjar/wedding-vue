<template>
  <div class="antialiased bg-opening h-screen">
    <div class="flex flex-wrap">
      <div
        class="card-opening md:px-10 bg-gray-200 m-4 border-2 text-center mx-auto border-gray-900 rounded-md"
      >
        <div class="inline-flex m-4 items-center">
          <svg
            class="h-10 w-10 animate__animated zoom"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <p class="text-gray-800 leading-relaxed p-4">
          Official Wedding Website
        </p>
        <img
          class="animate__animated zoom w-48 mx-auto"
          src="../assets/SuciRyan/logo-top.png"
        />
        <p class="font-bold text-xl p-4">
          Wedding
          {{ weddingName }}
        </p>

        <p class="text-gray-500">Apakah anda ingin membuka undangan ini?</p>

        <!-- <div class="inline-flex items-center mt-4">
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
            />
          </svg>
          Johny Stimson - Honeymoon
        </div> -->

        <button
          class="px-8 py-2 hover:bg-gray-800 hover:text-gray-300 bg-gray-700 text-white rounded-md m-4"
          type="submit"
        >
          <router-link to="/about"> Buka Undangan </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import "animate.css";
export default {
  setup() {
    const weddingName = ref("Suci & Ryan");

    return {
      weddingName,
    };
  },
};
</script>

<style>
.bg-opening {
  background-image: url("../assets/SuciRyan/opening.jpg");
}

.card-opening {
  min-width: 350px;
}

.infinite {
  animation-iteration-count: infinite;
  animation-name: zoomInfinite;
  animation-timing-function: ease-in-out;
}

@keyframes zoomInfinite {
  from {
    transform: 0;
  }
  to {
    transform: scale(1.1);
  }
}

.zoom {
  animation: scale 2s linear infinite;
}
@keyframes scale {
  10% {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>