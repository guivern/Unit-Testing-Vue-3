import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  test('Emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    // 1. Find text input
    // const nameInput = wrapper.find('input[type=text]')
    const nameInput = wrapper.find('[data-testid="name-input"]')
    // 2. Set value for text input
    nameInput.setValue('Guillermo Verón')
    // 3. Simulate form submission
    wrapper.trigger('submit')
    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted') // [[{ 'name': 'Guillermo Verón' }]]
    expect(formSubmittedCalls).toHaveLength(1)
    // 5. Assert payload is correct
    const expectPayload = { name: 'Guillermo Verón' }
    expect(formSubmittedCalls[0][0]).toMatchObject(expectPayload);
  })
})
