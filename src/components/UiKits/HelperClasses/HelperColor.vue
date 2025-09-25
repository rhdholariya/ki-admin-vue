<script>
import {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody
} from 'bootstrap-vue-next'

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BCardHeader,
        BCardBody
    },
    data() {
        return {
            textColors: [
                { class: 'text-primary', label: 'text-primary' },
                { class: 'text-secondary', label: 'text-secondary' },
                { class: 'text-success', label: 'text-success' },
                { class: 'text-danger', label: 'text-danger' },
                { class: 'text-warning', label: 'text-warning' },
                { class: 'text-info', label: 'text-info' },
                { class: 'text-light', label: 'text-light' },
                { class: 'text-dark', label: 'text-dark' },
            ],
            linkColors: [
                { class: 'link-primary', label: 'link-primary' },
                { class: 'link-secondary', label: 'link-secondary' },
                { class: 'link-success', label: 'link-success' },
                { class: 'link-danger', label: 'link-danger' },
                { class: 'link-warning', label: 'link-warning' },
                { class: 'link-info', label: 'link-info' },
                { class: 'link-light', label: 'link-light' },
                { class: 'link-dark', label: 'link-dark' },
            ],
            textBackgrounds: [
                { class: 'txt-bg-primary', label: 'txt-bg-primary' },
                { class: 'txt-bg-secondary', label: 'txt-bg-secondary' },
                { class: 'txt-bg-success', label: 'txt-bg-success' },
                { class: 'txt-bg-danger', label: 'txt-bg-danger' },
                { class: 'txt-bg-warning', label: 'txt-bg-warning' },
                { class: 'txt-bg-info', label: 'txt-bg-info' },
                { class: 'txt-bg-light', label: 'txt-bg-light' },
                { class: 'txt-bg-dark', label: 'txt-bg-dark' },
            ]
        }
    }
}
</script>

<template>
    <b-row>
        <!-- Text Color Card -->
        <b-col cols="12">
            <b-card no-body>
                <b-card-header>
                    <h5 class="f-w-600">Text Color</h5>
                    <div class="mt-2 f-s-15 text-muted">
                        Using
                        <a href="#" class="text-decoration-underline text-dark">text-*</a>
                        class for text color
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
            <span
                v-for="color in textColors"
                :key="color.class"
                :class="`${color.class} p-2`"
            >
              - .{{ color.label }}
            </span>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Link Color Card -->
        <b-col cols="12">
            <b-card no-body>
                <b-card-header>
                    <h5 class="f-w-600">Link Color</h5>
                    <div class="mt-2 f-s-15 text-muted">
                        Using
                        <a href="#" class="text-decoration-underline text-dark">link-*</a>
                        class for link color
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
            <span v-for="color in linkColors" :key="color.class" class="p-2">
              -
              <a :class="`text-decoration-underline ${color.class}`" href="#">
                {{ color.label }}
              </a>
            </span>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Text Background Color Card -->
        <b-col cols="12">
            <b-card no-body>
                <b-card-header>
                    <h5 class="f-w-600">Text Background Color</h5>
                    <div class="mt-2 f-s-15 text-muted">
                        Using
                        <a href="#" class="text-decoration-underline text-dark">txt-bg-*</a>
                        class for light background
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
            <span
                v-for="bg in textBackgrounds"
                :key="bg.class"
                :class="`${bg.class} p-2`"
            >
              - .{{ bg.label }}
            </span>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>


