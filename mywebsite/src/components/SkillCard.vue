<template>
  <div
    class="
      skill-card
      w-[350px]
      border-2 border-slate-700
      hover:border-slate-600
      px-6
      py-8
      rounded-lg
      backdrop-blur-lg
      bg-skill-bg
    "
  >
    <div class="logo w-20">
      <img src="../assets/images/skill-logos/vue.png" alt="" />
    </div>
    <div class="title my-5 font-alternate text-3xl underline">
      <h2>Vue.js</h2>
    </div>
    <ul class="mini-skills list-disc pl-6 text-2xl">
      <li>Conditional Rendering</li>
      <li>Vue Router</li>
      <li>Vue State management</li>
      <li>Some Other Skills</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
};
</script>