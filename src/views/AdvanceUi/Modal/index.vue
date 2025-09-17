<script setup>
import { ref } from 'vue';
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {PhArrowArcRight, PhArrowFatLineRight, PhBriefcase} from "@phosphor-icons/vue";
import { BContainer, BRow, BCol, BCard, BCardBody, BButton, BModal } from 'bootstrap-vue-next';

const modalOpen = ref(false);

function toggle() {
  modalOpen.value = !modalOpen.value;
}


const smallModalOpen = ref(false);
const largeModalOpen = ref(false);
const extraLargeModalOpen = ref(false);

function toggleSmall() {
  smallModalOpen.value = !smallModalOpen.value;
}

function openLargeModal() {
  largeModalOpen.value = true;
}

function closeLargeModal() {
  largeModalOpen.value = false;
}

function openExtraLargeModal() {
  extraLargeModalOpen.value = true;
}

function closeExtraLargeModal() {
  extraLargeModalOpen.value = false;
}

const centerModalOpen = ref(false);

function openCenterModal() {
  centerModalOpen.value = true;
}

function closeCenterModal() {
  centerModalOpen.value = false;
}

const scrollModalOpen = ref(false);

function openScrollModal() {
  scrollModalOpen.value = true;
}

function closeScrollModal() {
  scrollModalOpen.value = false;
}

const fullscreenModalOpen = ref(false);

function openFullscreenModal() {
  fullscreenModalOpen.value = true;
}

function closeFullscreenModal() {
  fullscreenModalOpen.value = false;
}

const fullscreenSmModalOpen = ref(false);

function openFullscreenSmModal() {
  fullscreenSmModalOpen.value = true;
}

function closeFullscreenSmModal() {
  fullscreenSmModalOpen.value = false;
}

const fullscreenMdModalOpen = ref(false);

function openFullscreenMdModal() {
  fullscreenMdModalOpen.value = true;
}

function closeFullscreenMdModal() {
  fullscreenMdModalOpen.value = false;
}
const fullscreenLgModalOpen = ref(false);

function openFullscreenLgModal() {
  fullscreenLgModalOpen.value = true;
}

function closeFullscreenLgModal() {
  fullscreenLgModalOpen.value = false;
}

const fullscreenXlModalOpen = ref(false);

function openFullscreenXlModal() {
  fullscreenXlModalOpen.value = true;
}

function closeFullscreenXlModal() {
  fullscreenXlModalOpen.value = false;
}


const fullscreenXxlModalOpen = ref(false);

function openFullscreenXxlModal() {
  fullscreenXxlModalOpen.value = true;
}

function closeFullscreenXxlModal() {
  fullscreenXxlModalOpen.value = false;
}

const variants = ['primary', 'secondary', 'success', 'warning', 'info', 'danger', 'dark'];
const modalVariant = ref('primary');
const primaryModalOpen = ref(false);

function openPrimaryModal(variant) {
  modalVariant.value = variant;
  primaryModalOpen.value = true;
}

