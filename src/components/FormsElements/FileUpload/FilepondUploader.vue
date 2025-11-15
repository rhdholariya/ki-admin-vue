<script setup>
import { BCard, BCardHeader, BCardBody, BRow, BCol } from 'bootstrap-vue-next'
import FilePondUploaderBase from '@/components/Apps/Profile/FileUploader.vue'
</script>
<template>
    <b-card class="equal-card" no-body>
        <b-card-header>
            <h5>Filepond File Uploader</h5>
        </b-card-header>

        <b-card-body>
            <b-row class="file-uploader-box">
                <b-col md="6">
                    <FilePondUploaderBase
                        class="filepond-file"
                        :allow-multiple="false"
                        label-idle='
              <div class="filepond--label-action text-decoration-none">Upload Your Files</div>'
                    />
                </b-col>

                <b-col md="6">
                    <FilePondUploaderBase
                        class="filepond-1 "
                        :allow-multiple="true"
                        :allow-reorder="true"
                        label-idle='<i class="fa-solid fa-cloud-upload fa-fw f-s-60 text-secondary"></i>
              <div class="filepond--label-action text-decoration-none">Upload Your Files</div>'
                    />
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>




