<script setup>
import { ref, onMounted, computed } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BButton,
  BForm,
  BFormGroup,
  BModal,
  BDropdown,
  BDropdownItem,
  BFormInput,
  BFormTextarea,
  BFormFile,
  BImg,
} from "bootstrap-vue-next";

import {
  IconArchive,
  IconCalendarDue,
  IconDotsVertical,
  IconTrash,
} from "@tabler/icons-vue";

import FsLightbox from "fslightbox-vue";
import { initialBlogData } from "@/data/app/Blog/BlogData.js";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { PhStack } from "@phosphor-icons/vue";

// 🌸 State
const blogs = ref([]);
const modalOpen = ref(false);
const selectedBlog = ref(null);
const selectedImage = ref(null);
const imageFile = ref(null);

const lightboxToggler = ref(false);
const currentSlideIndex = ref(1);
const lightboxSources = ref([]);

const formData = ref({
  file: null,
  blogTitle: "",
  blogDescription: "",
  blogDate: "",
  blogTag: "",
});

// 🌸 Helper functions
const initializeLightboxSources = () => {
  lightboxSources.value = blogs.value.map((b) => b.image);
};

const handleImageClick = (index) => {
  currentSlideIndex.value = index + 1;
  lightboxToggler.value = !lightboxToggler.value;
};

const openBlogLightbox = (blogImage, index) => {
  const slideIndex = lightboxSources.value.findIndex((src) => src === blogImage);
  handleImageClick(slideIndex >= 0 ? slideIndex : index);
};

const formatDisplayDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const formatInputDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

// 🌸 Lifecycle
onMounted(() => {
  blogs.value = initialBlogData;
  initializeLightboxSources();
});

// 🌸 Modal Logic
const toggleModal = () => (modalOpen.value = !modalOpen.value);
const closeModal = () => (modalOpen.value = false);

const handleEditClick = (blog) => {
  selectedBlog.value = {...blog};
  selectedImage.value = blog.image;
  imageFile.value = null;

  formData.value = {
    file: null,
    blogTitle: blog.title,
    blogDescription: blog.description,
    blogDate: formatInputDate(blog.date),
    blogTag: blog.tag,
  };

  toggleModal();
};

const handleDeleteClick = (id) => {
  blogs.value = blogs.value.filter((b) => b.id !== id);
  initializeLightboxSources();
};

const handleImageChange = (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  imageFile.value = file;
  formData.value.file = file;

  const reader = new FileReader();
  reader.onload = (ev) => (selectedImage.value = ev.target.result);
  reader.readAsDataURL(file);
};

const handleSaveChanges = () => {
  if (!selectedBlog.value) return;

  const updatedBlog = {
    ...selectedBlog.value,
    title: formData.value.blogTitle,
    description: formData.value.blogDescription,
    date: formData.value.blogDate,
    tag: formData.value.blogTag,
    image: imageFile.value
        ? URL.createObjectURL(imageFile.value)
        : selectedBlog.value.image,
  };

  blogs.value = blogs.value.map((b) =>
      b.id === updatedBlog.id ? updatedBlog : b
  );

  initializeLightboxSources();
  toggleModal();
};

// 🌸 Breadcrumb
const breadcrumbItems = computed(() => ({
  title: "Blog",
  items: [
    {label: "Apps", icon: PhStack},
    {label: "Blog Page", active: true},
  ],
}));
</script>

