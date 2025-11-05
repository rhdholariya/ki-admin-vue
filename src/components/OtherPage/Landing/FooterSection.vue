<script>
import {
    BButton,
    BCol,
    BContainer,
    BRow
} from 'bootstrap-vue-next';

export default {
    name: 'LandingFooter',
    components: {
        BButton,
        BCol,
        BContainer,
        BRow,
    },
};
</script>
<template>
  <section class="landing-footer section-lg-space-x">
    <b-container>
      <b-row>
        <b-col>
          <div class="footer-content text-center">
            <span class="bg-white h-90 w-90 d-flex-center b-r-50 m-auto footer-section-logo">
              <img src="/images/logo/3.png" alt="Ki Admin Logo" />
            </span>

            <h1 class="mt-4">Your journey starts here</h1>
            <p class="text-white-800 txt-ellipsis-3 mt-3 mb-4">
              Purchase The Ki-Admin & Craft Your Site Super Faster And
              Powerful. Discover the Ki-Admin Admin Theme. If you enjoy our
              template, please take a moment to rate us.
            </p>

            <div class="footer-btn d-flex justify-content-center gap-3 flex-wrap">
              <b-button
                  variant="primary"
                  size="lg"
                  href="https://themeforest.net/user/la-themes"
                  target="_blank"
              >
                Buy Now
              </b-button>
              <b-button
                  variant="danger"
                  size="lg"
                  href="mailto:teqlathemes@gmail.com"
                  target="_blank"
              >
                Need Help ?
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

