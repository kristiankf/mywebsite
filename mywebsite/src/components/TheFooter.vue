<template>
  <div class="pb-32 md:pt-72 pt-48 bg-zinc-900">
    <div class="contain flex justify-center items-center">
      <div>
        <p class="font-fortitle text-center text-odd text-4xl">Kris Wale</p>
        <div class="my-7">
          <a href="#about" class="mx-5 text-[#ccc] hover:text-white">aboutMe</a>
          <a href="#work" class="mx-5 text-[#ccc] hover:text-white">myWork</a>
          <a href="#contact" class="mx-5 text-[#ccc] hover:text-white"
            >contactMe</a
          >
        </div>
        <div class="socials text-center text-3xl text-[#ccc]">
          <a href="https://github.com/kristiankf" target="_blank"
            ><use-icon
              icon="fa-brands fa-github"
              class="hover:text-white transition"
            ></use-icon
          ></a>
          <a
            href="https://www.linkedin.com/in/christianamoakohene/"
            target="_blank"
            class="mx-5"
            ><use-icon
              icon="fa-brands fa-linkedin"
              class="hover:text-[#0e76a8] transition"
            ></use-icon
          ></a>
          <a href="https://twitter.com" target="_blank"
            ><use-icon
              icon="fa-brands fa-twitter"
              class="hover:text-[#1da1f2] transition"
            ></use-icon
          ></a>
        </div>
      </div>
    </div>
    <div class="border-b border-slate-700 max-w-md mx-auto mt-10 mb-5"></div>
    <p class="text-center text-xs text-[#9d9d9d] font-alternate">
      &#169;Copyright 2023 kris wale. All Rights Reserved
    </p>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>