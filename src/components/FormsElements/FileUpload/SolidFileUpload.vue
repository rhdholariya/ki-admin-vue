<script>
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

export default {
    name: 'SolidFileUpload',
    components: {
        BCard,
        BCardHeader,
        BCardBody,
        BRow,
        BCol,
        FilePond
    },
    data() {
        return {
            fileUploaders: [
                {id: 'solid1', className: 'filepondsolid1 file-primary'},
                {id: 'solid2', className: 'filepondsolid2 file-secondary'},
                {id: 'solid3', className: 'filepondsolid3 file-success'},
                {id: 'solid4', className: 'filepondsolid4 file-danger'}
            ],
            labelIdle: `

        <div class="filepond--label-action text-decoration-none">Upload Your Files</div>
      `
        }
    }
}
</script>
<template>
    <b-card no-body>
        <b-card-header>
            <h5>Solid Style</h5>
        </b-card-header>
        <b-card-body>
            <b-row class="file-uploader-box">
                <b-col
                    v-for="uploader in fileUploaders"
                    :key="uploader.id"
                    sm="6"
                    md="3"
                    xl="3"
                >
                    <file-pond
                        :allow-multiple="true"
                        name="files"
                        :class="`filesolid ${uploader.className}`"
                        data-allow-reorder="true"
                        :label-idle="labelIdle"
                    />
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>


