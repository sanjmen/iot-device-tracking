import { shallowMount } from "@vue/test-utils";
import DeviceMarker from "@/components/DeviceMarker";
import iconImg from "../../src//assets/marker-icon.png";

describe("DeviceMarker.vue", () => {
  const device = {
    ID: "thsOfugG",
    Geometry: {
      Type: "Point",
      Coordinates: [-3.1002761187152714, -44.73816434283549]
    }
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DeviceMarker, {
      propsData: { device }
    });
  });

  test("DeviceMarker component is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("DeviceMarker settings are correct", () => {
    expect(wrapper.vm.device.Geometry.Coordinates).toEqual(
      device.Geometry.Coordinates
    );
  });

  test("DeviceMarker data is correct", () => {
    expect(wrapper.vm.$data.iconUrl).toBe(iconImg);
  });
});
