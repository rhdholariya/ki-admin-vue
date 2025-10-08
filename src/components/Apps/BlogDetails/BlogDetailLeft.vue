<script setup>
import { ref, onMounted, nextTick } from "vue";
import {
  BCard,
  BCardBody,
  BCardHeader,
  BRow,
  BCol,
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BBadge,
  BImg,
} from "bootstrap-vue-next";
import {
  IconBrandHipchat,
  IconCalendarDue,
  IconSend,
  IconShare,
  IconThumbUp,
} from "@tabler/icons-vue";
import FsLightbox from "fslightbox-vue";

// Mock data - replace with your actual data imports
const blogComments = ref([
  {
    name: "John Doe",
    email: "john@example.com",
    comment: "Great article! Very informative.",
    quote: "- Anonymous",
    time: "2 hours ago",
    tags: ["photography"]
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    comment: "I learned a lot about photography history.",
    quote: "",
    time: "1 day ago",
    tags: ["history", "learning"]
  }
]);

const relatedPosts = ref([
  {
    img: "01.jpg",
    tag: "Photography",
    date: "26 Nov, 2022",
    title: "The Art of Landscape Photography",
    desc: "Discover the secrets behind stunning landscape shots"
  },
  {
    img: "02.jpg",
    tag: "Tips",
    date: "25 Nov, 2022",
    title: "10 Photography Tips for Beginners",
    desc: "Essential tips to improve your photography skills"
  },
  {
    img: "03.jpg",
    tag: "Gear",
    date: "24 Nov, 2022",
    title: "Best Cameras for 2023",
    desc: "Top camera recommendations for every budget"
  }
]);

// Reactive state
const comments = ref(blogComments.value);
const newComment = ref({
  name: "",
  email: "",
  comment: "",
  quote: "",
  time: "",
});

// FsLightbox state
const lightboxToggler = ref(false);
const lightboxSources = ref([]);
const currentSlideIndex = ref(1);

// Initialize lightbox sources
const initializeLightboxSources = () => {
  lightboxSources.value = [
    "/images/blog-app/09.jpg",
    "/images/blog-app/05.jpg",
    "/images/blog-app/08.jpg",
    "/images/blog-app/04.jpg",
    "/images/blog-app/03.jpg",
    ...relatedPosts.value.map(post => `/images/blog-app/${post.img}`)
  ];
};

// Open lightbox for specific image
const openLightbox = (imageSrc, index = 0) => {
  const imageUrl = imageSrc.startsWith('/') ? imageSrc : `/images/blog-app/${imageSrc}`;
  const slideIndex = lightboxSources.value.findIndex(src => src === imageUrl);

  currentSlideIndex.value = slideIndex >= 0 ? slideIndex + 1 : 1;

  nextTick(() => {
    lightboxToggler.value = !lightboxToggler.value;
  });
};

// Handle form input changes
const handleChange = (field, value) => {
  newComment.value[field] = value;
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, comment } = newComment.value;

  if (!name || !email || !comment) return;

  // Auto-generate quote if comment contains quotes
  const quoteMatch = comment.match(/“.*?”|".*?"/);
  const quote = quoteMatch ? "- Anonymous" : "";

  const newEntry = {
    ...newComment.value,
    quote,
    time: "Just now",
    tags: []
  };

  comments.value = [newEntry, ...comments.value];
  newComment.value = { name: "", email: "", comment: "", quote: "", time: "" };
};

// Initialize on component mount
onMounted(() => {
  initializeLightboxSources();
});
</script>

