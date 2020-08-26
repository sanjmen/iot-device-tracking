import { mount } from "@vue/test-utils";
import Map from "@/components/Map.vue";

describe("Map.vue", () => {
  it("smoke test map", () => {
    const center = { lat: 47.41322, lng: -1.219482 };
    const wrapper = mount(Map, {
      propsData: { center }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
