<script setup>
import {ref} from 'vue'
import {
    BButton,
    BCard,
    BCardHeader,
    BCardBody,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BRow
} from 'bootstrap-vue-next'

const fileName = ref('No file chosen, yet.')
const fileInputKey = ref(0)

const handleFileChange = (e) => {
    const files = e.target.files
    if (files && files.length > 0) {
        fileName.value = files[0].name
    } else {
        fileName.value = 'No file chosen, yet.'
    }
}

const clearFile = () => {
    fileName.value = 'No file chosen, yet.'
    fileInputKey.value += 1
}
</script>

<template>
    <b-card no-body>
        <b-card-header>
            <h5 class="mb-0">Basic File Upload</h5>
        </b-card-header>

        <b-card-body>
            <b-row>

                <b-col sm="12" xl="6">
                    <b-form class="app-form">
                        <b-form-group class="mb-3" label="Basic File Upload" label-for="basic-file">
                            <b-form-input id="basic-file" type="file"/>
                        </b-form-group>
                    </b-form>
                </b-col>


                <b-col sm="12" xl="6">
                    <b-form class="app-form">
                        <b-form-group class="mb-3" label="Custom File Upload" label-for="custom-file">

                            <input
                                :key="fileInputKey"
                                id="custom-file"
                                type="file"
                                class="d-none"
                                @change="handleFileChange"
                            />
                            <div class="d-flex align-items-center gap-3 flex-wrap">

                                <label for="custom-file" class="btn btn-primary mb-0 flex-shrink-0" tabindex="0">
                                    Choose File
                                </label>
                                <b-button
                                    v-if="fileName !== 'No file chosen, yet.'"
                                    variant="outline-secondary"
                                    size="sm"
                                    @click="clearFile"
                                >
                                    Clear
                                </b-button>
                                <span class="text-muted small">{{ fileName }}</span>
                            </div>
                        </b-form-group>
                    </b-form>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>