<template>
  <div>
    <BCard no-body>
      <BCardBody>
        <!-- Video and Images Section -->
        <div class="post-div mb-3">
          <BRow>
            <BCol cols="12">
              <video controls class="w-100 h-400 rounded">
                <source src="/images/blog-app/video1.mp4" type="video/mp4" />
                <!-- Removed the non-existent movie.ogg source -->
                Your browser does not support the video tag.
              </video>
            </BCol>
            <BCol v-for="(img, index) in ['09', '05', '08', '04']" :key="index" cols="6" sm="3">
              <a href="#" @click.prevent="openLightbox(img + '.jpg')" class="cursor-pointer">
                <BImg
                    :src="`/images/blog-app/${img}.jpg`"
                    class="img-fluid rounded"
                    alt="blog"
                    fluid
                />
              </a>
            </BCol>
          </BRow>
        </div>

        <!-- Blog Content -->
        <h5 class="mb-3 text-dark fw-bold">
          Adjust your focus when life gets blurry.
        </h5>

        <div class="mb-3 text-secondary">
          <p>
            Photography is the art, application, and practice of creating
            images by recording light...
          </p>
          <p>
            The word Photography literally means 'drawing with light'...
          </p>

          <BCard class="bg-light-secondary border-0 shadow-none my-3">
            <BCardBody>
              <i class="ti ti-quote icon-bg"></i>
              <p class="mb-2 text-dark fw-bold">
                "I never stay in one country more than three months..."
              </p>
              <h6 class="text-secondary text-end">
                <cite>- Josef Koudelka.</cite>
              </h6>
            </BCardBody>
          </BCard>

          <p class="mb-4">
            In 1826, Phosphoric Niece first managed to fix an image...
          </p>

          <!-- Photographer List + Image -->
          <BRow class="mb-3">
            <BCol md="6">
              <h5 class="mb-3 text-dark fw-semibold">
                List of photographers
              </h5>
              <ul class="blog-list">
                <li v-for="([name, desc], i) in [
                  ['Charlotte Abram (born 1993)', 'photographer and filmmaker'],
                  ['Jennifer Des (born 1975)', 'photographer'],
                  ['Nathalie Gasses (born 1964)', 'writer, photographer'],
                  ['Germaine Van Paras (1893 - 1983)', 'film director, photographer, educator'],
                  ['Katrin Vermeer (born 1979)', 'photographer, filmmaker'],
                  ['Stephanie Windings-rate (1939 - 2019)', 'artistic portrait and animal photographer'],
                  ['Claudia Andujar (born 1931)', 'Swiss-born Brazilian photographer and photojournalist'],
                  ['Brigida Baltar (born 1959)', 'visual artist and photographer'],
                  ['Alice Della (born 1987)', 'model, photographer']
                ]" :key="i">
                  <span class="text-dark fw-semibold">{{ name }}</span> - {{ desc }}
                </li>
              </ul>
            </BCol>
            <BCol md="6">
              <a href="#" @click.prevent="openLightbox('03.jpg')" class="cursor-pointer">
                <BImg
                    src="/images/blog-app/03.jpg"
                    class="w-100 rounded"
                    alt="photographer"
                    fluid
                />
              </a>
            </BCol>
          </BRow>

          <p>
            The commercial introduction of digital cameras in the 1990s...
          </p>
        </div>

        <!-- Author Info + Actions -->
        <div class="app-divider-v mb-2"></div>
        <div class="d-flex align-items-center flex-wrap">
          <div class="h-50 w-50 d-flex-center b-r-10 overflow-hidden">
            <BImg
                src="/images/avatar/09.png"
                alt="avatar"
                class="bg-danger img-fluid w-50 h-50"
                rounded
            />
          </div>
          <div class="flex-grow-1 ps-2 me-2">
            <h6 class="mb-0 fw-medium text-dark">Bette Hagenes</h6>
            <p class="text-muted font-size-12 mb-0">26 Nov,2022</p>
          </div>
          <div>
            <BButton
                variant="link"
                class="btn-white btn-sm icon-btn b-r-5"
            >
              <IconThumbUp size="20" />
            </BButton>
            <BButton
                variant="link"
                class="btn-white btn-sm icon-btn b-r-5"
            >
              <IconBrandHipchat size="20" />
            </BButton>
            <BButton
                variant="link"
                class="btn-white btn-sm icon-btn b-r-5"
            >
              <IconShare size="20" />
            </BButton>
          </div>
        </div>
      </BCardBody>
    </BCard>

    <!-- Comments Section -->
    <BCard no-body>
      <BCardHeader>
        <h5>Comments</h5>
      </BCardHeader>
      <BCardBody>
        <div v-for="(comment, idx) in comments" :key="idx" class="blogcomment-box mb-3">
          <div class="d-flex justify-content-between">
            <div class="h-40 w-40 d-flex-center b-r-10 overflow-hidden comment-img">
              <BImg
                  src="/images/avatar/4.png"
                  alt="avatar"
                  class="bg-warning img-fluid"
                  rounded
              />
            </div>
            <div class="commentdiv">
              <h6 class="mb-0 text-dark fw-semibold fs-6">
                {{ comment.name }}
                <span class="text-muted fs-12">{{ comment.time }}</span>
              </h6>
              <p class="text-muted mb-0">
                {{ comment.comment }}
                <span v-if="comment.quote" class="fs-6 d-inline-block text-secondary ms-2">
                  <cite>{{ comment.quote }}</cite>
                </span>
              </p>
              <BBadge v-if="comment.email" variant="secondary">{{ comment.email }}</BBadge>
              <BBadge
                  v-for="(tag, i) in comment.tags"
                  :key="i"
                  variant="dark"
                  class="ms-1"
              >
                {{ tag }}
              </BBadge>
            </div>
          </div>
        </div>

        <!-- Leave A Comment -->
        <h5 class="mb-3">Leave A Comment</h5>
        <BForm class="app-form" @submit="handleSubmit">
          <BRow>
            <BCol md="12">
              <BFormGroup class="mb-3">
                <BFormTextarea
                    rows="3"
                    :value="newComment.comment"
                    @input="(val) => handleChange('comment', val)"
                    placeholder="Enter Your Comment"
                />
              </BFormGroup>
            </BCol>
            <BCol md="6">
              <BFormGroup class="mb-3">
                <BFormInput
                    type="text"
                    :value="newComment.name"
                    @input="(val) => handleChange('name', val)"
                    placeholder="Enter Your Name"
                />
              </BFormGroup>
            </BCol>
            <BCol md="6">
              <BFormGroup class="mb-3">
                <BFormInput
                    type="email"
                    :value="newComment.email"
                    @input="(val) => handleChange('email', val)"
                    placeholder="Enter Your Email"
                />
              </BFormGroup>
            </BCol>
            <BCol>
              <div class="text-end">
                <BButton variant="primary" type="submit">
                  <IconSend size="18" /> Comment
                </BButton>
              </div>
            </BCol>
          </BRow>
        </BForm>
      </BCardBody>
    </BCard>

    <!-- Related Posts -->
    <h5 class="mb-3 mt-4">Related Posts</h5>
    <BRow>
      <BCol v-for="(post, idx) in relatedPosts" :key="idx" md="6" xxl="4">
        <BCard class="blog-card overflow-hidden" no-body>
          <a href="#" @click.prevent="openLightbox(post.img)" class="cursor-pointer img-hover-zoom">
            <BImg
                :src="`/images/blog-app/${post.img}`"
                alt="blog"
                fluid
                top
            />
          </a>
          <div class="tag-container">
            <BBadge variant="secondary">{{ post.tag }}</BBadge>
          </div>
          <BCardBody>
            <p class="d-flex align-items-center gap-2 text-body-secondary">
              <IconCalendarDue size="20" />
              {{ post.date }}
            </p>
            <router-link to="/apps/blog-page/blog-details" class="bloglink">
              <h5 class="title-text mb-2">{{ post.title }}</h5>
            </router-link>
            <p class="card-text text-secondary">{{ post.desc }}</p>
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
  </div>
</template>

