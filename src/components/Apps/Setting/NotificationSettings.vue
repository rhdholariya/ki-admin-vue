<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardHeader,
  BCardBody,
  BRow,
  BCol,
  BForm,
  BFormCheckbox,
  BFormRadio,
} from "bootstrap-vue-next";

import { PhDeviceMobileSpeaker, PhDesktop, PhWatch } from "@phosphor-icons/vue";

const emailSettings = ref({
  comments: false,
  candidates: false,
  offers: false,
});

const pushNotification = ref("everything");

const devices = ref([
  {
    id: "mobile",
    name: "Mobile push notification",
    icon: PhDeviceMobileSpeaker,
    description: "Receive all notifications via your mobile app",
    colorClass: "text-outline-primary",
    checked: true,
  },
  {
    id: "desktop",
    name: "Desktop push notification",
    icon: PhDesktop,
    description: "Receive all notifications via your desktop app",
    colorClass: "text-outline-success",
    checked: false,
  },
  {
    id: "smartwatch",
    name: "Smartwatch push notification",
    icon: PhWatch,
    description: "Receive all notifications via your smartwatch app",
    colorClass: "text-outline-danger",
    checked: false,
  },
]);
</script>

<template>
  <b-card no-body>
    <b-card-header>
      <h5>Notification</h5>
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col lg="6">
          <div class="notification-email">
            <h6 class="mb-0">By Email</h6>
            <p class="mb-3 text-dark">
              These are delivered via mail to your Email.
            </p>
            <b-form>
              <b-form-checkbox
                  v-model="emailSettings.comments"
                  class="mb-3 text-secondary f-w-500"
              >
                Comments - notified posts on comment
              </b-form-checkbox>
              <b-form-checkbox
                  v-model="emailSettings.candidates"
                  class="mb-3 text-secondary f-w-500"
              >
                Candidates - notified candidate applies
              </b-form-checkbox>
              <b-form-checkbox
                  v-model="emailSettings.offers"
                  class="mb-3 text-secondary f-w-500"
              >
                Offers - notified accepts or rejects
              </b-form-checkbox>
            </b-form>
          </div>
        </b-col>

        <b-col lg="6">
          <div class="notification-push">
            <h6 class="mb-0">Push Notification</h6>
            <p class="mb-3 text-dark">
              These are delivered via SMS to your mobile phone.
            </p>
            <b-form>
              <b-form-radio
                  v-model="pushNotification"
                  name="pushNotification"
                  value="everything"
                  class="mb-3 text-secondary f-w-500"
              >
                Everything
              </b-form-radio>
              <b-form-radio
                  v-model="pushNotification"
                  name="pushNotification"
                  value="sameAsEmail"
                  class="mb-3 text-secondary f-w-500"
              >
                Same as email
              </b-form-radio>
              <b-form-radio
                  v-model="pushNotification"
                  name="pushNotification"
                  value="noPush"
                  class="mb-3 text-secondary f-w-500"
              >
                No push notification
              </b-form-radio>
            </b-form>
          </div>
        </b-col>
      </b-row>

      <b-col md="12" class="mt-4">
        <div class="d-flex flex-column gap-4">
          <div
              v-for="device in devices"
              :key="device.id"
              class="share-menu-item"
          >
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center gap-3">
                <span
                    :class="['share-menu-img', device.colorClass, 'h-45 w-45 d-flex-center b-r-10']"
                >
                  <component :is="device.icon" :size="30" weight="bold" />
                </span>
                <div>
                  <h6 class="mb-0">{{ device.name }}</h6>
                  <p class="mb-0 text-secondary">{{ device.description }}</p>
                </div>
              </div>
              <b-form-checkbox
                  v-model="device.checked"
                  switch
                  :id="`${device.id}Push`"
              />
            </div>
          </div>
        </div>
      </b-col>
    </b-card-body>
  </b-card>
</template>
