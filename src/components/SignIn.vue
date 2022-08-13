<template>
  <section
    class="bg-teal-100 flex flex-col items-center w-2/4 mx-auto my-16 p-6"
  >
    <div class="flex flex-col">
      <label for="firstName">First name address</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Enter your first name"
        required
      />
    </div>
    <div class="flex flex-col">
      <label for="lastName">Last name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Enter your last name"
        required
      />
    </div>
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
      <label for="repeatemail">Repeat your email address</label>
      <input
        type="email"
        id="repeatemail"
        name="repeatemail"
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
    <div class="flex flex-col">
      <label for="repeatpassword">Repeat your passord</label>
      <input
        type="password"
        id="repeatpassword"
        name="repeatpassword"
        placeholder="Enter your password"
        required
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "SignIn",
};
</script>
