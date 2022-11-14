<template>
  <router-view />
</template>

<script>
export default {
  created() {
    document.body.style.backgroundColor = "blue";
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
