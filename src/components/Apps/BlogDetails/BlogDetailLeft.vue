<script setup>
import { ref, onMounted, nextTick, computed } from "vue";
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

const blogComments = ref([
    { name: "John Doe", email: "john@example.com", comment: "Great article!", quote: "- Anonymous", time: "2 hours ago", tags: ["photography"] },
    { name: "Jane Smith", email: "jane@example.com", comment: "I learned a lot.", quote: "", time: "1 day ago", tags: ["history", "learning"] }
]);

const relatedPosts = ref([
    { img: "01.jpg", tag: "Photography", date: "26 Nov, 2022", title: "The Art of Landscape Photography", desc: "Discover the secrets behind stunning landscape shots" },
    { img: "02.jpg", tag: "Tips", date: "25 Nov, 2022", title: "10 Photography Tips for Beginners", desc: "Essential tips to improve your photography skills" },
    { img: "03.jpg", tag: "Gear", date: "24 Nov, 2022", title: "Best Cameras for 2023", desc: "Top camera recommendations for every budget" }
]);

const comments = ref([...blogComments.value]);
const newComment = ref({ name: "", email: "", comment: "", quote: "", time: "" });
const lightboxToggler = ref(false);
const currentSlideIndex = ref(1);


const baseImages = ref(['09', '05', '08', '04']);
const photographers = ref([
    ['Charlotte Abram (born 1993)', 'photographer and filmmaker'],
    ['Jennifer Des (born 1975)', 'photographer'],
    ['Nathalie Gasses (born 1964)', 'writer, photographer'],
    ['Germaine Van Paras (1893 - 1983)', 'film director, photographer, educator'],
    ['Katrin Vermeer (born 1979)', 'photographer, filmmaker'],
    ['Stephanie Windings-rate (1939 - 2019)', 'artistic portrait and animal photographer'],
    ['Claudia Andujar (born 1931)', 'Swiss-born Brazilian photographer and photojournalist'],
    ['Brigida Baltar (born 1959)', 'visual artist and photographer'],
    ['Alice Della (born 1987)', 'model, photographer']
]);

const lightboxSources = computed(() => [
    ...baseImages.value.map(img => `/images/blog-app/${img}.jpg`),
    "/images/blog-app/03.jpg",
    ...relatedPosts.value.map(post => `/images/blog-app/${post.img}`)
]);

// Methods without DOM manipulation
const openLightbox = (imageSrc) => {
    const imageUrl = imageSrc.startsWith('/') ? imageSrc : `/images/blog-app/${imageSrc}`;
    const slideIndex = lightboxSources.value.findIndex(src => src === imageUrl);
    currentSlideIndex.value = slideIndex >= 0 ? slideIndex + 1 : 1;

    // Use nextTick to ensure Vue has updated the DOM before toggling
    nextTick(() => {
        lightboxToggler.value = !lightboxToggler.value;
    });
};

const handleChange = (field, value) => {
    newComment.value[field] = value;
};

const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, comment } = newComment.value;
    if (!name || !email || !comment) return;

    const quoteMatch = comment.match(/“.*?”|".*?"/);
    const quote = quoteMatch ? "- Anonymous" : "";

    // Update reactive data
    comments.value = [{
        ...newComment.value,
        quote,
        time: "Just now",
        tags: []
    }, ...comments.value];

    // Reset form using reactive data
    newComment.value = { name: "", email: "", comment: "", quote: "", time: "" };
};

// Initialize on mounted
onMounted(() => {
    // No DOM manipulation needed, reactive data is already set up
});
</script>

