<template>
  <BContainer fluid>

    <BRow>
      <BCol lg="3">
        <BCard>
          <BCardBody>
            <div class="vertical-tab setting-tab">
              <BNav pills vertical class="nav-tabs app-tabs-primary m-0">
                <BNavItem>
                  <BNavLink
                      :active="activeTab === 'tab1'"
                      @click="setActiveTab('tab1')"
                  >
                    <PhBookmark :size="20" class="me-2" />
                    Book Mark
                  </BNavLink>
                </BNavItem>
                <BNavItem>
                  <BNavLink
                      :active="activeTab === 'tab2'"
                      @click="setActiveTab('tab2')"
                  >
                    <PhHeartStraight :size="20" class="me-2" />
                    Favourites
                  </BNavLink>
                </BNavItem>
                <BNavItem>
                  <BNavLink
                      :active="activeTab === 'tab3'"
                      @click="setActiveTab('tab3')"
                  >
                    <PhShareNetwork :size="20" class="me-2" />
                    Share
                  </BNavLink>
                </BNavItem>
                <BNavItem>
                  <BNavLink
                      :active="activeTab === 'tab4'"
                      @click="setActiveTab('tab4')"
                  >
                    <PhStar :size="20" class="me-2" />
                    Important
                  </BNavLink>
                </BNavItem>
                <BNavItem>
                  <BNavLink
                      :active="activeTab === 'tab5'"
                      @click="setActiveTab('tab5')"
                  >
                    <PhTrash :size="20" class="me-2" />
                    Delete
                  </BNavLink>
                </BNavItem>
              </BNav>
            </div>

            <hr />

            <ul class="email-list">
              <li>
                <h6>Labels</h6>
              </li>
              <li>
                <IconCircleFilled :size="15" class="me-2 text-danger" />
                Social
              </li>
              <li>
                <IconCircleFilled :size="15" class="me-2 text-primary" />
                Company
              </li>
              <li>
                <IconCircleFilled :size="15" class="me-2 text-success" />
                Important
              </li>
              <li>
                <IconCircleFilled :size="15" class="me-2 text-info" />
                Private
              </li>
            </ul>

            <hr />

            <ul class="email-list">
              <li>
                <PhBookmark :size="20" class="me-2" />
                All Bookmark
              </li>
              <li>
                <PhBookBookmark :size="20" class="me-2" />
                Primary
              </li>
              <li>
                <PhTag :size="20" class="me-2" />
                Promotions
              </li>
              <li>
                <PhUserCircle :size="20" class="me-2" />
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

      <BCol lg="9">
        <div v-if="activeTab === 'tab1'" class="bookmark-card">
          <RenderCards :filter-fn="b => !b.isDelete && !b.isStarred && !b.isShared" />
        </div>
        <div v-else-if="activeTab === 'tab2'" class="bookmark-card">
          <RenderCards :filter-fn="b => b.isFavourite" />
        </div>
        <div v-else-if="activeTab === 'tab3'" class="bookmark-card">
          <RenderCards :filter-fn="b => b.isShared" />
        </div>
        <div v-else-if="activeTab === 'tab4'" class="bookmark-card">
          <RenderCards :filter-fn="b => b.isStarred" />
        </div>
        <div v-else-if="activeTab === 'tab5'" class="bookmark-card">
          <RenderCards :filter-fn="b => b.isDelete" />
        </div>
      </BCol>
    </BRow>

    <!-- Add Modal -->
    <BModal v-model="modalOpen" centered hide-footer>
      <template #header>
        <BModalTitle> New Bookmark </BModalTitle>
        <BButtonClose @click="toggleModal" class="btn-close"></BButtonClose>
      </template>

      <BForm class="app-form">
        <BFormGroup class="mb-3" label="Title">
          <BFormInput
              type="text"
              v-model="title"
          />
        </BFormGroup>
        <BFormGroup class="mb-3" label="Url">
          <BFormInput
              type="text"
              v-model="url"
          />
        </BFormGroup>
        <BFormGroup label="Image">
          <BFormFile @change="handleFileChange" />
        </BFormGroup>
      </BForm>

      <template #footer>
        <BButton variant="secondary" @click="toggleModal">
          Close
        </BButton>
        <BButton variant="primary" @click="handleAddBookmark">
          Add New
        </BButton>
      </template>
    </BModal>

    <!-- Edit Modal -->
    <BModal v-model="editModalOpen" centered hide-footer>
      <template #header>
        <BModalTitle>Edit Bookmark</BModalTitle>
        <BButtonClose @click="toggleEditModal" class="btn-close"></BButtonClose>
      </template>

      <BForm class="app-form">
        <BFormGroup class="mb-3" label="Title">
          <BFormInput
              type="text"
              v-model="title"
          />
        </BFormGroup>
        <BFormGroup class="mb-3" label="Url">
          <BFormInput
              type="text"
              v-model="url"
          />
        </BFormGroup>
        <BFormGroup label="Image">
          <BFormFile @change="handleFileChange" />
        </BFormGroup>
      </BForm>

      <template #footer>
        <BButton variant="secondary" @click="toggleEditModal">
          Close
        </BButton>
        <BButton variant="primary" @click="handleSaveChanges">
          Save Changes
        </BButton>
      </template>
    </BModal>
  </BContainer>
