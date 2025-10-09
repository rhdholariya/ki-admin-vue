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


const handleFileUpdate = (fileItems) => {
  files.value = fileItems.map(item => item.file);
};

</script>



<template>
  <div>
    <file-pond
        className="filepond-1"
        ref="pond"
        name="files"
        label-idle='<PhAddressBook :size="32" />
                 <div class="filepond--label-action text-decoration-none">
                    Upload Your Department Images</div>'
        :files="files"
        allow-multiple
        :max-files="5"
        @updatefiles="handleFileUpdate"
    />
  </div>
</template>




