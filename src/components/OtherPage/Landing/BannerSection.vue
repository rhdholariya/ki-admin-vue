<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  BButton,
  BCol,
  BContainer,
  BRow,
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNav,
  BNavItem,
} from "bootstrap-vue-next";

const words = ["Management", "Analytics", "Performance", "Dashboard", "Insights"];
const currentWord = ref(words[0]);
const currentWordIndex = ref(0);

const isScrolled = ref(false);


const animate = ref(true);

const bgFiles = [
  "star-bg.png",
  "arrow-bg.png",
  "circle.png",
  "circle.png",
  "arrow-bg.png",
  "star-bg.png",
  "arrow-bg.png",
];

let interval = null;

onMounted(() => {

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  interval = setInterval(() => {
    animate.value = false;

    setTimeout(() => {
      currentWordIndex.value =
          (currentWordIndex.value + 1) % words.length;
      currentWord.value = words[currentWordIndex.value];
      animate.value = true;
    }, 50);
  }, 2000);

  onUnmounted(() => {
    clearInterval(interval);
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>
<template>
  <div>
    <div class="landing-wrapper">

      <b-navbar
          toggleable="lg"
          sticky="top"
          class="landing-navbar position-fixed"
          :class="{ 'landing-navbar-active': isScrolled }"
      >

        <div class="landing-navbar-container d-block d-xxl-flex d-lg-flex d-md-block d-sm-block w-100 justify-content-between align-items-center">
            <div class="d-flex justify-content-between">
          <b-navbar-brand href="#home" class="logo">
            <img src="/images/logo/1.png" alt="Logo" class="w-200" />
          </b-navbar-brand>

          <b-navbar-toggle target="landing_nav" />
            </div>
          <b-collapse id="landing_nav" is-nav class="navbar-collapse collapse">
            <b-nav class="navbar-nav flex-grow-1 justify-content-center">
              <b-nav-item href="#Demo" class="active">Demo</b-nav-item>
              <b-nav-item href="#Cards">Cards</b-nav-item>
              <b-nav-item href="#Features">Features</b-nav-item>
              <b-nav-item
                  href="https://phpstack-1384472-5121645.cloudwaysapps.com/document/react-ts/ki-admin/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Document
              </b-nav-item>
              <b-nav-item href="#Pricing">Pricing</b-nav-item>
            </b-nav>

            <div class="d-flex">
              <b-button
                  variant="white"
                  href="https://themeforest.net/user/la-themes"
                  target="_blank"
                  class="me-2"
              >
                Buy Now
              </b-button>
              <b-button
                  variant="outline-white"
                  href="https://forms.gle/q7wFQQRtS2fLDZWbA"
                  target="_blank"
              >
                Hire Us
              </b-button>
            </div>
          </b-collapse>
        </div>
      </b-navbar>

      <section class="landing-section" id="home">
        <b-container fluid>
          <ul class="home-bg-icon">
            <li v-for="(file, index) in bgFiles" :key="index">
              <img
                  :src="`/images/landing/${file}`"
                  alt=""
                  :class="file === 'circle.png' || file === 'star-bg.png'
                  ? 'rounded-animation'
                  : 'floating-img'"
              />
            </li>
          </ul>

          <b-row class="landing-content">
            <b-col
                xxl="{ span: 8, offset: 2 }"
                class="text-center position-relative"
            >
              <div class="landing-heading">
                <h1>
                  Your Ultimate Admin <br />
                  Solution for
                  <span class="highlight-text animate" ref="highlightRef">
                    {{ currentWord }}
                  </span>
                </h1>
                <p>
                  Unlock premium features, advanced analytics, and priority
                  support. Subscribe today and take full control of your admin
                  dashboard.
                </p>
              </div>

              <div class="d-flex gap-3 justify-content-center my-5">
                <a
                    class="btn btn-danger f-s-16 px-4 py-2 text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Check Now
                </a>
                <a
                    class="btn btn-light-white px-4 py-2 f-s-16"
                    href="https://phpstack-1384472-5121645.cloudwaysapps.com/document/react-ts/ki-admin/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Document
                </a>
              </div>
            </b-col>

            <b-col xs="12" class="text-center position-relative">
              <img
                  src="/images/landing/home-banner.png"
                  alt="banner"
                  class="img-fluid main-banner-img"
              />
              <div class="left-side-banner">
                <img
                    src="/images/landing/left-banner.gif"
                    alt="left banner"
                    class="img-fluid"
                />
              </div>
              <div class="right-side-banner">
                <img
                    src="/images/landing/right-banner.gif"
                    alt="right banner"
                    class="img-fluid"
                />
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>

    <!-- Language Buttons -->
    <section class="p-0 overflow-visible">
      <b-container fluid class="p-0">
        <div class="language-box">
          <div class="language-box-item">
            <a
                href="/dashboard/ecommerce"
                class="primary-box bg-primary h-60 w-60 d-flex-center b-r-50"
            >
              <img
                  src="/images/landing/logo/01.png"
                  class="w-50"
                  alt="lang"
              />
            </a>
          </div>

          <div class="language-box-item">
            <a
                href="https://www.figma.com/design/kddmeMApQ3vBq6iQBgF7pP/Ki-admin-figma?node-id=0-1&p=f&t=ZQjbMYTVjrYVwBpg-0"
                class="danger-box bg-danger h-60 w-60 d-flex-center b-r-50"
                title="Figma"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img
                  src="/images/landing/logo/figma.png"
                  class="w-35"
                  alt="lang"
              />
            </a>
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>


