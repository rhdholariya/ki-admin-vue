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
  BImg
} from "bootstrap-vue-next";

import {
  IconArchive,
  IconCalendarDue,
  IconDotsVertical,
  IconTrash,
} from "@tabler/icons-vue";

// Import FsLightbox the same way as in your gallery page
import FsLightbox from "fslightbox-vue";
import { initialBlogData } from "@/data/app/Blog/BlogData.js";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { PhStack } from "@phosphor-icons/vue";

// state
const blogs = ref([]);
const selectedBlog = ref(null);
const modalOpen = ref(false);
const selectedImage = ref(null);
const imageFile = ref(null);

const lightboxToggler = ref(false);
const currentSlideIndex = ref(1);
const lightboxSources = ref([]);

// Modal form data
const formData = ref({
  file: null,
  blogTitle: "",
  blogDescription: "",
  blogDate: "",
  blogTag: ""
});

const initializeLightboxSources = () => {
  lightboxSources.value = blogs.value.map(blog => blog.image);
};

const handleImageClick = (slideNumber) => {
  console.log('Opening lightbox at slide:', slideNumber);
  currentSlideIndex.value = slideNumber;
  lightboxToggler.value = !lightboxToggler.value;
};

const openBlogLightbox = (blogImage, blogIndex) => {
  const slideIndex = lightboxSources.value.findIndex(src => src === blogImage);

  if (slideIndex >= 0) {
    handleImageClick(slideIndex + 1);
  } else {
    handleImageClick(blogIndex + 1);
  }
};

const formatDisplayDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Format date for input type="date"
const formatInputDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Load blog data
onMounted(() => {
  blogs.value = initialBlogData;
  initializeLightboxSources();
});

// Modal control
const toggleModal = () => {
  modalOpen.value = !modalOpen.value;
};

// Close modal
const closeModal = () => {
  modalOpen.value = false;
};

// Edit click
const handleEditClick = (blog) => {
  selectedBlog.value = { ...blog };
  selectedImage.value = blog.image;
  imageFile.value = null;

  // Populate form data with selected blog data
  formData.value = {
    file: null,
    blogTitle: blog.title,
    blogDescription: blog.description,
    blogDate: formatInputDate(blog.date),
    blogTag: blog.tag
  };

  toggleModal();
};

// Delete click
const handleDeleteClick = (id) => {
  blogs.value = blogs.value.filter((b) => b.id !== id);
  // Reinitialize sources after deletion
  initializeLightboxSources();
};

// Image upload
const handleImageChange = (event) => {
  const file = event.target.files?.[0];
  if (file) {
    imageFile.value = file;
    formData.value.file = file;

    const reader = new FileReader();
    reader.onload = (event) => {
      selectedImage.value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};

// Save changes
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

  // Reinitialize sources after update
  initializeLightboxSources();
  toggleModal();
};

const breadcrumbItems = computed(() => ({
  title: "Blog",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Blog Page", active: true }
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
      <BContainer fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <BRow>
          <BCol v-for="(blog, index) in blogs" :key="blog.id" :class="blog.colclass">
            <BCard class="overflow-hidden blog-card position-relative" no-body>
              <a @click.prevent="openBlogLightbox(blog.image, index)" class="img-hover-zoom cursor-pointer">
                <BImg
                    :src="blog.image"
                    :alt="blog.title"
                    class="card-img-top"
                    fluid
                />
              </a>

              <div class="position-absolute top-0 end-0 m-2">
                <span class="badge bg-secondary">{{ blog.tag }}</span>
              </div>

              <BCardBody>
                <div class="d-flex align-items-center mb-2 text-muted">
                  <IconCalendarDue size="18" class="me-2"/>
                  {{ formatDisplayDate(blog.date) }}
                </div>

                <RouterLink
                    to="/apps/blog-page/blog-details"
                    class="fs-5 title-text text-decoration-none"
                >
                  {{ blog.title }}
                </RouterLink>

                <p class="text-secondary txt-ellipsis-2 mt-2">
                  {{ blog.description }}
                </p>

                <hr class="dashed"/>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="rounded-circle overflow-hidden me-3 w-45 h-45 bg-primary">
                    <BImg
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

                  <!-- Fixed Dropdown using BootstrapVueNext -->
                  <BDropdown variant="white" class="icon-btn border-0" no-caret right>
                    <template #button-content>
                      <IconDotsVertical size="18"/>
                    </template>
                    <BDropdownItem class="text-success" @click="handleEditClick(blog)">
                      <IconArchive size="16" class="me-2"/>
                      Edit
                    </BDropdownItem>
                    <BDropdownItem class="text-danger" @click="handleDeleteClick(blog.id)">
                      <IconTrash size="16" class="me-2"/>
                      Delete
                    </BDropdownItem>
                  </BDropdown>
                </div>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>

        <!-- FsLightbox -->
        <FsLightbox
            v-if="lightboxSources.length > 0"
            :toggler="lightboxToggler"
            :sources="lightboxSources"
            :slide="currentSlideIndex"
        />

        <!-- Edit Modal -->
        <BModal
            v-model="modalOpen"
            title="Edit Blog"
            hide-footer
            centered
            size="lg"
        >

          <BForm class="app-form">
            <!-- Blog Image Upload -->
            <BFormGroup class="mb-4">
              <label class="form-label fw-semibold">Blog Image</label>
              <div class="d-flex flex-column">
                <BFormFile
                    @change="handleImageChange"
                    accept="image/*"
                    class="mb-2"
                />
                <small class="text-muted">
                  Upload a new image or keep the current one
                </small>
                <div class="mt-3 text-center">
                  <BImg
                      v-if="selectedImage"
                      :src="selectedImage"
                      alt="Preview"
                      class="rounded border"
                      style="max-height: 200px; max-width: 100%; object-fit: cover;"
                      fluid
                  />
                </div>
              </div>
            </BFormGroup>

            <!-- Blog Title with Floating Label -->
            <BFormGroup class="form-floating mb-3">
              <BFormInput
                  id="blogTitle"
                  type="text"
                  placeholder="Blog Title"
                  v-model="formData.blogTitle"
              />
              <label for="blogTitle">Blog Title</label>
            </BFormGroup>

            <!-- Blog Description with Floating Label -->
            <BFormGroup class="form-floating mb-3">
              <BFormTextarea
                  id="blogDescription"
                  placeholder="Type description"
                  style="height: 100px"
                  v-model="formData.blogDescription"
              />
              <label for="blogDescription">Blog Description</label>
            </BFormGroup>

            <!-- Blog Date with Floating Label -->
            <BFormGroup class="form-floating mb-3">
              <BFormInput
                  id="blogDate"
                  type="date"
                  v-model="formData.blogDate"
              />
              <label for="blogDate">Blog Date</label>
            </BFormGroup>

            <!-- Blog Tag with Floating Label -->
            <BFormGroup class="form-floating mb-3">
              <BFormInput
                  id="blogTag"
                  type="text"
                  placeholder="Blog Tag"
                  v-model="formData.blogTag"
              />
              <label for="blogTag">Blog Tag</label>
            </BFormGroup>
          </BForm>

          <template #footer>
            <BButton variant="secondary" @click="closeModal">
              Cancel
            </BButton>
            <BButton variant="primary" @click="handleSaveChanges">
              Save Changes
            </BButton>
          </template>
        </BModal>
      </BContainer>
    </main>
  </AppLayout>
</template>

