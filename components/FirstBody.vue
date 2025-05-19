<template class="px-[30px]">
  <div class="px-[20px]">
    <div
      class="carousel relative max-w-[1200px] w-full mx-auto my-[50px] overflow-hidden"
    >
      <div
        class="carousel-track flex transition-transform duration-500 ease-in-out w-full"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          class="carousel-slide relative min-w-full"
          v-for="slide in bannerImg"
          :key="index"
        >
          <img
            :src="slide.image"
            alt="Slide"
            class="carousel-img w-[1200px] h-auto block"
          />
        </div>
      </div>

      <button
        @click="prevSlide"
        class="absolute left-[10px] border-none cursor-pointer py-0 px-[10px] z-[3] top-1/2 bg-transparent"
      >
        <img src="../assets/icons/i_53.png" alt="" />
      </button>
      <button
        @click="nextSlide"
        class="absolute right-[10px] border-none cursor-pointer py-0 px-[10px] z-[3] top-1/2 bg-transparent"
      >
        <img src="../assets/icons/i_54.png" alt="" />
      </button>

      <div
        class="carousel-dots absolute bottom-[15px] left-1/2 -translate-x-1/2 z-[3]"
      >
        <span
          class="inline-block w-[12px] h-[12px] mx-[10px] bg-[#FFFFFF99] rounded-full cursor-pointer transition-colors duration-300"
          v-for="(_, index) in slides"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>

    <div class="max-w-[1200px] w-full mx-auto">
      <div class="flex items-center gap-[36px]">
        <p class="text-[24px]">ВИНА МЕСЯЦА</p>
        <hr class="flex-1 border-0 h-[1px] bg-[#D0D0D0]" />
      </div>
      <div class="wine-grid w-full grid grid-cols-5 gap-[40px]">
        <div
          v-for="wine in wineList.slice(5, 10)"
          :key="wine.id"
          class="group mb-[20px] max-w-[228px] w-full text-[14px]"
        >
          <div class="min-h-[60px] flex justify-between items-center gap-[6px]">
            <p>{{ wine.name }}</p>
            <img src="../assets/icons/i_11.png" alt="i11" />
          </div>

          <hr class="flex-1 border-0 h-[1px] bg-[#D0D0D0]" />

          <div class="flex justify-between items-start">
            <p class="mt-[-1px]">56955</p>
            <div class="relative">
              <img
                :src="wine.image"
                alt="i13"
                class="w-[40px] h-[150px] transition-transform duration-300 group-hover:scale-120 group-hover:translate-y-[30px]"
              />
              <img
                src="../assets/icons/i_15.png"
                alt="i15"
                class="absolute top-[100px] right-[-11px] hidden rounded-[4px] group-hover:block"
              />
            </div>
            <img src="../assets/icons/i_12.png" alt="i12" />
          </div>

          <p
            class="text-center text-[12px] text-[#787878] group-hover:invisible"
          >
            Италия, белое сухое, 1л
          </p>

          <hr class="my-[28px] border-0 h-[1px] bg-[#D0D0D0]" />

          <p class="text-center mb-[-4px]">{{ wine.price }} тг</p>

          <div
            class="my-[6px] max-h-[30px] h-full flex justify-between items-center gap-[4px]"
          >
            <div
              class="flex-1 flex justify-between border-[1px] border-solid border-[black] px-[6px] py-[4px]"
            >
              <button class="border-none bg-transparent">−</button>
              <span>1</span>
              <button class="border-none bg-transparent">+</button>
            </div>
            <button
              class="w-1/2 bg-[black] border-[1px] flex justify-center items-center py-[4px]"
            >
              <img src="../assets/icons/i_14.png" class="w-4 h-4" alt="Bin" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-[1200px] w-full mx-auto my-[20px]">
      <div class="flex items-center gap-[36px]">
        <p class="text-[24px]">АКЦИИ</p>
        <hr class="flex-1 border-0 h-[1px] bg-[#D0D0D0]" />
      </div>
      <div
        class="carousel relative max-w-[1200px] w-full mx-auto overflow-hidden"
      >
        <div
          class="carousel-track flex gap-[20px] transition-transform duration-500 ease-in-out w-full"
          :style="{ transform: `translateX(-${currentIndex * 50}%)` }"
        >
          <div
            class="carousel-slide relative min-w-[calc(50%-10px)]"
            v-for="(slide, index) in bannerImg"
            :key="index"
          >
            <img
              :src="slide.image"
              alt="Slide"
              class="carousel-img w-full h-auto block"
            />
          </div>
        </div>

        <button
          @click="prevSlide"
          class="absolute left-[10px] border-none cursor-pointer py-0 px-[10px] z-[3] top-1/2 bg-transparent"
        >
          <img src="../assets/icons/i_53.png" alt="" />
        </button>
        <button
          @click="nextSlide"
          class="absolute right-[10px] border-none cursor-pointer py-0 px-[10px] z-[3] top-1/2 bg-transparent"
        >
          <img src="../assets/icons/i_54.png" alt="" />
        </button>

        <div
          class="carousel-dots absolute bottom-[15px] left-1/2 -translate-x-1/2 z-[3]"
        >
          <span
            class="inline-block w-[12px] h-[12px] mx-[10px] bg-[#FFFFFF99] rounded-full cursor-pointer transition-colors duration-300"
            v-for="(_, index) in slides"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </div>

    <div class="max-w-[1200px] w-full mx-auto">
      <div class="flex items-center gap-[36px]">
        <p class="text-[24px]">КОКТЕЙЛЬНЫЕ СЕТЫ</p>
        <hr class="flex-1 border-0 h-[1px] bg-[#D0D0D0]" />
      </div>
      <div
        class="sets max-w-[1200px] w-full mx-auto grid grid-cols-3 w-full gap-[20px]"
      >
        <div
          v-for="set in newList.slice(0, 3)"
          :key="index"
          class="text-center text-[18px] border-[1px] border-solid border-[#D0D0D0]"
        >
          <img class="w-auto max-h-[250px]" :src="set.image" alt="" />
          <p>Set</p>
          <p>{{ set.name }}</p>
          <p class="text-[24px] my-[10px]">{{ set.price }} тг</p>
          <hr class="my-[5px] border-0 h-[1px] bg-[#D0D0D0]" />
          <button
            type="submit"
            class="mb-[6px] bg-[black] max-w-[100px] w-full mx-auto"
          >
            <img class="mx-auto" src="../assets/icons/i_34.png" alt="" />
          </button>
        </div>
      </div>
    </div>

    <div
      class="sets_media hidden relative max-w-[1200px] w-full mx-auto overflow-hidden"
    >
      <div
        class="carousel-track flex transition-transform duration-500 ease-in-out border-[1px] border-solid border-[#D0D0D0]"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(set, index) in newList"
          :key="index"
          class="carousel-slide min-w-full text-center text-[18px]"
        >
          <img class="w-auto max-h-[250px] mx-auto" :src="set.image" alt="" />
          <p>Set</p>
          <p>{{ set.name }}</p>
          <p class="text-[24px] my-[10px]">{{ set.price }} тг</p>
          <hr class="my-[5px] border-0 h-[1px] bg-[#D0D0D0]" />
          <button
            type="submit"
            class="mb-[6px] bg-[black] max-w-[100px] w-full mx-auto"
          >
            <img class="mx-auto" src="../assets/icons/i_34.png" alt="" />
          </button>
        </div>
      </div>

      <button
        @click="prevSlide"
        class="absolute left-[10px] z-10 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer px-[10px]"
      >
        <img
          class="w-[50px] h-[16px]"
          src="../assets/icons/a_1.png"
          alt="Previous"
        />
      </button>
      <button
        @click="nextSlide"
        class="absolute right-[10px] z-10 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer px-[10px]"
      >
        <img
          class="w-[50px] h-[16px]"
          src="../assets/icons/a_2.png"
          alt="Next"
        />
      </button>
    </div>

    <div class="max-w-[1200px] w-full mx-auto my-[20px]">
      <div class="flex items-center gap-[36px]">
        <p class="text-[24px]">ВЫСШИЙ РЕЙТИНГ</p>
        <hr class="flex-1 border-0 h-[1px] bg-[#D0D0D0]" />
      </div>
      <div class="wine-grid w-full grid grid-cols-5 gap-[40px]">
        <div
          v-for="wine in wineList.slice(5, 10)"
          :key="wine.id"
          class="group mb-[20px] max-w-[228px] w-full text-[14px]"
        >
          <div class="min-h-[60px] flex justify-between items-center gap-[6px]">
            <p>{{ wine.name }}</p>
            <img src="../assets/icons/i_11.png" alt="i11" />
          </div>

          <hr class="flex-1 border-0 h-[1px] bg-[#D0D0D0]" />

          <div class="flex justify-between items-start">
            <p class="mt-[-1px]">56955</p>
            <div class="relative">
              <img
                :src="wine.image"
                alt="i13"
                class="w-[40px] h-[150px] transition-transform duration-300 group-hover:scale-120 group-hover:translate-y-[30px]"
              />
              <img
                src="../assets/icons/i_15.png"
                alt="i15"
                class="absolute top-[100px] right-[-11px] hidden rounded-[4px] group-hover:block"
              />
            </div>
            <img src="../assets/icons/i_12.png" alt="i12" />
          </div>

          <p
            class="text-center text-[12px] text-[#787878] group-hover:invisible"
          >
            Италия, белое сухое, 1л
          </p>

          <hr class="my-[28px] border-0 h-[1px] bg-[#D0D0D0]" />

          <p class="text-center mb-[-4px]">{{ wine.price }} тг</p>

          <div
            class="my-[6px] max-h-[30px] h-full flex justify-between items-center gap-[4px]"
          >
            <div
              class="flex-1 flex justify-between border-[1px] border-solid border-[black] px-[6px] py-[4px]"
            >
              <button class="border-none bg-transparent">−</button>
              <span>1</span>
              <button class="border-none bg-transparent">+</button>
            </div>
            <button
              class="w-1/2 bg-[black] border-[1px] flex justify-center items-center py-[4px]"
            >
              <img src="../assets/icons/i_14.png" class="w-4 h-4" alt="Bin" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-[1200px] w-full mx-auto my-[20px]">
      <div class="flex items-center gap-[36px]">
        <p class="text-[24px]">СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</p>
        <hr class="flex-1 border-0 h-[1px] bg-[#D0D0D0]" />
      </div>
      <div
        class="carousel relative max-w-[1200px] w-full mx-auto overflow-hidden"
      >
        <div
          class="carousel-track flex gap-[20px] transition-transform duration-500 ease-in-out w-full"
          :style="{ transform: `translateX(-${currentIndex * 50}%)` }"
        >
          <div
            class="carousel-slide relative min-w-[calc(50%-10px)]"
            v-for="(slide, index) in bannerImg"
            :key="index"
          >
            <img
              :src="slide.image"
              alt="Slide"
              class="carousel-img w-full h-auto block"
            />
            <p class="absolute bottom-[0] text-[32px] text-[white]">
              {{ slide.name }}
            </p>
          </div>
        </div>

        <button
          @click="prevSlide"
          class="absolute left-[10px] border-none cursor-pointer py-0 px-[10px] z-[3] top-1/2 bg-transparent"
        >
          <img src="../assets/icons/i_53.png" alt="" />
        </button>
        <button
          @click="nextSlide"
          class="absolute right-[10px] border-none cursor-pointer py-0 px-[10px] z-[3] top-1/2 bg-transparent"
        >
          <img src="../assets/icons/i_54.png" alt="" />
        </button>

        <div
          class="carousel-dots absolute bottom-[15px] left-1/2 -translate-x-1/2 z-[3]"
        >
          <span
            class="inline-block w-[12px] h-[12px] mx-[10px] bg-[#FFFFFF99] rounded-full cursor-pointer transition-colors duration-300"
            v-for="(_, index) in slides"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </div>

    <div class="max-w-[1200px] w-full mx-auto my-[20px]">
      <div class="flex items-center gap-[36px]">
        <p class="text-[24px]">ВЫБОР ПОКУПАТЕЛЕЙ</p>
        <hr class="flex-1 border-0 h-[1px] bg-[#D0D0D0]" />
      </div>
      <div class="wine-grid w-full grid grid-cols-5 gap-[40px]">
        <div
          v-for="wine in wineList.slice(5, 10)"
          :key="wine.id"
          class="group mb-[20px] max-w-[228px] w-full text-[14px]"
        >
          <div class="min-h-[60px] flex justify-between items-center gap-[6px]">
            <p>{{ wine.name }}</p>
            <img src="../assets/icons/i_11.png" alt="i11" />
          </div>

          <hr class="flex-1 border-0 h-[1px] bg-[#D0D0D0]" />

          <div class="flex justify-between items-start">
            <p class="mt-[-1px]">56955</p>
            <div class="relative">
              <img
                :src="wine.image"
                alt="i13"
                class="w-[40px] h-[150px] transition-transform duration-300 group-hover:scale-120 group-hover:translate-y-[30px]"
              />
              <img
                src="../assets/icons/i_15.png"
                alt="i15"
                class="absolute top-[100px] right-[-11px] hidden rounded-[4px] group-hover:block"
              />
            </div>
            <img src="../assets/icons/i_12.png" alt="i12" />
          </div>

          <p
            class="text-center text-[12px] text-[#787878] group-hover:invisible"
          >
            Италия, белое сухое, 1л
          </p>

          <hr class="my-[28px] border-0 h-[1px] bg-[#D0D0D0]" />

          <p class="text-center mb-[-4px]">{{ wine.price }} тг</p>

          <div
            class="my-[6px] max-h-[30px] h-full flex justify-between items-center gap-[4px]"
          >
            <div
              class="flex-1 flex justify-between border-[1px] border-solid border-[black] px-[6px] py-[4px]"
            >
              <button class="border-none bg-transparent">−</button>
              <span>1</span>
              <button class="border-none bg-transparent">+</button>
            </div>
            <button
              class="w-1/2 bg-[black] border-[1px] flex justify-center items-center py-[4px]"
            >
              <img src="../assets/icons/i_14.png" class="w-4 h-4" alt="Bin" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-[1200px] w-full mx-auto my-[20px]">
      <div class="flex items-center gap-[36px]">
        <p class="text-[24px]">БРЕНДЫ</p>
        <hr class="flex-1 border-0 h-[0px] bg-[#D0D0D0]" />
      </div>
      <div class="brands grid grid-cols-5 place-items-center gap-[50px]">
        <div v-for="brand in alcoholList.slice(0, 10)" :key="brand.id">
          <img class="w-full" :src="brand.logo" alt="" />
        </div>
      </div>
    </div>

    <div
      class="carousel relative max-w-[1200px] w-full mx-auto overflow-hidden"
    >
      <!-- Track wrapper -->
      <div
        class="carousel-track flex transition-transform duration-500 ease-in-out"
        :style="{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${pages.length * 100}%`,
        }"
      >
        <!-- Each page -->
        <div
          v-for="(page, pageIndex) in pages"
          :key="pageIndex"
          class="grid grid-cols-2 gap-[30px] place-items-center w-full px-4 shrink-0"
        >
          <div
            v-for="brand in page"
            :key="brand.id"
            class="w-full flex justify-center items-center"
          >
            <img class="max-w-[150px]" :src="brand.logo" alt="" />
          </div>
        </div>
      </div>

      <!-- Navigation buttons -->
      <button
        @click="prevSlide"
        class="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 p-2 rounded-full"
      >
        ‹
      </button>
      <button
        @click="nextSlide"
        class="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 p-2 rounded-full"
      >
        ›
      </button>

      <!-- Dots -->
      <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <span
          v-for="(page, index) in pages"
          :key="index"
          class="w-3 h-3 rounded-full cursor-pointer"
          :class="index === currentIndex ? 'bg-black' : 'bg-gray-400'"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>

    <div
      class="max-w-[1200px] w-full mx-auto my-[70px] pb-[50px] custom-shadow"
    >
      <img class="pl-[20px] pt-[20px]" src="../assets/icons/i_81.svg" alt="" />
      <p class="px-[50px] my-[0] leading-[30px]">
        Алкогольная продукция, представленная на сайте http://www.brut.kz/ может
        быть приобретена только в пункте выдачи или в одной из винотек, <br />
        расположенных в городах Алматы, Нур-Султан и Караганды. Розничная
        продажа осуществляется на основании лицензий на розничную продажу
        алкогольной продукции. <br />
        Адреса местонахождений торговых объектов, время их работы, а также иную
        информацию вы можете посмотреть в разделе Наши винотеки. <br />
        Мы не осуществляем доставку алкогольной продукции. Запрет на
        дистанционную продажу алкогольной продукции установлен <br />
        Федеральным законом от 22 ноября 1995 г. № 171-ФЗ и постановлением
        Республики Казахстан от 27 сентября 2007 г. № 612.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const pages = computed(() => chunkArray(alcoholList.value, 4));

