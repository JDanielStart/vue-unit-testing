import { shallowMount } from "@vue/test-utils"

import QRCodeInputVue from "@/components/QRCodeInput.vue"

describe('QRCodeInput.vue', () => {
  describe('mounting a component', () => {
    it('renderds qr code input component', () => {
      const wrapper = shallowMount(QRCodeInputVue)

      const component = wrapper.find('.hello')

      expect(component.classes()).toContain('hello')
    })
  })

  describe('render qr code input component with its dependencies', () => {
    const store = createStore({
      state() {
        return {count: 1}
      }
    })

    const wrapper = shallowMount(QRCodeInputVue,
      {
        global: {
          plugin: {store}
        }
      }
    )
  })
})
