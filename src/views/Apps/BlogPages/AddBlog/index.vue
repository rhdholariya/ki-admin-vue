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
import { PhStack } from "@phosphor-icons/vue";
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
};

// Handle cancel
const handleCancel = () => {
  formData.value = {
    blogTitle: "",
    blogCategory: "",
    blogDescription: "",
    blogDate: "",
  };
};
</script>

<template>
  <app-layout>
    <main>
      <b-container fluid>
        <breadcrumb :breadcrumb="breadcrumbItems" />

        <b-row>
          <b-col xl="12">
            <b-card class="add-blog p-4" no-body>
              <b-form class="app-form" @submit="handleSubmit">
                <b-row>
                  <b-col md="6">
                    <!-- Blog Title -->
                    <b-form-group class="mb-3">
                      <div class="form-floating">
                        <b-form-input
                            id="blogTitle"
                            type="text"
                            placeholder="Blog Title"
                            v-model="formData.blogTitle"
                        />
                        <label for="blogTitle">Blog Title</label>
                      </div>
                    </b-form-group>

                    <!-- Blog Category -->
                    <b-form-group class="mb-3">
                      <div class="form-floating">
                        <b-form-select
                            id="blogCategory"
                            v-model="formData.blogCategory"
                            aria-label="Blog category select"
                        >
                          <option value="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </b-form-select>
                        <label for="blogCategory">Blog Category</label>
                      </div>
                    </b-form-group>

                    <!-- Blog Description -->
                    <b-form-group class="mb-3">
                      <div class="form-floating">
                        <b-form-textarea
                            id="blogDescription"
                            placeholder="Type a comment here"
                            style="height: 100px"
                            v-model="formData.blogDescription"
                        />
                        <label for="blogDescription">Blog Description</label>
                      </div>
                    </b-form-group>

                    <!-- Blog Date -->
                    <b-form-group class="mb-3">
                      <div class="form-floating">
                        <b-form-input
                            id="blogDate"
                            type="date"
                            placeholder="Blog Date"
                            v-model="formData.blogDate"
                        />
                        <label for="blogDate">Blog Date</label>
                      </div>
                    </b-form-group>
                  </b-col>

                  <b-col md="6">
                    <file-uploader />
                  </b-col>

                  <b-col xl="12" class="editor-details mb-3">
                    <text-editor />
                  </b-col>

                  <b-col cols="12" class="mt-3">
                    <div class="text-end">
                      <b-button type="submit" variant="primary">Add Blog</b-button>
                      <b-button
                          variant="outline-primary"
                          type="button"
                          class="ms-2"
                          @click="handleCancel"
                      >
                        Cancel
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </b-form>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </app-layout>
</template>
