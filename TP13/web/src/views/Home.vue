<script>
import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
import List from "./list.vue";
import authApi from "../../provider/apis/auth";

export default defineComponent({
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
    };
  },
  async mounted() {
    const res = await authApi.getme();
    const user = res.data;
    this.firstname = user?.firstname;
    this.lastname = user?.lastname;
    this.username = user?.username;
    this.email = user?.email;
  },
  // methods: {
  //   async logout() {
  //     const res = await fetch("http://localhost:3001/logout", {
  //       method: "POST",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const result = await res.json();
  //     if (!result.success) {
  //       alert(result.error);
  //       return;
  //     }
  //     this.$router.push({ name: "login" });
  //   },
  // },
});
</script>

<template>
  <!-- <div class="flex justify-between w-[50%] items-center">
          <div class="h-[200px] border-l-4 rounded-lg"></div> -->
  <center>
    <p class="text-[1.2rem] mb-4 mt-10 lg:mt-0">Login Successfully!</p>
    <br />
    <div class="w-full">
      <!-- row1 -->
      <div class="flex w-full">
        <!-- 1 -->
        <div class="w-[25%]">
          <div class="aspect-square rounded-tr-[999px] bg-[#FDB1BB]"></div>
          <div class="aspect-square rounded-bl-[999px] bg-[#95D8E9]"></div>
        </div>
        <!-- <div > -->
        <img
          src="/src/assets/images/Sculpture.png"
          class="w-[25%] aspect-[1/2] bg-[#95D8E9] rounded-t-[999px]"
          alt=""
        />
        <!-- </div> -->
        <div>firstname {{ email }}</div>
        <div class="w-[25%] overflow-hidden">
          <div
            class="aspect-square rounded-br-[999px] bg-[#FFCA8C] rounded-tl-[999px]"
          ></div>
          <div class="aspect-square rounded-bl-[999px] bg-[#FEA48C]"></div>
        </div>
        <div class="w-[25%]">
          <img
            src="/src/assets/images/woman.png"
            class="aspect-square rounded-tr-[999px] bg-[#EFEFEF] object-cover"
            alt=""
          />
          <!-- <div class="aspect-square rounded-tr-[999px] bg-[#EFEFEF]"></div> -->
          <div
            class="aspect-square rounded-br-[999px] bg-[#EFEFEF] rounded-tl-[999px]"
          ></div>
        </div>
      </div>
      <!-- row 2 -->
      <div class="flex w-full">
        <div class="w-full flex">
          <img
            src="/src/assets/images/man.png"
            class="w-[50%] aspect-square rounded-l-[999px] object-cover"
          />
          <div
            class="w-[50%] aspect-square rounded-r-[999px] bg-[#D5B8E4]"
          ></div>
        </div>
        <img
          src="/src/assets/images/MonChild.png"
          class="w-[50%] aspect-[2/1] rounded-tr-[999px] bg-[#95D8E9] object-cover"
        />
      </div>
    </div>
    <!-- <RouterLink
      to="/"
      
    >
      Logout
    </RouterLink> -->
    <button
      v-on:click="logout()"
      class="text-center px-10 text-white py-3 text-[1.2rem] rounded-lg bg-[#00BD7E]"
    >
      click
    </button>
  </center>
</template>
