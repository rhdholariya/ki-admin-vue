<script setup>
import { ref, onMounted } from "vue";
import Sortable from "sortablejs";
import {
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

// template refs
const shareMenuLeftRef = ref(null);
const shareMenuRightRef = ref(null);

// reactive lists
const shareMenuItemsLeft = ref([
  { imgSrc: "/images/avatar/1.png", name: "Wilson Terry", role: "Web designer", bgColor: "primary" },
  { imgSrc: "/images/avatar/2.png", name: "Jalyn Donnelly", role: "Web developer", bgColor: "secondary" },
  { imgSrc: "/images/avatar/3.png", name: "Betty Mante", role: "UI/UX designer", bgColor: "success" },
  { imgSrc: "/images/avatar/4.png", name: "Pinkie Corkery", role: "React developer", bgColor: "danger" },
]);

const shareMenuItemsRight = ref([
  { imgSrc: "/images/avatar/5.png", name: "Clara Schmidt", role: "PHP developer", bgColor: "info" },
  { imgSrc: "/images/avatar/5.png", name: "Dane Wiza", role: "Node.js developer", bgColor: "warning" },
  { imgSrc: "/images/avatar/6.png", name: "Palma Rohan", role: "iOS developer", bgColor: "light" },
  { imgSrc: "/images/avatar/07.png", name: "Ora Kreiger", role: "Flutter developer", bgColor: "dark" },
]);

onMounted(() => {
  if (shareMenuLeftRef.value) {
    new Sortable(shareMenuLeftRef.value, {
      group: "shared",
      animation: 150,
      onEnd: (evt) => {
        if (evt.from === shareMenuLeftRef.value && evt.to === shareMenuRightRef.value) {
          const movedItem = shareMenuItemsLeft.value.splice(evt.oldIndex, 1)[0];
          shareMenuItemsRight.value.splice(evt.newIndex, 0, movedItem);
        } else if (evt.from === shareMenuRightRef.value && evt.to === shareMenuLeftRef.value) {
          const movedItem = shareMenuItemsRight.value.splice(evt.oldIndex, 1)[0];
          shareMenuItemsLeft.value.splice(evt.newIndex, 0, movedItem);
        }
      },
    });
  }

  if (shareMenuRightRef.value) {
    new Sortable(shareMenuRightRef.value, {
      group: "shared",
      animation: 150,
    });
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
            <ul class="draggable-share-list share-menu-list" ref="shareMenuLeftRef">
              <li v-for="(item, index) in shareMenuItemsLeft" :key="index">
                <b-card no-body>
                  <b-card-body>
                    <div class="share-menu-item">
                      <div :class="`h-40 w-40 d-flex-center b-r-50 overflow-hidden text-bg-${item.bgColor} share-menu-img`">
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

          <!-- Right Column -->
          <b-col cols="6" class="box-layout-draggable">
            <ul class="draggable-share-list share-menu-list" ref="shareMenuRightRef">
              <li v-for="(item, index) in shareMenuItemsRight" :key="index">
                <b-card no-body>
                  <b-card-body>
                    <div class="share-menu-item">
                      <div :class="`h-40 w-40 d-flex-center b-r-50 overflow-hidden text-bg-${item.bgColor} share-menu-img`">
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
