<script setup>
import { ref } from 'vue'
import { BButton, BCard, BCardHeader, BCardBody, BCol, BForm, BFormGroup, BFormInput, BRow } from 'bootstrap-vue-next'

const fileName = ref('No file chosen, yet.')
const fileInputRef = ref(null)


const handleCustomFileUpload = () => {
    fileInputRef.value?.click()
}

const handleFileChange = (e) => {
    const files = e.target.files
    if (files && files.length > 0) {
        fileName.value = files[0].name
    } else {
        fileName.value = 'No file chosen, yet.'
    }
}
</script>

<template>
    <b-card no-body>
        <b-card-header>
            <h5>Basic File Upload</h5>
        </b-card-header>

        <b-card-body>
            <b-row>

                <b-col sm="12" xl="6">
                    <b-form>
                        <b-form-group class="mb-3">
                            <label class="mt-2">File Upload</label>
                            <b-form-input type="file" />
                        </b-form-group>
                    </b-form>
                </b-col>


                <b-col sm="12" xl="6">
                    <b-form-group class="mb-3">
                        <label class="mt-2">Custom File Upload</label>
                        <b-form-input
                            ref="fileInputRef"
                            type="file"
                            hidden
                            @change="handleFileChange"
                        />
                        <div class="d-flex align-items-center gap-3">
                            <b-button
                                variant="primary"
                                class="flex-shrink-0"
                                @click="handleCustomFileUpload"
                            >
                                Add file
                            </b-button>
                            <span id="custom-text">{{ fileName }}</span>
                        </div>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>
