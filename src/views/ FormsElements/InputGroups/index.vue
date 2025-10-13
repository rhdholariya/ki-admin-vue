<script setup>
import {
    BCard,
    BCardHeader,
    BCardBody,
    BCol,
    BContainer,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupText,
    BButton,
    BFormCheckbox,
    BFormRadio,
    BRow
} from "bootstrap-vue-next";
import {
    PhCardholder, PhCreditCard,
    PhDownload,
    PhLinkBreak,
    PhMagnifyingGlass,
    PhMagnifyingGlassMinus,
    PhClipboardText,
    PhPencil,
    PhPhone,
    PhUsers
} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";

const breadcrumbItems = {
    title: "Input Groups",
    items: [
        {label: "Form element", icon: PhCardholder},
        {label: "Input Groups", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <b-container fluid>
                <b-row>
                    <b-col cols="12">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Basic Input Groups</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="app-form">
                                    <b-form-group class="mb-3" label-for="Left Addon">
                                        <b-input-group>
                                            <b-input-group-text class="b-r-left bg-primary b-1-primary">@
                                            </b-input-group-text>
                                            <b-form-input placeholder="Username"/>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="Right Addon">
                                        <b-input-group>
                                            <b-form-input placeholder="Recipient's username"/>
                                            <b-input-group-text class="b-r-left bg-secondary b-1-secondary">
                                                @example.com
                                            </b-input-group-text>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="Joint Addon">
                                        <b-input-group>
                                            <b-input-group-text class="b-r-left bg-primary b-1-primary">$
                                            </b-input-group-text>
                                            <b-input-group-text class="b-r-left bg-primary b-1-primary">
                                                0.00
                                            </b-input-group-text>
                                            <b-form-input placeholder="Dollar amount"/>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="Left & Right Addon">
                                        <b-input-group>
                                            <b-input-group-text class="b-r-left bg-danger b-1-danger">$
                                            </b-input-group-text>
                                            <b-form-input placeholder="Amount (to the nearest dollar)"/>
                                            <b-input-group-text>.00</b-input-group-text>
                                        </b-input-group>
                                    </b-form-group>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col cols="12">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Phosphor Icons & Advanced Input Groups</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="app-form">
                                    <b-form-group class="mb-3" label-for="Left Addon (Icon)">
                                        <b-input-group>
                                            <b-input-group-text class="b-r-left bg-light-primary b-1-primary">
                                                <PhPencil size="16" weight="bold"/>
                                            </b-input-group-text>
                                            <b-form-input placeholder="Email"/>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="Right Addon (Icon)">
                                        <b-input-group>
                                            <b-form-input placeholder="Recipient's username"/>
                                            <b-input-group-text class="b-r-left bg-light-secondary b-1-primary">
                                                <PhPhone size="16" weight="bold"/>
                                            </b-input-group-text>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="Left Spinner">
                                        <b-input-group>
                                            <b-input-group-text class="b-r-left bg-light-success b-1-primary">
                                                <span class="spinner-border spinner-border-sm"></span>
                                            </b-input-group-text>
                                            <b-form-input placeholder="Loading..."/>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="Right Spinner">
                                        <b-input-group>
                                            <b-form-input placeholder="Loading..."/>
                                            <b-input-group-text class="b-r-left bg-light-warning b-1-warning">
                                                <span class="spinner-border spinner-border-sm text-warning"></span>
                                            </b-input-group-text>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="Joint Addon (Icons)">
                                        <b-input-group>
                                            <b-input-group-text class="b-r-left bg-light-danger b-1-danger">
                                                <PhLinkBreak size="16" weight="bold"/>
                                            </b-input-group-text>
                                            <b-input-group-text class="b-r-left bg-light-danger b-1-danger">
                                                0.00
                                            </b-input-group-text>
                                            <b-form-input/>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="Left & Right Addon (Icons)">
                                        <b-input-group>
                                            <b-input-group-text class="b-r-left bg-light-dark b-1-dark">
                                                <PhMagnifyingGlassMinus size="16" weight="bold"/>
                                            </b-input-group-text>
                                            <b-form-input/>
                                            <b-input-group-text>
                                                <PhMagnifyingGlassMinus size="16" weight="bold"/>
                                            </b-input-group-text>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="Solid style">
                                        <b-input-group>
                                            <b-input-group-text class="b-r-left bg-light-primary b-1-primary">
                                                <PhUsers size="16" weight="bold"/>
                                            </b-input-group-text>
                                            <b-form-input placeholder="999999"/>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="Flat style">
                                        <b-input-group>
                                            <b-input-group-text class="b-r-left bg-light-secondary b-1-secondary">
                                                <PhCreditCard size="16" weight="bold"/>
                                            </b-input-group-text>
                                            <b-form-input/>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="Raise style">
                                        <b-input-group>
                                            <b-input-group-text class="b-r-left bg-light-warning b-1-warning">
                                                <PhDownload size="16" weight="bold"/>
                                            </b-input-group-text>
                                            <b-form-input placeholder="https://www.example.com"/>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="Pill Addon">
                                        <b-input-group class="rounded-pill overflow-hidden">
                                            <b-input-group-text class="b-r-left bg-light-danger b-1-danger">
                                                <PhClipboardText :size="18" weight="bold"/>
                                            </b-input-group-text>
                                            <b-form-input/>
                                            <b-input-group-text>
                                                <PhMagnifyingGlass :size="18" weight="bold"/>
                                            </b-input-group-text>
                                        </b-input-group>
                                    </b-form-group>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Multiple Addons</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="app-form">
                                    <b-input-group class="mb-3">
                                        <b-input-group-text class="b-r-left bg-warning">$</b-input-group-text>
                                        <b-input-group-text class="b-r-left bg-warning">0.00</b-input-group-text>
                                        <b-form-input placeholder="Amount"/>
                                    </b-input-group>

                                    <b-input-group>
                                        <b-form-input/>
                                        <b-input-group-text class="b-r-left bg-danger">$</b-input-group-text>
                                        <b-input-group-text class="b-r-left bg-danger">0.00</b-input-group-text>
                                    </b-input-group>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Checkboxes and Radios</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="app-form">
                                    <b-input-group class="mb-3">
                                        <b-input-group-text class="b-r-left bg-light-primary b-1-primary">
                                            <b-form-checkbox/>
                                        </b-input-group-text>
                                        <b-form-input/>
                                    </b-input-group>
                                    <b-input-group>
                                        <b-input-group-text class="b-r-left bg-light-primary b-1-primary">
                                            <b-form-radio/>
                                        </b-input-group-text>
                                        <b-form-input/>
                                    </b-input-group>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Sizing</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="app-form">
                                    <b-input-group
                                        size="sm"
                                        class="mb-3"
                                    >
                                        <b-input-group-text class="text-light-primary b-r-left">Small
                                        </b-input-group-text>
                                        <b-form-input/>
                                    </b-input-group>

                                    <b-input-group class="mb-3">
                                        <b-input-group-text class="text-light-secondary b-r-left">
                                            Default
                                        </b-input-group-text>
                                        <b-form-input/>
                                    </b-input-group>

                                    <b-input-group size="lg">
                                        <b-input-group-text class="text-light-success b-r-left">Large
                                        </b-input-group-text>
                                        <b-form-input/>
                                    </b-input-group>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Button Addons</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="app-form">
                                    <b-input-group class="mb-3">
                                        <b-button variant="outline-primary">Button</b-button>
                                        <b-form-input/>
                                    </b-input-group>

                                    <b-input-group class="mb-3">
                                        <b-form-input/>
                                        <b-button variant="outline-secondary">Button</b-button>
                                    </b-input-group>

                                    <b-input-group class="mb-3">
                                        <b-button variant="outline-success">Button</b-button>
                                        <b-button variant="outline-success">Button</b-button>
                                        <b-form-input/>
                                    </b-input-group>

                                    <b-input-group>
                                        <b-form-input/>
                                        <b-button variant="outline-danger">Button</b-button>
                                        <b-button variant="outline-danger">Button</b-button>
                                    </b-input-group>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
