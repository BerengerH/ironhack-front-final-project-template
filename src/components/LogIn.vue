<template>
  <section class="flex flex-col items-center bg-slate-400 w-2/4 mx-auto my-16 p-6">
    <div class="flex flex-col">
      <label for="email">Email address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        required
      />
    </div>

    <div class="flex flex-col">
      <label for="password">Passord</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        required
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "LogIn",
};
</script>
