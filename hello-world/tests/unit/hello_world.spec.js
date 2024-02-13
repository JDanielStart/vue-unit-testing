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
    expect(wrapper.vm.counter).toBe(0)

    wrapper.vm.increment()
    expect(wrapper.vm.counter).toBe(1)
  })
  it('button click should increment and it should be rendered', async () => {
    const wrapper = shallowMount(HelloWorldVue)

    const component = wrapper.find('#but-increment')
    await component.trigger('click')

    expect(wrapper.find('#header-counter').text()).toBe('counter: 1')
    expect(wrapper.vm.counter).toBe(1)
  })
})
