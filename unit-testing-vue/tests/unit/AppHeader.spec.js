import AppHeader from '@/views/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => { // create a block of test
  // set up your tests
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader) // mount the component
    expect(wrapper.find('button').isVisible()).toBe(false) // assert what the result should be
  })

  test('If user is logged in, show logout button', async () => { // using async/await when waiting on DOM updates
    const wrapper = mount(AppHeader) // mount the component
    await wrapper.setData({ loggedIn: true }) // set data
    expect(wrapper.find('button').isVisible()).toBe(true) // assert what the result should be
  })
})
