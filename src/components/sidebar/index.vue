<script setup>
import {BButton} from "bootstrap-vue-3";

defineEmits(['close-nav']);
</script>

<template>
  <nav>
    <button class="toggle-semi-nav" @click="$emit('close-nav')">
      Close
    </button>
    <div>
      <!-- Sidebar -->
      <nav>
        <ul>
          <li><router-link to="/">Dashboard</router-link></li>
          <li><router-link to="/users">Users</router-link></li>
          <li><router-link to="/settings">Settings</router-link></li>
          <b-button variant="primary">Primary Button</b-button>

        </ul>
      </nav>

      <!-- Page Content -->
      <router-view />
    </div>
  </nav>
</template>