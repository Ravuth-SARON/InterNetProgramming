<template>
  <div class="">
    <div class="flex borde-2">
      <div class="border-2 border-slate-500 w-[200px] p-3">Name</div>
      <div class="border-2 border-slate-500 w-[200px] p-3">Description</div>
      <div class="border-2 border-slate-500 w-[200px] p-3">Action</div>
    </div>

    <div
      v-for="category in categories"
      class="border-2 flex"
      :key="category._id"
    >
      <h1 class="border-2 border-slate-500 w-[200px] p-3">
        {{ category.name }}
      </h1>
      <h1 class="border-2 border-slate-500 w-[200px] p-3">
        {{ category.desc }}
      </h1>
      <div class="flex gap-3 pl-6 border-2 border-slate-500 w-[200px]">
        <button
          class="text-blue-900 underline"
          @click="deleteCategory(category._id)"
        >
          Delete
        </button>
        <button class="text-blue-900 underline"><a href="">Edit</a></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      categories: [],
      item: String,
    };
  },
  methods: {
    async getAllCategorie() {
      try {
        const res = await fetch("http://localhost:3001/getAllCategorie", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Origin: "http://localhost:8080",
          },
        });
        const categories = await res.json();
        for (let i = 0; i < categories.data.length; i++) {
          const category = categories.data[i];
          this.categories.push(category);
          console.log(this.category);
        }
      } catch (err) {
        console.log(err);
      }
    },

    async deleteCategory(id) {
      try {
        await fetch(`http://localhost:3001/deleteCat/${id}`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Origin: "http://localhost:8080",
          },
        });
        this.categories = this.categories.filter(
          (category) => category._id !== id
        );
      } catch (err) {
        console.log(err);
      }
    },
    // ... other methods
  },
  mounted() {
    this.getAllCategorie();
  },
};
</script>

<style></style>
