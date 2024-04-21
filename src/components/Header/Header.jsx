import React from "react";

export const Header = () => {
  return (
    <header id="header" className="border-b border-gray-300">
      <div className="px-[255px] flex items-center h-[64px] bg-[#b80000]">
        <a
          href="/"
          className="relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-white after:bottom-[-5px] after:left-0 after:transform after:scale-x-0 after:transition-transform after-duration-300 after-ease-in-out hover:after:scale-x-100"
        >
          <svg
            viewBox="140 140 1532 145"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            height="32"
            className="fill-white"
          >
            <g
              fill-rule="evenodd"
              stroke="#000"
              stroke-width=".335"
              style={{ stroke: "#fff" }}
            >
              <path d="M759.928 265.75a4646.67 4646.67 0 00-23.49-37.242 2633.129 2633.129 0 00-23.49-36.2v73.442h-22.003V159.452h23.193a2668.556 2668.556 0 0123.713 36.052 2774.159 2774.159 0 0123.266 36.647v-72.699h22.003V265.75h-23.192zM804.187 159.452h73.145v19.03h-50.25v23.044h44.6v19.029h-44.6v26.166h53.075v19.03h-75.97V159.451zM982.101 265.75a3174.441 3174.441 0 01-9.886-35.978 3159.855 3159.855 0 01-9.441-35.977 2391.54 2391.54 0 01-9.218 35.977 2452.296 2452.296 0 01-9.811 35.978H919.51a2032.839 2032.839 0 01-14.57-52.628c-4.659-17.74-9.068-35.63-13.23-53.67h24.976a2003.215 2003.215 0 007.88 41.33 1444.404 1444.404 0 008.77 40.586 3259.894 3259.894 0 0018.882-77.456h22.3a3251.95 3251.95 0 0018.732 75.821 1999.976 1999.976 0 008.623-39.843 1455.41 1455.41 0 007.73-40.438h24.531a1845.28 1845.28 0 01-13.231 53.67 2041.61 2041.61 0 01-14.57 52.628h-24.233zM1077.471 267.98c-5.849 0-11.621-.645-17.32-1.932a66.227 66.227 0 01-16.427-6.096v-20.516c10.604 6.444 21.854 9.663 33.747 9.663 6.74 0 11.868-1.138 15.387-3.419 3.517-2.28 5.278-5.45 5.278-9.515 0-3.07-.868-5.475-2.601-7.21-1.736-1.733-4.04-3.122-6.914-4.163-2.875-1.04-6.095-2.007-9.663-2.899-5.849-1.387-11.002-2.974-15.462-4.757-4.46-1.784-8.228-3.889-11.298-6.319-3.073-2.427-5.404-5.352-6.988-8.771-1.586-3.42-2.379-7.508-2.379-12.265 0-6.74 1.71-12.537 5.13-17.395 3.419-4.855 8.25-8.597 14.495-11.225 6.244-2.624 13.677-3.939 22.3-3.939 5.65 0 11.2.646 16.651 1.933 5.45 1.289 10.356 3.024 14.718 5.203v20.22c-4.362-2.677-9.292-4.758-14.792-6.245-5.501-1.487-11.027-2.23-16.577-2.23-6.047 0-10.73 1.04-14.049 3.122-3.322 2.081-4.98 5.055-4.98 8.92 0 2.776.792 4.98 2.378 6.616 1.584 1.635 3.84 2.973 6.765 4.014 2.922 1.04 6.367 2.058 10.332 3.047 5.055 1.29 9.761 2.702 14.124 4.238 4.36 1.537 8.2 3.493 11.521 5.872 3.32 2.379 5.896 5.403 7.731 9.069 1.833 3.668 2.75 8.177 2.75 13.529 0 7.038-1.735 13.06-5.203 18.063-3.47 5.006-8.474 8.823-15.015 11.447-6.542 2.626-14.421 3.94-23.639 3.94z"></path>
              <path d="M141.733 141.732v141.733h141.732V141.732H141.733zm98.838 100.024c-2.421 3.42-5.872 6.06-10.352 7.917-4.482 1.859-9.865 2.788-16.153 2.788h-31.762v-79.725h29.92c8.816 0 15.646 1.767 20.488 5.297 4.841 3.531 7.263 8.604 7.263 15.22 0 3.79-.867 7.08-2.602 9.868-1.734 2.787-4.3 5-7.696 6.634 4.697 1.561 8.293 4.033 10.786 7.415 2.494 3.383 3.74 7.49 3.74 12.321 0 4.758-1.21 8.847-3.632 12.265zm-20.271-38.97c2.203-1.82 3.306-4.366 3.306-7.638 0-6.317-4.3-9.477-12.9-9.477h-12.25v19.847h12.25c4.19 0 7.388-.91 9.594-2.732zm-7.535 15.22h-14.309v21.52h14.093c4.84 0 8.564-.91 11.166-2.731 2.601-1.821 3.902-4.441 3.902-7.861 0-7.285-4.951-10.928-14.852-10.928zM318.898 141.732v141.733H460.63V141.732H318.898zm98.839 100.024c-2.422 3.42-5.873 6.06-10.353 7.917-4.482 1.859-9.865 2.788-16.152 2.788h-31.763v-79.725h29.92c8.816 0 15.646 1.767 20.488 5.296 4.841 3.532 7.264 8.605 7.264 15.22 0 3.792-.867 7.081-2.602 9.869-1.735 2.787-4.3 5-7.697 6.634 4.697 1.56 8.293 4.033 10.786 7.415 2.494 3.383 3.74 7.49 3.74 12.321 0 4.758-1.21 8.847-3.631 12.265zm-20.272-38.97c2.204-1.82 3.307-4.366 3.307-7.638 0-6.317-4.302-9.477-12.901-9.477h-12.25v19.847h12.25c4.191 0 7.389-.91 9.594-2.732zm-7.534 15.22h-14.31v21.52h14.093c4.841 0 8.564-.91 11.166-2.732 2.601-1.82 3.903-4.44 3.903-7.86 0-7.285-4.952-10.928-14.852-10.928zM496.063 283.465h141.733V141.732H496.063v141.733zm101.794-36.057c-3.302 1.822-7.128 3.261-11.478 4.316-4.352 1.056-8.93 1.586-13.73 1.586-6.376 0-12.116-.93-17.217-2.787-5.102-1.858-9.415-4.536-12.94-8.033-3.528-3.498-6.228-7.777-8.103-12.842-1.875-5.063-2.813-10.766-2.813-17.105 0-6.192.974-11.784 2.926-16.776 1.95-4.99 4.763-9.271 8.44-12.842 3.674-3.569 8.082-6.301 13.222-8.197 5.138-1.893 10.896-2.841 17.273-2.841 4.426 0 8.61.456 12.548 1.366 3.938.912 7.596 2.24 10.972 3.99v15.518a36.771 36.771 0 00-10.016-4.644c-3.6-1.056-7.39-1.585-11.365-1.585-5.477 0-10.148 1.021-14.01 3.06-3.865 2.04-6.828 4.992-8.89 8.853-2.065 3.863-3.095 8.562-3.095 14.098 0 5.539.993 10.257 2.982 14.154 1.987 3.898 4.876 6.868 8.665 8.907 3.788 2.04 8.383 3.06 13.785 3.06 8.252 0 15.866-2.148 22.844-6.448v15.192z"></path>
              <path d="M1220.192 233.068c-2.23 4.907-4.498 8.865-6.801 11.876-2.305 3.01-4.906 5.184-7.805 6.523-2.9 1.337-6.244 2.006-10.035 2.006-1.785 0-3.44-.13-4.962-.39-1.525-.261-2.919-.613-4.182-1.06v-11.93a20.08 20.08 0 003.791.948c1.263.186 2.75.279 4.46.279 2.527 0 4.74-.575 6.635-1.729 1.895-1.15 3.624-3.027 5.185-5.63-3.941-7.36-7.732-14.457-11.373-21.297a2216.265 2216.265 0 01-10.593-20.126 1089.998 1089.998 0 01-10.035-19.792h15.164c2.526 5.279 4.85 10.109 6.969 14.495 2.118 4.387 4.106 8.457 5.965 12.21 1.857 3.754 3.624 7.303 5.297 10.648 1.672 3.345 3.325 6.617 4.961 9.812 3.047-7.508 6.114-15.181 9.2-23.025a1252.1 1252.1 0 009.198-24.14h14.83a1542.378 1542.378 0 01-12.934 30.942 2104.107 2104.107 0 01-12.935 29.38zM1277.666 216.78h-4.125v35.681h-14.16v-79.724h14.16v32.335h4.348c5.426-5.576 10.555-11 15.388-16.279 4.83-5.278 9.662-10.63 14.495-16.056h17.171c-5.725 6.318-11.54 12.6-17.45 18.843a2743.825 2743.825 0 01-18.007 18.844 4989.777 4989.777 0 0119.29 20.74 1420.992 1420.992 0 0119.29 21.297h-18.287a2927.787 2927.787 0 00-15.722-17.785 952.063 952.063 0 00-16.39-17.896zM1338.658 252.461v-79.724h27.095c10.108 0 17.858 2.211 23.248 6.634 5.389 4.423 8.084 10.76 8.084 19.01 0 5.428-1.226 10.055-3.68 13.883-2.453 3.83-6.02 6.73-10.704 8.697-4.683 1.97-10.37 2.955-17.06 2.955h-13.045v28.545h-13.938zm13.938-68.463v28.656h12.154c6.02 0 10.536-1.152 13.547-3.456 3.01-2.303 4.516-5.91 4.516-10.816s-1.506-8.53-4.516-10.871c-3.01-2.342-7.49-3.513-13.436-3.513h-12.265zM1455.512 252.461a767.886 767.886 0 00-3.4-9.757 779.826 779.826 0 00-3.513-9.645h-34.9a422.888 422.888 0 00-3.457 9.645 3013.54 3013.54 0 00-3.345 9.757h-14.94a1549.87 1549.87 0 0115.665-40.921 1281.584 1281.584 0 0116.224-38.803h15.052a2020.632 2020.632 0 0116.447 39.917 2148.993 2148.993 0 0115.443 39.807h-15.276zm-37.464-31.221h26.202a2323.88 2323.88 0 00-6.467-17.394 1178.972 1178.972 0 00-6.578-17.06 776.856 776.856 0 00-6.746 17.115 957.968 957.968 0 00-6.411 17.339zM1481.38 172.737h14.162v79.724h-14.161v-79.724zm-6.83-21.084c2.175 0 3.896.562 5.166 1.685 1.267 1.125 1.903 2.811 1.903 5.058 0 2.03-.636 3.68-1.903 4.949-1.27 1.269-2.991 1.902-5.166 1.902-2.104 0-3.788-.633-5.058-1.902-1.267-1.268-1.903-2.919-1.903-4.95 0-2.246.636-3.932 1.903-5.057 1.27-1.123 2.954-1.685 5.058-1.685zm27.515 0c2.175 0 3.896.562 5.166 1.685 1.267 1.125 1.903 2.811 1.903 5.058 0 2.03-.636 3.68-1.903 4.949-1.27 1.269-2.991 1.902-5.166 1.902-2.03 0-3.698-.633-5.003-1.902-1.305-1.268-1.958-2.919-1.958-4.95 0-2.246.653-3.932 1.958-5.057 1.305-1.123 2.972-1.685 5.003-1.685zM1566.346 252.461v-35.57h-38.803v35.57h-14.161v-79.725h14.16v31.89h38.804v-31.89h14.16v79.725h-14.16zM1655.101 252.461a767.732 767.732 0 00-3.4-9.757 779.826 779.826 0 00-3.513-9.645h-34.9a422.888 422.888 0 00-3.457 9.645c-1.115 3.234-2.23 6.487-3.345 9.757h-14.941a1548.75 1548.75 0 0115.666-40.921 1280.788 1280.788 0 0116.223-38.803h15.053a2022.518 2022.518 0 0116.447 39.917 2151.263 2151.263 0 0115.443 39.807H1655.1zm-37.465-31.221h26.203a2323.92 2323.92 0 00-6.467-17.394 1180.84 1180.84 0 00-6.579-17.06 776.109 776.109 0 00-6.745 17.115 957.898 957.898 0 00-6.412 17.339z"></path>
            </g>
          </svg>
        </a>
      </div>

      <nav className="px-[255px]">
        <ul className="flex items-center h-[44px] menu-items">
          <li>
            <a
              href="/"
              className="block py-[4px] px-[12px] text-base font-normal text-[#141414] hover:border-b-[4px] hover:border-red-700 hover:pb-[10px] transition-all duration-300 ease-in-out"
            >
              Головна
            </a>
          </li>
          <li>
            <a
              href="/war"
              className="block py-[4px] px-[12px] text-base font-normal text-[#141414] hover:border-b-[4px] hover:border-red-700 hover:pb-[10px] transition-all duration-300 ease-in-out"
            >
              Війна з Росією
            </a>
          </li>
          <li>
            <a
              href="/stories"
              className="block py-[4px] px-[12px] text-base font-normal text-[#141414] hover:border-b-[4px] hover:border-red-700 hover:pb-[10px] transition-all duration-300 ease-in-out"
            >
              Історії
            </a>
          </li>
          <li>
            <a
              href="/video"
              className="block py-[4px] px-[12px] text-base font-normal text-[#141414] hover:border-b-[4px] hover:border-red-700 hover:pb-[10px] transition-all duration-300 ease-in-out"
            >
              Відео
            </a>
          </li>
          <li>
            <a
              href="/BBCBookOfTheYear"
              className="block py-[4px] px-[12px] text-base font-normal text-[#141414] hover:border-b-[4px] hover:border-red-700 hover:pb-[10px] transition-all duration-300 ease-in-out"
            >
              Книга року BBC
            </a>
          </li>
          <li>
            <a
              href="/podcasts"
              className="block py-[4px] px-[12px] text-base font-normal text-[#141414] hover:border-b-[4px] hover:border-red-700 hover:pb-[10px] transition-all duration-300 ease-in-out"
            >
              Подкасти
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
