<template>
  <div
    class="antialiased flex items-center dark:bg-gray-700 bg-gray-300 min-h-screen"
  >
    <div class="w-5/12 mx-auto">
      <div
        class="bg-gray-100 dark:bg-gray-900 flex justify-between p-4 rounded-lg mb-6"
      >
        <div class="font-semibold text-lg dark:text-gray-100 text-gray-800">
          Mode : Dark Mode
        </div>
        <div>
          <button
            @click="selectTheme('dark')"
            class="w-6 mr-3 h-6 rounded-full bg-gray-700"
          ></button>
          <button
            @click="selectTheme('light')"
            class="w-6 h-6 rounded-full bg-white hover:ring-2 hover:ring-blue"
          ></button>
        </div>
      </div>

      <div class="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
        <div>
          <p class="dark:text-gray-100 px-4 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            architecto nostrum explicabo officiis ratione magnam! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fugit est ab iste!
            Magni itaque deleniti repellendus recusandae voluptatum facere
            eveniet blanditiis aliquam sapiente. Tenetur incidunt qui temporibus
            perspiciatis. Corrupti, quia!
          </p>
          <p class="px-4 py-4 border-t border-gray-500 dark:text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, omnis
            quam! Provident rerum corrupti necessitatibus!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted } from "vue";
  // import { reactive, isReactive } from "vue";
  export default {
    name: "DarkMode",
    setup() {
      const selectTheme = (value) => {
        console.log("value", value);
        localStorage.setItem("theme", value);
        document
          .querySelector("html")
          .classList.add(localStorage.getItem("theme"));

        if (value == "dark") {
          document.querySelector("html").classList.remove("light");
        } else {
          document.querySelector("html").classList.remove("dark");
        }
      };

      onMounted(() => {
        if (
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          document.querySelector("html").classList.add("dark");
        } else {
          document.querySelector("html").classList.remove("dark");
        }

        localStorage.removeItem("theme");
      });

      return {
        selectTheme,
      };
    },
  };
</script>

<style>
</style>