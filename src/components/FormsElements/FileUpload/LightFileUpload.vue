<script setup>
import {ref} from 'vue'
import {BCard, BCardHeader, BCardBody, BRow, BCol} from 'bootstrap-vue-next'
import vueFilePond from 'vue-filepond'

import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginFileEncode,
    FilePondPluginFileValidateSize,
    FilePondPluginImageExifOrientation
)

const lightUploaders = ref([
    {id: 'light1', className: 'filepondlight1 file-light-primary'},
    {id: 'light2', className: 'filepondlight2 file-light-secondary'},
    {id: 'light3', className: 'filepondlight3 file-light-success'},
    {id: 'light4', className: 'filepondlight4 file-light-danger'}
])

const labelIdle = `
  <i class="fa-solid fa-cloud-upload fa-fw f-s-25"></i>
  <div class="filepond--label-action text-decoration-none">Upload Your Files</div>
`
</script>

<template>
    <b-card no-body>
        <b-card-header>
            <h5>Light Style</h5>
        </b-card-header>
        <b-card-body>
            <b-row class="file-uploader-box">
                <b-col
                    v-for="uploader in lightUploaders"
                    :key="uploader.id"
                    sm="6"
                    md="3"
                    xl="3"
                >
                    <file-pond
                        :allow-multiple="true"
                        name="files"
                        :class="`filelight ${uploader.className}`"
                        data-allow-reorder="true"
                        :label-idle="labelIdle"
                    />
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>

