<template>
  <div class="my-[50px] max-w-[1200px] w-full mx-auto flex justify-between">
    <div class="max-w-[400px] w-full flex justify-between">
      <div class="flex gap-[4px] items-center">
        <div class="w-[24px] h-[24px]">
          <img src="../assets/icons/h_2.png" alt="" />
        </div>
        <nuxt-link class="no-underline" to="/main"><p class="text-[black]">Алматы</p></nuxt-link>
      </div>
      <div class="flex gap-[4px] items-center">
        <div class="w-[24px] h-[24px] flex justify-center">
          <img src="../assets/icons/h_3.png" alt="" />
        </div>
        <nuxt-link class="no-underline" to="/main"><p class="text-[15px] text-[black]">Адреса магазинов</p></nuxt-link>
      </div>
      <div class="flex gap-[4px] items-center">
        <div class="w-[24px] h-[24px] flex justify-center">
          <img src="../assets/icons/h_4.png" alt="" />
        </div>
        <nuxt-link class="no-underline" to="/main"><p class="text-[15px] text-[black]">О компании</p></nuxt-link>
      </div>
    </div>
    <div class="">
      <img src="../assets/icons/h_1.png" alt="" />
    </div>
    <div class="max-w-[355px] w-full flex justify-between items-center">
      <div class="flex items-center gap-[6px] h-[40px] w-full max-w-[150px] rounded-[6px] bg-[#F4F4F4]">
        <img
          src="../assets/icons/h_5.png"
          alt=""
          class="pl-[12px]"
        />
        <input
          type="text"
          placeholder="Поиск"
          class="text-[16px] text-[#898989] border-none outline-none bg-transparent"
        />
      </div>
      <div class="max-w-[180px] w-full flex justify-between items-center">
        <div class="flex justify-center">
          <img class="w-[24px] h-[24px]" src="../assets/icons/h_6.png" alt="" />
        </div>
        <div class="flex justify-center">
          <img class="w-[24px] h-[24px]" src="../assets/icons/h_7.png" alt="" />
        </div>
        <div class="w-[24px] h-[24px] flex justify-center">
          <img src="../assets/icons/h_8.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <hr class="h-[1px] bg-[#D0D0D0] border-0">

</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
