<template>
  <div class="bg-[#2C2C2C]">
    <div class="bg-[#C49955] min-h-[16px] w-full"></div>
    <div class="arrow">
      <div class="max-w-[1400px] w-full mx-auto flex justify-end">
        <div
          class="bg-[#C49955] w-[60px] h-[60px] flex items-center justify-center"
        >
          <img class="" src="../assets/icons/f_1.png" alt="" />
        </div>
      </div>
    </div>
    <div class="container max-w-[1200px] w-full mx-auto flex justify-between">
      <div class="con text-[white]">
        <p class="text-[30px] font-bold">МЫ НА СВЯЗИ!</p>
        <p class="leading-[18px]">
          Винные истории, акции и бонусы для своих. <br />
          Один клик - и у вас в почте.
        </p>
        <div class="email max-h-[36px] h-full flex justify-start gap-[4px]">
          <input
            class="max-w-[220px] w-full p-[10px] border-[0.5px] border-solid border-[white] bg-[#2C2C2C] text-[white]"
            type="text"
            value="Укажите свой e-mail"
          />
          <button
            class="border-[0.5px] border-solid border-[white] bg-[#C49955]"
            type="submit"
          >
            <img src="../assets/icons/f_2.png" alt="" />
          </button>
        </div>
        <label class="flex ml-[-4px] items-center gap-[4px] py-[5px]">
          <input
            type="checkbox"
            class="w-[16px] h-[16px] appearance-none bg-[#2C2C2C] border-[#fff] border-[0.5px] rounded-[2px] checked:bg-white checked:border-white checked:after:content-['✔'] checked:after:text-[#C49955] checked:after:text-[12px] checked:after:block checked:after:text-center"
          />
          <span class=""
            >Я согласен с условиями пользовательского соглашения</span
          >
        </label>
        <p class="text-[20px] my-[30px]">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</p>
        <div class="flex justify-start gap-[32px] my-[5px] pb-[10px]">
          <img class="px-[7px]" src="../assets/icons/f_3.png" alt="" />
          <img src="../assets/icons/f_4.png" alt="" />
          <img src="../assets/icons/f_5.png" alt="" />
          <img src="../assets/icons/f_6.png" alt="" />
        </div>
      </div>
      <div class="uppercase">
        <p class="upper text-[20px] text-[white]">О BRUT</p>
        <p class="text-[#B7B7B7] pt-[16px]">О магазине</p>
        <p class="text-[#B7B7B7]">События</p>
        <p class="text-[#B7B7B7]">система лояльности</p>
        <p class="text-[#B7B7B7]">Публичная оферта</p>
      </div>
      <div class="uppercase">
        <p class="upper text-[20px] text-[white]">СОТРУДНИЧЕСТВО</p>
        <p class="text-[#B7B7B7] pt-[16px]">Корпоративным клиентам</p>
        <p class="text-[#B7B7B7]">ЧАСТНЫМ клиентам</p>
      </div>
      <div class="uppercase text-[white] text-[16px]">
        <p class="upper text-[20px] text-white">КОНТАКТЫ</p>
        <div class="flex justify-start items-center gap-[5px]">
          <img src="../assets/icons/f_7.png" alt="" />
          <p>Алматы</p>
        </div>
        <p class="text-white">+ 7 777 666 2233</p>
        <p class="text-white">+ 7 777 666 2233</p>
        <p class="text-white">
          Есть винный вопрос? <br />
          Звоните, обсудим!
        </p>
        <p class="text-white">brutwine@mail.ru</p>
      </div>
    </div>
    <div class="line">
      <div class="max-w-[1350px] w-full">
        <hr class="h-[0.5px] bg-[#C49955] border-0" />
      </div>
    </div>
    <div class="last">
      <div
        class="max-w-[1100px] w-full mx-auto flex justify-between text-[#C9C9C9] text-[14px]"
      >
        <div class="gap-[50px] flex justify-between">
          <p class="i">@BRUT, 2021</p>
          <p>Пользовательское соглашение и условия</p>
          <p>Обработка персональных данных</p>
          <p class="hi hidden">@BRUT, 2021</p>
        </div>
        <p class="ki">Создание сайтов. Разработано Nidge Digital Agency</p>
      </div>
    </div>
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
  .container {
    display: block;
    padding: 0 20px;
  }
  .line,
  .last {
    padding: 0 20px;
  }
  .last div {
    display: block;
    padding: 5px 0;
  }
  .i {
    display: none;
  }
  .hi {
    display: block;
  }
  .ki {
    display: none;
  }
  .upper {
    margin-top: 50px;
  }
  .arrow {
    padding-right: 20px;
  }
}
</style>
