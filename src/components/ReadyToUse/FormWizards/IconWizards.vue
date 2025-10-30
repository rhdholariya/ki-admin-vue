    <script setup>
    import { ref } from "vue";
    import {
        BCard,
        BForm,
        BFormGroup,
        BFormInput,
        BFormInvalidFeedback,
        BRow,
        BCol,
        BButton,
        BCardHeader,
        BCardBody,
        BFormFile
    } from "bootstrap-vue-next";
    import {PhInfo, PhPhone, PhUsersThree} from "@phosphor-icons/vue";

    const step = ref(1);

    const formData = ref({
        emailId: "",
        password: "",
        confirmPassword: "",
        companyName: "",
        department: "",
        departmentCode: "",
        projectName: "",
        file: null
    });

    const errors = ref({});

    const handleChange = (field, value) => {
        formData.value[field] = value;
        if (errors.value[field]) delete errors.value[field];
    };


    const handleFileChange = (event) => {
        const file = event.target.files?.[0] || null;
        formData.value.file = file;
        if (errors.value.file) delete errors.value.file;
    };


    const validateStep = () => {
        const currentErrors = {};

        if (step.value === 1) {
            if (!formData.value.emailId) currentErrors.emailId = 'Email is required';
            if (!formData.value.password) currentErrors.password = 'Password is required';
            if (formData.value.password !== formData.value.confirmPassword)
                currentErrors.confirmPassword = 'Passwords must match';
        } else if (step.value === 2) {
            if (!formData.value.companyName) currentErrors.companyName = 'Company name is required';
            if (!formData.value.department) currentErrors.department = 'Department is required';
            if (!formData.value.departmentCode) currentErrors.departmentCode = 'Department code is required';
        } else if (step.value === 3) {
            if (!formData.value.projectName) currentErrors.projectName = 'Project name is required';
            if (!formData.value.file) currentErrors.file = 'File is required';
        }

        errors.value = currentErrors;
        return Object.keys(currentErrors).length === 0;
    };


    const handleNext = () => {
        if (validateStep()) step.value++;
    };

    const handlePrev = () => {
        step.value--;
    };

    </script>

    <template>
        <b-card class="p-0" no-body>
            <b-card-header>
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Wizard With Number</h5>
                </div>
            </b-card-header>

            <b-card-body>
                <div class="form-wizard">

                    <div class="form-wizard-header mb-4">
                        <ul class="form-wizard-steps d-flex gap-3 list-unstyled">
                            <li :class="[{ activated: step >= 1, active: step === 1, 'fw-bold': step === 1 }]">
                                <div class="wizard-steps"><PhUsersThree size="20" weight="bold" /></div>
                            </li>
                            <li :class="[{ activated: step >= 2, active: step === 2, 'fw-bold': step === 2 }]">
                                <div class="wizard-steps"><PhPhone size="20" weight="bold" /></div>
                            </li>
                            <li :class="[{ activated: step >= 3, active: step === 3, 'fw-bold': step === 3 }]">
                                <div class="wizard-steps"><PhInfo size="20" weight="bold" /></div>
                            </li>
                        </ul>
                    </div>

                    <b-form class="app-form" @submit="handleSubmit">
                        <template v-if="step === 1">
                            <b-row>
                                <b-col cols="12">
                                    <b-form-group label="Email*" label-for="emailId" class="mb-3">
                                        <b-form-input
                                            id="emailId"
                                            type="email"
                                            placeholder="Enter email"
                                            :value="formData.emailId"
                                            @input="handleChange('emailId', $event.target.value)"
                                            :state="errors.emailId ? false : null"
                                        />
                                        <b-form-invalid-feedback>{{ errors.emailId }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                                <b-col md="6">
                                    <b-form-group label="Password*" label-for="password" class="mb-3">
                                        <b-form-input
                                            id="password"
                                            type="password"
                                            placeholder="******"
                                            :value="formData.password"
                                            @input="handleChange('password', $event.target.value)"
                                            :state="errors.password ? false : null"
                                        />
                                        <b-form-invalid-feedback>{{ errors.password }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                                <b-col md="6">
                                    <b-form-group label="Confirm Password*" label-for="confirmPassword" class="mb-3">
                                        <b-form-input
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="******"
                                            :value="formData.confirmPassword"
                                            @input="handleChange('confirmPassword', $event.target.value)"
                                            :state="errors.confirmPassword ? false : null"
                                        />
                                        <b-form-invalid-feedback>{{ errors.confirmPassword }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </template>


                        <template v-else-if="step === 2">
                            <b-row>
                                <b-col cols="12">
                                    <b-form-group label="Company Name*" label-for="companyName" class="mb-3">
                                        <b-form-input
                                            id="companyName"
                                            type="text"
                                            placeholder="Enter Company Name"
                                            :value="formData.companyName"
                                            @input="handleChange('companyName', $event.target.value)"
                                            :state="errors.companyName ? false : null"
                                        />
                                        <b-form-invalid-feedback>{{ errors.companyName }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                                <b-col md="6">
                                    <b-form-group label="Department*" label-for="department" class="mb-3">
                                        <b-form-input
                                            id="department"
                                            type="text"
                                            placeholder="Enter Department"
                                            :value="formData.department"
                                            @input="handleChange('department', $event.target.value)"
                                            :state="errors.department ? false : null"
                                        />
                                        <b-form-invalid-feedback>{{ errors.department }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                                <b-col md="6">
                                    <b-form-group label="Department Code*" label-for="departmentCode" class="mb-3">
                                        <b-form-input
                                            id="departmentCode"
                                            type="text"
                                            placeholder="Enter Department Code"
                                            maxlength="6"
                                            :value="formData.departmentCode"
                                            @input="handleChange('departmentCode', $event.target.value)"
                                            :state="errors.departmentCode ? false : null"
                                        />
                                        <b-form-invalid-feedback>{{ errors.departmentCode }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </template>

                        <!-- Step 3 -->
                        <template v-else-if="step === 3">
                            <b-row>
                                <b-col cols="12">
                                    <b-form-group label="Project Name*" label-for="projectName" class="mb-3">
                                        <b-form-input
                                            id="projectName"
                                            type="text"
                                            placeholder="Enter Project Name"
                                            :value="formData.projectName"
                                            @input="handleChange('projectName', $event.target.value)"
                                            :state="errors.projectName ? false : null"
                                        />
                                        <b-form-invalid-feedback>{{ errors.projectName }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12">
                                    <b-form-group label="Upload File*" label-for="file" class="mb-3">
                                        <b-form-file
                                            id="file"
                                            @change="handleFileChange"
                                            :state="errors.file ? false : null"
                                            placeholder="Choose file or drop here..."
                                        />
                                        <b-form-invalid-feedback>{{ errors.file }}</b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </template>

                        <div class="d-flex justify-content-end gap-2">
                            <b-button v-if="step > 1" variant="secondary" type="button" @click="handlePrev">Previous</b-button>
                            <b-button v-if="step < 3" variant="primary" type="button" @click="handleNext">Next</b-button>
                            <b-button v-else variant="success" type="submit">Submit</b-button>
                        </div>
                    </b-form>
                </div>
            </b-card-body>
        </b-card>
    </template>