<template>
    <div>
        <b-card no-body>
            <b-card-body>
                <div class="post-div mb-3">
                    <b-row>
                        <b-col cols="12">
                            <video controls class="w-100 h-400 rounded">
                                <source src="/images/blog-app/video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </b-col>
                        <b-col v-for="(img, index) in baseImages" :key="index" cols="6" sm="3">
                            <a href="#" @click.prevent="openLightbox(img + '.jpg')" class="cursor-pointer">
                                <b-img :src="`/images/blog-app/${img}.jpg`" class="img-fluid rounded" alt="blog" fluid />
                            </a>
                        </b-col>
                    </b-row>
                </div>

                <h5 class="mb-3 text-dark fw-bold">Adjust your focus when life gets blurry.</h5>
                <div class="mb-3 text-secondary">
                    <p>Photography is the art, application, and practice of creating images by recording light...</p>
                    <p>The word Photography literally means 'drawing with light'...</p>

                    <b-card class="bg-light-secondary border-0 shadow-none my-3">
                        <b-card-body>
                            <i class="ti ti-quote icon-bg"></i>
                            <p class="mb-2 text-dark fw-bold">"I never stay in one country more than three months..."</p>
                            <h6 class="text-secondary text-end"><cite>- Josef Koudelka.</cite></h6>
                        </b-card-body>
                    </b-card>

                    <p class="mb-4">In 1826, Phosphoric Niece first managed to fix an image...</p>

                    <b-row class="mb-3">
                        <b-col md="6">
                            <h5 class="mb-3 text-dark fw-semibold">List of photographers</h5>
                            <ul class="blog-list">
                                <li v-for="([name, desc], i) in photographers" :key="i">
                                    <span class="text-dark fw-semibold">{{ name }}</span> - {{ desc }}
                                </li>
                            </ul>
                        </b-col>
                        <b-col md="6">
                            <a href="#" @click.prevent="openLightbox('03.jpg')" class="cursor-pointer">
                                <b-img src="/images/blog-app/03.jpg" class="w-100 rounded" alt="photographer" fluid />
                            </a>
                        </b-col>
                    </b-row>

                    <p>The commercial introduction of digital cameras in the 1990s...</p>
                </div>

                <div class="app-divider-v mb-2"></div>
                <div class="d-flex align-items-center flex-wrap">
                    <div class="h-50 w-50 d-flex-center b-r-10 overflow-hidden">
                        <b-img src="/images/avatar/09.png" alt="avatar" class="bg-danger img-fluid w-50 h-50" rounded />
                    </div>
                    <div class="flex-grow-1 ps-2 me-2">
                        <h6 class="mb-0 fw-medium text-dark">Bette Hagenes</h6>
                        <p class="text-muted font-size-12 mb-0">26 Nov,2022</p>
                    </div>
                    <div>
                        <b-button variant="link" class="btn-white btn-sm icon-btn b-r-5"><icon-thumb-up size="20" /></b-button>
                        <b-button variant="link" class="btn-white btn-sm icon-btn b-r-5"><icon-brand-hipchat size="20" /></b-button>
                        <b-button variant="link" class="btn-white btn-sm icon-btn b-r-5"><icon-share size="20" /></b-button>
                    </div>
                </div>
            </b-card-body>
        </b-card>

        <b-card no-body>
            <b-card-header><h5>Comments</h5></b-card-header>
            <b-card-body>
                <div v-for="(comment, idx) in comments" :key="idx" class="blogcomment-box mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="h-40 w-40 d-flex-center b-r-10 overflow-hidden comment-img">
                            <b-img src="/images/avatar/4.png" alt="avatar" class="bg-warning img-fluid" rounded />
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
                            <b-badge v-if="comment.email" variant="secondary">{{ comment.email }}</b-badge>
                            <b-badge v-for="(tag, i) in comment.tags" :key="i" variant="dark" class="ms-1">{{ tag }}</b-badge>
                        </div>
                    </div>
                </div>

                <h5 class="mb-3">Leave A Comment</h5>
                <b-form class="app-form" @submit="handleSubmit">
                    <b-row>
                        <b-col md="12">
                            <b-form-group class="mb-3">
                                <b-form-textarea
                                    rows="3"
                                    :value="newComment.comment"
                                    @input="val => handleChange('comment', val)"
                                    placeholder="Enter Your Comment"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <b-form-group class="mb-3">
                                <b-form-input
                                    type="text"
                                    :value="newComment.name"
                                    @input="val => handleChange('name', val)"
                                    placeholder="Enter Your Name"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <b-form-group class="mb-3">
                                <b-form-input
                                    type="email"
                                    :value="newComment.email"
                                    @input="val => handleChange('email', val)"
                                    placeholder="Enter Your Email"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <div class="text-end">
                                <b-button variant="primary" type="submit"><icon-send size="18" /> Comment</b-button>
                            </div>
                        </b-col>
                    </b-row>
                </b-form>
            </b-card-body>
        </b-card>

        <h5 class="mb-3 mt-4">Related Posts</h5>
        <b-row>
            <b-col v-for="(post, idx) in relatedPosts" :key="idx" md="6" xxl="4">
                <b-card class="blog-card overflow-hidden" no-body>
                    <a href="#" @click.prevent="openLightbox(post.img)" class="cursor-pointer img-hover-zoom">
                        <b-img :src="`/images/blog-app/${post.img}`" alt="blog" fluid top />
                    </a>
                    <div class="tag-container"><b-badge variant="secondary">{{ post.tag }}</b-badge></div>
                    <b-card-body>
                        <p class="d-flex align-items-center gap-2 text-body-secondary">
                            <icon-calendar-due size="20" />
                            {{ post.date }}
                        </p>
                        <router-link to="/apps/blog-page/blog-details" class="bloglink">
                            <h5 class="title-text mb-2">{{ post.title }}</h5>
                        </router-link>
                        <p class="card-text text-secondary">{{ post.desc }}</p>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <fs-lightbox
            v-if="lightboxSources.length > 0"
            :toggler="lightboxToggler"
            :sources="lightboxSources"
            :slide="currentSlideIndex"
        />
    </div>
</template>