<template>
  <app-layout>
    <main>
      <b-container fluid>
        <!-- Breadcrumb -->
        <breadcrumb :breadcrumb="breadcrumbItems"/>

        <!-- Blog Cards -->
        <b-row>
          <b-col
              v-for="(blog, index) in blogs"
              :key="blog.id"
              :class="blog.colclass"
          >
            <b-card class="overflow-hidden blog-card position-relative" no-body>
              <a
                  class="img-hover-zoom cursor-pointer"
                  @click.prevent="openBlogLightbox(blog.image, index)"
              >
                <b-img
                    :src="blog.image"
                    :alt="blog.title"
                    class="card-img-top"
                    fluid
                />
              </a>

              <div class="position-absolute top-0 end-0 m-2">
                <span class="badge bg-secondary">{{ blog.tag }}</span>
              </div>

              <b-card-body>
                <div class="d-flex align-items-center mb-2 text-muted">
                  <icon-calendar-due size="18" class="me-2"/>
                  {{ formatDisplayDate(blog.date) }}
                </div>

                <router-link
                    to="/apps/blog-page/blog-details"
                    class="fs-5 title-text text-decoration-none"
                >
                  {{ blog.title }}
                </router-link>

                <p class="text-secondary txt-ellipsis-2 mt-2">
                  {{ blog.description }}
                </p>

                <hr class="dashed"/>

                <div class="d-flex justify-content-between align-items-center">
                  <div
                      class="rounded-circle overflow-hidden me-3 w-45 h-45 bg-primary"
                  >
                    <b-img
                        :src="blog.author.avatar"
                        alt="avatar"
                        class="img-fluid w-100 h-100"
                        rounded
                    />
                  </div>

                  <div class="flex-grow-1">
                    <h6 class="mb-0">{{ blog.author.name }}</h6>
                    <small class="text-muted">{{ blog.author.time }}</small>
                  </div>

                  <b-dropdown
                      variant="white"
                      class="icon-btn border-0"
                      no-caret
                      right
                  >
                    <template #button-content>
                      <icon-dots-vertical size="18"/>
                    </template>

                    <b-dropdown-item class="text-success" @click="handleEditClick(blog)">
                      <icon-archive size="16" class="me-2"/>
                      Edit
                    </b-dropdown-item>

                    <b-dropdown-item class="text-danger" @click="handleDeleteClick(blog.id)">
                      <icon-trash size="16" class="me-2"/>
                      Delete
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <!-- FsLightbox -->
        <fs-lightbox
            v-if="lightboxSources.length"
            :toggler="lightboxToggler"
            :sources="lightboxSources"
            :slide="currentSlideIndex"
        />

        <!-- Edit Blog Modal -->
        <b-modal
            v-model="modalOpen"
            title="Edit Blog"
            hide-footer
            centered
            size="lg"
        >
          <b-form>
            <!-- Blog Image -->
            <b-form-group class="mb-4">
              <label class="form-label fw-semibold">Blog Image</label>
              <b-form-file
                  @change="handleImageChange"
                  accept="image/*"
                  class="mb-2"
              />
              <small class="text-muted">
                Upload a new image or keep the current one
              </small>
              <div class="mt-3 text-center">
                <b-img
                    v-if="selectedImage"
                    :src="selectedImage"
                    alt="Preview"
                    class="rounded border"
                    style="max-height: 200px; max-width: 100%; object-fit: cover;"
                    fluid
                />
              </div>
            </b-form-group>

            <!-- Blog Title -->
            <b-form-group class="form-floating mb-3">
              <b-form-input
                  id="blogTitle"
                  type="text"
                  placeholder="Blog Title"
                  v-model="formData.blogTitle"
              />
              <label for="blogTitle">Blog Title</label>
            </b-form-group>

            <!-- Blog Description -->
            <b-form-group class="form-floating mb-3">
              <b-form-textarea
                  id="blogDescription"
                  placeholder="Type description"
                  style="height: 100px"
                  v-model="formData.blogDescription"
              />
              <label for="blogDescription">Blog Description</label>
            </b-form-group>

            <!-- Blog Date -->
            <b-form-group class="form-floating mb-3">
              <b-form-input
                  id="blogDate"
                  type="date"
                  v-model="formData.blogDate"
              />
              <label for="blogDate">Blog Date</label>
            </b-form-group>

            <!-- Blog Tag -->
            <b-form-group class="form-floating mb-3">
              <b-form-input
                  id="blogTag"
                  type="text"
                  placeholder="Blog Tag"
                  v-model="formData.blogTag"
              />
              <label for="blogTag">Blog Tag</label>
            </b-form-group>
          </b-form>

          <template #footer>
            <b-button variant="secondary" @click="closeModal">Cancel</b-button>
            <b-button variant="primary" @click="handleSaveChanges">
              Save Changes
            </b-button>
          </template>
        </b-modal>
      </b-container>
    </main>
  </app-layout>
</template>
