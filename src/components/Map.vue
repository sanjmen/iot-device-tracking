<template>
  <div class="map">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker
        :lat-lng="device.Geometry.Coordinates"
        v-for="device in devices"
        :key="device.ID"
      >
        <l-icon :icon-url="iconUrl" />
        <l-popup>
          <div class="marker-popup">
            <ul>
              <li>id: {{ device.ID }}</li>
              <li>name: {{ device.Name }}</li>
              <li>active: {{ device.Active }}</li>
              <li>
                <a :href="device.Share">{{ device.Share }}</a>
              </li>
              <li>date: {{ device.Date }}</li>
              <li>temperature: {{ device.Temperature }}</li>
              <li>battery: {{ device.Battery }}</li>
            </ul>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from "vue2-leaflet";
import iconImg from "../assets/marker-icon.png";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon
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
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      iconUrl: iconImg
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

.marker-popup > ul {
  list-style: none;
}
</style>
