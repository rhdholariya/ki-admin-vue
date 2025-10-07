<script setup>
import { IconBrandHipchat, IconPhoneCall, IconPlus } from "@tabler/icons-vue";
import { BDropdown, BDropdownItem } from "bootstrap-vue-next";
</script>

<template>
  <div class="float-end">
    <div class="btn-group dropdown-icon-none">
      <BDropdown
          variant="primary"
          class="icon-btn b-r-22"
          toggle-class="active"
          end
          auto-close="true"
      >
        <template #button-content>
          <IconPlus size="18" />
        </template>

        <BDropdownItem href="#">
          <IconBrandHipchat size="18" class="me-2" />
          <span class="f-s-13">New Chat</span>
        </BDropdownItem>

        <BDropdownItem href="#">
          <IconPhoneCall size="18" class="me-2" />
          <span class="f-s-13">New Contact</span>
        </BDropdownItem>
      </BDropdown>
    </div>
  </div>
</template>
