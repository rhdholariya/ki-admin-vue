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
            paddingSizes: [
                { class: 'pa-2', label: 'Padding-2' },
                { class: 'pa-4', label: 'Padding-4' },
                { class: 'pa-8', label: 'Padding-8' },
                { class: 'pa-10', label: 'Padding-10' },
                { class: 'pa-14', label: 'Padding-14' },
                { class: 'pa-16', label: 'Padding-16' },
            ],
            paddingList: Array.from({ length: 40 }, (_, i) => ({
                class: `pa-${i + 1}`,
                label: `pa-${i + 1}`,
            })),
            sidePaddingList: [
                { type: 'Top', prefix: 'pa-t' },
                { type: 'Start', prefix: 'pa-s' },
                { type: 'End', prefix: 'pa-e' },
                { type: 'Bottom', prefix: 'pa-b' },
            ].map((side) => ({
                type: side.type,
                items: [4, 8, 10, 14, 18, 20, 24, 28, 30, 34, 38, 40].map((size) => ({
                    class: `${side.prefix}-${size}`,
                    label: `${side.type} ${size}`,
                })),
            })),
            marginSizes: [
                { class: 'mg-40', label: 'Margin-40' },
                { class: 'mg-34', label: 'Margin-34' },
                { class: 'mg-30', label: 'Margin-30' },
                { class: 'mg-28', label: 'Margin-28' },
                { class: 'mg-24', label: 'Margin-24' },
                { class: 'mg-20', label: 'Margin-20' },
                { class: 'mg-14', label: 'Margin-14' },
                { class: 'mg-10', label: 'Margin-10' },
                { class: 'mg-4', label: 'Margin-4' },
            ],
            marginList: Array.from({ length: 40 }, (_, i) => ({
                class: `mg-${i + 1}`,
                label: `mg-${i + 1}`,
            })),
            sideMarginList: ['t', 's', 'e', 'b'].map((side) => ({
                type: side.toUpperCase(),
                items: [4, 8, 10, 14, 18, 20, 24, 28, 30, 34, 38, 40].map((size) => ({
                    class: `mg-${side}-${size}`,
                    label: `mg-${side.toUpperCase()}-${size}`,
                })),
            })),
            widthHeightData: [
                { width: 200, height: 200 },
                { width: 150, height: 150 },
                { width: 110, height: 110 },
                { width: 90, height: 90 },
                { width: 80, height: 80 },
                { width: 60, height: 60 },
                { width: 50, height: 50 },
            ],
        }
    }
}
</script>
<template>
    <b-row>
        <b-col cols="12">
            <b-card no-body>
                <b-card-header>
                    <h5 class="f-w-600">Padding</h5>
                    <div class="text-muted mt-2 f-s-15">
                        Using
                        <a href="#" class="text-decoration-underline text-dark">pa-*</a>
                        class for Padding
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="text-center">
                        <b-row>
                            <b-col v-for="(pad, index) in paddingSizes" :key="index">
                                <p :class="`border ${pad.class} b-r-22`">{{ pad.label }}</p>
                            </b-col>
                        </b-row>
                    </div>

                    <div class="app-divider-v">
                        <h6>Padding List</h6>
                    </div>

                    <b-row>
                        <b-col
                            v-for="colIndex in 4"
                            :key="colIndex"
                            md="6"
                            xl="3"
                        >
                            <p v-for="(pad, i) in paddingList.slice((colIndex-1)*10, (colIndex-1)*10 + 10)" :key="i">
                                - {{ pad.label }}
                            </p>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col cols="12">
            <b-card no-body>
                <b-card-header>
                    <h5 class="f-w-600">Side Padding</h5>
                    <div class="text-muted mt-2 f-s-15">
                        Using
                        <a href="#" class="text-decoration-underline text-dark">pd-t-*/pd-s-*/pd-e-*/pd-b-*</a>
                        class for Padding
                    </div>
                </b-card-header>
                <b-card-body>
                    <b-row>
                        <b-col v-for="(side, index) in sidePaddingList" :key="index">
                            <p :class="`border ${side.items[side.items.length - 1]?.class || ''} b-r-22`">
                                {{ side.items[side.items.length - 1]?.label || '' }}
                            </p>
                        </b-col>
                    </b-row>

                    <div class="app-divider-v">
                        <h6>Side Padding List</h6>
                    </div>

                    <b-row>
                        <b-col v-for="(side, index) in sidePaddingList" :key="index" md="6" xl="3">
                            <p>- padding {{ side.type.toLowerCase() }}</p>
                            <p v-for="(item, i) in side.items" :key="i">- {{ item.class }}</p>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col cols="12">
            <b-card>
                <b-card-header>
                    <h5 class="f-w-600">Margin</h5>
                    <div class="text-muted mt-2 f-s-15">
                        Using
                        <a href="#" class="text-decoration-underline text-dark">mg-*</a>
                        class for Margin
                    </div>
                </b-card-header>
                <b-card-body>
                    <b-row>
                        <b-col
                            v-for="(margin, index) in marginSizes"
                            :key="index"
                            class="col-auto mb-2"
                        >
                            <div class="border b-r-22">
                                <div :class="`${margin.class} txt-bg-primary`">{{ margin.label }}</div>
                            </div>
                        </b-col>
                    </b-row>

                    <div class="app-divider-v">
                        <h6>Margin List</h6>
                    </div>

                    <b-row>
                        <b-col
                            v-for="colIndex in 4"
                            :key="colIndex"
                            md="6"
                            xl="3"
                        >
                            <p v-for="(margin, i) in marginList.slice((colIndex-1)*10, (colIndex-1)*10 + 10)" :key="i">
                                - {{ margin.label }}
                            </p>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col cols="12">
            <b-card>
                <b-card-header>
                    <h5 class="f-w-600">Side Margin</h5>
                    <div class="text-muted mt-2 f-s-15">
                        Using
                        <a href="#" class="text-decoration-underline text-dark">mg-t-*/mg-s-*/mg-e-*/mg-b-*</a>
                        class for Margin
                    </div>
                </b-card-header>
                <b-card-body>
                    <b-row>
                        <b-col
                            v-for="(side, index) in sideMarginList"
                            :key="index"
                            class="col mg-2 border b-r-22"
                        >
                            <div :class="side.items[side.items.length - 1]?.class || ''">
                                <p>{{ side.items[side.items.length - 1]?.label || '' }}</p>
                            </div>
                        </b-col>
                    </b-row>

                    <div class="app-divider-v">
                        <h6>Side Margin List</h6>
                    </div>

                    <b-row>
                        <b-col v-for="(side, index) in sideMarginList" :key="index" md="6" xl="3">
                            <p>- Margin {{ side.type.toLowerCase() }}</p>
                            <p v-for="(item, i) in side.items" :key="i">- {{ item.class }}</p>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>


        <b-col cols="12">
            <b-card>
                <b-card-header>
                    <h5 class="f-w-600">Width and Height</h5>
                    <div class="text-muted mt-2 f-s-15">
                        using
                        <a href="#" class="text-decoration-underline text-dark">w-*/h-*</a>
                        class for size
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex justify-content-between flex-wrap">
                        <div
                            v-for="({ width, height }, index) in widthHeightData"
                            :key="index"
                            :class="`w-${width} h-${height} b-2-secondary d-flex-center mb-2 b-r-22`"
                        >
                            {{ width }}*{{ height }}
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>


