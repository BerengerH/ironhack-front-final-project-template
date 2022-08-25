<template>
  <div class="fixed bg-white flex flex-col items-center w-[90%]">
<!--     Put an input with two choice (in progress or completed)
    and that will change the allTask.is_complete to yes or n -->o
    <div class="flex gap-4 justify-center m-4">
      <button
        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
      >
        Submit
      </button>
      <button
        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
        @click="ToggleStatusPopUp"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditTask",
  props: [
    'ToggleStatusPopUp',
  ],
};
</script>
