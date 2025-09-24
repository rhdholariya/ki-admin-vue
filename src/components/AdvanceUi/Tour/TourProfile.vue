<script setup>

import {
  PhBriefcase,
  PhCake,
  PhEnvelopeSimple,
  PhGithubLogo,
  PhHeartStraight,
  PhLaptop,
  PhMapPin, PhPhone
} from "@phosphor-icons/vue";
import {BButton, BCard, BCardBody, BCardHeader, BCol} from "bootstrap-vue-next";
</script>

<template>
  <b-col lg="4" xxl="3">
    <!-- Profile -->
    <b-card>
      <b-card-body class="text-center">
        <div class="profile-container">
          <div class="image-details">
            <div class="profile-image"></div>
            <div class="profile-pic">
              <div class="avatar-upload ">
                <div class="avatar-edit">
                  <input id="imageUpload" type="file" accept=".png, .jpg, .jpeg"/>
                  <label for="imageUpload">
                    <PhHeartStraight size="20" weight="bold"/>
                  </label>
                </div>
                <div class="avatar-preview">
                  <div id="imgPreview">
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="person-details">
            <h5 class="fw-bold">
              Ninfa Monaldo
              <img src="/images/profile-app/01.png" width="20" height="20"/>
            </h5>
            <p>Web designer Developer</p>

            <div class="d-flex justify-content-between my-3">
              <div><h4 class="text-primary">10</h4>
                <p class="text-secondary">Post</p></div>
              <div><h4 class="text-primary">3.4k</h4>
                <p class="text-secondary">Follower</p></div>
              <div><h4 class="text-primary">1k</h4>
                <p class="text-secondary">Following</p></div>
            </div>

            <b-button variant="primary" class="b-r-22">
              <i class="ti ti-user-check"></i> Follow
            </b-button>
          </div>
        </div>
      </b-card-body>
    </b-card>

    <!-- About -->
    <b-card class="mt-3" no-body>
      <b-card-header><h5>About Me</h5></b-card-header>
      <b-card-body>
        <p class="text-muted f-s-13">
          Hello! I am Ninfa Monaldo, devoted web designer with 5+ years of experience in Adobe
          Creative Suite, HTML5, CSS3 and Java.
        </p>
        <div class="about-list">
          <div>
            <span class="fw-medium"><PhBriefcase size="18" weight="bold" /> Work passion</span>
            <span class="float-end f-s-13 text-secondary">IT Section</span>
          </div>
          <div>
            <span class="fw-medium"><PhEnvelopeSimple size="18" weight="bold" /> Email</span>
            <span class="float-end f-s-13 text-secondary">Ninfa@gmail.com</span>
          </div>
          <div>
            <span class="fw-medium"><PhPhone size="18" weight="bold" /> Contact</span>
            <span class="float-end f-s-13 text-secondary">0364 4559103</span>
          </div>
          <div>
            <span class="fw-medium"><PhCake size="18" weight="bold" /> Birth of Date</span>
            <span class="float-end f-s-13 text-secondary">24 Oct</span>
          </div>
          <div>
            <span class="fw-semibold"><PhMapPin size="18" weight="bold" /> Location</span>
            <span class="float-end f-s-13 text-secondary">Via Partenope, 117</span>
          </div>
          <div>
            <span class="fw-semibold"><PhLaptop size="18" weight="bold" /> Website</span>
            <span class="float-end f-s-13 text-secondary">Ninfa_devWWW.com</span>
          </div>
          <div>
            <span class="fw-semibold"><PhGithubLogo size="18" weight="bold" />Github</span>
            <span class="float-end f-s-13 text-secondary">Ninfa_dev</span>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>