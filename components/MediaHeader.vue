<template>
  <div class="header hidden">
    <div class="px-[20px]">
      <div class="max-w-[1300px] my-[30px] w-full flex justify-between">
        <div class="max-w-[400px] flex items-center gap-[18px]">
          <img src="../assets/icons/b_1.svg" alt="" />
          <img src="../assets/icons/h_1.svg" alt="" />
        </div>

        <div class="max-w-[150px] w-full flex justify-between items-center">
          <div class="flex justify-center">
            <img
              class="w-[20px] h-[20px]"
              src="../assets/icons/h_9.svg"
              alt=""
            />
          </div>
          <div class="flex justify-center">
            <img
              class="w-[20px] h-[20px]"
              src="../assets/icons/h_6.png"
              alt=""
            />
          </div>
          <div class="w-[20px] h-[20px] flex justify-center">
            <img src="../assets/icons/h_7.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <hr class="h-[1px] bg-[#D0D0D0] border-0" />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
@media (max-width: 1024px) {
  .header {
    display: block;
  }
}
</style>
