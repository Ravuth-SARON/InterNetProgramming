<template>
  <div class="flex">
    <SideBar />
    <div class="border-4 border-gray-800 p-10">
      <div class="">
        <div class="flex borde-2">
          <div class="border-2 border-slate-500 w-[200px] p-3">Name</div>
          <div class="border-2 border-slate-500 w-[200px] p-3">Image</div>
          <div class="border-2 border-slate-500 w-[200px] p-3">Price</div>

          <div class="border-2 border-slate-500 w-[200px] p-3">Action</div>
        </div>

        <div
          v-for="product in products"
          class="border-2 flex"
          :key="product._id"
        >
          <h1 class="border-2 border-slate-500 w-[200px] p-3">
            {{ product.name }}
          </h1>

          <img
            :src="getImageUrl(product.imageUrl)"
            :alt="getImageUrl(product.imageUrl)"
            width="20px"
            height="20px"
            class="border-2 border-slate-500 w-[200px] p-3"
          />

          <h1 class="border-2 border-slate-500 w-[200px] p-3">
            {{ product.price }}$
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
      products: [],
      item: String,
    };
  },
  methods: {
    async getAllCategorie() {
      try {
        const res = await fetch("http://localhost:3001/product/getAll", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Origin: "http://localhost:8080",
          },
        });
        // const products = await res.json();
        const data = await res.json();
        this.products = data.data;
        return this.products;
      } catch (err) {
        console.log(err);
      }
    },

    async deleteProduct(id) {
      try {
        await fetch(`http://localhost:3001/deleteCat/${id}`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Origin: "http://localhost:8080",
          },
        });
        this.products = this.products.filter((product) => product._id !== id);
      } catch (err) {
        console.log(err);
      }
    },
    getImageUrl(imageUrl) {
      if (!imageUrl) {
        // Return a default image or placeholder image
        return "/path/to/default/image.jpg";
      }
      // Convert the server-side file path to a URL
      const url = imageUrl.replace(/^images\\/, "/images/");
      console.log(url);
      return url;
    },

    // ... other methods
  },
  mounted() {
    this.getAllCategorie();
  },
};
</script>

<style></style>
