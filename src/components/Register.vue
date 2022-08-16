<template>
  <div
    class="flex flex-col justify-center md:justify-start my-auto pt-6 md:pt-0 px-8 md:px-24 lg:px-32"
  >
    <p class="text-center text-3xl">Join Us</p>
    <form class="flex flex-col pt-3">
      <div class="flex flex-col pt-4">
        <label for="name" class="text-lg">Name</label>
        <input
          type="text"
          id="name"
          placeholder="John Smith"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="flex flex-col pt-4">
        <label for="email" class="text-lg">Email</label>
        <input
          type="email"
          id="email"
          placeholder="your@email.com"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="flex flex-col pt-4">
        <label for="confirm-email" class="text-lg">Confirm your email</label>
        <input
          type="email"
          id="confirm-email"
          placeholder="your@email.com"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="flex flex-col pt-4">
        <label for="password" class="text-lg">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="flex flex-col pt-4">
        <label for="confirm-password" class="text-lg">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Password"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <input
        type="submit"
        value="Register"
        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>
