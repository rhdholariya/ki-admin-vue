<script setup>
import { BCard, BCardHeader, BCardBody } from 'bootstrap-vue-next';
import FileUploader from '@/components/Apps/Profile/FileUploader.vue';
import { IconFolderFilled, IconDownload, IconBrandHipchat} from '@tabler/icons-vue'
</script>

<template>
  <div>
    <b-card no-body>
      <b-card-header>
        <h5 class="mb-0">File Upload</h5>
      </b-card-header>
      <b-card-body>
        <FileUploader />

        <div class="file-upload-btn mt-3">
          <div class="d-flex">
            <span class="bg-danger h-40 w-40 d-flex align-items-center justify-content-center rounded-circle me-3 heartBtn border-0 text-white">

              <IconBrandHipchat size="18" class="me-2 text-white" />
            </span>
            <span class="bg-success h-40 w-40 d-flex align-items-center justify-content-center rounded-circle me-3 heartBtn border-0 text-white">
              <IconFolderFilled size="18"/>
            </span>
          </div>
          <div>
            <span class="bg-warning h-40 w-40 d-flex align-items-center justify-content-center rounded-circle me-3 heartBtn border-0 text-white">
              <IconDownload size="18"/>

            </span>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>


