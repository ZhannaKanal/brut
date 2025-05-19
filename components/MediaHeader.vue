<template>
  <div class="header hidden">
    <div class="px-[20px]">
      <div class="max-w-[1300px] my-[30px] w-full flex justify-between">
        <div
          v-if="!isMenuOpen"
          class="max-w-[400px] flex items-center gap-[18px]"
        >
          <img @click="openMenu" src="../assets/icons/b_1.svg" alt="" />
          <img src="../assets/icons/h_1.svg" alt="" />
        </div>
        <div></div>

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
    <div
      v-if="isMenuOpen"
      class="absolute z-[5] top-[20px] max-w-[350px] w-full"
    >
      <div class="bg-[white]">
        <div class="flex justify-between bg-[#222222] px-[20px] items-center">
          <div class="max-w-[200px] w-full flex gap-[10px] items-center">
            <img
              class="w-[20px] h-[20px]"
              src="../assets/icons/m_1.svg"
              alt=""
            />
            <p class="text-[white] text-[14px]">Личный кабинет</p>
          </div>
          <div class="">
            <img
              class="w-[20px] h-[20px]"
              @click="closeMenu"
              src="../assets/icons/m_2.svg"
              alt=""
            />
          </div>
        </div>
        <div class="px-[20px]">
          <div class="flex gap-[4px] items-center">
            <div class="w-[20px] h-[20px]">
              <img src="../assets/icons/m_3.svg" alt="" />
            </div>
            <nuxt-link class="no-underline" to="/main"
              ><p class="text-[black]">Алматы</p></nuxt-link
            >
          </div>
          <div class="flex gap-[4px] items-center">
            <div class="w-[20px] h-[20px] flex justify-center">
              <img src="../assets/icons/m_4.svg" alt="" />
            </div>
            <nuxt-link class="no-underline" to="/main"
              ><p class="text-[15px] text-[black]">
                Адреса магазинов
              </p></nuxt-link
            >
          </div>
          <div class="flex gap-[4px] items-center">
            <div class="w-[20px] h-[20px] flex justify-center">
              <img src="../assets/icons/h_4.png" alt="" />
            </div>
            <nuxt-link class="no-underline" to="/main"
              ><p class="text-[15px] text-[black]">О компании</p></nuxt-link
            >
          </div>
        </div>
        <div>
          <hr class="h-[1px] bg-[#D0D0D0] border-0" />
          <div class="px-[20px]">
            <div
              v-if="!isWineOpen"
              @click="openWine"
              class="w-full flex justify-between"
            >
              <p>ВИНО</p>
              <img src="../assets/icons/m_6.svg" alt="" />
            </div>
            <div v-else>
              <div class="flex justify-between">
                <p>ВИНО</p>
                <img @click="closeWine" src="../assets/icons/m_9.svg" alt="" />
              </div>
              <p>Все</p>
              <p>Красное</p>
              <p>Белое</p>
              <p>Розовое</p>
            </div>
          </div>
          <hr class="h-[1px] bg-[#D0D0D0] border-0" />
          <div class="px-[20px]">
            <nuxt-link class="no-underline text-[black]" to="/main"
              ><div class="w-full flex justify-between">
                <p>ШАМПАНСКОЕ И ИГРИСТОЕ</p>
                <img src="../assets/icons/m_6.svg" alt="" /></div
            ></nuxt-link>
          </div>
          <hr class="h-[1px] bg-[#D0D0D0] border-0" />
          <div class="px-[20px]">
            <nuxt-link class="no-underline text-[black]" to="/main"
              ><div class="w-full flex justify-between">
                <p>КРЕПКИЕ НАПИТКИ</p>
                <img src="../assets/icons/m_6.svg" alt="" /></div
            ></nuxt-link>
          </div>
          <hr class="h-[1px] bg-[#D0D0D0] border-0" />
          <div class="px-[20px]">
            <nuxt-link class="no-underline text-[black]" to="/main"
              ><div class="w-full flex justify-between">
                <p>ЛИКЁРЫ И БИТТЕРЫ</p>
                <img src="../assets/icons/m_6.svg" alt="" /></div
            ></nuxt-link>
          </div>
          <hr class="h-[1px] bg-[#D0D0D0] border-0" />
          <div class="px-[20px]">
            <nuxt-link class="no-underline text-[black]" to="/main"
              ><div class="w-full flex justify-between">
                <p>FOOD PAIRINGS</p>
                <img src="../assets/icons/m_6.svg" alt="" /></div
            ></nuxt-link>
          </div>
          <hr class="h-[1px] bg-[#D0D0D0] border-0" />
          <div class="px-[20px]">
            <nuxt-link class="no-underline text-[black]" to="/main"
              ><div class="w-full flex justify-between">
                <p>КОКТЕЙЛЬНЫЕ СЕТЫ</p>
                <img src="../assets/icons/m_6.svg" alt="" /></div
            ></nuxt-link>
          </div>
          <hr class="h-[1px] bg-[#D0D0D0] border-0" />
          <div class="px-[20px]">
            <nuxt-link class="no-underline text-[black]" to="/main"
              ><div class="w-full flex justify-between">
                <p>ВИННЫЕ СЕТЫ</p>
                <img src="../assets/icons/m_6.svg" alt="" /></div
            ></nuxt-link>
          </div>
          <hr class="h-[1px] bg-[#D0D0D0] border-0" />
          <div class="px-[20px]">
            <nuxt-link class="no-underline text-[black]" to="/main"
              ><div class="w-full flex justify-between">
                <p>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</p>
                <img src="../assets/icons/m_6.svg" alt="" /></div
            ></nuxt-link>
          </div>
        </div>
        <div class="bg-[#222222] px-[20px]">
          <div class="pt-[32px]">
            <nuxt-link to="/" class="no-underline text-[white]"
              >ВИННЫЕ КУРСЫ И МЕРОПРИЯТИЯ</nuxt-link
            >
          </div>
          <div class="pt-[32px]">
            <nuxt-link to="/" class="no-underline text-[white]"
              >СТАТЬ ЧАСТНЫМ КЛИЕНТОМ</nuxt-link
            >
          </div>
          <div class="py-[32px]">
            <nuxt-link to="/" class="no-underline text-[white]"
              >КОРПОРАТИВНЫМ КЛИЕНТАМ</nuxt-link
            >
          </div>
        </div>
        <div class="px-[20px] bg-[white]">
          <div class="flex items-center gap-[12px] h-full">
            <img
              class="w-[20px] h-[20px]"
              src="../assets/icons/m_7.svg"
              alt=""
            />
            <p>hobbsans@gmail.com</p>
          </div>
          <div class="flex items-center gap-[12px]">
            <img
              class="w-[20px] h-[20px]"
              src="../assets/icons/m_8.svg"
              alt=""
            />
            <p>+7 707 333 2244</p>
          </div>
        </div>
        <hr class="h-[1px] bg-[#D0D0D0] border-0" />
        <div
          class="flex justify-between max-w-[216px] mx-auto pt-[20px] pb-[100px]"
        >
          <nuxt-link to="/"
            ><img
              class="w-[30px] h-[30px]"
              src="../assets/icons/m_10.svg"
              alt=""
          /></nuxt-link>
          <nuxt-link to="/"
            ><img
              class="w-[30px] h-[30px]"
              src="../assets/icons/m_11.svg"
              alt=""
          /></nuxt-link>
          <nuxt-link to="/"
            ><img
              class="w-[30px] h-[30px]"
              src="../assets/icons/m_12.svg"
              alt=""
          /></nuxt-link>
          <nuxt-link to="/"
            ><img
              class="w-[30px] h-[30px]"
              src="../assets/icons/m_13.svg"
              alt=""
          /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const openMenu = () => {
  isMenuOpen.value = true;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const isWineOpen = ref(false);
const openWine = () => {
  isWineOpen.value = true;
};
const closeWine = () => {
  isWineOpen.value = false;
};
</script>

<style scoped>
@media (max-width: 1024px) {
  .header {
    display: block;
  }
}
</style>
