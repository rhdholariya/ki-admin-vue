<script setup>
import { BCard, BCardHeader, BCardBody, BRow, BCol } from 'bootstrap-vue-next'
import vueFilePond from 'vue-filepond'

import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

const FilePond = vueFilePond(
    FilePondPluginFileEncode,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType,
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview
)
</script>

<template>
    <b-card no-body>
        <b-card-header>
            <h5>Circle File Uploader</h5>
        </b-card-header>

        <b-card-body>
            <b-row class="file-uploader-box">
                <b-col class="text-center">
                    <FilePond
                        name="filepond"
                        class="filepond-2 d-flex justify-content-center"
                        :allow-multiple="false"
                        :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
                        label-idle="Upload Your Image"
                        :image-preview-height="170"
                        style-panel-layout="compact circle"
                        style-load-indicator-position="center bottom"
                        style-progress-indicator-position="right bottom"
                        style-button-remove-item-position="left bottom"
                        style-button-process-item-position="right bottom"
                    />
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>


