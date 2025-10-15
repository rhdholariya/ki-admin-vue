<script setup>
import { ref, computed } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BModal,
  BNav, BNavItem
} from "bootstrap-vue-next";

import BookCard from "@/components/Apps/Bookmark/BookCard.vue";

import {
  PhBookmark,
  PhHeartStraight,
  PhShareNetwork,
  PhStar,
  PhTrash,
  PhBookBookmark,
  PhTag,
  PhUserCircle,
  PhCircle, PhStack,
} from "@phosphor-icons/vue";

import {bookMarkTableData} from "@/data/app/Bookmark/Bookmark1.js";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";

// ----------------------------------------------------
// Reactive state
// ----------------------------------------------------
const activeTab = ref("tab1");
const modalOpen = ref(false);
const editModalOpen = ref(false);
const bookmarksData = ref([...bookMarkTableData]);
const title = ref("");
const url = ref("");
const file = ref(null);
const editBookmark = ref(null);

const toggleModal = () => (modalOpen.value = !modalOpen.value);
const toggleEditModal = () => (editModalOpen.value = !editModalOpen.value);

const handleFileChange = (e) => {
  if (e.target.files?.length) file.value = e.target.files[0];
};

const resetForm = () => {
  title.value = "";
  url.value = "";
  file.value = null;
};

const handleAddBookmark = () => {
  const newBookmark = {
    id: bookmarksData.value.length + 1,
    title: title.value,
    url: url.value,
    image: file.value ? URL.createObjectURL(file.value) : "",
  };
  bookmarksData.value.unshift(newBookmark);
  resetForm();
  toggleModal();
};

const handleEditClick = (bookmark) => {
  editBookmark.value = bookmark;
  title.value = bookmark.title;
  url.value = bookmark.url;
  editModalOpen.value = true;
};

const handleSaveChanges = () => {
  const updatedBookmark = {
    id: editBookmark.value?.id || 0,
    title: title.value,
    url: url.value,
    image: file.value
        ? URL.createObjectURL(file.value)
        : editBookmark.value?.image || "",
  };

  bookmarksData.value = bookmarksData.value.map((b) =>
      b.id === editBookmark.value.id ? updatedBookmark : b
  );
  resetForm();
  toggleEditModal();
};

const handleDelete = (id) => {
  bookmarksData.value = bookmarksData.value.map((b) =>
      b.id === id ? {...b, isDelete: !b.isDelete} : b
  );
};

const handleFavouriteToggle = (id) => {
  bookmarksData.value = bookmarksData.value.map((b) =>
      b.id === id ? {...b, isFavourite: !b.isFavourite} : b
  );
};

const handleShareToggle = (id) => {
  bookmarksData.value = bookmarksData.value.map((b) =>
      b.id === id ? {...b, isShared: !b.isShared} : b
  );
};

const handleStarToggle = (id) => {
  bookmarksData.value = bookmarksData.value.map((b) =>
      b.id === id ? {...b, isStarred: !b.isStarred} : b
  );
};

const filteredCards = computed(() => {
  switch (activeTab.value) {
    case "tab1":
      // Show all except deleted
      return bookmarksData.value.filter((b) => !b.isDelete);
    case "tab2":
      return bookmarksData.value.filter((b) => b.isFavourite);
    case "tab3":
      return bookmarksData.value.filter((b) => b.isShared);
    case "tab4":
      return bookmarksData.value.filter((b) => b.isStarred);
    case "tab5":
      return bookmarksData.value.filter((b) => b.isDelete);
    default:
      return [];
  }
});


