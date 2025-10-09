<script setup>
import { ref } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormTextarea,
} from "bootstrap-vue-next";

import FileUploader from "@/components/Apps/Profile/FileUploader.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import TextEditor from "@/components/UiKits/Editor/TextEditor.vue";
import {PhStack} from "@phosphor-icons/vue";
import AppLayout from "@/views/AppLayout.vue";

// Form data
const formData = ref({
  blogTitle: "",
  blogCategory: "",
  blogDescription: "",
  blogDate: "",
});

// Breadcrumb data
const breadcrumbItems = ref({
  title: "Add Blog",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Blog Page", active: false },
    { label: "Add Blog", active: true },
  ],
});

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted:", formData.value);
  // Add your form submission logic here
};

// Handle cancel
const handleCancel = () => {
  // Reset form or navigate away
  formData.value = {
    blogTitle: "",
    blogCategory: "",
    blogDescription: "",
    blogDate: "",
  };
};
</script>

<template>
  <AppLayout>
    <main>
  <BContainer fluid>
    <Breadcrumb :breadcrumb="breadcrumbItems" />

    <BRow>
      <BCol xl="12">
        <BCard class="add-blog p-4">
          <BForm class="app-form" @submit="handleSubmit">
            <BRow>
              <BCol md="6">
                <!-- Blog Title -->
                <BFormGroup class="mb-3">
                  <div class="form-floating">
                    <BFormInput
                        id="blogTitle"
                        type="text"
                        placeholder="Blog Title"
                        v-model="formData.blogTitle"
                    />
                    <label for="blogTitle">Blog Title</label>
                  </div>
                </BFormGroup>

                <!-- Blog Category -->
                <BFormGroup class="mb-3">
                  <div class="form-floating">
                    <BFormSelect
                        id="blogCategory"
                        v-model="formData.blogCategory"
                        aria-label="Blog category select"
                    >
                      <option value="">Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </BFormSelect>
                    <label for="blogCategory">Blog Category</label>
                  </div>
                </BFormGroup>

                <!-- Blog Description -->
                <BFormGroup class="mb-3">
                  <div class="form-floating">
                    <BFormTextarea
                        id="blogDescription"
                        placeholder="Type a comment here"
                        style="height: 100px"
                        v-model="formData.blogDescription"
                    />
                    <label for="blogDescription">Blog Description</label>
                  </div>
                </BFormGroup>

                <!-- Blog Date -->
                <BFormGroup class="mb-3">
                  <div class="form-floating">
                    <BFormInput
                        id="blogDate"
                        type="date"
                        placeholder="Blog Date"
                        v-model="formData.blogDate"
                    />
                    <label for="blogDate">Blog Date</label>
                  </div>
                </BFormGroup>
              </BCol>

              <BCol md="6">
                <FileUploader />
              </BCol>

              <BCol xl="12" class="editor-details mb-3">
                <TextEditor />
              </BCol>

              <BCol cols="12" class="mt-3">
                <div class="text-end">
                  <BButton type="submit" variant="primary">
                    Add Blog
                  </BButton>
                  <BButton
                      variant="outline-primary"
                      type="button"
                      class="ms-2"
                      @click="handleCancel"
                  >
                    Cancel
                  </BButton>
                </div>
              </BCol>
            </BRow>
          </BForm>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
    </main>
  </AppLayout>
</template>

