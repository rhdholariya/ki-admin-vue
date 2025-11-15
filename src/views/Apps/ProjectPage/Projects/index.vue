<script setup>
import { ref, computed, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BCardFooter,
  BNav,
  BNavItem,
  BButton,
  BBadge,
  BProgress,
  BImg,
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormTextarea,
} from "bootstrap-vue-next";

import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";

import {PhStack} from "@phosphor-icons/vue";
import {IconBrandWechat, IconPlus, IconTrash} from "@tabler/icons-vue";

import {projectsAppData} from "@/data/app/projectapp/ProjectAppData.js";

const projects = ref([...projectsAppData]);
const activeTab = ref("1");
const modalOpen = ref(false);

const fileInputKey = ref(0);

const formData = ref({
  projectName: "",
  image: null,
  startDate: "",
  endDate: "",
  pricing: "",
  description: "",
  category: "",
});

const imagePreview = ref(null);

const tabs = ref([
  {k: "1", label: "All Project"},
  {k: "2", label: "Designing Project"},
  {k: "3", label: "Development Project"},
]);

const filteredProjects = computed(() => {
  const filterMap = {
    "1": () => projects.value,
    "2": () => projects.value.filter(p => p.category === "designing"),
    "3": () => projects.value.filter(p => p.category === "development"),
  };
  return filterMap[activeTab.value]?.() || projects.value;
});

const breadcrumbItems = computed(() => ({
  title: "Projects",
  items: [
    {label: "Apps", icon: PhStack},
    {label: "Project Page"},
    {label: "Projects", active: true}
  ],
}));

const toggleTab = (tab) => {
  activeTab.value = tab;
};

const toggleModal = () => {
  modalOpen.value = !modalOpen.value;
  if (!modalOpen.value) {
    resetForm();
  }
};

const resetForm = () => {
  Object.assign(formData.value, {
    projectName: "",
    image: null,
    startDate: "",
    endDate: "",
    pricing: "",
    description: "",
    category: "",
  });

  if (imagePreview.value) {
    URL.revokeObjectURL(imagePreview.value);
    imagePreview.value = null;
  }

  fileInputKey.value += 1;
};

const handleFileChange = (event) => {
  const file = event.target.files?.[0];
  if (!file) {
    imagePreview.value = null;
    formData.value.image = null;
    return;
  }

  if (imagePreview.value) {
    URL.revokeObjectURL(imagePreview.value);
  }

  const url = URL.createObjectURL(file);
  imagePreview.value = url;
  formData.value.image = file;
};

const handleDelete = (id) => {
  projects.value = projects.value.filter(p => p.id !== id);
};

const handleSubmit = () => {
  if (!formData.value.category) return;

  const newProject = {
    id: Date.now(),
    title: formData.value.projectName || "Untitled Project",
    subtitle: "New Project",
    logo: imagePreview.value || "/images/icons/language/logo1.png",
    startDate: formData.value.startDate,
    endDate: formData.value.endDate,
    price: formData.value.pricing,
    description: formData.value.description,
    status: "Pending",
    progress: 0,
    progressColor: "info",
    members: 0,
    avatars: [],
    moreMembers: 0,
    category: formData.value.category,
  };

  projects.value.unshift(newProject);
  toggleModal();
};

