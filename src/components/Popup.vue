<template>
  <l-popup>
    <div class="marker-popup-header">
      <p class="marker-id">ID: {{ device.ID }}</p>
      <p class="marker-name">Name: {{ device.Name }}</p>
    </div>
    <div class="device-date">
      <p>{{ getDateStr(device.Date) }}</p>
    </div>
    <div class="marker-popup-info">
      <font-awesome-layers class="device-status">
        <font-awesome-icon
          class="first-row"
          :icon="status.icon"
          size="2x"
          :style="{ color: status.color }"
        />
        <font-awesome-layers-text
          class="gray8"
          transform="down-32"
          :value="status.value"
        />
      </font-awesome-layers>
      <font-awesome-layers class="device-temperature">
        <font-awesome-icon
          class="first-column second-row"
          size="3x"
          transform="shrink-4"
          :icon="temperature.icon"
          :style="{ color: temperature.color }"
        />
        <font-awesome-layers-text
          class="gray8"
          transform="down-32 right-4"
          :value="temperature.value + temperature.unit"
        />
      </font-awesome-layers>

      <font-awesome-layers class="device-battery">
        <font-awesome-icon
          class="first-column second-row"
          :icon="battery.icon"
          rotation="270"
          size="2x"
          transform="shrink-2"
          :style="{ color: battery.color }"
        />
        <font-awesome-layers-text
          class="gray8"
          :value="battery.value + battery.unit"
          transform="down-32"
        />
      </font-awesome-layers>
    </div>
    <div class="device-link">
      <a :href="device.Share">LINK</a>
    </div>
  </l-popup>
</template>

<script>
import { LPopup } from "vue2-leaflet";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
import {
  faCircle,
  faTimesCircle,
  faThermometerEmpty,
  faBatteryEmpty,
  faThermometerFull,
  faBatteryFull,
  faThermometerHalf,
  faBatteryHalf,
  faThermometerQuarter,
  faBatteryQuarter,
  faThermometerThreeQuarters,
  faBatteryThreeQuarters
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Popup",
  components: {
    LPopup,
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText
  },
  props: {
    device: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getIconColor(type, level) {
      const LEVELS_MAP = {
        0: {
          temperature: faThermometerEmpty,
          battery: faBatteryEmpty,
          color: "#e81309"
        },
        25: {
          temperature: faThermometerQuarter,
          battery: faBatteryQuarter,
          color: "#EFAF13"
        },
        50: {
          temperature: faThermometerHalf,
          battery: faBatteryHalf,
          color: "#30b455"
        },
        75: {
          temperature: faThermometerThreeQuarters,
          battery: faBatteryThreeQuarters,
          color: "#30b455"
        },
        100: {
          temperature: faThermometerFull,
          battery: faBatteryFull,
          color: "#30b455"
        }
      };
      let obj = null;
      let unit = "ºC";
      if (type == "battery") {
        level = level * 100;
        unit = "%";
      }
      switch (true) {
        case level == 0:
          obj = LEVELS_MAP[0];
          break;
        case level > 0 && level <= 25:
          obj = LEVELS_MAP[25];
          break;
        case level > 25 && level <= 50:
          obj = LEVELS_MAP[50];
          break;
        case level > 50 && level <= 75:
          obj = LEVELS_MAP[75];
          break;
        case level > 75 && level <= 100:
          obj = LEVELS_MAP[100];
          break;
        default:
          obj = LEVELS_MAP[0];
          break;
      }
      return {
        icon: obj[type],
        color: obj.color,
        value: Number(level).toFixed(2),
        unit: unit
      };
    }
  },
  computed: {
    status() {
      return this.device.Active
        ? { value: "active", icon: faCircle, color: "#30b455" }
        : { value: "inactive", icon: faTimesCircle, color: "#e81309" };
    },
    battery() {
      return this.getIconColor("battery", this.device.Battery);
    },
    temperature() {
      return this.getIconColor("temperature", this.device.Temperature);
    },
    getDateStr() {
      return date => {
        return new Date(date).toUTCString();
      };
    }
  }
};
</script>

<style scoped>
.map {
  height: 800px;
  padding: 1em;
  width: 95%;
}

.marker-popup-header {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  font-weight: bold;
  font-size: 0.785rem;
  border-bottom: 1px solid;
  padding: 0.5rem 0 0.5rem 0;
}

.marker-id {
  margin: 0 1rem 0 0;
}

.marker-name {
  margin: 0 0 0 1rem;
}

.marker-popup-info {
  padding: 1rem 0 2rem 0;
  display: grid;
  grid-auto-columns: minmax(50px, auto);
  grid-auto-rows: minmax(50px, auto);
}

.device-date {
  border-bottom: 1px solid;
  padding: 0.25rem 0 0.25rem 0;
  text-align: center;
}

.device-battery,
.device-status,
.device-temperature {
  height: 100%;
  width: 100%;
  grid-row: 1;
}

.device-status {
  grid-column: 1;
}

.device-temperature {
  grid-column: 2;
}

.device-battery {
  grid-column: 3;
}

.device-link {
  border-top: 1px solid;
  padding: 0.5rem 0 0.25rem 0;
  text-align: end;
}
</style>
