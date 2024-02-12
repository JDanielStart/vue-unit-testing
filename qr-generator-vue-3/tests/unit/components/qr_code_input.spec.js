import { shallowMount } from '@vue/test-utils'

import QRCodeInputVue from '@/components/QRCodeInput.vue'
import { createStore } from 'vuex'

describe('QRCodeInput.vue', () => {
  describe('mounting a component', () => {
    it('renderds qr code input component', () => {
      const wrapper = shallowMount(QRCodeInputVue)

      const component = wrapper.find('.hello')

      expect(component.classes()).toContain('hello')
    })
  })
  describe('mounting a component with its dependencies', () => {
    const store = createStore({
      state () {
        return {
          count: 1
        }
      }
    })

    const wrapper = shallowMount(QRCodeInputVue,
      {
        global: {
          plugins: [store]
        }
      })

    it('renders generate qr code button with text', () => {
      const component = wrapper.find('#btn-generate')

      expect(component.text()).toBe('Generar QR')
    })
  })
})
