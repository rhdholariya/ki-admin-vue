<script setup>
import AppLayout from "@/views/AppLayout.vue";

import {
    BRow, BCol, BCard, BCardBody, BContainer, BButton, BModal,
    BForm, BFormGroup, BFormInput, BFormSelect,
} from "bootstrap-vue-next"
import {
    PhCircle,
    PhTicket,
    PhClockCountdown,
    PhFileCloud,
    PhFileX, PhStack
} from "@phosphor-icons/vue"
import CustomDataTable from "@/components/Table/DataTable/CustomDataTable.vue";


import {
    initialTicketData,
    getPriorityClass,
    getStatusClass,
    getCurrentDateFormatted,
    getFutureDateFormatted,
    formatDateForInput,
    formatDateForDisplay
} from "@/data/app/TicketPage/Ticket/TicketData.js";

const ticketCards = [
    {
        title: "All Tickets",
        count: 185,
        bgColor: "primary",
        icon: PhTicket,
    },
    {
        title: "Pending Tickets",
        count: 185,
        bgColor: "info",
        icon: PhClockCountdown,
    },
    {
        title: "Completed Tickets",
        count: 185,
        bgColor: "success",
        icon: PhFileCloud,
    },
    {
        title: "Cancelled Tickets",
        count: 185,
        bgColor: "warning",
        icon: PhFileX,
    },
]

const avatars = [
    {img: "/images/avatar/4.png", color: "danger"},
    {img: "/images/avatar/1.png", color: "success"},
    {img: "/images/avatar/2.png", color: "warning"},
    {img: "/images/avatar/3.png", color: "info"},
]

import {computed, ref} from "vue";

const showModal = ref(false);
const showEditModal = ref(false);
const showDeleteModal = ref(false);
const currentEditingTicket = ref(null);
const currentDeletingTicket = ref(null);


const title = ref("");
const client = ref("");
const priority = ref("");
const status = ref("");
const date = ref("");
const dueDate = ref("");


const editTitle = ref("");
const editClient = ref("");
const editPriority = ref("");
const editStatus = ref("");
const editDate = ref("");
const editDueDate = ref("");


const ticketData = ref(initialTicketData);

const saveTicket = () => {
    const newId = `AR ${Math.floor(1000 + Math.random() * 9000)}`;

    const newTicket = {
        id: newId,
        agent: {
            name: client.value || 'Unassigned',
            image: '/images/avtar/1.png',
            bgClass: 'text-bg-dark'
        },
        priority: {
            text: priority.value || 'Medium',
            class: getPriorityClass(priority.value || 'Medium')
        },
        title: title.value || 'No Title',
        status: {
            text: status.value || 'open',
            class: getStatusClass(status.value || 'open')
        },
        date: formatDateForDisplay(date.value) || getCurrentDateFormatted(),
        dueDate: formatDateForDisplay(dueDate.value) || getFutureDateFormatted()
    };

    ticketData.value = [newTicket, ...ticketData.value];

    showModal.value = false;
    resetForm();
};

const saveEditTicket = () => {
    if (currentEditingTicket.value) {

        const ticketIndex = ticketData.value.findIndex(t => t.id === currentEditingTicket.value.id);
        if (ticketIndex !== -1) {

            ticketData.value[ticketIndex] = {
                ...ticketData.value[ticketIndex],
                title: editTitle.value,
                priority: {
                    text: editPriority.value,
                    class: getPriorityClass(editPriority.value)
                },
                status: {
                    text: editStatus.value,
                    class: getStatusClass(editStatus.value)
                },
                date: formatDateForDisplay(editDate.value),
                dueDate: formatDateForDisplay(editDueDate.value)
            };
        }

        showEditModal.value = false;
        resetEditForm();
    }
};

const confirmDelete = () => {
    if (currentDeletingTicket.value) {
        const index = ticketData.value.findIndex(ticket => ticket.id === currentDeletingTicket.value.id);
        if (index !== -1) {
            ticketData.value.splice(index, 1);
        }
        showDeleteModal.value = false;
        currentDeletingTicket.value = null;
    }
};

