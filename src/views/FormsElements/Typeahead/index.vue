<script setup>
import {ref, computed} from "vue";
import {
    BCard,
    BCardBody,
    BCardHeader,
    BCol,
    BContainer, BForm,
    BRow,
} from "bootstrap-vue-next";
import Vue3SimpleTypeahead from "vue3-simple-typeahead";
import "vue3-simple-typeahead/dist/vue3-simple-typeahead.css";
import {PhCardholder} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {states} from "@/data/formelements/Typeahead/states.js";
import {countries} from "@/data/formelements/Typeahead/countries.js";
import {oscarWinners} from "@/data/formelements/Typeahead/post_1960.js";
import {nbaTeams} from "@/data/formelements/Typeahead/nba.js";
import {nhlTeams} from "@/data/formelements/Typeahead/nhl.js";


const countriesData = ref(countries);

const remoteData = computed(() => oscarWinners.map(movie => movie.value));
const remoteDataWithYear = computed(() => oscarWinners.map(movie => `${movie.year}: ${movie.value}`));
const nbaData = computed(() => nbaTeams.map(team => team.team));
const nhlData = computed(() => nhlTeams.map(team => team.team));

const basicTypeahead = ref(null);
const bloodhoundTypeahead = ref(null);
const prefetchTypeahead = ref(null);
const remoteTypeahead = ref(null);
const remoteWithYearTypeahead = ref(null);
const nbaTypeahead = ref(null);
const nhlTypeahead = ref(null);
const customTypeahead = ref(null);
const scrollableTypeahead = ref(null);

const startsWithFilter = (item, query) => {
    if (!query || query.trim() === "") return false;
    return item.toLowerCase().startsWith(query.toLowerCase());
};

const movieFilter = (item, query) => {
    if (!query || query.trim() === "") return false;
    const searchQuery = query.toLowerCase();


    if (item.toLowerCase().startsWith(searchQuery)) return true;

    const words = item.toLowerCase().split(' ');
    return words.some(word => word.startsWith(searchQuery));
};


const handleInputFocus = (event, typeaheadRef) => {
    if (event.target.value === '' && typeaheadRef && typeaheadRef.value) {
        setTimeout(() => {
            if (typeaheadRef.value && typeaheadRef.value.showSuggestions) {
                typeaheadRef.value.showSuggestions();
            }
        }, 150);
    }
};


const breadcrumbItems = {
    title: "Typeahead",
    items: [
        {label: "Form element", icon: PhCardholder},
        {label: "Typeahead", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
        <b-container fluid>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>
            <b-row class="app-typeahead typeahead-demo">
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>The Basics</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div id="basictype">
                                    <Vue3SimpleTypeahead
                                        ref="basicTypeahead"
                                        id="basic-typeahead-single"
                                        placeholder="States "
                                        :items="states"
                                        :filter-function="startsWithFilter"
                                        :min-input-length="0"
                                        class="form-control"
                                        @focus="(e) => handleInputFocus(e, basicTypeahead)"
                                    />
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>


                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Bloodhound</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div id="bloodhoundtype">
                                    <Vue3SimpleTypeahead
                                        ref="bloodhoundTypeahead"
                                        id="bloodhound-typeahead"
                                        placeholder="States of USA "
                                        :items="states"
                                        :filter-function="startsWithFilter"
                                        :min-input-length="0"
                                        class="form-control"
                                        @focus="(e) => handleInputFocus(e, bloodhoundTypeahead)"
                                    />
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Prefetch</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div id="prefetchtype">
                                    <Vue3SimpleTypeahead
                                        ref="prefetchTypeahead"
                                        id="prefetch-typeahead"
                                        placeholder="Countries "
                                        :items="countriesData"
                                        :filter-function="startsWithFilter"
                                        :min-input-length="0"
                                        class="form-control"
                                        @focus="(e) => handleInputFocus(e, prefetchTypeahead)"
                                    />
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Remote Typeahead - Movie Titles</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div id="remotetype">
                                    <Vue3SimpleTypeahead
                                        ref="remoteTypeahead"
                                        id="remote-typeahead"
                                        placeholder="Oscar winners (1961-2012) "
                                        :items="remoteData"
                                        :filter-function="movieFilter"
                                        :min-input-length="0"
                                        class="form-control"
                                        @focus="(e) => handleInputFocus(e, remoteTypeahead)"
                                    />
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Remote Typeahead - With Years</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div id="remotetype-year">
                                    <Vue3SimpleTypeahead
                                        ref="remoteWithYearTypeahead"
                                        id="remote-year-typeahead"
                                        placeholder="Oscar winners with years - Click or type"
                                        :items="remoteDataWithYear"
                                        :filter-function="movieFilter"
                                        :min-input-length="0"
                                        class="form-control"
                                        @focus="(e) => handleInputFocus(e, remoteWithYearTypeahead)"
                                    />
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>NBA Teams</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div id="nbatype">
                                    <Vue3SimpleTypeahead
                                        ref="nbaTypeahead"
                                        id="nba-typeahead"
                                        placeholder="NBA Teams "
                                        :items="nbaData"
                                        :filter-function="startsWithFilter"
                                        :min-input-length="0"
                                        class="form-control"
                                        @focus="(e) => handleInputFocus(e, nbaTypeahead)"
                                    />
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>NHL Teams</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div id="nhltype">
                                    <Vue3SimpleTypeahead
                                        ref="nhlTypeahead"
                                        id="nhl-typeahead"
                                        placeholder="NHL Teams "
                                        :items="nhlData"
                                        :filter-function="startsWithFilter"
                                        :min-input-length="0"
                                        class="form-control"
                                        @focus="(e) => handleInputFocus(e, nhlTypeahead)"
                                    />
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Custom Templates</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div id="customtype-templates">
                                    <Vue3SimpleTypeahead
                                        ref="customTypeahead"
                                        id="custom-typeahead"
                                        placeholder="Oscar winners "
                                        :items="remoteData"
                                        :filter-function="movieFilter"
                                        :min-input-length="0"
                                        class="form-control"
                                        @focus="(e) => handleInputFocus(e, customTypeahead)"
                                    />
                                    <div v-if="!remoteData.length" class="empty-message mt-2">
                                        <i class="ti ti-mood-sad me-2"></i> sorry! Data is not available
                                    </div>
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Scrollable Dropdown Menu</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div class="scrollable-dropdown">
                                    <Vue3SimpleTypeahead
                                        ref="scrollableTypeahead"
                                        id="scrollable-typeahead"
                                        placeholder="Countries"
                                        :items="countriesData"
                                        :filter-function="startsWithFilter"
                                        :min-input-length="0"
                                        class="form-control"
                                        @focus="(e) => handleInputFocus(e, scrollableTypeahead)"
                                    />
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
        </main>
    </AppLayout>
</template>