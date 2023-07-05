<script>
export default (await import("vue")).defineComponent({
  data() {
    return {
      email: "",
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      repeat_pwd: "",
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      console.log(this.password);
      console.log(this.email);
      try {
        const res = await fetch("http://localhost:3001/register", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            username: this.username,
            firstname: this.firstname,
            lastname: this.lastname,
            password: this.password,
            repeat_password: this.repeat_pwd,
          }),
        });
        const result = await res.json();
        console.log(result);
        if (!result.success) {
          alert(result.error);
          return;
        }
        alert("U success fully register");
        this.$router.push({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
</script>

<template>
  <form
    action="#"
    @submit="onSubmit"
    class="w-full text-[1.2rem] mt-10 lg:mt-0"
  >
    <h1 class="text-[2.5rem] text-[#00BD7E]">Sign up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr class="mb-6" />
    <div class="w-full rounded-lg h-1"></div>
    <!-- Gmail -->
    <label for="gmail">Gmail</label> <br />
    <input
      type="email"
      id="gmail"
      v-model="email"
      placeholder="example@gmail.com"
      class="input border-2 rounded-lg pl-2 w-full mb-6 mt-1 h-10"
    />
    <br />
    <!-- Username -->
    <label for="username">Username</label> <br />
    <input
      type="text"
      id="username"
      v-model="username"
      placeholder="Enter your username"
      class="input"
    />
    <br />
    <!-- First Name -->
    <label for="firstName">First name</label> <br />
    <input
      type="text"
      id="firstName"
      v-model="firstname"
      placeholder="Your first name"
      class="input"
    />
    <br />
    <!-- Last Name -->
    <label for="lastName">Last name</label> <br />
    <input
      type="text"
      id="lastName"
      v-model="lastname"
      placeholder="Your last name"
      class="input"
    />
    <br />
    <!-- Password -->
    <label for="password">Password</label> <br />
    <input
      type="password"
      id="password"
      v-model="password"
      placeholder="Create your password"
      class="input"
    />
    <br />
    <!-- Password -->
    <label for="password">Repeat Password</label> <br />
    <input
      type="password"
      id="password"
      v-model="repeat_pwd"
      placeholder="Create your password"
      class="input"
    />

    <p>
      By creating an account you agree to our
      <span><a href="#" class="text-blue-500">Terms & Privacy</a></span
      >.
    </p>
    <button
      type="submit"
      class="bg-[#1EB37C] hover:bg-[#13392C] rounded-lg text-white px-10 py-2 mt-5"
    >
      Sign up
    </button>
  </form>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.input {
  border-radius: 0.5rem;
  border-width: 2px;
  padding-left: 0.5rem;
  width: 100%;
  margin-bottom: 1.5rem;
  margin-top: 0.25rem;
  height: 2.5rem;
  color: black;
}
</style>
