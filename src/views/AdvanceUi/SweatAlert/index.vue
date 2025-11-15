<script setup>
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BButton
} from "bootstrap-vue-next";
import Swal from "sweetalert2";
import AppLayout from "@/views/AppLayout.vue";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";




const showAlert1 = () => Swal.fire("Any fool can use a computer");

const showAlert2 = () =>
    Swal.fire("The Internet?", "That thing is still around?", "question");

const showAlert3 = () => Swal.fire("Good job!", "You clicked the button!", "success");

const showAlert4 = () =>
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });

const showAlert5 = () =>
    Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: { popup: "animate__animated animate__fadeInDown" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" }
    });

const showAlert6 = () =>
    Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "/images/blog-app/08.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
    });

const showAlert7 = () =>
    Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: { autocapitalize: "off" },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: (login) => new Promise((resolve) => setTimeout(() => resolve(login), 1000))
    });

const showAlert8 = async () => {
    const { value: step1 } = await Swal.fire({
        title: "Step 1",
        input: "text",
        inputLabel: "Enter your name",
        showCancelButton: true
    });
    if (step1) {
        await Swal.fire({
            title: "Step 2",
            text: `Hello ${step1}!`,
            icon: "success"
        });
    }
};

const showAlert9 = () => {
    let timerInterval;
    Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b>2000</b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
                const timerLeft = Swal.getTimerLeft();
                if (timerLeft !== undefined) {
                    Swal.update({
                        html: `I will close in <b>${timerLeft}</b> milliseconds.`
                    });
                }
            }, 100);
        },
        willClose: () => clearInterval(timerInterval)
    });
};

const showHtmlAlert = () =>
    Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html: `
      You can use <b>bold text</b>,
      <a href="//sweetalert2.github.io">links</a>
      and other HTML tags
    `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `<i class="fa fa-thumbs-up"></i> Great!`,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `<i class="fa fa-thumbs-down"></i>`,
        cancelButtonAriaLabel: "Thumbs down"
    });

const showTriggerConfirm = () =>
    Swal.fire({
        title: "Are you sure?",
        text: "You won’t be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
    });

const showApproveConfirm = () =>
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
    });

const showEmailAlert = () =>
    Swal.fire({
        title: "Enter your email address",
        input: "email",
        inputPlaceholder: "example@mail.com",
        showCancelButton: true,
        confirmButtonText: "Submit"
    }).then((result) => {
        if (result.value) {
            Swal.fire(`Email submitted: ${result.value}`);
        }
    });

const showSelectAlert = () =>
    Swal.fire({
        title: "Select your country",
        input: "select",
        inputOptions: {
            india: "India",
            usa: "United States",
            uk: "United Kingdom",
            canada: "Canada"
        },
        inputPlaceholder: "Select a country",
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire(`You selected: ${result.value}`);
        }
    });

const showRangeAlert = () =>
    Swal.fire({
        title: "Rate your experience",
        input: "range",
        inputAttributes: { min: 0, max: 10, step: 1 },
        inputValue: 5
    }).then((result) => {
        if (result.value !== undefined) {
            Swal.fire(`You rated: ${result.value}/10`);
        }
    });

const fullAlertList = [
    { title: "Basic Example", text: "click_1", variant: "primary", onClick: showAlert1 },
    { title: "A title with a text under", text: "click_2", variant: "secondary", onClick: showAlert2 },
    { title: "A success message!", text: "click_3", variant: "success", onClick: showAlert3 },
    { title: "A custom positioned dialog", text: "click_4", variant: "warning", onClick: showAlert4 },
    { title: "Custom animation", text: "click_5", variant: "info", onClick: showAlert5 },
    { title: "A message with custom Image Header", text: "click_6", variant: "danger", onClick: showAlert6 },
    { title: "Ajax request example", text: "click_7", variant: "secondary", onClick: showAlert7 },
    { title: "Modals (queue) example", text: "click_8", variant: "danger", onClick: showAlert8 },
    { title: "A message with auto close timer", text: "click_9", variant: "info", onClick: showAlert9 },
    { title: "Custom HTML description and buttons", text: "click_10", variant: "primary", onClick: showHtmlAlert },
    { title: "Confirmation With Triggers", text: "click_11", variant: "success", onClick: showTriggerConfirm },
    { title: "Confirmation With Approvals", text: "click_12", variant: "warning", onClick: showApproveConfirm },
    { title: "Input email validation", text: "click_13", variant: "info", onClick: showEmailAlert },
    { title: "Select dropdown example", text: "click_14", variant: "secondary", onClick: showSelectAlert },
    { title: "Range slider example", text: "click_15", variant: "success", onClick: showRangeAlert },

];

const breadcrumbItems = {
    title: "Sweet Alert",
    items: [
        { label: " Advance UI ", icon: PhBriefcase },
        { label: "Sweet Alert", active: true }
    ]
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems" />
                <b-row>
                    <b-col
                        v-for="(item, index) in fullAlertList"
                        :key="index"
                        sm="12"
                        md="6"
                        xl="4"
                    >
                        <b-card class="equal-card" no-body>
                            <b-card-header>
                                <h5>{{ item.title }}</h5>
                                <p class="mb-0 text-secondary">
                                    if you want to keep this sweet alert then you can keep it using
                                    <span class="text-danger">{{ item.text }}</span>
                                </p>
                            </b-card-header>
                            <b-card-body>
                                <b-button :variant="item.variant" @click="item.onClick">
                                    Click Now
                                </b-button>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>


