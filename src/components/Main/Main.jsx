import React from "react";

export const Main = () => {
  return (
    <main id="main" className="px-[271.6px] flex gap-5">
      <div className="w-[66%]">
        <h1 className="py-10 text-[40px] font-bold leading-[3rem]">
          Рецепт справжнього українського борщу
        </h1>
        <div className="mb-10">
          <time className="text-[13px] text-[#545658]" datetime="2022-01-22">
            22 січня 2022
          </time>
        </div>

        <div className="mb-6">
          <img className="w-full h-auto" src="./images/borsch.jpg" alt="Борщ" />
        </div>

        <p className="font-medium mr-10 mb-6 leading-[1.375rem]">
          Щоб вам не казали і як би не переконували, але справжній український
          борщ - це той борщ, який варять у вашій родині.
        </p>
        <p className="mr-10 mb-6 leading-[1.375rem]">
          В Україні існує десятки рецептів борщу. Вони варіюються у залежності
          від регіону. Але в кожного борщ асоціюється зі смаком дитинства - з
          борщем, який варила мама чи бабуся.
        </p>
        <a
          href="/"
          // eslint-disable-next-line no-octal-escape
          className="text-black border-b border-solid border-[#b80000] hover:text-[#b80000] hover:border-b-[2px] relative left-[30px] pl-[10px] before:content-['\2022'] before:absolute before:left-0"
        >
          Традиційний рецепт зеленого борщу
        </a>
        <p className="mt-4 mr-10 mb-6 leading-[1.375rem]">
          Пропонуємо вам класичний рецепт українського борщу. А також пропонуємо
          приготувати до нього пампушки з часником за{" "}
          <a
            href="/"
            className="text-black border-b border-solid border-[#b80000] hover:text-[#b80000] hover:border-b-[2px]"
          >
            нашим рецептом
          </a>
          .
        </p>

        <p className="font-medium">Інгредієнти:</p>
        <ul className="pl-10">
          <li className="mb-4">Свинячі кістки з м'ясом - 500 г</li>
          <li className="mb-4">Квасоля - 200 г</li>
          <li className="mb-4">Буряк - 1 шт</li>
          <li className="mb-4">Картопля - 3-4 шт</li>
          <li className="mb-4">Капуста - 0,5 маленької головки</li>
          <li className="mb-4">Морква - 1 шт</li>
          <li className="mb-4">Цибуля - 1 шт</li>
          <li className="mb-4">Томатна паста - 70 г</li>
          <li className="mb-4">Цукор - 1 ст. л</li>
          <li className="mb-4">Оцет - 1 ст. л.</li>
          <li className="mb-4">Сіль - до смаку</li>
          <li className="mb-4">Лимонний сік - до смаку</li>
          <li className="mb-4">Перець духмяний - 3-4 горошини</li>
          <li className="mb-4">Лавровий лист - 2 шт</li>
          <li className="mb-4">Часник - 2 зубці</li>
          <li className="mb-4">Олія - для смаження</li>
          <li className="mb-4">Сметана - для подачі</li>
        </ul>
      </div>

      <aside className="w-1/3 mt-8">
        <div className="p-4">
          <p className="mb-6 text-[24px] font-bold leading-[1.75rem]">
            Головне
          </p>
          <article className="mb-6">
            <h3 className="mb-[8px] font-bold text-[1rem]">
              <a className="text-black decoration-0" href="/">
                Невідомі факти про Гостомель. Як цей аеродром так і не став для
                росіян воротами в Київ
              </a>
            </h3>
            <time
              className="text-[0.8125rem] text-[#545658]"
              datetime="2024-02-24"
            >
              24 лютого 2024
            </time>
          </article>

          <article className="mb-6">
            <h3 className="mb-[8px] font-bold text-[1rem]">
              <a className="text-black decoration-0" href="/">
                Україна атакувала одне з найбільших металургійних підприємств
                Росії в Липецьку. Що відомо
              </a>
            </h3>
            <time
              className="text-[0.8125rem] text-[#545658]"
              datetime="2024-02-24"
            >
              24 лютого 2024
            </time>
          </article>

          <article className="mb-6">
            <h3 className="mb-[8px] font-bold text-[1rem]">
              <a className="text-black decoration-0" href="/">
                Таємниця співу китів. Вчені нарешті її розгадали
              </a>
            </h3>
            <time
              className="text-[0.8125rem] text-[#545658]"
              datetime="2024-02-24"
            >
              24 лютого 2024
            </time>
          </article>
        </div>
      </aside>
    </main>
  );
};
