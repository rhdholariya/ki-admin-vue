<template>
  <!-- Rename Modal -->
  <b-modal v-model="showRenameModal" title="Folder Rename" hide-footer>
    <b-form @submit.prevent="confirmRename">
      <b-form-group label="Folder Name">
        <b-form-input v-model="renameName" placeholder="Enter new name" required></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-end gap-2">
        <b-button variant="secondary" @click="showRenameModal = false">Close</b-button>
        <b-button variant="primary" type="submit">Save changes</b-button>
      </div>
    </b-form>
  </b-modal>



  <!-- Delete Confirmation Modal -->
  <b-modal v-model="showDeleteModal" centered hide-footer hide-header>
    <div class="text-center">
      <img src="/images/icons/delete-icon.png" alt="" class="img-fluid mb-3">
      <h4 class="text-danger f-w-600">Are You Sure?</h4>
      <p class="text-secondary f-s-16">You won't be able to revert this!</p>
      <div class="text-center mt-3">
        <b-button variant="secondary" @click="showDeleteModal = false" class="me-2">Close</b-button>
        <b-button variant="primary" @click="confirmDelete">Yes, Delete it</b-button>
      </div>
    </div>
  </b-modal>
</template>

<script setup>
import { ref } from 'vue'
import { BButton , BForm, BModal , BFormInput , BFormGroup  } from "bootstrap-vue-next";
const showRenameModal = ref(false)
const showDeleteModal = ref(false)
const renameName = ref('')
const currentItem = ref(null)
const deleteCallback = ref(null)

const openRenameModal = (item, currentName) => {
  currentItem.value = item
  renameName.value = currentName
  showRenameModal.value = true
}

const openDeleteModal = (item, callback) => {
  currentItem.value = item
  deleteCallback.value = callback
  showDeleteModal.value = true
}

const confirmRename = () => {
  if (renameName.value.trim() && currentItem.value) {
    emit('rename-confirmed', currentItem.value, renameName.value)
    showRenameModal.value = false
    renameName.value = ''
    currentItem.value = null
  }
}

const confirmDelete = () => {
  if (deleteCallback.value && currentItem.value) {
    deleteCallback.value(currentItem.value)
    showDeleteModal.value = false
    currentItem.value = null
    deleteCallback.value = null
  }
}

const emit = defineEmits(['rename-confirmed'])

defineExpose({
  openRenameModal,
  openDeleteModal
})
</script>