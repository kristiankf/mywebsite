<template>
  <div
    class="
      skill-card
      md:w-[350px]
      xs:w-[180px]
      w-[140px]
      border-2 border-slate-700
      hover:border-slate-500
      xs:p-10
      p-5
      rounded-lg
      backdrop-blur-lg
      bg-skill-bg
      h-full
    "
  >
    <div class="logo xs:w-20 w-14 md:m-0 m-auto">
      <img
        :src="require(`../assets/images/skill-logos/${skill.logo}.png`)"
        :alt="skill.name"
      />
    </div>
    <div
      class="
        title
        md:my-5
        mt-1
        font-alternate
        md:text-3xl
        xs:text-base
        text-sm
        underline
        md:text-left
        text-center
      "
    >
      <h2>{{ skill.name }}</h2>
    </div>
    <ul
      class="mini-skills list-disc pl-6 text-2xl md:block hidden"
      v-for="(sub_skill, index) in skill.sub_skills"
      :key="index"
    >
      <li>{{ sub_skill }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
};
</script>