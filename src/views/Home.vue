<template>
  <div class="home">
    <Welcome />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Welcome from "@/views/Welcome.vue";

  export default {
    name: "Home",
    components: {
      Welcome,
    },
  };
</script>
