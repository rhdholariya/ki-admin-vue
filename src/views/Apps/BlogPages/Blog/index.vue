<script setup>
import {ref, onMounted, computed} from "vue";
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
} from "bootstrap-vue-next";

import {
  IconArchive,
  IconCalendarDue,
  IconDotsVertical,
  IconTrash,
} from "@tabler/icons-vue";

// Import FsLightbox the same way as in your gallery page
import FsLightbox from "fslightbox-vue";
import {initialBlogData} from "@/data/app/Blog/BlogData.js";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";

// state
const blogs = ref([]);
const selectedBlog = ref(null);
const modalOpen = ref(false);
const selectedImage = ref(null);
const imageFile = ref(null);

// FsLightbox state - SIMPLIFIED like your gallery page
const lightboxToggler = ref(false);
const currentSlideIndex = ref(1);

// Pre-defined sources array like in your gallery page
const lightboxSources = ref([]);

// Initialize lightbox sources from blog data
const initializeLightboxSources = () => {
  lightboxSources.value = blogs.value.map(blog => blog.image);
};

// Handle image click - SIMPLIFIED like your gallery page
const handleImageClick = (slideNumber) => {
  console.log('Opening lightbox at slide:', slideNumber);
  currentSlideIndex.value = slideNumber;
  lightboxToggler.value = !lightboxToggler.value;
};

// Open lightbox for specific blog image
const openBlogLightbox = (blogImage, blogIndex) => {
  // Find the index of the clicked image in our sources array
  const slideIndex = lightboxSources.value.findIndex(src => src === blogImage);

  if (slideIndex >= 0) {
    handleImageClick(slideIndex + 1); // +1 because FsLightbox uses 1-based indexing
  } else {
    // Fallback: use the blog index
    handleImageClick(blogIndex + 1);
  }
};

// Format date for display
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

// Edit click
const handleEditClick = (blog) => {
  selectedBlog.value = {...blog};
  selectedImage.value = blog.image;
  imageFile.value = null;
  toggleModal();
};

// Delete click
const handleDeleteClick = (id) => {
  blogs.value = blogs.value.filter((b) => b.id !== id);
  // Reinitialize sources after deletion
  initializeLightboxSources();
};

// Image upload
const handleImageChange = (e) => {
  const file = e.target.files?.[0];
  if (file) {
    imageFile.value = file;
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
  title: "Blog Details",
  items: [
    { label: "Apps", icon: PhStack },
    { label: " Blog Page"},
    { label: " Blog Details" , active: true }
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
          <!-- Use the same pattern as your gallery page -->
          <a @click.prevent="openBlogLightbox(blog.image, index)" class="img-hover-zoom cursor-pointer">
            <img
                :src="blog.image"
                :alt="blog.title"
                class="card-img-top"
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
                class="fs-5 title-text"
            >
              {{ blog.title }}
            </RouterLink>

            <p class="text-secondary txt-ellipsis-2 mt-2">
              {{ blog.description }}
            </p>

            <hr class="dashed"/>

            <div class="d-flex justify-content-between align-items-center">
              <div
                  class="rounded-circle overflow-hidden me-3 w-45 h-45 bg-primary"
              >
                <img
                    :src="blog.author.avatar"
                    alt="avatar"
                    class="img-fluid"
                />
              </div>
              <div class="flex-grow-1">
                <h6 class="mb-0">{{ blog.author.name }}</h6>
                <small class="text-muted">{{ blog.author.time }}</small>
              </div>

              <div class="dropdown">
                <BButton
                    variant="white"
                    class="icon-btn border-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                  <IconDotsVertical size="18"/>
                </BButton>
                <ul class="dropdown-menu">
                  <li
                      class="dropdown-item text-success"
                      @click="handleEditClick(blog)"
                  >
                    <IconArchive size="16" class="me-2"/>
                    Edit
                  </li>
                  <li
                      class="dropdown-item text-danger"
                      @click="handleDeleteClick(blog.id)"
                  >
                    <IconTrash size="16" class="me-2"/>
                    Delete
                  </li>
                </ul>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <!-- FsLightbox - Use the EXACT same pattern as your gallery page -->
    <FsLightbox
        v-if="lightboxSources.length > 0"
        :toggler="lightboxToggler"
        :sources="lightboxSources"
        :slide="currentSlideIndex"
    />

    <!-- Edit Modal -->
    <BModal v-model="modalOpen" centered size="lg" title="Edit Blog">
      <template v-if="selectedBlog">
        <BForm class="app-form">
          <BFormGroup class="mb-4">
            <label>Blog Image</label>
            <div class="d-flex flex-column">
              <BFormControl type="file" accept="image/*" @change="handleImageChange"/>
              <small class="text-muted mt-1">
                Upload a new image or keep the current one
              </small>
              <img
                  v-if="selectedImage"
                  :src="selectedImage"
                  alt="Preview"
                  class="mt-3 rounded"
                  style="max-height: 200px; object-fit: cover;"
                  fluid
              />
            </div>
          </BFormGroup>

          <BFormGroup class="form-floating mb-3">
            <BFormControl
                id="blogTitle"
                type="text"
                placeholder="Blog Title"
                v-model="selectedBlog.title"
            />
            <label for="blogTitle">Blog Title</label>
          </BFormGroup>

          <BFormGroup class="form-floating mb-3">
            <BFormControl
                as="textarea"
                id="blogDescription"
                placeholder="Type description"
                class="h-120"
                v-model="selectedBlog.description"
            />
            <label for="blogDescription">Blog Description</label>
          </BFormGroup>

          <BFormGroup class="form-floating mb-3">
            <BFormControl
                type="date"
                id="blogDate"
                :value="formatInputDate(selectedBlog.date)"
                @input="selectedBlog.date = $event.target.value"
            />
            <label for="blogDate">Blog Date</label>
          </BFormGroup>

          <BFormGroup class="form-floating mb-3">
            <BFormControl
                id="blogTag"
                type="text"
                placeholder="Blog Tag"
                v-model="selectedBlog.tag"
            />
            <label for="blogTag">Blog Tag</label>
          </BFormGroup>
        </BForm>
      </template>

      <template #footer>
        <BButton variant="secondary" @click="toggleModal">Cancel</BButton>
        <BButton variant="primary" @click="handleSaveChanges">Save Changes</BButton>
      </template>
    </BModal>
  </BContainer>
    </main>
  </AppLayout>
</template>

