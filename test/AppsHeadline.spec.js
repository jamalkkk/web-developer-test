import { mount } from '@vue/test-utils'
import AppsHeadline from '@/components/common/apps-headline/AppsHeadline.vue'

describe('AppsHeadline', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppsHeadline)
    expect(wrapper.vm).toBeTruthy()
  })
})

/* TODO: Add more unit tests */