const resetForm = () => {
    title.value = "";
    client.value = "";
    priority.value = "";
    status.value = "";
    date.value = "";
    dueDate.value = "";
};

const resetEditForm = () => {
    editTitle.value = "";
    editClient.value = "";
    editPriority.value = "";
    editStatus.value = "";
    editDate.value = "";
    editDueDate.value = "";
    currentEditingTicket.value = null;
};

import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import {Autoplay} from "swiper/modules";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";

const categories = [
    {title: "Laptop issues", count: 64},
    {title: "Card issues", count: 52},
    {title: "Admin issues", count: 32},
    {title: "Payment issues", count: 20},
];

// Define columns for the datatable
const columns = ref([
    {
        key: 'checkbox',
        header: '',
        className: '',
        render: (value, item) => `
      <div class="checkbox-wrapper">
        <label class="check-box m-0">
          <input type="checkbox" class="ticket-checkbox" data-id="${item.id}">
          <span class="checkmark outline-secondary"></span>
        </label>
      </div>
    `
    },
    {
        key: 'id',
        header: 'Id',
        className: ''
    },
    {
        key: 'agent',
        header: 'Agent',
        className: '',
        render: (value) => `
      <div class="d-flex align-items-center">
        <div class="h-30 w-30 d-flex-center b-r-50 overflow-hidden ${value.bgClass} me-2">
          <img alt="" class="img-fluid" src="${value.image}" onerror="this.src='/images/avatar/1.png'">
        </div>
        ${value.name}
      </div>
    `
    },
    {
        key: 'priority',
        header: 'Priority',
        className: '',
        render: (value) => `
      <span class="badge ${value.class}">${value.text}</span>
    `
    },
    {
        key: 'title',
        header: 'Title',
        className: ''
    },
    {
        key: 'status',
        header: 'Status',
        className: '',
        render: (value) => `
      <span class="badge ${value.class}">${value.text}</span>
    `
    },
    {
        key: 'date',
        header: 'Date',
        className: ''
    },
    {
        key: 'dueDate',
        header: 'Due Date',
        className: ''
    }
]);


const handleEdit = (item) => {
    currentEditingTicket.value = item;


    editTitle.value = item.title;
    editClient.value = item.agent.name;
    editPriority.value = item.priority.text;
    editStatus.value = item.status.text;
    editDate.value = formatDateForInput(item.date);
    editDueDate.value = formatDateForInput(item.dueDate);

    showEditModal.value = true;
};

const handleDelete = (item) => {

    currentDeletingTicket.value = item;
    showDeleteModal.value = true;
};

const handleView = () => {


};

