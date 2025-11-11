<script setup>
import {
    BCard,
    BCardHeader,
    BCardBody,
    BCol,
    BRow,
} from 'bootstrap-vue-next';

const borderStyles = ["border", "border-t", "border-s", "border-e", "border-b"];

const borderSideStyles = [
    "border-0",
    "border-t-0",
    "border-s-0",
    "border-e-0",
    "border-b-0",
];

const borderColors = [
    "b-1-primary",
    "b-1-secondary",
    "b-1-success",
    "b-1-danger",
    "b-1-warning",
    "b-1-info",
    "b-1-light",
    "b-1-dark",
];

const borderWidths = [
    "b-1-primary",
    "b-3-primary",
    "b-5-primary",
    "b-7-primary",
    "b-9-primary",
    "b-11-primary",
    "b-13-primary",
    "b-15-primary",
    "b-16-primary",
];

const borderRadius = ["b-r-5", "b-r-10", "b-r-15", "b-r-20", "b-r-25", "b-r-30"];

const dashedBorders = [
    "dashed-1-primary",
    "dashed-2-secondary",
    "dashed-3-success",
    "dashed-4-warning",
    "dashed-5-danger",
    "dashed-6-dark",
    "dashed-8-info",
];

const dottedBorders = [
    "dotted-1-primary",
    "dotted-2-secondary",
    "dotted-3-success",
    "dotted-4-warning",
    "dotted-5-danger",
    "dotted-6-dark",
    "dotted-8-info",
];

const imageClasses = [
    "rounded",
    "rounded-top",
    "rounded-end",
    "rounded-bottom",
    "rounded-start",
    "rounded-pill",
    "rounded-circle w-120 h-120",
];

const rotateData = [
    { degree: "90°", className: "rotate" },
    { degree: "180°", className: "rotate rotate-180" },
    { degree: "270°", className: "rotate rotate-270" },
    { degree: "-90°", className: "rotate rotate-90-1" },
    { degree: "-180°", className: "rotate rotate-180-1" },
    { degree: "-280°", className: "rotate rotate-280-1" },
];
</script>

<template>
    <b-col cols="12">
        <b-card no-body>
            <b-card-header>
                <h5 class="f-w-600">Radius</h5>
                <div class="text-muted mt-2 f-s-15">
                    using
                    <a href="#" class="text-decoration-underline text-dark">
                        rounded*/rounded-top*/rounded-end*/rounded-bottom*/rounded-start*/rounded-pill*/rounded-circle*
                    </a>
                    class for Radius
                </div>
            </b-card-header>
            <b-card-body>
                <div class="app-example">
                    <img
                        v-for="(cls, index) in imageClasses"
                        :key="index"
                        src="/images/blog-app/01.jpg"
                        :class="cls"
                        alt=""
                    />
                </div>
            </b-card-body>
        </b-card>
    </b-col>

    <b-col cols="12">
        <b-card no-body>
            <b-card-header>
                <h5 class="f-w-600">Border</h5>
                <div class="text-muted mt-2 f-s-15">
                    using
                    <a href="#" class="text-decoration-underline text-dark"> b-* </a>
                    class for border
                </div>
            </b-card-header>
            <b-card-body>
                <div class="app-example">
                    <div v-for="(cls, index) in borderStyles" :key="index" :class="[cls, 'b-r-22']">
                        {{ cls }}
                    </div>
                </div>

                <div class="app-divider-v">
                    <h6>Side Border</h6>
                </div>
                <div class="app-example">
                    <div v-for="(cls, index) in borderSideStyles" :key="index" :class="[cls, 'b-r-22']">
                        {{ cls }}
                    </div>
                </div>

                <div class="app-divider-v">
                    <h6>Border Color</h6>
                </div>
                <div class="app-example">
                    <div v-for="(cls, index) in borderColors" :key="index" :class="[cls, 'p-2', 'b-r-22']">
                        {{ cls }}
                    </div>
                </div>

                <div class="app-divider-v">
                    <h6>Border Width</h6>
                </div>
                <div class="app-example">
                    <div v-for="(cls, index) in borderWidths" :key="index" :class="[cls, 'b-r-22']">
                        {{ cls }}
                    </div>
                </div>

                <div class="app-divider-v">
                    <h6>Border Radius</h6>
                </div>
                <div class="app-example">
                    <div v-for="(cls, index) in borderRadius" :key="index" :class="['b-1-secondary', cls]">
                        {{ cls }}
                    </div>
                </div>

                <div class="app-divider-v">
                    <h6>Border Dashed Style</h6>
                </div>
                <div class="app-example">
                    <div v-for="(cls, index) in dashedBorders" :key="index" :class="cls">
                        {{ cls }}
                    </div>
                </div>

                <div class="app-divider-v">
                    <h6>Border Dotted Style</h6>
                </div>
                <div class="app-example">
                    <div v-for="(cls, index) in dottedBorders" :key="index" :class="cls">
                        {{ cls }}
                    </div>
                </div>
            </b-card-body>
        </b-card>
    </b-col>

    <b-col cols="12">
        <b-card no-body>
            <b-card-header>
                <h5 class="f-w-600">Rotate</h5>
            </b-card-header>
            <b-card-body>
                <b-row>
                    <b-col
                        v-for="(item, index) in rotateData"
                        :key="index"
                        cols="6"
                        sm="4"
                        md="3"
                        lg="2"
                    >
                        <div :class="[item.className, 'b-r-22']">
                            <span>{{ item.degree }}</span>
                        </div>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </b-col>
</template>
