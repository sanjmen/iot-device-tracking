<template>
  <div class="map">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution" />
      <DeviceMarker
        v-for="device in devices"
        :device="device"
        :key="device.ID"
      />
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import DeviceMarker from "./DeviceMarker.vue";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    DeviceMarker
  },
  props: {
    center: {
      type: Object,
      default: () => ({ lat: 0, lng: 0 })
    },
    zoom: {
      type: Number,
      default: 1
    },
    devices: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      map: null,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  }
};
</script>

<style scoped>
.map {
  height: 800px;
  padding: 1em;
  width: 95%;
}
</style>
