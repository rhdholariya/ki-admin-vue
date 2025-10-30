<script setup>
import { ref } from "vue";
import { BCard, BCardHeader, BCardBody, BRow, BCol, BForm,
    BFormGroup, BFormInput, BFormSelect, BFormTextarea, BButton } from "bootstrap-vue-next";

import FileUploader from "@/components/Apps/Profile/FileUploader.vue";



const form = ref({
    departmentName: "",
    email: "",
    departmentHead: "",
    employee: "",
    bio: "",
});

const files = ref([]);

const handleSubmit = () => {
    console.log("Form submitted:", form.value, files.value);
};

const handleReset = () => {
    form.value = {
        departmentName: "",
        email: "",
        departmentHead: "",
        employee: "",
        bio: "",
    };
    files.value = [];
};
</script>
<template>
    <b-card no-body>
        <b-card-header>
            <h5>Add Departments Form</h5>
        </b-card-header>
        <b-card-body>
            <b-form @submit.prevent="handleSubmit" @reset="handleReset" class="app-form">
                <b-row>

                    <b-col md="6" class="mb-3">
                        <b-form-group label="Department Name">
                            <b-form-input v-model="form.departmentName" placeholder="Enter Department" />
                        </b-form-group>
                    </b-col>


                    <b-col md="6" class="mb-3">
                        <b-form-group label="Email Address">
                            <b-form-input v-model="form.email" type="email" placeholder="@department.com" />
                        </b-form-group>
                    </b-col>


                    <b-col md="6" xl="8" class="mb-3">
                        <b-form-group label="Department Head">
                            <b-form-input v-model="form.departmentHead" placeholder="Enter Department Head" />
                        </b-form-group>
                    </b-col>


                    <b-col md="6" xl="4" class="mb-3">
                        <b-form-group label="Add Employee">
                            <b-form-select v-model="form.employee">
                                <option value="">Select Employee</option>
                                <option value="1">Cedric Kelly</option>
                                <option value="2">Haley Kennedy</option>
                                <option value="3">Angelica Ramos</option>
                                <option value="4">Ashton Cox</option>
                                <option value="5">Timothy Mooney</option>
                                <option value="6">Brenden Wagner</option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>


                    <b-col cols="12" class="mb-3">
                        <b-form-group label="Upload Files">
                          <FileUploader />
                        </b-form-group>
                    </b-col>


                    <b-col xs="12" class="mb-3">
                        <b-form-group label="Department Bio">
                            <b-form-textarea
                                v-model="form.bio"
                                rows="3"
                                placeholder="Enter Department Bio"
                            />
                        </b-form-group>
                    </b-col>

                    <b-col cols="12" class="text-end mb-3">
                        <b-button type="submit" variant="primary" class="me-2">Add</b-button>
                        <b-button type="reset" variant="secondary">Reset</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-card-body>
    </b-card>
</template>


