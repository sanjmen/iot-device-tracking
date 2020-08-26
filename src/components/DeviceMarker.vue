<template>
  <l-marker :lat-lng="device.Geometry.Coordinates">
    <l-icon :icon-url="iconUrl" />
    <Popup :device="device" />
  </l-marker>
</template>

<script>
import Popup from "./Popup.vue";
import { LMarker, LIcon } from "vue2-leaflet";
import iconImg from "../assets/marker-icon.png";

export default {
  name: "DeviceMarker",
  components: {
    Popup,
    LMarker,
    LIcon
  },
  props: {
    device: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      iconUrl: iconImg
    };
  }
};
</script>

<style scoped></style>