// Computed breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Bookmark",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Bookmark", active: true },
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
  <BContainer fluid>
    <Breadcrumb :breadcrumb="breadcrumbItems" />
    <BRow>
      <!-- Sidebar -->
      <BCol lg="3">
        <BCard no-body>
          <BCardBody>
            <BNav pills vertical class="app-tabs-primary">
              <BNavItem
                  href="#"
                  :active="activeTab === 'tab1'"
                  @click.prevent="activeTab = 'tab1'"
              >
                <PhBookmark size="20" class="me-2" />
                Book Mark
              </BNavItem>

              <BNavItem
                  href="#"
                  :active="activeTab === 'tab2'"
                  @click.prevent="activeTab = 'tab2'"
              >
                <PhHeartStraight size="20" class="me-2" />
                Favourites
              </BNavItem>

              <BNavItem
                  href="#"
                  :active="activeTab === 'tab3'"
                  @click.prevent="activeTab = 'tab3'"
              >
                <PhShareNetwork size="20" class="me-2" />
                Share
              </BNavItem>

              <BNavItem
                  href="#"
                  :active="activeTab === 'tab4'"
                  @click.prevent="activeTab = 'tab4'"
              >
                <PhStar size="20" class="me-2" />
                Important
              </BNavItem>

              <BNavItem
                  href="#"
                  :active="activeTab === 'tab5'"
                  @click.prevent="activeTab = 'tab5'"
              >
                <PhTrash size="20" class="me-2" />
                Delete
              </BNavItem>
            </BNav>

            <hr/>

            <ul class="email-list list-unstyled">
              <li><h6>Labels</h6></li>
              <li>
                <PhCircle size="15" weight="fill" class="me-2 text-danger"/>
                Social
              </li>
              <li>
                <PhCircle size="15" weight="fill" class="me-2 text-primary"/>
                Company
              </li>
              <li>
                <PhCircle size="15" weight="fill" class="me-2 text-success"/>
                Important
              </li>
              <li>
                <PhCircle size="15" weight="fill" class="me-2 text-info"/>
                Private
              </li>
            </ul>

            <hr/>

            <ul class="email-list list-unstyled">
              <li>
                <PhBookmark size="20" class="me-2"/>
                All Bookmark
              </li>
              <li>
                <PhBookBookmark size="20" class="me-2"/>
                Primary
              </li>
              <li>
                <PhTag size="20" class="me-2"/>
                Promotions
              </li>
              <li>
                <PhUserCircle size="20" class="me-2"/>
                Social
              </li>
            </ul>

            <BButton
                variant="primary"
                class="w-100 mt-4 rounded"
                @click="toggleModal"
            >
              Add Bookmark
            </BButton>
          </BCardBody>
        </BCard>
      </BCol>

      <!-- Main Content -->
      <BCol lg="9">
        <BRow class="bookmark-card">
          <BCol
              v-for="bookmark in filteredCards"
              :key="bookmark.id"
              sm="6"
              xxl="4"
          >
            <BookCard
                :bookmark="bookmark"
                :onDelete="handleDelete"
                :onFavouriteToggle="handleFavouriteToggle"
                :onShareToggle="handleShareToggle"
                :onStarToggle="handleStarToggle"
                :onEdit="handleEditClick"
            />
          </BCol>
        </BRow>
      </BCol>
    </BRow>

    <!-- Add Modal -->
    <BModal v-model="modalOpen" title="New Bookmark" centered hide-footer>
      <template #default>
      <BForm class="app-form">
        <BFormGroup class="mb-3">
          <label >Title</label >
          <BFormInput v-model="title" type="text"/>
        </BFormGroup>
        <BFormGroup class="mb-3">
          <label >Url</label >
          <BFormInput v-model="url" type="text"/>
        </BFormGroup>
        <BFormGroup>
          <label >Image</label >
          <BFormInput type="file" @change="handleFileChange"/>
        </BFormGroup>
      </BForm>
        </template>
      <template #footer>
        <div class="text-end mt-3">
          <BButton variant="secondary" class="me-2" @click="toggleModal">
            Close
          </BButton>
          <BButton variant="primary" @click="handleAddBookmark">
            Add New
          </BButton>
        </div>
      </template>

    </BModal>

    <!-- Edit Modal -->
    <BModal
        v-model="editModalOpen"
        title="Edit Bookmark"
        centered
        hide-footer
    >
      <!-- Modal Body -->
      <template #default>
        <BForm class="app-form">
          <BFormGroup class="mb-3">
            <label for="bookmark-title">Title</label>
            <BFormInput id="bookmark-title" v-model="title" type="text" />
          </BFormGroup>

          <BFormGroup class="mb-3">
            <label for="bookmark-url">URL</label>
            <BFormInput id="bookmark-url" v-model="url" type="text" />
          </BFormGroup>

          <BFormGroup class="mb-3">
            <label for="bookmark-image">Image</label>
            <BFormInput
                id="bookmark-image"
                type="file"
                @change="handleFileChange"
            />
          </BFormGroup>
        </BForm>
      </template>

      <!-- Modal Footer -->
      <template #footer>
        <div class="text-end">
          <BButton variant="secondary" class="me-2" @click="toggleEditModal">
            Close
          </BButton>
          <BButton variant="primary" @click="handleSaveChanges">
            Save Changes
          </BButton>
        </div>
      </template>
    </BModal>
  </BContainer>
    </main>
  </AppLayout>
</template>