onUnmounted(() => {
  if (imagePreview.value) {
    URL.revokeObjectURL(imagePreview.value);
  }
});
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <!-- Tabs -->
        <div class="tab-wrapper mb-3">
          <b-nav as="ul" class="tabs align-items-center">
            <b-nav-item
                v-for="tab in tabs"
                :key="tab.k"
                :class="['tab-link', { active: activeTab === tab.k }]"
                @click="toggleTab(tab.k)"
            >
              {{ tab.label }}
            </b-nav-item>

            <div class="ms-auto text-end">
              <b-button
                  variant="primary"
                  class="w-45 h-45 icon-btn b-r-10 m-2"
                  @click="toggleModal"
              >
                <IconPlus :size="18"/>
              </b-button>
            </div>
          </b-nav>
        </div>

        <!-- Project Cards -->
        <b-row>
          <b-col v-for="project in filteredProjects" :key="project.id" md="6" xl="4">
            <b-card class="hover-effect equal-card" no-body>
              <b-card-header>
                <div class="d-flex align-items-center">
                  <div class="h-40 w-40 d-flex-center b-r-50 overflow-hidden">
                    <b-img :src="project.logo" :alt="project.title" :width="40" :height="40"/>
                  </div>
                  <RouterLink to="/project_details" class="flex-grow-1 ps-2 text-decoration-none">
                    <h6 class="m-0 text-dark f-w-600">{{ project.title }}</h6>
                    <div class="text-muted f-s-14 f-w-500">{{ project.subtitle }}</div>
                  </RouterLink>
                  <b-button class="icon-btn delete-button" variant="light-danger" @click="handleDelete(project.id)">
                    <IconTrash :size="16" class="text-danger"/>
                  </b-button>
                </div>
              </b-card-header>

              <b-card-body>
                <div class="d-flex justify-content-between">
                  <div>
                    <h6 class="text-dark f-s-14">
                      Start: <span class="text-success">{{ project.startDate }}</span>
                    </h6>
                    <h6 class="text-dark f-s-14">
                      End: <span class="text-danger">{{ project.endDate }}</span>
                    </h6>
                  </div>
                  <div class="text-end">
                    <p class="text-secondary mb-0">Pricing</p>
                    <h6>{{ project.price }}</h6>
                  </div>
                </div>
                <p class="text-muted txt-ellipsis-2">{{ project.description }}</p>
                <div class="text-end mb-2">
                  <b-badge :variant="`light-${project.progressColor}`">{{ project.status }}</b-badge>
                </div>
                <b-progress :value="project.progress" :variant="project.progressColor">{{
                    project.progress
                  }}%
                </b-progress>
              </b-card-body>

              <b-card-footer>
                <b-row class="align-items-center">
                  <b-col cols="6">
                    <span class="text-dark f-w-600">
                      <IconBrandWechat class="me-1"/> {{ project.members }} Members
                    </span>
                  </b-col>
                  <b-col cols="6">
                    <ul class="avatar-group float-end mb-0">
                      <li
                          v-for="(avatar, i) in project.avatars"
                          :key="i"
                          :class="['h-30 w-30 d-flex-center b-r-50', i === 0 ? 'text-bg-danger' : 'text-bg-success', 'b-2-light']"
                          :title="`Member ${i + 1}`"
                      >
                        <b-img :src="avatar" :alt="`Member ${i + 1}`" :width="30" :height="30"
                               class="img-fluid b-r-50"/>
                      </li>
                      <li v-if="project.moreMembers > 0" class="text-bg-primary h-25 w-25 d-flex-center b-r-50"
                          :title="`${project.moreMembers} More`">
                        {{ project.moreMembers }}+
                      </li>
                    </ul>
                  </b-col>
                </b-row>
              </b-card-footer>
            </b-card>
          </b-col>
        </b-row>

        <b-modal v-model="modalOpen" title="Add Project" @hidden="resetForm">
          <b-form @submit.prevent="handleSubmit" class="app-form">
            <b-row class="g-3">
              <b-col cols="12">
                <b-form-group label="Project Name">
                  <b-form-input v-model="formData.projectName" type="text" placeholder="Designing"/>
                </b-form-group>
              </b-col>

              <b-col cols="12">
                <b-form-group label="Image">
                  <b-form-input
                      :key="fileInputKey"
                      type="file"
                      class="file_upload"
                      accept="image/*"
                      @change="handleFileChange"
                  />
                  <b-img v-if="imagePreview" :src="imagePreview" alt="Preview" class="mt-2 rounded" height="60"/>
                </b-form-group>
              </b-col>

              <b-col lg="6">
                <b-form-group label="Start Date">
                  <b-form-input v-model="formData.startDate" type="date"/>
                </b-form-group>
              </b-col>

              <b-col lg="6">
                <b-form-group label="End Date">
                  <b-form-input v-model="formData.endDate" type="date"/>
                </b-form-group>
              </b-col>

              <b-col cols="12">
                <b-form-group label="Pricing">
                  <b-form-input v-model="formData.pricing" type="text" placeholder="$10k"/>
                </b-form-group>
              </b-col>

              <b-col cols="12">
                <b-form-group label="Description">
                  <b-form-textarea v-model="formData.description" rows="3"/>
                </b-form-group>
              </b-col>

              <b-col cols="12">
                <b-form-group label="Category">
                  <b-form-select v-model="formData.category" required>
                    <option value="">Select Category</option>
                    <option value="designing">Designing</option>
                    <option value="development">Development</option>
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
          </b-form>

          <template #modal-footer>
            <b-button variant="secondary" @click="toggleModal">Cancel</b-button>
            <b-button variant="primary" @click="handleSubmit">Save Project</b-button>
          </template>
        </b-modal>
      </b-container>
    </main>
  </AppLayout>
</template>
