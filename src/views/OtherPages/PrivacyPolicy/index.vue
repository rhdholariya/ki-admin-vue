<script setup>
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardBody,
} from "bootstrap-vue-next";

import {
    PhArrowElbowDownRight, PhNotepad,
    PhStarFour,
} from "@phosphor-icons/vue";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";

// === Heading
const heading = "What Information do we collect from you?";

// === Paragraphs
const paragraphs = [
    `ki-admin Store ("Company") is committed to safeguarding your privacy. This Privacy Policy applies to information we collect on our website located at gragertsgrocerystore.com (the "Website") our SMS text messaging program and third party text message service (the "SMS Service") our digital coupon service (the "Digital Coupon Program") our customer loyalty program (the "Loyalty Program") and our mobile shopping app (the "ki-admin"). In this Privacy Policy, we refer to the Website, the SMS Service, the Digital Coupon Program, the Loyalty Program and the ki-admin together as the "Services".`,
    `We use this Privacy Policy to clearly disclose to you our privacy practices in a manner that is easy to understand. If there is something you do not understand about our privacy practices, please feel free to contact us at the contact information at the bottom of this Privacy Policy.`,
    `We may change this policy from time to time so please check back often. If we significantly change our collection, use, or disclosure practices, we will try to send you a notice via email if you have provided us with an email address. Please keep in mind that some of the services mentioned specifically in this policy may not be available on the site at this time`,
    `We collect information in several ways. Some of the information we collect is personal to you. Other information is anonymous. We collect the following categories of information:`,
];

// === List Items
const listItems = [
    'During registration on the Website or the ki-admin, we ask for your name and email address',
    'When you sign up for digital coupons, we ask for your mobile phone number',
    'When you edit your profile on the Website or the ki-admin or sign up for our loyalty program, we collect your mailing address and birthdate.',
    'When you report a problem with our site or services we will collect contact information along with a description of your problem',
    'When you contact us via the company email address or the "Contact" link, we will collect your name and email address and any information you provide in the email or message field',
    'When you use our Meal Planner feature, we will save your meal plans for your convenience to use when you log into your account.',
    'When you complete a store survey, we collect your name, email address, location and information about your grocery shopping preferences.',
    'When you fill out an employment application downloaded from our website, we collect employment information, employment history, and education information.',
    'To customize our service for you, we and our partners may collect precise location data, including the real-time geographic location of your computer or device. This location data is collected anonymously in a form that does not personally identify you. We may obtain your consent on your first use of the service. On the ki-admin, for example, we will use your location to associate you with our nearest store to you. You can change your preferences in your profile.',
    'When you visit and navigate our site, use our applications or third party sites, or open our emails, we may collect technical information about your use of our site including IP address, device identifier, the type of browser you use, the files you request and the domain name and country from which you request information.',
];

// === How We Collect
const howWeCollectHeading = "How do we collect information from you?";
const howWeCollectPara = `We collect much of the information listed above directly from you when you submit it on our Website or in the ki-admin. This includes information such as registration information, contact information, and information used in our digital coupon and loyalty programs. If you do not want to share your information, you can choose not to participate in a particular service or activity.`;

// === Last Update
const lastUpdated = "Last update: 11 Sep, 2024";

// === Breadcrumb
const breadcrumbItems = {
    title: "Privacy Policy",
    items: [
        { label: "Other Pages", icon: PhNotepad },
        { label: "Privacy Policy", active: true },
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems" />

                <b-row class="terms-condition-container">
                    <b-col>
                        <b-card no-body>
                            <b-card-body>
                                <h3 class="text-primary mt-3">
                                    <PhStarFour size="20" weight="fill" class="text-primary me-2" />
                                    {{ heading }}
                                </h3>

                                <div class="mt-4">
                                    <!-- Paragraphs -->
                                    <p
                                        v-for="(para, idx) in paragraphs"
                                        :key="idx"
                                        class="text-dark f-s-16 mt-3 corner-arrow"
                                    >
                                        <PhArrowElbowDownRight
                                            size="16"
                                            weight="fill"
                                            class="me-2 text-primary"
                                        />
                                        {{ para }}
                                    </p>

                                    <!-- List Items -->
                                    <ul class="px-5 py-3">
                                        <li
                                            v-for="(item, idx) in listItems"
                                            :key="idx"
                                            class="diamond diamond-bullet-secondary f-s-14 text-secondary"
                                        >
                                            {{ item }}
                                        </li>
                                    </ul>

                                    <!-- How We Collect -->
                                    <h4 class="text-primary mt-3">
                                        <PhStarFour size="18" weight="fill" class="text-primary me-2" />
                                        {{ howWeCollectHeading }}
                                    </h4>

                                    <p class="text-dark f-s-16 mt-3 corner-arrow">
                                        <PhArrowElbowDownRight
                                            size="16"
                                            weight="fill"
                                            class="me-2 text-primary"
                                        />
                                        {{ howWeCollectPara }}
                                    </p>

                                    <!-- Last Updated -->
                                    <p class="text-primary text-end f-w-600 text-d-underline">
                                        {{ lastUpdated }}
                                    </p>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
