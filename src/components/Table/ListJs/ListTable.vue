<script setup>
import {ref, computed} from "vue";
import {
    BCard,
    BCardBody,
    BCardHeader,
    BCol,
    BRow,
    BButton,
    BImg, BFormCheckbox, BFormInput
} from "bootstrap-vue-next";


const searchQuery = ref("");
const sortByName = ref(false);

const userData = [
    {id: 1, name: "Olive Yew", born: "1986", img: "07.png"},
    {id: 2, name: "Olive Yew", born: "1957", img: "07.png"},
    {id: 3, name: "Allie Grater", born: "1860", img: "1.png"},
    {id: 4, name: "Rita Book", born: "1976", img: "16.png"},
    {id: 5, name: "Rose Bush", born: "1960", img: "4.png"},
];


const filteredAndSortedUsers = computed(() => {
    let result = [...userData];

    if (searchQuery.value.trim()) {
        result = result.filter(
            (u) =>
                u.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                u.born.includes(searchQuery.value)
        );
    }

    if (sortByName.value) {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
});

const toggleSort = () => {
    sortByName.value = !sortByName.value;
};
</script>

<template>
    <b-col lg="4">
        <b-card no-body>
            <b-card-header>
                <h5>List Table</h5>
            </b-card-header>
            <BCardBody>
                <b-row class="align-items-center mb-3">
                    <b-col cols="12" sm>
                        <b-form-input
                            type="search"
                            placeholder="Search..."
                            v-model="searchQuery"
                        />
                    </b-col>
                    <b-col cols="12" sm="auto" class="mt-2 mt-sm-0">
                        <b-button variant="secondary" @click="toggleSort">
                            Sort by name
                        </b-button>
                    </b-col>
                </b-row>


                <div class="list list-tables">
                    <template v-if="filteredAndSortedUsers.length > 0">
                        <b-row
                            v-for="user in filteredAndSortedUsers"
                            :key="user.id"
                            class="d-flex align-items-center mt-2"
                        >
                            <b-col cols="auto">
                                <b-form-checkbox/>
                            </b-col>
                            <b-col class="name">
                                <p class="mb-0">{{ user.name }}</p>
                                <h6 class="fw-bold born">{{ user.born }}</h6>
                            </b-col>
                            <b-col cols="auto">
                                <div
                                    class="h-25 w-25 d-flex-center b-r-50 overflow-hidden text-bg-secondary"
                                >
                                    <b-Img
                                        :src="`/images/avatar/${user.img}`"
                                        alt="avatar"
                                        width="40"
                                        height="40"
                                        fluid
                                    />
                                </div>
                            </b-col>
                        </b-row>
                    </template>
                    <template v-else>
                        <p class="text-center text-muted">No results found</p>
                    </template>
                </div>
            </BCardBody>
        </b-card>
    </b-col>
</template>


