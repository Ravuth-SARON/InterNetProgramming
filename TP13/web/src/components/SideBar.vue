<template>
  <div class="flex justify-start min-h-screen items">
    <div class="bg-slate-900 font-sans w-64 text-white pl-5">
      <h1 class="font-bold py-5">Menu</h1>
      <div class="grid gap-5 font-semibold">
        <router-link
          v-for="(button, index) in buttons"
          :key="index"
          :to="{ name: button.link }"
        >
          <button
            type="button"
            id="menu-items"
            :class="{ 'bg-slate-400': isActive === index }"
            @click="toggleActive(index)"
            class="w-[100px] rounded-md bottom-2"
          >
            {{ button.label }}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isActive: 0,
    };
  },
  computed: {
    buttons() {
      return [
        { label: "Category", link: "cat" },
        { label: "Items", link: "items" },
        { label: "Product", link: "products" },
      ];
    },
  },
  methods: {
    toggleActive(index) {
      this.isActive = index;
    },
  },
};
</script>

<style>
#menu-items {
  padding: 10px 0;
}
#menu-items:hover {
  background: slategray;
}
</style>
