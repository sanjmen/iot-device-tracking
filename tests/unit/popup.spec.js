import { shallowMount } from "@vue/test-utils";
import Popup from "@/components/Popup";

describe("Popup.vue", () => {
  const device = {
    ID: "rNWZHIfc",
    Name: "device_1999",
    Active: true,
    Geometry: {
      Type: "Point",
      Coordinates: [-86.44504884003214, 77.05690245350308]
    },
    Share: "https://stlk.it/rNWZHIfc",
    Date: "2019-03-16T21:08:11+01:00",
    Temperature: 34.43,
    Battery: 0.78
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Popup, {
      propsData: { device }
    });
  });

  test("Popup component is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("Popup settings are correct", () => {
    expect(wrapper.vm.device.Battery).toEqual(device.Battery);
  });
});
