import { mount } from "@vue/test-utils";
import Map from "@/components/Map.vue";

describe("Map.vue", () => {
  const props = { center: { lat: 47.41322, lng: -1.219482 }, zoom: 10 };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Map, {
      propsData: props
    });
  });

  test("Map component is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("Map settings are correct", () => {
    expect(wrapper.vm.center.lat).toEqual(props.center.lat);
    expect(wrapper.vm.zoom).toEqual(props.zoom);
  });

  test("Map component data has a url", () => {
    expect(wrapper.vm.$data.url).toBeTruthy();
  });
});
