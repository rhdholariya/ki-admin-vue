<script setup>
import { onMounted } from "vue";
import Sortable from "sortablejs";

import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BCardHeader,
  BButton,
} from "bootstrap-vue-next";

import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from "@tabler/icons-vue";

// left list
const shareMenuItemsLeft = [
  {
    imgSrc: "/images/avatar/1.png",
    name: "Wilson Terry",
    role: "web designer",
    bgColor: "primary",
  },
  {
    imgSrc: "/images/avatar/2.png",
    name: "Jalyn Donnelly",
    role: "web developer",
    bgColor: "secondary",
  },
  {
    imgSrc: "/images/avatar/3.png",
    name: "Betty Mante",
    role: "Ui/ux designer",
    bgColor: "success",
  },
  {
    imgSrc: "/images/avatar/4.png",
    name: "Pinkie Corkery",
    role: "React developer",
    bgColor: "danger",
  },
];

// right list
const shareMenuItemsRight = [
  {
    imgSrc: "/images/avatar/5.png",
    name: "Clara Schmidt",
    role: "Php developer",
    bgColor: "info",
  },
  {
    imgSrc: "/images/avatar/5.png",
    name: "Dane Wiza",
    role: "Node js developer",
    bgColor: "warning",
  },
  {
    imgSrc: "/images/avatar/6.png",
    name: "Palma Rohan",
    role: "Ios developer",
    bgColor: "light",
  },
  {
    imgSrc: "/images/avatar/07.png",
    name: "Ora Kreiger",
    role: "Flutter developer",
    bgColor: "dark",
  },
];

onMounted(() => {
  const shareMenuLeft = document.getElementById("shareMenuLeft");
  const shareMenuRight = document.getElementById("shareMenuRight");

  if (shareMenuLeft) {
    new Sortable(shareMenuLeft, { group: "shared", animation: 150 });
  }
  if (shareMenuRight) {
    new Sortable(shareMenuRight, { group: "shared", animation: 150 });
  }
});
</script>

<template>
  <b-col xxl="6">
    <b-card class="equal-card" no-body>
      <b-card-header>
        <h5>Draggable Share List</h5>
      </b-card-header>

      <b-card-body>
        <b-row>
          <!-- Left Column -->
          <b-col cols="6" class="box-layout-draggable">
            <ul class="draggable-share-list share-menu-list" id="shareMenuLeft">
              <li v-for="(item, index) in shareMenuItemsLeft" :key="index">
                <BCard no-body>
                  <BCardBody>
                    <div class="share-menu-item" draggable="false">
                      <div
                          :class="`h-40 w-40 d-flex-center b-r-50 overflow-hidden text-bg-${item.bgColor} share-menu-img`"
                      >
                        <img :src="item.imgSrc" :alt="item.name" class="img-fluid" />
                      </div>
                      <div class="share-menu-content">
                        <h6 class="mb-0">{{ item.name }}</h6>
                        <p class="mb-0 text-secondary">{{ item.role }}</p>
                      </div>
                      <div class="share-menu-icons">
                        <b-button class="btn btn-facebook icon-btn b-r-22">
                          <IconBrandFacebook size="14" class="text-white" />
                        </b-button>
                        <b-button class="btn btn-twitter icon-btn b-r-22">
                          <IconBrandTwitter size="14" class="text-white" />
                        </b-button>
                        <b-button class="btn btn-whatsapp icon-btn b-r-22">
                          <IconBrandWhatsapp size="14" class="text-white" />
                        </b-button>
                      </div>
                    </div>
                  </BCardBody>
                </BCard>
              </li>
            </ul>
          </b-col>

          <!-- Right Column -->
          <b-col cols="6" class="box-layout-draggable">
            <ul class="draggable-share-list share-menu-list" id="shareMenuRight">
              <li v-for="(item, index) in shareMenuItemsRight" :key="index">
                <b-card no-body>
                  <b-card-body>
                    <div class="share-menu-item" draggable="false">
                      <div
                          :class="`h-40 w-40 d-flex-center b-r-50 overflow-hidden text-bg-${item.bgColor} share-menu-img`"
                      >
                        <img :src="item.imgSrc" :alt="item.name" class="img-fluid" />
                      </div>
                      <div class="share-menu-content">
                        <h6 class="mb-0">{{ item.name }}</h6>
                        <p class="mb-0 text-secondary">{{ item.role }}</p>
                      </div>
                      <div class="share-menu-icons">
                        <b-button class="btn btn-facebook icon-btn b-r-22">
                          <IconBrandFacebook size="14" class="text-white" />
                        </b-button>
                        <b-button class="btn btn-twitter icon-btn b-r-22">
                          <IconBrandTwitter size="14" class="text-white" />
                        </b-button>
                        <b-button class="btn btn-whatsapp icon-btn b-r-22">
                          <IconBrandWhatsapp size="14" class="text-white" />
                        </b-button>
                      </div>
                    </div>
                  </b-card-body>
                </b-card>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-col>
</template>
