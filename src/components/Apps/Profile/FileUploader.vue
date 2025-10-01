<script setup>
import { ref } from "vue";
import vueFilePond from "vue-filepond";

// Import FilePond plugins
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Create FilePond component with plugins
const FilePond = vueFilePond(
    FilePondPluginFileEncode,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType,
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview
);

const files = ref([]);

const handleUpdateFiles = (fileItems) => {
  files.value = fileItems.map(fileItem => fileItem.file);
};
</script>



<template>
  <div>
    <FilePond
        ref="pond"
        :files="files"
        @updatefiles="handleUpdateFiles"
        allow-multiple
        :max-files="5"
        name="files"
        class="filelight file-light-secondary post-upload"
        label-idle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        accepted-file-types='["image/*", "application/pdf"]'
        max-file-size="5MB"
    />
  </div>
</template>




