<template>
  <div>
    <!-- Account Security -->
    <b-card class="security-card-content mb-4" no-body>
      <b-card-body>
        <b-row class="align-items-center">
          <b-col sm="8">
            <h5 class="text-primary fw-semibold">Account Security</h5>
            <p class="text-secondary fs-6 mt-2 mb-0">
              Your account is valuable to hackers. To make 2-step verification
              very secure, use your phone's built-in security key.
            </p>
          </b-col>
          <b-col sm="4" class="text-end">
            <b-img
              alt="Account"
              src="/images/setting-app/account.jpg"
              class="img-fluid w-120"
            />
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>

    <!-- Security Items -->
    <b-card
      v-for="(item, idx) in securityItems"
      :key="idx"
      class="mb-4"
      no-body
    >
      <b-card-body>
        <b-row class="security-box-card align-items-center">
          <b-col md="3" class="position-relative">
            <span class="anti-code">{{ item.icon }}</span>
            <p class="security-box-title text-dark f-w-500 f-s-16 ms-5 security-code">
              {{ item.title }}
            </p>
          </b-col>
          <b-col md="6" class="security-discription">
            <p class="text-secondary fs-6 mb-2">{{ item.description }}</p>
            <b-badge
                variant="secondary-light"
              v-if="item.badge"
              class="text-light-secondary p-2"
            >
              {{ item.badge.icon }}
              {{ item.badge.text }}
            </b-badge>
          </b-col>
          <b-col md="3" class="text-end">
            <b-button
              v-if="item.button"
              :variant="item.button.color"
            >
              {{ item.button.text }}
            </b-button>
            <p v-else-if="item.rightText">{{ item.rightText }}</p>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>

    <!-- Devices and Sessions -->
    <b-card class="security-card-content mb-4" no-body>
      <b-card-body>
        <b-row class="align-items-center">
          <b-col sm="9">
            <h5 class="text-primary fw-semibold">
              Devices and active sessions
            </h5>
            <p class="text-secondary fs-6 mt-3">
              Your account is valuable to hackers. To make 2-step verification
              very secure, use your phone's built-in security key.
            </p>
          </b-col>
          <b-col sm="3" class="text-end">
            <b-img
              alt="Device"
              src="/images/setting-app/device.jpg"
              class="img-fluid w-120"
            />
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>

    <!-- Device Lists -->
    <b-row>
      <b-col lg="12" xxl="6">
        <ul class="active-device-session active-device-list">
          <li v-for="(item, idx) in leftSessionList" :key="idx">
            <b-card :class="{ 'share-menu-active': idx === 0 }" no-body>
              <b-card-body>
                <div class="device-menu-item" draggable="false">
                  <span class="device-menu-img">
                    <component
                      :is="item.icon"
                      :size="40"
                      weight="duotone"
                      :class="`text-${item.iconColor}`"
                    />
                  </span>
                  <div class="device-menu-content">
                    <h6 class="mb-0 txt-ellipsis-1">{{ item.name }}</h6>
                    <p class="mb-0 txt-ellipsis-1 text-secondary">
                      {{ item.location }}
                    </p>
                  </div>
                  <div class="device-menu-icons">
                    <b-badge
                      variant="secondary-light"
                      class="p-2 f-s-16 text-light-secondary"
                    >
                      <IconCircleXFilled
                        :size="16"
                        :class="item.status === 'online' ? 'me-1 text-success' : 'me-1 text-primary'"
                      />
                      {{ item.status === 'online' ? 'Online' : 'Offline' }}
                    </b-badge>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </li>
        </ul>
      </b-col>
      <b-col lg="12" xxl="6">
        <ul class="active-device-session active-device-list">
          <li v-for="(item, idx) in rightSessionList" :key="idx">
            <b-card no-body>
              <b-card-body>
                <div class="device-menu-item" draggable="false">
                  <span class="device-menu-img">
                    <component
                      :is="item.icon"
                      :size="40"
                      weight="duotone"
                      :class="`text-${item.iconColor}`"
                    />
                  </span>
                  <div class="device-menu-content">
                    <h6 class="mb-0 txt-ellipsis-1">{{ item.name }}</h6>
                    <p class="mb-0 txt-ellipsis-1 text-secondary">
                      {{ item.location }}
                    </p>
                  </div>
                  <div class="device-menu-icons">
                    <b-badge
                      variant="secondary-light"
                      class="p-2 f-s-16 text-light-secondary"
                    >
                      <IconCircleXFilled
                        :size="16"
                        :class="item.status === 'online' ? 'me-1 text-success' : 'me-1 text-primary'"
                      />
                      {{ item.status === 'online' ? 'Online' : 'Offline' }}
                    </b-badge>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </li>
        </ul>
      </b-col>
    </b-row>

    <!-- Change Password -->
    <b-card class="security-card-content" no-body>
      <b-card-body>
        <div class="account-security mb-2">
          <b-row class="align-items-center">
            <b-col sm="9">
              <h5 class="text-primary fw-semibold">Change Password</h5>
              <p class="account-discription text-secondary fs-6 mt-3">
                To change your password, please fill in the fields below. Your
                password must contain at least 8 characters and include at
                least one uppercase letter, one lowercase letter, one number,
                and one special character.
              </p>
            </b-col>
            <b-col sm="3" class="account-security-img">
              <b-img
                src="/images/setting-app/password.jpg"
                alt="Password Illustration"
                class="w-150"
              />
            </b-col>
          </b-row>
        </div>

        <b-form class="app-form">
          <b-row>
            <b-col
              v-for="field in fields"
              :key="field.id"
              sm="12"
              class="mb-3"
            >
              <b-form-group :label="field.label">
              <b-input-group>
                <b-input-group-text>
                  <PhLock :size="20" weight="bold" />
                </b-input-group-text>
                <b-form-input
                  :type="visibility[field.id] ? 'text' : 'password'"
                  :placeholder="field.placeholder"
                />
                <b-input-group-text
                  @click="toggleVisibility(field.id)"
                  style="cursor: pointer"
                >
                  <PhEye
                    v-if="visibility[field.id]"
                    :size="20"
                    weight="regular"
                  />
                  <PhEyeSlash
                    v-else
                    :size="20"
                    weight="regular"
                  />
                </b-input-group-text>
              </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </b-card-body>
    </b-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardBody,
  BRow,
  BCol,
  BBadge,
  BButton,
  BImg,
  BForm,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupText,
} from "bootstrap-vue-next";

// Import icons
import { IconCircleXFilled } from "@tabler/icons-vue";
import { PhEye, PhEyeSlash, PhLock } from "@phosphor-icons/vue";

// Import security data
import {
  leftSessionList,
  rightSessionList,
  securityItems,
} from "@/data/app/settingapp/SettingAppData.js";

// Password fields configuration
const fields = [
  {
    id: "current",
    label: "Current Password",
    placeholder: "********",
  },
  {
    id: "new",
    label: "New Password",
    placeholder: "********",
  },
  {
    id: "confirm",
    label: "Confirm Password",
    placeholder: "********",
  },
];

// Password visibility state
const visibility = ref({
  current: false,
  new: false,
  confirm: false,
});

// Methods
const toggleVisibility = (key) => {
  visibility.value[key] = !visibility.value[key];
};
</script>
