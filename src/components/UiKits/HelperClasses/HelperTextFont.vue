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
            typographyStyles: [
                {
                    title: 'Text Align',
                    description: 'text-* class for text align',
                    items: [
                        { class: 'text-lowercase', label: 'Text-Lowercase' },
                        { class: 'text-uppercase', label: 'Text-Uppercase' },
                        { class: 'text-capitalize', label: 'Text-Capitalize' },
                        { class: 'text-center', label: 'Text Align Center' },
                        { class: 'text-start', label: 'Text Align Start' },
                        { class: 'text-end', label: 'Text Align End' },
                    ],
                },
                {
                    title: 'Text Decoration',
                    description: 'text-d-* class for text decoration',
                    items: [
                        { class: 'text-decoration-underline', label: 'underline' },
                        { class: 'text-decoration-line-through', label: 'line-through' },
                        { class: 'text-decoration-overline', label: 'overline' },
                    ],
                },
                {
                    title: 'Font Style',
                    description: 'f-fs-* class for font style',
                    items: [
                        { class: 'fst-normal', label: 'Normal' },
                        { class: 'fst-italic', label: 'Italic' },
                        { class: 'fst-oblique', label: 'Oblique' },
                        { class: 'fst-initial', label: 'Initial' },
                        { class: 'fst-inherit', label: 'Inherit' },
                    ],
                },
                {
                    title: 'Headings',
                    description: 'h1 to h6 class for Headings',
                    items: [
                        { class: 'h1', label: 'h1' },
                        { class: 'h2', label: 'h2' },
                        { class: 'h3', label: 'h3' },
                        { class: 'h4', label: 'h4' },
                        { class: 'h5', label: 'h5' },
                        { class: 'h6', label: 'h6' },
                    ],
                },
                {
                    title: 'Font Weight',
                    description: 'f-fw-* class for font weight',
                    items: [
                        { class: 'f-fw-100', label: '(100)' },
                        { class: 'f-fw-200', label: '(200)' },
                        { class: 'f-fw-300', label: '(300)' },
                        { class: 'f-fw-400', label: '(400)' },
                        { class: 'f-fw-500', label: '(500)' },
                        { class: 'f-fw-600', label: '(600)' },
                        { class: 'f-fw-700', label: '(700)' },
                        { class: 'f-fw-800', label: '(800)' },
                        { class: 'f-fw-900', label: '(900)' },
                    ],
                },
                {
                    title: 'Font Size',
                    description: 'f-s-* class for font size',
                    items: [
                        { class: 'fs-1', label: 'Size-1' },
                        { class: 'fs-2', label: 'Size-2' },
                        { class: 'fs-3', label: 'Size-3' },
                        { class: 'fs-4', label: 'Size-4' },
                        { class: 'fs-5', label: 'Size-5' },
                        { class: 'fs-6', label: 'Size-6' },
                    ],
                },
            ]
        }
    }
}
</script>

<template>
    <b-row>
        <b-col cols="12">
            <b-row>
                <b-col xl="4" v-for="(category, index) in typographyStyles" :key="index">
                    <b-card class="equal-card mb-4" no-body>
                        <b-card-header>
                            <h5 class="f-w-600">{{ category.title }}</h5>
                            <div class="mt-2 f-s-15 text-muted">
                                using
                                <a href="#" class="text-decoration-underline text-dark">
                                    {{ category.description }}
                                </a>
                            </div>
                        </b-card-header>
                        <b-card-body>
                            <div
                                class="p-2"
                                v-for="(item, idx) in category.items"
                                :key="idx"
                            >
                                - {{ category.title }}
                                <span :class="item.class + ' ms-2'">{{ item.label }}</span>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>


