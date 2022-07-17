import RandomNumber from '@/views/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  const wrapper = mount(RandomNumber)
  test('By default randomNumber data value should be 0', () => {
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  test('randomNumber data value should be between 1 and 10', async () => {
    const wrapper = mount(RandomNumber)
    await wrapper.find('button').trigger('click')
    const randomNumber = parseInt(wrapper.find('span').text())
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  test('randomNumber data value should be between 100 and 200', async () => {
    const wrapper = mount(RandomNumber, {
      props: {
        min: 100,
        max: 200,
      },
    })
    await wrapper.find('button').trigger('click')
    const randomNumber = parseInt(wrapper.find('span').text())
    expect(randomNumber).toBeGreaterThanOrEqual(100)
    expect(randomNumber).toBeLessThanOrEqual(200)
  })
})
