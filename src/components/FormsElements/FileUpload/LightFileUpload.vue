<script setup>
import { reactive } from 'vue';
import { BCard, BCardHeader, BCardBody, BRow, BCol } from 'bootstrap-vue-next';
import vueFilePond from 'vue-filepond';

// FilePond plugins
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// FilePond styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';



const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginFileEncode,
    FilePondPluginFileValidateSize,
    FilePondPluginImageExifOrientation
);

// Reactive array for uploaders
const lightUploader = reactive([
    { id: 'light1', files: [] },
    { id: 'light2', files: [] },
    { id: 'light3', files: [] },
    { id: 'light4', files: [] },
]);
</script>


<template>
    <b-card>
        <b-card-header>
            <h5>Light Style</h5>
        </b-card-header>
        <b-card-body>
            <b-row class="file-uploader-box">
                <b-col
                    v-for="uploader in lightUploader"
                    :key="uploader.id"
                    sm="6"
                    md="3"
                    xl="3"
                >
                    <FilePond
                        v-model="uploader.files"
                        allow-multiple
                        name="files"
                        class="filelight"
                        :allow-reorder="true"
                        :accepted-file-types="['image/png','image/jpeg','image/gif']"
                        :label-idle="
              `<i class='fa-solid fa-cloud-upload fa-fw f-s-25'></i>
               <div class='filepond--label-action text-decoration-none'>Upload Your Files</div>`"
                    />
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>


