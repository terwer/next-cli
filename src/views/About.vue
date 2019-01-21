<template>
  <div class="about">
    <h1>This is an about page , {{ name }}</h1>
    <button @click="changeText">click me</button>
  </div>
</template>

<script>
export default {
  name: "about",
  data: function() {
    return {
      name: "Vue"
    };
  },
  methods: {
    changeText: function() {
      this.name = "Terwer";
    }
  }
};
</script>
