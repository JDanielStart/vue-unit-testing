import { shallowMount } from '@vue/test-utils'
import HelloWorldVue from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders hello world component', () => {
    //Montamos el código a probar
    const wrapper = shallowMount(HelloWorldVue)

    //Buscamos dentro del código la clase hello
    const component = wrapper.find('.hello')

    //Comprobamos que exista
    expect(component.classes()).toContain('hello')
  })
})
