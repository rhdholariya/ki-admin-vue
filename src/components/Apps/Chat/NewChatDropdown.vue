<script setup>
import { IconBrandHipchat, IconPhoneCall, IconPlus } from "@tabler/icons-vue"
import { BDropdown, BDropdownItem } from "bootstrap-vue-next"
</script>

<template>
  <div class="float-end">
    <div class="btn-group dropdown-icon-none">
      <b-dropdown
          variant="primary"
          toggle-class="active b-r-22 btn btn-primary icon-btn  dropdown-toggle active"
          end
          auto-close="true"

      >
        <!-- Dropdown toggle button -->
        <template #button-content>
          <IconPlus size="18" />
        </template>

        <!-- Dropdown menu items -->
        <b-dropdown-item href="#">
          <IconBrandHipchat size="18" class="me-2" />
          <span class="f-s-13">New Chat</span>
        </b-dropdown-item>

        <b-dropdown-item href="#">
          <IconPhoneCall size="18" class="me-2" />
          <span class="f-s-13">New Contact</span>
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>
