<script setup>
import { ref } from 'vue';
import {
  PhUserCircle,
  PhGear,
  PhEyeSlash,
  PhNotification,
  PhDetective,
  PhQuestion,
  PhCurrencyCircleDollar,
  PhPlus,
  PhSignOut
} from '@phosphor-icons/vue';

const hideSettings = ref(true);
const notifications = ref(true);
const incognito = ref(false);
</script>

<template>
  <li class="header-profile">
    <a href="#" class="d-block head-icon" role="button" data-bs-toggle="offcanvas"
       data-bs-target="#profilecanvasRight" aria-controls="profilecanvasRight">
      <img src="" alt="avatar" class="b-r-10 h-35 w-35">
    </a>

    <div class="offcanvas offcanvas-end header-profile-canvas" tabindex="-1" id="profilecanvasRight"
         aria-labelledby="profilecanvasRight">
      <div class="offcanvas-body app-scroll">
        <ul>
          <li class="text-center">
            <img src="" alt="" class="img-fluid b-r-10 h-45 w-45">
            <h6 class="mb-0 mt-2">Laura Monaldo</h6>
            <p class="f-s-12 text-secondary">lauradesign@gmail.com</p>
          </li>
          <li class="app-divider-v dotted py-1"></li>
          <li><a class="f-w-500" href="./profile.html" target="_blank"><PhUserCircle class="pe-1 f-s-20" /> Profile Details</a></li>
          <li><a class="f-w-500" href="./setting.html" target="_blank"><PhGear class="pe-1 f-s-20" /> Settings</a></li>
          <li>
            <div class="d-flex justify-content-between">
              <a class="f-w-500" href="./setting.html" target="_blank"><PhEyeSlash class="pe-1 f-s-20" /> Hide Settings</a>

              <div class="flex-shrink-0">
                <div class="form-check form-switch">
                  <input class="form-check-input form-check-primary" type="checkbox" v-model="hideSettings"
                         checked>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="d-flex justify-content-between">
              <a class="f-w-500" href="#"><PhNotification class="pe-1 f-s-20" /> Notification</a>
              <div class="flex-shrink-0">
                <div class="form-check form-switch">
                  <input class="form-check-input form-check-primary" type="checkbox" v-model="notifications">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="d-flex justify-content-between">
              <a class="f-w-500" href="#"><PhDetective class="pe-1 f-s-20" /> Incognito</a>
              <div class="flex-shrink-0">
                <div class="form-check form-switch">
                  <input class="form-check-input form-check-primary" type="checkbox" v-model="incognito">
                </div>
              </div>
            </div>
          </li>
          <li class="app-divider-v dotted py-1"></li>
          <li><a class="f-w-500" href="./faq.html" target="_blank"><PhQuestion class="pe-1 f-s-20" /> Help</a></li>
          <li><a class="f-w-500" href="./pricing.html" target="_blank"><PhCurrencyCircleDollar class="pe-1 f-s-20" /> Pricing</a></li>
          <li><a class="mb-0 text-secondary f-w-500" href="./sign_up.html" target="_blank"><PhPlus class="pe-1 f-s-20" /> Add account</a></li>
          <li class="app-divider-v dotted py-1"></li>
          <li class="text-center">
            <div class="card card-light-primary upgrade-plan">
              <div class="card-body">
                <h6 class="mb-0 text-dark f-w-600">Free Plan</h6>
                <p class="text-dark mb-0">20k views</p>
                <a href="pricing.html" target="_blank" class="btn btn-dark text-white w-100 mt-2">Upgrade</a>
              </div>
            </div>
          </li>
          <li class="app-divider-v dotted py-1"></li>
          <li><a class="mb-0 text-danger" href="./sign_in.html" target="_blank"><PhSignOut class="pe-1 f-s-20" /> Log Out</a></li>
        </ul>
      </div>
    </div>
  </li>
</template>
