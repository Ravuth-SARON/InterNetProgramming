<template>
  <div class="flex">
    <SideBar />
    <div class="border-4 border-gray-800 p-10">
      <div class="">
        <div class="flex borde-2">
          <div class="border-2 border-slate-500 w-[200px] p-3">Name</div>
          <div class="border-2 border-slate-500 w-[200px] p-3">Category</div>
          <div class="border-2 border-slate-500 w-[200px] p-3">Action</div>
        </div>

        <div v-for="item in items" class="border-2 flex" :key="item._id">
          <h1 class="border-2 border-slate-500 w-[200px] p-3">
            {{ item.name }}
          </h1>
          <h1 class="border-2 border-slate-500 w-[200px] p-3">
            {{ item.categoryName }}
          </h1>

          <div class="flex gap-3 pl-6 border-2 border-slate-500 w-[200px]">
            <button
              class="text-blue-900 underline"
              @click="DeleteItem(item._id)"
            >
              Delete
            </button>
            <button class="text-blue-900 underline"><a href="">Edit</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Category from "../components/Category.vue";
export default {
  components: {
    SideBar,
    Category,
  },
  data() {
    return {
      items: [],
      category: String,
    };
  },
  methods: {
    async getAllItems() {
      try {
        const res = await fetch("http://localhost:3001/item/getallItem", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Origin: "http://localhost:8080",
          },
        });
        const items = await res.json();
        for (let i = 0; i < items.data.length; i++) {
          const item = items.data[i];
          item.categoryName = await this.getCategory(item.category);
          console.log(item.category);
          this.items.push(item);
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getCategory(id) {
      try {
        const res = await fetch(`http://localhost:3001/cat/${id}`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Origin: "http://localhost:8080",
          },
        });

        const data = await res.json();
        console.log(data.data.name);
        return data.data.name;
      } catch (err) {
        console.log(err);
      }
    },
    async DeleteItem(id) {
      try {
        const res = await fetch(`http://localhost:3001/Itemdelete/${id}`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Origin: "http://localhost:8080",
          },
        });
        this.items = this.items.filter((item) => item._id !== id);
      } catch (err) {
        console.log(err);
      }
    },

    // ... other methods
  },
  mounted() {
    this.getAllItems();
    console.log(this.getCategory("64996bf85f879b656074e2d0"));
  },
};
</script>

<style></style>
