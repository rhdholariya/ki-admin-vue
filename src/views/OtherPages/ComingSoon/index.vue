<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import {
    BContainer,
    BRow,
    BCol,
    BFormInput,
} from 'bootstrap-vue-next'



const timeLeft = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
})

let interval = null


onMounted(() => {
    const deadlineDate = new Date(2026, 11, 31, 23, 59, 59).getTime()

    interval = setInterval(() => {
        const currentDate = new Date().getTime()
        const distance = deadlineDate - currentDate

        if (distance < 0) {
            clearInterval(interval)
        } else {
            timeLeft.value.days = Math.floor(distance / (1000 * 60 * 60 * 24))
            timeLeft.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            timeLeft.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            timeLeft.value.seconds = Math.floor((distance % (1000 * 60)) / 1000)
        }
    }, 1000)
})

onBeforeUnmount(() => {
    if (interval) clearInterval(interval)
})

</script>

<template>
    <div class="bg-light-primary maintenance">
        <b-container fluid>
            <b-row>
                <b-col class="p-0">
                    <div class="coming-soon">
                        <div class="coundown-timmer p-5">
                            <div class="content text-center">
                                <h2 class="text-dark">ki-admin Coming Soon</h2>
                                <p class="font-coming-p">
                                    Our Website Under Construction, We Are Working on it,
                                    We Will Ready to Launch it After
                                </p>
                            </div>


                            <div class="timmer-content justify-content-center align-items-center gap-3 mt-4 d-flex flex-wrap">
                                <div class="time text-center">
                                    <span id="days" class="numbers">{{ timeLeft.days }}</span>
                                    <span>Days</span>
                                </div>
                                <div class="time text-center">
                                    <span id="hours" class="numbers">{{ timeLeft.hours }}</span>
                                    <span>Hours</span>
                                </div>
                                <div class="time text-center">
                                    <span id="minutes" class="numbers">{{ timeLeft.minutes }}</span>
                                    <span>Minutes</span>
                                </div>
                                <div class="time text-center">
                                    <span id="seconds" class="numbers">{{ timeLeft.seconds }}</span>
                                    <span>Seconds</span>
                                </div>
                            </div>


                            <div class="app-form mb-3 mt-4">
                                <b-form-input
                                    class="form-control-lg m-auto text-center coming-soon-input"
                                    id="username"
                                    placeholder="Enter an Email"
                                    type="email"
                                />
                            </div>


                            <RouterLink
                                to="/dashboard/ecommerce"
                                class="btn btn-lg btn-primary mt-3 d-inline-flex align-items-center justify-content-center gap-1"
                            >
                                Subscribe Now
                            </RouterLink>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
