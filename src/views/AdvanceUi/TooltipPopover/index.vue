<script setup>
import { BContainer, BRow, BCol, BCard, BCardHeader, BCardBody, BButton, BTooltip } from "bootstrap-vue-next";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhBriefcase} from "@phosphor-icons/vue";


const tooltipItems = [
  { id: "TooltipTop", label: "Tooltip on top", placement: "top", color: "primary" },
  { id: "TooltipRight", label: "Tooltip on right", placement: "right", color: "secondary" },
  { id: "TooltipBottom", label: "Tooltip on bottom", placement: "bottom", color: "success" },
  { id: "TooltipLeft", label: "Tooltip on left", placement: "left", color: "danger" },
];

const colorTooltips = [
  { id: "TooltipPrimary", label: "Primary", color: "primary", tooltipColor: "#0f626a" },
  { id: "TooltipSecondary", label: "Secondary", color: "secondary", tooltipColor: "#626262" },
  { id: "TooltipSuccess", label: "Success", color: "success", tooltipColor: "#0ab964" },
  { id: "TooltipDanger", label: "Danger", color: "danger", tooltipColor: "#e14e5a" },
  { id: "TooltipWarning", label: "Warning", color: "warning", tooltipColor: "#f9c123", textColor: "#000" },
  { id: "TooltipInfo", label: "Info", color: "info", tooltipColor: "#4196fa" },
  { id: "TooltipLight", label: "Light", color: "light", tooltipColor: "#c8b9d2", textColor: "#000" },
  { id: "TooltipDark", label: "Dark", color: "dark", tooltipColor: "#28232d" },
];
// Breadcrumb data
const breadcrumbItems = {
  title: "Tooltip & Popovers",
  items: [
    {label: " Advance UI ", icon: PhBriefcase},
    {label: "Tooltip & Popovers", active: true},
  ],
};
</script>

<template>
  <AppLayout>
    <main>
  <b-container fluid class="ui-section">
    <Breadcrumb :breadcrumb="breadcrumbItems"/>

    <b-row>
      <!-- Default Tooltips -->
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <h5>Default Tooltips</h5>
          </b-card-header>
          <b-card-body>
            <div class="d-flex flex-wrap gap-3">
              <b-button id="default-tooltip" variant="primary">
                Custom tooltip
              </b-button>
              <b-tooltip target="default-tooltip" placement="top">
                Custom tooltip
              </b-tooltip>

              <b-button variant="secondary" disabled>
                Disabled Tooltips
              </b-button>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Placement -->
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <h5>Placement</h5>
          </b-card-header>
          <b-card-body class="d-flex flex-wrap gap-3">
            <template v-for="item in tooltipItems">
              <b-button :id="item.id" :variant="item.color">
                {{ item.label }}
              </b-button>
              <b-tooltip :target="item.id" :placement="item.placement">
                Custom tooltip
              </b-tooltip>
            </template>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- HTML Tooltip -->
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <h5>HTML Tooltip</h5>
          </b-card-header>
          <b-card-body>
            <b-button id="html-tooltip" variant="warning">Tooltip with HTML</b-button>
            <b-tooltip target="html-tooltip" placement="top">
              <em>Tooltip</em> <u>with</u> <b>HTML</b>
            </b-tooltip>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Colors Tooltips -->
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <h5>Colors Tooltips</h5>
          </b-card-header>
          <b-card-body class="d-flex flex-wrap gap-2">
            <template v-for="item in colorTooltips">
              <b-button :id="item.id" :variant="item.color">
                {{ item.label }}
              </b-button>
              <b-tooltip
                  :target="item.id"
                  placement="top"
                  :style="{
                  '--bs-tooltip-bg': item.tooltipColor,
                  '--bs-tooltip-color': item.textColor || '#fff',
                  '--bs-tooltip-opacity': 1
                }"
              >
                {{ item.label }} tooltip
              </b-tooltip>
            </template>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Custom Popovers -->
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <h5>Custom Popovers</h5>
          </b-card-header>
          <b-card-body>
            <b-button id="popover-focus" variant="warning">
              Dismissible popover
            </b-button>
            <b-tooltip target="popover-focus" placement="top">
              Dismissible popover
            </b-tooltip>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

  </b-container>
    </main>
  </AppLayout>
</template>
