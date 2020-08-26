<template>
  <div>
    <header class="header">
      <p>Devices Tracking</p>
    </header>
    <div id="app">
      <section v-if="errored">
        <p>
          We're sorry, we're not able to retrieve this information at the
          moment, please try back later
        </p>
      </section>

      <section v-else>
        <div v-if="loading">Loading...</div>
        <Map
          v-else
          :center="{ lat, lng }"
          :zoom="zoom"
          :devices="devices"
        ></Map>
      </section>
    </div>
  </div>
</template>

<script>
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
      loading: true,
      errored: false,
      zoom: 6
    };
  },
  mounted() {
    fetch(
      "https://gist.githubusercontent.com/sanjmen/bd0ae432b98a746887dff5bc790818cd/raw/1d8363b1577e270af0765f8d99754a2b044874a3/devices.json"
    )
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            this.devices = data;
            this.isLoading = false;
          });
        } else {
          this.errored = true;
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch(error => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
}

.header {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0.25rem;
  font-size: 16px;
  line-height: 1.25;
  color: hsla(0, 0%, 100%, 0.7);
  background-color: #24292e;
  text-transform: capitalize;
}
</style>
