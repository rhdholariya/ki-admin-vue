<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BButton } from "bootstrap-vue-next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const pricingPlans = [
    {
        title: "Basic Plans",
        price: 20,
        yearlyPrice: 200,
        imgSrc: "/images/pricing/1.png",
        imgSrcBack: "/images/pricing/1.png",
        bgColor: "secondary",
        isBest: false,
        features: [
            "5 Free Websites",
            "1 GB Hard disk Storage",
            "1 fields",
            "10 User",
            "Email Support",
        ],
    },
    {
        title: "Business Plans",
        price: 80,
        yearlyPrice: 800,
        imgSrc: "/images/pricing/2.png",
        imgSrcBack: "/images/pricing/2.png",
        bgColor: "success",
        isBest: true,
        features: [
            "40 Free Websites",
            "20 GB Hard disk Storage",
            "50 fields",
            "25 User",
            "Email Support",
        ],
    },
    {
        title: "Premium Plans",
        price: 200,
        yearlyPrice: 2000,
        imgSrc: "/images/pricing/3.png",
        imgSrcBack: "/images/pricing/3.png",
        bgColor: "secondary",
        isBest: false,
        features: [
            "Unlimited Websites",
            "40 GB Hard disk Storage",
            "Unlimited fields",
            "40 User",
            "Email Support",
        ],
    },
    {
        title: "Golden Premium Plans",
        price: 500,
        yearlyPrice: 5000,
        imgSrc: "/images/pricing/15.png",
        imgSrcBack: "/images/pricing/15.png",
        bgColor: "success",
        isBest: false,
        features: [
            "Unlimited Websites",
            "40 GB Hard disk Storage",
            "Unlimited fields",
            "Unlimited User",
            "Email Support",
        ],
    },
];
</script>

<template>
    <swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="4"
        :loop="false"

        pagination
        :breakpoints="{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 }
  }"
        class="pricing-swiper"
    >
        <swiper-slide v-for="(plan, index) in pricingPlans" :key="index">
            <div class="flip-pricing">
                <div class="flip-card">
                    <div class="front-pricing card">
                        <div v-if="plan.isBest" class="box-ribbon box-right">
                            <div :class="`ribbonbox box-right ribbon-${plan.bgColor}`">Best</div>
                        </div>

                        <div class="pricing-header">
                            <h6 class="f-w-500 text-dark">{{ plan.title }}</h6>
                            <img :src="plan.imgSrc" class="w-60 h-60 rounded" alt="" />
                        </div>

                        <div class="app-divider-v justify-content-center m-0">
                            <p :class="`price f-w-700 text-${plan.bgColor}`">
                                ${{ plan.price }}
                                <span class="f-w-500 f-s-12">/per Month</span>
                            </p>
                        </div>

                        <div class="pricing-content">
                            <ul class="pricing-list">
                                <li v-for="(feature, i) in plan.features" :key="i">{{ feature }}</li>
                            </ul>
                            <b-button :class="`btn btn-${plan.bgColor} w-100`">Buy Plans</b-button>
                        </div>
                    </div>


                    <div class="back-pricing card">
                        <div class="pricing-header">
                            <h6 class="f-w-500 text-dark">{{ plan.title }}</h6>
                            <img :src="plan.imgSrcBack" class="w-60 h-60 rounded" alt="" />
                        </div>

                        <div class="app-divider-v justify-content-center m-0">
                            <p :class="`price f-w-700 text-${plan.bgColor}`">
                                ${{ plan.yearlyPrice }}
                                <span class="f-w-500 f-s-12">/per Yearly</span>
                            </p>
                        </div>

                        <div class="pricing-content">
                            <ul class="pricing-list">
                                <li v-for="(feature, i) in plan.features" :key="i">{{ feature }}</li>
                            </ul>
                            <b-button :class="`btn btn-${plan.bgColor} w-100`">Buy Plans</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
