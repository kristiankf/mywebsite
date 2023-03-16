<template>
  <div>
    <form
      class="rounded-lg bg-skill-bg md:px-14 md:py-20 px-6 py-14 md:absolute top-0 w-full"
    >
      <p class="mb-14 font-alternate md:text-3xl text-2xl font-bold">
        Send me a message
      </p>
      <div class="relative my-14">
        <input
          type="text"
          name="fullname"
          id="fullname"
          v-model="fullname"
          class="w-full bg-transparent border-b-2 border-slate-700 hover:border-slate-500 transition focus:border-b-odd p-2 outline-none focus:bg-slate-700"
        />
        <label
          for="fullname"
          class="text-[#aaa] absolute left-0"
          :class="{ value: fullname }"
          >Full Name</label
        >
      </div>
      <div class="relative my-14">
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          class="w-full bg-transparent border-b-2 border-slate-700 hover:border-slate-500 transition focus:border-b-odd p-2 outline-none focus-visible:bg-slate-700"
        />
        <label
          for="email"
          class="text-[#aaa] absolute left-0"
          :class="{ value: email }"
          >Email</label
        >
      </div>
      <div class="relative my-14">
        <select
          name="subject"
          id="subject"
          v-model="subject"
          class="w-full bg-transparent border-b-2 border-slate-700 hover:border-slate-500 transition focus:border-b-odd p-2 outline-none"
        >
          <option class="bg-slate-700">A</option>
          <option class="bg-slate-700">B</option>
          <option class="bg-slate-700">C</option>
        </select>
        <label
          for="subject"
          class="text-[#aaa] absolute left-0"
          :class="{ value: subject }"
          >Subject</label
        >
      </div>
      <div class="relative my-14">
        <textarea
          name="message"
          id="message"
          v-model="message"
          class="w-full bg-transparent border-b-2 border-slate-700 hover:border-slate-500 transition focus:border-b-odd p-2 outline-none focus:bg-slate-700"
        ></textarea>
        <label
          for="fullname"
          class="text-[#aaa] absolute left-0"
          :class="{ value: message }"
          >Message</label
        >
      </div>

      <div>
        <a
          href="#"
          class="button block py-4 px-10 bg-white/30 rounded-md text-xl transition backdrop-blur-lg font-alternate text-white text-center"
          >Connect <use-icon icon="fa-paper-plane"></use-icon
        ></a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  data() {
    return {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    };
  },
};
</script>

<style>
label {
  top: 0;
  transition: 0.2s;
}
input:focus + label,
textarea:focus + label,
select:focus + label,
.value {
  font-size: 12px;
  /* transform: translateY(-100%); */
  top: -30px;
  color: white;
}
</style>