const breadcrumbItems = computed(() => ({
    title: "Ticket",
    items: [
        {label: "Apps", icon: PhStack},
        {label: "Ticket Page"},
        {label: "Ticket", active: true}
    ],
}));
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>
            <b-container fluid>
                <b-row class="ticket-app">
                    <b-col lg="6">
                        <b-row>
                            <b-col sm="6" v-for="(ticket, index) in ticketCards" :key="index">
                                <b-card :class="`ticket-card bg-${ticket.bgColor}`" no-body>
                                    <b-card-body>
                                        <ph-circle weight="bold" class="circle-bg-img"/>
                                        <div class="h-50 w-50 d-flex-center b-r-15 bg-white mb-3">
                                            <component
                                                :is="ticket.icon"
                                                weight="bold"
                                                :class="`f-s-25 text-${ticket.bgColor}`"
                                            />
                                        </div>

                                        <p class="f-s-16">{{ ticket.title }}</p>

                                        <div class="d-flex justify-content-between align-items-center">
                                            <h3 class="text-white">{{ ticket.count }}</h3>
                                            <ul class="avatar-group">
                                                <li
                                                    v-for="(avatar, idx) in avatars"
                                                    :key="idx"
                                                    :class="`h-45 w-45 d-flex-center b-r-50 text-bg-${avatar.color} b-2-light position-relative`"
                                                    :title="`User ${idx + 1}`"
                                                >
                  <span
                      :class="`position-absolute top-0 start-2 p-1 bg-${avatar.color} border border-light rounded-circle`"
                  ></span>
                                                    <img
                                                        :src="avatar.img"
                                                        alt="Avatar"
                                                        class="img-fluid b-r-50 overflow-hidden"
                                                    />
                                                </li>

                                                <li
                                                    class="bg-white text-dark h-35 w-35 d-flex-center b-r-50"
                                                    title="5 More"
                                                >
                                                    5+
                                                </li>
                                            </ul>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col lg="6">
                        <b-card class="create-ticket-card" no-body>
                            <b-card-body>
                                <b-col xl="12">
                                    <b-row class="align-items-center">
                                        <b-col sm="7" cols="12">
                                            <div class="ticket-create">
                                                <h5 class="mb-2">The Ticket Component</h5>
                                                <p class="mb-5 mt-3 text-secondary">
                                                    Provide a more detailed explanation of the issue. Describe what is
                                                    happening
                                                    versus what should happen. If it's a feature request, explain the
                                                    desired outcome
                                                    and why it's needed.
                                                </p>
                                                <b-button variant="primary" @click="showModal = true">Create Ticket
                                                </b-button>
                                            </div>
                                        </b-col>

                                        <b-col sm="5" cols="12">
                                            <img
                                                src="/images/icons/ticket.png"
                                                alt="ticket"
                                                class="img-fluid w-300 d-block m-auto"
                                            />
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-card-body>
                        </b-card>
                        <h5 class="ms-3">Top Category</h5>

                        <swiper
                            :modules="[Autoplay]"
                            :slides-per-view="2"
                            :space-between="10"
                            :loop="true"
                            :autoplay="{ delay: 2000, disableOnInteraction: false }"
                            class="ticket-slider"
                        >
                            <swiper-slide
                                v-for="(item, index) in categories"
                                :key="index"
                                class="p-2"
                            >
                                <div class="ticket-catagory p-3 text-center">
                                    <h6 class="mb-0">{{ item.title }}</h6>
                                    <span class="badge text-light-success">{{ item.count }}</span>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </b-col>

                    <b-col cols="12" class="mt-4">
                        <CustomDataTable
                            class="w-100 display ticket-app-table dataTable no-footer"
                            title="Tickets"
                            description=""
                            :key="ticketData.length"
                            :columns="columns"
                            :data="ticketData"
                            :show-actions="true"
                            :on-edit="handleEdit"
                            :on-delete="handleDelete"
                            :on-view="handleView"
                            row-key="id"
                            class-name="ticket-datatable"
                            card-class-name="card"
                            table-class-name="w-100 display ticket-app-table align-middle mb-0"
                            :page-length="10"
                            :show-length-menu="true"
                        />
                    </b-col>

                </b-row>

                <b-modal
                    v-model="showModal"
                    title="Add Ticket"
                    title-class="text-white"
                    header-class="bg-primary"
                    centered
                    ok-title="Save changes"
                    ok-variant="primary"
                    cancel-title="Close"
                    cancel-variant="secondary"
                    @ok="saveTicket"
                    @hidden="resetForm"
                >
                    <b-form class="app-form">
                        <b-row class="g-2">
                            <b-col cols="12">
                                <b-form-group label="Title">
                                    <b-form-input v-model="title" placeholder="Enter ticket title" required/>
                                </b-form-group>
                            </b-col>

                            <b-col cols="12">
                                <b-form-group label="Client">
                                    <b-form-input v-model="client" placeholder="Enter client name" required/>
                                </b-form-group>
                            </b-col>

                            <b-col md="6">
                                <b-form-group label="Priority">
                                    <b-form-select
                                        v-model="priority"
                                        :options="[
                  { value: '', text: 'Select Priority' },
                  { value: 'Medium', text: 'Medium' },
                  { value: 'Lower', text: 'Lower' },
                  { value: 'High', text: 'High' },
                ]"
                                        required
                                    />
                                </b-form-group>
                            </b-col>

                            <b-col md="6">
                                <b-form-group label="Status">
                                    <b-form-select
                                        v-model="status"
                                        :options="[
                  { value: '', text: 'Select Status' },
                  { value: 'open', text: 'Open' },
                  { value: 'inprogress', text: 'In Progress' },
                  { value: 'closed', text: 'Closed' },
                ]"
                                        required
                                    />
                                </b-form-group>
                            </b-col>

                            <b-col md="6">
                                <b-form-group label="Date">
                                    <b-form-input v-model="date" type="date" required/>
                                </b-form-group>
                            </b-col>

                            <b-col md="6">
                                <b-form-group label="Due Date">
                                    <b-form-input v-model="dueDate" type="date" required/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-form>
                </b-modal>

                <b-modal
                    v-model="showEditModal"
                    title="Edit Ticket"
                    title-class="text-white"
                    header-class="bg-primary"
                    centered
                    ok-title="Save changes"
                    ok-variant="primary"
                    cancel-title="Close"
                    cancel-variant="secondary"
                    @ok="saveEditTicket"
                    @hidden="resetEditForm"
                >
                    <b-form class="app-form">
                        <b-row>
                            <b-col cols="12">
                                <b-form-group label="Title">
                                    <b-form-input v-model="editTitle" placeholder="Title"/>
                                </b-form-group>
                            </b-col>

                            <b-col cols="12">
                                <b-form-group label="Client" class="mt-2">
                                    <b-form-input v-model="editClient" placeholder="Client"/>
                                </b-form-group>
                            </b-col>

                            <b-col md="6">
                                <b-form-group label="Priority"  class="mt-2">
                                    <b-form-select
                                        v-model="editPriority"
                                        :options="[
                  { value: '', text: 'Select Priority' },
                  { value: 'Medium', text: 'Medium' },
                  { value: 'Lower', text: 'Lower' },
                  { value: 'High', text: 'High' },
                ]"
                                    />
                                </b-form-group>
                            </b-col>

                            <b-col md="6">
                                <b-form-group label="Status"  class="mt-2">
                                    <b-form-select
                                        v-model="editStatus"
                                        :options="[
                  { value: '', text: 'Select Status' },
                  { value: 'open', text: 'Open' },
                  { value: 'inprogress', text: 'In Progress' },
                  { value: 'closed', text: 'Closed' },
                ]"
                                    />
                                </b-form-group>
                            </b-col>

                            <b-col md="6">
                                <b-form-group label="Date" class="mt-2">
                                    <b-form-input v-model="editDate" type="date"/>
                                </b-form-group>
                            </b-col>

                            <b-col md="6">
                                <b-form-group label="Due Date" class="mt-2">
                                    <b-form-input v-model="editDueDate" type="date"/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-form>
                </b-modal>

                <b-modal
                    v-model="showDeleteModal"
                    centered
                    hide-header
                    content-class="border-0"
                    body-class="text-center p-4"
                >

                    <img alt="" class="img-fluid mb-3" src="/images/icons/delete-icon.png">
                    <div class="text-center">
                        <h4 class="text-danger f-w-600 mb-2">Are You Sure?</h4>
                        <p class="text-secondary f-s-16">You won't be able to revert this!</p>
                    </div>
                    <template #footer>
                        <div class="text-center mt-4">
                            <b-button variant="secondary" class="me-2" @click="showDeleteModal = false">Close</b-button>
                            <b-button variant="primary" @click="confirmDelete">Yes, Delete it</b-button>
                        </div>
                    </template>

                </b-modal>

            </b-container>
        </main>
    </AppLayout>
</template>

