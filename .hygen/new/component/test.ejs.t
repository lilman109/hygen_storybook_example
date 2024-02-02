---
to: <%= path %>/<%= name %>.test.tsx
unless_exists: true
---
import { composeStories } from '@storybook/testing-react'
import { axe, toHaveNoViolations } from 'jest-axe'
import * as <%= name %>Stories from './index.stories'
import { render } from '@testing-library/react'

expect.extend(toHaveNoViolations)
const { Default } = composeStories(<%= name %>Stories)

describe('<%= name %>', () => {
  test('Accessibility check', async () => {
    const { container } = render(<Default />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

