<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardHeader,
  BCardBody,
  BRow,
  BCol,
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BListGroup,
  BListGroupItem,
  BBadge,
  BImg,
} from "bootstrap-vue-next";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconMailFast,
} from "@tabler/icons-vue";

// Mock data - replace with your actual data imports
const blogDetailsCategories = ref([
  { label: "Photography", count: 12, color: "primary" },
  { label: "Travel", count: 8, color: "success" },
  { label: "Technology", count: 15, color: "info" },
  { label: "Lifestyle", count: 6, color: "warning" },
  { label: "Food", count: 9, color: "danger" }
]);
const blogTags = ref([
  "Photography", "Travel", "Nature", "Camera",
  "Landscape", "Tips", "Creative", "Art"
]);

// Get badge class based on index - use proper Bootstrap variants
const getBadgeClass = (index) => {
  const variants = ['secondary', 'success', 'info', 'warning', 'danger', 'primary', 'dark', 'light'];
  return variants[index % variants.length];
};

const popularPosts = ref([
  {
    img: "/images/blog-app/01.jpg",
    text: "The Art of Landscape Photography",
    time: "2 hours ago",
    bg: "primary"
  },
  {
    img: "/images/blog-app/02.jpg",
    text: "10 Photography Tips for Beginners",
    time: "1 day ago",
    bg: "success"
  },
  {
    img: "/images/blog-app/03.jpg",
    text: "Best Cameras for 2023",
    time: "3 days ago",
    bg: "info"
  }
]);

// Reactive state
const email = ref("");

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Subscribed with email:", email.value);
  // Add your subscription logic here
  email.value = ""; // Clear the input after submission
};


</script>

<template>
  <BRow>
    <BCol md="12" >
      <!-- About Me -->
      <BCard no-body>
        <BCardHeader>
          <h5>About Me</h5>
        </BCardHeader>
        <BCardBody>
          <div class="text-secondary mb-3">
            <p class="mb-3">Hi! I am Aaliyah.</p>
            <p>
              Over the last fifteen years of my career, I earned a sense of
              creativity. I want to show the beauty of life in a chaotic
              world.
            </p>
            <p>
              In my first year as a photographer, I thought the photos I took
              needed more spark. So I enrolled in a graphic design class. I
              combined my photographs with visual arts and finally saw what I
              was looking for. The spark!
            </p>
          </div>

          <div class="d-flex gap-2">
            <BButton variant="primary" class="icon-btn b-r-5">
              <IconBrandFacebook size="18" />
            </BButton>
            <BButton variant="success" class="icon-btn b-r-5">
              <IconBrandWhatsapp size="18" />
            </BButton>
            <BButton variant="info" class="icon-btn b-r-5">
              <IconBrandTwitter size="18" />
            </BButton>
            <BButton variant="dark" class="icon-btn b-r-5">
              <IconBrandGithub size="18" />
            </BButton>
          </div>
        </BCardBody>
      </BCard>
    </BCol>

    <!-- Categories -->
    <BCol md="12" >
      <BCard class="equal-card" no-body>
        <BCardHeader>
          <h5>Categories</h5>
        </BCardHeader>
        <BCardBody>
          <BListGroup>
            <BListGroupItem
                v-for="cat in blogDetailsCategories"
                :key="cat.label"
                class="d-flex justify-content-between align-items-start"
            >
              <div class="me-auto">
                <p :class="`text-${cat.color} fw-semibold mb-0`">
                  <i class="ti ti-chevron-right me-1"></i>
                  {{ cat.label }}
                </p>
              </div>
              <span>[{{ cat.count }}]</span>
            </BListGroupItem>
          </BListGroup>
        </BCardBody>
      </BCard>
    </BCol>

    <!-- Popular Blog Posts -->
    <BCol md="12" >
      <BCard no-body>
        <BCardHeader>
          <h5>Popular Blog Posts</h5>
        </BCardHeader>
        <BCardBody>
          <div
              v-for="(post, i) in popularPosts"
              :key="i"
              class="position-relative mb-3 d-flex align-items-start"
          >
            <BImg
                :src="post.img"
                alt=""
                :class="`position-absolute w-40 h-40 bg-${post.bg} rounded top-0`"
                fluid
            />
            <div class="ms-5">
              <p class="text-dark mb-0 fw-semibold small">
                {{ post.text }}
              </p>
              <div class="text-secondary text-end small">
                {{ post.time }}
              </div>
            </div>
          </div>
          <div class="mt-3">
            <router-link to="/apps/blog-page/blog" target="_blank">
              <BButton variant="primary" class="rounded w-100">
                <i class="ti ti-plus me-1"></i> View All
              </BButton>
            </router-link>
          </div>
        </BCardBody>
      </BCard>
    </BCol>

    <!-- Tags -->
    <BCol md="12">
      <BCard no-body>
        <BCardHeader>
          <h5>Popular Blog Tags</h5>
        </BCardHeader>
        <BCardBody>
          <div class="blog-tags d-flex gap-2 f-s-16 flex-wrap">
            <BBadge
                v-for="(tag, index) in blogTags"
                :key="index"
                :variant="getBadgeClass(index)"
                class="cursor-pointer"
            >
              {{ tag }}
            </BBadge>
          </div>
        </BCardBody>
      </BCard>
    </BCol>

    <!-- Subscribe -->
    <BCol md="12">
      <BCard no-body>
        <BCardHeader>
          <h5>Subscribe</h5>
        </BCardHeader>
        <BCardBody>
          <BForm class="app-form" @submit="handleSubmit">
            <BFormGroup class="mb-3">
              <label class="fw-semibold mb-2">Email</label>
              <div class="input-group">
                <BFormInput
                    type="email"
                    placeholder="@gmail.com"
                    v-model="email"
                    required
                />
                <BButton type="submit" variant="primary">
                  <IconMailFast size="20" />
                </BButton>
              </div>
            </BFormGroup>
            <BFormGroup>
              <p class="text-success">
                Subscribe to our newsletter and stay Updated
              </p>
            </BFormGroup>
          </BForm>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>