const currentIndex = ref(0);

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % bannerImg.value.length;
}

function prevSlide() {
  currentIndex.value =
    (currentIndex.value - 1 + bannerImg.value.length) % bannerImg.value.length;
}

function goToSlide(index) {
  currentIndex.value = index;
}

const alcoholList = ref([]);

const getAlcohols = async () => {
  try {
    const response = await axios.get("https://brut.kz/api/brands");
    alcoholList.value = response.data; // or adjust based on actual structure
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};
const bannerImg = ref([]);

const getBanner = async () => {
  try {
    const response = await axios.get("https://brut.kz/api/1/slides");
    console.log("Response:", response.data);
    bannerImg.value = response.data; // or adjust based on actual structure
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};

const newList = ref([]);

const getList = async () => {
  try {
    const response = await axios.get("https://brut.kz/api/cocktail-sets");
    newList.value = response.data.products; // or adjust based on actual structure
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};

const wineList = ref([]);

const getWine = async () => {
  try {
    const response = await axios.get(
      "https://brut.kz/api/products/recommended/"
    );
    wineList.value = response.data.products; // or adjust based on actual structure
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};

onMounted(() => {
  getWine();
  getBanner();
  getAlcohols();
  getList();
});
</script>

<style scoped>
.carousel-dots .active {
  background: white;
}
@media (max-width: 1024px) {
  .carousel-img {
    width: 100%;
    height: auto;
  }
  .wine-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4;
  }
  .carousel-slide {
    min-width: 100%;
  }

  .carousel-track {
    gap: 0;
    padding: 0;
  }
  .carousel-slide p {
    font-size: 24px;
  }
  .sets {
    display: none;
  }
  .sets_media {
    display: block;
  }

}
.custom-shadow {
  box-shadow: 5px 5px 20px #00000040;
}
</style>