function closePrimaryModal() {
  primaryModalOpen.value = false;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// Breadcrumb data
const breadcrumbItems = {
  title: "Modals",
  items: [
    {label: " Advance UI ", icon: PhBriefcase},
    {label: "Modals", active: true},
  ],
};
</script>





<template>
  <AppLayout>
    <main>
      <b-container fluid>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
          <b-col sm="12" md="6">
            <b-card class="equal-card" no-body>
              <template #header>
                <h5>Default Modal</h5>
                <p class="mb-0 text-secondary">
                  If you want to keep the default modal, you can keep it using
                  <span class="text-danger">modal-dialog</span>
                </p>
              </template>
              <b-card-body>
                <b-button variant="primary"  @click="toggle">
                  Default Modal
                </b-button>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6">
            <b-card no-body>
              <template #header>
                <h5>Small Modal</h5>
                <p class="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it using
                  <span class="text-danger">modal-dialog or app_modal_sm</span>
                </p>
              </template>
              <b-card-body class="modal-btn">
                <b-button variant="primary"  @click="toggleSmall">
                  Small Modal
                </b-button>
                <b-button variant="secondary"  @click="openLargeModal">
                  Open Large Modal
                </b-button>
                <b-button variant="success"  @click="openExtraLargeModal">
                  Open Extra Large Modal
                </b-button>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6">
            <b-card class="equal-card" no-body>
              <template #header>
                <h5>Center Modal</h5>
                <p class="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it using
                  <span class="text-danger">modal-dialog-centered</span>
                </p>
              </template>
              <b-card-body>
                <b-button variant="danger"  @click="openCenterModal">
                  Center Modal
                </b-button>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6">
            <b-card no-body>
              <template #header>
                <h5>Scrollable Modal</h5>
                <p class="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it using
                  <span class="text-danger">modal-dialog-centered or modal-dialog-scrollable</span>
                </p>
              </template>
              <b-card-body class="card-body">
                <b-button variant="info"  @click="openScrollModal">
                  Open Scrollable Modal
                </b-button>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6">
            <b-card class="equal-card" no-body>
              <template #header>
                <h5>Full Screen Modal</h5>
                <p class="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it using
                  <span class="text-danger">modal-fullscreen</span>
                </p>
              </template>
              <b-card-body class="card-body">
                <b-button variant="dark"  @click="openFullscreenModal">
                  Fullscreen Modal
                </b-button>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6">
            <b-card no-body>
              <template #header>
                <h5>Full Screen Sm Down Modal</h5>
                <p class="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it using
                  <span class="text-danger">modal-fullscreen-sm-down</span>
                </p>
              </template>
              <b-card-body class="card-body">
                <b-button variant="light-secondary"  @click="openFullscreenSmModal">
                  Fullscreen Below SM Modal
                </b-button>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6">
                  <b-card no-body>
                    <template #header>
                      <h5>Full-Screen Md Down Modal</h5>
                      <p class="mb-0 text-secondary">
                        if you want to keep the default modal then you can keep it using
                        <span class="text-danger">modal-fullscreen-md-down</span>
                      </p>
                    </template>
                    <b-card-body>
                      <b-button variant="success"  @click="openFullscreenMdModal">
                        Fullscreen Below MD Modal
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
          <b-col sm="12" md="6">
            <b-card class="equal-card" no-body>
              <template #header>
                <h5>Full Screen Lg Down Modal</h5>
                <p class="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it using
                  <span class="text-danger">modal-fullscreen-lg-down</span>
                </p>
              </template>
              <b-card-body>
                <b-button variant="danger"  @click="openFullscreenLgModal">
                  Fullscreen Below LG Modal
                </b-button>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6">
            <b-card class="equal-card" no-body>
              <template #header>
                <h5>Full Screen Xl Down Modal</h5>
                <p class="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it using
                  <span class="text-danger">modal-fullscreen-xl-down</span>
                </p>
              </template>
              <b-card-body class="card-body">
                <b-button variant="info"  @click="openFullscreenXlModal">
                  Fullscreen Below XL Modal
                </b-button>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="6">
            <b-card no-body>
              <template #header>
                <h5>Full Screen Xxl Down Modal</h5>
                <p class="mb-0 text-secondary">
                  if you want to keep the default modal then you can keep it using
                  <span class="text-danger">modal-fullscreen-xxl-down</span>
                </p>
              </template>
              <b-card-body class="card-body">
                <b-button variant="warning"  @click="openFullscreenXxlModal">
                  Open Fullscreen Below XXL Modal
                </b-button>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col xs="12">
            <b-card no-body>
              <template #header>
                <h4>Themes Modal</h4>
                <p>You can use custom modals with theme colors.</p>
              </template>
              <b-card-body class="card-body">
                <b-button
                    v-for="variant in variants"
                    :key="variant"
                    :variant="'outline-' + variant"
                    class=" me-2 mb-2"
                    @click="openPrimaryModal(variant)"
                >
                  {{ capitalize(variant) }}
                </b-button>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <!--default modal -->
        <b-modal :show="modalOpen" @hide="toggle" title="Small Modal" header-bg-variant="primary-800" header-class="fs-5">
          <div class="text-center">
            <div class="d-flex gap-2">
              <img
                  src="/images/modals/06.jpg"
                  alt="Content marketing"
                  width="90"
                  height="90"
                  class="rounded-pill object-fit-cover h-90 w-90"
              />
              <div class="text-start d-flex flex-column gap-2">
                <h5>Content marketing</h5>
                <p class="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <template #footer>
            <b-button variant="light-secondary" @click="toggle">Close</b-button>
            <b-button variant="light-primary">Save Changes</b-button>
          </template>
        </b-modal>

        <!-- Small Modal -->
        <b-modal :show="smallModalOpen" @hide="toggleSmall" title="Small Modal">
          <div class="text-center">
            <div class="d-flex gap-2">
              <img
                  src="/images/modals/06.jpg"
                  alt="Content marketing"
                  width="90"
                  height="90"
                  class="rounded-pill object-fit-cover h-90 w-90"
              />
              <div class="text-start d-flex flex-column gap-2">
                <h5>Content marketing</h5>
                <p class="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <template #footer>
            <b-button variant="light-secondary" @click="toggle">Close</b-button>
            <b-button variant="light-primary">Save Changes</b-button>
          </template>
        </b-modal>

        <!-- Large Modal -->
        <b-modal :show="largeModalOpen" @hide="closeLargeModal" size="lg" title="Large Modal">
          <b-row>
            <b-col lg="4" class="text-center">
              <img alt="" class="img-fluid" src="/images/modals/05.png">
            </b-col>
            <b-col lg="8" class="align-self-center">
              <div class="error-content text-center">
                <h4 class=" mb-3">DO NOT ENTER</h4>
                <b-button variant="light-primary" type="button">Back to
                  Dashboard
                </b-button>
              </div>
            </b-col>
          </b-row>
          <template #footer>
            <b-button variant="light-secondary" @click="toggle">Close</b-button>
            <b-button variant="light-primary">Save Changes</b-button>
          </template>
        </b-modal>

        <!-- Extra Large Modal -->
        <b-modal :show="extraLargeModalOpen" @hide="closeExtraLargeModal" size="xl" title="Extra Large Modal">
          <p>In a professional context it often happens that private or corporate clients
            corder a
            publication to be made and presented with the actual content still not being
            ready.
            Think of a news blog that's filled with content hourly on the day of going
            live.</p>
        </b-modal>

        <!-- Centered Modal -->
        <b-modal
            :show="centerModalOpen"
            @hide="closeCenterModal"
            centered
            title="Center Modal"
        >
          <b-row>
            <b-col lg="3" class="text-center align-self-center">
              <img alt="" class="img-fluid" src="/images/modals/04.png">
            </b-col>
            <b-col lg="9" class="ps-4">
                <h5>Web designer</h5>
                <ul class="mt-3 mb-0 list-disc">
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
            </b-col>
          </b-row>
        </b-modal>
        <!-- Scrollable Modal -->
        <b-modal
            :show="scrollModalOpen"
            @hide="closeScrollModal"
            scrollable
            title="Scrollable Modal"
            centered
        >
          <div>
            <p v-for="i in 15" :key="i">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum.
            </p>
          </div>
        </b-modal>
        <!-- Fullscreen Modal -->
        <b-modal
            :show="fullscreenModalOpen"
            @hide="closeFullscreenModal"
            fullscreen
            title="Fullscreen Modal"
        >
          <p>This is a fullscreen modal content area.</p>
        </b-modal>

        <!-- Fullscreen Sm Down Modal -->
        <b-modal
            :show="fullscreenSmModalOpen"
            @hide="closeFullscreenSmModal"
            fullscreen="sm-down"
            title="Fullscreen Sm Down Modal"
        >
          <p><PhArrowArcRight :size="32" /> I must explain to
            you how all this mistaken idea of denouncing pleasure and praising pain was
            born and I will give you a complete account of the system, and expound the
            actual teachings of the great explorer of the truth, the master-builder of
            human happiness. </p>
          <p><PhArrowArcRight :size="32" /> I must explain to
            you how all this mistaken idea of denouncing pleasure and praising pain was
            born and I will give you a complete account of the system, and expound the
            actual teachings of the great explorer of the truth, the master-builder of
            human happiness. </p>
        </b-modal>

        <!-- Fullscreen Md Down Modal -->
        <b-modal
                  :show="fullscreenMdModalOpen"
                  @hide="closeFullscreenMdModal"
                  fullscreen="md-down"
                  title="Fullscreen Md Down Modal"
              >
                <p><PhArrowArcRight :size="32" /> I must explain to
                  you how all this mistaken idea of denouncing pleasure and praising pain was
                  born and I will give you a complete account of the system, and expound the
                  actual teachings of the great explorer of the truth, the master-builder of
                  human happiness. </p>
                <p><PhArrowArcRight :size="32" /> I must explain to
                  you how all this mistaken idea of denouncing pleasure and praising pain was
                  born and I will give you a complete account of the system, and expound the
                  actual teachings of the great explorer of the truth, the master-builder of
                  human happiness. </p>
              </b-modal>

        <!-- Fullscreen Lg Down Modal -->
        <b-modal
            :show="fullscreenLgModalOpen"
            @hide="closeFullscreenLgModal"
            fullscreen="lg-down"
            title="Fullscreen Lg Down Modal"
        >
          <p><PhArrowArcRight :size="32" /> I must explain to
            you how all this mistaken idea of denouncing pleasure and praising pain was
            born and I will give you a complete account of the system, and expound the
            actual teachings of the great explorer of the truth, the master-builder of
            human happiness. </p>

          <p><PhArrowArcRight :size="32" /> I must explain to
            you how all this mistaken idea of denouncing pleasure and praising pain was
            born and I will give you a complete account of the system, and expound the
            actual teachings of the great explorer of the truth, the master-builder of
            human happiness. </p>
          <p><PhArrowArcRight :size="32" /> I must explain to
            you how all this mistaken idea of denouncing pleasure and praising pain was
            born and I will give you a complete account of the system, and expound the
            actual teachings of the great explorer of the truth, the master-builder of
            human happiness. </p>
        </b-modal>

        <!-- Fullscreen XL Down Modal -->
        <b-modal
            :show="fullscreenXlModalOpen"
            @hide="closeFullscreenXlModal"
            fullscreen="xl-down"
            title="Fullscreen XL Down Modal"
        >
          <p><PhArrowFatLineRight :size="26" /> I must explain
            to you how all this mistaken idea of denouncing pleasure and praising pain
            was born and I will give you a complete account of the system, and expound
            the actual teachings of the great explorer of the truth, the master-builder
            of human happiness. </p>
        </b-modal>

        <!-- Fullscreen XXL Down Modal -->
        <b-modal
            :show="fullscreenXxlModalOpen"
            @hide="closeFullscreenXxlModal"
            fullscreen="xxl-down"
            title="Fullscreen XXL Down Modal"
        >
          <p><PhArrowFatLineRight :size="26" /> I must
            explain to you how all this mistaken idea of denouncing pleasure and
            praising pain was born and I will give you a complete account of the system,
            and expound the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. </p>
        </b-modal>
        <!-- Themes Modal -->
        <b-modal
            :show="primaryModalOpen"
            @hide="closePrimaryModal"
            centered
            hide-footer
            :title="capitalize(modalVariant) + ' Modal'"
        >
          <h5 class="mt-0 {{ modalVariant }}">Quos modi tempora illo fuga blanditiis
            voluptatum atque.</h5>
        </b-modal>
      </b-container>

    </main>

  </AppLayout>
</template>

