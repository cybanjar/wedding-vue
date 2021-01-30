<template>
  <div>
    <section id="video">
      <video class="w-full" autoplay loop muted>
        <source src="../assets/VikaKevin/Home.mp4" type="video/mp4" />
      </video>
    </section>

    <section id="vikaAyat">
      <div>
        <img
          class="py-3 mx-auto w-3/4"
          src="../assets/VikaKevin/frameBungaAtas.png"
        />

        <div class="grid grid-cols-3">
          <span class="greatVibes primary-heading text-right text-4xl">{{
            name.man
          }}</span>
          <span class="greatVibes text-center align-text-bottom text-md"
            >&</span
          >
          <span class="greatVibes primary-heading text-left text-4xl">{{
            name.woman
          }}</span>
        </div>

        <blockquote cite="">
          <p class="my-16 mx-8 text-gray-500 text-center tracking-wider ">
            "{{ surahs.ayah }}" <br>
            <span class="text-gray-800"> {{ surahs.surah }} </span>
          </p>
        </blockquote>

        <img
          class="py-3 mx-auto w-3/4"
          src="../assets/VikaKevin/frameBungaBawah.png"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import "animate.css";
export default {
  setup() {
    const isMobile = Boolean;

    const state = reactive({
      name: {
        man: "Kevin",
        woman: "Vika",
      },
      surahs: {
        ayah:
          "Dan diantara tanda-tanda kekuasaannya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tentram kepadanya, dan dijadikannya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kamu yang berfikir.",
        surah: "Ar-Rum : 21",
      },
    });

    return {
      ...toRefs(state),
      isMobile,
    };
  },
};
</script>

<style lang="scss">
.greatVibes {
  font-family: "Great Vibes", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.primary-heading {
  color: #af7722;
}
</style>