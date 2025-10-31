<script setup>


import { ref, onMounted } from 'vue'
import { BContainer, BRow, BCol, BCard } from 'bootstrap-vue-next'
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhMapPinLine} from "@phosphor-icons/vue";

// Refs for map containers
const mapRef = ref(null)
const satelliteMapRef = ref(null)
const polygonMapRef = ref(null)
const fusionTableMapRef = ref(null)
const markerMapRef = ref(null)
const overlayMapRef = ref(null)

const loadGoogleMapsScript = () => {
  if (!document.getElementById('googleMaps')) {
    const script = document.createElement('script')
    script.src = 'https://maps.google.com/maps/api/js'
    script.id = 'googleMaps'
    script.async = true
    script.onload = () => initMaps()
    document.body.appendChild(script)
  } else {
    initMaps()
  }
}

const initMaps = () => {
  const { google } = window
  if (!google) return

  // Terrain
  if (mapRef.value) {
    new google.maps.Map(mapRef.value, {
      center: { lat: -12.043333, lng: -77.028333 },
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
    })
  }

  // Satellite
  if (satelliteMapRef.value) {
    new google.maps.Map(satelliteMapRef.value, {
      center: { lat: -12.043333, lng: -77.028333 },
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
    })
  }

  // Polygon
  if (polygonMapRef.value) {
    const polygonMap = new google.maps.Map(polygonMapRef.value, {
      center: { lat: -12.043333, lng: -77.028333 },
      zoom: 12,
    })

    const path = [
      { lat: -12.040397656836609, lng: -77.03373871559225 },
      { lat: -12.040248585302038, lng: -77.03993927003302 },
      { lat: -12.050047116528843, lng: -77.02448169303511 },
      { lat: -12.044804866577001, lng: -77.02154422636042 },
    ]

    const polygon = new google.maps.Polygon({
      paths: path,
      strokeColor: '#BBD8E9',
      strokeOpacity: 1,
      strokeWeight: 3,
      fillColor: '#BBD8E9',
      fillOpacity: 0.6,
    })

    polygon.setMap(polygonMap)
  }

  // Fusion Table Map (GeoJSON)
  if (fusionTableMapRef.value) {
    const fusionMap = new google.maps.Map(fusionTableMapRef.value, {
      center: { lat: 37.0902, lng: -95.7129 },
      zoom: 4,
    })

    fusionMap.data.loadGeoJson(
        'https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_040_00_500k.json'
    )

    fusionMap.data.setStyle({
      fillColor: '#BBD8E9',
      fillOpacity: 0.6,
      strokeWeight: 1,
    })
  }

  // Marker
  if (markerMapRef.value) {
    const markerMap = new google.maps.Map(markerMapRef.value, {
      center: { lat: -12.043333, lng: -77.028333 },
      zoom: 12,
    })

    new google.maps.Marker({
      position: { lat: -12.043333, lng: -77.028333 },
      map: markerMap,
      title: 'Gmap',
    })
  }

  // Overlay
  if (overlayMapRef.value) {
    const overlayMap = new google.maps.Map(overlayMapRef.value, {
      center: { lat: -12.043333, lng: -77.028333 },
      zoom: 12,
    })

    const overlay = new google.maps.OverlayView()
    overlay.onAdd = function () {
      const div = document.createElement('div')
      div.className = 'map-overlay'
      div.innerHTML = 'Map<div class="overlay-arrow above"></div>'

      const panes = this.getPanes()
      if (panes && panes.overlayLayer) {
        panes.overlayLayer.appendChild(div)
      }
    }
    overlay.draw = function () {}
    overlay.setMap(overlayMap)
  }
}

onMounted(() => {
  loadGoogleMapsScript()
})


// Breadcrumb data
const breadcrumbItems = {
  title: "Google Map",
  items: [
    {label: " Map ", icon: PhMapPinLine },
    {label: "Google Map", active: true},
  ],
};
</script>




<template>
<AppLayout>
  <main>
    <Breadcrumb :breadcrumb="breadcrumbItems"/>
    <b-container fluid>
      <b-row>
        <b-col lg="6">
          <b-card>
            <template #header>
              <h5>Terrain Type Map</h5>
            </template>
            <div class="w-100 h-400 rounded" ref="mapRef"></div>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card>
            <template #header>
              <h5>Satellite Type Map</h5>
            </template>
            <div class="w-100 h-400 rounded" ref="satelliteMapRef"></div>
          </b-card>
        </b-col>
      </b-row>

      <!-- Second Row -->
      <b-row>
        <b-col lg="6">
          <b-card>
            <template #header>
              <h5>Polygons</h5>
            </template>
            <div class="w-100 h-400 rounded" ref="polygonMapRef"></div>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card>
            <template #header>
              <h5>Fusion Table Layers</h5>
            </template>
            <div class="w-100 h-400 rounded" ref="fusionTableMapRef"></div>
          </b-card>
        </b-col>
      </b-row>

      <!-- Third Row -->
      <b-row>
        <b-col lg="6">
          <b-card>
            <template #header>
              <h5>Markers Map</h5>
            </template>
            <div class="w-100 h-400 rounded" ref="markerMapRef"></div>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card>
            <template #header>
              <h5>Overlay Map</h5>
            </template>
            <div class="w-100 h-400 rounded" ref="overlayMapRef"></div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</AppLayout>
</template>

