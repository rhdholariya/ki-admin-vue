<script setup>
import { ref } from 'vue'

// Import the Vue FilePond wrapper
import vueFilePond from 'vue-filepond'

// FilePond core + plugins
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'

import { IconCloudUpload } from '@tabler/icons-vue'

// ✅ Register plugins by passing them to vueFilePond
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginFileEncode,
    FilePondPluginFileValidateSize,
    FilePondPluginImageExifOrientation
)

// ✅ Files state
const files = ref([])

// ✅ Custom label HTML
const labelHTML = `
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-upload" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 16a4 4 0 1 1 0 -8a5 5 0 0 1 9.9 1.5h1.1a3 3 0 0 1 0 6h-1" />
      <path d="M9 16l3 -3l3 3" />
      <path d="M12 13v9" />
    </svg>
    <div class="filepond--label-action text-decoration-none">
      Upload Your Product Images
    </div>
  </span>
`
</script>

<template>
  <div class="app-file-upload addproduct cursor-pointer">
    <FilePond
        name="addProduct"
        :allow-multiple="true"
        :allow-reorder="true"
        v-model="files"
        :label-idle="labelHTML"
    />
  </div>
</template>
