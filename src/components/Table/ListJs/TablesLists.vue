<script setup>
import {ref, computed} from "vue";
import {
    BCard,
    BCardHeader,
    BCardBody,
    BRow,
    BCol,
    BButton,
    BFormInput,
    BFormGroup,
    BTable,
} from "bootstrap-vue-next";
import {IconMail} from "@tabler/icons-vue";
import {PhUser} from "@phosphor-icons/vue";


const sideListData = [
    {id: 1, name: "Olive Yew", description: "This is the content of the email.", time: "28 min", theme: "info"},
    {id: 2, name: "Bea Mine", description: "It enables users to easily.", time: "48 min", theme: "success"},
    {id: 3, name: "Toi Story", description: "Companies can use to convey.", time: "2 hours", theme: "primary"},
    {id: 4, name: "Art Decco", description: "System Software is closer.", time: "1 day", theme: "info"},
];


const searchListData = [
    "Guybrush Threepwood", "Elaine Marley", "LeChuck", "Stan", "Voodoo Lady",
    "Herman Toothrot", "Meathook", "Carla", "Otis", "Rapp Scallion",
    "Rum Rogers Sr.", "Men of Low Moral Fiber", "Murray", "Cannibals",
];


const tableData = [
    {name: "Jonny Stromberg"},
    {name: "Jonas Arnklint"},
    {name: "Martina Elm"},
    {name: "Alex Hunter"},
];


const sideSearch = ref("");
const sortByName = ref(false);
const searchListQuery = ref("");
const tableSearch = ref("");
const tablePage = ref(1);
const pageSize = 2;


const filteredSideList = computed(() => {
    let list = [...sideListData];
    if (sideSearch.value.trim()) {
        list = list.filter((item) =>
            item.name.toLowerCase().includes(sideSearch.value.toLowerCase())
        );
    }
    if (sortByName.value) {
        list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
});

const filteredSearchList = computed(() => {
    if (!searchListQuery.value.trim()) return searchListData;
    return searchListData.filter((name) =>
        name.toLowerCase().includes(searchListQuery.value.toLowerCase())
    );
});

const paginatedTable = computed(() => {
    const filtered = tableData.filter((row) =>
        row.name.toLowerCase().includes(tableSearch.value.toLowerCase())
    );
    const start = (tablePage.value - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
});

const totalPages = computed(() => Math.ceil(tableData.length / pageSize));


const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        tablePage.value = page;
    }
};

const toggleSideSort = () => {
    sortByName.value = !sortByName.value;
};
</script>

<template>
    <b-row>

        <b-col md="6" lg="4">
            <b-card no-body>
                <b-card-header>
                    <h5>Existing List</h5>
                </b-card-header>
                <b-card-body>
                    <b-row class="mb-3">
                        <b-col>
                            <b-form-input
                                v-model="sideSearch"
                                placeholder="Search..."
                                type="search"
                                class="rounded-pill"
                            />
                        </b-col>
                        <b-col sm="auto">
                            <b-button
                                variant="secondary"
                                size="sm"
                                class="rounded-pill"
                                @click="toggleSideSort"
                            >
                                Sort by name
                            </b-button>
                        </b-col>
                    </b-row>

                    <div class="list existing-list">
                        <b-row
                            v-for="item in filteredSideList"
                            :key="item.id"
                            class="align-items-center mb-3"
                        >
                            <b-col cols="auto">
                                <div
                                    :class="`w-40 h-40 d-flex justify-content-center align-items-center rounded-circle bg-${item.theme} text-white position-relative`"
                                >
                                    <span class="fs-5"><ph-user :size="18" weight="fill"/></span>
                                    <span
                                        class="position-absolute end-0 top-0 p-1 bg-light border rounded-circle"
                                    ></span>
                                </div>
                            </b-col>
                            <b-col class="ps-2">
                                <h6 class="link side mb-0">{{ item.name }}</h6>
                                <p class="mb-0 small">{{ item.description }}</p>
                            </b-col>
                            <b-col cols="auto" class="text-muted small">
                                {{ item.time }}
                            </b-col>
                        </b-row>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>


        <b-col md="6" lg="4">
            <b-card no-body>
                <b-card-header>
                    <h5>Search List Table</h5>
                </b-card-header>
                <b-card-body>
                    <b-form-group class="mb-3">
                        <b-form-input
                            v-model="searchListQuery"
                            placeholder="Search..."
                            type="search"
                            class="rounded-pill"
                        />
                    </b-form-group>
                    <ul class="list fuzzy-list ps-3">
                        <li v-for="(name, idx) in filteredSearchList" :key="idx">
                            <p class="name mb-1">{{ name }}</p>
                        </li>
                    </ul>
                </b-card-body>
            </b-card>
        </b-col>


        <b-col md="6" lg="4" >
            <b-card no-body>
                <b-card-header>
                    <h5>Table with Pagination</h5>
                </b-card-header>
                <b-card-body>
                    <b-form-group class="mb-3">
                        <b-form-input
                            v-model="tableSearch"
                            placeholder="Search..."
                            type="search"
                            class="rounded-pill"
                        />
                    </b-form-group>


                    <b-table
                        :items="paginatedTable"
                        :fields="[
              { key: 'name', label: 'Name' },
              { key: 'actions', label: 'Actions' },
            ]"
                        bordered
                        hover
                        small
                        responsive
                        class="align-middle"
                    >
                        <template #cell(name)="row">
                            {{ row.item.name }}
                        </template>

                        <template #cell(actions)>
                            <b-button
                                variant="light"
                                class="rounded-pill d-flex align-items-center"
                            >
                                <icon-mail size="18" class="me-1"/>
                                Message
                            </b-button>
                        </template>
                    </b-table>


                    <div class="list-pagination mt-2 ">
                        <ul class="pagination mb-0 d-inline-flex flex-wrap">
                            <li class="page-item" :class="{ disabled: tablePage === 1 }">
                                <b-button
                                    size="sm"
                                    variant="secondary"
                                    class="me-1 mt-1"
                                    @click="goToPage(tablePage - 1)"
                                >
                                    Prev
                                </b-button>
                            </li>

                            <li
                                v-for="p in totalPages"
                                :key="p"
                                class="page-item"
                                :class="{ active: p === tablePage }"
                            >
                                <b-button
                                    size="sm"
                                    variant="outline-secondary"
                                    class="me-1 mt-1"
                                    @click="goToPage(p)"
                                >
                                    {{ p }}
                                </b-button>
                            </li>

                            <li class="page-item" :class="{ disabled: tablePage === totalPages }">
                                <b-button
                                    size="sm"
                                    variant="secondary"
                                    class="mt-1"
                                    @click="goToPage(tablePage + 1)"
                                >
                                    Next
                                </b-button>
                            </li>
                        </ul>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
