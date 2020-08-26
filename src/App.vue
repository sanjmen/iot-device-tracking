<template>
  <div id="app">
    <Map
      v-if="!isLoading"
      :center="{ lat, lng }"
      :zoom="zoom"
      :devices="devices"
    ></Map>
  </div>
</template>

<script>
import devices from "./data/devices.json";
import Map from "./components/Map.vue";

export default {
  name: "App",
  components: {
    Map
  },
  data() {
    return {
      lat: 47.41322,
      lng: -1.219482,
      devices: [],
      isLoading: true,
      zoom: 6
    };
  },
  mounted() {
    this.fetchDevices();
  },
  methods: {
    fetchDevices() {
      this.devices = devices;
      this.isLoading = false;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
