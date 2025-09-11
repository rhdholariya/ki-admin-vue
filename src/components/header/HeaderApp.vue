<script setup lang="ts">
import {
  PhBoundingBox,
  PhShoppingBagOpen,
  PhEnvelope,
  PhChatCircleText,
  PhProjectorScreenChart,
  PhScroll,
  PhNotebook,
  PhCalendar,
  PhFolderOpen,
  PhGooglePhotosLogo,
  PhUsersThree,
  PhSelectionForeground,
  PhPlus
} from "@phosphor-icons/vue"
</script>

<template>
  <!-- Toggle Button -->
  <a
      href="#"
      role="button"
      class="d-block head-icon bg-light-dark rounded-circle f-s-22 p-2"
      data-bs-toggle="offcanvas"
      data-bs-target="#appscanvasRights"
      aria-controls="appscanvasRights"
  >
    <PhBoundingBox size="22" weight="regular" />
  </a>


  <div
      class="apps-offcanvas offcanvas offcanvas-end"
      tabindex="-1"
      id="appscanvasRights"
      aria-labelledby="appscanvasRightsLabel"
  >

    <div class="offcanvas-header">
      <div class="offcanvas-title h5">Apps</div>
      <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
      ></button>
    </div>

    <!-- Body with Shortcuts -->
    <div class="offcanvas-body">
      <div class="row row-cols-3 g-2">
        <div class="d-flex-center text-center">
          <a
              href=""
              target="_blank"
              class="text-light-primary w-100 rounded-3 py-3 px-2"
          >
            <span><PhShoppingBagOpen size="30" weight="light" /></span>
            <p class="mb-0 f-w-500 text-dark">E-shop</p>
          </a>
        </div>

        <div class="d-flex-center text-center">
          <a
              href=""
              target="_blank"
              class="text-light-danger w-100 rounded-3 py-3 px-2"
          >
            <span><PhEnvelope size="30" weight="light" /></span>
            <p class="mb-0 f-w-500 text-dark">Email</p>
          </a>
        </div>

        <div class="d-flex-center text-center">
          <a
              href=""
              target="_blank"
              class="text-light-success w-100 rounded-3 py-3 px-2"
          >
            <span><PhChatCircleText size="30" weight="light" /></span>
            <p class="mb-0 f-w-500 text-dark">Chat</p>
          </a>
        </div>

        <div class="d-flex-center text-center">
          <a
              href=""
              target="_blank"
              class="text-light-warning w-100 rounded-3 py-3 px-2"
          >
            <span><PhProjectorScreenChart size="30" weight="light" /></span>
            <p class="mb-0 f-w-500 text-dark">Project</p>
          </a>
        </div>

        <div class="d-flex-center text-center">
          <a
              href=""
              target="_blank"
              class="text-light-info w-100 rounded-3 py-3 px-2"
          >
            <span><PhScroll size="30" weight="light" /></span>
            <p class="mb-0 f-w-500 text-dark">Invoice</p>
          </a>
        </div>

        <div class="d-flex-center text-center">
          <a
              href=""
              target="_blank"
              class="text-light-dark w-100 rounded-3 py-3 px-2"
          >
            <span><PhNotebook size="30" weight="light" /></span>
            <p class="mb-0 f-w-500 text-dark">Blog</p>
          </a>
        </div>

        <div class="d-flex-center text-center">
          <a
              href=""
              target="_blank"
              class="text-light-danger w-100 rounded-3 py-3 px-2"
          >
            <span><PhCalendar size="30" weight="light" /></span>
            <p class="mb-0 f-w-500 text-dark">Calender</p>
          </a>
        </div>

        <div class="d-flex-center text-center">
          <a
              href=""
              target="_blank"
              class="text-light-warning w-100 rounded-3 py-3 px-2"
          >
            <span><PhFolderOpen size="30" weight="light" /></span>
            <p class="mb-0 f-w-500 text-dark txt-ellipsis-1">File Manager</p>
          </a>
        </div>

        <div class="d-flex-center text-center">
          <a
              href=""
              target="_blank"
              class="text-light-primary w-100 rounded-3 py-3 px-2"
          >
            <span><PhGooglePhotosLogo size="30" weight="light" /></span>
            <p class="mb-0 f-w-500 text-dark">Gallery</p>
          </a>
        </div>

        <div class="d-flex-center text-center">
          <a
              href=""
              target="_blank"
              class="text-light-success w-100 rounded-3 py-3 px-2"
          >
            <span><PhUsersThree size="30" weight="light" /></span>
            <p class="mb-0 f-w-500 text-dark">Profile</p>
          </a>
        </div>

        <div class="d-flex-center text-center">
          <a
              href=""
              target="_blank"
              class="text-light-secondary w-100 rounded-3 py-3 px-2"
          >
            <span><PhSelectionForeground size="30" weight="light" /></span>
            <p class="mb-0 f-w-500 text-dark">Task Board</p>
          </a>
        </div>

        <div class="d-flex-center text-center">
          <a
              href=""
              target="_blank"
              class="d-flex-center text-light-secondary w-100 h-100 rounded-3 p-2 dashed-1-secondary"
          >
            <span><PhPlus size="30" weight="light" /></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
