<template>
  <router-view class="font-forbody text-2xl" />
</template>

<script>
export default {
  created() {
    document.body.style.backgroundColor = "#01141d";
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&family=Caveat&family=Josefin+Sans&family=Noto+Sans+Mono:wght@500&display=swap");

:root {
  --mainbackground: #01141d;
  --background: #144b94;
  --oddcolor: #e6d409;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}
</style>
