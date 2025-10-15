<script setup>
import { reactive, onMounted } from 'vue'
import { BContainer, BRow, BCol, BCard, BCardHeader, BCardBody } from 'bootstrap-vue-next'


import { LMap, LTileLayer, LMarker, LPopup, LCircle } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhMapPinLine} from "@phosphor-icons/vue";


delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const mapConfigs = reactive([
  {
    title: 'Basic Map',
    center: [51.505, -0.09],
    zoom: 13,
    markers: [
      { position: [51.505, -0.09], popup: 'Hello World!' }
    ],
    circles: []
  },
  {
    title: 'Multiple Markers',
    center: [50.4501, 30.5234],
    zoom: 10,
    markers: [
      { position: [50.4501, 30.5234], popup: 'Kyiv, Ukraine' },
      { position: [52.2297, 21.0122], popup: 'Warsaw, Poland' }
    ],
    circles: []
  },
  {
    title: 'With Circle',
    center: [51.505, -0.09],
    zoom: 13,
    markers: [
      { position: [51.5, -0.09], popup: 'Marker here!' }
    ],
    circles: [
      {
        center: [51.508, -0.11],
        radius: 500,
        color: 'blue',
        fillColor: '#467FFB',
        fillOpacity: 0.6
      }
    ]
  },
  {
    title: 'World Map',
    center: [0, 0],
    zoom: 2,
    markers: [],
    circles: []
  },
  {
    title: 'USA Map',
    center: [37.8, -96],
    zoom: 4,
    markers: [],
    circles: []
  },
  {
    title: 'Custom Features',
    center: [51.5, -0.09],
    zoom: 13,
    markers: [
      { position: [51.5, -0.09], popup: 'Green marker' },
      { position: [51.495, -0.083], popup: 'Red marker' }
    ],
    circles: []
  }
])


onMounted(() => {
  console.log('Maps initialized')
})


// Breadcrumb data
const breadcrumbItems = {
  title: "Leaflet Map",
  items: [
    {label: " Map ", icon: PhMapPinLine },
    {label: "Leaflet Map", active: true},
  ],
};
</script>


<template>
<AppLayout>
  <main>
    <Breadcrumb :breadcrumb="breadcrumbItems"/>
    <b-container fluid>
      <b-row>
        <b-col lg="6" v-for="(mapConfig, index) in mapConfigs" :key="index">
          <b-card no-body>
            <b-card-header>
              <h5>{{ mapConfig.title }}</h5>
            </b-card-header>
            <b-card-body>
            <div class="map-wrapper" style="height: 400px;">
              <l-map
                  ref="map"
                  :zoom="mapConfig.zoom"
                  :center="mapConfig.center"
                  :use-global-leaflet="false"
              >
                <l-tile-layer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    layer-type="base"
                    name="OpenStreetMap"
                ></l-tile-layer>

                <!-- Markers -->
                <l-marker
                    v-for="(marker, markerIndex) in mapConfig.markers"
                    :key="markerIndex"
                    :lat-lng="marker.position"
                >
                  <l-popup v-if="marker.popup">{{ marker.popup }}</l-popup>
                </l-marker>

                <!-- Circles -->
                <l-circle
                    v-for="(circle, circleIndex) in mapConfig.circles"
                    :key="'circle-' + circleIndex"
                    :lat-lng="circle.center"
                    :radius="circle.radius"
                    :color="circle.color"
                    :fill-color="circle.fillColor"
                    :fill-opacity="circle.fillOpacity"
                />
              </l-map>
            </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</AppLayout>
</template>



