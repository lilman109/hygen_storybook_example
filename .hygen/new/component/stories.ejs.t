---
to: <%= path %>/index.stories.tsx
unless_exists: true
---
import { StoryObj, Meta } from '@storybook/react'
import { <%= name %> } from '.'

<% if (props) { -%>
type Props = Parameters<typeof <%= name %>>[0]

const Component = (args: Props) => {
  return <<%= name %> {...args} />
}
<% } else { -%>
const Component = () => {
  return <<%= name %> />
}
<% } -%>

export default {
  component: Component
} as Meta<typeof <%= name %>>

export const Default: StoryObj<typeof <%= name %>> = {
  args: {}
}

