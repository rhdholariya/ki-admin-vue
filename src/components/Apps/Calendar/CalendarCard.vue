<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch, computed } from "vue";
import { BCard, BCardBody } from "bootstrap-vue-next";

import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

// Props for external events and drop remove functionality
const props = defineProps({
  externalEventsRef: {
    type: Object,
    default: null
  },
  dropRemoveRef: {
    type: Object,
    default: null
  }
});

// Reactive refs
const calendarRef = ref(null);
const dropRemoveChecked = ref(false);
let draggableRef = null;

// Computed properties for calendar options
const calendarOptions = computed(() => ({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev,next,addEventButton",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
  },
  customButtons: {
    addEventButton: {
      text: "Add event...",
      click: handleCustomEventAdd,
    },
  },
  editable: true,
  droppable: true,
  selectable: true,
  selectMirror: true,
  eventReceive: handleEventReceive,
  events: [
    { title: "Events", start: "2025-06-01", end: "2025-06-02" },
    { title: "Events", start: "2025-06-08", end: "2025-06-12" },
    { title: "Meeting", start: "2025-06-12T10:30:00" },
    { title: "Lunch", start: "2025-06-12T12:00:00" },
    { title: "Dinner", start: "2025-06-12T20:00:00" },
    {
      groupId: "availableForMeeting",
      start: "2025-06-11T10:00:00",
      end: "2025-06-11T16:00:00",
      display: "background",
    },
  ],
  height: "auto",
}));

// Event handlers
const handleEventReceive = (info) => {
  if (dropRemoveChecked.value) {
    info.event.remove();
  }
};

const handleCustomEventAdd = () => {
  const dateStr = prompt("Enter a date in YYYY-MM-DD format");
  const date = new Date(dateStr + "T00:00:00");

  if (!isNaN(date.valueOf())) {
    const calendarApi = calendarRef.value.getApi();
    calendarApi.addEvent({
      title: "Dynamic Event",
      start: date,
      allDay: true,
    });
    alert("Event added.");
  } else {
    alert("Invalid date.");
  }
};

// Initialize draggable functionality
const initializeDraggable = () => {
  const externalElement = props.externalEventsRef;
  
  if (externalElement && !draggableRef) {
    draggableRef = new Draggable(externalElement, {
      itemSelector: ".fc-event",
      eventData: (el) => {
        return {
          title: el.innerText.trim(),
          className: el.getAttribute("data-classname") || "",
        };
      },
    });
  }
};

// Watch for external events ref changes
watch(() => props.externalEventsRef, (newRef) => {
  if (newRef) {
    nextTick(() => {
      initializeDraggable();
    });
  }
}, { immediate: true });

// Watch for drop remove ref changes
watch(() => props.dropRemoveRef, (newRef) => {
  if (newRef) {
    // Watch for checkbox changes
    watch(() => newRef.checked, (checked) => {
      dropRemoveChecked.value = checked;
    }, { immediate: true });
  }
}, { immediate: true });

onMounted(() => {
  nextTick(() => {
    initializeDraggable();
  });
});

onBeforeUnmount(() => {
  if (draggableRef) {
    draggableRef.destroy();
    draggableRef = null;
  }
});
</script>

<template>
  <b-card>
    <b-card-body class="app-calendar">
      <FullCalendar ref="calendarRef" :options="calendarOptions" />
    </b-card-body>
  </b-card>
</template>
