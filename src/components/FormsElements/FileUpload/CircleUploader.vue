<script setup>
import {ref} from "vue";
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
import {BCard, BCardBody, BCardHeader, BCol, BRow} from "bootstrap-vue-next";

// Create FilePond component with ALL plugins
const FilePond = vueFilePond(
    FilePondPluginFileEncode,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType,
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview  // Make sure this is included
);

const files = ref([]);

const handleFileUpdate = (fileItems) => {
    files.value = fileItems.map(item => item.file);
};

</script>

<template>
    <b-card>
        <b-card-header>
            <h5>Circle File Uploader</h5>
        </b-card-header>
        <b-card-body>
            <b-row className="file-uploader-box">
                <b-col className="text-center">

                    <file-pond
                        className="filepond-2"
                        ref="pond"
                        name="files"
                        label-idle='<PhAddressBook :size="32" />
                 <div class="filepond--label-action text-decoration-none">
                    Upload Your Department Images</div>'
                        :files="files"
                        allow-multiple
                        :max-files="5"
                        accepted-file-types="image/jpeg, image/png, image/gif, image/webp"
                        allow-image-preview="true"

                        image-preview-fit="cover"
                        allow-image-transform="true"
                        image-transform-output-quality="90"

                        @updatefiles="handleFileUpdate"
                    />
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>