</template>

<script>
import { ref, computed } from 'vue'
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BNav,
  BNavItem,
  BButton,
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
  BFormFile
} from 'bootstrap-vue-next'


import {
  PhStack,
  PhBookmark,
  PhHeartStraight,
  PhShareNetwork,
  PhStar,
  PhTrash,
  PhBookBookmark,
  PhTag,
  PhUserCircle
} from '@phosphor-icons/vue'

import { IconCircleFilled } from '@tabler/icons-vue'

import Breadcrumbs from '@/components/breadcrumb/Breadcrumb.vue'
import BookCard from '@/components/Apps/Bookmark/BookCard.vue'
import { bookMarkTableData } from '@/data/app/Bookmark/Bookmark1.js'

export default {
  name: 'BookmarkPage',
  components: {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardBody,
    BNav,
    BNavItem,
    BButton,
    BModal,
    BForm,
    BFormGroup,
    BFormInput,
    BFormFile,
    PhStack,
    PhBookmark,
    PhHeartStraight,
    PhShareNetwork,
    PhStar,
    PhTrash,
    PhBookBookmark,
    PhTag,
    PhUserCircle,
    IconCircleFilled,
    Breadcrumbs,
    BookCard
  },
  setup() {
    const activeTab = ref('tab1')
    const modalOpen = ref(false)
    const editModalOpen = ref(false)
    const bookmarksData = ref(bookMarkTableData)
    const title = ref('')
    const url = ref('')
    const file = ref(null)
    const editBookmark = ref(null)

    const setActiveTab = (tab) => {
      activeTab.value = tab
    }

    const toggleModal = () => {
      modalOpen.value = !modalOpen.value
    }

    const toggleEditModal = () => {
      editModalOpen.value = !editModalOpen.value
    }

    const handleFileChange = (event) => {
      if (event.target.files.length) {
        file.value = event.target.files[0]
      }
    }

    const handleAddBookmark = () => {
      const newBookmark = {
        id: bookmarksData.value.length + 1,
        title: title.value,
        url: url.value,
        image: file.value ? URL.createObjectURL(file.value) : ''
      }

      bookmarksData.value = [newBookmark, ...bookmarksData.value]
      resetForm()
      toggleModal()
    }

    const handleEditClick = (bookmark) => {
      editBookmark.value = bookmark
      title.value = bookmark.title
      url.value = bookmark.url
      editModalOpen.value = true
    }

    const handleSaveChanges = () => {
      const updatedBookmark = {
        id: editBookmark.value?.id || 0,
        title: title.value,
        url: url.value,
        image: file.value ? URL.createObjectURL(file.value) : (editBookmark.value?.image || '')
      }

      bookmarksData.value = bookmarksData.value.map((bookmark) =>
          bookmark.id === editBookmark.value?.id ? updatedBookmark : bookmark
      )

      resetForm()
      toggleEditModal()
    }

    const resetForm = () => {
      title.value = ''
      url.value = ''
      file.value = null
    }

    const handleDelete = (id) => {
      bookmarksData.value = bookmarksData.value.map((bookmark) =>
          bookmark.id === id
              ? { ...bookmark, isDelete: !bookmark.isDelete }
              : bookmark
      )
    }

    const handleFavouriteToggle = (id) => {
      bookmarksData.value = bookmarksData.value.map((bookmark) =>
          bookmark.id === id
              ? { ...bookmark, isFavourite: !bookmark.isFavourite }
              : bookmark
      )
    }

    const handleShareToggle = (id) => {
      bookmarksData.value = bookmarksData.value.map((bookmark) =>
          bookmark.id === id
              ? { ...bookmark, isShared: !bookmark.isShared }
              : bookmark
      )
    }

    const handleStarToggle = (id) => {
      bookmarksData.value = bookmarksData.value.map((bookmark) =>
          bookmark.id === id
              ? { ...bookmark, isStarred: !bookmark.isStarred }
              : bookmark
      )
    }

    const RenderCards = {
      props: ['filterFn'],
      setup(props) {
        const filteredBookmarks = computed(() =>
            bookmarksData.value.filter(props.filterFn)
        )

        return {
          filteredBookmarks
        }
      },
      template: `
        <BRow>
          <BCol sm="6" xxl="4" v-for="bookmark in filteredBookmarks" :key="bookmark.id">
            <BookCard
                :bookmark="bookmark"
                :on-delete="handleDelete"
                :on-favourite-toggle="handleFavouriteToggle"
                :on-share-toggle="handleShareToggle"
                :on-star-toggle="handleStarToggle"
                :on-edit="handleEditClick"
            />
          </BCol>
        </BRow>
      `
    }

    return {
      activeTab,
      modalOpen,
      editModalOpen,
      bookmarksData,
      title,
      url,
      file,
      editBookmark,
      setActiveTab,
      toggleModal,
      toggleEditModal,
      handleFileChange,
      handleAddBookmark,
      handleEditClick,
      handleSaveChanges,
      resetForm,
      handleDelete,
      handleFavouriteToggle,
      handleShareToggle,
      handleStarToggle,
      RenderCards
    }
  }
}
</script>
